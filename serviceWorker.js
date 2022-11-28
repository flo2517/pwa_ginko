var cacheName = 'pwa-task-manager';
var filesToCache = [
    '/index.html',
    '/style.css',
    '/index.js',
    '/app.js',
    '/ginkobus.webmanifest',
    'icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
    '/icons/maskable_icon.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetch', e.request.url);
});