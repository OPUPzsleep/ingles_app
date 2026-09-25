# Aprende Inglés 🇺🇸

[Español](#español) · [English](#english)

---

## Español

App para aprender inglés desde el español, basada en *English Grammar in Use* (Raymond Murphy). Hecha con [Expo](https://expo.dev) y React Native, pensada para Android.

### Qué incluye

- **Aprender:** 145 unidades de gramática con teoría, lectura, diálogos, consejos y un quiz por unidad. En la pestaña Consejos cada unidad tiene un **Repaso rápido**: preguntas que muestran la respuesta al tocarlas.
- **Tarjetas:** 300 frases del día a día (100 en presente, 100 en pasado y 100 en futuro), con traducción y el tipo de oración (simple, continuo, perfecto…). Usan repaso espaciado y se pueden filtrar por tiempo.
- **Vocabulario:** 280 verbos (157 irregulares) con presente, pasado, participio y la forma -ing, pronunciación aproximada al español y ejemplos en cada tiempo.
- **Gramática para hispanohablantes:** conceptos explicados comparando el español con el inglés.
- **Modo TDAH:** menos opciones en pantalla, lectura "biónica" y un temporizador de sesión enfocada en Inicio.
- **Accesibilidad:** tamaño de letra ajustable (A− / A+) y temas de color: Automático, Claro, Crema, Noche y Oscuro.
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

### Estructura

| Carpeta | Contenido |
|---|---|
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

- **Learn:** 145 grammar units with theory, reading, dialogues, tips and a quiz per unit. Each unit's Tips tab has a **Quick review**: questions that reveal their answer when tapped.
- **Flashcards:** 300 everyday sentences (100 present, 100 past, 100 future), each with its translation and tense (simple, continuous, perfect…). They use spaced repetition and can be filtered by tense.
- **Vocabulary:** 280 verbs (157 irregular) with base form, past, past participle and -ing form, a Spanish-style pronunciation guide and examples in every tense.
- **Grammar for Spanish speakers:** concepts explained by contrasting Spanish and English.
- **ADHD mode:** fewer options on screen, "bionic" reading and a focus-session timer on the Home screen.
- **Accessibility:** adjustable text size (A− / A+) and color themes: Automatic, Light, Cream, Night and Dark.
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

### Project layout

| Folder | Contents |
|---|---|
| `src/app/` | Screens (expo-router routes) |
| `src/components/` | UI components |
| `src/data/` | Content: units, sentences, verbs, concepts |
| `src/context/` | Progress and settings (theme, text size, ADHD mode) |
| `src/constants/theme.ts` | Colors, themes and spacing |

To check the code: `npx tsc --noEmit` and `npx expo lint`.
