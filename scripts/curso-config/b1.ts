import { BLOQUE_B1_1, BLOQUE_B1_2, BLOQUE_B1_3, BLOQUE_B1_4 } from '@/data/grammar/topics';

import type { ConfigCurso } from './tipos';

/** El bloque al que pertenece cada unidad del curso B1 (ids 46–57). */
const BLOQUE_DE_UNIDAD: Record<number, string> = {
  46: BLOQUE_B1_1,
  47: BLOQUE_B1_1,
  48: BLOQUE_B1_1,
  49: BLOQUE_B1_2,
  50: BLOQUE_B1_2,
  51: BLOQUE_B1_2,
  52: BLOQUE_B1_3,
  53: BLOQUE_B1_3,
  54: BLOQUE_B1_3,
  55: BLOQUE_B1_4,
  56: BLOQUE_B1_4,
  57: BLOQUE_B1_4,
};

/** Las unidades con sus tres formas: presente perfecto, patrones de used to / would no (ver abajo), wish y condicional, presente perfecto continuo y pasiva. */
const CON_FORMAS = [47];

const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  46: [
    ['Adjetivos vs. adverbios de modo', /Adjetivo o adverbio/],
    ['Adverbios antes de adjetivos', /Adverbios antes de adjetivos/],
    ['Adverbios antes de adverbios', /Adverbios antes de adverbios/],
    ['Prefijos de adjetivos', /Prefijos de adjetivos/],
  ],
  47: [
    ['Afirmaciones en presente perfecto', /Presente perfecto: la forma/],
    ['Preguntas y respuestas en presente perfecto', /Preguntas y respuestas cortas/],
    ['Presente perfecto y pasado simple', /Presente perfecto o pasado simple/],
  ],
  48: [
    ['Superlativos de adjetivos', /Superlativo con -est/],
    ['Superlativos con sustantivos', /Superlativos con sustantivos/],
    ['Preguntas con How + adjetivo', /Preguntas con How \+ adjetivo/],
  ],
};

export const CONFIG_B1: ConfigCurso = {
  nivel: 'B1',
  ids: [46, 57],
  bloques: [BLOQUE_B1_1, BLOQUE_B1_2, BLOQUE_B1_3, BLOQUE_B1_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2', 'B1'],
};
