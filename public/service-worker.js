const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";

// These assets get pre-rendered
const assets = [
  "/",
  "/offline",
  "/css/index.css",
  "/css/first-fold.css",
  "/img/article-one.jpg",
  "/img/article-two.jpg",
  // "/img/homepage-header.jpg",
];

// installed event
self.addEventListener("install", (event) => {

  // pre-cache offline page and update cache automaticly
  event.waitUntil(
    caches
      .open(staticCacheName)
      .then((cache) => cache.addAll(assets))
      .then(self.skipWaiting())
  );
});

// https://www.youtube.com/watch?v=g9LfyCZjeKI&ab_channel=TheNetNinja
// activate event
// checks for new cache, if there is new version it will remove old version
// keys == names of the caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// creates fetch and checks if request == cached assets
// If not, it continues the regular fetch
// when browsing a page thats not pre-cached it will store the page in the dynamic cache
// when offline and page is not cached show the offline(cached) page
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      return (
        cacheResponse ||
        fetch(event.request)
          .then((fetchResponse) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(event.request.url, fetchResponse.clone());
              return fetchResponse;
            });
          })
          .catch((error) => {
            return caches
              .open(staticCacheName)
              .then((cache) => cache.match("/offline"));
          })
      );
    })
  );
});
