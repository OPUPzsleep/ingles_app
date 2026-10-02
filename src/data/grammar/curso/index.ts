import { EXAMENES_CURSO_A1, FORMAS_CURSO_A1, UNIDADES_CURSO_A1 } from '@/data/grammar/curso-a1';
import { PRONUN_CURSO_A1 } from '@/data/grammar/curso-a1/pronunciacion';
import { EXAMENES_CURSO_A2, FORMAS_CURSO_A2, UNIDADES_CURSO_A2 } from '@/data/grammar/curso-a2';
import { PRONUN_CURSO_A2 } from '@/data/grammar/curso-a2/pronunciacion';
import type { CefrLevel, FormasUnidad, PronunUnit, QuizQuestion, Unit } from '@/types/grammar';

import { repartirRespuestas } from './ayuda';

/** Los cursos propios de la app (el resto de las unidades vienen del libro, en `units/`). */
export type NivelDeCurso = 'A1' | 'A2';

/** Un curso: sus unidades, formas, pronunciación y exámenes de bloque. */
export interface Curso {
  nivel: NivelDeCurso;
  /** El id interno de la primera unidad del curso (A1 = 1, A2 = 13). */
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
  25: 'absorbida en A2·U2 (verbo + -ing)',
  26: 'absorbida en A2·U2 (verbo + to)',
  27: 'sin coincidencia (contables e incontables 2)',
  28: 'absorbida en A2·U5 (the 1)',
  29: 'absorbida en A2·U5 (the 2)',
  30: 'sin coincidencia (noun + noun)',
  31: "absorbida en A2·U8 (-'s y of)",
  32: 'absorbida en A2·U9 (reflexivos)',
  33: 'absorbida en A2·U6 (there… and it…) y A2·U7 (it + be + adjetivo + to)',
  34: 'absorbida en A2·U2 (no / none / nothing / nobody)',
  35: 'sin coincidencia (much / many / little / few)',
  36: 'absorbida en A2·U5 (all / most / some / no / none)',
  37: 'sin coincidencia (adjetivos -ing / -ed)',
  38: 'sin coincidencia (adjetivos y adverbios 1)',
  39: 'sin coincidencia (enough / too)',
  40: 'absorbida en A2·U10 (comparativos 2)',
  41: 'sin coincidencia (superlativo)',
  42: 'sin coincidencia (during / for / while)',
  43: 'absorbida en A2·U8 (in / at / on, posición 2)',
  44: 'sin coincidencia (to / at / in / into)',
  45: 'sin coincidencia (phrasal verbs, introducción)',
};
