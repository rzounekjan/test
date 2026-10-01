import { MENU_CATEGORIES, MenuItem } from '../data/menuData';
import { MENU_CATEGORIES_EN } from '../data/menuDataEn';

export interface UserStats {
  totalAnswered: number;
  correctCount: number;
  currentStreak: number;
  bestStreak: number;
  masteredItemIds: string[];
  masteredQuestionIds: string[];
  mistakeQuestionIds: string[];
}

export type AppLanguage = 'cs' | 'en';

// Question ID -> Item ID lookup map and Item ID -> MenuItem map for all items across languages
const QUESTION_TO_ITEM_MAP: Record<string, string> = {};
const ALL_ITEMS_MAP: Record<string, MenuItem> = {};
const ALL_ITEM_IDS_SET = new Set<string>();

MENU_CATEGORIES.forEach(cat => {
  cat.items.forEach(item => {
    ALL_ITEM_IDS_SET.add(item.id);
    ALL_ITEMS_MAP[item.id] = item;
    item.questions.forEach(q => {
      QUESTION_TO_ITEM_MAP[q.id] = item.id;
    });
  });
});

MENU_CATEGORIES_EN.forEach(cat => {
  cat.items.forEach(item => {
    ALL_ITEM_IDS_SET.add(item.id);
    ALL_ITEMS_MAP[item.id] = item;
    item.questions.forEach(q => {
      QUESTION_TO_ITEM_MAP[q.id] = item.id;
    });
  });
});

export function getStatsKey(lang: AppLanguage = 'cs'): string {
  return `fuze_gastro_stats_${lang}`;
}

export function getStoredStats(lang: AppLanguage = 'cs'): UserStats {
  try {
    const key = getStatsKey(lang);
    let raw = localStorage.getItem(key);
    // Backward compatibility for existing Czech stats
    if (!raw && lang === 'cs') {
      raw = localStorage.getItem('fuze_gastro_stats');
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      const masteredQuestionIds: string[] = Array.isArray(parsed.masteredQuestionIds) ? Array.from(new Set(parsed.masteredQuestionIds)) : [];
      let masteredItemIds: string[] = Array.isArray(parsed.masteredItemIds) ? [...parsed.masteredItemIds] : [];

      // Check all items: if all questions for an item are mastered, ensure the item is in masteredItemIds
      for (const itemId of ALL_ITEM_IDS_SET) {
        const item = ALL_ITEMS_MAP[itemId];
        if (item && item.questions.length > 0) {
          if (item.questions.every(q => masteredQuestionIds.includes(q.id))) {
            if (!masteredItemIds.includes(itemId)) {
              masteredItemIds.push(itemId);
            }
          }
        }
      }

      // Filter to unique valid item IDs
      const uniqueValidItemIds = Array.from(new Set(masteredItemIds)).filter(id => ALL_ITEM_IDS_SET.has(id));

      return {
        totalAnswered: Number(parsed.totalAnswered) || 0,
        correctCount: Number(parsed.correctCount) || 0,
        currentStreak: Number(parsed.currentStreak) || 0,
        bestStreak: Number(parsed.bestStreak) || 0,
        masteredItemIds: uniqueValidItemIds,
        masteredQuestionIds,
        mistakeQuestionIds: Array.isArray(parsed.mistakeQuestionIds) ? parsed.mistakeQuestionIds : []
      };
    }
  } catch {
    // ignore
  }
  return {
    totalAnswered: 0,
    correctCount: 0,
    currentStreak: 0,
    bestStreak: 0,
    masteredItemIds: [],
    masteredQuestionIds: [],
    mistakeQuestionIds: []
  };
}

let onSaveStatsCallback: ((lang: AppLanguage, stats: UserStats) => void) | null = null;

export function setOnSaveStatsCallback(cb: (lang: AppLanguage, stats: UserStats) => void): void {
  onSaveStatsCallback = cb;
}

export function mergeUserStats(local: UserStats, remote?: Partial<UserStats> | null): UserStats {
  if (!remote) return local;

  const localMasteredQ = new Set(local.masteredQuestionIds || []);
  const remoteMasteredQ = Array.isArray(remote.masteredQuestionIds) ? remote.masteredQuestionIds : [];
  remoteMasteredQ.forEach(q => localMasteredQ.add(q));
  const mergedMasteredQuestionIds = Array.from(localMasteredQ);

  const mergedMasteredItemIds = new Set<string>(
    Array.isArray(local.masteredItemIds) ? local.masteredItemIds : []
  );
  if (Array.isArray(remote.masteredItemIds)) {
    remote.masteredItemIds.forEach(id => mergedMasteredItemIds.add(id));
  }

  for (const itemId of ALL_ITEM_IDS_SET) {
    const item = ALL_ITEMS_MAP[itemId];
    if (item && item.questions.length > 0) {
      if (item.questions.every(q => mergedMasteredQuestionIds.includes(q.id))) {
        mergedMasteredItemIds.add(itemId);
      }
    }
  }

  const validMasteredItemIds = Array.from(mergedMasteredItemIds).filter(id => ALL_ITEM_IDS_SET.has(id));

  const localMistakes = new Set(local.mistakeQuestionIds || []);
  if (Array.isArray(remote.mistakeQuestionIds)) {
    remote.mistakeQuestionIds.forEach(id => localMistakes.add(id));
  }
  mergedMasteredQuestionIds.forEach(id => localMistakes.delete(id));

  const totalAnswered = Math.max(
    Number(local.totalAnswered) || 0,
    Number(remote.totalAnswered) || 0,
    mergedMasteredQuestionIds.length
  );

  const correctCount = Math.max(
    Number(local.correctCount) || 0,
    Number(remote.correctCount) || 0,
    mergedMasteredQuestionIds.length
  );

  const bestStreak = Math.max(
    Number(local.bestStreak) || 0,
    Number(remote.bestStreak) || 0
  );

  const currentStreak = typeof remote.currentStreak === 'number'
    ? Math.max(local.currentStreak, remote.currentStreak)
    : local.currentStreak;

  return {
    totalAnswered,
    correctCount,
    currentStreak,
    bestStreak,
    masteredItemIds: validMasteredItemIds,
    masteredQuestionIds: mergedMasteredQuestionIds,
    mistakeQuestionIds: Array.from(localMistakes)
  };
}

export function saveStats(stats: UserStats, lang: AppLanguage = 'cs'): void {
  try {
    localStorage.setItem(getStatsKey(lang), JSON.stringify(stats));
    if (lang === 'cs') {
      localStorage.setItem('fuze_gastro_stats', JSON.stringify(stats));
    }
    if (onSaveStatsCallback) {
      onSaveStatsCallback(lang, stats);
    }
  } catch {
    // ignore
  }
}

export function recordAnswer(questionId: string, itemId: string, isCorrect: boolean, lang: AppLanguage = 'cs'): UserStats {
  const stats = getStoredStats(lang);
  stats.totalAnswered += 1;

  if (isCorrect) {
    stats.correctCount += 1;
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.bestStreak) {
      stats.bestStreak = stats.currentStreak;
    }
    // Remove from mistakes if it was there
    stats.mistakeQuestionIds = (stats.mistakeQuestionIds || []).filter(id => id !== questionId);

    // Record question as mastered (every question/ingredient counts!)
    if (!stats.masteredQuestionIds) {
      stats.masteredQuestionIds = [];
    }
    if (!stats.masteredQuestionIds.includes(questionId)) {
      stats.masteredQuestionIds.push(questionId);
    }

    // Check if the parent item has now been fully mastered
    if (!stats.masteredItemIds) {
      stats.masteredItemIds = [];
    }
    const resolvedItemId = itemId || QUESTION_TO_ITEM_MAP[questionId];
    if (resolvedItemId) {
      const parentItem = ALL_ITEMS_MAP[resolvedItemId];
      if (parentItem) {
        const allQuestionsMastered = parentItem.questions.length === 0 || parentItem.questions.every(q => stats.masteredQuestionIds.includes(q.id));
        if (allQuestionsMastered && !stats.masteredItemIds.includes(resolvedItemId)) {
          stats.masteredItemIds.push(resolvedItemId);
        }
      } else if (!stats.masteredItemIds.includes(resolvedItemId)) {
        stats.masteredItemIds.push(resolvedItemId);
      }
    }
  } else {
    stats.currentStreak = 0;
    if (!stats.mistakeQuestionIds) {
      stats.mistakeQuestionIds = [];
    }
    if (!stats.mistakeQuestionIds.includes(questionId)) {
      stats.mistakeQuestionIds.push(questionId);
    }
  }

  saveStats(stats, lang);
  return stats;
}

export function resetStats(lang: AppLanguage = 'cs'): UserStats {
  const fresh: UserStats = {
    totalAnswered: 0,
    correctCount: 0,
    currentStreak: 0,
    bestStreak: 0,
    masteredItemIds: [],
    masteredQuestionIds: [],
    mistakeQuestionIds: []
  };
  saveStats(fresh, lang);
  return fresh;
}
