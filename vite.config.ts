import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import packageJson from './package.json';

export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages production build, but '/' for local development
  const repo = process.env.VITE_BASE_REPO || 'fallacy_quizz';
  const base = mode === 'production' ? `/${repo}/` : '/';
  const startUrl = `${base}index.html`;
  
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
          id: base + 'v2',
          scope: base,
          start_url: startUrl,
          icons: [
            {
              src: 'icons/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-192-maskable.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: 'icons/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: 'icons/icon-180.png',
              sizes: '180x180',
              type: 'image/png'
            }
          ]
        },
        includeAssets: ['icons/*'],
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff2,woff}'],
          maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          sourcemap: true,
          navigateFallback: startUrl,
          navigateFallbackAllowlist: [/^(?!\/__).*/],
          runtimeCaching: [],
          skipWaiting: true,
          clientsClaim: true,
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
