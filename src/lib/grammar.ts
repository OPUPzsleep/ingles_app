import { PRONUN_CURSO, UNIDADES_CURSO } from '@/data/grammar/curso';
import { LIBRO_DE_NUEVO } from '@/data/grammar/numeracion';
import { preguntasExtraDeTema } from '@/data/grammar/preguntas-tema';
import { PRONUN_DATA } from '@/data/grammar/pronunciation';
import { TOPICS } from '@/data/grammar/topics';
import { UNITS } from '@/data/grammar/units';
import { VOCAB_TOPICS } from '@/data/vocabulario/tematico';
import { CEFR_LEVELS, CefrLevel, PronunUnit, QuizQuestion, Topic, VocabEntry } from '@/types/grammar';

export function getUnit(num: number) {
  return UNITS[num];
}

/** true si `level` es igual o más fácil que `maxLevel` (A1 <= A2 <= B1 <= B2 <= C1). */
export function isAtOrBelowLevel(level: CefrLevel, maxLevel: CefrLevel): boolean {
  return CEFR_LEVELS.indexOf(level) <= CEFR_LEVELS.indexOf(maxLevel);
}

/** Niveles que tienen unidades, de más fácil a más difícil (A1 → B2). */
export const NIVELES: CefrLevel[] = CEFR_LEVELS.filter((nivel) =>
  Object.values(UNITS).some((unit) => unit.level === nivel)
);

export function esNivel(valor: unknown): valor is CefrLevel {
  return typeof valor === 'string' && (NIVELES as string[]).includes(valor);
}

/** Orden de dos ids: primero por nivel y, dentro del nivel, por id (los ids de unidades que vuelvan a agregarse serán ≥ 1000). */
const porNivelEId = (a: number, b: number) =>
  CEFR_LEVELS.indexOf(UNITS[a].level) - CEFR_LEVELS.indexOf(UNITS[b].level) || a - b;

const UNIDADES_POR_NIVEL = new Map<CefrLevel, number[]>();

/** Las unidades visibles de un nivel (ids internos), en orden. Los ids pueden tener huecos: para el número que se ve, `numeroEnNivel`. */
export function unidadesDeNivel(nivel: CefrLevel): number[] {
  let lista = UNIDADES_POR_NIVEL.get(nivel);
  if (!lista) {
    lista = Object.keys(UNITS)
      .map(Number)
      .filter((n) => UNITS[n].level === nivel)
      .sort(porNivelEId);
    UNIDADES_POR_NIVEL.set(nivel, lista);
  }
  return lista;
}

/** El número que se ve de una unidad dentro de su nivel (A2 → 1–12…), o null si el id no es una unidad visible. */
export function numeroEnNivel(id: number): number | null {
  const unidad = UNITS[id];
  if (!unidad) return null;
  return unidadesDeNivel(unidad.level).indexOf(id) + 1;
}

/** El id interno de la unidad número `n` de un nivel (A2 · Unidad 5), o null si no existe. */
export function idDeUnidadEnNivel(nivel: CefrLevel, n: number): number | null {
  return unidadesDeNivel(nivel)[n - 1] ?? null;
}

/** Cómo se nombra una unidad en pantalla: «A2 · Unidad 5» (o «Unidad 5» con `sinNivel`). */
export function etiquetaDeUnidad(id: number, sinNivel = false): string {
  const unidad = UNITS[id];
  const numero = numeroEnNivel(id);
  if (!unidad || numero === null) return `Unidad ${id}`;
  return sinNivel ? `Unidad ${numero}` : `${unidad.level} · Unidad ${numero}`;
}

/** La etiqueta de una unidad vecina (botones «← / →»): con el nivel solo si cambia respecto al de la unidad que se ve. */
export function etiquetaDeVecina(id: number, nivelActual: CefrLevel): string {
  return etiquetaDeUnidad(id, UNITS[id]?.level === nivelActual);
}

/** Cuántos de los ids guardados como estudiados son de unidades que existen (los de unidades escondidas no cuentan). */
export function contarUnidadesHechas(doneUnits: number[]): number {
  return new Set(doneUnits.filter((n) => UNITS[n])).size;
}

/** El recorrido completo, por nivel (todo A1, luego todo A2…) y, dentro del nivel, por id. */
export const RUTA: number[] = Object.keys(UNITS).map(Number).sort(porNivelEId);

/** Unidad anterior y siguiente dentro del recorrido por niveles (null en los extremos). */
export function vecinasEnRuta(num: number): { anterior: number | null; siguiente: number | null } {
  const i = RUTA.indexOf(num);
  if (i < 0) return { anterior: null, siguiente: null };
  return { anterior: i > 0 ? RUTA[i - 1] : null, siguiente: i < RUTA.length - 1 ? RUTA[i + 1] : null };
}

export function progresoDeNivel(nivel: CefrLevel, doneUnits: number[]) {
  const unidades = unidadesDeNivel(nivel);
  const hechas = unidades.filter((n) => doneUnits.includes(n)).length;
  return { hechas, total: unidades.length, completo: unidades.length > 0 && hechas === unidades.length };
}

export function siguienteNivel(nivel: CefrLevel): CefrLevel | null {
  const i = NIVELES.indexOf(nivel);
  return i >= 0 && i < NIVELES.length - 1 ? NIVELES[i + 1] : null;
}

/** Un tema dentro de un nivel: sus unidades (en orden) y, al final, su quiz. */
export interface SeccionTema {
  tema: Topic;
  unidades: number[];
}

/** Los temas que tiene un nivel (en el orden de `TOPICS`), cada uno con sus unidades de ese nivel. */
export function seccionesDeNivel(nivel: CefrLevel): SeccionTema[] {
  const unidades = unidadesDeNivel(nivel);
  return TOPICS.map((tema) => ({ tema, unidades: unidades.filter((n) => UNITS[n].topic === tema.name) })).filter(
    (seccion) => seccion.unidades.length > 0
  );
}

/** La sección de un tema dentro de un nivel, o null si ese nivel no tiene unidades de ese tema. */
export function seccionDeTema(nivel: CefrLevel, nombreTema: string): SeccionTema | null {
  return seccionesDeNivel(nivel).find((seccion) => seccion.tema.name === nombreTema) ?? null;
}

/** La sección (tema dentro de un nivel) a la que pertenece una unidad. */
export function seccionDeUnidad(num: number): SeccionTema | null {
  const unidad = UNITS[num];
  return unidad ? seccionDeTema(unidad.level, unidad.topic) : null;
}

/** El tema que sigue al dado dentro del mismo nivel (null si es el último). */
export function siguienteSeccion(nivel: CefrLevel, nombreTema: string): SeccionTema | null {
  const secciones = seccionesDeNivel(nivel);
  const i = secciones.findIndex((seccion) => seccion.tema.name === nombreTema);
  return i >= 0 && i < secciones.length - 1 ? secciones[i + 1] : null;
}

export function progresoDeSeccion(seccion: SeccionTema, doneUnits: number[]) {
  const hechas = seccion.unidades.filter((n) => doneUnits.includes(n)).length;
  return { hechas, total: seccion.unidades.length };
}

/** Clave con la que se guarda el mejor resultado del quiz de un tema dentro de un nivel. */
export function claveQuizTema(nivel: CefrLevel, nombreTema: string): string {
  return `${nivel}|${nombreTema}`;
}

/**
 * Cómo se muestra un tema dentro de un nivel: casi siempre su nombre e icono, salvo donde el nombre confundiría.
 * "Past Perfect" junta cuatro unidades del libro y en A2 solo está "used to".
 */
const ETIQUETA_EN_NIVEL: Record<string, { nombre: string; icono: string }> = {
  'A2|Past Perfect': { nombre: 'used to', icono: '🕰️' },
};

export function etiquetaDeTema(nivel: CefrLevel, tema: Topic): { nombre: string; icono: string } {
  return ETIQUETA_EN_NIVEL[claveQuizTema(nivel, tema.name)] ?? { nombre: tema.name, icono: tema.icon };
}

/**
 * Siguiente unidad recomendada, siguiendo el recorrido por niveles (todo A1, luego todo A2…): la primera
 * sin completar cuyo nivel esté en o por debajo del nivel actual del usuario. Si ya no queda ninguna dentro
 * de su nivel, cae a la primera sin hacer de todo el recorrido (para que la app nunca se quede sin sugerencia).
 */
export function nextRecommendedUnit(doneUnits: number[], userLevel: CefrLevel): number {
  const pendingAtLevel = RUTA.find(
    (n) => !doneUnits.includes(n) && isAtOrBelowLevel(UNITS[n].level, userLevel)
  );
  if (pendingAtLevel !== undefined) return pendingAtLevel;
  return RUTA.find((n) => !doneUnits.includes(n)) ?? 1;
}

/**
 * La pronunciación de una unidad: la suya si tiene, y si no la del "ancla" más cercana hacia atrás en el orden
 * del libro (los números actuales siguen los niveles, no el libro, así que se compara por el número del libro).
 * Las unidades de un curso (A1, A2) usan solo la suya; las anclas del libro que no son de un curso quedan para
 * repartir la pronunciación entre el resto de las unidades.
 */
export function getPronunVocab(num: number): PronunUnit | null {
  if (UNIDADES_CURSO[num]) return PRONUN_CURSO[num] ?? null;
  if (PRONUN_DATA[num]) return PRONUN_DATA[num];
  const delLibro = LIBRO_DE_NUEVO[num - 1];
  if (delLibro === undefined) return null;
  let mejor: number | null = null;
  let mejorDelLibro = -1;
  for (const clave of Object.keys(PRONUN_DATA).map(Number)) {
    const claveDelLibro = LIBRO_DE_NUEVO[clave - 1];
    if (claveDelLibro <= delLibro && claveDelLibro > mejorDelLibro) {
      mejor = clave;
      mejorDelLibro = claveDelLibro;
    }
  }
  return mejor !== null ? PRONUN_DATA[mejor] : null;
}

export interface VocabResult extends VocabEntry {
  /** Número de unidad de gramática, o 0 si viene de un tema de vocabulario. */
  unit: number;
  /** Nombre del tema, solo para entradas que no vienen de una unidad. */
  topicName?: string;
}

/**
 * Junta todo el vocabulario disponible: las palabras "ancla" de pronunciación,
 * las dailyWords de cada unidad de gramática, y los temas de vocabulario
 * independientes (números, familia, comida, etc.).
 */
export function getAllVocab(): VocabResult[] {
  const all: VocabResult[] = [];

  // Las anclas del libro de las unidades que ya son de un curso no se cuentan: el curso trae las suyas.
  const pronunciaciones: Record<number, PronunUnit> = {
    ...Object.fromEntries(Object.entries(PRONUN_DATA).filter(([clave]) => !UNIDADES_CURSO[Number(clave)])),
    ...PRONUN_CURSO,
  };
  const pronunKeys = Object.keys(pronunciaciones)
    .map(Number)
    .sort((a, b) => a - b);
  for (const key of pronunKeys) {
    for (const entry of pronunciaciones[key].vocab) {
      all.push({ ...entry, unit: key });
    }
  }

  for (const num of Object.keys(UNITS).map(Number).sort((a, b) => a - b)) {
    for (const entry of UNITS[num].dailyWords ?? []) {
      all.push({ ...entry, unit: num });
    }
  }

  for (const topic of VOCAB_TOPICS) {
    for (const entry of topic.words) {
      all.push({ ...entry, unit: 0, topicName: topic.name });
    }
  }

  return all;
}

interface PooledQuizQuestion extends QuizQuestion {
  unitTitle: string;
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

export function buildUnitQuizPool(num: number): PooledQuizQuestion[] {
  const unit = UNITS[num];
  if (!unit) return [];
  return shuffle(unit.quiz.map((q) => ({ ...q, unitTitle: unit.title })));
}

/** Cuántas preguntas tiene el quiz de un tema dentro de un nivel (siempre hay al menos 10 para armarlo). */
export const PREGUNTAS_QUIZ_TEMA = 12;

/** Cuántas preguntas tiene el quiz final de un nivel (o todas las del nivel, si son menos). */
export const PREGUNTAS_QUIZ_NIVEL = 20;

/**
 * Las preguntas de una sección (un tema dentro de un nivel), en grupos: un grupo por unidad con las preguntas de su
 * quiz y, si el tema tiene preguntas propias de repaso (`preguntas-tema`), un grupo más con ellas.
 */
function gruposDeSeccion(nivel: CefrLevel, seccion: SeccionTema): PooledQuizQuestion[][] {
  const grupos = seccion.unidades.map((n) =>
    shuffle(UNITS[n].quiz.map((q) => ({ ...q, unitTitle: `${etiquetaDeUnidad(n, true)}: ${UNITS[n].title}` })))
  );
  const propias = preguntasExtraDeTema(nivel, seccion.tema.name);
  if (propias.length > 0) {
    const { nombre } = etiquetaDeTema(nivel, seccion.tema);
    grupos.push(shuffle(propias.map((q) => ({ ...q, unitTitle: `Repaso de ${nombre}` }))));
  }
  return grupos.filter((grupo) => grupo.length > 0);
}

/**
 * Junta `cantidad` preguntas tomando una de cada grupo por vuelta (los grupos en orden al azar), para que salgan
 * repartidas entre todas las unidades y no de una sola. Devuelve menos si no alcanzan.
 */
function tomarPreguntas(grupos: PooledQuizQuestion[][], cantidad: number): PooledQuizQuestion[] {
  const elegidas: PooledQuizQuestion[] = [];
  for (let vuelta = 0; elegidas.length < cantidad; vuelta++) {
    const enVuelta = shuffle(grupos)
      .map((grupo) => grupo[vuelta])
      .filter(Boolean);
    if (enVuelta.length === 0) break;
    for (const pregunta of enVuelta) {
      if (elegidas.length < cantidad) elegidas.push(pregunta);
    }
  }
  return shuffle(elegidas);
}

function totalPreguntasDeSeccion(nivel: CefrLevel, seccion: SeccionTema): number {
  const deUnidades = seccion.unidades.reduce((suma, n) => suma + UNITS[n].quiz.length, 0);
  return deUnidades + preguntasExtraDeTema(nivel, seccion.tema.name).length;
}

/**
 * Cuántas preguntas saldrán en el quiz de un tema dentro de un nivel. Un bloque del curso A1 es un examen con sus
 * ejercicios propios (20); los demás temas arman su quiz con las preguntas de sus unidades y de repaso.
 */
export function cantidadPreguntasQuizTema(nivel: CefrLevel, seccion: SeccionTema): number {
  const examen = seccion.tema.examen;
  if (examen) return Math.min(examen, preguntasExtraDeTema(nivel, seccion.tema.name).length);
  return Math.min(PREGUNTAS_QUIZ_TEMA, totalPreguntasDeSeccion(nivel, seccion));
}

/**
 * Preguntas del quiz de un tema dentro de un nivel: las de sus unidades más las propias de repaso del tema. El examen de
 * un bloque del curso A1 usa solo sus ejercicios propios, distintos a los de sus unidades.
 */
export function buildTopicQuizPool(
  nivel: CefrLevel,
  seccion: SeccionTema,
  cantidad = PREGUNTAS_QUIZ_TEMA
): PooledQuizQuestion[] {
  const examen = seccion.tema.examen;
  if (examen) {
    const { nombre } = etiquetaDeTema(nivel, seccion.tema);
    const propias = preguntasExtraDeTema(nivel, seccion.tema.name).map((q) => ({ ...q, unitTitle: `Examen · ${nombre}` }));
    return shuffle(propias).slice(0, examen);
  }
  return tomarPreguntas(gruposDeSeccion(nivel, seccion), cantidad);
}

/** Cuántas preguntas saldrán en el quiz final del nivel. */
export function cantidadPreguntasQuizNivel(nivel: CefrLevel): number {
  const total = seccionesDeNivel(nivel).reduce((suma, seccion) => suma + totalPreguntasDeSeccion(nivel, seccion), 0);
  return Math.min(PREGUNTAS_QUIZ_NIVEL, total);
}

/**
 * Preguntas del quiz final de un nivel, sacadas de todos sus temas (las de cada unidad y las de repaso del tema).
 * Se toma una de cada grupo por vuelta hasta juntar la cantidad pedida, así se reparten entre todo el nivel.
 */
export function buildLevelQuizPool(nivel: CefrLevel, cantidad = PREGUNTAS_QUIZ_NIVEL): PooledQuizQuestion[] {
  const grupos = seccionesDeNivel(nivel).flatMap((seccion) => gruposDeSeccion(nivel, seccion));
  return tomarPreguntas(grupos, cantidad);
}
