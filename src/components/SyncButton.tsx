import React, { useState, useEffect } from 'react';
import { Cloud, CloudCheck, RefreshCw, Smartphone, Laptop } from 'lucide-react';
import { syncService, SyncState } from '../utils/syncService';

interface SyncButtonProps {
  onClick: () => void;
  language?: 'cs' | 'en';
}

export const SyncButton: React.FC<SyncButtonProps> = ({
  onClick,
  language = 'cs'
}) => {
  const [syncState, setSyncState] = useState<SyncState>({
    user: syncService.getCurrentUser(),
    status: syncService.getStatus(),
    lastSyncedAt: null,
    lastDevice: 'pc',
    errorMessage: null,
  });

  useEffect(() => {
    return syncService.subscribeSyncState(setSyncState);
  }, []);

  const isUserSignedIn = Boolean(syncState.user);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-semibold transition-all border shadow-sm ${
        isUserSignedIn
          ? 'bg-stone-800/90 text-stone-200 border-emerald-500/50 hover:bg-stone-800 hover:border-emerald-400'
          : 'bg-stone-800/80 text-stone-300 border-stone-700/70 hover:bg-stone-700 hover:border-amber-500/40'
      }`}
      title={
        isUserSignedIn
          ? `${language === 'en' ? 'Synchronized with account' : 'Synchronizováno s účtem'}: ${syncState.user?.email}`
          : language === 'en' ? 'Set up Mobile ↔ PC synchronization' : 'Nastavit synchronizaci Mobil ↔ PC'
      }
    >
      {syncState.status === 'syncing' ? (
        <RefreshCw className="w-3.5 h-3.5 text-amber-400 animate-spin shrink-0" />
      ) : isUserSignedIn ? (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      ) : (
        <Cloud className="w-3.5 h-3.5 text-stone-400 shrink-0" />
      )}

      <span className="truncate max-w-[110px] sm:max-w-none text-[11px] sm:text-xs">
        {isUserSignedIn ? (
          <span className="flex items-center gap-1">
            <span className="hidden sm:inline">{language === 'en' ? 'Synced' : 'Mobil ↔ PC'}</span>
            <span className="text-emerald-400 font-bold">✓</span>
          </span>
        ) : (
          <span>{language === 'en' ? 'Sync PC/Mobile' : 'Sync PC/Mobil'}</span>
        )}
      </span>
    </button>
  );
};
