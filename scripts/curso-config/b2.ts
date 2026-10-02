import { BLOQUE_B2_1, BLOQUE_B2_2, BLOQUE_B2_3, BLOQUE_B2_4, BLOQUE_EXTRA_B2 } from '@/data/grammar/topics';

import type { ConfigCurso } from './tipos';

/** El bloque al que pertenece cada unidad del curso B2 (ids 113–124). */
const BLOQUE_DE_UNIDAD: Record<number, string> = {
  113: BLOQUE_B2_1,
  114: BLOQUE_B2_1,
  115: BLOQUE_B2_1,
  116: BLOQUE_B2_2,
  117: BLOQUE_B2_2,
  118: BLOQUE_B2_2,
  119: BLOQUE_B2_3,
  120: BLOQUE_B2_3,
  121: BLOQUE_B2_3,
  122: BLOQUE_B2_4,
  123: BLOQUE_B2_4,
  124: BLOQUE_B2_4,
  // Bloque extra (ids ≥ 1000)
  1201: BLOQUE_EXTRA_B2,
  1202: BLOQUE_EXTRA_B2,
  1203: BLOQUE_EXTRA_B2,
  1204: BLOQUE_EXTRA_B2,
};

/** Las unidades con sus tres formas (se llena con cada bloque). */
const CON_FORMAS = [115, 118, 120, 122, 124];

const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  113: [
    ['Repaso de verbos simples y continuos', /Repaso: presente simple/],
    ['Verbo + -ing o to: diferencias de significado', /Remember y forget/],
    ['Stop, try, regret', /Stop, try, regret/],
  ],
  114: [
    ['Comparaciones con (not) as… as', /As… as: igualdad/],
    ['Not as… as', /Not as… as/],
    ['Preguntas negativas', /Preguntas negativas: la forma/],
    ['Cómo responder preguntas negativas', /Cómo responder/],
  ],
  122: [
    ['Tercer condicional', /Tercer condicional: if/],
    ['Tag questions', /Tag questions: la forma/],
  ],
  123: [
    ['Presente continuo pasivo', /Presente continuo pasivo/],
    ['Presente perfecto pasivo', /Presente perfecto pasivo/],
    ['Conectores de ideas', /Conectores de contraste/],
  ],
  124: [
    ['What clauses', /What clauses/],
    ['Frases nominales largas', /Frases nominales largas/],
    ['Futuro continuo', /Futuro continuo/],
    ['Futuro perfecto', /Futuro perfecto/],
  ],
  119: [
    ["Verbos causativos 'have'", /Have something done/],
    ["Verbos causativos 'get'", /Get something done/],
    ['Need + infinitivo pasivo', /Need \+ infinitivo pasivo/],
    ['Need + verbo + -ing', /Need \+ -ing/],
  ],
  120: [
    ['Would have', /Would have/],
    ['Should have', /Should have/],
    ['Could have', /Could have/],
    ['Especulación sobre el pasado', /Especular sobre el pasado/],
  ],
  121: [
    ['Estilo indirecto para afirmaciones', /Estilo indirecto: la idea/],
    ['Cómo cambian los tiempos', /Cómo cambian los tiempos/],
    ['Estilo indirecto para preguntas', /Preguntas de sí \/ no en estilo indirecto/],
    ['Preguntas con palabra interrogativa', /Preguntas con palabra interrogativa/],
  ],
  116: [
    ["Uso de 'be supposed to'", /Be supposed to: lo que se espera/],
    ["Uso de 'was / were going to' para planes frustrados", /Was \/ were going to/],
    ['Phrasal verbs inseparables', /Phrasal verbs inseparables/],
  ],
  117: [
    ['La voz pasiva de los verbos modales', /voz pasiva de los verbos modales/],
    ['Get passive vs. be passive', /Be passive y get passive/],
    ['Catch + persona + verbo + -ing', /Catch \+ persona/],
  ],
  118: [
    ['Pasado perfecto: forma', /Pasado perfecto: la forma/],
    ['Pasado perfecto: uso', /Cuándo se usa/],
    ["Respuestas cortas con 'So'", /So…/],
    ["Respuestas cortas con 'Neither'", /Neither/],
  ],
  115: [
    ['Presente simple en voz pasiva', /Presente simple pasivo/],
    ['Más sobre verbo + -ing y to + verbo', /Más verbos con -ing y con to/],
    ["La posición de 'not'", /La posición de not/],
  ],
};


COBERTURA[1201] = [
  ['Verbos con preposición fija', /Verbos con una preposición fija/],
  ['Verbo + objeto + preposición', /Verbo \+ objeto \+ preposición/],
  ['Adjetivos con preposición', /Adjetivos con preposición/],
  ['Errores típicos', /Errores típicos/],
];
COBERTURA[1202] = [
  ['Whose', /Whose/],
  ['Where, when, why', /Where, when y why/],
  ['Preposición + whom', /Preposición \+ whom/],
  ['Cláusulas con -ing', /Cláusulas con -ing/],
];
COBERTURA[1203] = [
  ['Even', /Even: incluso/],
  ['Even if / even though', /Even if y even though/],
  ['As if', /As if y as though/],
  ['When + presente perfecto', /When, after y as soon as/],
];
COBERTURA[1204] = [
  ['Con up', /con up/],
  ['Con away', /con away/],
  ['Con back', /con back/],
  ['Separables', /Separables e inseparables/],
];

export const CONFIG_B2: ConfigCurso = {
  nivel: 'B2',
  ids: [113, 124],
  bloques: [BLOQUE_B2_1, BLOQUE_B2_2, BLOQUE_B2_3, BLOQUE_B2_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2', 'B1', 'B2'],
};
