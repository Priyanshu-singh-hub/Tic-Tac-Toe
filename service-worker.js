const cacheName = "tic-tac-toe-cache-v1";

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                "./",
                "index.html",
                "style.css",
                "script.js",
                "manifest.json",
                "icon.png"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});