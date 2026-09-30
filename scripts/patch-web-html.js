// Se ejecuta después de `expo export -p web`.
//
// En modo "single" Expo no usa src/app/+html.tsx, así que el index.html exportado sale sin
// idioma español, sin manifest de la PWA y sin service worker. Aquí se los agregamos.
const fs = require('node:fs');
const path = require('node:path');

const INDEX = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(INDEX)) {
  console.error('No existe dist/index.html. Primero corre: expo export -p web');
  process.exit(1);
}

const REGISTRO_SW =
  "if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js'); }); }";

const etiquetas = [
  '<meta name="theme-color" content="#2B2B2B" />',
  '<link rel="manifest" href="/manifest.json" />',
  '<link rel="apple-touch-icon" href="/icon-192.png" />',
  `<script>${REGISTRO_SW}</script>`,
]
  .map((linea) => `    ${linea}`)
  .join('\n');

let html = fs.readFileSync(INDEX, 'utf8');

if (html.includes('rel="manifest"')) {
  console.log('dist/index.html ya tiene el manifest; no hay nada que hacer.');
  process.exit(0);
}

html = html.replace('<html lang="en">', '<html lang="es">').replace('</head>', `${etiquetas}\n  </head>`);

if (!html.includes('rel="manifest"') || !html.includes('<html lang="es">')) {
  console.error('No se pudo modificar dist/index.html: cambió el formato que genera Expo.');
  process.exit(1);
}

fs.writeFileSync(INDEX, html);
console.log('dist/index.html: idioma, manifest y service worker agregados.');
