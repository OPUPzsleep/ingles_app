import { BLOQUE_A2_1, BLOQUE_A2_2, BLOQUE_A2_3, BLOQUE_A2_4, BLOQUE_EXTRA_A2 } from '@/data/grammar/topics';

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
  // Bloque extra (ids ≥ 1000)
  1001: BLOQUE_EXTRA_A2,
  1002: BLOQUE_EXTRA_A2,
  1003: BLOQUE_EXTRA_A2,
  1004: BLOQUE_EXTRA_A2,
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

COBERTURA[19] = [
  ['Infinitivos para expresar razones', /Infinitivo de propósito/],
  ["Estructura: It's + adjetivo + to", /It's \+ adjetivo \+ to/],
  ['Formas de dar consejos', /Dar consejos/],
  ['Formas de hacer sugerencias', /Hacer sugerencias/],
];
COBERTURA[20] = [
  ['Preguntas con Whose…?', /Whose/],
  ['Pronombres posesivos', /Pronombres posesivos/],
  ['Orden de los adjetivos', /orden de los adjetivos/i],
  ['Pronombres ONE y ONES', /One y ones/],
  ['Expresiones de ubicación después de sustantivos', /Ubicación después de un sustantivo/],
  ['Expresiones de ubicación después de pronombres', /Ubicación después de one y ones/],
];
COBERTURA[21] = [
  ['Pasado continuo: cuándo se usa', /Pasado continuo: ¿cuándo/],
  ['Afirmativas', /Afirmativa/],
  ['Negativas', /Negativa/],
  ['Preguntas', /Preguntas y respuestas/],
  ['Pronombres reflexivos', /Pronombres reflexivos/],
];

COBERTURA[22] = [
  ['Adjetivos comparativos con -er', /Comparativo con -er/],
  ['Adjetivos comparativos con more', /Comparativo con more/],
  ['Uso de More, Less y Fewer', /More, less y fewer/],
];
COBERTURA[23] = [
  ['Preguntas y respuestas para describir personas', /What does she look like/],
  ["Uso de 'Have got'", /Have got: afirmativa/],
  ['Frases con VERBO + -ING para identificar personas', /verbo \+ -ing/],
  ['Preposiciones para identificar personas', /Identificar personas con preposiciones/],
];
COBERTURA[24] = [
  ['Futuro con WILL', /Will: predicciones/],
  ['Futuro con MAY y MIGHT', /May y might/],
  ['Presente continuo y Going to: repaso y contraste', /Presente continuo y going to/],
  ['Cláusulas con IF y WHEN', /Cláusulas con if y when/],
  ['Cláusulas con AFTER y BEFORE', /after y before/],
];

// Bloque extra: temas del libro que el plan no incluye.
COBERTURA[1001] = [
  ['Dos sustantivos juntos', /Dos sustantivos juntos/],
  ['Plural del primer sustantivo', /primer sustantivo va en singular/],
  ["Noun + noun o 's", /Noun \+ noun o 's/],
  ['Con números', /Con números/],
];
COBERTURA[1002] = [
  ['During', /During \+ sustantivo/],
  ['For', /For \+ cuánto tiempo/],
  ['While', /While \+ una oración/],
  ['For o during', /For o during/],
];
COBERTURA[1003] = [
  ['To', /To: movimiento/],
  ['At', /At: un punto/],
  ['In', /In: dentro de/],
  ['Into', /Into: entrar/],
  ['Get in, get on', /get in, get on/],
];
COBERTURA[1004] = [
  ['Qué es un phrasal verb', /Qué es un phrasal verb/],
  ['Separables', /puedes separarlos/],
  ['No separables', /no se separan/],
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
