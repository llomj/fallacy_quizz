import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

// Service Worker: register only in production; in dev, unregister so preview always gets latest (stars, etc.)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (import.meta.env.PROD) {
      const basePath = import.meta.env.BASE_URL || '/';
      navigator.serviceWorker.register(`${basePath}sw.js?v=12`)
        .then(registration => {
          console.log('Python Exercises Learn SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('Python Exercises Learn SW registration failed: ', registrationError);
        });
    } else {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.unregister());
      });
    }
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);