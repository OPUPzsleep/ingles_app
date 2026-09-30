// Service worker mínimo para que la web abra sin conexión (y sin el servidor local encendido).
// scripts/serve-web.js cambia el marcador de la línea de abajo por un valor distinto en cada build:
// cada versión usa su propia caché y las anteriores se borran al activarse.
const CACHE = 'aprende-ingles-__BUILD__';

// Guarda el index y todo lo que pide (JS, CSS, íconos) para que la app abra sin conexión
// desde la primera visita, sin esperar a una segunda carga.
async function precargar() {
  const cache = await caches.open(CACHE);
  const respuesta = await fetch('/index.html', { cache: 'no-store' });
  if (!respuesta.ok) return;

  const html = await respuesta.clone().text();
  await cache.put('/index.html', respuesta);

  const rutas = new Set(['/manifest.json', '/icon-192.png', '/favicon.ico']);
  for (const coincidencia of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) rutas.add(coincidencia[1]);
  await Promise.all([...rutas].map((ruta) => cache.add(ruta).catch(() => {})));
}

self.addEventListener('install', (event) => {
  event.waitUntil(precargar().catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function guardar(request, response) {
  if (response && response.ok) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname === '/sw.js') return;

  // Páginas (la app es de una sola página): red primero para recibir versiones nuevas;
  // sin red, se abre el index guardado.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => guardar('/index.html', response))
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Archivos con hash en el nombre (JS, fuentes, imágenes): caché primero.
  if (url.pathname.startsWith('/_expo/static/') || url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((hit) => hit || fetch(request).then((response) => guardar(request, response)))
    );
    return;
  }

  // Lo demás (manifest, íconos): red primero, con la copia guardada como respaldo.
  event.respondWith(
    fetch(request)
      .then((response) => guardar(request, response))
      .catch(() => caches.match(request))
  );
});
