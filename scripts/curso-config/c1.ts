import { BLOQUE_C1_1, BLOQUE_C1_2, BLOQUE_C1_3, BLOQUE_C1_4 } from '@/data/grammar/topics';

import type { ConfigCurso } from './tipos';

/** El bloque al que pertenece cada unidad del curso C1 (ids 146–157). */
const BLOQUE_DE_UNIDAD: Record<number, string> = {
  146: BLOQUE_C1_1,
  147: BLOQUE_C1_1,
  148: BLOQUE_C1_1,
  149: BLOQUE_C1_2,
  150: BLOQUE_C1_2,
  151: BLOQUE_C1_2,
  152: BLOQUE_C1_3,
  153: BLOQUE_C1_3,
  154: BLOQUE_C1_3,
  155: BLOQUE_C1_4,
  156: BLOQUE_C1_4,
  157: BLOQUE_C1_4,
};

/** Las unidades con sus tres formas (se llena con cada bloque). */
const CON_FORMAS: number[] = [];

const COBERTURA: Record<number, [tema: string, buscar: RegExp][]> = {
  146: [
    ['Presente simple para hábitos', /Presente simple: hábitos/],
    ["Uso de 'tend to'", /Tend to/],
    ["Uso de 'will' para comportamientos repetitivos", /Will: comportamiento/],
    ["Estrategia: And, But y So al iniciar preguntas", /And, But y So/],
  ],
  147: [
    ['Cláusulas relativas definitorias', /relativas definitorias/],
    ['Cláusulas relativas no definitorias', /relativas no definitorias/],
    ['Which para comentar afirmaciones', /Which comentario/],
    ["Estrategia: You know what…?", /You know what/],
  ],
  152: [
    ['Phrasal verbs avanzados', /Phrasal verbs avanzados/],
    ['Infinitivos después de adjetivos', /Adjetivo \+ infinitivo/],
    ['-ing después de adjetivos', /Adjetivo \+ preposición/],
    ['Infinitivos y -ing después de sustantivos', /Sustantivo \+ infinitivo/],
    ['Infinitivos después de pronombres', /Pronombre indefinido/],
    ["What I'm saying is / I mean", /What I'm saying is/],
    ['I have to say', /I have to say/],
  ],
  153: [
    ['Voz pasiva en pasado, presente y futuro', /pasiva en todos los tiempos/],
    ['Pasiva para enfocar la información', /foco en la información/],
    ['Verbos de causa y efecto', /Verbos de causa/],
    ['Preguntas retóricas', /preguntas retóricas/],
    ['Ejemplos: such as, like, take, for instance', /such as, like, take/],
  ],
  154: [
    ['Determinantes all, both, each, every', /All, whole y every/],
    ['Neither, none of, no', /None of, no y nothing/],
    ['-ing como cláusula relativa reducida', /relativas reducidas/],
    ['-ing para eventos simultáneos', /eventos simultáneos/],
    ['-ing como sujeto y objeto', /sujeto y objeto/],
    ['As far as… is concerned', /As far as… is concerned/],
    ["As far as I'm concerned / can tell", /As far as I'm concerned/],
  ],
  149: [
    ['Sustantivos contables e incontables', /Contables e incontables/],
    ['Generalizar con artículos', /Generalizar/],
    ['Especificar con artículos', /Especificar/],
    ['Adverbios -ly para mostrar actitud', /Adverbios de actitud/],
    ['As a matter of fact / In fact', /In fact y As a matter of fact/],
  ],
  150: [
    ['Condicionales mixtos', /Condicional mixto 1/],
    ['Condicional mixto: presente → pasado', /Condicional mixto 2/],
    ['Wish', /Wish e if only/],
    ['Hope', /Hope/],
    ['What if, Suppose, Imagine', /What if…\?, Suppose/],
    ['I suppose', /I suppose/],
  ],
  151: [
    ['Futuro: be going to, will, may, might, presentes', /formas del futuro/],
    ['Modales de expectativa y suposición', /Expectativas y suposiciones/],
    ['Ofertas, necesidad y peticiones', /Ofrecimientos, necesidad/],
    ["Suavizar con would", /suavizar opiniones/],
    ["I think so / I don't think so / I guess not", /I think so/],
  ],
  155: [
    ['Estilo indirecto de afirmaciones', /Estilo indirecto de afirmaciones/],
    ['Verbos de comunicación', /Verbos de comunicación/],
    ['Estilo indirecto de preguntas', /Estilo indirecto de preguntas/],
    ['Instrucciones y peticiones', /instrucciones y peticiones/],
    ['Modales en estilo indirecto', /Modales y casos especiales/],
    ["You mean… / So what you're saying is…", /You mean/],
    ['In what way?', /In what way/],
  ],
  156: [
    ['Where', /Where: el lugar/],
    ['When y why', /When y why/],
    ['Whose', /Whose: la posesión/],
    ['Verbos con complemento directo e indirecto', /complemento directo e indirecto/],
    ['Verbos que solo aceptan to', /solo aceptan to/],
    ['Kind of, a little, not really', /kind of, a little/],
    ['Yeah, no', /Yeah, no/],
  ],
  157: [
    ['Adverbios de grado antes de adjetivos', /Adverbios de grado/],
    ['Adjetivos graduables y no graduables', /graduables y no graduables/],
    ['Adverbios antes de adverbios', /Adverbios antes de adverbios/],
    ['As… as', /As… as/],
    ['Comparativos', /Comparativos con matiz/],
    ['Superlativos', /Superlativos con matiz/],
    ['And that kind of thing', /and that kind of thing/],
    ['No doubt', /No doubt/],
  ],
  148: [
    ['Tiempos del pasado en narraciones', /tiempos de una narración/],
    ['Pasado simple, perfecto y perfecto continuo', /Pasado perfecto simple o continuo/],
    ['Formas del presente perfecto', /presente perfecto en las historias/],
    ['Interrumpir una historia', /interrumpir tu propia historia/],
    ["Uso de 'no wonder'", /No wonder/],
  ],
};

export const CONFIG_C1: ConfigCurso = {
  nivel: 'C1',
  ids: [146, 157],
  bloques: [BLOQUE_C1_1, BLOQUE_C1_2, BLOQUE_C1_3, BLOQUE_C1_4],
  bloqueDeUnidad: BLOQUE_DE_UNIDAD,
  conFormas: CON_FORMAS,
  cobertura: COBERTURA,
  nivelesDeVocabulario: ['A1', 'A2', 'B1', 'B2', 'C1'],
};
