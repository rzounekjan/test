import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { speechManager } from '../utils/speech';

interface AudioPronounceButtonProps {
  itemId: string;
  name: string;
  description: string;
  lang?: 'cs' | 'en';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  title?: string;
}

export const AudioPronounceButton: React.FC<AudioPronounceButtonProps> = ({
  itemId,
  name,
  description,
  lang = 'cs',
  size = 'sm',
  showLabel = false,
  className = '',
  title
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = speechManager.subscribe((speakingId) => {
      setIsSpeaking(speakingId === itemId);
    });
    return unsubscribe;
  }, [itemId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isSpeaking) {
      speechManager.stop();
    } else {
      speechManager.speak(itemId, name, description, lang);
    }
  };

  const buttonTitle =
    title ||
    (isSpeaking
      ? (lang === 'en' ? 'Stop audio' : 'Zastavit předčítání')
      : (lang === 'en' ? 'Pronounce in English' : 'Přečíst česky'));

  const sizeClasses = {
    xs: 'p-1 text-[10px]',
    sm: 'p-1.5 text-xs',
    md: 'px-2.5 py-1.5 text-xs',
    lg: 'px-3 py-2 text-sm'
  }[size];

  const iconSizes = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }[size];

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg transition-all select-none ${
        isSpeaking
          ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/30 scale-105 animate-pulse'
          : 'bg-stone-800/80 hover:bg-amber-500/20 text-stone-300 hover:text-amber-400 border border-stone-700/60 hover:border-amber-500/40'
      } ${sizeClasses} ${className}`}
      title={buttonTitle}
      aria-label={buttonTitle}
    >
      {isSpeaking ? (
        <>
          <Volume2 className={`${iconSizes} animate-bounce`} />
          {/* Animated sound wave bars */}
          <span className="inline-flex items-center gap-0.5 ml-0.5">
            <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
            <span className="w-0.5 h-3 bg-stone-950 rounded-full animate-pulse" />
            <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
          </span>
          {showLabel && <span className="ml-1 font-bold">{lang === 'en' ? 'Playing...' : 'Předčítám...'}</span>}
        </>
      ) : (
        <>
          <Volume2 className={iconSizes} />
          {showLabel && <span>{lang === 'en' ? 'Listen' : 'Přečíst'}</span>}
        </>
      )}
    </button>
  );
};
