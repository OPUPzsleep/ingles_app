# Aprende Inglés 🇺🇸

[Español](#español) · [English](#english)

---

## Español

App para aprender inglés desde el español, basada en *English Grammar in Use* (Raymond Murphy). Hecha con [Expo](https://expo.dev) y React Native, pensada para Android.

### Qué incluye

- **Aprender:** 145 unidades de gramática con teoría, lectura, diálogos, consejos y un quiz por unidad. Van ordenadas en un **recorrido por niveles** y numeradas en ese orden: A1 (unidades 1–12), A2 (13–45), B1 (46–112) y B2 (113–145). Dentro de cada nivel las unidades se agrupan por **tema** (Present & Past, Future, Modal Verbs…), y cada tema termina con su propio **quiz de 12 preguntas** (las de sus unidades más preguntas de repaso del tema; siempre hay al menos 10 distintas para armarlo), y cada nivel con un quiz de 20 preguntas de todos sus temas. **El nivel A1 es un curso de 12 unidades en 4 bloques** (verbo to be y sustantivos; presente simple y cuantificadores; presente continuo, modales y necesidades; pasado simple, contables e incontables): cada tema trae la regla en español, su estructura (afirmativa, negativa y pregunta), al menos 3 ejemplos con traducción y audio, y cada unidad termina con **5 ejercicios** de opción múltiple con explicación; cada bloque cierra con un **examen de 20 ejercicios** distintos a los de sus unidades. La app guarda tu mejor resultado de cada quiz. Cada unidad tiene un botón **🏠** en el encabezado (siempre a la vista) y otro **Volver al inicio** al final para regresar directo al Inicio. En la pestaña Consejos cada unidad tiene un **Repaso rápido**: preguntas que muestran la respuesta al tocarlas. Las 26 unidades de verbos (presente, pasado, perfectos, futuro, modales, pasiva…) muestran arriba de la teoría su forma **afirmativa, negativa y de pregunta**, cada una con fórmula de colores, ejemplos con traducción y audio, y debajo las contracciones, las respuestas cortas y el error típico de quien habla español.
- **Practicar:** sesiones de 10 ejercicios. *Práctica del día* (mezcla de todo), *verbos* (escribe el pasado, el participio o el -ing), *dictado* (escuchas y escribes), *ordena la frase* y *repaso de lo difícil*. Lo que fallas queda marcado como difícil y vuelve antes.
- **Mapa de tiempos verbales:** los 13 tiempos en un cuadro (presente, pasado y futuro por simple, continuo, perfecto y perfecto continuo) con su forma afirmativa, negativa y de pregunta (fórmula y ejemplo), cuándo se usa, palabras clave y el error típico de quien habla español.
- **Tarjetas:** 300 frases del día a día (100 en presente, 100 en pasado y 100 en futuro), con traducción y el tipo de oración (simple, continuo, perfecto…). Usan repaso espaciado y se pueden filtrar por tiempo o por las difíciles.
- **Vocabulario:** tres apartados con buscador (se busca en inglés o en español, sin importar las tildes). **Verbos:** 280 verbos (157 irregulares) con presente, pasado, participio y la forma -ing, pronunciación aproximada al español y ejemplos en cada tiempo. **Palabras:** 1.328 palabras en 34 temas (cuerpo, casa, ciudad, trabajo, comida, emociones, expresiones básicas…), cada una con pronunciación, significado, ejemplo y audio. **Frases:** 313 frases listas para usar en 21 situaciones (saludos, restaurante, aeropuerto, hotel, médico, pedir ayuda, cómo me siento…), con traducción, audio y notas de uso.
- **Gramática para hispanohablantes:** 53 conceptos en 10 categorías, explicados comparando el español con el inglés. Además de las partes de la oración, la categoría **Complementos de la oración** reúne las palabras y frases que completan o enlazan una oración: palabras de enlace (*instead*, *however*…), locuciones preposicionales (*instead of*, *because of*…), expresiones modales (*be able to*, *have to*…), frases adverbiales (*at least*, *by the way*…), determinantes y cuantificadores, y frases para opinar y acordar. Hay también **Preguntas frecuentes** (56 dudas típicas con su respuesta corta), falsos amigos, phrasal verbs comunes e interjecciones.
- **Pregúntale a la app:** un asistente en el que escribes tu duda («¿cuándo uso el present perfect?», «¿cómo se dice ventana en inglés?», «pasado de go», «frases para el aeropuerto», «¿qué estudio hoy?») y te contesta con una explicación de las unidades o de la gramática, la ficha de un tiempo verbal, una palabra con su pronunciación, las formas de un verbo o frases listas para usar, con botones que abren la unidad o el concepto. Funciona **sin internet y sin inteligencia artificial**: busca en el contenido de la propia app (no inventa respuestas) y, cuando no encuentra nada, lo dice. Sabe además llevarte a una pantalla («llévame a la unidad 20») y recomendarte qué estudiar según tu progreso.
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
| `src/lib/` | Lógica: progreso, quizzes, búsqueda de vocabulario y el motor del asistente (`asistente/`) |
| `src/context/` | Progreso y ajustes (tema, letra, Modo TDAH) |
| `src/constants/theme.ts` | Colores, temas y espaciados |

Para revisar el código: `npx tsc --noEmit` y `npx expo lint`. Para revisar el contenido del curso A1 (5 ejercicios por unidad, exámenes de 20, ejemplos con traducción, temas cubiertos): `npx tsx scripts/valida-curso-a1.ts --completo`. Para medir qué tan bien contesta el asistente: `npx tsx scripts/evalua-asistente.ts` (preguntas escritas a mano y una prueba con cada palabra, verbo, pregunta frecuente, situación y tema).

---

## English

An app for Spanish speakers learning English, based on *English Grammar in Use* (Raymond Murphy). Built with [Expo](https://expo.dev) and React Native, targeting Android. The interface is in Spanish.

### Features

- **Learn:** 145 grammar units with theory, reading, dialogues, tips and a quiz per unit. They follow a **level path** and are numbered in that order: A1 (units 1–12), A2 (13–45), B1 (46–112) and B2 (113–145). Inside each level the units are grouped by **topic** (Present & Past, Future, Modal Verbs…), every topic ends with its own **12-question quiz** (questions from its units plus review questions for the topic; there are always at least 10 different ones to build it), and every level ends with a 20-question quiz covering all its topics. **Level A1 is a 12-unit course in 4 blocks** (verb to be and nouns; present simple and quantifiers; present continuous, modals and needs; past simple, countable and uncountable nouns): each topic has the rule in Spanish, its structure (affirmative, negative and question), at least 3 examples with translation and audio, and every unit ends with **5 multiple-choice exercises** with explanations; every block closes with a **20-exercise exam** that differs from the unit exercises. Your best score on each quiz is kept. Every unit has a **🏠** button in its header (always in view) and a **Volver al inicio** button at the end to go straight back to Home. Each unit's Tips tab has a **Quick review**: questions that reveal their answer when tapped. The 26 verb units (present, past, perfects, future, modals, passive…) show their **affirmative, negative and question** forms above the theory, each with a color-coded formula, examples with translation and audio, and below them the contractions, short answers and the typical mistake of Spanish speakers.
- **Practice:** sessions of 10 exercises. *Daily practice* (a mix of everything), *verbs* (type the past, participle or -ing), *dictation* (listen and type), *sentence order* and *review the hard ones*. What you get wrong is marked as hard and comes back sooner.
- **Tense map:** all 13 tenses in one grid (present, past and future by simple, continuous, perfect and perfect continuous) with its affirmative, negative and question forms (formula and example), when to use it, keywords and the typical mistake of Spanish speakers.
- **Flashcards:** 300 everyday sentences (100 present, 100 past, 100 future), each with its translation and tense (simple, continuous, perfect…). They use spaced repetition and can be filtered by tense or by the hard ones.
- **Vocabulary:** three sections with a search box (search in English or Spanish, accents don't matter). **Verbs:** 280 verbs (157 irregular) with base form, past, past participle and -ing form, a Spanish-style pronunciation guide and examples in every tense. **Words:** 1,328 words in 34 topics (body, house, city, work, food, feelings, basic expressions…), each with pronunciation, meaning, an example and audio. **Phrases:** 313 ready-to-use phrases in 21 situations (greetings, restaurant, airport, hotel, doctor, asking for help, how I feel…), with translation, audio and usage notes.
- **Grammar for Spanish speakers:** 53 concepts in 10 categories, explained by contrasting Spanish and English. Besides the parts of speech, the **Complementos de la oración** category gathers the words and phrases that complete or link a sentence: linking words (*instead*, *however*…), complex prepositions (*instead of*, *because of*…), semi-modals (*be able to*, *have to*…), adverbial phrases (*at least*, *by the way*…), determiners and quantifiers, and phrases for giving opinions and agreeing. There are also **Frequently asked questions** (56 typical doubts with a short answer), false friends, common phrasal verbs and interjections.
- **Ask the app ("Pregúntale a la app"):** an assistant where you type a question ("when do I use the present perfect?", "how do you say *ventana* in English?", "past of go", "phrases for the airport", "what should I study today?") and it answers with an explanation from the units or the grammar, a tense card, a word with its pronunciation, the forms of a verb or ready-to-use phrases, with buttons that open the unit or concept. It works **offline and without AI**: it searches the app's own content (it never makes answers up) and says so when it finds nothing. It can also take you to a screen ("take me to unit 20") and suggest what to study based on your progress.
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
| `src/lib/` | Logic: progress, quizzes, vocabulary search and the assistant engine (`asistente/`) |
| `src/context/` | Progress and settings (theme, text size, ADHD mode) |
| `src/constants/theme.ts` | Colors, themes and spacing |

To check the code: `npx tsc --noEmit` and `npx expo lint`. To check the A1 course content (5 exercises per unit, 20-exercise exams, translated examples, topics covered): `npx tsx scripts/valida-curso-a1.ts --completo`. To measure how well the assistant answers: `npx tsx scripts/evalua-asistente.ts` (hand-written questions plus a test with every word, verb, FAQ, situation and topic).
