export type UserRole = 'admin' | 'staff';

export interface AppUser {
  id: string;
  username: string; // Lowercase unique login identifier, e.g. "admin", "tereza"
  name: string; // Full display name, e.g. "Jan Rzounek", "Tereza - Plac"
  password: string; // Plain password for ease of staff management by admin
  role: UserRole;
  isActive: boolean;
  notes?: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface AuthSession {
  user: AppUser;
  loginTimestamp: number;
}
