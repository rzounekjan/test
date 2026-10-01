// Device detection utility to distinguish PC and Apple PC (desktops & laptops) from mobile devices

export function isDesktopOrApplePC(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();

  // Explicit Mobile and Phone checks
  if (/android|iphone|ipod|windows phone|iemobile|blackberry|mobile/i.test(ua)) {
    return false;
  }

  // iPads (iPadOS 13+ reports Macintosh in user-agent, but has multi-touch support)
  if (/ipad/i.test(ua) || (ua.includes('macintosh') && navigator.maxTouchPoints > 1)) {
    return false;
  }

  // Apple PC (Macintosh desktop: MacBook, iMac, Mac Pro, Mac mini, Mac Studio)
  if (ua.includes('macintosh') || ua.includes('mac os x') || ua.includes('mac_powerpc')) {
    return true;
  }

  // Windows PC
  if (ua.includes('windows') || ua.includes('win32') || ua.includes('win64')) {
    return true;
  }

  // Linux PC (desktop)
  if (ua.includes('linux') || ua.includes('x11')) {
    return true;
  }

  // Chrome OS desktop
  if (ua.includes('cros')) {
    return true;
  }

  // General fallback: non-touch devices are desktop PCs
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  return !isTouchDevice;
}
