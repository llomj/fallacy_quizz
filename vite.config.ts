import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import packageJson from './package.json';

export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages production build, but '/' for local development
  const repo = process.env.VITE_BASE_REPO || 'fallacy_quizz';
  const base = mode === 'production' ? `/${repo}/` : '/';
  
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        manifest: {
          name: 'Fallacy Quiz',
          short_name: 'Fallacy Quiz',
          description: 'Logical fallacies and argument analysis quiz — learn and practice',
          theme_color: '#0f172a',
          background_color: '#0f172a',
          display: 'standalone',
          start_url: base,
          icons: [
            {
              src: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB to cover potentially large chunk files
          cleanupOutdatedCaches: true,
          sourcemap: true,
          navigateFallback: `${base}index.html`,
          navigateFallbackAllowlist: [/^(?!\/__).*/],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/cdn\.tailwindcss\.com/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'tailwindcss-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/cdnjs\.cloudflare\.com/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'cdnjs-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'google-fonts-stylesheets',
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/cdn-icons-png\.flaticon\.com/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'flaticon-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      })
    ],
    base,
    define: {
      __BUILD_TIME__: JSON.stringify(new Date().toISOString().slice(0, 19).replace('T', ' ')),
      __APP_VERSION__: JSON.stringify(packageJson.version),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-syntax-highlighter')) return 'syntax-highlighter';
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react-vendor';
            if (id.includes('/src/data/questions/')) return 'questions-data';
            if (id.includes('/src/data/detailedExplanationsTranslations.ts')) return 'detailed-explanations';
            if (id.includes('/src/data/shortExplanationsTranslations.ts')) return 'short-explanations';
          }
        }
      }
    },
    server: {
      port: 5174,
      strictPort: false, // try next port if 5174 is in use
      open: false,
      host: true,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    }
  };
});
