import { BLOQUE_A2_1, BLOQUE_A2_2, BLOQUE_A2_3, BLOQUE_A2_4 } from '@/data/grammar/topics';

import type { ConfigCurso } from './tipos';

/** El bloque al que pertenece cada unidad del curso A2 (ids 13–24). */
const BLOQUE_DE_UNIDAD: Record<number, string> = {
  13: BLOQUE_A2_1,
  14: BLOQUE_A2_1,
  15: BLOQUE_A2_1,
  16: BLOQUE_A2_2,
  17: BLOQUE_A2_2,
  18: BLOQUE_A2_2,
  19: BLOQUE_A2_3,
  20: BLOQUE_A2_3,
  21: BLOQUE_A2_3,
  22: BLOQUE_A2_4,
  23: BLOQUE_A2_4,
  24: BLOQUE_A2_4,
};

/** Las unidades con sus tres formas (afirmativa, negativa, pregunta): to be + presente simple, going to, pasado simple, there is / are, should, pasado continuo, have got, will y may / might. */
const CON_FORMAS = [13, 16, 17, 18, 19, 21, 23, 24];

/**
 * Lista de verificación: los temas del plan de estudios de cada unidad. Cada uno se busca en los títulos de los bloques
 * de teoría de la unidad: si falta, la unidad se quedó a medias.
 */
const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  13: [
    ['Repaso de to be', /Repaso de to be/],
    ['To be: negativa, preguntas y respuestas cortas', /To be: negativa/],
    ['Presente simple: afirmativa', /presente simple: afirmativa/i],
    ['Presente simple: negativa y preguntas', /Presente simple: negativa/],
    ['Respuestas con TOO', /too: yo también/],
    ['Respuestas con EITHER', /either: yo tampoco/],
  ],
  14: [
    ['Formas verbales después de CAN, CAN\'T', /can y can't/],
    ['Formas verbales después de LOVE, LIKE', /Love, like, hate/],
    ['Verbo + to / verbo + -ing', /Verbo \+ -ing/],
    ['Preposiciones', /Preposiciones/],
    ['Pronombres objeto', /Pronombres objeto/],
    ['Pronombres indefinidos', /Pronombres indefinidos/],
  ],
  15: [
    ['Presente simple', /Presente simple: rutinas/],
    ['Presente continuo', /Presente continuo: ahora/],
    ['Diferencia entre presente simple y continuo', /¿Simple o continuo\?/],
    ['Unión de cláusulas con WHEN', /Cláusulas con when/],
    ['Unión de cláusulas con IF', /Cláusulas con if/],
  ],
};

COBERTURA[16] = [
  ['Futuro con GOING TO', /Going to: planes/],
  ['Going to: negativa y preguntas', /Going to: negativa/],
  ['Objetos indirectos', /Objetos indirectos/],
  ['Pronombres de objeto indirecto', /Pronombres de objeto indirecto/],
  ['Presente continuo para el futuro', /Presente continuo para el futuro/],
];
COBERTURA[17] = [
  ['Pasado simple: afirmativa', /Pasado simple: afirmativa/],
  ['Pasado simple: negativa', /Pasado simple: negativa/],
  ['Pasado simple: preguntas', /Preguntas de Sí \/ No/],
  ["Uso de 'Be born'", /Be born/],
  ['Uso general de determinantes', /Uso general/],
  ['Uso específico de determinantes', /Uso específico/],
];
COBERTURA[18] = [
  ['Is there? / Are there?', /Is there…\?/],
  ['Pronombres ONE y SOME', /One y some/],
  ['Ofrecimientos con CAN', /Ofrecimientos con can/],
  ['Peticiones con CAN y COULD', /Peticiones con can y could/],
];

export const CONFIG_A2: ConfigCurso = {
  nivel: 'A2',
  ids: [13, 24],
  bloques: [BLOQUE_A2_1, BLOQUE_A2_2, BLOQUE_A2_3, BLOQUE_A2_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2'],
};
