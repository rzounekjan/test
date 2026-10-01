import React, { useState } from 'react';
import { Lock, KeyRound, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { authService } from '../utils/authService';
import { AppUser } from '../types/auth';

interface LoginGateProps {
  onLoginSuccess: (user: AppUser) => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await authService.login(username, password);
      if (res.success && res.user) {
        onLoginSuccess(res.user);
      } else {
        setError(res.error || 'Přihlášení se nezdařilo.');
      }
    } catch {
      setError('Došlo k neočekávané chybě při přihlašování.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-800/10 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Card Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-2xl shadow-amber-950/60 border border-amber-400/40 text-stone-950 font-black tracking-wider text-2xl mb-4">
            FZ
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight">
            FUZE Gastro Akademie
          </h1>
          <p className="text-stone-400 text-sm mt-1.5 font-medium">
            Interní výukový a tréninkový systém restaurace
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>Uzamčeno – Přístup pouze pro personál</span>
          </div>
        </div>

        {/* Login Form Box */}
        <div className="bg-stone-900/90 border border-stone-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-800/80 text-red-200 text-xs sm:text-sm flex flex-col gap-1 animate-in fade-in duration-200">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">⚠️</span>
                  <span>{error}</span>
                </div>
                {error.includes('neexistuje') && (
                  <p className="text-[11px] text-stone-400 mt-1 pl-5">
                    💡 Pokud jste účet vytvořili na počítači, otevřete na mobilu přímý odkaz z administrace, nebo klikněte na zkušební přihlášení níže.
                  </p>
                )}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                Přihlašovací jméno (Login)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="např. tereza nebo admin"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  autoComplete="username"
                  required
                  className="w-full pl-10 pr-4 py-3.5 bg-stone-950/90 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-sm transition-all select-text"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                Heslo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Vaše heslo"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  autoComplete="current-password"
                  required
                  className="w-full pl-10 pr-11 py-3.5 bg-stone-950/90 border border-stone-800 rounded-2xl text-stone-100 placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-sm transition-all select-text font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-500 hover:text-stone-300 transition-colors p-2 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-sm tracking-wide shadow-lg shadow-amber-950/40 hover:shadow-amber-950/60 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{isLoading ? 'Ověřuji...' : 'Vstoupit do výuky'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-stone-500">
            Nemáte vytvořený účet? Přístupové jméno a heslo vám přidělí manažer provozu.
          </p>
        </div>
      </div>
    </div>
  );
};
