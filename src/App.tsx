import React, { useState, useMemo, useEffect } from 'react';
import { MENU_CATEGORIES, MenuCategory, MenuItem } from './data/menuData';
import { MENU_CATEGORIES_EN } from './data/menuDataEn';
import { getStoredStats, resetStats, UserStats } from './utils/storage';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ItemSelector } from './components/ItemSelector';
import { QuizView } from './components/QuizView';
import { RandomExam } from './components/RandomExam';
import { MenuExplorer } from './components/MenuExplorer';
import { TableOrientationTrainer } from './components/TableOrientationTrainer';
import { LibraryView } from './components/LibraryView';
import { OfflineIndicator } from './components/OfflineIndicator';
import { RotateCcw } from 'lucide-react';

const NAV_STATE_KEY = 'fuze_nav_state';

interface PersistedNavState {
  currentTab: 'train' | 'exam' | 'catalog' | 'tables' | 'library';
  categoryId: string | null;
  itemId: string | null;
  isCategoryRunner: boolean;
  categoryItemIndex: number;
  lastSelectedCategoryId: string | null;
  scrollY: number;
}

function readStoredNavState(): Partial<PersistedNavState> {
  try {
    const raw = sessionStorage.getItem(NAV_STATE_KEY) || localStorage.getItem(NAV_STATE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to parse nav state', e);
  }
  return {};
}

export default function App() {
  const [language, setLanguage] = useState<'cs' | 'en'>(() => {
    const saved = localStorage.getItem('fuze_language');
    return saved === 'en' || saved === 'cs' ? saved : 'cs';
  });

  // Dynamic categories based on active language
  const activeCategories = language === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;

  const [currentTab, setCurrentTab] = useState<'train' | 'exam' | 'catalog' | 'tables' | 'library'>(() => {
    const nav = readStoredNavState();
    if (nav.currentTab && ['train', 'exam', 'catalog', 'tables', 'library'].includes(nav.currentTab)) {
      return nav.currentTab;
    }
    return 'train';
  });

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(() => {
    const nav = readStoredNavState();
    if (nav.categoryId) {
      const savedLang = localStorage.getItem('fuze_language');
      const lang = savedLang === 'en' || savedLang === 'cs' ? savedLang : 'cs';
      const cats = lang === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;
      return cats.find(c => c.id === nav.categoryId) || null;
    }
    return null;
  });

  const [lastSelectedCategoryId, setLastSelectedCategoryId] = useState<string | null>(() => {
    const nav = readStoredNavState();
    return nav.lastSelectedCategoryId || null;
  });

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(() => {
    const nav = readStoredNavState();
    if (nav.categoryId && nav.itemId) {
      const savedLang = localStorage.getItem('fuze_language');
      const lang = savedLang === 'en' || savedLang === 'cs' ? savedLang : 'cs';
      const cats = lang === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;
      const cat = cats.find(c => c.id === nav.categoryId);
      if (cat) {
        return cat.items.find(i => i.id === nav.itemId) || null;
      }
    }
    return null;
  });

  // Category quiz runner state (when testing all items in category sequentially)
  const [isCategoryRunner, setIsCategoryRunner] = useState<boolean>(() => {
    const nav = readStoredNavState();
    return Boolean(nav.isCategoryRunner);
  });
  const [categoryItemIndex, setCategoryItemIndex] = useState<number>(() => {
    const nav = readStoredNavState();
    return typeof nav.categoryItemIndex === 'number' ? nav.categoryItemIndex : 0;
  });

  const [stats, setStats] = useState<UserStats>(() => getStoredStats(language));
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  // Dynamic total items and questions count based on active language
  // Automatically recalculates whenever items or questions are added/removed in either language
  const activeTotalItemsCount = useMemo(() => {
    return activeCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [activeCategories]);

  const activeTotalQuestionsCount = useMemo(() => {
    return activeCategories.reduce(
      (acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0),
      0
    );
  }, [activeCategories]);

  // Restore scroll position on initial render/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const nav = readStoredNavState();
    const targetScrollY = typeof nav.scrollY === 'number' ? nav.scrollY : 0;
    if (targetScrollY > 0) {
      const restore = () => {
        window.scrollTo({ top: targetScrollY, behavior: 'instant' });
      };

      restore();
      const t1 = setTimeout(restore, 40);
      const t2 = setTimeout(restore, 120);
      const t3 = setTimeout(restore, 300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, []);

  // Track scroll position continuously
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const recordScroll = () => {
      try {
        const raw = sessionStorage.getItem(NAV_STATE_KEY) || localStorage.getItem(NAV_STATE_KEY);
        const data = raw ? JSON.parse(raw) : {};
        data.scrollY = window.scrollY;
        const serialized = JSON.stringify(data);
        sessionStorage.setItem(NAV_STATE_KEY, serialized);
        localStorage.setItem(NAV_STATE_KEY, serialized);
      } catch (e) {}
    };

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(recordScroll, 80);
    };

    const handleBeforeUnload = () => {
      recordScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Sync navigation state to storage whenever it changes
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(NAV_STATE_KEY) || localStorage.getItem(NAV_STATE_KEY);
      const prev = raw ? JSON.parse(raw) : {};
      const state: PersistedNavState = {
        currentTab,
        categoryId: selectedCategory ? selectedCategory.id : null,
        itemId: selectedItem ? selectedItem.id : null,
        isCategoryRunner,
        categoryItemIndex,
        lastSelectedCategoryId,
        scrollY: typeof prev.scrollY === 'number' ? prev.scrollY : window.scrollY,
      };
      const serialized = JSON.stringify(state);
      sessionStorage.setItem(NAV_STATE_KEY, serialized);
      localStorage.setItem(NAV_STATE_KEY, serialized);
    } catch (e) {}
  }, [currentTab, selectedCategory, selectedItem, isCategoryRunner, categoryItemIndex, lastSelectedCategoryId]);

  const saveNavStateImmediate = (patch: Partial<PersistedNavState>) => {
    try {
      const raw = sessionStorage.getItem(NAV_STATE_KEY) || localStorage.getItem(NAV_STATE_KEY);
      const prev = raw ? JSON.parse(raw) : {};
      const updated = { ...prev, ...patch };
      const serialized = JSON.stringify(updated);
      sessionStorage.setItem(NAV_STATE_KEY, serialized);
      localStorage.setItem(NAV_STATE_KEY, serialized);
    } catch (e) {}
  };

  const handleLanguageChange = (lang: 'cs' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('fuze_language', lang);
    setStats(getStoredStats(lang));

    // Keep active selection in sync across languages
    const targetCats = lang === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;
    if (selectedCategory) {
      const matchCat = targetCats.find(c => c.id === selectedCategory.id) || null;
      setSelectedCategory(matchCat);
      if (selectedItem && matchCat) {
        let matchItem = matchCat.items.find(i => i.id === selectedItem.id);
        if (!matchItem) {
          const currentCat = (lang === 'en' ? MENU_CATEGORIES : MENU_CATEGORIES_EN).find(c => c.id === selectedCategory.id);
          if (currentCat) {
            const idx = currentCat.items.findIndex(i => i.id === selectedItem.id);
            if (idx >= 0 && idx < matchCat.items.length) {
              matchItem = matchCat.items[idx];
            }
          }
        }
        setSelectedItem(matchItem || null);
      }
    }
  };

  const refreshStats = () => {
    setStats(getStoredStats(language));
  };

  const handleConfirmReset = () => {
    const fresh = resetStats(language);
    setStats(fresh);
    setShowResetModal(false);
  };

  // Nav actions
  const handleSelectCategory = (cat: MenuCategory) => {
    setLastSelectedCategoryId(cat.id);
    setSelectedCategory(cat);
    setSelectedItem(null);
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    saveNavStateImmediate({
      currentTab: 'train',
      categoryId: cat.id,
      itemId: null,
      isCategoryRunner: false,
      categoryItemIndex: 0,
      lastSelectedCategoryId: cat.id,
      scrollY: 0,
    });
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    saveNavStateImmediate({
      currentTab: 'train',
      categoryId: selectedCategory ? selectedCategory.id : null,
      itemId: item.id,
      isCategoryRunner: false,
      categoryItemIndex: 0,
      lastSelectedCategoryId,
      scrollY: 0,
    });
  };

  const handleStartQuizFromExplorer = (cat: MenuCategory, item: MenuItem) => {
    setLastSelectedCategoryId(cat.id);
    setSelectedCategory(cat);
    setSelectedItem(item);
    setCurrentTab('train');
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    saveNavStateImmediate({
      currentTab: 'train',
      categoryId: cat.id,
      itemId: item.id,
      isCategoryRunner: false,
      categoryItemIndex: 0,
      lastSelectedCategoryId: cat.id,
      scrollY: 0,
    });
  };

  const handleBackToCategories = () => {
    const catId = selectedCategory ? selectedCategory.id : null;
    setSelectedCategory(null);
    setSelectedItem(null);
    setIsCategoryRunner(false);
    if (catId) {
      setLastSelectedCategoryId(catId);
    }
  };

  const handleQuizEntireCategory = () => {
    if (!selectedCategory || selectedCategory.items.length === 0) return;
    setIsCategoryRunner(true);
    setCategoryItemIndex(0);
    setSelectedItem(selectedCategory.items[0]);
  };

  const handleNextItemInCategory = () => {
    if (!selectedCategory) return;
    const nextIdx = categoryItemIndex + 1;
    if (nextIdx < selectedCategory.items.length) {
      setCategoryItemIndex(nextIdx);
      setSelectedItem(selectedCategory.items[nextIdx]);
    } else {
      // Completed all items in category
      setSelectedItem(null);
      setIsCategoryRunner(false);
    }
  };

  // Check if there is a next item in the current category
  const currentItemIndex = selectedCategory && selectedItem
    ? selectedCategory.items.findIndex(it => it.id === selectedItem.id)
    : -1;
  const hasNextItem = selectedCategory
    ? currentItemIndex >= 0 && currentItemIndex + 1 < selectedCategory.items.length
    : false;

  const handleStepToNextItem = () => {
    if (!selectedCategory || currentItemIndex < 0) return;
    const next = selectedCategory.items[currentItemIndex + 1];
    if (next) {
      setSelectedItem(next);
      setCategoryItemIndex(currentItemIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      {/* Top App Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'train') {
            // Keep category if returning, but clean sub-quiz if moving away
          }
        }}
        stats={stats}
        totalItemsCount={activeTotalItemsCount}
        totalQuestionsCount={activeTotalQuestionsCount}
        onResetStats={() => setShowResetModal(true)}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'train' && (
          <>
            {/* View 1: Quiz screen when Item is selected */}
            {selectedCategory && selectedItem ? (
              <QuizView
                key={`${selectedCategory.id}-${selectedItem.id}`}
                category={selectedCategory}
                item={selectedItem}
                onBackToItems={() => setSelectedItem(null)}
                onBackToMainMenu={handleBackToCategories}
                onNextItem={hasNextItem ? handleStepToNextItem : undefined}
                hasNextItem={hasNextItem}
                onAnswerRecorded={refreshStats}
                language={language}
              />
            ) : selectedCategory ? (
              /* View 2: Item selector inside selected Category */
              <ItemSelector
                category={selectedCategory}
                onBack={handleBackToCategories}
                onSelectItem={handleSelectItem}
                onQuizEntireCategory={handleQuizEntireCategory}
                onOpenTableTrainer={() => setCurrentTab('tables')}
                stats={stats}
                language={language}
              />
            ) : (
              /* View 3: Category selector (Root training screen) */
              <CategorySelector
                categories={activeCategories}
                onSelectCategory={handleSelectCategory}
                stats={stats}
                lastSelectedCategoryId={lastSelectedCategoryId}
                onClearLastSelectedCategory={() => setLastSelectedCategoryId(null)}
                language={language}
              />
            )}
          </>
        )}

        {currentTab === 'exam' && (
          <RandomExam
            categories={activeCategories}
            onFinishExam={refreshStats}
            onAnswerRecorded={refreshStats}
            onExit={() => {
              refreshStats();
              setCurrentTab('train');
            }}
            language={language}
          />
        )}

        {currentTab === 'catalog' && (
          <MenuExplorer
            categories={activeCategories}
            onStartQuiz={handleStartQuizFromExplorer}
            masteredIds={stats.masteredItemIds}
            language={language}
          />
        )}

        {currentTab === 'tables' && (
          <TableOrientationTrainer
            onBack={() => {
              refreshStats();
              setCurrentTab('train');
            }}
            language={language}
          />
        )}

        {currentTab === 'library' && (
          <LibraryView language={language} />
        )}
      </main>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-100">
                Resetovat skóre pro {language === 'en' ? 'anglické menu' : 'české menu'}?
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Tato akce vymaže vaši aktuální sérii, procentuální úspěšnost i splněné položky pro {language === 'en' ? 'anglickou verzi' : 'českou verzi'}. Statistiky pro {language === 'en' ? 'české menu' : 'anglické menu'} zůstanou beze změny.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors"
              >
                Zrušit
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-900/40 transition-colors"
              >
                Ano, resetovat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-800/80 bg-stone-900/60 py-6 text-center text-xs text-stone-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="font-semibold text-stone-300">FUZE Restaurant & Brewery Prague</span>
            </div>
            <span className="hidden sm:inline text-stone-600">·</span>
            <span className="text-stone-400">Všechna práva vyhrazena</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="text-stone-300 font-medium">Vytvořil: Jan Rzounek</span>
          </div>
        </div>
      </footer>

      {/* PWA Offline Connectivity Indicator */}
      <OfflineIndicator language={language} />
    </div>
  );
}
