import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  CloudCheck, 
  CloudOff, 
  RefreshCw, 
  Smartphone, 
  Laptop, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { syncService, SyncState } from '../utils/syncService';
import { getStoredStats } from '../utils/storage';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'cs' | 'en';
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  isOpen,
  onClose,
  language = 'cs'
}) => {
  const [syncState, setSyncState] = useState<SyncState>({
    user: syncService.getCurrentUser(),
    status: syncService.getStatus(),
    lastSyncedAt: null,
    lastDevice: 'pc',
    errorMessage: null,
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsub = syncService.subscribeSyncState((st) => {
      setSyncState(st);
      if (st.errorMessage) {
        setErrorMsg(st.errorMessage);
      }
    });
    return unsub;
  }, []);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      await syncService.signInWithGoogle();
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setErrorMsg(err.message || 'Nepodařilo se přihlásit.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await syncService.signOut();
    } catch (err: any) {
      setErrorMsg(err.message || 'Chyba při odhlášení.');
    } finally {
      setLoading(false);
    }
  };

  const handleManualSync = async () => {
    setLoading(true);
    try {
      await syncService.pushStats('cs', getStoredStats('cs'));
      await syncService.pushStats('en', getStoredStats('en'));
    } catch (err: any) {
      setErrorMsg('Chyba při odesílání dat.');
    } finally {
      setLoading(false);
    }
  };

  const csStats = getStoredStats('cs');
  const enStats = getStoredStats('en');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl p-6 text-stone-100 relative space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-100">
              {language === 'en' ? 'Mobile ↔ PC Cloud Synchronization' : 'Synchronizace výsledků Mobil ↔ PC'}
            </h3>
            <p className="text-xs text-stone-400">
              {language === 'en'
                ? 'Keep your progress synced across your mobile phone and computer'
                : 'Udržujte své výsledky ve výuce ABC synchronizované mezi mobilem i PC'}
            </p>
          </div>
        </div>

        {/* Current Device Detection */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800/80 text-xs">
          <div className="flex items-center gap-2 text-stone-300">
            {syncState.lastDevice === 'pc' ? (
              <Laptop className="w-4 h-4 text-amber-400" />
            ) : (
              <Smartphone className="w-4 h-4 text-amber-400" />
            )}
            <span>
              {language === 'en' ? 'Active device:' : 'Aktivní zařízení:'}{' '}
              <strong className="text-stone-100">
                {syncState.lastDevice === 'pc' ? (language === 'en' ? 'PC / Laptop' : 'Počítač / Notebook') : (language === 'en' ? 'Mobile phone' : 'Mobilní telefon')}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            {syncState.status === 'synced' && (
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'en' ? 'Synced' : 'Synchronizováno'}
              </span>
            )}
            {syncState.status === 'syncing' && (
              <span className="flex items-center gap-1 text-amber-400 font-medium">
                <RefreshCw className="w-3 h-3 animate-spin" />
                {language === 'en' ? 'Syncing...' : 'Ukládání...'}
              </span>
            )}
            {syncState.status === 'idle' && (
              <span className="flex items-center gap-1 text-stone-400 font-medium">
                <CloudOff className="w-3 h-3" />
                {language === 'en' ? 'Offline / Local' : 'Lokální režim'}
              </span>
            )}
          </div>
        </div>

        {/* Sync Status / Auth Section */}
        {syncState.user ? (
          <div className="space-y-4">
            {/* User Account Info */}
            <div className="p-3.5 rounded-xl bg-stone-800/50 border border-stone-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {syncState.user.photoURL ? (
                  <img 
                    src={syncState.user.photoURL} 
                    alt={syncState.user.displayName || 'User'} 
                    className="w-10 h-10 rounded-full border border-amber-500/40 object-cover shrink-0" 
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-stone-950 font-bold flex items-center justify-center shrink-0">
                    {syncState.user.displayName ? syncState.user.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-sm font-bold text-stone-200 truncate">
                    {syncState.user.displayName || 'Přihlášený student'}
                  </div>
                  <div className="text-xs text-stone-400 truncate">
                    {syncState.user.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                disabled={loading}
                className="px-2.5 py-1.5 rounded-lg bg-stone-700/60 hover:bg-rose-950/60 text-stone-300 hover:text-rose-300 border border-stone-600/50 hover:border-rose-800/50 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                title="Odhlásit z tohoto zařízení"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Sign out' : 'Odhlásit'}</span>
              </button>
            </div>

            {/* Sync Progress Breakdown for Czech & English */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
                {language === 'en' ? 'Synchronized ABC Learning Data' : 'Synchronizované výsledky výuky ABC'}
              </div>

              {/* Czech Stats */}
              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">🇨🇿</span>
                  <div>
                    <div className="font-bold text-stone-200">
                      {language === 'en' ? 'Czech Language' : 'Český jazyk'}
                    </div>
                    <div className="text-stone-400 text-[11px]">
                      {csStats.masteredQuestionIds.length} {language === 'en' ? 'mastered questions' : 'zvládnutých otázek'} · {csStats.masteredItemIds.length} {language === 'en' ? 'items' : 'položek'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'en' ? 'Synced' : 'Synchronizováno'}</span>
                </div>
              </div>

              {/* English Stats */}
              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-base">🇬🇧</span>
                  <div>
                    <div className="font-bold text-stone-200">
                      {language === 'en' ? 'English Language' : 'Anglický jazyk'}
                    </div>
                    <div className="text-stone-400 text-[11px]">
                      {enStats.masteredQuestionIds.length} {language === 'en' ? 'mastered questions' : 'mastered questions'} · {enStats.masteredItemIds.length} {language === 'en' ? 'items' : 'items'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'en' ? 'Synced' : 'Synchronizováno'}</span>
                </div>
              </div>
            </div>

            {/* Manual Sync Trigger */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-stone-400">
                {syncState.lastSyncedAt
                  ? `${language === 'en' ? 'Last synced:' : 'Naposledy uloženo:'} ${syncState.lastSyncedAt.toLocaleTimeString()}`
                  : language === 'en' ? 'Real-time sync active' : 'Aktivní synchronizace v reálném čase'}
              </span>
              <button
                onClick={handleManualSync}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold transition-all hover:border-amber-500/50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : 'text-stone-400'}`} />
                <span>{language === 'en' ? 'Sync now' : 'Synchronizovat nyní'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'en' ? 'How does cross-device sync work?' : 'Jak funguje synchronizace mezi PC a mobilem?'}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {language === 'en'
                  ? 'Sign in with your Google account on your mobile phone and your computer. Your quiz progress in Czech and English will be instantly mirrored across both devices in real time!'
                  : 'Přihlaste se stejným Google účtem na svém mobilním telefonu i na počítači. Výsledky testů a naučené suroviny v češtině i angličtině se budou automaticky okamžitě přenášet mezi oběma zařízeními v reálném čase!'}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm shadow-lg shadow-white/10 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{loading ? (language === 'en' ? 'Signing in...' : 'Přihlašování...') : (language === 'en' ? 'Sign in with Google' : 'Přihlásit se přes Google')}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? 'Secure synchronization via Google Firebase' : 'Zabezpečená synchronizace přes Google Firebase'}</span>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors"
          >
            {language === 'en' ? 'Close' : 'Zavřít'}
          </button>
        </div>
      </div>
    </div>
  );
};
