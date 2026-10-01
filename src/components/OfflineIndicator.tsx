import React, { useState, useEffect } from 'react';
import { WifiOff, X } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineIndicatorProps {
  language?: 'cs' | 'en';
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ language = 'cs' }) => {
  const isOnline = useOnlineStatus();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isOnline) {
      // Show notification for strictly 5 seconds when offline
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
    } else {
      setVisible(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOnline]);

  if (!visible) return null;

  const isCs = language === 'cs';

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-stone-900/95 border border-amber-500/40 px-3.5 py-2 text-xs font-medium text-amber-200 shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300"
    >
      <div className="relative flex items-center justify-center">
        <WifiOff className="w-3.5 h-3.5 text-amber-400" />
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
      </div>
      <span>
        {isCs
          ? 'Offline režim — data a tréninkové testy běží z paměti zařízení.'
          : 'Offline mode — menu and quizzes are running from device storage.'}
      </span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="ml-1 p-0.5 rounded text-amber-400/70 hover:text-amber-300 hover:bg-stone-800 transition"
        aria-label={isCs ? 'Zavřít upozornění' : 'Close notification'}
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
