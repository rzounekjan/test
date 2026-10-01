import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MenuCategory, MenuItem, Question } from '../data/menuData';
import { soundManager } from '../utils/sound';
import { recordAnswer } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  ArrowLeft, CheckCircle2, XCircle, ChevronRight, 
  RotateCcw, Sparkles, BookOpen, AlertCircle, 
  Award, HelpCircle, Utensils, ChefHat, Check, X
} from 'lucide-react';

interface QuizViewProps {
  category: MenuCategory;
  item: MenuItem;
  onBackToItems: () => void;
  onBackToMainMenu?: () => void;
  onNextItem?: () => void;
  hasNextItem?: boolean;
  onAnswerRecorded: () => void;
  language?: 'cs' | 'en';
}

interface ShuffledOption {
  letter: 'A' | 'B' | 'C';
  text: string;
  isCorrect: boolean;
}

interface AnswerRecord {
  questionIndex: number;
  question: Question;
  selectedOption: ShuffledOption;
  isCorrect: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  category,
  item,
  onBackToItems,
  onBackToMainMenu,
  onNextItem,
  hasNextItem,
  onAnswerRecorded,
  language = 'cs'
}) => {
  const isEn = language === 'en';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ShuffledOption | null>(null);
  const [userAnswers, setUserAnswers] = useState<AnswerRecord[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Guard timestamp to prevent ghost clicks and accidental double taps
  const transitionTimestampRef = useRef<number>(Date.now());

  // Reset state whenever the item changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setIsQuizCompleted(false);
    transitionTimestampRef.current = Date.now();
  }, [item.id]);

  const currentQuestion = item.questions[currentQuestionIndex] || item.questions[0];

  // Shuffle options A, B, C deterministically per question index
  const options: ShuffledOption[] = useMemo(() => {
    if (!currentQuestion) return [];
    const pool = [
      { text: currentQuestion.correctAnswer, isCorrect: true },
      { text: currentQuestion.distractors[0], isCorrect: false },
      { text: currentQuestion.distractors[1], isCorrect: false }
    ];

    // Seeded shuffle using question id length + index
    const seed = (currentQuestion.id.charCodeAt(0) + currentQuestionIndex) % 3;
    const shuffled = [...pool];
    if (seed === 1) {
      const temp = shuffled[0];
      shuffled[0] = shuffled[1];
      shuffled[1] = temp;
    } else if (seed === 2) {
      const temp = shuffled[0];
      shuffled[0] = shuffled[2];
      shuffled[2] = temp;
    }

    const letters: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
    return shuffled.map((opt, i) => ({
      letter: letters[i],
      text: opt.text,
      isCorrect: opt.isCorrect
    }));
  }, [currentQuestion, currentQuestionIndex]);

  // Handle selecting an option (neutral selection without revealing correctness)
  const handleSelect = (option: ShuffledOption) => {
    if (isQuizCompleted) return;
    if (Date.now() - transitionTimestampRef.current < 250) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    try {
      soundManager.playClick();
    } catch {}

    setSelectedOption(option);
  };

  // Move to the next question or complete the quiz
  const handleConfirmAndNext = () => {
    if (!selectedOption || !currentQuestion) return;
    if (Date.now() - transitionTimestampRef.current < 250) return;

    transitionTimestampRef.current = Date.now();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const isCorrect = selectedOption.isCorrect;
    const newRecord: AnswerRecord = {
      questionIndex: currentQuestionIndex,
      question: currentQuestion,
      selectedOption,
      isCorrect
    };

    const nextAnswers = [...userAnswers, newRecord];

    if (currentQuestionIndex + 1 < item.questions.length) {
      // Advance to next question in the quiz
      setUserAnswers(nextAnswers);
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Last question finished: reveal evaluation and recipe at the end
      setUserAnswers(nextAnswers);
      setIsQuizCompleted(true);

      // Record answers to user stats storage
      nextAnswers.forEach(ans => {
        recordAnswer(ans.question.id, item.id, ans.isCorrect, language);
      });
      onAnswerRecorded();

      // Sound feedback for completing the item quiz
      const correctCount = nextAnswers.filter(a => a.isCorrect).length;
      if (correctCount === item.questions.length) {
        try {
          soundManager.playFanfare();
        } catch {}
      } else {
        try {
          soundManager.playCorrect();
        } catch {}
      }
    }
  };

  // Restart quiz for this dish
  const handleRestartQuiz = () => {
    transitionTimestampRef.current = Date.now();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  // Keyboard navigation listener (A, B, C to select; Enter / Space to advance)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();

      if (!isQuizCompleted) {
        if (Date.now() - transitionTimestampRef.current < 250) return;

        if (key === 'A' || key === '1') {
          const opt = options.find(o => o.letter === 'A');
          if (opt) handleSelect(opt);
        } else if (key === 'B' || key === '2') {
          const opt = options.find(o => o.letter === 'B');
          if (opt) handleSelect(opt);
        } else if (key === 'C' || key === '3') {
          const opt = options.find(o => o.letter === 'C');
          if (opt) handleSelect(opt);
        } else if ((e.key === 'Enter' || e.key === ' ') && selectedOption) {
          e.preventDefault();
          e.stopPropagation();
          handleConfirmAndNext();
        }
      } else {
        // End screen shortcuts: R to restart, Enter to advance to next item
        if (key === 'R') {
          handleRestartQuiz();
        } else if ((e.key === 'Enter' || key === 'N') && hasNextItem && onNextItem) {
          onNextItem();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQuizCompleted, options, selectedOption, hasNextItem, onNextItem]);

  // Derived metrics for completed quiz
  const totalQuestions = item.questions.length;
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const wrongCount = totalQuestions - correctCount;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Breakdown of ingredients into individual list items for clear reading
  const ingredientsList = useMemo(() => {
    if (!item.description) return [];
    return item.description
      .split(/[,;•\n]+/)
      .map(part => part.trim())
      .filter(part => part.length > 1);
  }, [item.description]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2 text-xs font-semibold">
          {onBackToMainMenu && (
            <button
              onClick={onBackToMainMenu}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/40 text-xs font-semibold transition-all shadow-sm active:scale-[0.98] group"
              title={isEn ? 'Return to Main Menu' : 'Zpět do Hlavní nabídky'}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
              <span>{isEn ? 'Main Menu' : 'Hlavní nabídka'}</span>
            </button>
          )}
          <button
            onClick={onBackToItems}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/40 text-xs font-semibold transition-all shadow-sm active:scale-[0.98] group"
            title={isEn ? `Back to items in ${category.name}` : `Zpět na položky: ${category.name}`}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
            <span>{category.name}</span>
          </button>
        </div>

        <div className="text-xs text-stone-400 flex items-center gap-2 font-mono">
          {!isQuizCompleted ? (
            <>
              <span>{isEn ? 'Question' : 'Otázka'}</span>
              <span className="font-bold text-stone-200">
                {currentQuestionIndex + 1} / {item.questions.length}
              </span>
            </>
          ) : (
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              {isEn ? 'Evaluation Complete' : 'Vyhodnocení dokončeno'}
            </span>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PHASE 1: ACTIVE QUIZ QUESTIONS GUESSING (No spoilers / No answers revealed)*/}
      {/* ========================================================================= */}
      {!isQuizCompleted ? (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Target Dish Card during guessing */}
          <div className="rounded-2xl bg-stone-900/90 border border-stone-800 p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
                  <span>{category.name}</span>
                  <span>·</span>
                  <span>{isEn ? 'Ingredient Quiz A, B, C' : 'Test ingrediencí A, B, C'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
                  {item.name}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {isEn 
                    ? 'Tip: Correct answers and complete ingredient list will be shown at the end.' 
                    : 'Tip: Správné odpovědi a kompletní soupis ingrediencí se zobrazí až na konci.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.weight && (
                  <span className="text-xs font-semibold text-stone-300 bg-stone-800/90 border border-stone-700/60 px-2.5 py-1 rounded-md">
                    {item.weight}
                  </span>
                )}
                {item.price && (
                  <span className="text-sm font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-md">
                    {item.price}
                  </span>
                )}
              </div>
            </div>

            {/* Progress bar inside card */}
            <div className="w-full h-1.5 bg-stone-800 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / item.questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="rounded-2xl bg-stone-900/70 border border-stone-800/90 p-6 sm:p-8 space-y-6 shadow-lg">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md mb-3 border border-amber-500/20">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>
                  {isEn 
                    ? `Question ${currentQuestionIndex + 1} of ${item.questions.length}` 
                    : `Otázka ${currentQuestionIndex + 1} z ${item.questions.length}`}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-stone-100 leading-snug">
                {currentQuestion.question}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {isEn 
                  ? 'Select option A, B, or C (click or press key on keyboard):' 
                  : 'Zvolte možnost A, B nebo C (kliknutím nebo stisknutím klávesy na klávesnici):'}
              </p>
            </div>

            {/* The 3 Options A, B, C (NEUTRAL HIGHLIGHT, NO RIGHT/WRONG SPOILERS) */}
            <div className="grid grid-cols-1 gap-3.5">
              {options.map((option) => {
                const isSelected = selectedOption?.letter === option.letter;

                return (
                  <button
                    key={`${currentQuestion.id}-${option.letter}`}
                    type="button"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      handleSelect(option);
                    }}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-4 group cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-amber-100 ring-2 ring-amber-500/40 shadow-md shadow-amber-950/20'
                        : 'bg-stone-900/80 border-stone-800 text-stone-200 hover:border-amber-500/50 hover:bg-stone-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-black border-amber-400 shadow-sm'
                          : 'bg-stone-800 text-amber-400 border-stone-700 group-hover:border-amber-500/40'
                      }`}>
                        {option.letter}
                      </span>
                      <span className="text-sm sm:text-base font-medium leading-snug">
                        {option.text}
                      </span>
                    </div>

                    <div className="shrink-0">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-stone-700 group-hover:border-amber-500/50" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Bar Below Question Options */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-stone-400">
                {selectedOption ? (
                  <span>
                    {isEn 
                      ? 'Press Enter or Space to continue to next question' 
                      : 'Stiskněte Enter nebo Mezerník pro pokračování'}
                  </span>
                ) : (
                  <span>
                    {isEn 
                      ? 'Select an option to proceed' 
                      : 'Vyberte jednu z možností pro pokračování'}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleConfirmAndNext}
                disabled={!selectedOption}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  selectedOption
                    ? 'bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-amber-950/40 hover:scale-[1.02] cursor-pointer active:scale-[0.98]'
                    : 'bg-stone-800/60 text-stone-500 border border-stone-800 cursor-not-allowed opacity-50'
                }`}
              >
                <span>
                  {currentQuestionIndex + 1 < item.questions.length
                    ? (isEn ? 'Next question' : 'Další otázka')
                    : (isEn ? 'Evaluate quiz & show ingredients' : 'Vyhodnotit kvíz a zobrazit ingredience')}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* PHASE 2: AT THE END (Správné a špatné odpovědi & Soupis ingrediencí)      */
        /* ========================================================================= */
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* 1. HERO EVALUATION BANNER */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-900 border border-amber-600/40 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border ${
                  correctCount === totalQuestions
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-lg shadow-emerald-950/40'
                    : correctCount > 0
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-950/40'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                }`}>
                  <Award className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <span>{category.name}</span>
                    <span>·</span>
                    <span>{isEn ? 'Final Evaluation' : 'Konečné vyhodnocení'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
                    {item.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 font-medium">
                    {correctCount === totalQuestions ? (
                      <span className="text-emerald-400">
                        {isEn ? 'Excellent! All questions answered correctly.' : 'Vynikající! Všechny otázky zodpovězeny správně.'}
                      </span>
                    ) : correctCount > 0 ? (
                      <span className="text-amber-300">
                        {isEn ? 'Good job! Review your answers and ingredient list below.' : 'Dobrá práce! Níže si projděte odpovědi a soupis ingrediencí.'}
                      </span>
                    ) : (
                      <span className="text-rose-400">
                        {isEn ? 'Needs practice. Review the ingredient list below and try again.' : 'Položku je potřeba procvičit. Nastudujte si suroviny a zkuste to znovu.'}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Score pill */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto p-3 sm:p-0 rounded-xl bg-stone-950/40 sm:bg-transparent border border-stone-800/80 sm:border-0">
                <span className="text-xs text-stone-400 font-medium sm:mb-1">
                  {isEn ? 'Success Rate:' : 'Celková úspěšnost:'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl sm:text-3xl font-black font-mono ${
                    correctCount === totalQuestions ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {correctCount} / {totalQuestions}
                  </span>
                  <span className="text-xs text-stone-400 font-bold">
                    ({scorePercent} %)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action buttons on hero banner */}
            <div className="mt-6 pt-5 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all border border-stone-700 active:scale-[0.98]"
                  title={isEn ? 'Retake this quiz' : 'Zopakovat test pro tuto položku'}
                >
                  <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isEn ? 'Retake Quiz' : 'Zopakovat test'}</span>
                </button>

                {onBackToMainMenu && (
                  <button
                    type="button"
                    onClick={onBackToMainMenu}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800/80 hover:bg-stone-700/80 text-stone-300 text-xs font-semibold transition-colors border border-stone-700/60"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Main Menu' : 'Hlavní nabídka'}</span>
                  </button>
                )}
              </div>

              {hasNextItem && onNextItem && (
                <button
                  type="button"
                  onClick={onNextItem}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-950/40 active:scale-[0.98]"
                >
                  <span>{isEn ? 'Next item in category' : 'Další položka v kategorii'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* 2. SPRAVNÉ A ŠPATNÉ ODPOVĚDI (Full Questions Review) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{isEn ? 'Review of Questions & Answers' : 'Správné a špatné odpovědi'}</span>
              </h3>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 font-semibold font-mono">
                  {correctCount} {isEn ? 'correct' : 'správně'}
                </span>
                {wrongCount > 0 && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-800/80 text-rose-300 font-semibold font-mono">
                    {wrongCount} {isEn ? 'wrong' : 'chybně'}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {userAnswers.map((answer, idx) => (
                <div
                  key={answer.question.id}
                  className={`rounded-2xl p-5 sm:p-6 border transition-all ${
                    answer.isCorrect
                      ? 'bg-stone-900/90 border-emerald-600/50 shadow-md shadow-emerald-950/10'
                      : 'bg-stone-900/90 border-rose-600/60 shadow-md shadow-rose-950/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                        answer.isCorrect
                          ? 'bg-emerald-500 text-stone-950'
                          : 'bg-rose-500 text-white'
                      }`}>
                        {idx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-100">
                        {answer.question.question}
                      </h4>
                    </div>

                    <span className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                      answer.isCorrect
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    }`}>
                      {answer.isCorrect ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>{isEn ? 'Correct' : 'Správně'}</span>
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3 stroke-[3]" />
                          <span>{isEn ? 'Incorrect' : 'Špatně'}</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Answers breakdown */}
                  <div className="space-y-2 mt-3 pt-3 border-t border-stone-800/80 text-xs sm:text-sm">
                    {/* User's Chosen Option */}
                    <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                      answer.isCorrect
                        ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200'
                        : 'bg-rose-950/30 border-rose-800/50 text-rose-200'
                    }`}>
                      {answer.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold block opacity-80 mb-0.5">
                          {isEn ? 'Your Answer:' : 'Vaše odpověď:'}
                        </span>
                        <span className="font-semibold">
                          [{answer.selectedOption.letter}] {answer.selectedOption.text}
                        </span>
                      </div>
                    </div>

                    {/* Correct Option (highlighted if user made a mistake) */}
                    {!answer.isCorrect && (
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-emerald-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 block mb-0.5">
                            {isEn ? 'Correct Answer:' : 'Správná odpověď:'}
                          </span>
                          <span className="font-semibold text-emerald-100">
                            {answer.question.correctAnswer}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Question Explanation */}
                  {answer.question.explanation && (
                    <div className="mt-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-300 leading-relaxed">
                      <span className="font-bold text-amber-400 block mb-1">
                        {isEn ? 'Explanation & Culinary Context:' : 'Vysvětlení a kulinářský kontext:'}
                      </span>
                      {answer.question.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. SOUPIS INGREDIENCÍ A OFICIÁLNÍ RECEPTURA */}
          <div className="rounded-2xl p-6 sm:p-7 bg-stone-900 border border-stone-800/90 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-stone-100">
                  {isEn ? 'Complete Ingredient List & Menu Recipe' : 'Soupis ingrediencí a oficiální receptura'}
                </h3>
              </div>

              {/* Audio Pronunciation Button for Ingredients */}
              {item.description && (
                <AudioPronounceButton
                  itemId={`review-recipe-${item.id}`}
                  name={item.name}
                  description={item.description}
                  lang={language}
                  size="md"
                  showLabel={true}
                  title={isEn ? 'Listen to ingredients in English' : 'Přečíst suroviny a recept česky'}
                  className="shrink-0"
                />
              )}
            </div>

            {/* Official FUZE Menu Recipe Text */}
            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                {isEn ? 'Official FUZE Menu Description:' : 'Přesný text z jídelního lístku FUZE:'}
              </span>
              <p className="text-sm sm:text-base text-stone-200 italic font-medium leading-relaxed">
                "{item.description}"
              </p>
            </div>

            {/* Individual parsed ingredients badges/pills */}
            {ingredientsList.length > 0 && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
                  {isEn ? 'Parsed Key Ingredients & Components:' : 'Rozpis klíčových surovin a složek:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {ingredientsList.map((ing, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/90 border border-stone-700/80 text-xs font-semibold text-stone-200 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Extra Metadata (Weight, Price, Notes, Allergens) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {item.weight && (
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800 text-xs">
                  <span className="text-stone-500 block mb-0.5">{isEn ? 'Weight / Portion' : 'Gramáž / porce'}</span>
                  <span className="font-bold text-stone-200">{item.weight}</span>
                </div>
              )}
              {item.price && (
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800 text-xs">
                  <span className="text-stone-500 block mb-0.5">{isEn ? 'Menu Price' : 'Cena v menu'}</span>
                  <span className="font-bold text-amber-400">{item.price}</span>
                </div>
              )}
              {item.allergens && item.allergens.length > 0 && (
                <div className="p-3 rounded-xl bg-stone-950/40 border border-stone-800 text-xs">
                  <span className="text-stone-500 block mb-0.5">{isEn ? 'Allergens' : 'Alergeny'}</span>
                  <span className="font-bold text-stone-300">{item.allergens.join(', ')}</span>
                </div>
              )}
            </div>
          </div>

          {/* 4. BOTTOM NAVIGATION & ACTION BAR */}
          <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onBackToItems}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-semibold transition-all border border-stone-700 active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back to items' : 'Zpět na položky'}</span>
              </button>

              <button
                type="button"
                onClick={handleRestartQuiz}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-semibold transition-all border border-stone-700 active:scale-[0.98]"
              >
                <RotateCcw className="w-4 h-4 text-stone-400" />
                <span>{isEn ? 'Retake Quiz' : 'Zopakovat test'}</span>
              </button>
            </div>

            {hasNextItem && onNextItem ? (
              <button
                type="button"
                onClick={onNextItem}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-950/40 active:scale-[0.98]"
              >
                <span>{isEn ? 'Next item in category' : 'Další položka v kategorii'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToItems}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-950/40 active:scale-[0.98]"
              >
                <span>{isEn ? 'Done! Back to items' : 'Hotovo! Zpět na položky'}</span>
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
