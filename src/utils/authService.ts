import { AppUser, AuthSession } from '../types/auth';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

const ACCOUNTS_STORAGE_KEY = 'fuze_gastro_accounts_db';
const SESSION_STORAGE_KEY = 'fuze_gastro_active_session';

const DEFAULT_USERS: AppUser[] = [
  {
    id: 'user_admin_01',
    username: 'admin',
    name: 'Jan Rzounek (Hlavní administrátor)',
    password: 'admin',
    role: 'admin',
    isSuperAdmin: true,
    isActive: true,
    notes: 'Hlavní administrátorský účet (Vlastník)',
    createdAt: new Date().toISOString()
  },
  {
    id: 'user_admin_02',
    username: 'rzounekjan',
    name: 'Jan Rzounek',
    password: 'admin',
    role: 'admin',
    isSuperAdmin: true,
    isActive: true,
    notes: 'Osobní účet hlavního administrátora',
    createdAt: new Date().toISOString()
  },
  {
    id: 'user_staff_01',
    username: 'obsluha',
    name: 'Obsluha - Plac',
    password: 'fuze',
    role: 'staff',
    isSuperAdmin: false,
    isActive: true,
    notes: 'Výchozí zkušební účet pro personál',
    createdAt: new Date().toISOString()
  }
];

class AuthService {
  private users: AppUser[] = [];
  private currentUser: AppUser | null = null;
  private listeners: Set<(user: AppUser | null) => void> = new Set();
  private hasInitializedFirestore: boolean = false;

  constructor() {
    this.loadUsers();
    this.restoreSession();
    this.initFirestoreSync();
  }

  private initFirestoreSync(): void {
    if (typeof window === 'undefined' || this.hasInitializedFirestore) return;
    this.hasInitializedFirestore = true;

    try {
      const colRef = collection(db, 'restaurant_accounts');
      onSnapshot(colRef, (snapshot) => {
        if (!snapshot.empty) {
          const remoteUsers: AppUser[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as AppUser;
            remoteUsers.push(data);
          });

          // Ensure super admin accounts always retain isSuperAdmin: true
          remoteUsers.forEach(u => {
            if (
              u.id === 'user_admin_01' || 
              u.id === 'user_admin_02' || 
              u.username === 'admin' || 
              u.username === 'rzounekjan'
            ) {
              u.isSuperAdmin = true;
            }
          });

          this.users = remoteUsers;
          this.saveUsersLocally();

          if (this.currentUser) {
            const updated = this.users.find(u => u.id === this.currentUser?.id);
            if (updated) {
              this.currentUser = updated;
            }
          }
          this.notify();
        } else {
          // If Firestore collection is empty, seed it with DEFAULT_USERS
          this.seedInitialUsersToFirestore();
        }
      }, (error) => {
        console.warn('Firestore accounts sync status:', error);
      });
    } catch (e) {
      console.warn('Could not initialize Firestore sync:', e);
    }
  }

  private async seedInitialUsersToFirestore(): Promise<void> {
    try {
      for (const user of this.users.length > 0 ? this.users : DEFAULT_USERS) {
        await setDoc(doc(db, 'restaurant_accounts', user.id), user);
      }
    } catch (err) {
      console.warn('Initial seeding of users:', err);
    }
  }

  private loadUsers(): void {
    try {
      const stored = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (stored) {
        this.users = JSON.parse(stored);
        // Ensure main admin accounts always have isSuperAdmin: true
        let hasSuperAdmin = false;
        this.users.forEach(u => {
          if (
            u.id === 'user_admin_01' || 
            u.id === 'user_admin_02' || 
            u.username === 'admin' || 
            u.username === 'rzounekjan'
          ) {
            u.isSuperAdmin = true;
            hasSuperAdmin = true;
          }
        });
        if (!hasSuperAdmin) {
          this.users.unshift(DEFAULT_USERS[0]);
        }
        // Ensure at least one admin exists
        const hasAdmin = this.users.some(u => u.role === 'admin' && u.isActive);
        if (!hasAdmin) {
          this.users.push(DEFAULT_USERS[0]);
        }
        this.saveUsersLocally();
      } else {
        this.users = [...DEFAULT_USERS];
        this.saveUsersLocally();
      }
    } catch {
      this.users = [...DEFAULT_USERS];
    }
  }

  private saveUsers(): void {
    this.saveUsersLocally();
  }

  private saveUsersLocally(): void {
    try {
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(this.users));
    } catch (e) {
      console.error('Failed to save users database', e);
    }
  }

  private restoreSession(): void {
    try {
      const raw = localStorage.getItem(SESSION_STORAGE_KEY);
      if (raw) {
        const session: AuthSession = JSON.parse(raw);
        // Check if user still exists and is active
        const user = this.users.find(u => u.id === session.user.id);
        if (user && user.isActive) {
          this.currentUser = user;
        } else {
          this.logout();
        }
      }
    } catch {
      this.currentUser = null;
    }
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.currentUser));
  }

  public subscribe(cb: (user: AppUser | null) => void): () => void {
    this.listeners.add(cb);
    cb(this.currentUser);
    return () => {
      this.listeners.delete(cb);
    };
  }

  public getCurrentUser(): AppUser | null {
    return this.currentUser;
  }

  public isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  public isSuperAdmin(): boolean {
    return Boolean(this.currentUser?.isSuperAdmin);
  }

  public async login(
    usernameInput: string,
    passwordInput: string
  ): Promise<{ success: boolean; user?: AppUser; error?: string }> {
    const cleanUsername = usernameInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanUsername || !cleanPassword) {
      return { success: false, error: 'Zadejte přihlašovací jméno i heslo.' };
    }

    // Smart user matching
    const found = this.users.find(u => {
      const uName = (u.username || '').toLowerCase();
      const dName = (u.name || '').toLowerCase();
      if (uName === cleanUsername) return true;
      if (cleanUsername === 'rzounekjan@gmail.com' && (uName === 'admin' || uName === 'rzounekjan')) return true;
      if (cleanUsername.includes('@') && cleanUsername.split('@')[0] === uName) return true;
      if (dName === cleanUsername || dName.replace(/\s+/g, '') === cleanUsername.replace(/\s+/g, '')) return true;
      if (cleanUsername === 'jan' && (uName === 'admin' || uName === 'rzounekjan')) return true;
      return false;
    });

    if (!found) {
      return { success: false, error: 'Uživatelské jméno neexistuje.' };
    }

    if (!found.isActive) {
      return { success: false, error: 'Tento účet byl zablokován administrátorem.' };
    }

    // Flexible password check:
    // 1. Matches user's current password (exact or case-insensitive)
    // 2. Or for admin accounts, also allow 'admin'
    // 3. Or for staff accounts, also allow 'fuze'
    const cleanPwLower = cleanPassword.toLowerCase();
    const storedPwLower = (found.password || '').toLowerCase();

    const isMatch = 
      found.password === cleanPassword ||
      storedPwLower === cleanPwLower ||
      ((found.isSuperAdmin || found.username === 'admin' || found.username === 'rzounekjan') && cleanPwLower === 'admin') ||
      (found.username === 'obsluha' && cleanPwLower === 'fuze');

    if (!isMatch) {
      return { success: false, error: 'Nesprávné heslo. Zkontrolujte velká a malá písmena.' };
    }

    // Success
    found.lastLoginAt = new Date().toISOString();
    this.saveUsersLocally();
    // Sync last login to Firestore in background
    setDoc(doc(db, 'restaurant_accounts', found.id), found, { merge: true }).catch(() => {});

    this.currentUser = found;
    const session: AuthSession = {
      user: found,
      loginTimestamp: Date.now()
    };
    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    } catch {
      // ignore
    }

    this.notify();
    return { success: true, user: found };
  }

  public logout(): void {
    this.currentUser = null;
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // ignore
    }
    this.notify();
  }

  public getAllUsers(): AppUser[] {
    return [...this.users];
  }

  public createUser(userData: {
    username: string;
    name: string;
    password: string;
    role: 'admin' | 'staff';
    notes?: string;
  }): { success: boolean; user?: AppUser; error?: string } {
    const cleanUsername = userData.username.trim().toLowerCase().replace(/\s+/g, '');
    const cleanName = userData.name.trim();
    const cleanPassword = userData.password.trim();

    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, error: 'Přihlašovací jméno musí mít alespoň 3 znaky bez mezer.' };
    }

    if (!cleanName) {
      return { success: false, error: 'Zadejte celé jméno nebo označení pracovníka.' };
    }

    if (!cleanPassword || cleanPassword.length < 3) {
      return { success: false, error: 'Heslo musí mít alespoň 3 znaky.' };
    }

    // Only Super Admin can create other admins
    if (userData.role === 'admin' && !this.currentUser?.isSuperAdmin) {
      return { success: false, error: 'Pouze hlavní administrátor (vlastník) může vytvářet administrátorské účty.' };
    }

    const exists = this.users.some(u => u.username.toLowerCase() === cleanUsername);
    if (exists) {
      return { success: false, error: `Uživatelské jméno "${cleanUsername}" již existuje. Zvolte jiné.` };
    }

    const newUser: AppUser = {
      id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      username: cleanUsername,
      name: cleanName,
      password: cleanPassword,
      role: userData.role,
      isSuperAdmin: false,
      isActive: true,
      notes: userData.notes?.trim() || '',
      createdAt: new Date().toISOString()
    };

    this.users.push(newUser);
    this.saveUsersLocally();

    // Instant sync to Firestore so all mobile phones & PCs see the new user immediately
    setDoc(doc(db, 'restaurant_accounts', newUser.id), newUser).catch((err) => {
      console.error('Error saving user to Firestore:', err);
      handleFirestoreError(err, OperationType.CREATE, `restaurant_accounts/${newUser.id}`);
    });

    this.notify();
    return { success: true, user: newUser };
  }

  public updateUser(
    id: string,
    updates: Partial<Pick<AppUser, 'name' | 'password' | 'role' | 'isActive' | 'notes'>>
  ): { success: boolean; error?: string } {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return { success: false, error: 'Uživatel nenalezen.' };
    }

    const targetUser = this.users[userIndex];

    // Security: Protect Super Admin from being modified by other users
    if (targetUser.isSuperAdmin && this.currentUser?.id !== targetUser.id) {
      return { success: false, error: 'Účet hlavního administrátora je chráněn. Může jej upravovat pouze hlavní administrátor sám.' };
    }

    // Security: Regular admin cannot promote someone to admin
    if (updates.role === 'admin' && !this.currentUser?.isSuperAdmin) {
      return { success: false, error: 'Pouze hlavní administrátor může povyšovat uživatele na administrátory.' };
    }

    // Prevent deactivating or demoting the last active admin
    if (
      targetUser.role === 'admin' &&
      (updates.isActive === false || updates.role === 'staff')
    ) {
      const activeAdminsCount = this.users.filter(
        u => u.role === 'admin' && u.isActive && u.id !== id
      ).length;
      if (activeAdminsCount === 0) {
        return { success: false, error: 'Nelze zablokovat nebo změnit roli posledního administrátora.' };
      }
    }

    this.users[userIndex] = {
      ...targetUser,
      ...updates
    };

    const updated = this.users[userIndex];
    this.saveUsersLocally();

    // Instant sync to Firestore
    setDoc(doc(db, 'restaurant_accounts', id), updated).catch((err) => {
      console.error('Error updating user in Firestore:', err);
      handleFirestoreError(err, OperationType.UPDATE, `restaurant_accounts/${id}`);
    });

    // If current user was updated, update in-memory session too
    if (this.currentUser?.id === id) {
      this.currentUser = updated;
    }
    this.notify();

    return { success: true };
  }

  public deleteUser(id: string): { success: boolean; error?: string } {
    const targetUser = this.users.find(u => u.id === id);
    if (!targetUser) {
      return { success: false, error: 'Uživatel nenalezen.' };
    }

    // Security: Super Admin can NEVER be deleted
    if (targetUser.isSuperAdmin) {
      return { success: false, error: 'Účet hlavního administrátora je chráněn a nelze jej smazat.' };
    }

    // Security: Regular admin cannot delete other admin accounts
    if (targetUser.role === 'admin' && !this.currentUser?.isSuperAdmin) {
      return { success: false, error: 'Pouze hlavní administrátor má oprávnění mazat administrátorské účty.' };
    }

    if (targetUser.role === 'admin') {
      const activeAdminsCount = this.users.filter(
        u => u.role === 'admin' && u.id !== id
      ).length;
      if (activeAdminsCount === 0) {
        return { success: false, error: 'Nelze smazat posledního administrátora.' };
      }
    }

    if (this.currentUser?.id === id) {
      return { success: false, error: 'Nemůžete smazat svůj právě přihlášený účet.' };
    }

    this.users = this.users.filter(u => u.id !== id);
    this.saveUsersLocally();

    // Instant delete from Firestore
    deleteDoc(doc(db, 'restaurant_accounts', id)).catch((err) => {
      console.error('Error deleting user from Firestore:', err);
      handleFirestoreError(err, OperationType.DELETE, `restaurant_accounts/${id}`);
    });

    this.notify();
    return { success: true };
  }

  public generatePassword(): string {
    const prefixes = ['fuze', 'gastro', 'plac', 'bar', 'vino', 'menu'];
    const randPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randNum = Math.floor(100 + Math.random() * 900);
    return `${randPrefix}${randNum}`;
  }

  public exportUsersJson(): string {
    return JSON.stringify(this.users, null, 2);
  }

  public importUsersJson(jsonStr: string): { success: boolean; count?: number; error?: string } {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!Array.isArray(parsed)) {
        return { success: false, error: 'Neplatný formát souboru (musí být seznam uživatelů).' };
      }

      let count = 0;
      parsed.forEach((item: Partial<AppUser>) => {
        if (item.username && item.password && item.name) {
          const cleanU = item.username.trim().toLowerCase();
          const cleanP = item.password.trim();
          const existing = this.users.find(u => u.username.toLowerCase() === cleanU);
          if (existing) {
            existing.password = cleanP;
            existing.name = item.name.trim();
            existing.role = item.role === 'admin' ? 'admin' : 'staff';
          } else {
            this.users.push({
              id: item.id || `user_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
              username: cleanU,
              name: item.name.trim(),
              password: cleanP,
              role: item.role === 'admin' ? 'admin' : 'staff',
              isSuperAdmin: cleanU === 'admin' || cleanU === 'rzounekjan',
              isActive: item.isActive !== false,
              notes: item.notes || 'Importováno',
              createdAt: item.createdAt || new Date().toISOString()
            });
            count++;
          }
        }
      });

      this.saveUsers();
      this.notify();
      return { success: true, count };
    } catch {
      return { success: false, error: 'Chyba při čtení dat.' };
    }
  }
}

export const authService = new AuthService();
