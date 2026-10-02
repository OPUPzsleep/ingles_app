# Plan del curso A2 (12 unidades en 4 bloques)

> Documento de traspaso para trabajar el curso A2 en una sesión de Claude Code en la nube (solo ve este repo).
> Es temporal: se puede borrar cuando el A2 esté terminado.
> Punto de partida: `main` en el commit `7118add` (curso A1 nuevo, asistente offline y Vocabulario ampliado).

## 0. Cómo trabajar (léelo primero)

- **Rama:** trabaja en una rama nueva (por ejemplo `curso-a2`); no empujes a `main`. Commits pequeños (uno por fase o por bloque) y
  `git push` seguido para no perder nada.
- **Instalar:** `npm ci`. `tsc` necesita tipos de rutas que no están en git: en un clon nuevo corre una vez
  `CI=1 BROWSER=none npx expo start --web --offline --port 8099` en segundo plano, espera ~45 s y mata el proceso (genera
  `.expo/types/router.d.ts` y `expo-env.d.ts`). Sin `CI=1` se cuelga.
- **Verificación de cada fase:** `npx tsc --noEmit`, `npx expo lint`, el validador del curso (hoy `npx tsx scripts/valida-curso-a1.ts --completo`;
  desde la Fase 0a `npx tsx scripts/valida-curso.ts a1|a2 --completo`) y `npx tsx scripts/evalua-asistente.ts` (debe terminar sin fallas).
- **No hacer:** subir la versión (`app.json`), crear releases o APK, tocar `android/`, borrar los archivos de unidades viejas
  (`src/data/grammar/units/*.ts`) ni renumerar los ids de B1/B2 (46–145).
- **Linux distingue mayúsculas** en las rutas de import: si algo falla por eso, corrígelo.
- **Lo visual no se puede probar en la nube** (emulador Android, Edge, HTML de un solo archivo con pruebas CDP). Deja una lista
  «Para probar en local» en la descripción final; se revisa después en el PC del usuario.
- **Comunicación:** español neutro, corto y con estructura (listas, frases breves). Una línea de estado al terminar cada fase.
- **Expo:** lee `AGENTS.md` (documentación de Expo SDK 57) antes de escribir código de Expo.

## 1. Qué se pide

La app «Aprende Inglés» (Expo SDK 57 / React Native 0.86 / expo-router 57). El nivel A1 ya es el curso del usuario (12 unidades
en 4 bloques). Ahora el **nivel A2 debe ser su curso A2**, con el mismo formato que A1:

- **Por tema:** regla en español, estructura (afirmativa / negativa / pregunta cuando hay verbos), **≥ 3 ejemplos traducidos con
  audio**, errores típicos y contrastes.
- **Por unidad:** **5 ejercicios** de opción múltiple (4 opciones, **una sola respuesta válida**, explicación en español).
- **Por bloque:** un **examen de 20 ejercicios**, distintos a los de las unidades (`Topic.examen`).
- Todo dentro de la app (teoría, ejemplos con audio, tarjetas, diálogo, lectura, consejos, pronunciación, «Para profundizar»).

### Temario del usuario (A2)

**Bloque 1 · Repasos y Expresión de Intereses (Unidades 1–3)**
1. Repaso del Presente Simple y Presente del verbo BE; Respuestas con TOO y EITHER.
2. Formas verbales después de CAN, CAN'T, LOVE, LIKE, etc.; Preposiciones; Pronombres objeto (Object pronouns) y Pronombres indefinidos (Indefinite pronouns).
3. Diferencia entre Presente Simple y Presente Continuo; Unión de cláusulas con IF y WHEN.

**Bloque 2 · Futuro, Pasado y Ciudad (Unidades 4–6)**
4. Futuro con GOING TO; Objetos indirectos y Pronombres de objeto indirecto; Presente Continuo usado para el futuro.
5. Repaso del Pasado Simple en preguntas y afirmaciones; Uso de 'Be born'; Uso general y específico de determinantes (determiners).
6. Is there? y Are there?; Pronombres ONE y SOME; Ofrecimientos y peticiones con CAN y COULD.

**Bloque 3 · Viajes, Hogar y Eventos Pasados (Unidades 7–9)**
7. Infinitivos para expresar razones (Infinitives for reasons); Estructura: It's + adjetivo + to...; Formas de dar consejos y hacer sugerencias.
8. Preguntas con Whose...? y Pronombres posesivos; Orden de los adjetivos; Pronombres ONE y ONES; Expresiones de ubicación después de pronombres y sustantivos.
9. Pasado Continuo (afirmaciones y preguntas); Pronombres reflexivos (Reflexive pronouns).

**Bloque 4 · Comunicación, Apariencia y Futuro (Unidades 10–12)**
10. Adjetivos comparativos; Uso de More, Less, y Fewer.
11. Preguntas y respuestas para describir a las personas; Uso de 'Have got'; Frases con VERBO + -ING y Preposiciones para identificar personas.
12. Futuro con WILL, MAY y MIGHT; Presente Continuo y Going To para el futuro (repaso y contraste); Cláusulas con IF, WHEN, AFTER, y BEFORE junto con el presente simple para referirse al futuro.

## 2. Decisiones del usuario

1. **Mismo formato que A1** (ver arriba).
2. Las unidades A2 del libro (ids 13–45) que **no estén en su plan se esconden, no se borran**. Cuando suba B1, B2 y C1 se revisa y,
   al terminar todo, las que sigan sin coincidencia se vuelven a agregar.
3. **Numeración nueva:** cada nivel se ve desde la Unidad 1 (A2: Unidad 1–12; B1 y B2 también). Es una interpretación; si luego pide otra
   cosa, el id interno no cambia, solo la etiqueta.
4. El progreso guardado en la app se puede borrar.

## 3. Estado actual del código (lo que hay que conocer)

- **Unidades por id interno:** A1 = 1–12 (el curso), A2 viejo = 13–45 (33 unidades del libro), B1 = 46–112 (67), B2 = 113–145 (33).
  Las rutas son `/unidad/<id>`.
- `src/data/grammar/units/index.ts` junta los archivos viejos (`present-and-past.ts`, `future.ts`, …) y, al final, `UNIDADES_CURSO_A1`
  (el curso pisa a las viejas con el mismo id).
- **Curso A1 (plantilla para A2):** `src/data/grammar/curso-a1/{ayuda,bloque-1..4,examen-1..4,pronunciacion,index}.ts`.
  `ayuda.ts` trae `ejercicio` (= `p()` de `preguntas-tema/ayuda.ts`), `teoria(head, body, ejemplos)`, `tarjeta`, `palabras(...)`
  (toma `VocabEntry` de `VOCAB_TOPICS` por su nombre en inglés; los que faltan se anotan en `PALABRAS_FALTANTES` y el validador falla),
  `repartirRespuestas`. Cada unidad trae: `explain` (teoría), formas (`FORMAS_CURSO_A1`, con `src/data/grammar/formulas.ts`:
  `suj/aux/neg/verbo/resto/f/fl`), `table`, `contrastCard`, `quiz` (5), `flashcards`, `simulatedChat`, `readingText`, `tips`,
  `dailyWords`, `relacionados` («Para profundizar») y, en `pronunciacion.ts`, sus consejos de pronunciación. Usa
  `curso-a1/bloque-2.ts` y `bloque-3.ts` como modelo de tono, extensión y estructura.
- **Temas = bloques:** `src/data/grammar/topics.ts` (`BLOQUE_1..4` y `TOPICS`; `examen: 20` hace que el quiz del tema sea un examen
  con solo sus 20 preguntas propias: `EXAMENES_CURSO_A1` en `curso-a1/index.ts` y `preguntas-tema/index.ts`).
- **Reparto de respuestas:** `repartirRespuestas` deja la correcta repartida entre A/B/C/D (5/5/5/5 en cada examen de 20).
- **Validador:** `scripts/valida-curso-a1.ts` revisa estructura, 5 ejercicios por unidad, 20 por examen, duplicados, ≥ 3 ejemplos por
  tema, fichas de fórmula ≤ 24 letras, ejemplos de pronunciación ≤ 36 letras, cobertura de temas (`COBERTURA`), enlaces y palabras.
- **Asistente offline** (`src/lib/asistente/`, evaluado por `scripts/evalua-asistente.ts`): indexa unidades, formas, conceptos, FAQ,
  pronunciación, etc. Nombres de tema y títulos de unidad influyen en la búsqueda; si el eval retrocede, ajusta lo esperado
  (casi siempre hay otra respuesta igual de buena) o los títulos.
- **Progreso guardado:** `src/lib/storage.ts` (`NUMERACION_ACTUAL = 3`, migra una sola vez en `cargarProgreso`).

## 4. Diseño

- **A2 = el curso del usuario**, con ids internos **13–24** (Unidad 1–12), en 4 secciones del nivel (los 4 bloques), cada una con
  su examen de 20. Las unidades viejas con tema equivalente **aportan lo útil** (reescrito, traducido y con ejemplos) en bloques
  «📖 Del libro» de la unidad nueva; el resto se esconde.
- **Esconder, no borrar:** `UNITS` deja de incluir las unidades viejas 25–45 (registro `ESCONDIDAS`: `id → «absorbida en A2·U#» | «sin coincidencia»`,
  que el validador imprime); los archivos viejos quedan **intactos**. El curso **tapa** a la vieja de su mismo id (13–24) en todo lo
  indexado por id (`UNITS`, `FORMAS_UNIDAD`, `ALL_UNIT_TITLES`, pronunciación). B1/B2 conservan sus ids (46–145): no se renumera ni
  se migra su progreso. Al final quedan **124 unidades visibles** (12 + 12 + 67 + 33).
- **Número visible por nivel:** en pantalla se ve el número dentro del nivel (A2 → 1–12; B1 → 1–67; B2 → 1–33). El id interno y las
  rutas no cambian. `numeroEnNivel(id)` sale del índice en `unidadesDeNivel(nivel)` (con memoria); además `etiquetaDeUnidad(id)`
  («A2 · Unidad 5») e `idDeUnidadEnNivel(nivel, n)`.
- **Progreso:** `numeracion` 3 → 4; se borra solo lo de A2 (ids 13–45, `temaBest['A2|…']`, `levelBest.A2`); se conservan A1 (el curso),
  XP, racha y B1/B2.
- Las unidades que se vuelvan a agregar al final recibirán ids nuevos (rango reservado ≥ 1000), así que `RUTA` y `unidadesDeNivel`
  ordenan por (nivel, id), no solo por id.

## 5. Reparto (en el orden del temario; id interno entre paréntesis)

| Bloque | Unidad | Estructura que se muestra | Aporta del A2 viejo |
|---|---|---|---|
| 1 · Repasos y expresión de intereses | 1 (13) | Formas: *to be* y presente simple (2) | — |
| | 2 (14) | Fichas de patrón | 25 verbo + -ing, 26 verbo + to, 34 no/none/nothing/nobody, parte de 20 (*can*), de 24 «preposición al final de la pregunta» |
| | 3 (15) | Tabla de contraste + fórmulas | 13 y 14 (continuo/simple, verbos de estado, *always*) |
| 2 · Futuro, pasado y ciudad | 4 (16) | Formas: *going to* | 16 (presentes para el futuro), 17 (*going to*) |
| | 5 (17) | Formas: pasado simple + fichas | 28 y 29 (*the*), 36 (all/most/some/no/none) |
| | 6 (18) | Formas: *there is/are*; fichas *can/could* | 33 (*there… and it…*), 23 (can/could/would you) |
| 3 · Viajes, hogar y eventos pasados | 7 (19) | Formas: *should* | 22 (*should* 1), bloque «it + be + adjetivo + to» de 33 |
| | 8 (20) | Tabla de posesivos y de orden | 31 (-'s and of), 43 (in/at/on posición 2) |
| | 9 (21) | Formas: pasado continuo | 15 (pasado continuo), 32 (reflexivos) |
| 4 · Comunicación, apariencia y futuro | 10 (22) | Fórmulas + tabla | 40 (comparative 2) |
| | 11 (23) | Formas: *have got* | — |
| | 12 (24) | Formas: *will*, *may/might* | 18 (*will* y *shall*) |

**Dónde viven las viejas** (`src/data/grammar/units/`): 13 `present-and-past.ts:4`, 14 `:199`, 15 `:407`; 16 `future.ts:4`, 17 `:124`,
18 `:187`; 19 `past-perfect.ts:148`; 20 `modal-verbs.ts:4`, 21 `:606`, 22 `:778`, 23 `:1072`; 24 `questions.ts:4`; 25 `ing-and-to.ts:4`,
26 `:123`; 27 `articles-and-nouns.ts:4`, 28 `:147`, 29 `:278`, 30 `:1064`, 31 `:1177`; 32 `pronouns.ts:4`, 33 `:155`, 34 `:223`,
35 `:280`, 36 `:388`; 37 `adjectives-and-adverbs.ts:4`, 38 `:160`, 39 `:321`, 40 `:472`, 41 `:618`; 42 `conjunctions.ts:443`;
43 `prepositions.ts:77`, 44 `:202`; 45 `phrasal-verbs.ts:4` (números de línea de `7118add`; son aproximados si el archivo cambió).
Ninguna trae `ejemplos` ni `relacionados`; son cortas (2–3 bloques) y con notas en inglés sin traducir.

**Se quedan escondidas** (sin tema en el plan o solo parecidas): 19 *used to*, 21 *have to / must*, 24 *Questions 1* (menos el bloque de
la preposición al final), 27 contables 2, 30 *noun + noun*, 35 *much/many/little/few*, 37 adjetivos -ing/-ed, 38 adjetivos y adverbios 1,
39 *enough / too*, 41 superlativo, 42 *during / for / while*, 44 *to / at / in / into*, 45 *phrasal verbs* intro. (*while* y *when* sí
aparecen dentro del pasado continuo y de las cláusulas con *if/when*.) Varios temas del usuario ya tienen algo en B1/B2
(*So / Neither* B1-69, *if/when* B1-63 y B2-115, infinitivo de propósito B1-77, *It's + adj + to* B1-78, *may/might* B1-57/58,
*whose* B1-82, orden de adjetivos B1-88): **no se tocan**.

### Cómo se interpretan los temas más cortos
- *too / either* → «I do too», «I don't either», «Me too / Me neither» (y «So do I / Neither do I» como extra dentro del bloque, no como tema de cobertura).
- *Preposiciones* (U2) → verbo/adjetivo + preposición (*good at, interested in, listen to, wait for*) y repaso de *in / on / at*.
- *Pronombres indefinidos* → *some-/any-/no-/every-* + *one, body, thing, where*.
- *Objetos indirectos* → «She gave me a book» = «She gave a book to me» (*give, send, show, buy, tell*) y el orden con pronombres.
- *Determinantes general / específico* → «I love music» vs «The music in this café»; *a/an/the/sin artículo, some/any, this/that, my…*.
- *one / some* (U6) → «Is there a bank? Yes, there's one» / «Are there any? Yes, there are some».
- *Ubicación tras pronombres y sustantivos* (U8) → «the one on the left», «the shop next to the bank».
- *Identificar personas* (U11) → verbo + -ing («the man talking to Ana») y preposiciones («the girl with long hair», «in a red coat»).
- Reparto de lo que se solapa: *if/when* → U3 = hábitos y hechos (presente); U12 = cláusulas de futuro (*after/before/if/when* + presente simple
  con *will*). Presente continuo para el futuro → U4 lo enseña; U12 lo **contrasta** con *going to / will / may / might*.
- **No repetir A1:** comparativos (A1·U5), *have got* (A1·U3), *in/on/at* de lugar, *there is/are*, *can/can't*, *like/want/need to*,
  *Let's* y *would you like* ya están en A1. A2·U10, U11, U6, U2 y U8 los **amplían**, no los repiten.

## 6. Cambios técnicos

1. **Cursos como módulos.** `src/data/grammar/curso/ayuda.ts` pasa a ser el archivo real (`ejercicio`, `teoria`, `tarjeta`, `palabras`,
   `PALABRAS_FALTANTES`, `repartirRespuestas`) y `curso-a1/ayuda.ts` lo **re-exporta** (así no se tocan los 9 archivos de A1).
   `curso-a2/{bloque-1..4,examen-1..4,pronunciacion,index}.ts` con la misma forma que `curso-a1/`. `curso/index.ts` junta los cursos
   (`UNIDADES_CURSO`, `FORMAS_CURSO`, `EXAMENES_CURSO`, `PRONUN_CURSO`, `ESCONDIDAS`; `conRespuestasRepartidas` pasa aquí, con el
   desfase por unidad dentro del curso). Importadores a actualizar: `units/index.ts`, `formas.ts`, `lib/grammar.ts`
   (`getPronunVocab`, `getAllVocab`), `lib/asistente/indice.ts`. `preguntas-tema/index.ts`: `A2: { ...PREGUNTAS_TEMA_A2, ...EXAMENES_CURSO_A2 }`
   (se conservan las 58 preguntas viejas, sin uso, para cuando se repongan las escondidas).
2. **Claves viejas pegadas a ids nuevos** (fallan sin avisar): `FORMAS_DEL_LIBRO` tiene las claves 15 y 17–22 y `PRONUN_DATA` la 20,
   todas dentro de 13–24. `formas.ts` descarta las claves viejas cuyo id esté en el curso (no una lista fija) y se reaprovecha lo
   útil en las fichas del curso (15 → U9, 17 → U4, 18 → U12, 22 → U7, 20 → *can/could* en U2 y U6); 19 y 21 quedan guardadas sin uso.
   `getPronunVocab` prueba primero el curso y luego `PRONUN_DATA`. Las **anclas 20 y 32 de `PRONUN_DATA` se quedan** (sirven de
   respaldo a B1/B2). `getAllVocab` no lista anclas que sean id del curso o que no estén en `UNITS`; los `dailyWords` de lo absorbido
   pasan a la unidad nueva (sin repetir). `ETIQUETA_EN_NIVEL['A2|Past Perfect']` **se queda**. `docsDePronunciacion`
   (`lib/asistente/indice.ts` ~231) hoy indexa las anclas viejas 1, 2, 3, 5, 10 con números del curso y no indexa `PRONUN_CURSO_A1`
   (cabo suelto de A1): debe leer la pronunciación de los cursos y solo las anclas visibles que no sean del curso.
3. **Temas y textos:** `topics.ts` (4 temas nuevos con `examen: 20` y nombres distintos a los de A1, porque los exámenes se buscan por
   nombre), `niveles.ts` (resumen de A2), `unit-titles.ts` (13–24; los títulos cortos llevan el nombre inglés del tiempo cuando aplica:
   *Present simple vs continuous*, *Be going to*, *Past simple*, *Past continuous*, porque el asistente enlaza «Para estudiarlo» buscando
   esas palabras en el título), comentario de `Topic.examen` en `types/grammar.ts`.
4. **Número por nivel:** se usa en `unit-list-item.tsx`, `unit-view.tsx` (encabezado, botones «← / →»: al cruzar de nivel llevan el nivel en
   la etiqueta), `nivel-unidades.tsx`, `app/unidad/[num].tsx`, `app/quiz/unidad/[num].tsx`, la etiqueta de quiz de `lib/grammar.ts` (~220)
   y el asistente (`indice.ts`, `destinos.ts`, `motor.ts`). `Relacionado` admite `{ unidad: id }` y arma su etiqueta al dibujar (los
   archivos de datos no pueden importar `lib/grammar`: ciclo). Los 22 «Para profundizar» de A1 que apuntan a A2 viejos
   (`curso-a1/bloque-1.ts:159,356,524`, `bloque-2.ts:174,372,373,520`, `bloque-3.ts:174,175,342–344,506,507`,
   `bloque-4.ts:160,161,346–348,459–461`) pasan a `{ unidad: id }`.
   - **Asistente:** «unidad N» se resuelve con `(nivel, número) → id`, **nunca por rango** (`destinos.ts:28,47,74` se rompería con huecos:
     `TOTAL_UNIDADES`, `UNITS[n].title`); «de B1» se consume del texto; si hay varias, responde con un enlace por candidata y dice siempre
     la unidad resuelta. `resolverDestinos` y `numeroDeUnidad` reciben el nivel del usuario (`motor.ts` `navegacion` hoy no recibe `ctx`);
     `motor.ts:124,148,166–168,297,572,648` y `sugerencias.ts:26` hablan en números por nivel.
   - **Ids no visibles:** `unit-view.tsx` (~88–103, tarjeta «sin contenido» con «Marcar como estudiada») y `app/unidad/[num].tsx` redirigen
     (como `+not-found.tsx`); `markUnitDone` (`context/progress-context.tsx`) ignora ids que no están en `UNITS`.
   - **Totales:** `app/(tabs)/index.tsx` (`TOTAL_UNITS = 145` → `RUTA.length`) y los conteos con `doneUnits.length`
     (`index.tsx:34,58`, `motor.ts:136,155`) cuentan solo ids que existen en `UNITS`.
   - **`RUTA`/`unidadesDeNivel`:** ordenan por (nivel, id).
5. **Progreso (`lib/storage.ts`):** función pura `migrarProgreso(guardado)` con tabla de reinicios `{versión, nivel, ids}`:
   sin `numeracion` (≤ 1.5.0) → mapa del libro (`NUEVO_DE_LIBRO`) → reinicia A1 y A2; con 2 → reinicia A1 y A2; con 3 → solo A2;
   con 4 → tal cual. También borra claves huérfanas de temas A2 escondidos. Un script de fixtures prueba los cuatro casos (el repo no
   tiene runner de pruebas). Actualiza los comentarios de `types/progress.ts` y `storage.ts`.
6. **Textos con ids viejos:** `units/ing-and-to.ts:266` («unidad 26») y `:1801` («unidad 76») se reescriben sin número; `README.md`
   (L13, 19, 89, 99, 105, 175: «A2 (13–45)», «145 unidades» → 124, «26 unidades de verbos» → recalcular, «unidad 20»);
   comentarios que dicen «curso A1» o «números seguidos» (`lib/grammar.ts:29,37,130,165,254,265`, `unit-view.tsx:82,382`, `topics.ts:3`,
   `formas.ts:507`, `units/index.ts:22`, `numeracion.ts:1-8`, `pronunciation.ts:3-7`, `types/progress.ts:16`); `data/gramatica/faq.ts:222`;
   `scripts/evalua-asistente.ts` (L128 `/unidad/16`, L244 «unidad 20», L255 «3 de 145» → «3 de 124», y los casos L103, 116–120, 125, 136 que
   buscan títulos de unidades escondidas o tapadas: reescríbelos con las nuevas).
7. **Validador general:** `scripts/valida-curso-a1.ts` → `scripts/valida-curso.ts [a1|a2] [--completo]`, con la configuración de cada curso
   (`BLOQUE_DE_UNIDAD`, `CON_FORMAS`, `COBERTURA`, lista de palabras conocidas del nivel). Invariantes cruzadas nuevas: cada id de `UNITS` tiene
   título en `ALL_UNIT_TITLES`; claves de `FORMAS_UNIDAD` ⊆ `UNITS` y ninguna vieja bajo un id del curso; temas ⊆ `TOPICS`; nombres de examen
   únicos entre cursos; ningún ejercicio repetido entre A1 y A2; lista de enlaces «Para profundizar» con el título al que apuntan;
   registro `ESCONDIDAS`. `palabras()` solo con palabras que ya existan en Vocabulario (si falta alguna el validador falla; añadir palabras
   toca `src/data/vocabulario/palabras/*` y puede mover el diccionario del eval).

## 7. Fases (cada una se verifica; commit por fase)

- **0a · Refactor puro:** punto 1 de arriba, el cabo de `docsDePronunciacion` y el validador general. A1 sigue en verde.
- **0b · Ids con huecos + número por nivel**, con las 33 unidades viejas de A2 aún visibles (A2 se ve 1–33): helpers, UI, asistente,
  redirección de ids no visibles, migración v4, totales. Se rehace la línea base del eval.
- **0c · Esconder solo 25–45** (A2 = viejas 13–24, que se ven como 1–12): quitar los 22 enlaces de A1 que apuntan a A2, reescribir los
  textos con ids viejos (punto 6), `ESCONDIDAS`. Total en Inicio: 124.
- **1 · Bloque 1** (U1–3 + examen de 20) → **2 · Bloque 2** (U4–6) → **3 · Bloque 3** (U7–9) → **4 · Bloque 4** (U10–12). Cada unidad nueva
  **tapa** a la vieja de su id y se quitan las formas/pronunciación viejas de ese id. Al terminar cada bloque se **reponen en A1** los
  enlaces «Para profundizar» que apuntan a sus unidades: 13/14 → U3, 15 → U9, 20/23 → U6 o U2, 25/26/34 → U2, 28/36 → U5, 31 → U8, 33 → U6
  (los que apuntaban a 19, 21, 24, 27 o 35 se quedan fuera). Cada bloque suma sus casos al eval del asistente.
- **5 · Cierre:** auditoría final del validador (`--completo`, `a1` y `a2`), README, eval completo y la lista «Para probar en local».

## 8. Cómo se escribe cada unidad (igual que A1)

Bloques de teoría con viñetas y `ejemplos` traducidos con audio (≥ 3 por bloque, sin símbolos que la voz lea raro), formas o fichas de
patrón, tabla, tarjeta de contraste, 5 ejercicios, tarjetas de repaso (≥ 3), diálogo (≥ 4 mensajes con traducción), lectura con
traducción, consejos (≥ 2), 4+ palabras (`palabras()`), pronunciación propia (≥ 2 consejos y ≥ 4 palabras), bloques «📖 Del libro» con lo
útil de las unidades viejas (ya traducido) y «Para profundizar» (≥ 2 enlaces con `{ unidad: id }` o a conceptos de Gramática).
Cada ejercicio con **una sola respuesta válida** (revísalos uno por uno: es el error más común), 4 opciones distintas, explicación en
español de ≥ 25 letras. Los exámenes (20) usan ejercicios distintos a los de las unidades de su bloque, repartidos entre las unidades
(7/7/6) y con las respuestas 5/5/5/5. Los nombres de bloque son los del usuario; si el eval del asistente retrocede por ellos
(se indexan como palabra clave de cada unidad), ajusta.

## 9. Verificación al final

- `npx tsc --noEmit`, `npx expo lint`, `npx tsx scripts/valida-curso.ts a1 --completo`, `npx tsx scripts/valida-curso.ts a2 --completo`,
  `npx tsx scripts/evalua-asistente.ts` y el script de fixtures de la migración.
- Nivel A2 con 4 bloques de 3 unidades numeradas 1–12; B1 con 1–67 y B2 con 1–33; total 124.
- Un progreso guardado con numeración 3 conserva A1 y B1/B2 y borra A2; con 2 o sin `numeracion` borra A1 y A2.
- En local (no en la nube): HTML de un solo archivo (`npm run web:html`) y emulador Android con celular 375, escritorio, letra 1.6 y Modo TDAH.

## 10. Riesgos

- **Volumen:** 12 unidades, 60 + 80 ejercicios, ~300 ejemplos → por bloques y con el validador.
- **Claves viejas que se pegan a ids nuevos** (formas, pronunciación, enlaces, `doneUnits`): no dan error, solo muestran otra cosa.
- **Número por nivel** toca muchos textos y el asistente.
- **Dos respuestas válidas** en un ejercicio.
- **Temas ambiguos** (*Preposiciones*, determinantes): supuestos anotados en §5.

## 11. Trampas conocidas

- `palabras()` solo ve `VOCAB_TOPICS` (los verbos no están ahí).
- En herramientas que escriben archivos, las barras invertidas y las plantillas de JS pueden perder `\`: en regex de plantillas usa `[^0-9]`
  en lugar de `\D`, y revisa que no queden caracteres de control (el validador los detecta).
- `Edit` falla si el archivo cambió desde que se leyó: léelo otra vez.
- Si el eval del asistente falla tras agregar contenido, casi siempre hay una respuesta igual de buena: cambia lo esperado.
