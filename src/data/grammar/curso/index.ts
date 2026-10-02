import { EXAMENES_CURSO_A1, FORMAS_CURSO_A1, UNIDADES_CURSO_A1 } from '@/data/grammar/curso-a1';
import { PRONUN_CURSO_A1 } from '@/data/grammar/curso-a1/pronunciacion';
import { EXAMENES_CURSO_A2, FORMAS_CURSO_A2, UNIDADES_CURSO_A2 } from '@/data/grammar/curso-a2';
import { PRONUN_CURSO_A2 } from '@/data/grammar/curso-a2/pronunciacion';
import { EXAMENES_CURSO_B1, FORMAS_CURSO_B1, UNIDADES_CURSO_B1 } from '@/data/grammar/curso-b1';
import { PRONUN_CURSO_B1 } from '@/data/grammar/curso-b1/pronunciacion';
import { EXAMENES_CURSO_B2, FORMAS_CURSO_B2, UNIDADES_CURSO_B2 } from '@/data/grammar/curso-b2';
import { PRONUN_CURSO_B2 } from '@/data/grammar/curso-b2/pronunciacion';
import { EXAMENES_CURSO_C1, FORMAS_CURSO_C1, UNIDADES_CURSO_C1 } from '@/data/grammar/curso-c1';
import { PRONUN_CURSO_C1 } from '@/data/grammar/curso-c1/pronunciacion';
import type { CefrLevel, FormasUnidad, PronunUnit, QuizQuestion, Unit } from '@/types/grammar';

import { repartirRespuestas } from './ayuda';

/** Los cursos propios de la app (el resto de las unidades vienen del libro, en `units/`). */
export type NivelDeCurso = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

/** Un curso: sus unidades, formas, pronunciación y exámenes de bloque. */
export interface Curso {
  nivel: NivelDeCurso;
  /** El id interno de la primera unidad del curso (A1 = 1, A2 = 13, B1 = 46, B2 = 113, C1 = 146). */
  primerId: number;
  unidades: Record<number, Unit>;
  formas: Record<number, FormasUnidad | FormasUnidad[]>;
  pronunciacion: Record<number, PronunUnit>;
  /** Un examen de 20 ejercicios por nombre de tema (bloque). */
  examenes: Record<string, QuizQuestion[]>;
}

/** Las unidades con la respuesta correcta de sus 5 ejercicios repartida entre A, B, C y D (cada unidad con otro reparto). */
const conRespuestasRepartidas = (unidades: Record<number, Unit>, primerId: number): Record<number, Unit> =>
  Object.fromEntries(
    Object.entries(unidades).map(([id, unit]) => [id, { ...unit, quiz: repartirRespuestas(unit.quiz, (Number(id) - primerId) * 5) }])
  );

const conExamenesRepartidos = (examenes: Record<string, QuizQuestion[]>): Record<string, QuizQuestion[]> =>
  Object.fromEntries(Object.entries(examenes).map(([tema, preguntas]) => [tema, repartirRespuestas(preguntas)]));

export const CURSOS: Record<NivelDeCurso, Curso> = {
  A1: {
    nivel: 'A1',
    primerId: 1,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_A1, 1),
    formas: FORMAS_CURSO_A1,
    pronunciacion: PRONUN_CURSO_A1,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_A1),
  },
  A2: {
    nivel: 'A2',
    primerId: 13,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_A2, 13),
    formas: FORMAS_CURSO_A2,
    pronunciacion: PRONUN_CURSO_A2,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_A2),
  },
  B1: {
    nivel: 'B1',
    primerId: 46,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_B1, 46),
    formas: FORMAS_CURSO_B1,
    pronunciacion: PRONUN_CURSO_B1,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_B1),
  },
  B2: {
    nivel: 'B2',
    primerId: 113,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_B2, 113),
    formas: FORMAS_CURSO_B2,
    pronunciacion: PRONUN_CURSO_B2,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_B2),
  },
  C1: {
    nivel: 'C1',
    primerId: 146,
    unidades: conRespuestasRepartidas(UNIDADES_CURSO_C1, 146),
    formas: FORMAS_CURSO_C1,
    pronunciacion: PRONUN_CURSO_C1,
    examenes: conExamenesRepartidos(EXAMENES_CURSO_C1),
  },
};

const LISTA = Object.values(CURSOS);

/** Las unidades de todos los cursos por id interno (tapan a las del libro con el mismo id). */
export const UNIDADES_CURSO: Record<number, Unit> = Object.assign({}, ...LISTA.map((curso) => curso.unidades));

/** Las formas de las unidades de todos los cursos. */
export const FORMAS_CURSO: Record<number, FormasUnidad | FormasUnidad[]> = Object.assign({}, ...LISTA.map((curso) => curso.formas));

/** La pronunciación propia de cada unidad de los cursos. */
export const PRONUN_CURSO: Record<number, PronunUnit> = Object.assign({}, ...LISTA.map((curso) => curso.pronunciacion));

/** Los exámenes de bloque por nivel y nombre de tema. */
export const EXAMENES_CURSO: Partial<Record<CefrLevel, Record<string, QuizQuestion[]>>> = Object.fromEntries(
  LISTA.map((curso) => [curso.nivel, curso.examenes])
);

/**
 * Unidades del libro que se esconden (no se borran: sus archivos siguen en `units/`) y por qué: «absorbida en A2·U#» si
 * lo útil pasó a una unidad del curso, «sin coincidencia» si no hay tema equivalente en el plan. Cuando suban B1, B2 y
 * C1 se revisan y las que sigan sin coincidencia se vuelven a agregar. El validador las imprime.
 */
export const ESCONDIDAS: Record<number, string> = {
  // A2 del libro (25–45)
  25: 'absorbida en A2·U2 (verbo + -ing)',
  26: 'absorbida en A2·U2 (verbo + to)',
  27: 'absorbida en B1·U5 (contables e incontables 2)',
  28: 'absorbida en A2·U5 (the 1)',
  29: 'absorbida en A2·U5 (the 2)',
  30: 'sin coincidencia (noun + noun)',
  31: "absorbida en A2·U8 (-'s y of)",
  32: 'absorbida en A2·U9 (reflexivos)',
  33: 'absorbida en A2·U6 (there… and it…) y A2·U7 (it + be + adjetivo + to)',
  34: 'absorbida en A2·U2 (no / none / nothing / nobody)',
  35: 'absorbida en B1·U5 (much / many / little / few)',
  36: 'absorbida en A2·U5 (all / most / some / no / none)',
  37: 'absorbida en B1·U11 (adjetivos -ing / -ed)',
  38: 'absorbida en B1·U1 (adjetivos y adverbios 1)',
  39: 'absorbida en B1·U5 (enough / too)',
  40: 'absorbida en A2·U10 (comparativos 2)',
  41: 'absorbida en B1·U3 (superlativo)',
  42: 'sin coincidencia (during / for / while)',
  43: 'absorbida en A2·U8 (in / at / on, posición 2)',
  44: 'sin coincidencia (to / at / in / into)',
  45: 'sin coincidencia (phrasal verbs, introducción)',
  // B1 del libro (58–112); las 46–57 las tapa el curso B1
  58: 'absorbida en B1·U11 (may and might 2)',
  59: 'sin coincidencia (must mustn\'t needn\'t)',
  60: 'absorbida en B1·U6 (should 2)',
  61: 'absorbida en B1·U6 (I\'d better / it\'s time)',
  62: 'absorbida en B1·U4 (would)',
  63: 'absorbida en B1·U8 (if I do… and if I did…)',
  64: 'absorbida en B1·U8 (if I knew… I wish I knew…)',
  65: 'absorbida en B1·U12 (passive 1)',
  66: 'absorbida en B1·U12 (passive 2)',
  67: 'sin coincidencia (reported speech 1)',
  68: 'absorbida en B1·U9 (questions 2)',
  69: 'sin coincidencia (auxiliary verbs)',
  70: 'sin coincidencia (question tags)',
  71: 'absorbida en B1·U4 (verb + object + to)',
  72: 'absorbida en B1·U4 (verb + -ing or to 1)',
  73: 'sin coincidencia (verb + -ing or to 2)',
  74: 'absorbida en B1·U6 (prefer and would rather)',
  75: 'sin coincidencia (preposition + -ing)',
  76: 'sin coincidencia (be/get used to)',
  77: 'sin coincidencia (to…, for… and so that…)',
  78: 'sin coincidencia (adjective + to…)',
  79: 'sin coincidencia (the 3)',
  80: 'sin coincidencia (the 4)',
  81: 'sin coincidencia (names with/without the 1)',
  82: 'sin coincidencia (a friend of mine / my own)',
  83: 'sin coincidencia (both / neither / either)',
  84: 'sin coincidencia (all / every / whole)',
  85: 'sin coincidencia (each and every)',
  86: 'absorbida en B1·U7 (relative clauses 1)',
  87: 'absorbida en B1·U7 (relative clauses 2)',
  88: 'sin coincidencia (adjectives: order)',
  89: 'absorbida en B1·U1 (adjectives and adverbs 2)',
  90: 'sin coincidencia (so and such)',
  91: 'absorbida en B1·U1 (quite, pretty, rather)',
  92: 'sin coincidencia (comparative 3)',
  93: 'sin coincidencia (word order 1)',
  94: 'absorbida en B1·U10 (still / any more / yet / already)',
  95: 'sin coincidencia (although / though / even though)',
  96: 'sin coincidencia (in case)',
  97: 'sin coincidencia (unless / as long as)',
  98: 'sin coincidencia (by and until)',
  99: 'sin coincidencia (on time and in time)',
  100: 'sin coincidencia (in/at/on position 3)',
  101: 'sin coincidencia (in/on/at other)',
  102: 'sin coincidencia (by)',
  103: 'sin coincidencia (noun + preposition)',
  104: 'sin coincidencia (adjective + preposition 1)',
  105: 'sin coincidencia (verb + preposition 1)',
  106: 'sin coincidencia (verb + preposition 2)',
  107: 'absorbida en B1·U7 (phrasal verbs in/out)',
  108: 'absorbida en B1·U7 (phrasal verbs out)',
  109: 'absorbida en B1·U9 (phrasal verbs on/off 1)',
  110: 'absorbida en B1·U9 (phrasal verbs on/off 2)',
  111: 'sin coincidencia (phrasal verbs up/down)',
  112: 'sin coincidencia (phrasal verbs up 1)',
  // B2 del libro (125–145); las 113–124 las tapa el curso B2
  125: 'absorbida en B2·U3 (verb + preposition + -ing)',
  126: 'absorbida en B2·U3 (there is no point in -ing)',
  127: 'absorbida en B2·U3 (to… and preposition + -ing)',
  128: 'absorbida en B2·U5 (catch + persona + -ing; see somebody do/doing)',
  129: 'sin coincidencia (-ing clauses)',
  130: 'sin coincidencia (names with/without the 2)',
  131: 'absorbida en B2·U12 (relative clauses 3)',
  132: 'sin coincidencia (relative clauses 4)',
  133: 'sin coincidencia (relative clauses 5)',
  134: 'absorbida en B2·U12 (-ing and -ed clauses)',
  135: 'sin coincidencia (word order 2)',
  136: 'sin coincidencia (even)',
  137: 'absorbida en B2·U2 (as)',
  138: 'absorbida en B2·U2 (like and as)',
  139: 'sin coincidencia (like / as if)',
  140: 'sin coincidencia (adjective + preposition 2)',
  141: 'sin coincidencia (verb + preposition 3)',
  142: 'sin coincidencia (verb + preposition 4)',
  143: 'sin coincidencia (verb + preposition 5)',
  144: 'sin coincidencia (phrasal verbs up 2)',
  145: 'sin coincidencia (phrasal verbs away/back)',
};
