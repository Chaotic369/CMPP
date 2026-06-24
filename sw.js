 // A minimal Service Worker to satisfy the PWA install requirement
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // We don't need to intercept any network requests right now.
  // Just having this fetch listener present unlocks the PWA install button!
  return;
});
