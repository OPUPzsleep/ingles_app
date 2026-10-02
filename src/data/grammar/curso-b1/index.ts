import { BLOQUE_B1_1 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { FORMAS_BLOQUE_1, UNIDADES_BLOQUE_1 } from './bloque-1';
import { EXAMEN_B1_BLOQUE_1 } from './examen-1';

/**
 * El curso B1: 12 unidades en 4 bloques (ids internos 46–57, que se ven como Unidad 1–12 del nivel). Tapa a las
 * unidades 46–57 del libro y el resto de B1 (58–112) se esconde (`ESCONDIDAS`). Las respuestas se reparten entre A, B,
 * C y D en `curso/index.ts`.
 */
export const UNIDADES_CURSO_B1: Record<number, Unit> = {
  ...UNIDADES_BLOQUE_1,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso B1 que las tienen. */
export const FORMAS_CURSO_B1: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_BLOQUE_1,
};

/** Los exámenes de bloque del B1: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_B1: Record<string, QuizQuestion[]> = {
  [BLOQUE_B1_1]: EXAMEN_B1_BLOQUE_1,
};
