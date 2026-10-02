import { BLOQUE_B2_1, BLOQUE_B2_2, BLOQUE_B2_3, BLOQUE_B2_4 } from '@/data/grammar/topics';
import type { FormasUnidad, QuizQuestion, Unit } from '@/types/grammar';

import { FORMAS_BLOQUE_1, UNIDADES_BLOQUE_1 } from './bloque-1';
import { FORMAS_BLOQUE_2, UNIDADES_BLOQUE_2 } from './bloque-2';
import { FORMAS_BLOQUE_3, UNIDADES_BLOQUE_3 } from './bloque-3';
import { FORMAS_BLOQUE_4, UNIDADES_BLOQUE_4 } from './bloque-4';
import { EXAMEN_B2_BLOQUE_1 } from './examen-1';
import { EXAMEN_B2_BLOQUE_2 } from './examen-2';
import { EXAMEN_B2_BLOQUE_3 } from './examen-3';
import { EXAMEN_B2_BLOQUE_4 } from './examen-4';

/**
 * El curso B2: 12 unidades en 4 bloques (ids internos 113–124, que se ven como Unidad 1–12 del nivel). Tapa a las
 * unidades 113–124 del libro y el resto de B2 (125–145) se esconde (`ESCONDIDAS`). Las respuestas se reparten entre A,
 * B, C y D en `curso/index.ts`.
 */
export const UNIDADES_CURSO_B2: Record<number, Unit> = {
  ...UNIDADES_BLOQUE_1,
  ...UNIDADES_BLOQUE_2,
  ...UNIDADES_BLOQUE_3,
  ...UNIDADES_BLOQUE_4,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del curso B2 que las tienen. */
export const FORMAS_CURSO_B2: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_BLOQUE_1,
  ...FORMAS_BLOQUE_2,
  ...FORMAS_BLOQUE_3,
  ...FORMAS_BLOQUE_4,
};

/** Los exámenes de bloque del B2: 20 ejercicios por tema (bloque), distintos a los de las unidades. */
export const EXAMENES_CURSO_B2: Record<string, QuizQuestion[]> = {
  [BLOQUE_B2_1]: EXAMEN_B2_BLOQUE_1,
  [BLOQUE_B2_2]: EXAMEN_B2_BLOQUE_2,
  [BLOQUE_B2_3]: EXAMEN_B2_BLOQUE_3,
  [BLOQUE_B2_4]: EXAMEN_B2_BLOQUE_4,
};
