// Sirve la carpeta dist/ (generada con `npm run web:build`) solo en esta PC.
//
// Puerto fijo a propósito: localStorage (progreso, ajustes, tema) queda atado al origen
// http://localhost:<puerto>. Si el puerto cambiara, la app "perdería" lo guardado antes.
// Mismo patrón que el servidor local de electron/main.js en tienda_acc.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const DIST = path.join(__dirname, '..', 'dist');
const HOST = '127.0.0.1'; // solo esta PC, no la red local
const PORT = Number(process.env.PORT) || 47821;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
};

const INDEX = path.join(DIST, 'index.html');

if (!fs.existsSync(INDEX)) {
  console.error('No existe dist/index.html. Primero corre: npm run web:build');
  process.exit(1);
}

const esArchivo = (ruta) => fs.existsSync(ruta) && fs.statSync(ruta).isFile();

// Devuelve el archivo a servir, o null si no existe (404).
// La app es de una sola página: cualquier ruta sin extensión (/unidad/5, /tarjetas…)
// recibe index.html y el router del cliente hace el resto.
function resolverArchivo(urlPath) {
  const limpio = decodeURIComponent(urlPath.split('?')[0]);
  const destino = path.normalize(path.join(DIST, limpio));
  if (destino !== DIST && !destino.startsWith(DIST + path.sep)) return null; // fuera de dist/

  if (esArchivo(destino)) return destino;
  if (path.extname(limpio)) return null;
  return INDEX;
}

// Los archivos con hash (/_expo/static, /assets) no cambian nunca; el resto se revalida siempre.
function cabeceraCache(urlPath) {
  return /^\/(_expo\/static|assets)\//.test(urlPath)
    ? 'public, max-age=31536000, immutable'
    : 'no-cache';
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.end();
    return;
  }

  const urlPath = req.url ?? '/';
  const archivo = resolverArchivo(urlPath);
  if (!archivo) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  res.setHeader('Content-Type', MIME_TYPES[path.extname(archivo)] ?? 'application/octet-stream');
  res.setHeader('Cache-Control', cabeceraCache(urlPath.split('?')[0]));

  // sw.js lleva un marcador que cambia con cada build: cada versión usa su propia caché.
  if (archivo === path.join(DIST, 'sw.js')) {
    const build = String(Math.round(fs.statSync(INDEX).mtimeMs));
    res.end(fs.readFileSync(archivo, 'utf8').replaceAll('__BUILD__', build));
    return;
  }

  fs.createReadStream(archivo)
    .on('error', () => {
      res.statusCode = 404;
      res.end('Not found');
    })
    .pipe(res);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} ya está en uso. ¿Ya hay otra ventana sirviendo la app?`);
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`Aprende Inglés (web) → http://localhost:${PORT}`);
  console.log('Ctrl + C para detener.');
});
