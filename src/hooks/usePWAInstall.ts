import { useEffect, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isRunningStandalone, setIsRunningStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isPC, setIsPC] = useState(false);

  // Check if currently running inside the installed PWA window (standalone / full-screen from home screen or PC app)
  const checkIsStandalone = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const isStandaloneDisplay =
      typeof window.matchMedia === 'function' && (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: minimal-ui)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches ||
        window.matchMedia('(display-mode: window-controls-overlay)').matches
      );

    const isIOSStandalone = (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    const isAndroidApp = Boolean(document.referrer && document.referrer.includes('android-app://'));

    return Boolean(isStandaloneDisplay || isIOSStandalone || isAndroidApp);
  }, []);

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent.toLowerCase() : '';
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    const isPCDevice = !/android|iphone|ipad|ipod|windows phone/i.test(userAgent);

    setIsIOS(isIOSDevice);
    setIsPC(isPCDevice);

    const standalone = checkIsStandalone();
    setIsRunningStandalone(standalone);

    // Initial check: if running standalone, it is definitely installed
    if (standalone) {
      setIsInstalled(true);
      try {
        localStorage.setItem('fuze_pwa_installed', 'true');
      } catch {}
    } else {
      // In regular browser tab: check if localStorage has flag, BUT if deferredPrompt fires later, install icon will take precedence!
      let hasLocalFlag = false;
      try {
        hasLocalFlag = localStorage.getItem('fuze_pwa_installed') === 'true';
      } catch {}
      setIsInstalled(hasLocalFlag);
    }

    // Modern Chrome/Edge API: check if app is installed
    if (typeof navigator !== 'undefined' && 'getInstalledRelatedApps' in navigator) {
      try {
        (navigator as unknown as { getInstalledRelatedApps: () => Promise<unknown[]> })
          .getInstalledRelatedApps()
          .then((relatedApps) => {
            if (Array.isArray(relatedApps) && relatedApps.length > 0) {
              // App is installed on device
              if (checkIsStandalone()) {
                setIsInstalled(true);
              }
            } else {
              // App is NOT installed on device! Clear any stale flag!
              setIsInstalled(false);
              try {
                localStorage.removeItem('fuze_pwa_installed');
              } catch {}
            }
          })
          .catch(() => {});
      } catch {}
    }

    // Listen for display-mode changes (e.g. when app opens in standalone window)
    if (typeof window.matchMedia === 'function') {
      const standaloneMQ = window.matchMedia('(display-mode: standalone)');
      const minimalMQ = window.matchMedia('(display-mode: minimal-ui)');

      const handleDisplayModeChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setIsRunningStandalone(true);
          setIsInstalled(true);
          try {
            localStorage.setItem('fuze_pwa_installed', 'true');
          } catch {}
        } else {
          setIsRunningStandalone(false);
        }
      };

      try {
        standaloneMQ.addEventListener('change', handleDisplayModeChange);
        minimalMQ.addEventListener('change', handleDisplayModeChange);
      } catch {
        standaloneMQ.addListener?.(handleDisplayModeChange);
        minimalMQ.addListener?.(handleDisplayModeChange);
      }
    }

    // CRITICAL: When beforeinstallprompt fires, the app is 100% UNINSTALLED or NOT INSTALLED!
    // The install icon has absolute priority!
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstalled(false);
      try {
        localStorage.removeItem('fuze_pwa_installed');
      } catch {}
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      try {
        localStorage.setItem('fuze_pwa_installed', 'true');
      } catch {}
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [checkIsStandalone]);

  const markAsInstalled = useCallback(() => {
    setIsInstalled(true);
    try {
      localStorage.setItem('fuze_pwa_installed', 'true');
    } catch {}
  }, []);

  const resetInstallStatus = useCallback(() => {
    setIsInstalled(false);
    try {
      localStorage.removeItem('fuze_pwa_installed');
    } catch {}
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      markAsInstalled();
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isRunningStandalone,
    isIOS,
    isPC,
    install,
    markAsInstalled,
    resetInstallStatus,
  };
}
