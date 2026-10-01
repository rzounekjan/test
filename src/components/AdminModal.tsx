import React, { useState, useEffect } from 'react';
import { 
  X, UserPlus, Users, KeyRound, Copy, Check, Trash2, 
  ShieldAlert, ShieldCheck, Sparkles, RefreshCw, Lock, AlertCircle,
  Trophy, RotateCcw, BarChart3
} from 'lucide-react';
import { authService } from '../utils/authService';
import { AppUser } from '../types/auth';
import { getUserStats, resetUserStats } from '../utils/storage';
import { WaiterDetailsModal } from './WaiterDetailsModal';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AppUser | null;
  totalQuestionsCount?: number;
  totalItemsCount?: number;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  totalQuestionsCount = 911,
  totalItemsCount = 241
}) => {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Form State for creating a user
  const [newName, setNewName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState(() => authService.generatePassword());
  const [newRole, setNewRole] = useState<'staff' | 'admin'>('staff');
  const [newNotes, setNewNotes] = useState('');

  // Editing password modal state
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editPasswordValue, setEditPasswordValue] = useState('');
  const [statsRevision, setStatsRevision] = useState(0);
  const [selectedDetailsUser, setSelectedDetailsUser] = useState<AppUser | null>(null);

  const refreshUsers = () => {
    setUsers(authService.getAllUsers());
  };

  const handleResetUserStats = (user: AppUser) => {
    const isSelf = currentUser?.id === user.id;
    if (user.isSuperAdmin && !isSelf) {
      showStatus('Výsledky hlavního administrátora může spravovat pouze hlavní administrátor sám.', 'error');
      return;
    }
    const confirmMsg = isSelf
      ? `Opravdu chcete vyresetovat své vlastní studijní výsledky na 0?`
      : `Opravdu chcete vyresetovat výsledky testů pouze pro uživatele "${user.name}"?\n\nJeho skóre bude nastaveno na 0. Vaše administrátorské výsledky ani výsledky ostatních uživatelů tím NEBUDOU ovlivněny.`;

    if (window.confirm(confirmMsg)) {
      resetUserStats(user.id, 'cs');
      resetUserStats(user.id, 'en');
      setStatsRevision(prev => prev + 1);
      showStatus(`Výsledky testů pro uživatele ${user.name} byly vynulovány na 0.`, 'success');
    }
  };

  useEffect(() => {
    if (isOpen) {
      refreshUsers();
      setStatusMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const showStatus = (text: string, type: 'success' | 'error') => {
    setStatusMsg({ text, type });
    setTimeout(() => {
      setStatusMsg(null);
    }, 4000);
  };

  const handleGeneratePassword = () => {
    setNewPassword(authService.generatePassword());
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const res = authService.createUser({
      name: newName,
      username: newUsername,
      password: newPassword,
      role: newRole,
      notes: newNotes
    });

    if (res.success && res.user) {
      refreshUsers();
      showStatus(`Uživatel ${res.user.name} byl úspěšně vytvořen!`, 'success');
      // Reset form
      setNewName('');
      setNewUsername('');
      setNewPassword(authService.generatePassword());
      setNewNotes('');
      setActiveTab('list');
    } else {
      showStatus(res.error || 'Chyba při vytváření uživatele', 'error');
    }
  };

  const handleToggleActive = (user: AppUser) => {
    if (user.isSuperAdmin) {
      showStatus('Účet hlavního administrátora nelze pozastavit.', 'error');
      return;
    }
    const res = authService.updateUser(user.id, { isActive: !user.isActive });
    if (res.success) {
      refreshUsers();
      showStatus(`Stav uživatele ${user.name} byl změněn.`, 'success');
    } else {
      showStatus(res.error || 'Nelze změnit stav.', 'error');
    }
  };

  const handleDeleteUser = (user: AppUser) => {
    if (user.isSuperAdmin) {
      showStatus('Účet hlavního administrátora je chráněn a nelze jej smazat.', 'error');
      return;
    }
    if (user.role === 'admin' && !currentUser?.isSuperAdmin) {
      showStatus('Pouze hlavní administrátor má oprávnění mazat administrátorské účty.', 'error');
      return;
    }
    if (window.confirm(`Opravdu chcete smazat účet uživatele "${user.name}" (${user.username})?`)) {
      const res = authService.deleteUser(user.id);
      if (res.success) {
        refreshUsers();
        showStatus(`Uživatel ${user.name} byl smazán.`, 'success');
      } else {
        showStatus(res.error || 'Nelze smazat uživatele.', 'error');
      }
    }
  };

  const handleSavePassword = (userId: string) => {
    if (!editPasswordValue.trim()) {
      showStatus('Heslo nesmí být prázdné.', 'error');
      return;
    }
    const target = users.find(u => u.id === userId);
    if (target?.isSuperAdmin && currentUser?.id !== target.id) {
      showStatus('Nemáte oprávnění měnit heslo hlavního administrátora.', 'error');
      return;
    }
    const res = authService.updateUser(userId, { password: editPasswordValue.trim() });
    if (res.success) {
      refreshUsers();
      setEditingUserId(null);
      setEditPasswordValue('');
      showStatus('Heslo bylo úspěšně změněno.', 'success');
    } else {
      showStatus(res.error || 'Chyba při změně hesla.', 'error');
    }
  };

  const copyCredentialsForStaff = (user: AppUser) => {
    if (user.isSuperAdmin && currentUser?.id !== user.id) {
      showStatus('Údaje hlavního administrátora nelze kopírovat.', 'error');
      return;
    }
    const text = `Ahoj ${user.name},\nzde jsou tvé přístupové údaje do výukového programu FUZE Gastro Akademie:\n\n🌐 Web: ${window.location.origin}\n👤 Přihlašovací jméno: ${user.username}\n🔑 Heslo: ${user.password}\n\nPo otevření webu zadej své jméno a heslo a můžeš začít trénovat menu!`;
    navigator.clipboard.writeText(text);
    setCopiedId(user.id);
    showStatus(`Přístupové údaje pro ${user.name} byly zkopírovány do schránky!`, 'success');
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
                Správa uživatelů a přístupů
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Administrátor
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                Pouze lidé s přiděleným loginem a heslem mají přístup do výuky
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Alert Notification */}
        {statusMsg && (
          <div className={`px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all ${
            statusMsg.type === 'success' 
              ? 'bg-emerald-950/70 border-b border-emerald-800 text-emerald-300' 
              : 'bg-red-950/70 border-b border-red-800 text-red-300'
          }`}>
            <span>{statusMsg.type === 'success' ? '✅' : '⚠️'}</span>
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Tab switcher */}
        <div className="flex border-b border-stone-800 bg-stone-950/40 px-5 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('list')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'list'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Seznam uživatelů ({users.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'create'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>+ Přidat nového uživatele</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {activeTab === 'list' ? (
            <div className="space-y-3">
              {users.map((user) => {
                const isCurrent = currentUser?.id === user.id;
                const isViewerSuperAdmin = Boolean(currentUser?.isSuperAdmin);
                const isTargetSuperAdmin = Boolean(user.isSuperAdmin);
                const isEditingPassword = editingUserId === user.id;

                // Security permissions: Main admin credentials and controls are protected from other admins
                const canSeePassword = !isTargetSuperAdmin || isCurrent;
                const canEditPassword = !isTargetSuperAdmin || isCurrent;
                const canToggleActive = !isCurrent && !isTargetSuperAdmin && (user.role !== 'admin' || isViewerSuperAdmin);
                const canDelete = !isCurrent && !isTargetSuperAdmin && (user.role !== 'admin' || isViewerSuperAdmin);
                const canResetStats = !isTargetSuperAdmin || isCurrent;

                const userStats = getUserStats(user.id, 'cs');
                const userAccuracy = userStats.totalAnswered > 0
                  ? Math.round((userStats.correctCount / userStats.totalAnswered) * 100)
                  : 0;
                const masteredQuestions = userStats.masteredQuestionIds?.length || 0;
                const percentDone = Math.min(100, Math.round((masteredQuestions / totalQuestionsCount) * 100));

                return (
                  <div
                    key={`${user.id}_${statsRevision}`}
                    className={`p-4 rounded-2xl border transition-all ${
                      user.isActive
                        ? 'bg-stone-950/70 border-stone-800/80 hover:border-stone-700'
                        : 'bg-stone-950/30 border-red-900/30 opacity-70'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      {/* User Info */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-stone-100 text-sm sm:text-base">
                            {user.name}
                          </h3>
                          {user.isSuperAdmin ? (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-500/25 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                              <span>👑 Hlavní administrátor</span>
                              <span className="text-[9px] px-1 py-0.2 bg-amber-950/80 text-amber-300 rounded font-semibold border border-amber-800/60">Vlastník</span>
                            </span>
                          ) : user.role === 'admin' ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-800 text-amber-400 border border-stone-700">
                              Administrátor
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700">
                              Obsluha / Personál
                            </span>
                          )}
                          {!user.isActive && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-950 text-red-400 border border-red-800">
                              Zablokován
                            </span>
                          )}
                          {isCurrent && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-stone-800 text-amber-400">
                              (Vy)
                            </span>
                          )}
                        </div>

                        {/* Login Details & Password */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400 font-mono">
                          <span>Login: <strong className="text-amber-300 font-bold">{user.username}</strong></span>
                          <span>•</span>
                          {canSeePassword ? (
                            <span>Heslo: <strong className="text-stone-200 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">{user.password}</strong></span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                              <Lock className="w-3 h-3 text-amber-400" />
                              <span className="tracking-widest font-mono text-stone-300">••••••••</span>
                              <span className="text-[10px] text-amber-400 font-sans font-semibold">(Chráněno)</span>
                            </span>
                          )}
                          {user.notes && (
                            <>
                              <span>•</span>
                              <span className="text-stone-500 font-sans italic">{user.notes}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {/* Details Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedDetailsUser(user)}
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black flex items-center gap-1.5 shadow-md shadow-amber-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          title={`Zobrazit detailní rozpis podsložek a otázek pro ${user.name}`}
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>Detaily</span>
                        </button>

                        {/* Copy credentials for WhatsApp/SMS - Hidden for super admin when viewed by others */}
                        {canSeePassword && (
                          <button
                            type="button"
                            onClick={() => copyCredentialsForStaff(user)}
                            title="Zkopírovat přístup pro zaslání obsluze"
                            className="px-2.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            {copiedId === user.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedId === user.id ? 'Zkopírováno' : 'Kopírovat přístup'}</span>
                          </button>
                        )}

                        {/* Change Password Button - Hidden for super admin when viewed by others */}
                        {canEditPassword && (
                          <button
                            type="button"
                            onClick={() => {
                              if (isEditingPassword) {
                                setEditingUserId(null);
                              } else {
                                setEditingUserId(user.id);
                                setEditPasswordValue(user.password);
                              }
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                            <span>Heslo</span>
                          </button>
                        )}

                        {/* Toggle active / suspend - Super admin cannot be suspended */}
                        {canToggleActive && (
                          <button
                            type="button"
                            onClick={() => handleToggleActive(user)}
                            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                              user.isActive
                                ? 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                                : 'bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800'
                            }`}
                          >
                            {user.isActive ? 'Pozastavit' : 'Aktivovat'}
                          </button>
                        )}

                        {/* Delete User - Super admin cannot be deleted */}
                        {canDelete && (
                          <button
                            type="button"
                            onClick={() => handleDeleteUser(user)}
                            title="Smazat uživatele"
                            className="p-1.5 rounded-xl bg-stone-800/80 hover:bg-red-950 text-stone-400 hover:text-red-400 border border-stone-800 hover:border-red-900 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Inline Password Edit Form */}
                    {isEditingPassword && (
                      <div className="mt-3 pt-3 border-t border-stone-800 flex items-center gap-2 animate-in fade-in duration-150">
                        <input
                          type="text"
                          value={editPasswordValue}
                          onChange={(e) => setEditPasswordValue(e.target.value)}
                          placeholder="Nové heslo"
                          className="px-3 py-1.5 bg-stone-900 border border-stone-700 rounded-xl text-xs text-stone-100 font-mono focus:outline-none focus:border-amber-500"
                        />
                        <button
                          type="button"
                          onClick={() => setEditPasswordValue(authService.generatePassword())}
                          className="px-2 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs rounded-xl flex items-center gap-1 cursor-pointer"
                          title="Vygenerovat náhodné heslo"
                        >
                          <RefreshCw className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSavePassword(user.id)}
                          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-xl cursor-pointer"
                        >
                          Uložit heslo
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingUserId(null)}
                          className="px-2 py-1.5 text-stone-400 hover:text-stone-200 text-xs cursor-pointer"
                        >
                          Zrušit
                        </button>
                      </div>
                    )}

                    {/* User Learning Progress & Stats Section */}
                    <div className="mt-3.5 pt-3 border-t border-stone-800/80 bg-stone-900/60 -mx-4 -mb-4 p-3.5 rounded-b-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-2">
                        <div className="flex items-center gap-1.5 font-bold text-stone-200">
                          <Trophy className="w-4 h-4 text-amber-400" />
                          <span>Postup ve výuce:</span>
                        </div>
                        <div className="font-mono text-xs text-stone-300">
                          <strong className="text-amber-400 font-bold">{masteredQuestions}</strong> z {totalQuestionsCount} otázek ({userStats.masteredItemIds?.length || 0} z {totalItemsCount} položek plně)
                          <span className="ml-1.5 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-sans font-bold text-[10px]">
                            {percentDone}%
                          </span>
                        </div>
                      </div>

                      {/* Visual progress bar */}
                      <div className="w-full bg-stone-950 rounded-full h-2 mb-2.5 overflow-hidden border border-stone-800">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentDone}%` }}
                        />
                      </div>

                      {/* Detailed statistics pills & Reset Waiter button */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-400">
                          <span className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800">
                            Úspěšnost: <strong className={userStats.totalAnswered > 0 ? (userAccuracy >= 80 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold') : 'text-stone-300'}>{userStats.totalAnswered > 0 ? `${userAccuracy}%` : '0%'}</strong>
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800">
                            Série: <strong className="text-amber-400 font-bold">🔥 {userStats.currentStreak}</strong> <span className="text-stone-500">(max {userStats.bestStreak})</span>
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800">
                            Zodpovězeno: <strong className="text-stone-200">{userStats.totalAnswered}</strong>
                          </span>
                        </div>

                        {/* Action buttons in progress bar: Details & Reset */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedDetailsUser(user)}
                            className="px-2.5 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                            title={`Zobrazit detailní rozpis podsložek pro ${user.name}`}
                          >
                            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                            <span>Zobrazit podsložky</span>
                          </button>

                          {/* Reset ONLY this user's stats */}
                          {canResetStats && (
                            <button
                              type="button"
                              onClick={() => handleResetUserStats(user)}
                              className="px-2.5 py-1 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 hover:text-white border border-rose-900/60 hover:border-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                              title={`Vynulovat výsledky testů pouze pro uživatele ${user.name}`}
                            >
                              <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                              <span>Reset</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Create User Form */
            <form onSubmit={handleCreateUser} className="max-w-lg mx-auto space-y-4">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Vytvořte přístup pro číšníka, barmana nebo dalšího manažera. Po vytvoření můžete údaje jednoduše zkopírovat a poslat jim je do zprávy.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Jméno a příjmení / Označení *
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="např. Tereza - Plac, nebo Petr Novák"
                  required
                  className="w-full px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Přihlašovací jméno (Login) *
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="např. tereza nebo petr1"
                  autoCapitalize="none"
                  autoCorrect="off"
                  required
                  className="w-full px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <p className="text-[11px] text-stone-500 mt-1">Jednoduché jméno bez mezer a diakritiky.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Heslo *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="flex-1 px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="button"
                    onClick={handleGeneratePassword}
                    className="px-3 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Vygenerovat nové heslo"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Náhodné</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Role v systému
                </label>
                <div className="p-3.5 rounded-xl border bg-amber-500/10 border-amber-500/40 text-amber-300">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-xs text-stone-100 flex items-center gap-1.5">
                      <span>👤 Personál / Obsluha</span>
                    </p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Standardní přístup
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Přístup do výuky, testů, zkoušek a interaktivního plánu stolů. V systému je vyhrazen pouze jeden administrátor: <strong>Jan Rzounek (Hlavní administrátor)</strong>.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Poznámka (volitelná)
                </label>
                <input
                  type="text"
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="např. Plac - nástup říjen 2026"
                  className="w-full px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-sm tracking-wide shadow-lg shadow-amber-950/40 cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Vytvořit uživatelský přístup</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between text-xs text-stone-500">
          <span>Celkem registrovaných účtů: {users.length}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            Zavřít administraci
          </button>
        </div>
      </div>

      {/* Waiter Detailed Breakdown Modal */}
      <WaiterDetailsModal
        isOpen={Boolean(selectedDetailsUser)}
        onClose={() => setSelectedDetailsUser(null)}
        user={selectedDetailsUser}
        onStatsReset={() => setStatsRevision(prev => prev + 1)}
      />
    </div>
  );
};
