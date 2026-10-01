import React, { useState, useMemo } from 'react';
import { 
  X, Trophy, Target, Flame, AlertTriangle, CheckCircle2, 
  ChevronDown, ChevronRight, Search, RotateCcw, 
  Share2, Check, Utensils, BookOpen, Layers
} from 'lucide-react';
import { AppUser } from '../types/auth';
import { getWaiterDetailedProgress, WaiterDetailedProgress, DetailedCategoryProgress } from '../utils/waiterProgressAnalytics';
import { resetUserStats } from '../utils/storage';

interface WaiterDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AppUser | null;
  onStatsReset?: () => void;
}

export const WaiterDetailsModal: React.FC<WaiterDetailsModalProps> = ({
  isOpen,
  onClose,
  user,
  onStatsReset
}) => {
  const [activeTab, setActiveTab] = useState<'categories' | 'mistakes'>('categories');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastered' | 'partial' | 'mistake' | 'untouched'>('all');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [revision, setRevision] = useState(0);

  const progress: WaiterDetailedProgress | null = useMemo(() => {
    if (!user) return null;
    return getWaiterDetailedProgress(user.id, 'cs');
  }, [user, revision]);

  if (!isOpen || !user || !progress) return null;

  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    progress.categories.forEach(c => { all[c.categoryId] = true; });
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const handleResetUser = () => {
    if (window.confirm(`Opravdu chcete vynulovat veškeré studijní výsledky pro číšníka "${user.name}"?\n\nTato akce nastaví jeho skóre na 0. Výsledky ostatních uživatelů ani administrátora nebudou ovlivněny.`)) {
      resetUserStats(user.id, 'cs');
      resetUserStats(user.id, 'en');
      setRevision(prev => prev + 1);
      if (onStatsReset) onStatsReset();
    }
  };

  const copyEvaluationReport = () => {
    const s = progress.summary;
    const text = `📊 HODNOCENÍ VÝUKY PERSONÁLU – FUZE GASTRO AKADEMIE
Pracovník: ${user.name} (${user.username})
Datum exportu: ${new Date().toLocaleDateString('cs-CZ')}

🏆 Celkový postup: ${s.masteredQuestions} / ${s.totalQuestions} otázek (${s.percentComplete} %)
🍽️ Zvládnuté podsložky menu: ${s.masteredItems} / ${s.totalItems} položek (${s.percentItemsMastered} %)
🎯 Úspěšnost odpovědí: ${s.accuracyPercent} % (${s.correctCount} správně z ${s.totalAnswered} pokusů)
🔥 Nejdelší série (Streak): ${s.bestStreak} správných odpovědí
⚠️ Otázek s chybou k procvičení: ${s.mistakesCount}

PŘEHLED KATEGORIÍ:
${progress.categories.map(c => `- ${c.categoryName}: ${c.percentComplete}% (${c.masteredQuestions}/${c.totalQuestions} ot., ${c.masteredItems}/${c.totalItems} podsložek)`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  // Filter categories and items based on search and status filter
  const filteredCategories: DetailedCategoryProgress[] = progress.categories.map(cat => {
    const matchingItems = cat.items.filter(item => {
      const matchesSearch = searchQuery.trim() === '' || 
        item.itemName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return {
      ...cat,
      items: matchingItems
    };
  }).filter(cat => cat.items.length > 0 || (searchQuery === '' && statusFilter === 'all'));

  const { summary } = progress;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-stone-800 bg-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg shrink-0">
              👤
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-black text-stone-100">
                  {user.name}
                </h2>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
                  {user.role === 'admin' ? '👑 Administrátor' : 'Obsluha / Personál'}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  @{user.username}
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Detailní rozbor zvládnutých podsložek, bodů a chyb v menu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={copyEvaluationReport}
              className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Kopírovat textové hodnocení pro číšníka nebo vedení"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedSummary ? 'Zkopírováno!' : 'Kopírovat report'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Top KPI Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {/* KPI 1: Splněné otázky */}
            <div className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-400 text-xs mb-1">
                <span>Otázky / body</span>
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                  {summary.masteredQuestions} <span className="text-xs font-normal text-stone-400 font-sans">/ {summary.totalQuestions}</span>
                </p>
                <div className="w-full bg-stone-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-amber-500 h-1.5 rounded-full" 
                    style={{ width: `${summary.percentComplete}%` }}
                  />
                </div>
                <p className="text-[11px] text-stone-400 mt-1 font-semibold">
                  {summary.percentComplete} % celého menu
                </p>
              </div>
            </div>

            {/* KPI 2: Zvládnuté podsložky (položky menu) */}
            <div className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-400 text-xs mb-1">
                <span>Zvládnuté podsložky</span>
                <Utensils className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                  {summary.masteredItems} <span className="text-xs font-normal text-stone-400 font-sans">/ {summary.totalItems}</span>
                </p>
                <div className="w-full bg-stone-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-1.5 rounded-full" 
                    style={{ width: `${summary.percentItemsMastered}%` }}
                  />
                </div>
                <p className="text-[11px] text-stone-400 mt-1 font-semibold">
                  {summary.percentItemsMastered} % jídel a nápojů
                </p>
              </div>
            </div>

            {/* KPI 3: Procentuální úspěšnost */}
            <div className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-400 text-xs mb-1">
                <span>Úspěšnost</span>
                <Target className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">
                  {summary.totalAnswered > 0 ? `${summary.accuracyPercent}%` : '–'}
                </p>
                <p className="text-[11px] text-stone-400 mt-2">
                  {summary.correctCount} správně z {summary.totalAnswered} pokusů
                </p>
              </div>
            </div>

            {/* KPI 4: Série & Chyby */}
            <div className="p-3.5 rounded-2xl bg-stone-950/70 border border-stone-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-stone-400 text-xs mb-1">
                <span>Série & Chyby</span>
                <Flame className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-300">Série (Streak):</span>
                  <span className="font-bold text-amber-400 font-mono">🔥 {summary.currentStreak} <span className="text-[10px] text-stone-500">(max {summary.bestStreak})</span></span>
                </div>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-stone-800/80">
                  <span className="text-xs text-stone-300">K docvičení:</span>
                  <span className={`font-bold font-mono ${summary.mistakesCount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {summary.mistakesCount} chyb
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center justify-between border-b border-stone-800 pt-1">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('categories')}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'categories'
                    ? 'border-amber-500 text-amber-400'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Přehled po kategoriích a podsložkách ({progress.categories.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('mistakes')}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'mistakes'
                    ? 'border-rose-500 text-rose-400'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Otázky k procvičení ({progress.mistakes.length})</span>
              </button>
            </div>

            {activeTab === 'categories' && (
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={expandAll}
                  className="text-stone-400 hover:text-stone-200 underline cursor-pointer"
                >
                  Rozbalit vše
                </button>
                <span className="text-stone-600">·</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="text-stone-400 hover:text-stone-200 underline cursor-pointer"
                >
                  Sbalit vše
                </button>
              </div>
            )}
          </div>

          {activeTab === 'categories' ? (
            /* Tab 1: Categories and Sub-items list */
            <div className="space-y-4">
              {/* Search and Filters Bar */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Vyhledat podsložku (např. tatarák, burger, pilsner, káva)..."
                    className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
                  <button
                    type="button"
                    onClick={() => setStatusFilter('all')}
                    className={`px-2.5 py-1.5 rounded-lg font-semibold shrink-0 cursor-pointer ${
                      statusFilter === 'all'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-stone-950 text-stone-400 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    Vše ({summary.totalItems})
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatusFilter('mastered')}
                    className={`px-2.5 py-1.5 rounded-lg font-semibold shrink-0 cursor-pointer ${
                      statusFilter === 'mastered'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-stone-950 text-stone-400 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    🏆 Zvládnuto ({summary.masteredItems})
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatusFilter('partial')}
                    className={`px-2.5 py-1.5 rounded-lg font-semibold shrink-0 cursor-pointer ${
                      statusFilter === 'partial'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-stone-950 text-stone-400 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    ⏳ Rozpracováno
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatusFilter('mistake')}
                    className={`px-2.5 py-1.5 rounded-lg font-semibold shrink-0 cursor-pointer ${
                      statusFilter === 'mistake'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-stone-950 text-stone-400 border border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    ⚠️ S chybou
                  </button>
                </div>
              </div>

              {/* Categories Accordion */}
              <div className="space-y-3">
                {filteredCategories.map((cat) => {
                  // If searching or filtering, automatically expand categories with matching items
                  const isExpanded = searchQuery || statusFilter !== 'all' || Boolean(expandedCategories[cat.categoryId]);

                  return (
                    <div
                      key={cat.categoryId}
                      className="bg-stone-950/70 border border-stone-800 rounded-2xl overflow-hidden transition-all"
                    >
                      {/* Category Header Row */}
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.categoryId)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-stone-800/40 transition-colors cursor-pointer gap-3"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-xl shrink-0 ${
                            cat.percentComplete === 100 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                              : cat.percentComplete > 0 
                              ? 'bg-amber-950 text-amber-400 border border-amber-800' 
                              : 'bg-stone-900 text-stone-500 border border-stone-800'
                          }`}>
                            <BookOpen className="w-4 h-4" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-stone-200 text-sm truncate">
                                {cat.categoryName}
                              </h3>
                              {cat.percentComplete === 100 && (
                                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                  100% HOTOVO
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono mt-0.5">
                              <span><strong className="text-amber-300 font-bold">{cat.masteredQuestions}</strong>/{cat.totalQuestions} otázek</span>
                              <span>•</span>
                              <span><strong className="text-stone-300">{cat.masteredItems}</strong>/{cat.totalItems} podsložek</span>
                            </div>
                          </div>
                        </div>

                        {/* Progress Indicator & Arrow */}
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right hidden sm:block">
                            <span className="font-mono font-bold text-xs text-stone-300">
                              {cat.percentComplete}%
                            </span>
                            <div className="w-24 bg-stone-800 rounded-full h-1.5 mt-1 overflow-hidden">
                              <div
                                className={`h-1.5 rounded-full ${
                                  cat.percentComplete === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                                }`}
                                style={{ width: `${cat.percentComplete}%` }}
                              />
                            </div>
                          </div>

                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-stone-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-stone-400" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Items (Podsložky) */}
                      {isExpanded && (
                        <div className="border-t border-stone-800/80 bg-stone-900/40 p-3 sm:p-4">
                          {cat.items.length === 0 ? (
                            <p className="text-xs text-stone-500 italic py-2 text-center">
                              Žádná podsložka v této kategorii neodpovídá zvolenému filtru.
                            </p>
                          ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                              {cat.items.map((item) => {
                                return (
                                  <div
                                    key={item.itemId}
                                    className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                                      item.status === 'mastered'
                                        ? 'bg-emerald-950/20 border-emerald-900/40'
                                        : item.status === 'mistake'
                                        ? 'bg-rose-950/20 border-rose-900/40'
                                        : item.status === 'partial'
                                        ? 'bg-amber-950/20 border-amber-900/40'
                                        : 'bg-stone-950/60 border-stone-800/80'
                                    }`}
                                  >
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-stone-200 text-xs sm:text-sm truncate" title={item.itemName}>
                                          {item.itemName}
                                        </h4>
                                        <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-0.5">
                                          {item.weight && <span>{item.weight}</span>}
                                          {item.price && <span>• {item.price}</span>}
                                        </div>
                                      </div>

                                      {/* Status Pill */}
                                      <div className="shrink-0">
                                        {item.status === 'mastered' ? (
                                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span>Zvládnuto</span>
                                          </span>
                                        ) : item.status === 'mistake' ? (
                                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold">
                                            <AlertTriangle className="w-3 h-3" />
                                            <span>S chybou</span>
                                          </span>
                                        ) : item.status === 'partial' ? (
                                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                                            <span>{item.masteredQuestions}/{item.totalQuestions} otázek</span>
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 border border-stone-700 text-[10px]">
                                            Nezahájeno
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    {/* Item Progress Bar */}
                                    <div className="mt-2.5 pt-2 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                                      <div className="w-2/3 bg-stone-900 rounded-full h-1.5 overflow-hidden border border-stone-800">
                                        <div
                                          className={`h-1.5 rounded-full ${
                                            item.status === 'mastered'
                                              ? 'bg-emerald-500'
                                              : item.status === 'mistake'
                                              ? 'bg-rose-500'
                                              : 'bg-amber-500'
                                          }`}
                                          style={{ width: `${item.percent}%` }}
                                        />
                                      </div>
                                      <span>{item.masteredQuestions}/{item.totalQuestions} ({item.percent}%)</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Tab 2: Mistakes / Weak spots breakdown */
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Níže vidíte konkrétní otázky, ve kterých číšník naposledy chyboval. Tyto otázky systém automaticky zařazuje přednostně do zkoušení, dokud je číšník nezodpoví správně.
                </span>
              </div>

              {progress.mistakes.length === 0 ? (
                <div className="py-12 text-center bg-stone-950/50 rounded-2xl border border-stone-800">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2 opacity-80" />
                  <h4 className="font-bold text-stone-200 text-sm">Žádné zaznamenané chyby!</h4>
                  <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
                    Číšník nemá v tuto chvíli žádné nezvládnuté otázky, nebo ještě testy nespustil.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {progress.mistakes.map((m, idx) => (
                    <div
                      key={`${m.questionId}-${idx}`}
                      className="p-3.5 rounded-xl bg-stone-950/80 border border-rose-900/40 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-rose-300">
                          {m.itemName}
                        </span>
                        <span className="text-[11px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                          {m.categoryName}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-200 font-medium">
                        „{m.questionText}“
                      </p>

                      <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-900/40 text-xs text-emerald-300">
                        <span className="font-bold text-emerald-400">Správná odpověď: </span>
                        {m.correctAnswer}
                      </div>

                      {m.explanation && (
                        <p className="text-[11px] text-stone-400 italic">
                          💡 {m.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-5 sm:px-6 py-3 border-t border-stone-800 bg-stone-950/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleResetUser}
            className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 hover:text-white border border-rose-900/60 hover:border-rose-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>Vynulovat výsledky tohoto číšníka na 0</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Zavřít detail
          </button>
        </div>
      </div>
    </div>
  );
};
