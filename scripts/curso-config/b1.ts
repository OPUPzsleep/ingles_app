import { BLOQUE_B1_1, BLOQUE_B1_2, BLOQUE_B1_3, BLOQUE_B1_4, BLOQUE_EXTRA_B1 } from '@/data/grammar/topics';

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
  // Bloque extra (ids ≥ 1000)
  1101: BLOQUE_EXTRA_B1,
  1102: BLOQUE_EXTRA_B1,
  1103: BLOQUE_EXTRA_B1,
  1104: BLOQUE_EXTRA_B1,
  1105: BLOQUE_EXTRA_B1,
  1106: BLOQUE_EXTRA_B1,
  1107: BLOQUE_EXTRA_B1,
  1108: BLOQUE_EXTRA_B1,
  1109: BLOQUE_EXTRA_B1,
};

/** Las unidades con sus tres formas: presente perfecto, used to, segundo condicional, presente perfecto continuo y pasiva. */
const CON_FORMAS = [47, 49, 53, 55, 57];

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

COBERTURA[49] = [
  ['Patrones verbales: let, make', /Let y make/],
  ['Patrones verbales: help, have, get', /Help y have/],
  ['Patrones verbales: want, ask, tell', /Want, ask y tell/],
  ["Uso de 'Used to'", /Used to: hábitos/],
  ["Uso de 'would'", /Would: hábitos/],
];
COBERTURA[50] = [
  ['Repaso de contables e incontables', /contables e incontables/],
  ['A little y a few', /A little y a few/],
  ['Very little y very few', /Very little y very few/],
  ['Too, too much y too many', /Too, too much y too many/],
  ['Enough', /Enough/],
];
COBERTURA[51] = [
  ['Futuro: will, going to, presente continuo, presente simple', /Las formas del futuro/],
  ["Uso de 'had better'", /Had better/],
  ["Uso de 'ought to'", /ought to/i],
  ["Uso de 'might want to'", /Might want to/],
  ["Uso de 'have to' y 'going to have to'", /Have to y going to have to/],
  ["Uso de 'would rather'", /Would rather/],
];

COBERTURA[52] = [
  ['Cláusulas relativas de sujeto', /relativas de sujeto/],
  ['Cláusulas relativas de objeto', /relativas de objeto/],
  ['Phrasal verbs', /Phrasal verbs/],
];
COBERTURA[53] = [
  ['Wish + verbo en pasado', /Wish \+ pasado simple/],
  ['Oraciones condicionales con if (imaginario)', /Segundo condicional/],
  ['Preguntas sobre eventos imaginarios', /Preguntas sobre eventos imaginarios/],
];
COBERTURA[54] = [
  ['Preguntas dentro de oraciones', /Preguntas dentro de oraciones/],
  ['Phrasal verbs separables con objetos', /Phrasal verbs separables/],
  ['How to, where to, what to + verbo', /How to, where to, what to/],
];

COBERTURA[55] = [
  ['Presente perfecto continuo', /Presente perfecto continuo: la forma/],
  ['Presente perfecto continuo vs presente perfecto', /Presente perfecto continuo o simple/],
  ['Since y for', /Since y for/],
  ['In para duración', /In para duración/],
  ['Already', /Already/],
  ['Still', /Still/],
  ['Yet', /Yet/],
];
COBERTURA[56] = [
  ['Especular con must, may, might, can\'t, could', /Especular: must/],
  ['Adjetivos -ed', /terminados en -ed/],
  ['Adjetivos -ing', /terminados en -ing/],
];
COBERTURA[57] = [
  ['Presente simple pasivo', /Presente simple pasivo/],
  ['Pasado simple pasivo', /Pasado simple pasivo/],
  ['By + agente', /By \+ agente/],
  ['Adverbios con la voz pasiva', /Adverbios con la voz pasiva/],
];


COBERTURA[1101] = [
  ['Although', /Although: aunque/],
  ['Though', /Though: más informal/],
  ['Even though', /Even though: aunque/],
  ['Although o but', /Although o but/],
  ['So that', /So that: para que/],
];
COBERTURA[1102] = [
  ['In case', /In case: por si acaso/],
  ['In case en el pasado', /In case en el pasado/],
  ['Unless', /Unless: a menos que/],
  ['As long as', /As long as/],
];
COBERTURA[1103] = [
  ['Until', /Until: hasta/],
  ['By', /By: a más tardar/],
  ['By o until', /By o until/],
  ['On time o in time', /On time o in time/],
];
COBERTURA[1104] = [
  ['Remember y forget', /Remember y forget/],
  ['Stop', /Stop \+/],
  ['Try', /Try \+/],
  ['Preposición + -ing', /Preposición \+ -ing/],
  ['Be used to', /Be used to/],
];
COBERTURA[1105] = [
  ['Adjetivo + preposición', /Adjetivo \+ preposición/],
  ['Verbo + preposición', /Verbo \+ preposición/],
  ['Sustantivo + preposición', /Sustantivo \+ preposición/],
  ['Preposiciones de lugar', /Preposiciones de lugar/],
];
COBERTURA[1106] = [
  ['Both, either, neither', /Both, either y neither/],
  ['All, every, each', /All, every y each/],
  ['Whole', /Whole y all/],
  ['So y such', /So \+ adjetivo y such/],
];
COBERTURA[1107] = [
  ['Nombres sin the', /Nombres sin the/],
  ['Nombres con the', /Nombres con the/],
  ['A friend of mine', /A friend of mine/],
  ['Own', /Own y on my own/],
];
COBERTURA[1108] = [
  ['Orden básico', /orden básico/i],
  ['Adverbios de frecuencia', /Adverbios de frecuencia/],
  ['Adverbios de modo', /Adverbios de modo/],
];
COBERTURA[1109] = [
  ['Must y mustn\'t', /Must y mustn't/],
  ['Needn\'t', /Needn't y don't have to/],
  ['Tag tras afirmativa', /tras una frase afirmativa/],
  ['Tag tras negativa', /tras una frase negativa/],
];

export const CONFIG_B1: ConfigCurso = {
  nivel: 'B1',
  ids: [46, 57],
  bloques: [BLOQUE_B1_1, BLOQUE_B1_2, BLOQUE_B1_3, BLOQUE_B1_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2', 'B1'],
};
