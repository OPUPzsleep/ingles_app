import { BLOQUE_1, BLOQUE_2, BLOQUE_3, BLOQUE_4 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { repartirRespuestas } from './ayuda';
import { FORMAS_BLOQUE_1, UNIDADES_BLOQUE_1 } from './bloque-1';
import { FORMAS_BLOQUE_2, UNIDADES_BLOQUE_2 } from './bloque-2';
import { FORMAS_BLOQUE_3, UNIDADES_BLOQUE_3 } from './bloque-3';
import { FORMAS_BLOQUE_4, UNIDADES_BLOQUE_4 } from './bloque-4';
import { EXAMEN_BLOQUE_1 } from './examen-1';
import { EXAMEN_BLOQUE_2 } from './examen-2';
import { EXAMEN_BLOQUE_3 } from './examen-3';
import { EXAMEN_BLOQUE_4 } from './examen-4';

/** Las unidades con la respuesta correcta de sus 5 ejercicios repartida entre A, B, C y D (cada unidad con otro reparto). */
const conRespuestasRepartidas = (unidades: Record<number, Unit>): Record<number, Unit> =>
  Object.fromEntries(
    Object.entries(unidades).map(([numero, unit]) => [numero, { ...unit, quiz: repartirRespuestas(unit.quiz, (Number(numero) - 1) * 5) }])
  );

/**
 * El curso A1: 12 unidades en 4 bloques (los números 1–12), con las formas de cada una y el examen de 20 ejercicios de
 * cada bloque (por nombre del tema). Las unidades se arman con lo mejor de las 12 unidades A1 del libro que reemplazan.
 */
export const UNIDADES_CURSO_A1: Record<number, Unit> = conRespuestasRepartidas({
  ...UNIDADES_BLOQUE_1,
  ...UNIDADES_BLOQUE_2,
  ...UNIDADES_BLOQUE_3,
  ...UNIDADES_BLOQUE_4,
});

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso que las tienen; una lista si hay varias estructuras. */
export const FORMAS_CURSO_A1: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_BLOQUE_1,
  ...FORMAS_BLOQUE_2,
  ...FORMAS_BLOQUE_3,
  ...FORMAS_BLOQUE_4,
};

/** Los exámenes de bloque: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_A1: Record<string, QuizQuestion[]> = {
  [BLOQUE_1]: repartirRespuestas(EXAMEN_BLOQUE_1),
  [BLOQUE_2]: repartirRespuestas(EXAMEN_BLOQUE_2),
  [BLOQUE_3]: repartirRespuestas(EXAMEN_BLOQUE_3),
  [BLOQUE_4]: repartirRespuestas(EXAMEN_BLOQUE_4),
};
