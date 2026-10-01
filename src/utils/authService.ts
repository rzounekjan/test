import { AppUser, AuthSession } from '../types/auth';

const ACCOUNTS_STORAGE_KEY = 'fuze_gastro_accounts_db';
const SESSION_STORAGE_KEY = 'fuze_gastro_active_session';

const DEFAULT_USERS: AppUser[] = [
  {
    id: 'user_admin_01',
    username: 'admin',
    name: 'Jan Rzounek (Administrátor)',
    password: 'admin',
    role: 'admin',
    isActive: true,
    notes: 'Hlavní administrátorský účet',
    createdAt: new Date().toISOString()
  },
  {
    id: 'user_admin_02',
    username: 'rzounekjan',
    name: 'Jan Rzounek',
    password: 'admin',
    role: 'admin',
    isActive: true,
    notes: 'Osobní účet administrátora',
    createdAt: new Date().toISOString()
  },
  {
    id: 'user_staff_01',
    username: 'obsluha',
    name: 'Obsluha - Plac',
    password: 'fuze',
    role: 'staff',
    isActive: true,
    notes: 'Výchozí zkušební účet pro personál',
    createdAt: new Date().toISOString()
  }
];

class AuthService {
  private users: AppUser[] = [];
  private currentUser: AppUser | null = null;
  private listeners: Set<(user: AppUser | null) => void> = new Set();

  constructor() {
    this.loadUsers();
    this.restoreSession();
  }

  private loadUsers(): void {
    try {
      const stored = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (stored) {
        this.users = JSON.parse(stored);
        // Ensure at least one admin exists
        const hasAdmin = this.users.some(u => u.role === 'admin' && u.isActive);
        if (!hasAdmin) {
          this.users.push(DEFAULT_USERS[0]);
          this.saveUsers();
        }
      } else {
        this.users = [...DEFAULT_USERS];
        this.saveUsers();
      }
    } catch {
      this.users = [...DEFAULT_USERS];
    }
  }

  private saveUsers(): void {
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

  public async login(
    usernameInput: string,
    passwordInput: string
  ): Promise<{ success: boolean; user?: AppUser; error?: string }> {
    const cleanUsername = usernameInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanUsername || !cleanPassword) {
      return { success: false, error: 'Zadejte přihlašovací jméno i heslo.' };
    }

    const found = this.users.find(
      u => u.username.toLowerCase() === cleanUsername
    );

    if (!found) {
      return { success: false, error: 'Uživatelské jméno neexistuje.' };
    }

    if (!found.isActive) {
      return { success: false, error: 'Tento účet byl zablokován administrátorem.' };
    }

    if (found.password !== cleanPassword) {
      return { success: false, error: 'Nesprávné heslo. Zkontrolujte velká a malá písmena.' };
    }

    // Success
    found.lastLoginAt = new Date().toISOString();
    this.saveUsers();

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
      isActive: true,
      notes: userData.notes?.trim() || '',
      createdAt: new Date().toISOString()
    };

    this.users.push(newUser);
    this.saveUsers();
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

    this.saveUsers();

    // If current user was updated, update in-memory session too
    if (this.currentUser?.id === id) {
      this.currentUser = this.users[userIndex];
      this.notify();
    }

    return { success: true };
  }

  public deleteUser(id: string): { success: boolean; error?: string } {
    const targetUser = this.users.find(u => u.id === id);
    if (!targetUser) {
      return { success: false, error: 'Uživatel nenalezen.' };
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
    this.saveUsers();
    return { success: true };
  }

  public generatePassword(): string {
    const prefixes = ['fuze', 'gastro', 'plac', 'bar', 'vino', 'menu'];
    const randPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randNum = Math.floor(100 + Math.random() * 900);
    return `${randPrefix}${randNum}`;
  }
}

export const authService = new AuthService();
