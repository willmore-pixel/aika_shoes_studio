// Lets phones install AIKA PLAY as an app (Chrome asks for a service worker that answers page loads).
// Always fetches the newest page; the last copy is kept only for when the phone is offline.
const CACHE = "aika-play-1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy));
    return r;
  }).catch(() => caches.match(e.request).then(r => r || Response.error())));
});
