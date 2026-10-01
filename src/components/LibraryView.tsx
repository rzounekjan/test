import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Wine, 
  UtensilsCrossed, 
  Sparkles, 
  Layers, 
  X, 
  ChevronRight, 
  Info, 
  Globe, 
  Flame, 
  CheckCircle2, 
  ExternalLink,
  GlassWater,
  ChefHat
} from 'lucide-react';
import { 
  CULINARY_TERMS, 
  BEVERAGE_ITEMS, 
  CulinaryTerm, 
  BeverageItem 
} from '../data/libraryData';
import {
  CULINARY_TERMS_EN,
  BEVERAGE_ITEMS_EN
} from '../data/libraryDataEn';
import { AudioPronounceButton } from './AudioPronounceButton';

interface LibraryViewProps {
  language?: 'cs' | 'en';
}

type LibraryTab = 'culinary' | 'beverages';

export const LibraryView: React.FC<LibraryViewProps> = ({ language = 'cs' }) => {
  const isEn = language === 'en';

  // Dynamic datasets based on active language
  const activeCulinaryTerms = isEn ? CULINARY_TERMS_EN : CULINARY_TERMS;
  const activeBeverageItems = isEn ? BEVERAGE_ITEMS_EN : BEVERAGE_ITEMS;

  // Active top tab in Library
  const [activeTab, setActiveTab] = useState<LibraryTab>(() => {
    try {
      const saved = sessionStorage.getItem('fuze_library_tab');
      return saved === 'beverages' ? 'beverages' : 'culinary';
    } catch {
      return 'culinary';
    }
  });

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Selected sub-category filter
  const [selectedCulinaryCategory, setSelectedCulinaryCategory] = useState<string>('all');
  const [selectedBeverageCategory, setSelectedBeverageCategory] = useState<string>('all');

  // Modal active item
  const [activeCulinaryModal, setActiveCulinaryModal] = useState<CulinaryTerm | null>(null);
  const [activeBeverageModal, setActiveBeverageModal] = useState<BeverageItem | null>(null);

  const handleTabChange = (tab: LibraryTab) => {
    setActiveTab(tab);
    try {
      sessionStorage.setItem('fuze_library_tab', tab);
    } catch {}
  };

  // Culinary Categories list with spoken descriptions
  const culinaryCategories = useMemo(() => [
    { 
      id: 'all', 
      label: isEn ? 'All Terms' : 'Všechny pojmy',
      description: isEn 
        ? 'All culinary terms, cuts, foreign food names, and techniques in Fuze.' 
        : 'Všechny kulinářské pojmy, masné řezy, cizí názvy a techniky ve Fuze.'
    },
    { 
      id: 'sauces_dressings', 
      label: isEn ? 'Sauces & Salsas' : 'Omáčky a salsy',
      description: isEn 
        ? 'Authentic cold and hot sauces, dressings, marinades, and reductions.' 
        : 'Autentické studené i teplé omáčky, dresinky, marinády a redukce.'
    },
    { 
      id: 'meat_cuts', 
      label: isEn ? 'Meat & Steak Cuts' : 'Maso a masné řezy',
      description: isEn 
        ? 'Heritage breeds, steak cuts, butchery terminology, and pork belly.' 
        : 'Ušlechtilá plemena, steakové řezy, řeznická terminologie a vepřové boky.'
    },
    { 
      id: 'gourmet_ingredients', 
      label: isEn ? 'Gourmet Ingredients' : 'Gurmánské suroviny',
      description: isEn 
        ? 'Specialty gourmet delicacies, fresh cheeses, and premium ingredients.' 
        : 'Speciality, delikatesy, čerstvé sýry a prémiové suroviny.'
    },
    { 
      id: 'culinary_techniques', 
      label: isEn ? 'Cooking Techniques' : 'Kulinářské techniky',
      description: isEn 
        ? 'Gastronomic culinary preparations, slow-cooking, and curing methods.' 
        : 'Gastronomické postupy přípravy, pomalé vaření a zrání.'
    },
    { 
      id: 'world_flavors', 
      label: isEn ? 'World & Asian Flavors' : 'Světové chutě a asijská fúze',
      description: isEn 
        ? 'Asian fusion, citrus flavors, fermented seasonings, and exotic spices.' 
        : 'Asijská fúze, citrusové tóny, fermentovaná ochucovadla a exotické koření.'
    },
    { 
      id: 'pastry_sweets', 
      label: isEn ? 'Pastry & Sweets' : 'Cukrářství a dezerty',
      description: isEn 
        ? 'Artisanal confectionery, sweet doughs, desserts, and finishes.' 
        : 'Řemeslná cukrařina, sladká těsta, dezerty a karamelové trhance.'
    }
  ], [isEn]);

  // Beverage Categories list with spoken descriptions
  const beverageCategories = useMemo(() => [
    { 
      id: 'all', 
      label: isEn ? 'All Drinks' : 'Všechny nápoje',
      description: isEn 
        ? 'Complete beverage encyclopedia: wines, spirits, and craft beers.' 
        : 'Kompletní nápojová encyklopedie: vína, destiláty a piva na čepu.'
    },
    { 
      id: 'wine_white', 
      label: isEn ? 'White Wines' : 'Bílá vína',
      description: isEn 
        ? 'Moravian and international dry, crisp, and aromatic white wines.' 
        : 'Moravská i mezinárodní suchá, svěží a aromatická bílá vína.'
    },
    { 
      id: 'wine_red', 
      label: isEn ? 'Red Wines' : 'Červená vína',
      description: isEn 
        ? 'Full-bodied red wines, pinot noir, and barrel-aged reserve vintages.' 
        : 'Plná červená vína, pinoty a vyzrálá vína z dubových sudů.'
    },
    { 
      id: 'wine_sparkling', 
      label: isEn ? 'Sparkling & Crémant' : 'Šumivá & Sekty',
      description: isEn 
        ? 'Traditional method sparkling wines, crémants, and prosecco.' 
        : 'Sekty kvašené v lahvi tradiční metodou, crémanty a prosecco.'
    },
    { 
      id: 'rum', 
      label: isEn ? 'Rums' : 'Rumy',
      description: isEn 
        ? 'Aged rums from Cuba, Guyana, Dominican Republic, and Guatemala.' 
        : 'Vyzrálé rumy z Kuby, Guyany, Dominikánské republiky a Guatemaly.'
    },
    { 
      id: 'tequila', 
      label: isEn ? 'Tequilas' : 'Tequily',
      description: isEn 
        ? '100% blue agave tequilas: Blanco, Reposado, and Añejo from Jalisco.' 
        : 'Tequily ze 100% modré agáve: Blanco, Reposado i Añejo z Jalisca.'
    },
    { 
      id: 'whisky', 
      label: isEn ? 'Whisky & Bourbon' : 'Whisky & Bourbon',
      description: isEn 
        ? 'Single malt scotch, Irish whiskeys, and American oak bourbons.' 
        : 'Skotské jednosladové whisky, irské whiskey a americké bourbony.'
    },
    { 
      id: 'brandy_cognac', 
      label: isEn ? 'Brandy & Cognac' : 'Brandy & Koňak',
      description: isEn 
        ? 'French cognacs, aged brandies, and fine grape distillates.' 
        : 'Francouzské koňaky, stařené brandy a vinné destiláty.'
    },
    { 
      id: 'liqueur_spirit', 
      label: isEn ? 'Liqueurs & Spirits' : 'Pálenky & Likéry',
      description: isEn 
        ? 'Traditional fruit brandies, herbal liqueurs, and artisan digestifs.' 
        : 'Tradiční ovocné pálenky, bylinné likéry a řemeslné digestivy.'
    },
    { 
      id: 'gin', 
      label: isEn ? 'Gins' : 'Giny',
      description: isEn 
        ? 'London dry gins, artisan Czech gins, and truffle-infused botanicals.' 
        : 'London dry giny, české řemeslné giny a lanýžové botanicals.'
    },
    { 
      id: 'vodka', 
      label: isEn ? 'Vodkas' : 'Vodky',
      description: isEn 
        ? 'Ultra-smooth grain, wheat, and French winter wheat vodkas.' 
        : 'Jemné obilné a francouzské pšeničné vodky.'
    },
    { 
      id: 'beer_craft', 
      label: isEn ? 'Craft Beers' : 'Pivo na čepu',
      description: isEn 
        ? 'Unpasteurized craft lagers and IPAs brewed directly at Fuze brewery.' 
        : 'Nepasterizované ležáky a speciály vařené přímo v pivovaru Fuze.'
    }
  ], [isEn]);

  // Filtered Culinary Terms
  const filteredCulinaryTerms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return activeCulinaryTerms.filter(item => {
      const matchesCategory = selectedCulinaryCategory === 'all' || item.category === selectedCulinaryCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        (item.originalTerm && item.originalTerm.toLowerCase().includes(q)) ||
        item.origin.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.flavorProfile.toLowerCase().includes(q) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(q)) ||
        item.fuzeMenuAppearances.some(app => app.toLowerCase().includes(q)) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCulinaryCategory, activeCulinaryTerms]);

  // Filtered Beverages
  const filteredBeverages = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return activeBeverageItems.filter(item => {
      const matchesCategory = selectedBeverageCategory === 'all' || item.category === selectedBeverageCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.producer.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q) ||
        item.rawIngredients.toLowerCase().includes(q) ||
        item.flavorProfile.toLowerCase().includes(q) ||
        item.foodPairing.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedBeverageCategory, activeBeverageItems]);

  // Current active modal items resolved with language-specific data
  const currentCulinaryModal = useMemo(() => {
    if (!activeCulinaryModal) return null;
    return activeCulinaryTerms.find(t => t.id === activeCulinaryModal.id) || activeCulinaryModal;
  }, [activeCulinaryModal, activeCulinaryTerms]);

  const currentBeverageModal = useMemo(() => {
    if (!activeBeverageModal) return null;
    return activeBeverageItems.find(b => b.id === activeBeverageModal.id) || activeBeverageModal;
  }, [activeBeverageModal, activeBeverageItems]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border border-stone-800 p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>{isEn ? 'FUZE Knowledge Base' : 'Znalostní báze FUZE'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            {isEn ? 'Gastro Library & Encyclopedia' : 'Gastro Knihovna & Encyklopedie'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-400 leading-relaxed">
            {isEn 
              ? 'Complete reference guide of gourmet culinary terms, cuts, sauces, and cooking techniques alongside our full wine and spirits library with ingredients, production secrets, and pairing tips.'
              : 'Kompletní přehled cizích gastronomických názvů, masných řezů, omáček a kulinářských technik z jídelního lístku, doplněný o ucelenou encyklopedii vín, rumů, tequil, whisky a lihovin.'}
          </p>

          {/* Quick Counter badges */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-stone-300">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
              <span><strong>{activeCulinaryTerms.length}</strong> {isEn ? 'culinary terms & ingredients' : 'kulinářských pojmů a surovin'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-stone-300">
              <Wine className="w-3.5 h-3.5 text-amber-400" />
              <span><strong>{activeBeverageItems.length}</strong> {isEn ? 'wines, spirits & craft beers' : 'vín, destilátů a piv na čepu'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mode Switcher: Kulinářský lexikon vs Nápojová encyklopedie */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Interactive Segmented Switcher */}
        <div className="inline-flex p-1 bg-stone-900 border border-stone-800 rounded-xl shadow-inner">
          <button
            type="button"
            onClick={() => handleTabChange('culinary')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'culinary'
                ? 'bg-amber-600 text-stone-950 shadow-md shadow-amber-950/40 font-black'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>{isEn ? 'Culinary Glossary' : 'Kulinářský lexikon'}</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded font-mono ${
              activeTab === 'culinary' ? 'bg-amber-700/50 text-stone-950 font-bold' : 'text-stone-500'
            }`}>
              {activeCulinaryTerms.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('beverages')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'beverages'
                ? 'bg-amber-600 text-stone-950 shadow-md shadow-amber-950/40 font-black'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <GlassWater className="w-4 h-4" />
            <span>{isEn ? 'Beverage Encyclopedia' : 'Nápojová encyklopedie'}</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded font-mono ${
              activeTab === 'beverages' ? 'bg-amber-700/50 text-stone-950 font-bold' : 'text-stone-500'
            }`}>
              {activeBeverageItems.length}
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === 'culinary'
                ? (isEn ? 'Search chimichurri, duroc, cornichons, sauces...' : 'Hledat chimichurri, duroc, cornichons, omáčky...')
                : (isEn ? 'Search wine, rum, tequila, whisky, distillery...' : 'Hledat víno, rum, tequilu, whisky, lihovar...')
            }
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300"
              title={isEn ? 'Clear search' : 'Vymazat hledání'}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sub-Category Filters with Audio Accompaniment */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
        {activeTab === 'culinary' ? (
          culinaryCategories.map(cat => {
            const isSelected = selectedCulinaryCategory === cat.id;
            return (
              <div
                key={cat.id}
                className={`shrink-0 inline-flex items-center rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-950/20'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCulinaryCategory(cat.id)}
                  className="pl-3 pr-1 py-1.5 text-xs font-medium focus:outline-none"
                >
                  {cat.label}
                </button>
                <div className="pr-1.5 py-0.5">
                  <AudioPronounceButton
                    itemId={`subcat-cul-${cat.id}`}
                    name={cat.label}
                    description={cat.description}
                    lang={language}
                    size="xs"
                    title={isEn ? `Listen to subcategory: ${cat.label}` : `Poslechnout podsložku: ${cat.label}`}
                    className="!p-1 !rounded-md bg-transparent hover:bg-stone-800/80 text-stone-400 hover:text-amber-300 border-0 shadow-none"
                  />
                </div>
              </div>
            );
          })
        ) : (
          beverageCategories.map(cat => {
            const isSelected = selectedBeverageCategory === cat.id;
            return (
              <div
                key={cat.id}
                className={`shrink-0 inline-flex items-center rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-950/20'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedBeverageCategory(cat.id)}
                  className="pl-3 pr-1 py-1.5 text-xs font-medium focus:outline-none"
                >
                  {cat.label}
                </button>
                <div className="pr-1.5 py-0.5">
                  <AudioPronounceButton
                    itemId={`subcat-bev-${cat.id}`}
                    name={cat.label}
                    description={cat.description}
                    lang={language}
                    size="xs"
                    title={isEn ? `Listen to subcategory: ${cat.label}` : `Poslechnout podsložku: ${cat.label}`}
                    className="!p-1 !rounded-md bg-transparent hover:bg-stone-800/80 text-stone-400 hover:text-amber-300 border-0 shadow-none"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Results Count & Active Status */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>
          {isEn ? 'Showing ' : 'Zobrazeno '}
          <strong className="text-stone-300">
            {activeTab === 'culinary' ? filteredCulinaryTerms.length : filteredBeverages.length}
          </strong>
          {isEn ? ' items' : ' položek'}
        </span>
        {searchQuery && (
          <span>
            {isEn ? 'Filter active: ' : 'Aktivní filtr: '}
            <strong className="text-amber-400">"{searchQuery}"</strong>
          </span>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: CULINARY GLOSSARY CARDS GRID                                  */}
      {/* ========================================================================= */}
      {activeTab === 'culinary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCulinaryTerms.length === 0 ? (
            <div className="col-span-full py-16 text-center rounded-2xl bg-stone-900/40 border border-stone-800/80">
              <Search className="w-8 h-8 text-stone-600 mx-auto mb-2" />
              <p className="text-stone-400 font-medium">
                {isEn ? 'No culinary terms found matching your query.' : 'Nebyly nalezeny žádné pojmy odpovídající vašemu hledání.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCulinaryCategory('all'); }}
                className="mt-3 text-xs text-amber-400 hover:underline"
              >
                {isEn ? 'Reset filters' : 'Obnovit filtry'}
              </button>
            </div>
          ) : (
            filteredCulinaryTerms.map(term => (
              <div
                key={term.id}
                onClick={() => setActiveCulinaryModal(term)}
                className="group flex flex-col justify-between rounded-xl bg-stone-900 border border-stone-800/90 hover:border-amber-500/50 p-5 transition-all cursor-pointer hover:shadow-lg hover:shadow-amber-950/20"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators (anti-slop guideline) */}
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1.5 font-medium">
                    <span className="text-amber-400/90">{term.categoryName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{term.origin}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors tracking-tight flex items-baseline gap-2 flex-wrap">
                      <span>{term.name}</span>
                      {term.originalTerm && term.originalTerm !== term.name && (
                        <span className="text-xs text-stone-500 font-normal italic">
                          {term.originalTerm}
                        </span>
                      )}
                    </h3>
                    <AudioPronounceButton
                      itemId={`lib-term-${term.id}`}
                      name={term.name}
                      description={`${term.shortDescription} ${isEn ? 'Key ingredients:' : 'Suroviny:'} ${term.ingredients.join(', ')}`}
                      lang={language}
                      size="sm"
                      title={isEn ? `Listen to pronunciation: ${term.name}` : `Poslechnout výslovnost: ${term.name}`}
                      className="shrink-0"
                    />
                  </div>

                  <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                    {term.shortDescription}
                  </p>

                  {/* Key Ingredients snippet */}
                  <div className="mt-3 pt-3 border-t border-stone-800/60">
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      {isEn ? 'Key Ingredients / Components:' : 'Klíčové suroviny / složení:'}
                    </span>
                    <p className="text-xs text-stone-400 line-clamp-2">
                      {term.ingredients.join(', ')}
                    </p>
                  </div>

                  {/* Flavor profile snippet */}
                  <div className="mt-2">
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-0.5">
                      {isEn ? 'Flavor Profile:' : 'Chuťový profil:'}
                    </span>
                    <p className="text-xs text-amber-200/90 italic line-clamp-2">
                      "{term.flavorProfile}"
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <span className="text-stone-500 text-[11px]">
                    {term.fuzeMenuAppearances.length} {isEn ? 'menu dishes' : 'jídel v menu'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>{isEn ? 'Details & Staff Tips' : 'Detail & Tipy pro servis'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: BEVERAGE ENCYCLOPEDIA CARDS GRID                              */}
      {/* ========================================================================= */}
      {activeTab === 'beverages' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBeverages.length === 0 ? (
            <div className="col-span-full py-16 text-center rounded-2xl bg-stone-900/40 border border-stone-800/80">
              <Search className="w-8 h-8 text-stone-600 mx-auto mb-2" />
              <p className="text-stone-400 font-medium">
                {isEn ? 'No beverages found matching your query.' : 'Nebyly nalezeny žádné nápoje odpovídající vašemu hledání.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedBeverageCategory('all'); }}
                className="mt-3 text-xs text-amber-400 hover:underline"
              >
                {isEn ? 'Reset filters' : 'Obnovit filtry'}
              </button>
            </div>
          ) : (
            filteredBeverages.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveBeverageModal(item)}
                className="group flex flex-col justify-between rounded-xl bg-stone-900 border border-stone-800/90 hover:border-amber-500/50 p-5 transition-all cursor-pointer hover:shadow-lg hover:shadow-amber-950/20"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1.5 font-medium">
                    <span className="text-amber-400/90">{item.categoryName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.origin}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-stone-400">{item.abv}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors tracking-tight">
                      {item.name}
                    </h3>
                    <AudioPronounceButton
                      itemId={`lib-bev-${item.id}`}
                      name={item.name}
                      description={`${item.producer}. ${item.categoryName} from ${item.origin}. ${item.flavorProfile}`}
                      lang={language}
                      size="sm"
                      title={isEn ? `Listen to pronunciation: ${item.name}` : `Poslechnout výslovnost: ${item.name}`}
                      className="shrink-0"
                    />
                  </div>

                  <div className="mt-1 flex items-center justify-between text-xs text-stone-400">
                    <span>{item.producer}</span>
                    <span className="font-semibold text-stone-300">{item.price}</span>
                  </div>

                  {/* Raw Ingredients snippet */}
                  <div className="mt-3 pt-3 border-t border-stone-800/60">
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      {isEn ? 'Ingredients & Varieties:' : 'Suroviny & odrůdy:'}
                    </span>
                    <p className="text-xs text-stone-300 line-clamp-2">
                      {item.rawIngredients}
                    </p>
                  </div>

                  {/* Production process snippet */}
                  <div className="mt-2">
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-0.5">
                      {isEn ? 'Production & Aging:' : 'Výroba a zrání:'}
                    </span>
                    <p className="text-xs text-stone-400 line-clamp-2">
                      {item.productionProcess}
                    </p>
                  </div>

                  {/* Flavor snippet */}
                  <div className="mt-2">
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-0.5">
                      {isEn ? 'Tasting Notes:' : 'Aroma a chuť:'}
                    </span>
                    <p className="text-xs text-amber-200/90 italic line-clamp-2">
                      "{item.flavorProfile}"
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <span className="text-stone-500 text-[11px] font-mono">
                    {item.volume}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>{isEn ? 'Pairing & Details' : 'Párování & Detail'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: DETAILED CULINARY TERM DIALOG                                    */}
      {/* ========================================================================= */}
      {currentCulinaryModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveCulinaryModal(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-stone-900 border border-stone-700/80 p-6 sm:p-8 shadow-2xl space-y-6 text-stone-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveCulinaryModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pr-8">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-400 font-medium mb-1">
                  <span className="text-amber-400">{currentCulinaryModal.categoryName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentCulinaryModal.origin}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight">
                  {currentCulinaryModal.name}
                </h3>
                {currentCulinaryModal.originalTerm && (
                  <p className="text-xs text-stone-400 italic mt-0.5">
                    {currentCulinaryModal.originalTerm}
                  </p>
                )}
              </div>
              <AudioPronounceButton
                itemId={`modal-term-${currentCulinaryModal.id}`}
                name={currentCulinaryModal.name}
                description={`${currentCulinaryModal.shortDescription} ${isEn ? 'Key ingredients:' : 'Suroviny:'} ${currentCulinaryModal.ingredients.join(', ')}`}
                lang={language}
                size="md"
                showLabel
                title={isEn ? `Listen to pronunciation: ${currentCulinaryModal.name}` : `Poslechnout výslovnost: ${currentCulinaryModal.name}`}
                className="shrink-0 mt-1"
              />
            </div>

            {/* Main Description */}
            <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
              <p className="text-sm text-stone-200 leading-relaxed font-medium">
                {currentCulinaryModal.shortDescription}
              </p>
            </div>

            {/* Ingredients Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-1.5">
                <ChefHat className="w-4 h-4" />
                <span>{isEn ? 'Exact Ingredients & Composition:' : 'Přesné ingredience a složení:'}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentCulinaryModal.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-stone-800/50 border border-stone-800 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flavor Profile & Culinary Usage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-stone-800/30 border border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {isEn ? 'Flavor Profile:' : 'Chuťový profil a textura:'}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {currentCulinaryModal.flavorProfile}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-800/30 border border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {isEn ? 'Culinary Usage & Preparation:' : 'Kulinářské využití a příprava:'}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {currentCulinaryModal.culinaryUsage}
                </p>
              </div>
            </div>

            {/* Appearances in Fuze Menu */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <UtensilsCrossed className="w-4 h-4" />
                <span>{isEn ? 'Appears in Fuze Menu Dishes:' : 'Vyskytuje se v jídelním lístku FUZE:'}</span>
              </h4>
              <div className="space-y-1.5">
                {currentCulinaryModal.fuzeMenuAppearances.map((dish, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="font-semibold">{dish}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Tips & Selling Points */}
            <div className="p-4 rounded-xl bg-stone-800/70 border border-stone-700/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isEn ? 'Staff Tips & Guest Presentation:' : 'Důležité informace a tipy pro personál k obsluze hosta:'}</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {currentCulinaryModal.staffTips}
              </p>
            </div>

            {/* Bottom close action */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveCulinaryModal(null)}
                className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors"
              >
                {isEn ? 'Close' : 'Zavřít'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: DETAILED BEVERAGE DIALOG                                         */}
      {/* ========================================================================= */}
      {currentBeverageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveBeverageModal(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-stone-900 border border-stone-700/80 p-6 sm:p-8 shadow-2xl space-y-6 text-stone-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveBeverageModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pr-8">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-400 font-medium mb-1">
                  <span className="text-amber-400">{currentBeverageModal.categoryName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentBeverageModal.origin}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentBeverageModal.region}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight">
                  {currentBeverageModal.name}
                </h3>
                <p className="text-xs text-amber-300 font-medium mt-0.5">
                  {currentBeverageModal.producer}
                </p>
              </div>
              <AudioPronounceButton
                itemId={`modal-bev-${currentBeverageModal.id}`}
                name={currentBeverageModal.name}
                description={`${currentBeverageModal.producer}. ${currentBeverageModal.categoryName} from ${currentBeverageModal.origin}. ${currentBeverageModal.flavorProfile}`}
                lang={language}
                size="md"
                showLabel
                title={isEn ? `Listen to pronunciation: ${currentBeverageModal.name}` : `Poslechnout výslovnost: ${currentBeverageModal.name}`}
                className="shrink-0 mt-1"
              />
            </div>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 text-center text-xs">
              <div>
                <span className="text-[11px] text-stone-500 block">{isEn ? 'Serving / Volume' : 'Objem / míra'}</span>
                <strong className="text-stone-200 font-mono text-sm">{currentBeverageModal.volume}</strong>
              </div>
              <div>
                <span className="text-[11px] text-stone-500 block">{isEn ? 'Alcohol Content' : 'Obsah alkoholu'}</span>
                <strong className="text-amber-400 font-mono text-sm">{currentBeverageModal.abv}</strong>
              </div>
              <div>
                <span className="text-[11px] text-stone-500 block">{isEn ? 'Fuze Price' : 'Cena ve Fuze'}</span>
                <strong className="text-stone-200 font-semibold text-sm">{currentBeverageModal.price}</strong>
              </div>
            </div>

            {/* Raw Ingredients Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>{isEn ? 'Raw Ingredients, Varietals & Origin:' : 'Suroviny, odrůdy a složení:'}</span>
              </h4>
              <p className="text-xs text-stone-200 p-3 rounded-lg bg-stone-800/40 border border-stone-800 leading-relaxed">
                {currentBeverageModal.rawIngredients}
              </p>
            </div>

            {/* Production & Distillation Process */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>{isEn ? 'Production Process, Distillation & Aging:' : 'Výrobní postup, destilace a zrání v sudech:'}</span>
              </h4>
              <p className="text-xs text-stone-200 p-3 rounded-lg bg-stone-800/40 border border-stone-800 leading-relaxed">
                {currentBeverageModal.productionProcess}
              </p>
            </div>

            {/* Flavor Profile & Aroma */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{isEn ? 'Tasting Notes & Aromas:' : 'Aroma a chuťový profil:'}</span>
              </h4>
              <p className="text-xs text-amber-200/90 italic p-3 rounded-lg bg-stone-800/40 border border-stone-800 leading-relaxed">
                "{currentBeverageModal.flavorProfile}"
              </p>
            </div>

            {/* Recommended Food Pairing */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <UtensilsCrossed className="w-4 h-4" />
                <span>{isEn ? 'Recommended Food Pairing at Fuze:' : 'Doporučené párování s jídly Fuze:'}</span>
              </h4>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                {currentBeverageModal.foodPairing}
              </p>
            </div>

            {/* Staff Notes & Service Insights */}
            <div className="p-4 rounded-xl bg-stone-800/70 border border-stone-700/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>{isEn ? 'Staff Tips & Story for the Guest:' : 'Důležité informace a příběh pro hosta:'}</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {currentBeverageModal.staffNotes}
              </p>
            </div>

            {/* Bottom close action */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveBeverageModal(null)}
                className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors"
              >
                {isEn ? 'Close' : 'Zavřít'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
