import type { CefrLevel, QuizQuestion } from '@/types/grammar';

import { PREGUNTAS_TEMA_A1 } from './a1';
import { PREGUNTAS_TEMA_A2 } from './a2';
import { PREGUNTAS_TEMA_B1 } from './b1';
import { PREGUNTAS_TEMA_B2 } from './b2';

const POR_NIVEL: Partial<Record<CefrLevel, Record<string, QuizQuestion[]>>> = {
  A1: PREGUNTAS_TEMA_A1,
  A2: PREGUNTAS_TEMA_A2,
  B1: PREGUNTAS_TEMA_B1,
  B2: PREGUNTAS_TEMA_B2,
};

/**
 * Preguntas propias de un tema dentro de un nivel (por ejemplo, "Present Perfect" en B2). Se suman a las de las
 * unidades de ese tema y nivel para que cada tema tenga al menos 12 preguntas con las que armar su quiz.
 */
export function preguntasExtraDeTema(nivel: CefrLevel, tema: string): QuizQuestion[] {
  return POR_NIVEL[nivel]?.[tema] ?? [];
}
