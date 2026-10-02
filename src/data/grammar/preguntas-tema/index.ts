import { EXAMENES_CURSO } from '@/data/grammar/curso';
import type { CefrLevel, QuizQuestion } from '@/types/grammar';

import { PREGUNTAS_TEMA_A2 } from './a2';
import { PREGUNTAS_TEMA_B1 } from './b1';
import { PREGUNTAS_TEMA_B2 } from './b2';

const POR_NIVEL: Partial<Record<CefrLevel, Record<string, QuizQuestion[]>>> = {
  // En A1 las preguntas propias de cada tema son el examen de 20 de cada bloque del curso.
  A1: EXAMENES_CURSO.A1 ?? {},
  // En A2 las preguntas propias de los bloques del curso son sus exámenes de 20; las viejas (sin uso) se conservan.
  A2: { ...PREGUNTAS_TEMA_A2, ...(EXAMENES_CURSO.A2 ?? {}) },
  // En B1 también: las preguntas propias de los bloques del curso son sus exámenes de 20.
  B1: { ...PREGUNTAS_TEMA_B1, ...(EXAMENES_CURSO.B1 ?? {}) },
  // En B2 también: las preguntas propias de los bloques del curso son sus exámenes de 20.
  B2: { ...PREGUNTAS_TEMA_B2, ...(EXAMENES_CURSO.B2 ?? {}) },
};

/**
 * Preguntas propias de un tema dentro de un nivel (por ejemplo, "Present Perfect" en B2). Se suman a las de las
 * unidades de ese tema y nivel para que cada tema tenga al menos 12 preguntas con las que armar su quiz.
 */
export function preguntasExtraDeTema(nivel: CefrLevel, tema: string): QuizQuestion[] {
  return POR_NIVEL[nivel]?.[tema] ?? [];
}
