/* =====================================================================
   Le Rendez-vous — service worker
   ---------------------------------------------------------------------
   Rend l'application utilisable sans connexion.

   IMPORTANT : à chaque fois que tu modifies index.html ou versets.js,
   change le numéro de VERSION ci-dessous (v3, v4, …).
   C'est ce numéro qui déclenche le renouvellement du cache.
   ===================================================================== */

const VERSION = "rdv-v2";

const FICHIERS = [
  "./",
  "./index.html",
  "./versets.js",
  "./manifest.json",
  "./icone-180.png",
  "./icone-192.png",
  "./icone-512.png"
];

/* ---------- installation : on met tout en cache ---------- */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (cache) {
      /* addAll échoue en bloc si un seul fichier manque : on ajoute
         donc un par un pour rester tolérant */
      return Promise.all(
        FICHIERS.map(function (f) {
          return cache.add(new Request(f, { cache: "reload" })).catch(function () {});
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

/* ---------- activation : on efface les anciennes versions ---------- */
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (cles) {
      return Promise.all(
        cles.filter(function (c) { return c !== VERSION; })
            .map(function (c) { return caches.delete(c); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

/* ---------- interception des requêtes ---------- */
self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const interne = url.origin === self.location.origin;
  const police = /fonts\.(googleapis|gstatic)\.com/.test(url.hostname);
  if (!interne && !police) return;

  /* Contenu de l'application : on sert le cache immédiatement (démarrage
     instantané, y compris hors connexion) et on rafraîchit en arrière-plan. */
  if (interne) {
    e.respondWith(
      caches.open(VERSION).then(function (cache) {
        return cache.match(req).then(function (enCache) {
          const reseau = fetch(req).then(function (rep) {
            if (rep && rep.status === 200) cache.put(req, rep.clone());
            return rep;
          }).catch(function () { return enCache; });
          return enCache || reseau;
        });
      })
    );
    return;
  }

  /* Polices : une fois en cache, elles ne changent plus. */
  e.respondWith(
    caches.open(VERSION).then(function (cache) {
      return cache.match(req).then(function (enCache) {
        return enCache || fetch(req).then(function (rep) {
          if (rep && (rep.status === 200 || rep.type === "opaque")) {
            cache.put(req, rep.clone());
          }
          return rep;
        }).catch(function () { return enCache; });
      });
    })
  );
});

/* ---------- message envoyé par la page pour forcer la bascule ---------- */
self.addEventListener("message", function (e) {
  if (e.data === "activer") self.skipWaiting();
});
