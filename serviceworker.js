const CACHE_NAME = 'caltrain-cache'
const filesToCache = [
  '/',
  '/index.html',
  '/south.html',
  '/northweekend.html',
  '/southweekend.html',
  '/css/navbar.css',
  '/js/main.js'
]

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(filesToCache)
    })
  )
})

/* Serve cached content when offline */
self.addEventListener('fetch', e => {
  e.respondWith(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return fetch(e.request)
          .then(response => {
            cache.put(e.request, response.clone())
            return response
          })
      })
  )
})
