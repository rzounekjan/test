import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  Monitor,
  Share,
  PlusSquare,
  X,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Volume2,
  Layers,
  BookOpen,
  Wifi,
  RotateCcw,
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useDeviceStorageStatus } from '../hooks/useDeviceStorageStatus';
import { isDesktopOrApplePC } from '../utils/device';

interface PWAInstallButtonProps {
  language?: 'cs' | 'en';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  language = 'cs',
  className = '',
}) => {
  // CRITICAL USER REQUIREMENT:
  // "Na PC a Apple PC odstranit možnost instalace a ukazatel stahování dat a zvukového doprovodu do úložiště."
  // On PC and Apple PC (desktops / laptops), completely remove installation option and storage indicator!
  if (isDesktopOrApplePC()) {
    return null;
  }

  const {
    isInstallable,
    isInstalled,
    isRunningStandalone,
    isIOS,
    isPC,
    install,
    markAsInstalled,
    resetInstallStatus,
  } = usePWAInstall();

  const {
    isMemoryLoaded,
    appShellCached,
    textsCached,
    audioCached,
    isOnline,
    refreshStatus,
  } = useDeviceStorageStatus();

  const [showGuide, setShowGuide] = useState(false);
  const [showStorageModal, setShowStorageModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const isCs = language === 'cs';

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 2500);
      }
    } else {
      setShowGuide(true);
    }
  };

  const handleManualMarkInstalled = () => {
    markAsInstalled();
    setShowGuide(false);
  };

  const handleManualReset = () => {
    resetInstallStatus();
    setShowGuide(false);
    setShowStorageModal(false);
  };

  const handleRefreshStorage = async () => {
    setIsRefreshing(true);
    await refreshStatus();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // Temporary flash after user accepts install prompt
  if (installSuccess) {
    return (
      <div
        className={`inline-flex items-center justify-center p-2 lg:p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 shrink-0 ${className}`}
        title={isCs ? 'Aplikace nainstalována' : 'App Installed'}
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
      </div>
    );
  }

  // CRITICAL USER RULE:
  // "Ikona pro novou instalaci má VŽDY přednost před ukazatelem červeného nebo zeleného kolečka."
  // If the browser can install the app (isInstallable is true), or if running in a standard browser tab
  // (not launched as standalone PWA app), the INSTALL ICON MUST BE SHOWN!
  // Only when running in standalone mode (from home screen / installed app window) and not installable
  // do we show the memory status circle.
  const showStatusCircle = !isInstallable && (isRunningStandalone || (isInstalled && !isInstallable));

  if (showStatusCircle) {
    return (
      <>
        {isMemoryLoaded ? (
          <button
            type="button"
            onClick={() => setShowStorageModal(true)}
            title={
              isCs
                ? (isPC
                    ? 'Vše uloženo v paměti počítače (prostředí i receptury fungují 100% offline bez nutnosti internetu)'
                    : 'Vše uloženo v paměti zařízení (kompletní texty, rozhraní a zvukové překlady fungují 100% offline)')
                : 'All saved to device memory (works 100% offline)'
            }
            aria-label={isCs ? 'Stav mezipaměti: Kompletně uloženo v paměti' : 'Storage status: Fully saved in memory'}
            className={`inline-flex items-center justify-center p-2 lg:p-1.5 rounded-lg transition-all shrink-0 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/60 text-emerald-400 active:scale-95 shadow-sm shadow-emerald-950/50 ${className}`}
          >
            {/* Glowing Green Circle */}
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.95)]"></span>
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowStorageModal(true)}
            title={
              isCs
                ? (isPC
                    ? 'Ukládání do paměti počítače... (prostředí a veškeré texty)'
                    : 'Ukládání do paměti zařízení... (prostředí, texty a zvukové překlady)')
                : 'Saving to device memory...'
            }
            aria-label={isCs ? 'Stav mezipaměti: Ukládání' : 'Storage status: Saving'}
            className={`inline-flex items-center justify-center p-2 lg:p-1.5 rounded-lg transition-all shrink-0 bg-red-950/70 hover:bg-red-900/80 border border-red-500/60 text-red-400 active:scale-95 shadow-sm shadow-red-950/50 ${className}`}
          >
            {/* Pulsing Red Circle */}
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.95)]"></span>
            </span>
          </button>
        )}

        {/* Detailed Storage / Memory Status Modal */}
        {showStorageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm rounded-2xl bg-stone-900 border border-stone-800 p-5 shadow-2xl text-stone-200 relative">
              <button
                type="button"
                onClick={() => setShowStorageModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition"
                aria-label={isCs ? 'Zavřít' : 'Close'}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-md shrink-0 ${
                    isMemoryLoaded
                      ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400'
                      : 'bg-red-950/80 border-red-500/50 text-red-400'
                  }`}
                >
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    {!isMemoryLoaded && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        isMemoryLoaded
                          ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]'
                          : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]'
                      }`}
                    ></span>
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-100">
                    {isCs ? 'Stav paměti FUZE (Offline)' : 'FUZE Memory Status (Offline)'}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {isMemoryLoaded
                      ? isCs
                        ? `100% uloženo v paměti ${isPC ? 'počítače' : 'zařízení'}`
                        : '100% saved in device memory'
                      : isCs
                        ? `Probíhá ukládání do paměti ${isPC ? 'počítače' : 'zařízení'}...`
                        : 'Saving into device memory...'}
                  </p>
                </div>
              </div>

              {/* Status List */}
              <div className="space-y-2.5 text-xs bg-stone-950/70 p-3.5 rounded-xl border border-stone-800/80">
                {/* 1. Layout & App Shell */}
                <div className="flex items-start gap-2.5">
                  <Layers className={`w-4 h-4 mt-0.5 shrink-0 ${appShellCached ? 'text-emerald-400' : 'text-red-400'}`} />
                  <div className="flex-1">
                    <div className="font-semibold text-stone-200">
                      {isCs ? 'Prostředí & konstrukce stránek' : 'UI & Page Structure'}
                    </div>
                    <div className="text-[11px] text-stone-400">
                      {appShellCached
                        ? isCs
                          ? 'Uloženo v mezipaměti (HTML, CSS, skripty, ikony)'
                          : 'Cached in device storage (HTML, CSS, scripts, icons)'
                        : isCs
                          ? 'Ukládání do mezipaměti...'
                          : 'Caching into storage...'}
                    </div>
                  </div>
                  {appShellCached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 animate-pulse" />
                  )}
                </div>

                {/* 2. Texts and menu items */}
                <div className="flex items-start gap-2.5">
                  <BookOpen className={`w-4 h-4 mt-0.5 shrink-0 ${textsCached ? 'text-emerald-400' : 'text-red-400'}`} />
                  <div className="flex-1">
                    <div className="font-semibold text-stone-200">
                      {isCs ? 'Veškeré texty a receptury' : 'All Texts & Recipes'}
                    </div>
                    <div className="text-[11px] text-stone-400">
                      {isCs ? '100% uloženo v paměti aplikace' : '100% stored in app memory'}
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>

                {/* 3. Audio translations & Web Speech */}
                <div className="flex items-start gap-2.5">
                  <Volume2
                    className={`w-4 h-4 mt-0.5 shrink-0 ${audioCached ? 'text-emerald-400' : 'text-red-400'}`}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-stone-200">
                      {isCs ? 'Zvukový doprovod v offline režimu' : 'Offline Audio Accompaniment'}
                    </div>
                    <div className="text-[11px] text-stone-400">
                      {audioCached
                        ? isCs
                          ? 'Hlasové syntézy (CZ i EN) i zvukové efekty načteny pro offline provoz'
                          : 'Speech synthesis (CZ & EN) and audio effects loaded for offline'
                        : isCs
                          ? 'Inicializace hlasové syntézy pro offline provoz...'
                          : 'Initializing speech voices for offline...'}
                    </div>
                  </div>
                  {audioCached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 animate-pulse" />
                  )}
                </div>

                {/* 4. Connectivity info */}
                <div className="flex items-start gap-2.5 pt-1 border-t border-stone-800/80">
                  <Wifi className="w-4 h-4 mt-0.5 text-stone-400 shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-stone-300">
                      {isCs ? 'Režim sítě' : 'Network Mode'}
                    </div>
                    <div className="text-[11px] text-stone-400">
                      {isOnline
                        ? isCs
                          ? 'Online (připojeno k internetu)'
                          : 'Online (connected)'
                        : isCs
                          ? 'Offline (aplikace běží plně bez internetu)'
                          : 'Offline (app running completely offline)'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRefreshStorage}
                  disabled={isRefreshing}
                  className="flex-1 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-stone-100 font-medium text-xs transition flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>{isCs ? 'Zkontrolovat paměť' : 'Re-check memory'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowStorageModal(false)}
                  className="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs transition"
                >
                  {isCs ? 'Rozumím' : 'Got it'}
                </button>
              </div>

              {/* Reset option in case user uninstalled app and wants to force browser mode */}
              <div className="mt-2 text-center">
                <button
                  type="button"
                  onClick={handleManualReset}
                  className="text-[10px] text-stone-500 hover:text-amber-400 underline underline-offset-2 transition"
                >
                  {isCs ? 'Znovu nabídnout ikonu instalace' : 'Reset & show install button'}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // BEFORE INSTALLATION (or in browser tab / when install is available):
  // The INSTALL ICON ALWAYS has priority!
  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        title={isCs ? 'Nainstalovat aplikaci do mobilu / PC (PWA)' : 'Install app to device (PWA)'}
        aria-label={isCs ? 'Nainstalovat aplikaci' : 'Install app'}
        className={`inline-flex items-center justify-center p-2 lg:p-1.5 rounded-lg transition-all shrink-0 ${
          isInstallable
            ? 'bg-amber-600/20 hover:bg-amber-500/30 text-amber-400 hover:text-amber-300 border border-amber-500/50 hover:border-amber-400 active:scale-95 shadow-sm shadow-amber-950/30'
            : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-300 border border-stone-700/60'
        } ${className}`}
      >
        <Download className="w-4 h-4 text-current" />
      </button>

      {/* Guide modal for PC / iOS manual install */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-stone-900 border border-stone-800 p-6 shadow-2xl text-stone-200 relative">
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition"
              aria-label={isCs ? 'Zavřít' : 'Close'}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold text-lg shadow-md border border-amber-400/30 shrink-0">
                FZ
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-100">
                  {isCs ? 'Instalace FUZE' : 'Install FUZE'}
                </h3>
                <p className="text-xs text-stone-400">
                  {isPC
                    ? isCs
                      ? 'Nainstalujte jako samostatnou aplikaci do PC'
                      : 'Install as desktop application on PC'
                    : isCs
                      ? 'Spouštějte přímo z domovské obrazovky'
                      : 'Launch directly from your home screen'}
                </p>
              </div>
            </div>

            {isIOS ? (
              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800/80">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 font-semibold text-[11px]">
                    1
                  </div>
                  <p className="pt-0.5">
                    {isCs ? (
                      <>Klepněte na tlačítko <strong>Sdílet</strong> <Share className="inline w-3.5 h-3.5 mx-1 text-amber-400" /> ve spodním panelu Safari.</>
                    ) : (
                      <>Tap the <strong>Share</strong> button <Share className="inline w-3.5 h-3.5 mx-1 text-amber-400" /> in Safari’s toolbar.</>
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 font-semibold text-[11px]">
                    2
                  </div>
                  <p className="pt-0.5">
                    {isCs ? (
                      <>V nabídce sjeďte dolů a vyberte <strong>Přidat na plochu</strong> <PlusSquare className="inline w-3.5 h-3.5 mx-1 text-amber-400" />.</>
                    ) : (
                      <>Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="inline w-3.5 h-3.5 mx-1 text-amber-400" />.</>
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 font-semibold text-[11px]">
                    3
                  </div>
                  <p className="pt-0.5">
                    {isCs ? (
                      <>Klepněte na <strong>Přidat</strong> vpravo nahoře. Aplikace bude dostupná offline jako nativní aplikace.</>
                    ) : (
                      <>Tap <strong>Add</strong> in the top right. The app will open in fullscreen and work offline.</>
                    )}
                  </p>
                </div>
              </div>
            ) : isPC ? (
              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800/80">
                <div className="flex items-start gap-2.5">
                  <Monitor className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-200 font-medium">
                      {isCs ? 'Instalace na PC (Chrome / Edge)' : 'Install on PC (Chrome / Edge)'}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-1">
                      {isCs
                        ? 'V adresním řádku prohlížeče vpravo klikněte na ikonu instalace nebo v menu prohlížeče (⋮) zvolte "Instalovat aplikaci FUZE".'
                        : 'Click the install icon on the right side of the address bar or choose "Install FUZE" in menu (⋮).'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800/80">
                <div className="flex items-center gap-2 text-stone-200">
                  <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    {isCs
                      ? 'V prohlížeči (Chrome / Edge) klikněte na ikonu instalace v adresním řádku nebo v menu (⋮) zvolte "Instalovat aplikaci".'
                      : 'In your browser (Chrome / Edge), click the install icon in the address bar or choose "Install app" in menu (⋮).'}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition"
              >
                {isCs ? 'Rozumím' : 'Got it'}
              </button>

              {/* Reset or mark options */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={handleManualMarkInstalled}
                  className="text-stone-400 hover:text-amber-300 text-[11px] underline underline-offset-2 transition"
                >
                  {isCs ? 'Spuštěno z plochy' : 'Launched from Home'}
                </button>
                <button
                  type="button"
                  onClick={handleManualReset}
                  className="text-stone-500 hover:text-stone-300 text-[11px] underline underline-offset-2 transition"
                >
                  {isCs ? 'Resetovat stav' : 'Reset'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
