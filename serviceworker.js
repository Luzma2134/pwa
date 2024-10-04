console.log("hola mundo");

// if ('serviceworker' in navigator) {
//     console.log("función disponible");

// }
// if (navigator.serviceWorker) {
//     console.log("Service Worker funcionando");

// }

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
}

// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

caches.open('pwa-assets')
.then(cache => {
    cache.addAll(["image.png", "index.html", "styles.css", "favicon.jpeg"]);
});