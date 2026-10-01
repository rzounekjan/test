import { useState, useEffect, useCallback } from 'react';
import { speechManager } from '../utils/speech';
import { soundManager } from '../utils/sound';

export interface DeviceStorageStatus {
  isMemoryLoaded: boolean;
  appShellCached: boolean;
  textsCached: boolean;
  audioCached: boolean;
  isOnline: boolean;
  isPC: boolean;
  lastChecked: Date | null;
}

export function useDeviceStorageStatus() {
  const [appShellCached, setAppShellCached] = useState(false);
  const [textsCached, setTextsCached] = useState(true); // All 114+ recipes, ingredients and quiz items in memory
  const [audioCached, setAudioCached] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [isMemoryLoaded, setIsMemoryLoaded] = useState(false);
  const [isPC, setIsPC] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkStatus = useCallback(async () => {
    const isPCDevice = typeof window !== 'undefined' && !/android|iphone|ipad|ipod|windows phone/i.test(navigator.userAgent);
    setIsPC(isPCDevice);

    // 1. Verify Audio & Speech Synthesis readiness (REQUIRED on PC and mobile for full offline experience)
    let speechReady = speechManager.areVoicesReady();
    if (!speechReady) {
      speechReady = await speechManager.ensureVoicesReady();
    }

    try {
      soundManager.init(); // Warm up Web Audio context
    } catch {}

    setAudioCached(speechReady);

    // 2. Texts and menu structure (all items, categories and tests are resident in-memory)
    setTextsCached(true);

    // 3. Verify App Shell, Page Structure and Cache Storage
    let cacheReady = false;
    if (typeof window !== 'undefined' && 'caches' in window) {
      try {
        const cacheNames = await window.caches.keys();
        if (cacheNames.length > 0) {
          for (const name of cacheNames) {
            const cache = await window.caches.open(name);
            const requests = await cache.keys();
            if (requests.length > 0) {
              cacheReady = true;
              break;
            }
          }
        }
      } catch (err) {
        console.warn('Cache inspection notice:', err);
      }
    }

    // Check service worker controller or active registration
    if (!cacheReady && typeof navigator !== 'undefined' && navigator.serviceWorker) {
      if (navigator.serviceWorker.controller) {
        cacheReady = true;
      } else {
        try {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg && (reg.active || reg.installing || reg.waiting)) {
            cacheReady = true;
          }
        } catch {}
      }
    }

    // If running in standalone window or explicitly installed PWA
    if (!cacheReady && typeof window !== 'undefined') {
      const isStandalone =
        (typeof window.matchMedia === 'function' && (
          window.matchMedia('(display-mode: standalone)').matches ||
          window.matchMedia('(display-mode: minimal-ui)').matches ||
          window.matchMedia('(display-mode: window-controls-overlay)').matches
        )) ||
        localStorage.getItem('fuze_pwa_installed') === 'true';

      if (isStandalone) {
        cacheReady = true;
      }
    }

    setAppShellCached(cacheReady);
    setLastChecked(new Date());

    // CRITICAL: Teprve po úplném načtení veškerých dat, textů, prostředí a zvukového doprovodu se kolečko zazelená
    const allLoaded = Boolean(cacheReady && speechReady);
    setIsMemoryLoaded(allLoaded);

    return allLoaded;
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    checkStatus();

    // Listen for custom PWA offline ready event
    const handleOfflineReady = () => {
      setAppShellCached(true);
      checkStatus();
    };
    window.addEventListener('fuze-offline-ready', handleOfflineReady);

    // Periodic check until everything is 100% in memory
    let intervalId: NodeJS.Timeout | null = null;
    let attempts = 0;
    intervalId = setInterval(async () => {
      attempts++;
      const ready = await checkStatus();
      if (ready || attempts > 25) {
        if (intervalId) clearInterval(intervalId);
      }
    }, 800);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('fuze-offline-ready', handleOfflineReady);
      if (intervalId) clearInterval(intervalId);
    };
  }, [checkStatus]);

  return {
    isMemoryLoaded,
    appShellCached,
    textsCached,
    audioCached,
    isOnline,
    isPC,
    lastChecked,
    refreshStatus: checkStatus,
  };
}
