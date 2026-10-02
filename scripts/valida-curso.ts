/**
 * Revisa el contenido de un curso (A1: unidades 1–12; A2: unidades 13–24; cada una con el examen de 20 ejercicios de
 * sus 4 bloques):
 *  - cada unidad trae sus 5 ejercicios y cada bloque su examen de 20, todos con 4 opciones distintas, una respuesta
 *    marcada y su explicación, y sin repetirse entre unidades y exámenes (ni entre cursos);
 *  - cada tema (bloque de teoría) trae al menos 3 ejemplos con su traducción, y las unidades de verbos sus tres formas;
 *  - cada tema del plan de estudios aparece en su unidad (lista de verificación);
 *  - los enlaces de «Para profundizar» llevan a algo que existe, y las palabras pedidas a Vocabulario están ahí;
 *  - invariantes entre cursos y unidades visibles (títulos, formas, temas, nombres de examen) y el registro de escondidas;
 *  - avisos (no fallan): palabras en inglés que no son del vocabulario del nivel, para revisarlas a mano.
 *
 * Se corre con `npx tsx scripts/valida-curso.ts a1|a2|b1|b2|c1`; con `--completo` exige las 12 unidades y los 4 exámenes.
 * Termina con error si algo falla.
 */
import { enlaceDeRelacionado } from '@/lib/grammar';
import { PALABRAS_FALTANTES } from '@/data/grammar/curso/ayuda';
import { CURSOS, ESCONDIDAS, type NivelDeCurso } from '@/data/grammar/curso';
import { FORMAS_UNIDAD } from '@/data/grammar/formas';
import { TOPICS } from '@/data/grammar/topics';
import { ALL_UNIT_TITLES } from '@/data/grammar/unit-titles';
import { UNITS } from '@/data/grammar/units';
import { GRAM_CONCEPTS } from '@/data/gramatica/concepts';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { CONFIG_A1 } from './curso-config/a1';
import { CONFIG_A2 } from './curso-config/a2';
import { CONFIG_B1 } from './curso-config/b1';
import { CONFIG_B2 } from './curso-config/b2';
import { CONFIG_C1 } from './curso-config/c1';

const COMPLETO = process.argv.includes('--completo');
const PEDIDO = process.argv.slice(2).find((arg: string) => /^(a1|a2|b1|b2|c1|b2)$/i.test(arg));
if (!PEDIDO) {
  console.error('Uso: npx tsx scripts/valida-curso.ts a1|a2|b1|b2|c1 [--completo]');
  process.exit(2);
}
const ELEGIDO = PEDIDO.toUpperCase() as NivelDeCurso;
const CONFIG = { A1: CONFIG_A1, A2: CONFIG_A2, B1: CONFIG_B1, B2: CONFIG_B2, C1: CONFIG_C1 }[ELEGIDO];
const CURSO = CURSOS[ELEGIDO];
const { bloques: BLOQUES, bloqueDeUnidad: BLOQUE_DE_UNIDAD, conFormas: CON_FORMAS, cobertura: COBERTURA } = CONFIG;
const NIVEL = ELEGIDO;
const [PRIMER_ID, ULTIMO_ID] = CONFIG.ids;
/** Desde este id las unidades son del bloque extra del nivel. */
const ID_EXTRA = 1000;

/** Los enlaces de «Para profundizar» de las unidades del curso, con el título al que apuntan (se imprimen al final). */
const enlaces: string[] = [];
const errores: string[] = [];
const avisos: string[] = [];
const error = (donde: string, mensaje: string) => errores.push(`${donde}: ${mensaje}`);
const aviso = (donde: string, mensaje: string) => avisos.push(`${donde}: ${mensaje}`);

const normalizar = (texto: string) => texto.toLowerCase().replace(/\s+/g, ' ').trim();
/** Caracteres de control que no deben estar en ningún texto (salvo el salto de línea). */
const CONTROL = /[\u0000-\u0009\u000b-\u001f]/;

// ─── Vocabulario del nivel (para los avisos) ───

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
  if (!CONFIG.nivelesDeVocabulario.includes(tema.level)) continue;
  for (const entrada of tema.words) for (const palabra of entrada.w.toLowerCase().split(/[^a-z']+/)) if (palabra) CONOCIDAS.add(palabra);
}

/** ¿La palabra (o su base: sin -s, -es, -ed, -ing, -ly, con 's) es del vocabulario del nivel? */
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
  const donde = `${NIVEL} · id ${num}`;
  if (unit.level !== NIVEL) error(donde, `el nivel es ${unit.level}`);
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

  const formas = CURSO.formas[num];
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

  const pronunciacion = CURSO.pronunciacion[num];
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
    const enlace = enlaceDeRelacionado(relacionado);
    if (!enlace) {
      error(donde, `un enlace de «Para profundizar» lleva a una unidad que no es visible: ${JSON.stringify(relacionado)}`);
      continue;
    }
    enlaces.push(`${donde} → ${enlace.etiqueta}`);
    const unidad = /^\/unidad\/(\d+)$/.exec(enlace.ruta);
    const concepto = /^\/gramatica\/concepto\/([\w-]+)$/.exec(enlace.ruta);
    if (unidad) {
      if (!UNITS[Number(unidad[1])]) error(donde, `el enlace «${enlace.etiqueta}» lleva a una unidad que no existe`);
    } else if (concepto) {
      if (!GRAM_CONCEPTS.some((c) => c.id === concepto[1])) error(donde, `el enlace «${enlace.etiqueta}» lleva a una página que no existe`);
    } else {
      error(donde, `el enlace «${enlace.etiqueta}» tiene una ruta rara: ${enlace.ruta}`);
    }
  }

  // Cada tema del plan está en su unidad.
  const titulos = unit.explain.map((bloque) => bloque.head).join('\n');
  for (const [tema, buscar] of COBERTURA[num] ?? []) {
    if (!buscar.test(titulos)) error(donde, `no cubre «${tema}» (no encontré ${buscar})`);
  }
  if (!COBERTURA[num]) aviso(donde, 'no tiene lista de verificación de temas');

  const raras = palabrasDesconocidas(textosEnIngles);
  if (raras.length > 0) aviso(donde, `palabras fuera del vocabulario ${NIVEL} para revisar: ${raras.join(', ')}`);

  console.log(
    `  Unidad ${String(num).padStart(2)} · ${unit.title}\n` +
      `      teoría ${unit.explain.length} bloques / ${ejemplos} ejemplos · formas ${listaDeFormas.length} · ejercicios ${unit.quiz.length} · ` +
      `tarjetas ${unit.flashcards.length} · consejos ${unit.tips?.length ?? 0} · palabras ${unit.dailyWords?.length ?? 0}`
  );
}

console.log(`\n== Curso ${NIVEL}: unidades ==`);
const numeros = Object.keys(CURSO.unidades).map(Number).sort((a, b) => a - b);
if (COMPLETO) {
  for (let n = PRIMER_ID; n <= ULTIMO_ID; n++) if (!CURSO.unidades[n]) error(`${NIVEL} · id ${n}`, 'falta');
}
for (const num of numeros) {
  // Los ids ≥ 1000 son del bloque extra (opcional, sin examen).
  if (num < PRIMER_ID || (num > ULTIMO_ID && num < ID_EXTRA)) error(`${NIVEL} · id ${num}`, `las unidades del curso son de la ${PRIMER_ID} a la ${ULTIMO_ID} (o del bloque extra, desde la ${ID_EXTRA})`);
  else revisarUnidad(num, CURSO.unidades[num]);
}

console.log(`\n== Curso ${NIVEL}: exámenes de bloque ==`);
const todas = new Map<string, string>();
// Los ejercicios de los otros cursos también cuentan: no se repiten entre cursos.
for (const otro of Object.values(CURSOS)) {
  if (otro === CURSO) continue;
  for (const [id, unit] of Object.entries(otro.unidades)) for (const q of unit.quiz) todas.set(clave(q), `${otro.nivel} · id ${id}`);
  for (const [tema, examen] of Object.entries(otro.examenes)) for (const q of examen) todas.set(clave(q), `examen «${tema}» (${otro.nivel})`);
}
for (const num of numeros) {
  for (const q of CURSO.unidades[num].quiz) {
    const otra = todas.get(clave(q));
    if (otra) error(`${NIVEL} · id ${num}`, `«${q.q}» ya está en ${otra}`);
    todas.set(clave(q), `unidad ${num}`);
  }
}
for (const bloque of BLOQUES) {
  const examen = CURSO.examenes[bloque];
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
  if (raras.length > 0) aviso(donde, `palabras fuera del vocabulario ${NIVEL} para revisar: ${raras.join(', ')}`);
  const reparto = posiciones(examen);
  if (Math.max(...reparto) > 6) aviso(donde, `la respuesta correcta se concentra en una letra: ${reparto.join(' / ')} (A / B / C / D)`);
  console.log(`  ${bloque}: ${examen.length} ejercicios · respuestas A/B/C/D: ${reparto.join(' / ')}`);
}

// ─── Invariantes entre cursos y unidades visibles ───

console.log('\n== Invariantes ==');
for (const id of Object.keys(UNITS).map(Number)) {
  if (!ALL_UNIT_TITLES[id]) error(`Unidad ${id}`, 'está en UNITS y no tiene título en ALL_UNIT_TITLES');
}
for (const id of Object.keys(FORMAS_UNIDAD).map(Number)) {
  if (!UNITS[id]) error(`Formas ${id}`, 'FORMAS_UNIDAD tiene una clave que no es una unidad');
}
for (const curso of Object.values(CURSOS)) {
  for (const id of Object.keys(curso.unidades).map(Number)) {
    if (FORMAS_UNIDAD[id] !== curso.formas[id]) error(`${curso.nivel} · id ${id}`, 'las formas visibles no son las del curso (¿clave vieja pegada al id?)');
  }
}
const nombresDeTema = new Set(TOPICS.map((tema) => tema.name));
for (const curso of Object.values(CURSOS)) {
  for (const tema of Object.keys(curso.examenes)) {
    if (!nombresDeTema.has(tema)) error(`Examen «${tema}»`, `no es un tema de TOPICS (${curso.nivel})`);
  }
  for (const [id, unit] of Object.entries(curso.unidades)) {
    if (!nombresDeTema.has(unit.topic)) error(`${curso.nivel} · id ${id}`, `su tema «${unit.topic}» no está en TOPICS`);
  }
}
{
  const vistos = new Map<string, string>();
  for (const curso of Object.values(CURSOS)) {
    for (const tema of Object.keys(curso.examenes)) {
      const otro = vistos.get(tema);
      if (otro) error(`Examen «${tema}»`, `el nombre está repetido entre ${otro} y ${curso.nivel}`);
      vistos.set(tema, curso.nivel);
    }
  }
}
console.log(`  Enlaces «Para profundizar» a otras unidades: ${enlaces.filter((e) => e.includes('➡️')).length}`);
for (const enlace of enlaces.filter((e) => e.includes('➡️'))) console.log(`    ${enlace}`);
const escondidas = Object.entries(ESCONDIDAS);
console.log(`  Unidades escondidas del libro: ${escondidas.length}`);
for (const [id, motivo] of escondidas) {
  console.log(`    ${id}: ${motivo}`);
  if (UNITS[Number(id)]) error(`Unidad ${id}`, 'está en ESCONDIDAS y sigue en UNITS');
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
console.log(`\n✓ El curso ${NIVEL} pasa todas las revisiones.`);
