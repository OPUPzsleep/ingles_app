# Aprende Inglés 🇺🇸

[Español](#español) · [English](#english)

---

## Español

App para aprender inglés desde el español, basada en *English Grammar in Use* (Raymond Murphy). Hecha con [Expo](https://expo.dev) y React Native, pensada para Android.

### Qué incluye

- **Aprender:** 145 unidades de gramática con teoría, lectura, diálogos, consejos y un quiz por unidad. Van ordenadas en un **recorrido por niveles** y numeradas en ese orden: A1 (unidades 1–12), A2 (13–45), B1 (46–112) y B2 (113–145). Dentro de cada nivel las unidades se agrupan por **tema** (Present & Past, Future, Modal Verbs…), y cada tema termina con su propio **quiz de 12 preguntas** (las de sus unidades más preguntas de repaso del tema; siempre hay al menos 10 distintas para armarlo), y cada nivel con un quiz de 20 preguntas de todos sus temas. La app guarda tu mejor resultado de cada quiz. Cada unidad tiene un botón **🏠** en el encabezado (siempre a la vista) y otro **Volver al inicio** al final para regresar directo al Inicio. En la pestaña Consejos cada unidad tiene un **Repaso rápido**: preguntas que muestran la respuesta al tocarlas. Las 23 unidades de verbos (presente, pasado, perfectos, futuro, modales, pasiva…) muestran arriba de la teoría su forma **afirmativa, negativa y de pregunta**, cada una con fórmula de colores, ejemplos con traducción y audio, y debajo las contracciones, las respuestas cortas y el error típico de quien habla español.
- **Practicar:** sesiones de 10 ejercicios. *Práctica del día* (mezcla de todo), *verbos* (escribe el pasado, el participio o el -ing), *dictado* (escuchas y escribes), *ordena la frase* y *repaso de lo difícil*. Lo que fallas queda marcado como difícil y vuelve antes.
- **Mapa de tiempos verbales:** los 13 tiempos en un cuadro (presente, pasado y futuro por simple, continuo, perfecto y perfecto continuo) con su forma afirmativa, negativa y de pregunta (fórmula y ejemplo), cuándo se usa, palabras clave y el error típico de quien habla español.
- **Tarjetas:** 300 frases del día a día (100 en presente, 100 en pasado y 100 en futuro), con traducción y el tipo de oración (simple, continuo, perfecto…). Usan repaso espaciado y se pueden filtrar por tiempo o por las difíciles.
- **Vocabulario:** 280 verbos (157 irregulares) con presente, pasado, participio y la forma -ing, pronunciación aproximada al español y ejemplos en cada tiempo.
- **Gramática para hispanohablantes:** conceptos explicados comparando el español con el inglés.
- **Modo TDAH:** menos opciones en pantalla, lectura "biónica" y un temporizador de sesión enfocada en Inicio.
- **Accesibilidad:** tamaño de letra ajustable (A− / A+) y temas de color: Automático, Claro, Crema, Noche y Oscuro.
- **Pantalla grande:** en la web o en una tablet horizontal, el diseño se adapta al ancho sin estirarse: Aprender, el mapa de tiempos y la Gramática van en dos paneles que ocupan toda la pantalla (lista a la izquierda, contenido a la derecha); cada unidad y cada concepto de gramática reparten su contenido en dos columnas de ancho cómodo; Inicio se ordena en dos columnas; y Practicar y Vocabulario usan cuadrícula. La lista se puede ocultar con **◀ Ocultar** y volver a mostrar con **▶**; la app recuerda cómo la dejaste.
- Recordatorio diario opcional.

### Cómo correrla

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Compila e instala la app en el emulador o el teléfono (la primera vez, o cuando cambies código nativo o `app.json`):

   ```bash
   npx expo run:android
   ```

3. Para el día a día, con la app ya instalada, basta con:

   ```bash
   npx expo start
   ```

   Presiona `a` para abrirla en Android. Los cambios en `src/` se ven al guardar (Fast Refresh); si no, presiona `r` para recargar.

### Versión web (en tu PC)

La misma app corre en el navegador y se puede instalar como app de escritorio (Chrome o Edge), sin publicar nada:

```bash
npm run web:start
```

Construye la web (`dist/`) y la sirve en `http://localhost:47821`. Ábrela en Chrome o Edge y usa "Instalar app" en la barra de direcciones: se abre en su propia ventana y, gracias al service worker, también sin el servidor encendido.

- `npm run web:build` solo construye; `npm run web:serve` solo sirve lo ya construido.
- El puerto es fijo a propósito: el progreso y los ajustes se guardan en el navegador por origen (`localhost:47821`). Si cambia el puerto, la app "pierde" lo guardado.
- El progreso de la web **no** se comparte con el celular.
- El recordatorio diario solo existe en Android.
- Para desarrollar con recarga en vivo: `npm run web` (no registra el service worker).

#### Un solo archivo HTML

```bash
npm run web:html
```

Genera `dist-html/AprendeIngles.html` (unos 2 MB): la app completa en **un único archivo** que se abre con doble clic en Chrome, Edge o Firefox, sin servidor, sin internet y sin carpetas al lado. Sirve para pasársela a alguien o guardarla como copia.

- El progreso y los ajustes se guardan en el navegador (`localStorage`), igual que en la versión con servidor pero por separado: no se comparten entre las dos.
- La barra de direcciones no cambia al moverte por la app (la navegación se lleva en memoria; ver `scripts/file-history-shim.js`).
- No se puede "instalar" como app; para eso usa la versión con servidor.
- Probado en Edge; en Chrome debería ser igual. Firefox y Safari sin probar.

### Estructura

| Carpeta | Contenido |
|---|---|
| `public/` | Manifest, íconos y service worker de la versión web |
| `scripts/` | Servidor local y ajuste del HTML de la versión web |
| `src/app/` | Pantallas (rutas de expo-router) |
| `src/components/` | Componentes de interfaz |
| `src/data/` | Contenido: unidades, frases, verbos, conceptos |
| `src/context/` | Progreso y ajustes (tema, letra, Modo TDAH) |
| `src/constants/theme.ts` | Colores, temas y espaciados |

Para revisar el código: `npx tsc --noEmit` y `npx expo lint`.

---

## English

An app for Spanish speakers learning English, based on *English Grammar in Use* (Raymond Murphy). Built with [Expo](https://expo.dev) and React Native, targeting Android. The interface is in Spanish.

### Features

- **Learn:** 145 grammar units with theory, reading, dialogues, tips and a quiz per unit. They follow a **level path** and are numbered in that order: A1 (units 1–12), A2 (13–45), B1 (46–112) and B2 (113–145). Inside each level the units are grouped by **topic** (Present & Past, Future, Modal Verbs…), every topic ends with its own **12-question quiz** (questions from its units plus review questions for the topic; there are always at least 10 different ones to build it), and every level ends with a 20-question quiz covering all its topics. Your best score on each quiz is kept. Every unit has a **🏠** button in its header (always in view) and a **Volver al inicio** button at the end to go straight back to Home. Each unit's Tips tab has a **Quick review**: questions that reveal their answer when tapped. The 23 verb units (present, past, perfects, future, modals, passive…) show their **affirmative, negative and question** forms above the theory, each with a color-coded formula, examples with translation and audio, and below them the contractions, short answers and the typical mistake of Spanish speakers.
- **Practice:** sessions of 10 exercises. *Daily practice* (a mix of everything), *verbs* (type the past, participle or -ing), *dictation* (listen and type), *sentence order* and *review the hard ones*. What you get wrong is marked as hard and comes back sooner.
- **Tense map:** all 13 tenses in one grid (present, past and future by simple, continuous, perfect and perfect continuous) with its affirmative, negative and question forms (formula and example), when to use it, keywords and the typical mistake of Spanish speakers.
- **Flashcards:** 300 everyday sentences (100 present, 100 past, 100 future), each with its translation and tense (simple, continuous, perfect…). They use spaced repetition and can be filtered by tense or by the hard ones.
- **Vocabulary:** 280 verbs (157 irregular) with base form, past, past participle and -ing form, a Spanish-style pronunciation guide and examples in every tense.
- **Grammar for Spanish speakers:** concepts explained by contrasting Spanish and English.
- **ADHD mode:** fewer options on screen, "bionic" reading and a focus-session timer on the Home screen.
- **Accessibility:** adjustable text size (A− / A+) and color themes: Automatic, Light, Cream, Night and Dark.
- **Large screens:** on the web or a landscape tablet, the layout adapts to the width without stretching: Learn, the tense map and Grammar use two panels that fill the whole screen (list on the left, content on the right); each unit and each grammar concept splits its content into two comfortable columns; Home is laid out in two columns; and Practice and Vocabulary use a grid. The list can be hidden with **◀ Ocultar** and shown again with **▶**; the app remembers how you left it.
- Optional daily reminder.

### Running it

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build and install the app on an emulator or device (first time, or after changing native code or `app.json`):

   ```bash
   npx expo run:android
   ```

3. Day to day, once the app is installed:

   ```bash
   npx expo start
   ```

   Press `a` to open it on Android. Changes in `src/` show up on save (Fast Refresh); if not, press `r` to reload.

### Web version (on your PC)

The same app runs in the browser and can be installed as a desktop app (Chrome or Edge), with nothing published:

```bash
npm run web:start
```

It builds the web app (`dist/`) and serves it at `http://localhost:47821`. Open it in Chrome or Edge and use "Install app" in the address bar: it opens in its own window and, thanks to the service worker, also works with the server off.

- `npm run web:build` only builds; `npm run web:serve` only serves what is already built.
- The port is fixed on purpose: progress and settings are stored in the browser per origin (`localhost:47821`). If the port changes, the app "loses" what was saved.
- Web progress is **not** shared with the phone.
- The daily reminder only exists on Android.
- To develop with live reload: `npm run web` (it does not register the service worker).

#### Single HTML file

```bash
npm run web:html
```

Generates `dist-html/AprendeIngles.html` (about 2 MB): the whole app in **one file** that opens with a double click in Chrome, Edge or Firefox, with no server, no internet and no folders next to it. Handy to hand to someone or keep as a copy.

- Progress and settings are stored in the browser (`localStorage`), like the server version but kept separately: the two do not share data.
- The address bar does not change as you move around the app (navigation is kept in memory; see `scripts/file-history-shim.js`).
- It cannot be "installed" as an app; use the server version for that.
- Tested in Edge; Chrome should behave the same. Firefox and Safari are untested.

### Project layout

| Folder | Contents |
|---|---|
| `public/` | Manifest, icons and service worker for the web version |
| `scripts/` | Local server and HTML patch for the web version |
| `src/app/` | Screens (expo-router routes) |
| `src/components/` | UI components |
| `src/data/` | Content: units, sentences, verbs, concepts |
| `src/context/` | Progress and settings (theme, text size, ADHD mode) |
| `src/constants/theme.ts` | Colors, themes and spacing |

To check the code: `npx tsc --noEmit` and `npx expo lint`.
