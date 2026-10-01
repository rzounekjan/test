import React, { useState, useMemo, useEffect, useRef } from 'react';
import { TABLES_FLOOR_1, TABLES_FLOOR_2, TableDef, getTablesForFloor } from '../data/tableLayoutData';
import { soundManager } from '../utils/sound';
import { 
  ArrowLeft, Search, Trophy, Zap, 
  Eye, EyeOff, RotateCcw, MapPin, ZoomIn, ZoomOut, Maximize2, Layers
} from 'lucide-react';

interface TableOrientationTrainerProps {
  onBack: () => void;
  language?: 'cs' | 'en';
}

type TrainingMode = 'visual-trainer' | 'rush-60s';

export const TableOrientationTrainer: React.FC<TableOrientationTrainerProps> = ({
  onBack,
  language = 'cs'
}) => {
  // --- Floor state: 1. patro (1. NP) vs 2. patro (2. NP) ---
  const [activeFloor, setActiveFloor] = useState<1 | 2>(1);

  // Active training mode
  const [activeMode, setActiveMode] = useState<TrainingMode>('visual-trainer');
  const [selectedTable, setSelectedTable] = useState<TableDef | null>(null);
  const [hoveredTable, setHoveredTable] = useState<TableDef | null>(null);
  const [hideTableNumbers, setHideTableNumbers] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Sub-mode for Visual Trainer: 'point-and-click' or 'identify'
  const [trainerSubMode, setTrainerSubMode] = useState<'point-and-click' | 'identify'>('point-and-click');

  // Tables strictly for the active floor
  const currentFloorTables = useMemo(() => {
    return getTablesForFloor(activeFloor);
  }, [activeFloor]);

  // --- Game state: Find & Identify ---
  const [targetTable, setTargetTable] = useState<TableDef | null>(null);
  const [feedback, setFeedback] = useState<{ tableId: string; correct: boolean } | null>(null);
  const [streak, setStreak] = useState<number>(0);

  // Separate records per floor for Streak
  const [bestStreakF1, setBestStreakF1] = useState<number>(() => {
    const saved = localStorage.getItem('fuze_best_table_streak_floor1');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [bestStreakF2, setBestStreakF2] = useState<number>(() => {
    const saved = localStorage.getItem('fuze_best_table_streak_floor2');
    return saved ? parseInt(saved, 10) : 0;
  });

  const bestStreak = activeFloor === 1 ? bestStreakF1 : bestStreakF2;

  const [score, setScore] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [identifyOptions, setIdentifyOptions] = useState<string[]>([]);

  // --- Game state: Rush 60s ---
  const [rushTimeLeft, setRushTimeLeft] = useState<number>(60);
  const [rushActive, setRushActive] = useState<boolean>(false);
  const [rushScore, setRushScore] = useState<number>(0);

  // Separate records per floor for Rush Drill
  const [rushBestScoreF1, setRushBestScoreF1] = useState<number>(() => {
    const saved = localStorage.getItem('fuze_best_rush_score_floor1');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [rushBestScoreF2, setRushBestScoreF2] = useState<number>(() => {
    const saved = localStorage.getItem('fuze_best_rush_score_floor2');
    return saved ? parseInt(saved, 10) : 0;
  });

  const rushBestScore = activeFloor === 1 ? rushBestScoreF1 : rushBestScoreF2;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Pick a random table strictly from the current floor
  const pickNewTarget = (excludeId?: string) => {
    const pool = currentFloorTables.filter(t => t.id !== excludeId);
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setTargetTable(random);
    setFeedback(null);

    // Prepare 4 options strictly from this floor for identify sub-mode
    const options = [random.tableNumber];
    const otherTables = pool.filter(t => t.id !== random.id);
    while (options.length < 4 && otherTables.length > 0) {
      const idx = Math.floor(Math.random() * otherTables.length);
      const opt = otherTables[idx].tableNumber;
      if (!options.includes(opt)) {
        options.push(opt);
      }
      otherTables.splice(idx, 1);
    }
    setIdentifyOptions(options.sort(() => Math.random() - 0.5));
  };

  // When floor, mode, or submode changes: reset target to current floor
  useEffect(() => {
    setSelectedTable(null);
    setFeedback(null);
    setStreak(0);
    setScore(0);
    setAnsweredCount(0);
    setCorrectCount(0);

    if (activeMode === 'visual-trainer') {
      pickNewTarget();
    } else if (activeMode === 'rush-60s') {
      setRushActive(false);
      setRushTimeLeft(60);
      setRushScore(0);
      setTargetTable(null);
    }
  }, [activeFloor, activeMode, trainerSubMode]);

  // Rush hour countdown timer
  useEffect(() => {
    if (rushActive && rushTimeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setRushTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (rushActive && rushTimeLeft === 0) {
      setRushActive(false);
      soundManager.playFanfare();
      if (activeFloor === 1) {
        if (rushScore > rushBestScoreF1) {
          setRushBestScoreF1(rushScore);
          localStorage.setItem('fuze_best_rush_score_floor1', String(rushScore));
        }
      } else {
        if (rushScore > rushBestScoreF2) {
          setRushBestScoreF2(rushScore);
          localStorage.setItem('fuze_best_rush_score_floor2', String(rushScore));
        }
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [rushActive, rushTimeLeft, rushScore, activeFloor, rushBestScoreF1, rushBestScoreF2]);

  const handleStartRush = () => {
    setRushScore(0);
    setRushTimeLeft(60);
    setRushActive(true);
    pickNewTarget();
  };

  const handleFloorChange = (floor: 1 | 2) => {
    if (rushActive) {
      setRushActive(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    setActiveFloor(floor);
    soundManager.playClick();
  };

  // Table click handler on the SVG map
  const handleTableClick = (table: TableDef) => {
    setSelectedTable(table);

    if ((activeMode === 'visual-trainer' && trainerSubMode === 'point-and-click') || (activeMode === 'rush-60s' && rushActive)) {
      if (!targetTable) return;

      const isCorrect = table.id === targetTable.id;
      setFeedback({ tableId: table.id, correct: isCorrect });
      setAnsweredCount(prev => prev + 1);

      if (isCorrect) {
        soundManager.playCorrect();
        const nextStreak = streak + 1;
        setStreak(nextStreak);
        
        // Save best streak per floor
        if (activeFloor === 1) {
          if (nextStreak > bestStreakF1) {
            setBestStreakF1(nextStreak);
            localStorage.setItem('fuze_best_table_streak_floor1', String(nextStreak));
          }
        } else {
          if (nextStreak > bestStreakF2) {
            setBestStreakF2(nextStreak);
            localStorage.setItem('fuze_best_table_streak_floor2', String(nextStreak));
          }
        }

        setCorrectCount(prev => prev + 1);
        setScore(prev => prev + 10 + nextStreak * 2);

        if (activeMode === 'rush-60s') {
          setRushScore(prev => prev + 10 + Math.min(nextStreak, 5) * 5);
        }

        setTimeout(() => {
          pickNewTarget(table.id);
        }, 500);
      } else {
        soundManager.playIncorrect();
        setStreak(0);
      }
    } else {
      soundManager.playClick();
    }
  };

  // Multiple choice click in 'identify' mode
  const handleIdentifyAnswer = (selectedNum: string) => {
    if (!targetTable) return;
    setAnsweredCount(prev => prev + 1);

    const isCorrect = selectedNum === targetTable.tableNumber;
    setFeedback({ tableId: targetTable.id, correct: isCorrect });

    if (isCorrect) {
      soundManager.playCorrect();
      const nextStreak = streak + 1;
      setStreak(nextStreak);

      if (activeFloor === 1) {
        if (nextStreak > bestStreakF1) {
          setBestStreakF1(nextStreak);
          localStorage.setItem('fuze_best_table_streak_floor1', String(nextStreak));
        }
      } else {
        if (nextStreak > bestStreakF2) {
          setBestStreakF2(nextStreak);
          localStorage.setItem('fuze_best_table_streak_floor2', String(nextStreak));
        }
      }

      setCorrectCount(prev => prev + 1);
      setScore(prev => prev + 10 + nextStreak * 2);

      setTimeout(() => {
        pickNewTarget(targetTable.id);
      }, 550);
    } else {
      soundManager.playIncorrect();
      setStreak(0);
    }
  };

  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 100;

  // Search filter strictly on active floor
  const searchedTable = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.trim().toLowerCase();
    return currentFloorTables.find(t => t.tableNumber.toLowerCase() === q);
  }, [searchQuery, currentFloorTables]);

  return (
    <div className="w-full space-y-4">
      {/* Top Bar: Navigation & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-900/80 p-4 rounded-2xl border border-stone-800 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'en' ? 'Back' : 'Zpět'}</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-500/20 text-amber-400">
                <MapPin className="w-4 h-4" />
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-stone-100 tracking-tight">
                {language === 'en' ? 'Floor Plan & Table Numbers' : 'Plán stolů – Výuka'}
              </h1>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                PC Format
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              {language === 'en'
                ? `Oddělený trénink po patrech: 1. patro (53 stolů) & 2. patro (47 stolů)`
                : `Oddělený trénink po patrech: 1. patro (53 stolů) & 2. patro (47 stolů)`}
            </p>
          </div>
        </div>

        {/* Global Reset stats */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => {
              setStreak(0);
              setScore(0);
              setAnsweredCount(0);
              setCorrectCount(0);
              pickNewTarget();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-semibold transition-colors"
            title="Reset training session"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Reset' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* FLOOR SELECTOR TABS (1. PATRO vs 2. PATRO - ODDĚLENÉ TESTY) */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-2 gap-3 p-1.5 bg-stone-950/80 rounded-2xl border border-stone-800">
        <button
          onClick={() => handleFloorChange(1)}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-black text-sm transition-all ${
            activeFloor === 1
              ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-950/40 scale-[1.01]'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{language === 'en' ? '1st Floor (1. NP)' : '1. patro (1. NP)'}</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            activeFloor === 1 ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-stone-400'
          }`}>
            53 {language === 'en' ? 'tables' : 'stolů'}
          </span>
        </button>

        <button
          onClick={() => handleFloorChange(2)}
          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-black text-sm transition-all ${
            activeFloor === 2
              ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-950/40 scale-[1.01]'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{language === 'en' ? '2nd Floor (2. NP)' : '2. patro (2. NP)'}</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
            activeFloor === 2 ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-stone-400'
          }`}>
            47 {language === 'en' ? 'tables' : 'stolů'}
          </span>
        </button>
      </div>

      {/* Mode Selector Tabs: Exactly 2 modes (Vizuální trenažér & Bleskovka) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => setActiveMode('visual-trainer')}
          className={`flex items-center justify-center gap-3 p-4 rounded-xl border text-sm font-black transition-all ${
            activeMode === 'visual-trainer'
              ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500/40'
              : 'bg-stone-900/70 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <MapPin className="w-5 h-5 text-amber-400" />
          <div className="text-left">
            <div className="text-sm font-black">
              {language === 'en' ? '1. Visual Trainer' : '1. Vizuální trenažér'}
            </div>
            <div className="text-[11px] font-normal text-stone-400">
              {language === 'en' ? 'Locate table or identify flashing target' : `Hledání stolu & poznávání (${activeFloor}. patro)`}
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveMode('rush-60s')}
          className={`flex items-center justify-center gap-3 p-4 rounded-xl border text-sm font-black transition-all ${
            activeMode === 'rush-60s'
              ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500/40'
              : 'bg-stone-900/70 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
          }`}
        >
          <Zap className="w-5 h-5 text-amber-400 fill-current" />
          <div className="text-left">
            <div className="text-sm font-black">
              {language === 'en' ? '2. Rush Hour (60s Drill)' : '2. Bleskovka (60s špička)'}
            </div>
            <div className="text-[11px] font-normal text-stone-400">
              {language === 'en' ? 'High-speed reflex test with timer' : `Rychlostní test reflexů (${activeFloor}. patro)`}
            </div>
          </div>
        </button>
      </div>

      {/* Task / Mission Banner */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-stone-900 via-stone-900/95 to-amber-950/20 border border-stone-800 shadow-xl relative overflow-hidden">
        {activeMode === 'visual-trainer' && targetTable && (
          <div className="space-y-3">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{language === 'en' ? 'Visual Trainer' : 'Vizuální trenažér'} · {activeFloor}. patro</span>
                </div>

                {trainerSubMode === 'point-and-click' ? (
                  <h2 className="text-xl sm:text-2xl font-black text-stone-100 flex items-center gap-3 flex-wrap">
                    <span>{language === 'en' ? 'Locate and click table:' : 'Najdi a klikni na stůl:'}</span>
                    <span className="px-4 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-black text-2xl sm:text-3xl tracking-wider shadow-lg shadow-amber-950/50">
                      {targetTable.tableNumber}
                    </span>
                  </h2>
                ) : (
                  <h2 className="text-xl sm:text-2xl font-black text-stone-100 flex items-center gap-2 flex-wrap">
                    <span>{language === 'en' ? 'Which table is pulsing with the gold ring?' : 'Který stůl pulzuje zlatou září na plánu?'}</span>
                  </h2>
                )}
              </div>

              {/* Sub-mode selector & Stats */}
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <div className="inline-flex p-1 rounded-xl bg-stone-950 border border-stone-800 text-xs">
                  <button
                    onClick={() => setTrainerSubMode('point-and-click')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      trainerSubMode === 'point-and-click'
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {language === 'en' ? 'Point on Map' : 'Najdi na mapě'}
                  </button>
                  <button
                    onClick={() => setTrainerSubMode('identify')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      trainerSubMode === 'identify'
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {language === 'en' ? 'Identify Flashing' : 'Poznej stůl'}
                  </button>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 uppercase font-bold">{language === 'en' ? 'Streak' : 'V řadě'}</div>
                  <div className="text-base font-black text-amber-400">🔥 {streak}</div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 uppercase font-bold">{language === 'en' ? 'Accuracy' : 'Úspěšnost'}</div>
                  <div className="text-base font-black text-emerald-400">{accuracy}%</div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-center">
                  <div className="text-[10px] text-stone-400 uppercase font-bold">{language === 'en' ? 'Floor Record' : 'Rekord patra'}</div>
                  <div className="text-base font-black text-stone-200">🏆 {bestStreak}</div>
                </div>
              </div>
            </div>

            {/* Multiple choice buttons when in 'identify' submode */}
            {trainerSubMode === 'identify' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {identifyOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleIdentifyAnswer(opt)}
                    className="p-3 rounded-xl bg-stone-800/90 hover:bg-amber-500 text-stone-100 hover:text-stone-950 font-black text-xl border border-stone-700/80 hover:border-amber-400 shadow transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    <span className="text-xs text-stone-400 group-hover:text-stone-900 font-semibold">{language === 'en' ? 'Table' : 'Stůl'}</span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {activeMode === 'rush-60s' && (
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>{language === 'en' ? '60-Second Rush Drill' : 'Bleskovka: Rychlostní zkouška'} · {activeFloor}. patro</span>
              </div>

              {!rushActive && rushTimeLeft === 60 ? (
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-100 mb-1">
                    {language === 'en' ? `60-Second Speed Drill (${activeFloor}. Floor)` : `Trénink rychlosti a reflexů – ${activeFloor}. patro (60s)`}
                  </h2>
                  <p className="text-xs text-stone-300">
                    {language === 'en'
                      ? `Simulate live service on ${activeFloor}. Floor! Click the called 3-digit tables as fast as possible.`
                      : `Simulace špičky na ${activeFloor}. patře! Systém hlásí třímístná čísla stolů tohoto patra. Klikněte co nejrychleji na správný stůl na mapě.`}
                  </p>
                </div>
              ) : rushActive && targetTable ? (
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-100 flex items-center gap-3">
                    <span>{language === 'en' ? 'Quick! Find table:' : 'Rychle! Najdi stůl:'}</span>
                    <span className="px-4 py-1 rounded-xl bg-amber-500 text-stone-950 font-black text-2xl sm:text-3xl tracking-wider shadow-lg">
                      {targetTable.tableNumber}
                    </span>
                  </h2>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-emerald-400 mb-1">
                    {language === 'en' ? 'Time up! Final Score:' : 'Čas vypršel! Dosažené skóre:'} {rushScore} bodů
                  </h2>
                  <p className="text-xs text-stone-300">
                    {language === 'en'
                      ? `Your personal best for ${activeFloor}. floor: ${rushBestScore} points.`
                      : `Váš osobní rekord pro ${activeFloor}. patro: ${rushBestScore} bodů.`}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <div className="px-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-center">
                <div className="text-[10px] text-stone-400 uppercase font-bold">{language === 'en' ? 'Timer' : 'Čas'}</div>
                <div className={`text-xl font-black ${rushTimeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-stone-100'}`}>
                  ⏱️ {rushTimeLeft}s
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-center">
                <div className="text-[10px] text-stone-400 uppercase font-bold">{language === 'en' ? 'Rush Score' : 'Skóre'}</div>
                <div className="text-xl font-black text-amber-400">⚡ {rushScore}</div>
              </div>

              {!rushActive && (
                <button
                  onClick={handleStartRush}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {rushTimeLeft === 60
                    ? (language === 'en' ? `Start ${activeFloor}. Floor Drill` : `Spustit bleskovku (${activeFloor}. patro)`)
                    : (language === 'en' ? 'Try Again' : 'Zkusit znovu')}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Map Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-900/60 px-4 py-2.5 rounded-xl border border-stone-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-300 font-semibold">
            <span className="px-2 py-0.5 rounded-md bg-stone-800 font-mono text-amber-400 font-black">
              {activeFloor}. NP
            </span>
            <span>{language === 'en' ? `Floor ${activeFloor} Plan` : `Plán ${activeFloor}. patra`}</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">{currentFloorTables.length} {language === 'en' ? 'tables' : 'stolů'}</span>
          </div>

          {/* Quick search input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeFloor === 1 ? 'Hledat stůl 121, 102...' : 'Hledat stůl 209, 225...'}
              className="w-36 sm:w-48 bg-stone-950 border border-stone-800 rounded-lg pl-8 pr-2.5 py-1 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          {/* Blind Map Toggle */}
          <button
            onClick={() => setHideTableNumbers(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              hideTableNumbers
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-stone-800 text-stone-400 hover:text-stone-200 border-stone-700/60'
            }`}
            title={language === 'en' ? 'Blind map test (hide numbers)' : 'Slepá mapa (skrýt čísla stolů pro test)'}
          >
            {hideTableNumbers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>
              {hideTableNumbers
                ? (language === 'en' ? 'Numbers Hidden' : 'Čísla skryta')
                : (language === 'en' ? 'Hide Numbers' : 'Skrýt čísla')}
            </span>
          </button>

          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-lg border border-stone-800">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.1))}
              className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-stone-400 px-1">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.5, prev + 0.1))}
              className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
              title="Reset zoom"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Floor Plan Large Format View (PC Layout) */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 items-start">
        {/* Large Format Interactive Vector Map (3 cols on PC) */}
        <div className="xl:col-span-3 bg-stone-900/90 border border-stone-800 rounded-2xl p-4 shadow-2xl overflow-hidden relative">
          <div className="overflow-auto max-h-[760px] rounded-xl bg-stone-950 border border-stone-900/80 p-2 flex items-center justify-center">
            <div 
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out'
              }}
              className="w-full max-w-[1450px]"
            >
              <svg
                viewBox="0 0 1480 850"
                className="w-full h-auto select-none font-sans"
              >
                <defs>
                  {/* Subtle floor grid pattern */}
                  <pattern id="floor-grid-pc" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#262626" strokeWidth="0.5" strokeOpacity="0.35" />
                  </pattern>

                  {/* Pulsing glow filter */}
                  <filter id="glow-gold-pc" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-green-pc" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-red-pc" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base floor layout background */}
                <rect width="1480" height="850" fill="#09090b" rx="16" />
                <rect width="1480" height="850" fill="url(#floor-grid-pc)" rx="16" />

                {/* Architectural outer boundary outline - CLEAN, NO TEXT LABELS */}
                <rect x="15" y="15" width="1450" height="820" fill="none" stroke="#3f3f46" strokeWidth="2.5" rx="14" />

                {/* ======================================================== */}
                {/* TABLES RENDERING (LARGE PC FORMAT - ONLY TABLE NUMBERS) */}
                {/* ======================================================== */}
                {currentFloorTables.map((table) => {
                  const isSelected = selectedTable?.id === table.id;
                  const isHovered = hoveredTable?.id === table.id;
                  const isTarget = targetTable?.id === table.id;
                  const isSearched = searchedTable?.id === table.id;

                  // Highlighting logic
                  let strokeColor = '#52525b';
                  let strokeWidth = 2;
                  let fillColor = '#18181b';
                  let filterEffect = undefined;

                  // Active target in identify sub-mode
                  if (isTarget && activeMode === 'visual-trainer' && trainerSubMode === 'identify') {
                    strokeColor = '#f59e0b';
                    strokeWidth = 4;
                    fillColor = '#451a03';
                    filterEffect = 'url(#glow-gold-pc)';
                  }

                  if (feedback && feedback.tableId === table.id) {
                    if (feedback.correct) {
                      strokeColor = '#10b981';
                      fillColor = '#064e3b';
                      strokeWidth = 4.5;
                      filterEffect = 'url(#glow-green-pc)';
                    } else {
                      strokeColor = '#ef4444';
                      fillColor = '#7f1d1d';
                      strokeWidth = 4.5;
                      filterEffect = 'url(#glow-red-pc)';
                    }
                  } else if (isSelected || isSearched) {
                    strokeColor = '#f59e0b';
                    fillColor = '#27272a';
                    strokeWidth = 3.5;
                    filterEffect = 'url(#glow-gold-pc)';
                  } else if (isHovered) {
                    strokeColor = '#e4e4e7';
                    fillColor = '#27272a';
                    strokeWidth = 2.5;
                  }

                  // Rotation transform if table is angled
                  const transformAttr = table.rotation
                    ? `rotate(${table.rotation} ${table.x + table.width / 2} ${table.y + table.height / 2})`
                    : undefined;

                  const isCircle = table.shape === 'circle';

                  return (
                    <g
                      key={table.id}
                      onClick={() => handleTableClick(table)}
                      onMouseEnter={() => setHoveredTable(table)}
                      onMouseLeave={() => setHoveredTable(null)}
                      transform={transformAttr}
                      className="cursor-pointer transition-all duration-150"
                    >
                      {/* Table Shape: Circle or Rectangle */}
                      {isCircle ? (
                        <>
                          <circle
                            cx={table.x + table.width / 2}
                            cy={table.y + table.height / 2}
                            r={table.width / 2}
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            filter={filterEffect}
                          />
                          {/* Chairs around circular table */}
                          <circle cx={table.x + table.width / 2} cy={table.y - 6} r="3" fill="#71717a" opacity="0.75" />
                          <circle cx={table.x + table.width / 2} cy={table.y + table.height + 6} r="3" fill="#71717a" opacity="0.75" />
                          <circle cx={table.x - 6} cy={table.y + table.height / 2} r="3" fill="#71717a" opacity="0.75" />
                          <circle cx={table.x + table.width + 6} cy={table.y + table.height / 2} r="3" fill="#71717a" opacity="0.75" />
                        </>
                      ) : (
                        <>
                          <rect
                            x={table.x}
                            y={table.y}
                            width={table.width}
                            height={table.height}
                            fill={fillColor}
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            rx={8}
                            filter={filterEffect}
                          />

                          {/* Seat indicator dots around rectangular table */}
                          {table.chairs?.includes('top') && (
                            <circle cx={table.x + table.width / 2} cy={table.y - 6} r="3" fill="#71717a" opacity="0.75" />
                          )}
                          {table.chairs?.includes('bottom') && (
                            <circle cx={table.x + table.width / 2} cy={table.y + table.height + 6} r="3" fill="#71717a" opacity="0.75" />
                          )}
                          {table.chairs?.includes('left') && (
                            <circle cx={table.x - 6} cy={table.y + table.height / 2} r="3" fill="#71717a" opacity="0.75" />
                          )}
                          {table.chairs?.includes('right') && (
                            <circle cx={table.x + table.width + 6} cy={table.y + table.height / 2} r="3" fill="#71717a" opacity="0.75" />
                          )}
                          {table.chairs?.includes('angled-4') && (
                            <>
                              <circle cx={table.x + table.width / 2} cy={table.y - 6} r="3" fill="#71717a" opacity="0.75" />
                              <circle cx={table.x + table.width / 2} cy={table.y + table.height + 6} r="3" fill="#71717a" opacity="0.75" />
                            </>
                          )}
                        </>
                      )}

                      {/* Exact 3-Digit Table Number inside table boundary */}
                      <text
                        x={table.x + table.width / 2}
                        y={table.y + table.height / 2 + 5.5}
                        fill={isTarget && activeMode === 'visual-trainer' && trainerSubMode === 'identify' && hideTableNumbers ? '#fbbf24' : '#ffffff'}
                        fontSize="15"
                        fontWeight="900"
                        letterSpacing="0.5"
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {hideTableNumbers ? '?' : table.tableNumber}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Quick guide text under map */}
          <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span>
              💡 {language === 'en' ? `Tip: Testing strictly on Floor ${activeFloor}` : `Tip: Test probíhá výhradně na ${activeFloor}. patře`}
            </span>
            <span className="font-mono text-stone-500">
              {currentFloorTables.length} {language === 'en' ? 'tables' : 'stolů'} ({activeFloor}. NP)
            </span>
          </div>
        </div>

        {/* Side Panel: Selected Table Card & Details */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <h3 className="text-sm font-bold text-stone-200 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? 'Selected Table' : 'Zvolený stůl'}</span>
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300">
              {activeFloor}. NP
            </span>
          </div>

          {selectedTable ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-amber-500 text-stone-950 font-black text-3xl flex items-center justify-center shadow-xl shadow-amber-950/50">
                  {selectedTable.tableNumber}
                </div>
                <div>
                  <h4 className="text-lg font-black text-stone-100">
                    {language === 'en' ? `Table ${selectedTable.tableNumber}` : `Stůl ${selectedTable.tableNumber}`}
                  </h4>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    {selectedTable.floor}. patro ({selectedTable.floor}. NP)
                  </div>
                </div>
              </div>

              {/* Practice button */}
              <button
                onClick={() => {
                  setTargetTable(selectedTable);
                  setActiveMode('visual-trainer');
                  setTrainerSubMode('point-and-click');
                  setFeedback(null);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98]"
              >
                {language === 'en' ? 'Practice This Table' : 'Procvičit tento stůl'}
              </button>
            </div>
          ) : (
            <div className="py-10 text-center text-stone-500 space-y-2">
              <MapPin className="w-10 h-10 mx-auto text-stone-700" />
              <p className="text-xs leading-relaxed max-w-[200px] mx-auto">
                {language === 'en'
                  ? `Click any 3-digit table on Floor ${activeFloor} to select it.`
                  : `Klikněte na jakýkoliv stůl na plánu ${activeFloor}. patra.`}
              </p>
            </div>
          )}

          {/* Quick Stats Summary per Floor */}
          <div className="pt-4 border-t border-stone-800 space-y-2.5">
            <div className="text-xs font-bold text-stone-300 flex items-center justify-between">
              <span>{language === 'en' ? `Records (${activeFloor}. Floor)` : `Osobní rekordy (${activeFloor}. patro)`}</span>
              <Trophy className="w-4 h-4 text-amber-400" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{language === 'en' ? 'Max Streak' : 'Max série'}</span>
                <span className="text-base font-black text-amber-400">🔥 {bestStreak}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800">
                <span className="text-[10px] text-stone-500 block uppercase font-bold">{language === 'en' ? 'Rush Record' : 'Bleskovka'}</span>
                <span className="text-base font-black text-emerald-400">⚡ {rushBestScore}</span>
              </div>
            </div>

            {/* Overview of both floors */}
            <div className="pt-2 text-[11px] text-stone-500 flex justify-between">
              <span>1. patro rekord: ⚡{rushBestScoreF1}</span>
              <span>2. patro rekord: ⚡{rushBestScoreF2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
