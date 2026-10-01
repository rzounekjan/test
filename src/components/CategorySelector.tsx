import React, { useEffect } from 'react';
import { MenuCategory } from '../data/menuData';
import { UserStats } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  Utensils, Flame, Soup, Salad, CookingPot, 
  FlameKindling, Droplet, Wheat, Cake, Sparkles, 
  Beer, Wine, GlassWater, ChevronRight, CheckCircle2,
  CupSoda, Coffee, Martini, ShieldAlert, AlertCircle,
  MapPin, LayoutGrid
} from 'lucide-react';

interface CategorySelectorProps {
  categories: MenuCategory[];
  onSelectCategory: (category: MenuCategory) => void;
  stats: UserStats;
  lastSelectedCategoryId?: string | null;
  onClearLastSelectedCategory?: () => void;
  language?: 'cs' | 'en';
}

const ICON_MAP: Record<string, React.ElementType> = {
  Utensils,
  Flame,
  Soup,
  Salad,
  CookingPot,
  FlameKindling,
  Droplet,
  Wheat,
  Cake,
  Sparkles,
  Beer,
  Wine,
  GlassWater,
  CupSoda,
  Coffee,
  Martini,
  ShieldAlert,
  AlertCircle,
  MapPin,
  LayoutGrid
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onSelectCategory,
  stats,
  lastSelectedCategoryId,
  onClearLastSelectedCategory,
  language = 'cs'
}) => {
  // When returning to the main menu with a previously selected category,
  // automatically scroll and center the viewport on that category
  useEffect(() => {
    if (!lastSelectedCategoryId) return;

    const timer = setTimeout(() => {
      const targetElement = document.getElementById(`category-card-${lastSelectedCategoryId}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      onClearLastSelectedCategory?.();
    }, 120);

    return () => clearTimeout(timer);
  }, [lastSelectedCategoryId, onClearLastSelectedCategory]);

  return (
    <div className="space-y-6">
      {/* Intro Hero Banner */}
      <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-stone-900/90 to-amber-950/30 border border-stone-800 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            1. KROK: Vyberte skupinu pokrmů nebo nápojů
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight font-serif mb-2">
            Interaktivní výuka menu restaurace FUZE
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Vyberte si kategorii ze stálého či sezónního lístku a následně zvolte konkrétní podsložku (jídlo). V navazujícím testu systému <strong className="text-amber-400">A, B, C</strong> prověříte své znalosti přesného složení, ingrediencí a specifik přípravy.
          </p>
        </div>
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] || Utensils;
          const itemsCount = cat.items.length;
          const totalCatQuestions = cat.items.reduce((acc, it) => acc + it.questions.length, 0);
          const masteredQuestionsInCat = (stats.masteredQuestionIds || []).filter(qid =>
            cat.items.some(it => it.questions.some(q => q.id === qid))
          ).length;
          const masteredInCat = cat.items.filter(item => {
            const qCount = item.questions.length;
            const qMastered = (stats.masteredQuestionIds || []).filter(qid => item.questions.some(q => q.id === qid)).length;
            return qCount > 0 ? qMastered === qCount : stats.masteredItemIds.includes(item.id);
          }).length;
          const progressPercent = totalCatQuestions > 0
            ? Math.round((masteredQuestionsInCat / totalCatQuestions) * 100)
            : itemsCount > 0 ? Math.round((masteredInCat / itemsCount) * 100) : 0;
          const isFullyMastered = itemsCount > 0 && masteredInCat === itemsCount;
          const isSelected = cat.id === lastSelectedCategoryId;

          return (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              role="button"
              tabIndex={0}
              onClick={() => onSelectCategory(cat)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat);
                }
              }}
              className={`group text-left p-5 rounded-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden scroll-mt-24 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'bg-stone-900 border-2 border-amber-500 shadow-2xl shadow-amber-950/50 ring-2 ring-amber-500/40'
                  : 'bg-stone-900/80 hover:bg-stone-800/90 border border-stone-800/90 hover:border-amber-600/50 shadow-md hover:shadow-xl hover:shadow-amber-950/20'
              }`}
            >
              {/* Highlight accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600'
                    : 'bg-stone-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600'
                }`}
              />

              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-inner'
                        : 'bg-stone-800 border border-stone-700/60 text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs flex-wrap justify-end">
                    {(cat.id === 'plan-stolu' || cat.id === 'rozmisteni-stolu') && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {language === 'en' ? 'Visual Trainer & Rush Drill' : 'Vizuální trenažér & Bleskovka'}
                      </span>
                    )}
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40 animate-pulse">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {language === 'en' ? 'Selected group' : 'Vybraná skupina'}
                      </span>
                    )}
                    {isFullyMastered ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {language === 'en' ? 'Mastered' : 'Zvládnuto'}
                      </span>
                    ) : (
                      <span className="text-stone-400 font-medium">
                        {itemsCount} {language === 'en' ? (itemsCount === 1 ? 'item' : 'items') : (itemsCount === 1 ? 'položka' : itemsCount < 5 ? 'položky' : 'položek')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className={`text-base font-bold transition-colors ${
                    isSelected ? 'text-amber-300' : 'text-stone-100 group-hover:text-amber-300'
                  }`}>
                    {cat.name}
                  </h3>
                  <AudioPronounceButton
                    itemId={`category-${cat.id}`}
                    name={cat.name}
                    description={cat.description}
                    lang={language}
                    size="sm"
                    title={language === 'en' ? 'Pronounce category in English' : 'Přečíst kategorii česky'}
                  />
                </div>
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Progress bar and arrow */}
              <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] mb-1 text-stone-400">
                    <span>Naučeno</span>
                    <span className="font-semibold text-stone-300">{masteredInCat} / {itemsCount} podsložek</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFullyMastered ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-stone-800/60 flex items-center justify-center text-stone-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
