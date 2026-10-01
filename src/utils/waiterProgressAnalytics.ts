import { MENU_CATEGORIES, MenuCategory, MenuItem, Question } from '../data/menuData';
import { MENU_CATEGORIES_EN } from '../data/menuDataEn';
import { getUserStats, AppLanguage, UserStats } from './storage';

export type ItemProgressStatus = 'mastered' | 'partial' | 'mistake' | 'untouched';
export type CategoryProgressStatus = 'completed' | 'in_progress' | 'not_started';

export interface DetailedItemProgress {
  itemId: string;
  itemName: string;
  weight?: string;
  price?: string;
  totalQuestions: number;
  masteredQuestions: number;
  percent: number;
  hasMistake: boolean;
  isFullyMastered: boolean;
  status: ItemProgressStatus;
}

export interface DetailedCategoryProgress {
  categoryId: string;
  categoryName: string;
  iconName: string;
  badge?: string;
  totalQuestions: number;
  masteredQuestions: number;
  percentComplete: number;
  totalItems: number;
  masteredItems: number;
  percentItemsMastered: number;
  status: CategoryProgressStatus;
  items: DetailedItemProgress[];
}

export interface QuestionMistakeDetail {
  questionId: string;
  itemId: string;
  itemName: string;
  categoryId: string;
  categoryName: string;
  questionText: string;
  correctAnswer: string;
  explanation: string;
}

export interface WaiterDetailedProgress {
  userId: string;
  language: AppLanguage;
  summary: {
    totalQuestions: number;
    masteredQuestions: number;
    percentComplete: number;
    totalItems: number;
    masteredItems: number;
    percentItemsMastered: number;
    totalAnswered: number;
    correctCount: number;
    accuracyPercent: number;
    currentStreak: number;
    bestStreak: number;
    mistakesCount: number;
  };
  categories: DetailedCategoryProgress[];
  mistakes: QuestionMistakeDetail[];
}

export function getWaiterDetailedProgress(userId: string, lang: AppLanguage = 'cs'): WaiterDetailedProgress {
  const stats: UserStats = getUserStats(userId, lang);
  const categoriesList = lang === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;

  const masteredQSet = new Set(stats.masteredQuestionIds || []);
  const mistakeQSet = new Set(stats.mistakeQuestionIds || []);
  const masteredItemsSet = new Set(stats.masteredItemIds || []);

  let totalQuestionsCount = 0;
  let totalItemsCount = 0;
  let allMasteredQuestionsCount = 0;
  let allMasteredItemsCount = 0;

  const mistakesList: QuestionMistakeDetail[] = [];

  const detailedCategories: DetailedCategoryProgress[] = categoriesList.map((category) => {
    let catTotalQ = 0;
    let catMasteredQ = 0;
    let catMasteredItems = 0;

    const itemsProgress: DetailedItemProgress[] = category.items.map((item) => {
      const itemQuestions = item.questions || [];
      const itemTotalQ = itemQuestions.length;
      catTotalQ += itemTotalQ;

      // Count mastered questions in this item
      let itemMasteredQ = 0;
      let hasMistake = false;

      itemQuestions.forEach((q) => {
        if (masteredQSet.has(q.id)) {
          itemMasteredQ += 1;
        }
        if (mistakeQSet.has(q.id)) {
          hasMistake = true;
          mistakesList.push({
            questionId: q.id,
            itemId: item.id,
            itemName: item.name,
            categoryId: category.id,
            categoryName: category.name,
            questionText: q.question,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation
          });
        }
      });

      catMasteredQ += itemMasteredQ;

      const isFullyMastered = (itemTotalQ > 0 && itemMasteredQ === itemTotalQ) || masteredItemsSet.has(item.id);
      if (isFullyMastered) {
        catMasteredItems += 1;
      }

      const percent = itemTotalQ > 0 ? Math.round((itemMasteredQ / itemTotalQ) * 100) : (isFullyMastered ? 100 : 0);

      let status: ItemProgressStatus = 'untouched';
      if (isFullyMastered) {
        status = 'mastered';
      } else if (hasMistake) {
        status = 'mistake';
      } else if (itemMasteredQ > 0) {
        status = 'partial';
      }

      return {
        itemId: item.id,
        itemName: item.name,
        weight: item.weight,
        price: item.price,
        totalQuestions: itemTotalQ,
        masteredQuestions: itemMasteredQ,
        percent,
        hasMistake,
        isFullyMastered,
        status
      };
    });

    totalQuestionsCount += catTotalQ;
    totalItemsCount += category.items.length;
    allMasteredQuestionsCount += catMasteredQ;
    allMasteredItemsCount += catMasteredItems;

    const catPercentComplete = catTotalQ > 0 ? Math.round((catMasteredQ / catTotalQ) * 100) : 0;
    const catPercentItems = category.items.length > 0 ? Math.round((catMasteredItems / category.items.length) * 100) : 0;

    let catStatus: CategoryProgressStatus = 'not_started';
    if (catPercentComplete === 100) {
      catStatus = 'completed';
    } else if (catMasteredQ > 0) {
      catStatus = 'in_progress';
    }

    return {
      categoryId: category.id,
      categoryName: category.name,
      iconName: category.iconName,
      badge: category.badge,
      totalQuestions: catTotalQ,
      masteredQuestions: catMasteredQ,
      percentComplete: catPercentComplete,
      totalItems: category.items.length,
      masteredItems: catMasteredItems,
      percentItemsMastered: catPercentItems,
      status: catStatus,
      items: itemsProgress
    };
  });

  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100)
    : 0;

  const totalPercent = totalQuestionsCount > 0
    ? Math.min(100, Math.round((allMasteredQuestionsCount / totalQuestionsCount) * 100))
    : 0;

  const totalItemsPercent = totalItemsCount > 0
    ? Math.min(100, Math.round((allMasteredItemsCount / totalItemsCount) * 100))
    : 0;

  return {
    userId,
    language: lang,
    summary: {
      totalQuestions: totalQuestionsCount,
      masteredQuestions: allMasteredQuestionsCount,
      percentComplete: totalPercent,
      totalItems: totalItemsCount,
      masteredItems: allMasteredItemsCount,
      percentItemsMastered: totalItemsPercent,
      totalAnswered: stats.totalAnswered,
      correctCount: stats.correctCount,
      accuracyPercent: accuracy,
      currentStreak: stats.currentStreak,
      bestStreak: stats.bestStreak,
      mistakesCount: mistakesList.length
    },
    categories: detailedCategories,
    mistakes: mistakesList
  };
}
