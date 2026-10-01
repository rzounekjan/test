import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function accountsApiPlugin(): Plugin {
  const dataDir = path.resolve(__dirname, 'data');
  const accountsFile = path.resolve(dataDir, 'accounts.json');

  const defaultUsers = [
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
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      if (fs.existsSync(accountsFile)) {
        const raw = fs.readFileSync(accountsFile, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    try {
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(accountsFile, JSON.stringify(defaultUsers, null, 2), 'utf-8');
    } catch {}
    return defaultUsers;
  }

  function saveAccounts(users: any[]) {
    try {
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(accountsFile, JSON.stringify(users, null, 2), 'utf-8');
    } catch {}
  }

  return {
    name: 'accounts-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/accounts' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, users: getAccounts() }));
          return;
        }

        if (req.url === '/api/accounts/sync' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const { users } = JSON.parse(body);
              if (Array.isArray(users)) {
                saveAccounts(users);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, count: users.length }));
                return;
              }
            } catch {}
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: 'Invalid data' }));
          });
          return;
        }

        if (req.url === '/api/login' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const { username, password } = JSON.parse(body);
              const cleanUsername = String(username || '').trim().toLowerCase();
              const cleanPassword = String(password || '').trim();
              const users = getAccounts();

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

              res.setHeader('Content-Type', 'application/json');
              if (!found) {
                res.statusCode = 401;
                res.end(JSON.stringify({ success: false, error: `Uživatelský účet "${cleanUsername}" neexistuje.` }));
                return;
              }

              if (!found.isActive) {
                res.statusCode = 403;
                res.end(JSON.stringify({ success: false, error: 'Tento účet byl zablokován administrátorem.' }));
                return;
              }

              const storedPassword = String(found.password || '');
              const isMatch = storedPassword === cleanPassword ||
                storedPassword.toLowerCase() === cleanPassword.toLowerCase();

              if (!isMatch) {
                res.statusCode = 401;
                res.end(JSON.stringify({ success: false, error: 'Nesprávné heslo. Zkontrolujte velká a malá písmena.' }));
                return;
              }

              found.lastLoginAt = new Date().toISOString();
              saveAccounts(users);
              res.end(JSON.stringify({ success: true, user: found }));
              return;
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Invalid request' }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      accountsApiPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'favicon.png',
          'favicon.svg',
          'apple-touch-icon.png',
          'icon.svg',
        ],
        manifest: {
          id: './',
          name: 'FUZE',
          short_name: 'FUZE',
          description: 'Interaktivní výukový program pro zvládnutí položek menu a ingrediencí formou testů A, B, C.',
          theme_color: '#0c0a09',
          background_color: '#0c0a09',
          display: 'standalone',
          orientation: 'portrait',
          start_url: './',
          scope: './',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
