import React from 'react';
import { Volume2, VolumeX, BookOpen, Trophy, Sparkles, Utensils, RotateCcw, MapPin, Library, ShieldCheck, LogOut } from 'lucide-react';
import { UserStats } from '../utils/storage';
import { soundManager } from '../utils/sound';
import { PWAInstallButton } from './PWAInstallButton';
import { AppUser } from '../types/auth';

interface HeaderProps {
  currentTab: 'train' | 'exam' | 'catalog' | 'tables' | 'library';
  setCurrentTab: (tab: 'train' | 'exam' | 'catalog' | 'tables' | 'library') => void;
  stats: UserStats;
  totalItemsCount: number;
  totalQuestionsCount?: number;
  onResetStats: () => void;
  language?: 'cs' | 'en';
  onLanguageChange?: (lang: 'cs' | 'en') => void;
  currentUser?: AppUser | null;
  onOpenAdmin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  stats,
  totalItemsCount,
  totalQuestionsCount,
  onResetStats,
  language = 'cs',
  onLanguageChange,
  currentUser,
  onOpenAdmin,
  onLogout
}) => {
  const [soundOn, setSoundOn] = React.useState<boolean>(soundManager.isEnabled());

  const handleToggleSound = () => {
    const next = soundManager.toggle();
    setSoundOn(next);
  };

  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100)
    : 0;

  const masteredQuestionsCount = stats.masteredQuestionIds ? stats.masteredQuestionIds.length : 0;
  const totalQuestions = totalQuestionsCount || 911;

  return (
    <header className="border-b border-stone-800 bg-stone-900/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3">
          {/* Mobile Top Header (lg:hidden) - Fully responsive with zero horizontal overflow */}
          <div className="lg:hidden flex items-center justify-between gap-1.5 w-full">
            {/* Left: Brand */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950/40 text-stone-950 font-black tracking-wider text-sm border border-amber-400/30 shrink-0">
                FZ
              </div>
              <h1 className="text-sm font-bold text-stone-100 tracking-tight truncate">
                FUZE <span className="text-stone-400 font-medium">Akademie</span>
              </h1>
            </div>

            {/* Right: Actions Cluster (CZ/EN, Admin, Sound, PWA, Logout) */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Language Switcher */}
              <div className="inline-flex items-center p-0.5 rounded-lg bg-stone-950 border border-stone-800 shrink-0">
                <button
                  type="button"
                  onClick={() => onLanguageChange?.('cs')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    language === 'cs'
                      ? 'bg-amber-600 text-stone-100 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Čeština"
                  aria-label="Přepnout do češtiny"
                >
                  CZ
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange?.('en')}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    language === 'en'
                      ? 'bg-amber-600 text-stone-100 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="English"
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Admin Button */}
              {currentUser?.role === 'admin' && (
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
                  title="Správa uživatelů"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                </button>
              )}

              {/* Sound Button */}
              <button
                type="button"
                onClick={handleToggleSound}
                title={soundOn ? 'Vypnout zvuky' : 'Zapnout zvuky'}
                className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 flex items-center justify-center shrink-0 active:scale-95 transition-colors"
              >
                {soundOn ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-stone-500" />}
              </button>

              {/* PWA Install Button */}
              <PWAInstallButton language={language} className="!p-1.5 !w-7 !h-7" />

              {/* Logout Button */}
              {currentUser && (
                <button
                  type="button"
                  onClick={onLogout}
                  className="w-7 h-7 rounded-lg bg-stone-800 text-stone-400 hover:text-rose-400 flex items-center justify-center shrink-0 active:scale-95 transition-colors"
                  title={`Odhlásit (${currentUser.name})`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Brand Header (hidden on mobile, visible on lg screens) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950/40 text-stone-950 font-black tracking-wider text-xl border border-amber-400/30 shrink-0">
              FZ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-stone-100 tracking-tight flex items-center gap-1.5">
                  FUZE Gastro Akademie
                </h1>
                {/* Klikací tlačítka CZ / EN pro přepínání jazyka */}
                <div className="inline-flex items-center p-0.5 rounded-lg bg-stone-950 border border-stone-800 shadow-inner">
                  <button
                    type="button"
                    onClick={() => onLanguageChange?.('cs')}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold transition-all ${
                      language === 'cs'
                        ? 'bg-amber-600 text-stone-100 shadow-sm border border-amber-500/50'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                    }`}
                    title="Čeština"
                    aria-label="Přepnout do češtiny"
                  >
                    <span>🇨🇿</span>
                    <span>CZ</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange?.('en')}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold transition-all ${
                      language === 'en'
                        ? 'bg-amber-600 text-stone-100 shadow-sm border border-amber-500/50'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                    }`}
                    title="English (připravuje se)"
                    aria-label="Switch to English"
                  >
                    <span>🇬🇧</span>
                    <span>EN</span>
                  </button>
                </div>
              </div>
              <p className="text-xs text-stone-400">
                {language === 'en'
                  ? 'Training trainer of dishes and drinks according to original recipes'
                  : 'Výukový trenažér jídel a nápojů podle originální receptury'}
              </p>
            </div>
          </div>

          {/* Nav Tabs (Smooth horizontal scrolling on mobile, no clumsy wrapping) */}
          <nav 
            aria-label="Hlavní navigace"
            className="flex items-center gap-1 sm:gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800 w-full lg:w-auto overflow-x-auto scroll-smooth flex-nowrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => setCurrentTab('train')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                currentTab === 'train'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Learn A, B, C' : 'Výuka A, B, C'}</span>
            </button>

            <button
              onClick={() => setCurrentTab('exam')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                currentTab === 'exam'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Exam (Mix 10)' : 'Zkouška (Mix 10)'}</span>
            </button>

            <button
              onClick={() => setCurrentTab('catalog')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                currentTab === 'catalog'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Menu Book' : 'Kniha menu'}</span>
            </button>

            <button
              onClick={() => setCurrentTab('tables')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                currentTab === 'tables'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'Floor Plan' : 'Plán stolů'}</span>
            </button>

            <button
              onClick={() => setCurrentTab('library')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                currentTab === 'library'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
              }`}
            >
              <Library className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'Library' : 'Knihovna'}</span>
            </button>
          </nav>

          {/* Desktop Stats & Controls */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            {/* Úspěšné otázky v řadě (ikona ohně) */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300" title={language === 'en' ? 'Consecutive correct answers streak' : 'Úspěšné otázky v řadě'}>
              <span className="text-amber-400 font-bold">🔥 {stats.currentStreak}</span>
              <span className="text-stone-400">{language === 'en' ? 'streak' : 'v řadě'}</span>
            </div>

            {/* Přehled splněných otázek/ingrediencí označené ikonou poháru */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300"
              title={language === 'en'
                ? `Mastered ${masteredQuestionsCount} of ${totalQuestions} questions (${stats.masteredItemIds.length} of ${totalItemsCount} menu items)`
                : `Splněno ${masteredQuestionsCount} z ${totalQuestions} otázek/ingrediencí (${stats.masteredItemIds.length} z ${totalItemsCount} položek menu plně)`
              }
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-stone-100 font-bold">{masteredQuestionsCount}</strong>/{totalQuestions} {language === 'en' ? 'mastered' : 'splněno'}
              </span>
              <span className="text-stone-400 text-[11px] hidden xl:inline">
                ({stats.masteredItemIds.length}/{totalItemsCount} {language === 'en' ? 'items' : 'položek'})
              </span>
            </div>

            {/* Percentuální úspěšnost */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300" title={language === 'en' ? 'Percentage accuracy' : 'Percentuální úspěšnost'}>
              <span className="text-stone-400">{language === 'en' ? 'Accuracy:' : 'Úspěšnost:'}</span>
              <span className={`font-bold ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-stone-300'}`}>
                {stats.totalAnswered > 0 ? `${accuracy}%` : '–'}
              </span>
            </div>

            {/* Sound toggle */}
            <button
              onClick={handleToggleSound}
              title={soundOn ? (language === 'en' ? 'Mute sound' : 'Vypnout zvuky') : (language === 'en' ? 'Unmute sound' : 'Zapnout zvuky')}
              className="p-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 transition-colors"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>

            {/* Reset button */}
            <button
              onClick={onResetStats}
              title={language === 'en' ? 'Reset score and statistics' : 'Resetovat skóre a statistiky'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950/40 text-stone-400 hover:text-rose-300 border border-stone-700/60 hover:border-rose-900/50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Reset score' : 'Resetovat skóre'}</span>
            </button>

            {/* Admin Management Button */}
            {currentUser?.role === 'admin' && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all shadow-sm cursor-pointer"
                title="Správa uživatelů a hesel personálu"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Správa uživatelů</span>
              </button>
            )}

            {/* Current user badge & Logout */}
            {currentUser && (
              <div className="flex items-center gap-1.5 pl-2 border-l border-stone-800">
                <span className="text-xs font-medium text-stone-300 truncate max-w-[130px]" title={currentUser.name}>
                  {currentUser.role === 'admin' ? '👑' : '👤'} {currentUser.name}
                </span>
                <button
                  type="button"
                  onClick={onLogout}
                  className="p-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950/60 text-stone-400 hover:text-rose-300 border border-stone-700/60 hover:border-rose-900 transition-colors cursor-pointer"
                  title="Odhlásit se z výukového programu"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile & Tablet Stats Bar (lg:hidden) */}
        {/* Pouze: ikona ohně a úspěšné otázky v řadě, přehled splněných podsložek označené ikonou poháru, percentuální úspěšnost a reset */}
        <div className="lg:hidden mt-2.5 pt-2.5 border-t border-stone-800/80 grid grid-cols-4 gap-1.5 text-xs">
          {/* Úspěšné otázky v řadě (ikona ohně) */}
          <div className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center" title={language === 'en' ? 'Consecutive correct answers streak' : 'Úspěšné otázky v řadě'}>
            <span className="text-amber-400 font-bold text-xs">🔥 {stats.currentStreak}</span>
            <span className="text-[10px] text-stone-400 hidden xs:inline">{language === 'en' ? 'streak' : 'v řadě'}</span>
          </div>

          {/* Přehled splněných otázek/ingrediencí označené ikonou poháru */}
          <div
            className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center"
            title={language === 'en'
              ? `Mastered ${masteredQuestionsCount} of ${totalQuestions} questions (${stats.masteredItemIds.length}/${totalItemsCount} items)`
              : `Splněno ${masteredQuestionsCount} z ${totalQuestions} otázek/ingrediencí (${stats.masteredItemIds.length}/${totalItemsCount} položek menu plně)`
            }
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] truncate">
              <strong className="text-stone-100 font-bold">{masteredQuestionsCount}</strong>/{totalQuestions}
            </span>
          </div>

          {/* Percentuální úspěšnost */}
          <div className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center" title={language === 'en' ? 'Percentage accuracy' : 'Percentuální úspěšnost'}>
            <span className={`font-bold text-[11px] ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-stone-300'}`}>
              {stats.totalAnswered > 0 ? `${accuracy}%` : '0%'}
            </span>
          </div>

          {/* Resetování skóre */}
          <button
            onClick={onResetStats}
            title={language === 'en' ? 'Reset score and statistics' : 'Resetovat skóre a statistiky'}
            className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950/50 text-stone-300 hover:text-rose-300 border border-stone-700/70 hover:border-rose-900/50 active:scale-95 transition-all text-center"
          >
            <RotateCcw className="w-3 h-3 text-rose-400 shrink-0" />
            <span className="text-[11px] font-medium">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
};
