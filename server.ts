import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const ACCOUNTS_FILE = path.join(DATA_DIR, 'accounts.json');

const DEFAULT_USERS = [
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

function getAccounts() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(ACCOUNTS_FILE)) {
      const data = fs.readFileSync(ACCOUNTS_FILE, 'utf-8');
      const users = JSON.parse(data);
      if (Array.isArray(users) && users.length > 0) {
        return users;
      }
    }
  } catch (err) {
    console.error('Error reading accounts file:', err);
  }
  // Fallback to default
  saveAccounts(DEFAULT_USERS);
  return DEFAULT_USERS;
}

function saveAccounts(users: any[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(ACCOUNTS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving accounts file:', err);
  }
}

// API: Get all accounts (for authenticated admin view or initial client sync)
app.get('/api/accounts', (_req, res) => {
  const users = getAccounts();
  res.json({ success: true, users });
});

// API: Sync/Update all accounts
app.post('/api/accounts/sync', (req, res) => {
  const { users } = req.body;
  if (!Array.isArray(users)) {
    return res.status(400).json({ success: false, error: 'Neplatný formát dat.' });
  }
  saveAccounts(users);
  res.json({ success: true, count: users.length });
});

// API: Server-side Login (Works consistently across all devices)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const cleanUsername = String(username || '').trim().toLowerCase();
  const cleanPassword = String(password || '').trim();

  if (!cleanUsername || !cleanPassword) {
    return res.status(400).json({ success: false, error: 'Zadejte přihlašovací jméno i heslo.' });
  }

  const users = getAccounts();

  // Smart matching: username, email (rzounekjan@gmail.com), or full name (Jan Rzounek)
  const found = users.find((u: any) => {
    const uName = String(u.username || '').toLowerCase();
    const dName = String(u.name || '').toLowerCase();

    if (uName === cleanUsername) return true;
    if (cleanUsername === 'rzounekjan@gmail.com' && (uName === 'admin' || uName === 'rzounekjan')) return true;
    if (cleanUsername.includes('@') && cleanUsername.split('@')[0] === uName) return true;
    if (dName === cleanUsername || dName.replace(/\s+/g, '') === cleanUsername.replace(/\s+/g, '')) return true;
    if (cleanUsername === 'jan' && (uName === 'admin' || uName === 'rzounekjan')) return true;
    return false;
  });

  if (!found) {
    return res.status(401).json({
      success: false,
      error: `Uživatelský účet "${cleanUsername}" neexistuje. Zkontrolujte prosím přihlašovací jméno.`
    });
  }

  if (!found.isActive) {
    return res.status(403).json({
      success: false,
      error: 'Tento účet byl zablokován administrátorem.'
    });
  }

  // Exact password or case-insensitive match (for mobile auto-shift)
  const storedPassword = String(found.password || '');
  const isMatch = storedPassword === cleanPassword ||
    storedPassword.toLowerCase() === cleanPassword.toLowerCase();

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      error: 'Nesprávné heslo. Zkontrolujte velká a malá písmena.'
    });
  }

  // Update last login
  found.lastLoginAt = new Date().toISOString();
  saveAccounts(users);

  res.json({
    success: true,
    user: found
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
