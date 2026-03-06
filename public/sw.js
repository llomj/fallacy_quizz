const CACHE_NAME = 'fallacy-quiz-offline-v15';
// Don't pre-cache index.html — install-time fetch can get stale HTML; we cache it only after network-first fetch
const STATIC_ASSETS = ['./manifest.json'];

// Install: Cache manifest only (index.html cached on first network fetch)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.log('Cache install error (some assets may be missing):', err);
      });
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control of all pages
});

// Fetch: network-first for HTML (ensures updates reach users), cache-first for assets
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('clear-sw.html')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  const isDoc = event.request.mode === 'navigate' || event.request.destination === 'document';
  if (isDoc) {
    // Dynamic cache-bust: every load gets fresh HTML (browser + PWA, no manual URL changes)
    const url = new URL(event.request.url);
    url.searchParams.set('_v', String(Date.now()));
    const bustedRequest = new Request(url, { cache: 'no-store' });
    event.respondWith(
      fetch(bustedRequest)
        .then((response) => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            return response;
          }
          return response;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
