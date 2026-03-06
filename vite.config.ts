import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages production build, but '/' for local development
  const repo = process.env.VITE_BASE_REPO || 'fallacy_quizz';
  const base = mode === 'production' ? `/${repo}/` : '/';
  
  return {
    plugins: [react()],
    base,
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
