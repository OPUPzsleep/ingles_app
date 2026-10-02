/**
 * Revisa el contenido del curso A1 (las unidades 1–12 y el examen de 20 ejercicios de cada uno de sus 4 bloques):
 *  - cada unidad trae sus 5 ejercicios y cada bloque su examen de 20, todos con 4 opciones distintas, una respuesta
 *    marcada y su explicación, y sin repetirse entre unidades y exámenes;
 *  - cada tema (bloque de teoría) trae al menos 3 ejemplos con su traducción, y las unidades de verbos sus tres formas;
 *  - cada tema del plan de estudios aparece en su unidad (lista de verificación);
 *  - los enlaces de «Para profundizar» llevan a algo que existe, y las palabras pedidas a Vocabulario están ahí;
 *  - avisos (no fallan): palabras en inglés que no son del vocabulario A1, para revisarlas a mano.
 *
 * Se corre con `npx tsx scripts/valida-curso-a1.ts`; con `--completo` exige las 12 unidades y los 4 exámenes.
 * Termina con error si algo falla.
 */
import { PALABRAS_FALTANTES } from '@/data/grammar/curso-a1/ayuda';
import { EXAMENES_CURSO_A1, FORMAS_CURSO_A1, UNIDADES_CURSO_A1 } from '@/data/grammar/curso-a1';
import { PRONUN_CURSO_A1 } from '@/data/grammar/curso-a1/pronunciacion';
import { BLOQUE_1, BLOQUE_2, BLOQUE_3, BLOQUE_4 } from '@/data/grammar/topics';
import { UNITS } from '@/data/grammar/units';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

const COMPLETO = process.argv.includes('--completo');

/** El bloque al que pertenece cada unidad del curso. */
const BLOQUE_DE_UNIDAD: Record<number, string> = {
  1: BLOQUE_1,
  2: BLOQUE_1,
  3: BLOQUE_1,
  4: BLOQUE_2,
  5: BLOQUE_2,
  6: BLOQUE_2,
  7: BLOQUE_3,
  8: BLOQUE_3,
  9: BLOQUE_3,
  10: BLOQUE_4,
  11: BLOQUE_4,
  12: BLOQUE_4,
};
const BLOQUES = [BLOQUE_1, BLOQUE_2, BLOQUE_3, BLOQUE_4];

/** Las unidades de verbos, que deben traer sus tres formas (afirmativa, negativa y pregunta). */
const CON_FORMAS = [1, 4, 5, 7, 9, 10];

/**
 * Lista de verificación: los temas del plan de estudios de cada unidad. Cada uno se busca en los títulos de los bloques
 * de teoría de la unidad (y en su texto): si falta, la unidad se quedó a medias.
 */
const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  1: [
    ['Verbo BE con I, you, we, he, she, they', /to be: ser o estar/i],
    ['Afirmativas', /Afirmativa/i],
    ['Negativas', /Negativa/i],
    ['Preguntas de Sí / No', /Preguntas de S/i],
    ['Respuestas cortas', /Respuestas cortas/i],
    ["What's…? y Where…?", /What's…\? y Where/i],
  ],
  2: [
    ['Artículos a / an', /A y an/],
    ['Artículo the', /The: el, la/],
    ['This y these', /This y these/],
    ['Plurales regulares', /Plurales regulares/],
    ['Plurales irregulares', /Plurales irregulares/],
  ],
  3: [
    ["Posesivo con 's", /Posesivo con 's/],
    ["Posesivo con s'", /Posesivo con s'/],
    ['Adjetivos posesivos', /Adjetivos posesivos/],
  ],
  4: [
    ['Presente simple: cuándo se usa', /Presente simple: ¿cuándo/],
    ['Afirmativas', /Afirmativa/],
    ['Negativas', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Respuestas cortas', /Respuestas cortas/],
    ['Preguntas de información', /Preguntas de información/],
    ['Adverbios de frecuencia', /Adverbios de frecuencia/],
  ],
  5: [
    ['There is / There are', /There is \/ There are/],
    ['Negativa, pregunta y respuestas cortas', /Negativa, pregunta/],
    ['Cuantificadores', /Cuantificadores/],
    ['Adjetivos antes del sustantivo', /Adjetivos antes del sustantivo/],
  ],
  7: [
    ['Presente continuo: cuándo se usa', /Presente continuo: ¿cuándo/],
    ['Afirmativas', /Afirmativa/],
    ['Negativas', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Respuestas cortas', /Respuestas cortas/],
    ['Preguntas de información', /Preguntas de información/],
  ],
  8: [
    ['Imperativos', /Imperativos/],
    ['Imperativo negativo', /Imperativo negativo/],
    ['Verbos seguidos de infinitivo (like to, want to, need to, have to)', /like to \/ want to \/ need to \/ have to/],
  ],
  9: [
    ['Preguntas con How much', /How much/],
    ['This / these / that / those', /This \/ these \/ that \/ those/],
    ["Can y can't", /Can y can't/],
  ],
  10: [
    ['Pasado simple: cuándo se usa', /Pasado simple: ¿cuándo/],
    ['Verbos regulares', /Verbos regulares/],
    ['Verbos irregulares', /Verbos irregulares/],
    ['Negativa', /Negativa/],
    ['Preguntas de Sí / No', /Preguntas de Sí/],
    ['Preguntas de información con did', /Preguntas de información con did/],
    ['Pasado de to be: afirmativa y negativa', /Pasado de to be/],
    ['Pasado de to be: preguntas de información', /was \/ were/],
  ],
  11: [
    ['Sustantivos contables e incontables', /Sustantivos contables e incontables/],
    ['How much / How many', /How much\? \/ How many\?/],
    ['Would you like (to)…?', /Would you like/],
  ],
  12: [
    ['Some', /Some:/],
    ['Any', /Any:/],
    ['A lot of, much y many', /A lot of, much y many/],
  ],
  6: [
    ['La hora', /La hora/],
    ['A qué hora', /A qué hora/],
    ["Sugerencias con Let's", /Let's: sugerencias/],
  ],
};

const errores: string[] = [];
const avisos: string[] = [];
const error = (donde: string, mensaje: string) => errores.push(`${donde}: ${mensaje}`);
const aviso = (donde: string, mensaje: string) => avisos.push(`${donde}: ${mensaje}`);

const normalizar = (texto: string) => texto.toLowerCase().replace(/\s+/g, ' ').trim();
/** Caracteres de control que no deben estar en ningún texto (salvo el salto de línea). */
const CONTROL = /[\u0000-\u0009\u000b-\u001f]/;

// ─── Vocabulario A1 (para los avisos) ───

const BASICAS = `a an the this that these those i you he she it we they me him her us them my your his its our their mine yours
am is are was were be been being do does did done have has had having go goes went gone going can could will would shall
should may might must not no yes and or but because so if when where what who whom whose which how why in on at to from for
of with without by about into over under between near behind next up down out off here there now today tonight tomorrow
yesterday then very too also just only all some any many much more most few little lot lots every each other another one two
three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
thirty forty fifty sixty seventy eighty ninety hundred thousand first second third good bad big small new old young long
short high low hot cold happy sad tired hungry thirsty nice great very well please thank thanks sorry hello hi bye goodbye
sir mr mrs ms name age year years day days week weeks month months time hour hours minute minutes morning afternoon evening
night today always usually often sometimes never again still already like love want need get make take give say tell ask
know think see look watch listen hear play work study read write eat drink sleep wake live come stay wait buy sell open
close help use try call meet start finish begin put let find feel become keep bring show leave turn walk run sit stand
ready late early right left front back side top home house school class room kitchen bathroom bedroom garden park street
city town country world car bus train bike phone book pen pencil bag table chair door window key keys food water milk
coffee tea bread egg eggs apple orange fruit vegetable meat chicken fish rice pizza cake breakfast lunch dinner family
mother father mom dad parents brother sister son daughter baby child children man men woman women boy girl person people
friend friends teacher student doctor nurse actor police driver cook worker boss job money price cheap expensive free busy
free open closed easy hard difficult fast slow loud quiet beautiful favorite favourite red blue green black white yellow
dog cat bird pet pets animal animals sun moon sky rain snow wind cloud weather spring summer autumn winter
ok okay oh wow yeah well maybe really together every maybe`;

const CONOCIDAS = new Set<string>(BASICAS.split(/\s+/).filter(Boolean));
for (const tema of VOCAB_TOPICS) {
  if (tema.level !== 'A1') continue;
  for (const entrada of tema.words) for (const palabra of entrada.w.toLowerCase().split(/[^a-z']+/)) if (palabra) CONOCIDAS.add(palabra);
}

/** ¿La palabra (o su base: sin -s, -es, -ed, -ing, -ly, con 's) es del vocabulario A1? */
function esConocida(palabra: string): boolean {
  const base = palabra.replace(/'s$/, '').replace(/n't$/, '').replace(/'(m|re|ve|ll|d)$/, '');
  if (!base || CONOCIDAS.has(base)) return true;
  const variantes = [
    base.replace(/s$/, ''),
    base.replace(/es$/, ''),
    base.replace(/ies$/, 'y'),
    base.replace(/ed$/, ''),
    base.replace(/ed$/, 'e'),
    base.replace(/ing$/, ''),
    base.replace(/ing$/, 'e'),
    base.replace(/ly$/, ''),
    base.replace(/(.)\1ing$/, '$1'),
    base.replace(/(.)\1ed$/, '$1'),
    base.replace(/er$/, ''),
    base.replace(/est$/, ''),
  ];
  return variantes.some((variante) => variante.length > 1 && CONOCIDAS.has(variante));
}

function palabrasDesconocidas(textosEnIngles: string[]): string[] {
  const vistas = new Set<string>();
  for (const texto of textosEnIngles) {
    for (const palabra of texto.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) ?? []) {
      if (!esConocida(palabra)) vistas.add(palabra);
    }
  }
  return [...vistas].sort();
}

// ─── Revisión de ejercicios ───

const posiciones = (preguntas: QuizQuestion[]) => [0, 1, 2, 3].map((i) => preguntas.filter((q) => q.ans === i).length);

function revisarEjercicio(donde: string, q: QuizQuestion) {
  if (!q.q.trim()) error(donde, 'pregunta vacía');
  if (q.opts.length !== 4) error(donde, `«${q.q}» tiene ${q.opts.length} opciones (deben ser 4)`);
  const distintas = new Set(q.opts.map(normalizar));
  if (distintas.size !== q.opts.length) error(donde, `«${q.q}» tiene opciones repetidas: ${q.opts.join(' | ')}`);
  if (!Number.isInteger(q.ans) || q.ans < 0 || q.ans >= q.opts.length) error(donde, `«${q.q}» tiene la respuesta fuera de rango`);
  if (q.opts.some((opcion) => !opcion.trim())) error(donde, `«${q.q}» tiene una opción vacía`);
  if (q.exp.trim().length < 25) error(donde, `«${q.q}» tiene una explicación muy corta`);
  for (const texto of [q.q, q.exp, ...q.opts]) {
    if (CONTROL.test(texto)) error(donde, `«${q.q}» tiene un carácter de control (¿barra invertida?)`);
    if (/\s{2,}|^\s|\s$/.test(texto)) aviso(donde, `«${q.q}» tiene espacios de más en «${texto}»`);
  }
}

/** La oración completa de un ejercicio (la pregunta con la respuesta en el hueco), para ver si se repite. */
const clave = (q: QuizQuestion) => normalizar(`${q.q} ${q.opts[q.ans] ?? ''}`);

// ─── Revisión de unidades ───

function revisarUnidad(num: number, unit: Unit) {
  const donde = `Unidad ${num}`;
  if (unit.level !== 'A1') error(donde, `el nivel es ${unit.level}`);
  if (unit.topic !== BLOQUE_DE_UNIDAD[num]) error(donde, `el tema es «${unit.topic}» y debería ser «${BLOQUE_DE_UNIDAD[num]}»`);
  if (!unit.title.trim()) error(donde, 'sin título');

  if (unit.quiz.length !== 5) error(donde, `tiene ${unit.quiz.length} ejercicios (deben ser 5)`);
  unit.quiz.forEach((q) => revisarEjercicio(donde, q));

  const textosEnIngles: string[] = [];
  let ejemplos = 0;
  unit.explain.forEach((bloque) => {
    const bloqueDonde = `${donde} · «${bloque.head}»`;
    if (bloque.body.trim().length < 80) error(bloqueDonde, 'la explicación es muy corta');
    const lista = bloque.ejemplos ?? [];
    if (lista.length < 3) error(bloqueDonde, `tiene ${lista.length} ejemplos con traducción (mínimo 3)`);
    ejemplos += lista.length;
    const vistos = new Set<string>();
    for (const [en, es] of lista) {
      if (!en.trim() || !es.trim()) error(bloqueDonde, `ejemplo con un texto vacío: [${en}] [${es}]`);
      if (vistos.has(en)) error(bloqueDonde, `ejemplo repetido: «${en}»`);
      vistos.add(en);
      if (/[·→/]/.test(en)) aviso(bloqueDonde, `el ejemplo «${en}» tiene símbolos que la voz lee raro`);
      textosEnIngles.push(en);
    }
    for (const texto of [bloque.head, bloque.body, ...(bloque.note ? [bloque.note] : []), ...lista.flat()]) {
      if (CONTROL.test(texto)) error(bloqueDonde, `tiene un carácter de control (¿barra invertida?): «${texto.slice(0, 40)}»`);
    }
  });

  const formas = FORMAS_CURSO_A1[num];
  const listaDeFormas: FormasUnidad[] = formas ? (Array.isArray(formas) ? formas : [formas]) : [];
  if (CON_FORMAS.includes(num) && listaDeFormas.length === 0) error(donde, 'le faltan sus tres formas (afirmativa, negativa, pregunta)');
  for (const forma of listaDeFormas) {
    for (const nombre of ['afirmativa', 'negativa', 'pregunta'] as const) {
      const detalle = forma[nombre];
      if (detalle.formulas.length === 0) error(donde, `la forma ${nombre} no tiene fórmula`);
      if (detalle.ejemplos.length < 3) error(donde, `la forma ${nombre} tiene ${detalle.ejemplos.length} ejemplos (mínimo 3)`);
      for (const [en, es] of detalle.ejemplos) {
        if (!en.trim() || !es.trim()) error(donde, `ejemplo vacío en la forma ${nombre}`);
        textosEnIngles.push(en);
      }
    }
  }
  if (listaDeFormas.length === 0 && !unit.syntaxChips?.length) error(donde, 'no tiene fórmulas (ni formas ni «Estructura»)');

  // Cada ficha de una fórmula va en una sola línea: con letra grande una ficha larga se sale de la pantalla del celular.
  const formulas = [
    ...(unit.syntaxChips ?? []),
    ...listaDeFormas.flatMap((forma) => [forma.afirmativa, forma.negativa, forma.pregunta].flatMap((detalle) => detalle.formulas)),
  ];
  for (const formula of formulas) {
    for (const ficha of formula.chips) {
      if ([...ficha.text].length > 24) error(donde, `la ficha «${ficha.text}» es muy larga para el celular con letra grande (máximo 24 letras)`);
    }
  }

  if ((unit.tips?.length ?? 0) < 2) error(donde, 'le faltan consejos (mínimo 2)');
  if ((unit.flashcards?.length ?? 0) < 3) error(donde, 'le faltan tarjetas de repaso (mínimo 3)');
  if ((unit.dailyWords?.length ?? 0) < 4) error(donde, `tiene ${unit.dailyWords?.length ?? 0} palabras (mínimo 4)`);
  const dialogo = unit.simulatedChat ?? [];
  if (dialogo.length < 4) error(donde, 'le falta el diálogo (mínimo 4 mensajes)');
  for (const mensaje of dialogo) {
    if (!mensaje.translation?.trim()) error(donde, `un mensaje del diálogo no tiene traducción: «${mensaje.text}»`);
    textosEnIngles.push(mensaje.text);
  }
  if (!unit.readingText?.translation?.trim()) error(donde, 'le falta la lectura con su traducción');
  if (unit.readingText) textosEnIngles.push(unit.readingText.body);
  if (!unit.table) aviso(donde, 'no tiene tabla de referencia');
  if (!unit.contrastCard) aviso(donde, 'no tiene tarjeta de contraste');

  const pronunciacion = PRONUN_CURSO_A1[num];
  if (!pronunciacion || pronunciacion.tips.length < 2) error(donde, 'le faltan consejos de pronunciación (mínimo 2)');
  if (!pronunciacion || pronunciacion.vocab.length < 4) error(donde, 'le faltan palabras con pronunciación (mínimo 4)');
  // Los ejemplos de pronunciación van en una sola línea: más largos que esto se salen de la pantalla del celular.
  for (const consejo of pronunciacion?.tips ?? []) {
    for (const ejemplo of consejo.examples) {
      if ([...ejemplo].length > 36) error(donde, `el ejemplo de pronunciación «${ejemplo}» es muy largo para el celular (máximo 36 letras)`);
    }
  }

  // Los enlaces de «Para profundizar» llevan a algo que existe.
  if ((unit.relacionados?.length ?? 0) < 2) error(donde, 'le faltan enlaces de «Para profundizar» (mínimo 2)');
  for (const relacionado of unit.relacionados ?? []) {
    const unidad = /^\/unidad\/(\d+)$/.exec(relacionado.ruta);
    const concepto = /^\/gramatica\/concepto\/([\w-]+)$/.exec(relacionado.ruta);
    if (unidad) {
      if (!UNITS[Number(unidad[1])]) error(donde, `el enlace «${relacionado.etiqueta}» lleva a una unidad que no existe`);
    } else if (concepto) {
      if (!GRAM_CONCEPTS.some((c) => c.id === concepto[1])) error(donde, `el enlace «${relacionado.etiqueta}» lleva a una página que no existe`);
    } else {
      error(donde, `el enlace «${relacionado.etiqueta}» tiene una ruta rara: ${relacionado.ruta}`);
    }
  }

  // Cada tema del plan está en su unidad.
  const titulos = unit.explain.map((bloque) => bloque.head).join('\n');
  for (const [tema, buscar] of COBERTURA[num] ?? []) {
    if (!buscar.test(titulos)) error(donde, `no cubre «${tema}» (no encontré ${buscar})`);
  }
  if (!COBERTURA[num]) aviso(donde, 'no tiene lista de verificación de temas');

  const raras = palabrasDesconocidas(textosEnIngles);
  if (raras.length > 0) aviso(donde, `palabras fuera del vocabulario A1 para revisar: ${raras.join(', ')}`);

  console.log(
    `  Unidad ${String(num).padStart(2)} · ${unit.title}\n` +
      `      teoría ${unit.explain.length} bloques / ${ejemplos} ejemplos · formas ${listaDeFormas.length} · ejercicios ${unit.quiz.length} · ` +
      `tarjetas ${unit.flashcards.length} · consejos ${unit.tips?.length ?? 0} · palabras ${unit.dailyWords?.length ?? 0}`
  );
}

console.log('\n== Curso A1: unidades ==');
const numeros = Object.keys(UNIDADES_CURSO_A1).map(Number).sort((a, b) => a - b);
if (COMPLETO) {
  for (let n = 1; n <= 12; n++) if (!UNIDADES_CURSO_A1[n]) error(`Unidad ${n}`, 'falta');
}
for (const num of numeros) {
  if (num < 1 || num > 12) error(`Unidad ${num}`, 'las unidades del curso son de la 1 a la 12');
  else revisarUnidad(num, UNIDADES_CURSO_A1[num]);
}

console.log('\n== Curso A1: exámenes de bloque ==');
const todas = new Map<string, string>();
for (const num of numeros) {
  for (const q of UNIDADES_CURSO_A1[num].quiz) todas.set(clave(q), `unidad ${num}`);
}
for (const bloque of BLOQUES) {
  const examen = EXAMENES_CURSO_A1[bloque];
  const unidadesDelBloque = numeros.filter((n) => BLOQUE_DE_UNIDAD[n] === bloque);
  if (!examen) {
    if (COMPLETO || unidadesDelBloque.length > 0) error(bloque, 'falta el examen');
    continue;
  }
  const donde = `Examen «${bloque}»`;
  if (examen.length !== 20) error(donde, `tiene ${examen.length} ejercicios (deben ser 20)`);
  examen.forEach((q) => {
    revisarEjercicio(donde, q);
    const otra = todas.get(clave(q));
    if (otra) error(donde, `«${q.q}» ya está en ${otra}`);
    todas.set(clave(q), 'este examen');
  });
  // De cada pregunta solo se miran las partes en inglés (sin lo que va entre paréntesis ni lo que empieza con «¿»).
  const textosEnIngles = examen.flatMap((q) => [q.q.replace(/\([^)]*\)/g, ' ').replace(/¿.*$/, ' '), q.opts[q.ans]]);
  const raras = palabrasDesconocidas(textosEnIngles);
  if (raras.length > 0) aviso(donde, `palabras fuera del vocabulario A1 para revisar: ${raras.join(', ')}`);
  const reparto = posiciones(examen);
  if (Math.max(...reparto) > 6) aviso(donde, `la respuesta correcta se concentra en una letra: ${reparto.join(' / ')} (A / B / C / D)`);
  console.log(`  ${bloque}: ${examen.length} ejercicios · respuestas A/B/C/D: ${reparto.join(' / ')}`);
}

if (PALABRAS_FALTANTES.length > 0) error('Vocabulario', `palabras pedidas que no están en Vocabulario: ${[...new Set(PALABRAS_FALTANTES)].join(', ')}`);

if (avisos.length > 0) {
  console.log('\nAvisos (para revisar a mano):');
  avisos.forEach((texto) => console.log('  · ' + texto));
}
if (errores.length > 0) {
  console.log('\nFallas:');
  errores.forEach((texto) => console.log('  ✗ ' + texto));
  console.log(`\n${errores.length} falla(s).`);
  process.exit(1);
}
console.log('\n✓ El curso A1 pasa todas las revisiones.');
