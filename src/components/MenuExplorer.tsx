import React, { useState, useEffect } from 'react';
import { MenuCategory, MenuItem } from '../data/menuData';
import { Search, Play, HelpCircle, Utensils, CheckCircle2, ChevronRight, Tag } from 'lucide-react';
import { AudioPronounceButton } from './AudioPronounceButton';

interface MenuExplorerProps {
  categories: MenuCategory[];
  onStartQuiz: (cat: MenuCategory, item: MenuItem) => void;
  masteredIds: string[];
  language?: 'cs' | 'en';
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  categories,
  onStartQuiz,
  masteredIds,
  language = 'cs'
}) => {
  const [search, setSearch] = useState(() => {
    try {
      return sessionStorage.getItem('fuze_catalog_search') || '';
    } catch (e) {
      return '';
    }
  });
  const [selectedCatId, setSelectedCatId] = useState<string>(() => {
    try {
      return sessionStorage.getItem('fuze_catalog_cat') || 'all';
    } catch (e) {
      return 'all';
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('fuze_catalog_search', search);
      sessionStorage.setItem('fuze_catalog_cat', selectedCatId);
    } catch (e) {}
  }, [search, selectedCatId]);

  const filteredItems = categories.flatMap(cat => {
    if (selectedCatId !== 'all' && cat.id !== selectedCatId) return [];
    return cat.items
      .filter(item => {
        const q = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      })
      .map(item => ({ item, category: cat }));
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 p-6 sm:p-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Official Menu Catalog' : 'Katalog menu dle lístků'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-100 mb-2">
            {language === 'en' ? 'Official FUZE Restaurant Menu' : 'Oficiální lístek restaurace FUZE'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {language === 'en'
              ? 'Menu items and recipes exactly according to official FUZE menus. Listen to authentic English pronunciation or launch quiz tests for each item.'
              : 'Položky a jejich oficiální popis přesně dle dodaných lístků. U každé položky můžete ihned spustit výukový test A, B, C.'}
          </p>
        </div>

        {/* Filter & Search */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={language === 'en' ? 'Filter ingredient, dish, drink, sauce...' : 'Filtrovat ingredienci, pokrm, omáčku...'}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <select
            value={selectedCatId}
            onChange={(e) => setSelectedCatId(e.target.value)}
            className="bg-stone-950 border border-stone-800 text-stone-200 text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="all">{language === 'en' ? `All categories (${categories.length})` : `Všechny skupiny (${categories.length})`}</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.items.length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Item list */}
      <div>
        <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
          {language === 'en' ? `Found ${filteredItems.length} items` : `Nalezeno ${filteredItems.length} podsložek`}
        </div>

        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-stone-900/40 border border-stone-800 rounded-xl text-stone-400 text-sm">
            {language === 'en' ? 'No items match your search query.' : 'Žádné pokrmy neodpovídají zadanému dotazu.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map(({ item, category }) => {
              const isMastered = masteredIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-xl bg-stone-900/80 border border-stone-800 p-5 flex flex-col justify-between hover:border-amber-600/40 transition-all group shadow-sm hover:shadow-lg hover:shadow-amber-950/20"
                >
                  <div>
                    {/* Category tag & status */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-amber-500/90 uppercase tracking-wider">
                        {category.name}
                      </span>
                      {isMastered && (
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3" />
                          {language === 'en' ? 'Mastered' : 'Naučeno'}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
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

                    <div className="flex items-center gap-2 flex-wrap text-xs text-stone-400 mb-2">
                      {item.weight && (
                        <span className="bg-stone-800 px-2 py-0.5 rounded text-[11px] text-stone-300">
                          {item.weight}
                        </span>
                      )}
                      {item.price && (
                        <span className="text-amber-400 font-bold">
                          {item.price}
                        </span>
                      )}
                      {item.allergens && item.allergens.length > 0 && (
                        <span className="text-[10px] text-stone-500">
                          {language === 'en' ? 'Allergens:' : 'Alg:'} {item.allergens.join('/')}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-300 italic mb-2 leading-relaxed">
                      "{item.description}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-stone-500">
                      {item.questions.length} {language === 'en' ? 'questions' : 'otázky A, B, C'}
                    </span>

                    <button
                      onClick={() => onStartQuiz(category, item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'en' ? 'Practice' : 'Testovat'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
