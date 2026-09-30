// Convierte la web exportada (dist/) en UN SOLO archivo .html que se abre con doble clic:
// sin servidor, sin internet y sin carpetas al lado. Se genera en dist-html/AprendeIngles.html.
//
// Qué hace:
//  1. Mete el CSS y el JavaScript dentro del propio HTML.
//  2. Cambia las imágenes que usa el JavaScript (íconos de la barra superior) por datos incrustados.
//  3. Agrega un historial virtual (scripts/file-history-shim.js): al abrir un .html desde el disco
//     el navegador no deja que la app cambie la dirección, así que la navegación se lleva en memoria.
//  4. Quita lo que solo sirve con servidor: el manifest y el service worker.
//
// Uso: npm run web:html   (construye la web y luego corre este script)
const fs = require('node:fs');
const path = require('node:path');

const DIST = path.join(__dirname, '..', 'dist');
const SALIDA_DIR = path.join(__dirname, '..', 'dist-html');
const SALIDA = path.join(SALIDA_DIR, 'AprendeIngles.html');
const INDEX = path.join(DIST, 'index.html');

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function fallar(mensaje) {
  console.error(mensaje);
  process.exit(1);
}

if (!fs.existsSync(INDEX)) fallar('No existe dist/index.html. Primero corre: npm run web:build');

// rutaWeb es como aparece en el HTML: "/_expo/static/css/…"
const leer = (rutaWeb) => fs.readFileSync(path.join(DIST, rutaWeb), 'utf8');
const dataUri = (archivo) =>
  `data:${MIME[path.extname(archivo).toLowerCase()] ?? 'application/octet-stream'};base64,${fs
    .readFileSync(archivo)
    .toString('base64')}`;

function listar(carpeta) {
  return fs
    .readdirSync(carpeta, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? listar(path.join(carpeta, e.name)) : [path.join(carpeta, e.name)]));
}

let html = fs.readFileSync(INDEX, 'utf8');

// 1. El JavaScript de la app.
const etiquetaScript = html.match(/<script src="([^"]+\.js)" defer><\/script>/);
if (!etiquetaScript) fallar('No encontré el <script> de la app en dist/index.html: cambió el formato que genera Expo.');
let js = leer(etiquetaScript[1]);

// 2. Imágenes: el JS las nombra con rutas como "/assets/…png"; se cambian por datos incrustados.
// (split/join y no replace: el JS tiene muchos "$" que replace interpretaría como patrones.)
let incrustadas = 0;
const carpetaAssets = path.join(DIST, 'assets');
if (fs.existsSync(carpetaAssets)) {
  for (const archivo of listar(carpetaAssets)) {
    const url = '/' + path.relative(DIST, archivo).split(path.sep).join('/');
    const literal = `"${url}"`;
    if (js.includes(literal)) {
      js = js.split(literal).join(`"${dataUri(archivo)}"`);
      incrustadas++;
    }
  }
}
const sinIncrustar = js.match(/["'`]\/assets\/[^"'`]+["'`]/g);
if (sinIncrustar) fallar(`Quedaron imágenes sin incrustar: ${[...new Set(sinIncrustar)].join(', ')}`);

// Un "</script" dentro del JS cerraría la etiqueta antes de tiempo.
js = js.replace(/<\/script/gi, '<\\/script');

// 3. CSS dentro del HTML.
html = html
  .replace(/<link rel="preload" href="[^"]+\.css" as="style">\s*/g, '')
  .replace(/<link rel="stylesheet" href="([^"]+\.css)">/g, (_, href) => `<style>${leer(href)}</style>`);

// 4. Fuera lo que necesita servidor; el ícono de la pestaña va incrustado.
const favicon = path.join(DIST, 'favicon.ico');
html = html
  .replace(/\s*<link rel="manifest"[^>]*>/g, '')
  .replace(/\s*<link rel="apple-touch-icon"[^>]*>/g, '')
  .replace(/\s*<script>if \('serviceWorker' in navigator\)[\s\S]*?<\/script>/, '')
  .replace(/<link rel="icon" href="\/favicon\.ico"\s*\/?>/, () =>
    fs.existsSync(favicon) ? `<link rel="icon" href="${dataUri(favicon)}"/>` : ''
  );

// 5. El historial virtual va antes que la app; la app va al final del <body>, donde ya existe #root.
const historialVirtual = fs.readFileSync(path.join(__dirname, 'file-history-shim.js'), 'utf8');
html = html
  .replace('</head>', () => `  <script>\n${historialVirtual}\n</script>\n  </head>`)
  .replace(etiquetaScript[0], () => `<script>\n${js}\n</script>`);

// Comprobación final: no debe quedar nada que dependa de un servidor.
const sueltas = html.match(/(?:src|href)="\/[^"]*"/g);
if (sueltas) fallar(`Quedaron referencias a archivos externos: ${[...new Set(sueltas)].join(', ')}`);

fs.mkdirSync(SALIDA_DIR, { recursive: true });
fs.writeFileSync(SALIDA, html);

const mb = (Buffer.byteLength(html) / 1048576).toFixed(1);
console.log(`Listo: ${path.relative(process.cwd(), SALIDA)} (${mb} MB, ${incrustadas} imágenes incrustadas)`);
console.log('Se abre con doble clic en Chrome, Edge o Firefox; no necesita servidor ni internet.');
