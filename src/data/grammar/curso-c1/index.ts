import { BLOQUE_C1_1, BLOQUE_C1_2, BLOQUE_C1_3, BLOQUE_C1_4 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { UNIDADES_BLOQUE_1 } from './bloque-1';
import { UNIDADES_BLOQUE_2 } from './bloque-2';
import { UNIDADES_BLOQUE_3 } from './bloque-3';
import { UNIDADES_BLOQUE_4 } from './bloque-4';
import { EXAMEN_C1_BLOQUE_1 } from './examen-1';
import { EXAMEN_C1_BLOQUE_2 } from './examen-2';
import { EXAMEN_C1_BLOQUE_3 } from './examen-3';
import { EXAMEN_C1_BLOQUE_4 } from './examen-4';

/**
 * El curso C1: 12 unidades en 4 bloques (ids internos 146–157, que se ven como Unidad 1–12 del nivel). C1 no tenía
 * unidades en el libro, así que sus ids son nuevos. Las respuestas se reparten entre A, B, C y D en `curso/index.ts`.
 */
export const UNIDADES_CURSO_C1: Record<number, Unit> = {
  ...UNIDADES_BLOQUE_1,
  ...UNIDADES_BLOQUE_2,
  ...UNIDADES_BLOQUE_3,
  ...UNIDADES_BLOQUE_4,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso C1 que las tienen. */
export const FORMAS_CURSO_C1: Record<number, FormasUnidad | FormasUnidad[]> = {};

/** Los exámenes de bloque del C1: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_C1: Record<string, QuizQuestion[]> = {
  [BLOQUE_C1_1]: EXAMEN_C1_BLOQUE_1,
  [BLOQUE_C1_2]: EXAMEN_C1_BLOQUE_2,
  [BLOQUE_C1_3]: EXAMEN_C1_BLOQUE_3,
  [BLOQUE_C1_4]: EXAMEN_C1_BLOQUE_4,
};
