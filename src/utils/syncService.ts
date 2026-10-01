import { 
  doc, 
  setDoc, 
  getDoc, 
  onSnapshot, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { 
  signInWithPopup, 
  signOut as fbSignOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { 
  db, 
  auth, 
  googleProvider, 
  handleFirestoreError, 
  OperationType 
} from '../firebase';
import { 
  UserStats, 
  AppLanguage, 
  getStoredStats, 
  saveStats, 
  mergeUserStats,
  setOnSaveStatsCallback 
} from './storage';
import { isDesktopOrApplePC } from './device';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'offline' | 'error';

export interface SyncState {
  user: User | null;
  status: SyncStatus;
  lastSyncedAt: Date | null;
  lastDevice: 'mobile' | 'pc';
  errorMessage: string | null;
}

type SyncListener = (state: SyncState) => void;
type StatsChangeListener = (lang: AppLanguage, stats: UserStats) => void;

class SyncService {
  private currentUser: User | null = null;
  private status: SyncStatus = 'idle';
  private lastSyncedAt: Date | null = null;
  private errorMessage: string | null = null;
  private syncListeners: Set<SyncListener> = new Set();
  private statsChangeListeners: Set<StatsChangeListener> = new Set();
  private unsubscribeSnapshots: { cs?: () => void; en?: () => void } = {};
  private isProcessingRemoteUpdate: boolean = false;
  private debounceTimers: { cs?: ReturnType<typeof setTimeout>; en?: ReturnType<typeof setTimeout> } = {};

  constructor() {
    this.init();
    setOnSaveStatsCallback((lang, stats) => {
      this.pushStats(lang, stats);
    });
  }

  private getDeviceType(): 'mobile' | 'pc' {
    return isDesktopOrApplePC() ? 'pc' : 'mobile';
  }

  private notifyState() {
    const state: SyncState = {
      user: this.currentUser,
      status: this.status,
      lastSyncedAt: this.lastSyncedAt,
      lastDevice: this.getDeviceType(),
      errorMessage: this.errorMessage,
    };
    this.syncListeners.forEach(listener => {
      try {
        listener(state);
      } catch (err) {
        console.error('Error in sync listener:', err);
      }
    });
  }

  public subscribeSyncState(listener: SyncListener): () => void {
    this.syncListeners.add(listener);
    listener({
      user: this.currentUser,
      status: this.status,
      lastSyncedAt: this.lastSyncedAt,
      lastDevice: this.getDeviceType(),
      errorMessage: this.errorMessage,
    });
    return () => {
      this.syncListeners.delete(listener);
    };
  }

  public subscribeStatsChange(listener: StatsChangeListener): () => void {
    this.statsChangeListeners.add(listener);
    return () => {
      this.statsChangeListeners.delete(listener);
    };
  }

  private init() {
    onAuthStateChanged(auth, async (user) => {
      this.currentUser = user;
      if (user) {
        this.status = 'syncing';
        this.errorMessage = null;
        this.notifyState();
        try {
          await this.ensureUserProfile(user);
          this.listenToStats(user.uid);
          // Initial bidirectional push/merge for both languages
          await this.pushStats('cs', getStoredStats('cs'));
          await this.pushStats('en', getStoredStats('en'));
          this.status = 'synced';
          this.lastSyncedAt = new Date();
        } catch (error) {
          console.error('Failed to initialize sync for user:', error);
          this.status = 'error';
          this.errorMessage = error instanceof Error ? error.message : 'Chyba synchronizace';
        }
      } else {
        this.cleanupSnapshots();
        this.status = 'idle';
        this.errorMessage = null;
      }
      this.notifyState();
    });
  }

  private async ensureUserProfile(user: User) {
    const userDocRef = doc(db, 'users', user.uid);
    const path = `users/${user.uid}`;
    try {
      const snap = await getDoc(userDocRef);
      if (!snap.exists()) {
        await setDoc(userDocRef, {
          id: user.uid,
          email: user.email || '',
          displayName: user.displayName || 'Gastro Student',
          photoURL: user.photoURL || '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      } else {
        await setDoc(userDocRef, {
          id: user.uid,
          email: user.email || '',
          displayName: user.displayName || 'Gastro Student',
          photoURL: user.photoURL || '',
          createdAt: snap.data().createdAt || serverTimestamp(),
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }

  private cleanupSnapshots() {
    if (this.unsubscribeSnapshots.cs) {
      this.unsubscribeSnapshots.cs();
      this.unsubscribeSnapshots.cs = undefined;
    }
    if (this.unsubscribeSnapshots.en) {
      this.unsubscribeSnapshots.en();
      this.unsubscribeSnapshots.en = undefined;
    }
  }

  private listenToStats(userId: string) {
    this.cleanupSnapshots();

    (['cs', 'en'] as AppLanguage[]).forEach(lang => {
      const path = `users/${userId}/stats/${lang}`;
      const docRef = doc(db, 'users', userId, 'stats', lang);

      const unsub = onSnapshot(docRef, (docSnap) => {
        if (!docSnap.exists()) {
          return;
        }

        const remoteData = docSnap.data();
        const localStats = getStoredStats(lang);

        // Merge remote and local stats
        const merged = mergeUserStats(localStats, {
          totalAnswered: remoteData.totalAnswered,
          correctCount: remoteData.correctCount,
          currentStreak: remoteData.currentStreak,
          bestStreak: remoteData.bestStreak,
          masteredItemIds: remoteData.masteredItemIds,
          masteredQuestionIds: remoteData.masteredQuestionIds,
          mistakeQuestionIds: remoteData.mistakeQuestionIds,
        });

        this.isProcessingRemoteUpdate = true;
        saveStats(merged, lang);
        this.isProcessingRemoteUpdate = false;

        this.lastSyncedAt = new Date();
        this.status = 'synced';
        this.notifyState();

        // Notify app listeners so UI updates in real time
        this.statsChangeListeners.forEach(listener => {
          try {
            listener(lang, merged);
          } catch (e) {
            console.error('Stats change listener error:', e);
          }
        });
      }, (error) => {
        console.error(`Firestore snapshot error for ${path}:`, error);
        this.status = 'error';
        this.errorMessage = error.message;
        this.notifyState();
        handleFirestoreError(error, OperationType.GET, path);
      });

      this.unsubscribeSnapshots[lang] = unsub;
    });
  }

  public async pushStats(lang: AppLanguage, stats: UserStats) {
    if (!this.currentUser) return;
    if (this.isProcessingRemoteUpdate) return;

    if (this.debounceTimers[lang]) {
      clearTimeout(this.debounceTimers[lang]);
    }

    this.debounceTimers[lang] = setTimeout(async () => {
      if (!this.currentUser) return;
      const path = `users/${this.currentUser.uid}/stats/${lang}`;
      const docRef = doc(db, 'users', this.currentUser.uid, 'stats', lang);

      this.status = 'syncing';
      this.notifyState();

      try {
        const payload = {
          userId: this.currentUser.uid,
          language: lang,
          totalAnswered: Number(stats.totalAnswered) || 0,
          correctCount: Number(stats.correctCount) || 0,
          currentStreak: Number(stats.currentStreak) || 0,
          bestStreak: Number(stats.bestStreak) || 0,
          masteredItemIds: Array.isArray(stats.masteredItemIds) ? stats.masteredItemIds : [],
          masteredQuestionIds: Array.isArray(stats.masteredQuestionIds) ? stats.masteredQuestionIds : [],
          mistakeQuestionIds: Array.isArray(stats.mistakeQuestionIds) ? stats.mistakeQuestionIds : [],
          lastDevice: this.getDeviceType(),
          updatedAt: serverTimestamp(),
        };

        await setDoc(docRef, payload, { merge: true });
        this.status = 'synced';
        this.lastSyncedAt = new Date();
        this.notifyState();
      } catch (error) {
        console.error(`Failed to push stats to ${path}:`, error);
        this.status = 'error';
        this.errorMessage = error instanceof Error ? error.message : 'Chyba při ukládání do cloudu';
        this.notifyState();
        handleFirestoreError(error, OperationType.WRITE, path);
      }
    }, 300);
  }

  public async signInWithGoogle(): Promise<User> {
    try {
      this.status = 'syncing';
      this.notifyState();
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      this.status = 'error';
      this.errorMessage = error instanceof Error ? error.message : 'Přihlášení se nezdařilo';
      this.notifyState();
      throw error;
    }
  }

  public async signOut(): Promise<void> {
    try {
      this.cleanupSnapshots();
      await fbSignOut(auth);
      this.currentUser = null;
      this.status = 'idle';
      this.notifyState();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }

  public getStatus(): SyncStatus {
    return this.status;
  }
}

export const syncService = new SyncService();
