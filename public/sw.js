// Nombre de la caché
const CACHE_NAME = 'my-cache-v5';

// Archivos a cachear
const urlsToCache = [
  "/",
  '../index.html',
  './INDIRE_SCREEN_SHOT.png',
  './INDIRE_LOGO.png',
  './INDIRE_LOGO.ico',
  '/styles.css', // Agrega otros archivos estáticos que quieras cachear
  '/script.js', 
  './INDIRE_SCREEN_SHOT_screenshot.png',
  './favicon.png' // Asegúrate de que estos archivos existan en la carpeta pública
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Manejo de las solicitudes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si hay una coincidencia en el caché, retornarla
        if (response) {
          return response;
        }
        // Si no está en caché, realizar la solicitud de red
        return fetch(event.request);
      })
  );
});
