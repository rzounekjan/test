import { AppUser, AuthSession } from '../types/auth';

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

  constructor() {
    this.loadUsers();
    this.restoreSession();
    this.checkUrlAuth();
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
        this.saveUsers();
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

    const found = this.users.find(
      u => u.username.toLowerCase() === cleanUsername
    );

    if (!found) {
      return { success: false, error: 'Uživatelské jméno neexistuje.' };
    }

    if (!found.isActive) {
      return { success: false, error: 'Tento účet byl zablokován administrátorem.' };
    }

    // Check password: allow exact match or case-insensitive match (for mobile keyboards that auto-shift first letter)
    const isPasswordMatch = found.password === cleanPassword || 
      found.password.toLowerCase() === cleanPassword.toLowerCase();

    if (!isPasswordMatch) {
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
    this.saveUsers();
    return { success: true };
  }

  public generatePassword(): string {
    const prefixes = ['fuze', 'gastro', 'plac', 'bar', 'vino', 'menu'];
    const randPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randNum = Math.floor(100 + Math.random() * 900);
    return `${randPrefix}${randNum}`;
  }

  public checkUrlAuth(): AppUser | null {
    if (typeof window === 'undefined') return null;
    try {
      const hash = window.location.hash || '';
      const search = window.location.search || '';

      let authParam = '';
      if (hash.startsWith('#auth=')) {
        authParam = decodeURIComponent(hash.substring(6));
      } else if (search.includes('auth=')) {
        const params = new URLSearchParams(search);
        authParam = params.get('auth') || '';
      }

      if (authParam) {
        const parts = authParam.split(':');
        if (parts.length >= 2) {
          const [u, p, n, r] = parts;
          const cleanU = (u || '').trim().toLowerCase();
          const cleanP = (p || '').trim();
          const cleanName = n ? decodeURIComponent(n).trim() : cleanU;
          const cleanRole = (r === 'admin' ? 'admin' : 'staff') as 'admin' | 'staff';

          let existing = this.users.find(user => user.username.toLowerCase() === cleanU);
          if (!existing) {
            existing = {
              id: `user_imported_${Date.now()}`,
              username: cleanU,
              name: cleanName || cleanU,
              password: cleanP,
              role: cleanRole,
              isSuperAdmin: cleanU === 'admin' || cleanU === 'rzounekjan',
              isActive: true,
              notes: 'Přeneseno z rychlého přihlašovacího odkazu',
              createdAt: new Date().toISOString()
            };
            this.users.push(existing);
            this.saveUsers();
          } else {
            // Update password if it was updated by admin
            if (cleanP && existing.password !== cleanP) {
              existing.password = cleanP;
              this.saveUsers();
            }
          }

          // Clean URL without reloading page
          try {
            window.history.replaceState(null, '', window.location.pathname);
          } catch {}

          // Log in user automatically
          existing.lastLoginAt = new Date().toISOString();
          this.currentUser = existing;
          const session: AuthSession = { user: existing, loginTimestamp: Date.now() };
          try { localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session)); } catch {}
          this.notify();
          return existing;
        }
      }
    } catch (e) {
      console.error('Error parsing URL auth', e);
    }
    return null;
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
