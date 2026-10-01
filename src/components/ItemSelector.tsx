import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../data/menuData';
import { UserStats } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  ArrowLeft, Search, CheckCircle2, Play, 
  HelpCircle, Sparkles, BookOpen, MapPin, Compass, Cloud
} from 'lucide-react';

interface ItemSelectorProps {
  category: MenuCategory;
  onBack: () => void;
  onSelectItem: (item: MenuItem) => void;
  onQuizEntireCategory: () => void;
  onOpenTableTrainer?: () => void;
  stats: UserStats;
  language?: 'cs' | 'en';
  onOpenSync?: () => void;
}

export const ItemSelector: React.FC<ItemSelectorProps> = ({
  category,
  onBack,
  onSelectItem,
  onQuizEntireCategory,
  onOpenTableTrainer,
  stats,
  language = 'cs',
  onOpenSync
}) => {
  const [search, setSearch] = useState('');

  const filteredItems = category.items.filter(item => {
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/50 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98] w-fit group"
          title={language === 'en' ? 'Return to Main Menu' : 'Návrat do Hlavní nabídky'}
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
          <span>{language === 'en' ? 'Back to Main Menu' : 'Zpět do Hlavní nabídky'}</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          {onOpenSync && (
            <button
              onClick={onOpenSync}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/40 text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
              title={language === 'en' ? 'Synchronize ABC quiz progress between mobile and PC' : 'Synchronizovat výsledky výuky ABC s PC / mobilem'}
            >
              <Cloud className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? 'Sync PC ↔ Mobile' : 'Sync Mobil ↔ PC'}</span>
            </button>
          )}

          {category.items.length > 1 && (
            <button
              onClick={onQuizEntireCategory}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? `Test Entire Category (${category.items.length} items)` : `Otestovat celou kategorii (${category.items.length} položek)`}</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Title Header */}
      <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-1.5">
          <span>{language === 'en' ? 'Category' : 'Skupina'}</span>
          <span>·</span>
          <span>{category.items.length} {language === 'en' ? 'items' : 'podsložek'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight font-serif mb-2">
          {category.name}
        </h2>
        <p className="text-sm text-stone-300 max-w-2xl leading-relaxed">
          {category.description}
        </p>

        {/* Search bar inside category */}
        <div className="mt-4 relative max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'en' ? 'Search item or ingredient...' : 'Hledat podsložku nebo surovinu...'}
            className="w-full bg-stone-950/80 border border-stone-800 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Special Interactive Table Trainer Banner when viewing plan-stolu */}
      {(category.id === 'plan-stolu' || category.id === 'rozmisteni-stolu') && onOpenTableTrainer && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/50 via-stone-900 to-amber-900/30 border-2 border-amber-500/70 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-amber-950/50">
              <MapPin className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {language === 'en' ? 'Interactive PC Floor Plan' : 'Interaktivní PC trenažér & Bleskovka'}
              </div>
              <h4 className="text-base sm:text-lg font-black text-stone-100">
                {language === 'en' ? 'Interactive Floor Plan: Visual Trainer & Rush Drill' : 'Interaktivní plán stolů: Vizuální trenažér & Bleskovka'}
              </h4>
              <p className="text-xs text-stone-300 mt-0.5 max-w-xl">
                {language === 'en'
                  ? 'Practice 3-digit table identification on the interactive PC map or test your speed in the 60s dinner rush drill!'
                  : 'Procvičujte hledání třímístných čísel stolů na interaktivní mapě pro PC nebo otestujte své reflexy v 60vteřinové bleskovce!'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTableTrainer}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>{language === 'en' ? 'Launch Visual Trainer & Drill' : 'Spustit Vizuální trenažér & Bleskovku'}</span>
          </button>
        </div>
      )}

      {/* List of Sub-Items */}
      <div>
        <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
          {language === 'en' ? `STEP 2: Select an item to practice (${filteredItems.length})` : `2. KROK: Vyberte podsložku k procvičení (${filteredItems.length})`}
        </div>

        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-stone-900/30 border border-stone-800/60 rounded-xl text-stone-400 text-sm">
            {language === 'en' ? `No items match the filter "${search}".` : `Nenalezena žádná podsložka odpovídající filtru "${search}".`}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const masteredQuestionsCount = (stats.masteredQuestionIds || []).filter(qid =>
                item.questions.some(q => q.id === qid)
              ).length;
              const isMastered = item.questions.length > 0
                ? masteredQuestionsCount === item.questions.length
                : stats.masteredItemIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-600/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:shadow-amber-950/20"
                >
                  <div>
                    {/* Item Top Info */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap text-xs text-stone-400 mb-1">
                          {item.weight && (
                            <span className="font-semibold text-stone-300 bg-stone-800/80 px-2 py-0.5 rounded text-[11px]">
                              {item.weight}
                            </span>
                          )}
                          {item.price && (
                            <span className="font-bold text-amber-400">
                              {item.price}
                            </span>
                          )}
                          {item.allergens && item.allergens.length > 0 && (
                            <span className="text-[11px] text-stone-400">
                              {language === 'en' ? 'Allergens:' : 'Alergeny:'} {item.allergens.join('/')}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                            {item.name}
                          </h3>
                          <AudioPronounceButton
                            itemId={item.id}
                            name={item.name}
                            description={item.description}
                            lang={language}
                            size="sm"
                            title={language === 'en' ? 'Listen to English pronunciation' : 'Přečíst název a složení česky'}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {masteredQuestionsCount > 0 && !isMastered && (
                          <span
                            title={`${masteredQuestionsCount} z ${item.questions.length} otázek zodpovězeno správně`}
                            className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-950/60 border border-amber-800/50 text-amber-300"
                          >
                            {masteredQuestionsCount}/{item.questions.length}
                          </span>
                        )}
                        {isMastered && (
                          <span 
                            title={language === 'en' ? 'Item mastered in quiz' : 'Tato položka byla úspěšně zvládnuta v testu'}
                            className="shrink-0 p-1 rounded-full bg-emerald-950/70 border border-emerald-700/50 text-emerald-400 flex items-center gap-1 px-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-[10px] font-bold">{language === 'en' ? 'Mastered' : 'Zvládnuto'}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Official description */}
                    <p className="text-xs text-stone-300 italic mb-3 leading-relaxed">
                      "{item.description}"
                    </p>

                    {item.notes && (
                      <p className="text-[11px] text-stone-400 mb-3 bg-stone-950/60 p-2 rounded border border-stone-800/60">
                        💡 {item.notes}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                      <HelpCircle className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span>
                        {masteredQuestionsCount > 0 ? (
                          <>
                            <strong className="text-emerald-400 font-semibold">{masteredQuestionsCount}</strong>/{item.questions.length} {language === 'en' ? 'questions mastered' : 'otázek splněno'}
                          </>
                        ) : (
                          <>{item.questions.length} {language === 'en' ? 'questions A, B, C' : 'otázek A, B, C'}</>
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <AudioPronounceButton
                        itemId={`btn-${item.id}`}
                        name={item.name}
                        description={item.description}
                        lang={language}
                        size="md"
                        showLabel={true}
                        title={language === 'en' ? 'Pronounce name & ingredients in English' : 'Přečíst název a složení česky'}
                      />

                      <button
                        onClick={() => onSelectItem(item)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow-md shadow-amber-950/40 transition-all hover:scale-[1.02]"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{language === 'en' ? 'Start quiz' : 'Spustit test'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom back to main menu button bubble */}
      <div className="pt-4 border-t border-stone-800 flex justify-center sm:justify-start">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/50 text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98] group"
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
          <span>{language === 'en' ? 'Back to Main Menu' : 'Zpět do Hlavní nabídky'}</span>
        </button>
      </div>
    </div>
  );
};
