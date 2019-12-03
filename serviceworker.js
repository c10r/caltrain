const CACHE_NAME = 'caltrain-cache'
const filesToCache = [
  '/',
  '/index.html',
  '/northweekend.html',
  '/offline.html',
  '/south.html',
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
        // First fetch via network request
        return fetch(e.request)
          .then(response => {
            // Update cache accordingly
            cache.put(e.request, response.clone())
            // Return the fetched response
            return response
          })
          .catch(() => {
            // Means we could not fetch network request
            // So let's get it from the cache first
            return caches.match(e.request)
              .then(res => {
                // If res is undefined, we couldn't find anything in the cache
                // Likely because the cache was not first populated with something
                // Let's tell the user to first launch the app w/ a network connection
                if (res === undefined) {
                  return caches.match('offline.html')
                }
                // Return cached response
                return res
              })
          })
      })
  )
})
