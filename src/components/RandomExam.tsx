import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MenuCategory, MenuItem, Question } from '../data/menuData';
import { soundManager } from '../utils/sound';
import { recordAnswer } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  CheckCircle2, XCircle, ChevronRight, RotateCcw, 
  Trophy, Sparkles, AlertCircle, HelpCircle, Award, 
  ArrowRight, ArrowLeft 
} from 'lucide-react';

interface ExamQuestionItem {
  category: MenuCategory;
  item: MenuItem;
  question: Question;
  shuffledOptions: { letter: 'A' | 'B' | 'C'; text: string; isCorrect: boolean }[];
}

interface RandomExamProps {
  categories: MenuCategory[];
  onFinishExam: () => void;
  onExit: () => void;
  onAnswerRecorded?: () => void;
  language?: 'cs' | 'en';
}

export const RandomExam: React.FC<RandomExamProps> = ({
  categories,
  onFinishExam,
  onExit,
  onAnswerRecorded,
  language = 'cs'
}) => {
  const [examQuestions, setExamQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState<'A' | 'B' | 'C' | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ isCorrect: boolean; selected: string; question: ExamQuestionItem }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Transition timestamp to avoid accidental double clicks and ghost taps
  const transitionTimestampRef = useRef<number>(Date.now());

  // Generate 10 diverse random questions across categories
  const initExam = () => {
    const pool: { category: MenuCategory; item: MenuItem; question: Question }[] = [];
    categories.forEach(cat => {
      cat.items.forEach(item => {
        item.questions.forEach(q => {
          pool.push({ category: cat, item, question: q });
        });
      });
    });

    // Shuffle pool
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selected10 = shuffledPool.slice(0, 10);

    const questionsWithShuffledOptions: ExamQuestionItem[] = selected10.map((entry, idx) => {
      const opts = [
        { text: entry.question.correctAnswer, isCorrect: true },
        { text: entry.question.distractors[0], isCorrect: false },
        { text: entry.question.distractors[1], isCorrect: false }
      ].sort(() => 0.5 - Math.random());

      const letters: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
      return {
        ...entry,
        shuffledOptions: opts.map((o, i) => ({
          letter: letters[i],
          text: o.text,
          isCorrect: o.isCorrect
        }))
      };
    });

    setExamQuestions(questionsWithShuffledOptions);
    setCurrentIndex(0);
    setSelectedLetter(null);
    setHasAnswered(false);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const EXAM_STORAGE_KEY = `fuze_exam_session_${language}`;

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.examQuestions) && parsed.examQuestions.length > 0) {
          setExamQuestions(parsed.examQuestions);
          setCurrentIndex(typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0);
          setUserAnswers(parsed.userAnswers || []);
          setIsFinished(Boolean(parsed.isFinished));
          return;
        }
      }
    } catch (e) {}
    initExam();
  }, [categories, language]);

  useEffect(() => {
    if (examQuestions.length > 0) {
      try {
        sessionStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify({
          examQuestions,
          currentIndex,
          userAnswers,
          isFinished
        }));
      } catch (e) {}
    }
  }, [examQuestions, currentIndex, userAnswers, isFinished, EXAM_STORAGE_KEY]);

  const handleExitExam = () => {
    try {
      sessionStorage.removeItem(EXAM_STORAGE_KEY);
    } catch (e) {}
    onExit();
  };

  const handleRestartExam = () => {
    try {
      sessionStorage.removeItem(EXAM_STORAGE_KEY);
    } catch (e) {}
    initExam();
  };

  const currentQ = examQuestions[currentIndex];

  const handleSelectOption = (letter: 'A' | 'B' | 'C') => {
    if (hasAnswered || !currentQ) return;
    if (Date.now() - transitionTimestampRef.current < 400) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const option = currentQ.shuffledOptions.find(o => o.letter === letter);
    if (!option) return;

    setSelectedLetter(letter);
    setHasAnswered(true);

    const isCorrect = option.isCorrect;
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    recordAnswer(currentQ.question.id, currentQ.item.id, isCorrect, language);
    setUserAnswers(prev => [...prev, { isCorrect, selected: option.text, question: currentQ }]);
    onAnswerRecorded?.();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinished || !currentQ) return;
      if (e.repeat) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();
      if (!hasAnswered) {
        if (Date.now() - transitionTimestampRef.current < 400) return;
        if (key === 'A' || key === '1') handleSelectOption('A');
        if (key === 'B' || key === '2') handleSelectOption('B');
        if (key === 'C' || key === '3') handleSelectOption('C');
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          e.stopPropagation();
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, isFinished, currentQ]);

  const handleNext = () => {
    transitionTimestampRef.current = Date.now();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (currentIndex + 1 < examQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedLetter(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
      soundManager.playFanfare();
      onFinishExam();
    }
  };

  if (!currentQ && !isFinished) {
    return (
      <div className="p-12 text-center text-stone-400">
        Příprava zkušebního testu...
      </div>
    );
  }

  // Final Results Screen
  if (isFinished) {
    const total = examQuestions.length;
    const correct = userAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correct / total) * 100);

    let evaluation = "Skvělý výsledek! Znáte menu na profesionální úrovni.";
    let gradeTitle = "Certifikovaný šéfkuchař & vrchní číšník FUZE";
    if (percentage < 50) {
      evaluation = "Je potřeba ještě potrénovat detaily ingrediencí a omáček.";
      gradeTitle = "Gastro učeň v zácviku";
    } else if (percentage < 80) {
      evaluation = "Dobrá znalost, doporučujeme zopakovat chyby a specifické suroviny.";
      gradeTitle = "Samostatný personál obsluhy";
    }

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
        <div className="rounded-2xl bg-stone-900 border border-amber-600/40 p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            Výsledek zkoušky znalostí menu
          </div>
          <h2 className="text-3xl font-extrabold text-stone-100 font-serif mb-2">
            {gradeTitle}
          </h2>
          <p className="text-stone-300 text-sm max-w-md mx-auto mb-6">
            {evaluation}
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
            <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800">
              <div className="text-xs text-stone-400">Správně</div>
              <div className="text-2xl font-black text-emerald-400">{correct}</div>
            </div>
            <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800">
              <div className="text-xs text-stone-400">Špatně</div>
              <div className="text-2xl font-black text-rose-400">{total - correct}</div>
            </div>
            <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800">
              <div className="text-xs text-stone-400">Úspěšnost</div>
              <div className="text-2xl font-black text-amber-400">{percentage}%</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestartExam}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm transition-all shadow-md shadow-amber-950/40"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Spustit nový test (Mix 10)</span>
            </button>
            <button
              onClick={handleExitExam}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors"
            >
              <span>Zpět na výuku po skupinách</span>
            </button>
          </div>
        </div>

        {/* Detailed review of each question */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-stone-300 uppercase tracking-wider">
            Podrobný přehled odpovědí:
          </h3>
          {userAnswers.map((ans, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-xs sm:text-sm ${
                ans.isCorrect
                  ? 'bg-emerald-950/20 border-emerald-900/40 text-stone-200'
                  : 'bg-rose-950/20 border-rose-900/40 text-stone-200'
              }`}
            >
              <div className="flex items-start gap-2.5">
                {ans.isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">{ans.question.item.name}</span>
                    <span className="text-stone-500">·</span>
                    <span className="text-stone-400 text-xs">{ans.question.category.name}</span>
                  </div>
                  <p className="font-medium text-stone-100">{ans.question.question.question}</p>
                  <div className="text-xs pt-1">
                    <span className="text-stone-400">Správná ingredience: </span>
                    <strong className="text-emerald-300">{ans.question.question.correctAnswer}</strong>
                  </div>
                  {!ans.isCorrect && (
                    <div className="text-xs text-rose-300">
                      Vaše volba: {ans.selected}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active question view
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <button
          onClick={handleExitExam}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/40 text-xs font-semibold transition-all shadow-sm active:scale-[0.98] group"
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
          <span>{language === 'en' ? 'Exit exam' : 'Ukončit zkoušku'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-stone-300">
          <span>Otázka</span>
          <strong className="text-amber-400">{currentIndex + 1}</strong>
          <span>z {examQuestions.length}</span>
        </div>
      </div>

      {/* Item info header */}
      <div className="rounded-xl bg-stone-900 border border-stone-800 p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wide">
            <span>{currentQ.category.name}</span>
            <span>·</span>
            <span>Podsložka</span>
          </div>
          {currentQ.item.weight && (
            <span className="text-xs text-stone-300 bg-stone-800 px-2 py-0.5 rounded">
              {currentQ.item.weight}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <h2 className="text-2xl font-bold text-stone-100 font-serif">
            {currentQ.item.name}
          </h2>
          <AudioPronounceButton
            itemId={`exam-${currentQ.item.id}`}
            name={currentQ.item.name}
            description={currentQ.item.description}
            lang={language}
            size="md"
            showLabel={true}
            title={language === 'en' ? 'Pronounce name & ingredients in English' : 'Přečíst název a složení česky'}
          />
        </div>
        {currentQ.item.price && (
          <div className="text-xs text-amber-400 font-semibold mt-1">
            {language === 'en' ? 'Price:' : 'Cena:'} {currentQ.item.price}
          </div>
        )}

        {/* Progress bar */}
        <div className="w-full h-1 bg-stone-800 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / examQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-2xl bg-stone-900/60 border border-stone-800 p-6 space-y-5">
        <h3 className="text-lg font-bold text-stone-100 leading-snug">
          {currentQ.question.question}
        </h3>

        {/* Options A, B, C */}
        <div className="space-y-3">
          {currentQ.shuffledOptions.map((opt) => {
            const isChosen = selectedLetter === opt.letter;
            let containerStyle = "bg-stone-900/80 border-stone-800 text-stone-200 hover:border-amber-500/60";
            let badgeStyle = "bg-stone-800 text-amber-400 border-stone-700";

            if (hasAnswered) {
              if (opt.isCorrect) {
                containerStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-100 ring-1 ring-emerald-500";
                badgeStyle = "bg-emerald-500 text-stone-950 font-black border-emerald-400";
              } else if (isChosen && !opt.isCorrect) {
                containerStyle = "bg-rose-950/60 border-rose-500 text-rose-100 ring-1 ring-rose-500";
                badgeStyle = "bg-rose-500 text-white font-black border-rose-400";
              } else {
                containerStyle = "bg-stone-900/40 border-stone-800/60 text-stone-500 opacity-60";
                badgeStyle = "bg-stone-800/40 text-stone-500 border-stone-800";
              }
            }

            return (
              <button
                key={`${currentQ.question.id}-${opt.letter}`}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleSelectOption(opt.letter);
                }}
                disabled={hasAnswered}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${containerStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border shrink-0 ${badgeStyle}`}>
                    {opt.letter}
                  </span>
                  <span className="text-sm font-medium">{opt.text}</span>
                </div>

                {hasAnswered && opt.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {hasAnswered && isChosen && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback explanation */}
        {hasAnswered && (
          <div className="pt-4 border-t border-stone-800 space-y-4 animate-in fade-in duration-200">
            <p className="text-xs text-stone-300 leading-relaxed bg-stone-950/60 p-3 rounded-lg border border-stone-800">
              💡 {currentQ.question.explanation}
            </p>

            <button
              onClick={(e) => {
                e.currentTarget.blur();
                handleNext();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm transition-all shadow-lg shadow-amber-950/40"
            >
              <span>{currentIndex + 1 < examQuestions.length ? 'Další otázka zkoušky' : 'Vyhodnotit zkoušku'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
