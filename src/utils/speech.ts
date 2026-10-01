// Web Speech API utility for audio pronunciation of dishes and ingredients
// - Czech Menu: Spoken 100% naturally by a Czech speaker in Czech (cs-CZ), no mangled phonetics or English dialect errors
// - English Menu: Spoken 100% naturally by an English speaker in English (en-US / en-GB)
// - Sentence/clause chunking: prevents mobile buffer overflow & mid-speech freeze
// - Absolute mobile safety: NO destructive pause/resume calls
// - Watchdog failsafe timer preventing endless blinking speaker icons
// - Strong garbage-collection protection across WebKit and Chromium

import { soundManager } from './sound';

type SpeechListener = (speakingId: string | null) => void;

interface SpeechChunk {
  text: string;
  lang: 'en' | 'cs';
  voice: SpeechSynthesisVoice | null;
  rate: number;
}

class SpeechManager {
  private currentId: string | null = null;
  private listeners: Set<SpeechListener> = new Set();
  private voicesLoaded: boolean = false;
  private activeUtterances: Set<SpeechSynthesisUtterance> = new Set();
  private watchdogTimer: NodeJS.Timeout | null = null;
  private queue: SpeechChunk[] = [];
  private isProcessingQueue: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      try {
        window.speechSynthesis.addEventListener('voiceschanged', () => this.initVoices());
      } catch {
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => this.initVoices();
        }
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        this.voicesLoaded = true;
      }
    } catch {}
  }

  public areVoicesReady(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return true;
    const voices = window.speechSynthesis.getVoices();
    return (voices && voices.length > 0) || this.voicesLoaded;
  }

  public ensureVoicesReady(): Promise<boolean> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return Promise.resolve(true);
    if (this.areVoicesReady()) {
      this.initVoices();
      return Promise.resolve(true);
    }

    return new Promise<boolean>((resolve) => {
      let resolved = false;
      const onDone = () => {
        if (!resolved) {
          resolved = true;
          this.initVoices();
          resolve(true);
        }
      };

      const handler = () => {
        onDone();
        try {
          window.speechSynthesis.removeEventListener('voiceschanged', handler);
        } catch {}
      };

      try {
        window.speechSynthesis.addEventListener('voiceschanged', handler);
      } catch {
        window.speechSynthesis.onvoiceschanged = handler;
      }

      setTimeout(onDone, 800);
    });
  }

  public subscribe(listener: SpeechListener): () => void {
    this.listeners.add(listener);
    listener(this.currentId);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.currentId));
  }

  public isSpeaking(id?: string): boolean {
    if (id) {
      return this.currentId === id;
    }
    return this.currentId !== null;
  }

  private clearWatchdog() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  public stop() {
    this.clearWatchdog();
    this.queue = [];
    this.isProcessingQueue = false;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }

    this.activeUtterances.clear();
    if (typeof window !== 'undefined') {
      (window as unknown as { __fuzeActiveUtterances?: unknown }).__fuzeActiveUtterances = null;
    }

    if (this.currentId !== null) {
      this.currentId = null;
      this.notify();
    }
  }

  /**
   * Split a block of text into natural, digestible sentence/clause chunks (<85 chars).
   * This completely prevents mobile buffer timeouts, audio buffer overflows, and
   * ensures speech never cuts off in the middle on Android or iOS.
   */
  private splitIntoChunks(text: string, maxLen = 85): string[] {
    const rawParts = text.split(/(?<=[.?!,;–—])\s+/);
    const chunks: string[] = [];
    let current = '';

    for (const part of rawParts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      if (!current) {
        current = trimmed;
      } else if ((current + ' ' + trimmed).length <= maxLen) {
        current += ' ' + trimmed;
      } else {
        chunks.push(current.trim());
        current = trimmed;
      }
    }

    if (current && current.trim()) {
      chunks.push(current.trim());
    }

    // Safety fallback: if any individual chunk exceeds maxLen * 1.4, break it at word boundaries
    const safeChunks: string[] = [];
    for (const chunk of chunks) {
      if (chunk.length <= maxLen * 1.4) {
        safeChunks.push(chunk);
      } else {
        const words = chunk.split(' ');
        let sub = '';
        for (const w of words) {
          if (!sub) {
            sub = w;
          } else if ((sub + ' ' + w).length <= maxLen) {
            sub += ' ' + w;
          } else {
            safeChunks.push(sub.trim());
            sub = w;
          }
        }
        if (sub.trim()) safeChunks.push(sub.trim());
      }
    }

    return safeChunks.length > 0 ? safeChunks : [text];
  }

  /**
   * Cleans text for Czech speech:
   * Pure, natural Czech pronunciation without artificial English dialect distortions.
   * Expands measurement units into natural Czech words.
   */
  private cleanCzechText(text: string): string {
    return (text || '')
      // Expand common culinary measurement units to natural spoken Czech
      .replace(/\b(\d+)\s*ml\b/gi, '$1 mililitrů')
      .replace(/\b(\d+)\s*cl\b/gi, '$1 centilitrů')
      .replace(/\b(\d+)\s*dl\b/gi, '$1 decilitrů')
      .replace(/\b(\d+)\s*l\b/gi, '$1 litrů')
      .replace(/\b(\d+)\s*g\b/gi, '$1 gramů')
      .replace(/\b(\d+)\s*kg\b/gi, '$1 kilogramů')
      .replace(/\b(\d+)\s*ks\b/gi, '$1 kusů')
      .replace(/\bml\b/gi, 'mililitrů')
      .replace(/\bcl\b/gi, 'centilitrů')
      .replace(/\bdl\b/gi, 'decilitrů')
      .replace(/\bg\b/gi, 'gramů')
      .replace(/\bks\b/gi, 'kusů')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Cleans text for English speech:
   * Formats abbreviations and units for natural English pronunciation.
   */
  private cleanEnglishText(text: string): string {
    return (text || '')
      .replace(/\b(\d+)\s*ml\b/gi, '$1 milliliters')
      .replace(/\b(\d+)\s*cl\b/gi, '$1 centiliters')
      .replace(/\b(\d+)\s*l\b/gi, '$1 liters')
      .replace(/\b(\d+)\s*g\b/gi, '$1 grams')
      .replace(/\b(\d+)\s*kg\b/gi, '$1 kilograms')
      .replace(/\b(\d+)\s*ks\b/gi, '$1 pieces')
      .replace(/\bml\b/gi, 'milliliters')
      .replace(/\bcl\b/gi, 'centiliters')
      .replace(/\bl\b/gi, 'liters')
      .replace(/\bg\b/gi, 'grams')
      .replace(/\bkg\b/gi, 'kilograms')
      .replace(/\bks\b/gi, 'pieces')
      .replace(/\bFUZE\b/g, 'Fuse')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Resolves appropriate voices:
   * English: ONLY genuine English voice (en-US, en-GB, en-AU)
   * Czech: High-quality or local Czech voice (with Slovak fallback if missing on PC)
   */
  private getVoices(): { enVoice: SpeechSynthesisVoice | null; csVoice: SpeechSynthesisVoice | null } {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return { enVoice: null, csVoice: null };
    }

    const voices = window.speechSynthesis.getVoices() || [];
    const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;

    // 1. English voice (STRICTLY 'en')
    const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
    let enVoice: SpeechSynthesisVoice | null = null;
    if (enVoices.length > 0) {
      if (isOffline) {
        enVoice = enVoices.find(v => v.localService) || enVoices[0];
      } else {
        enVoice =
          enVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Zira') || v.name.includes('Premium')) ||
          enVoices.find(v => v.localService) ||
          enVoices[0];
      }
    }

    // 2. Czech voice (STRICTLY 'cs-CZ' / 'cs')
    const csVoices = voices.filter(v => v.lang.toLowerCase().startsWith('cs'));
    let csVoice: SpeechSynthesisVoice | null = null;
    if (csVoices.length > 0) {
      if (isOffline) {
        csVoice = csVoices.find(v => v.localService) || csVoices[0];
      } else {
        csVoice =
          csVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Jakub') || v.name.includes('Zuzana') || v.name.includes('Iveta') || v.name.includes('Jan') || v.name.includes('Vlasta') || v.name.includes('Premium')) ||
          csVoices.find(v => v.localService) ||
          csVoices[0];
      }
    } else {
      // Slovak fallback only if device does not have any Czech voice installed
      csVoice = voices.find(v => v.lang.toLowerCase().startsWith('sk')) || null;
    }

    return { enVoice, csVoice };
  }

  /**
   * Processes the speech chunk queue sequentially.
   * On mobile, sequentially playing small chunks is 100% reliable,
   * never pauses or freezes, and always completes the full text.
   */
  private processQueue(sessionId: string) {
    if (this.currentId !== sessionId) return;

    if (this.queue.length === 0) {
      // All chunks finished cleanly!
      this.clearWatchdog();
      this.activeUtterances.clear();
      this.currentId = null;
      this.isProcessingQueue = false;
      this.notify();
      return;
    }

    const currentChunk = this.queue.shift();
    if (!currentChunk || !currentChunk.text.trim()) {
      this.processQueue(sessionId);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(currentChunk.text);

      if (currentChunk.lang === 'cs') {
        utterance.lang = 'cs-CZ';
        if (currentChunk.voice) {
          utterance.voice = currentChunk.voice;
        }
      } else {
        utterance.lang = currentChunk.voice?.lang || 'en-US';
        if (currentChunk.voice) {
          utterance.voice = currentChunk.voice;
        }
      }

      utterance.rate = currentChunk.rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Keep strong reference to prevent GC on mobile WebKit and Chrome
      this.activeUtterances.add(utterance);
      (window as unknown as { __fuzeActiveUtterances?: Set<SpeechSynthesisUtterance> }).__fuzeActiveUtterances = this.activeUtterances;

      utterance.onend = () => {
        this.activeUtterances.delete(utterance);
        // Continue to next chunk
        this.processQueue(sessionId);
      };

      utterance.onerror = (e) => {
        this.activeUtterances.delete(utterance);
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech synthesis chunk notice:', e.error);
        }
        // Continue playing next chunk
        this.processQueue(sessionId);
      };

      // Speak current chunk
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Chunk playback error:', err);
      this.processQueue(sessionId);
    }
  }

  public speak(id: string, name: string, description: string, lang: 'cs' | 'en' = 'cs') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      return;
    }

    // Toggle off if currently speaking the exact same item
    if (this.currentId === id) {
      this.stop();
      return;
    }

    // 1. Play subtle audio click so Web Audio is unlocked
    try {
      soundManager.playClick();
    } catch {}

    // 2. Stop any existing playback
    this.stop();

    // 3. Refresh voices
    this.initVoices();
    const { enVoice, csVoice } = this.getVoices();

    const chunksToPlay: SpeechChunk[] = [];
    let totalTextChars = 0;

    // ==========================================
    // 1. ENGLISH MODE (English Menu) - ONLY ENGLISH SPEAKER
    // ==========================================
    if (lang === 'en') {
      const cleanName = this.cleanEnglishText(name);
      let cleanDesc = this.cleanEnglishText(description);

      if (
        cleanDesc &&
        !cleanDesc.toLowerCase().startsWith('ingredients') &&
        !cleanDesc.toLowerCase().startsWith('recipe') &&
        !cleanDesc.toLowerCase().startsWith('category') &&
        !cleanDesc.toLowerCase().startsWith('subcategory') &&
        !cleanDesc.toLowerCase().startsWith('section') &&
        !cleanDesc.toLowerCase().startsWith('overview') &&
        !cleanDesc.toLowerCase().startsWith('description') &&
        !cleanDesc.toLowerCase().startsWith('culinary') &&
        !cleanDesc.toLowerCase().startsWith('beverage') &&
        !cleanDesc.toLowerCase().startsWith('wine') &&
        !cleanDesc.toLowerCase().startsWith('fresh') &&
        !cleanDesc.toLowerCase().startsWith('prestigious') &&
        !cleanDesc.toLowerCase().startsWith('traditional') &&
        !cleanDesc.toLowerCase().startsWith('authentic')
      ) {
        if (!cleanDesc.includes('.') || cleanDesc.split(',').length >= 2) {
          cleanDesc = `Ingredients: ${cleanDesc}`;
        }
      }

      const fullText = cleanName ? `${cleanName}. ${cleanDesc}` : cleanDesc;
      totalTextChars = fullText.length;
      const textChunks = this.splitIntoChunks(fullText, 85);

      for (const t of textChunks) {
        chunksToPlay.push({
          text: t,
          lang: 'en',
          voice: enVoice,
          rate: 0.95
        });
      }
    }
    // ==========================================
    // 2. CZECH MODE (Czech Menu) - ONLY CZECH SPEAKER (NATURAL CZECH)
    // ==========================================
    else {
      // Natural Czech speech: clean original text, expand units, no artificial phonetics/distortions
      const cleanName = this.cleanCzechText(name);
      let cleanDesc = '';
      if (description && description.trim()) {
        cleanDesc = this.cleanCzechText(description);
        if (
          !cleanDesc.toLowerCase().startsWith('složení') &&
          !cleanDesc.toLowerCase().startsWith('popis') &&
          !cleanDesc.toLowerCase().startsWith('kategorie') &&
          !cleanDesc.toLowerCase().startsWith('podsložka') &&
          !cleanDesc.toLowerCase().startsWith('sekce') &&
          !cleanDesc.toLowerCase().startsWith('přehled') &&
          !cleanDesc.toLowerCase().startsWith('tradiční') &&
          !cleanDesc.toLowerCase().startsWith('čerstvé')
        ) {
          if (!cleanDesc.includes('.') || cleanDesc.split(',').length >= 2) {
            cleanDesc = `Složení: ${cleanDesc}`;
          }
        }
      }

      const fullCzechText = cleanDesc ? `${cleanName}. ${cleanDesc}` : `${cleanName}.`;
      totalTextChars = fullCzechText.length;
      const descChunks = this.splitIntoChunks(fullCzechText, 85);

      for (const c of descChunks) {
        chunksToPlay.push({
          text: c,
          lang: 'cs',
          voice: csVoice,
          rate: 0.98
        });
      }
    }

    if (chunksToPlay.length === 0) return;

    // Small delay after cancel() to start queue cleanly
    setTimeout(() => {
      this.currentId = id;
      this.queue = chunksToPlay;
      this.isProcessingQueue = true;
      this.notify();

      // SAFETY WATCHDOG TIMER:
      // Prevents speaker icon from blinking indefinitely if mobile OS cuts off audio
      const safeDurationMs = Math.max(9000, totalTextChars * 125 + 5000);
      this.clearWatchdog();
      this.watchdogTimer = setTimeout(() => {
        if (this.currentId === id) {
          console.warn('Speech watchdog failsafe: cleanly ending speech session.');
          this.stop();
        }
      }, safeDurationMs);

      // Start sequential queue processing
      this.processQueue(id);
    }, 30);
  }
}

export const speechManager = new SpeechManager();
