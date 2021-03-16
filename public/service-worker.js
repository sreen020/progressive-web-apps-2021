const assets = [
  "/",
  "/offline",
  "/css/game.css",
  "/css/home.css",
  "/css/loader.css",
  "/css/nav.css",
  "/css/players.css",
  "/css/style.css",
  "/img/article-one.jpg",
  "/img/article-two.jpg",
  "/img/header-img.jpg",
  "/img/homepage-header.jpg",
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
];

// installed event
self.addEventListener("install", (event) => {
  console.log("install");

  // pre-cache offline page and update cache automaticly
  event.waitUntil(
    caches
      .open("my-cache")
      .then((cache) => cache.addAll(assets))
      .then(self.skipWaiting())
  );
});

// activate event
self.addEventListener("activate", () => {
  console.log("active");
});

// creates fetch and checks if request == cached assets
// If not it continues the regular fetch
// when offline and page is not cached show the offline(cached) page
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      return (
        cacheResponse ||
        fetch(event.request).catch((error) => {
          return caches
            .open("my-cache")
            .then((cache) => cache.match("/offline"));
        })
      );
    })
  );
});
