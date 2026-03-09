import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages production build, but '/' for local development
  const repo = process.env.VITE_BASE_REPO || 'fallacy_quizz';
  const base = mode === 'production' ? `/${repo}/` : '/';
  
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: false, // We already have a manifest.json in public folder, but PWA plugin can inject it if needed. Actually it's better to let VitePWA handle it, but for now we can just let it cache everything. Let's configure it properly.
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB to cover potentially large chunk files
          cleanupOutdatedCaches: true,
          sourcemap: true
        }
      })
    ],
    base,
    define: {
      __BUILD_TIME__: JSON.stringify(new Date().toISOString().slice(0, 19).replace('T', ' ')),
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
