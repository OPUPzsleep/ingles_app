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

export const CONFIG_B1: ConfigCurso = {
  nivel: 'B1',
  ids: [46, 57],
  bloques: [BLOQUE_B1_1, BLOQUE_B1_2, BLOQUE_B1_3, BLOQUE_B1_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2', 'B1'],
};
