import { normalizar } from '@/lib/texto';

/**
 * Palabras de relleno del español (artículos, preposiciones sueltas…): aparecen en casi todos los textos y no ayudan
 * a encontrar nada, así que nunca se buscan. Las palabras en inglés se conservan: «a», «an», «the», «in», «on»,
 * «will»… son justo lo que se pregunta en gramática.
 */
const RELLENO = new Set(
  `al ante con contra de del desde e el ella ellas ellos en entre era eran es esa esas ese eso esos esta estan estas
  este esto estos fue ha he la las le les lo los me mi mis muy ni nos nosotros o os pero que se si sin son su sus te ti
  tu tus un una uno unos usted ustedes y ya yo mas`.split(/\s+/)
);

/**
 * Palabras que se usan para preguntar («cómo», «cuándo», «diferencia», «ejemplo»…): se guardan en los textos, pero al
 * buscar se dejan de lado, salvo que no quede nada más («diferencia entre por y para» solo tiene «por» y «para»).
 */
const DE_PREGUNTA = new Set(
  `como cuando cuanto cuanta cuantos cuantas cual cuales donde quien quienes por para porque tambien todo cada algo
  algun alguna alguno algunos algunas otro otra uso usos usar usa usan usamos utilizo utilizar hola gracias dime
  dimelo explica explicame explicar quiero quisiera saber puedo puedes podria debo deberia necesito ayuda ayudame
  favor oye entonces ademas diferencia diferencias diferente diferentes significa significan quiere ingles espanol
  ser estar hay tiene tienen forma formas forman formar funciona funcionan ejemplo ejemplos digo dice dicen decir pido
  pedir pregunto preguntar hago hacer haces hacen cosa cosas manera tipo tipos sirve sirven sirva entiendo entender
  entienda entiendes duda dudas frase frases expresion expresiones
  how what when where why who which explain difference between use using usage we you i my your me is are am`.split(/\s+/)
);

/** Palabras que solo sirven para preguntar o saludar: si son lo único que se escribe, no hay nada que buscar. */
const SOLO_PARA_PREGUNTAR = new Set(
  `como cuando cuanto cuanta cuantos cuantas cual cuales donde quien quienes porque dice digo decir hola gracias dime
  dimelo explica explicame explicar quiero quisiera saber puedo puedes podria debo deberia necesito ayuda ayudame favor
  oye entonces ademas uso usos usar usa usan usamos utilizo utilizar`.split(/\s+/)
);

/**
 * Parte de una palabra que se compara: sin la «s» del plural y recortada a 6 letras, así «preposición» y
 * «preposiciones», o «continuo» y «continuous», cuentan como la misma palabra.
 */
export function raiz(palabra: string): string {
  let t = palabra;
  if (t.length > 3 && t.endsWith('s') && !t.endsWith('ss')) t = t.slice(0, -1);
  return t.length > 6 ? t.slice(0, 6) : t;
}

/** Palabras sueltas de un texto, sin tildes ni mayúsculas ni apóstrofos («don't» → «dont»). */
export function palabrasSueltas(texto: string): string[] {
  return normalizar(texto)
    .replace(/['’`]/g, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

/** Las palabras que cuentan de un texto, ya reducidas a su raíz: así se guardan los textos de la app. */
export function tokenizar(texto: string): string[] {
  return palabrasSueltas(texto)
    .filter((palabra) => !RELLENO.has(palabra))
    .map(raiz);
}

/**
 * Las palabras que cuentan de una pregunta. Las que sirven para preguntar («cómo», «cuándo», «ejemplos»…) se dejan
 * de lado, salvo que sean todo lo que hay: «diferencia entre por y para» se busca con «por» y «para».
 */
export function tokensDeConsulta(texto: string): string[] {
  const sueltas = palabrasSueltas(texto);
  // «a» es una preposición del español; solo cuenta cuando se pregunta por los artículos en inglés («a y an»).
  const articulos = sueltas.includes('an') && sueltas.includes('a');
  const todas = sueltas.filter((palabra) => !RELLENO.has(palabra) && (palabra !== 'a' || articulos) && !/^\d+$/.test(palabra));
  const firmes = todas.filter((palabra) => !DE_PREGUNTA.has(palabra));
  // Si todo son palabras de preguntar, se busca con las que tengan algo de contenido («por» y «para»); si ninguna, nada.
  return (firmes.length > 0 ? firmes : todas.filter((palabra) => !SOLO_PARA_PREGUNTAR.has(palabra))).map(raiz);
}

/** Las palabras de un texto sin las de relleno, pero con las de preguntar («cómo», «cuándo»…): para comparar preguntas enteras. */
export function palabrasConPreguntas(texto: string): string[] {
  return palabrasSueltas(texto).filter((palabra) => !RELLENO.has(palabra));
}

/** Lo que se pide, sin las palabras de relleno ni las de preguntar: «cómo pido la cuenta» → «cuenta». */
export function consultaSinPreguntas(texto: string): string {
  return palabrasSueltas(texto)
    .filter((palabra) => !RELLENO.has(palabra) && !DE_PREGUNTA.has(palabra))
    .join(' ');
}

/**
 * Nombres que se dan a lo mismo en español y en inglés. Si la pregunta usa uno, se buscan también los otros:
 * los títulos de las unidades están en inglés y las explicaciones en español.
 */
const SINONIMOS: string[][] = [
  ['presente perfecto continuo', 'present perfect continuous'],
  ['presente perfecto', 'present perfect'],
  ['presente continuo', 'present continuous', 'presente progresivo'],
  ['presente simple', 'present simple'],
  ['pasado perfecto continuo', 'past perfect continuous'],
  ['pasado perfecto', 'past perfect', 'pluscuamperfecto'],
  ['pasado continuo', 'past continuous', 'pasado progresivo'],
  ['pasado simple', 'past simple', 'preterito'],
  ['futuro', 'future', 'will', 'going to'],
  ['condicional', 'condicionales', 'conditional', 'conditionals', 'oraciones con if', 'if'],
  ['voz pasiva', 'pasiva', 'passive', 'passive voice'],
  ['estilo indirecto', 'discurso indirecto', 'reported speech', 'indirect speech'],
  ['verbos modales', 'modales', 'modal verbs', 'modal'],
  ['phrasal verbs', 'phrasal verb', 'verbos compuestos', 'verbos frasales', 'verbo frasal'],
  ['oraciones de relativo', 'clausulas de relativo', 'relative clauses', 'relative clause', 'pronombres relativos'],
  ['articulos', 'articulo', 'articles', 'article'],
  ['contables', 'incontables', 'countable', 'uncountable', 'sustantivos contables'],
  ['comparativo', 'comparativos', 'comparative', 'comparatives', 'comparaciones'],
  ['superlativo', 'superlativos', 'superlative'],
  ['preposiciones', 'preposicion', 'prepositions', 'preposition'],
  ['conjunciones', 'conjuncion', 'conjunctions', 'conjunction', 'conectores'],
  ['pronombres', 'pronombre', 'pronouns', 'pronoun'],
  ['posesivos', 'posesivo', 'possessive', 'possessives'],
  ['reflexivos', 'reflexivo', 'reflexive', 'reflexives'],
  ['gerundio', 'gerund', 'verbo ing', 'terminacion ing'],
  ['infinitivo', 'infinitive', 'to infinitive'],
  ['adjetivos', 'adjetivo', 'adjectives', 'adjective'],
  ['adverbios', 'adverbio', 'adverbs', 'adverb'],
  ['sustantivos', 'sustantivo', 'nouns', 'noun'],
  ['plural', 'plurales', 'plurals'],
  ['preguntas', 'pregunta', 'questions', 'question'],
  ['negativas', 'negativa', 'negacion', 'negative', 'negatives'],
  ['pronunciacion', 'pronunciar', 'pronunciation', 'pronounce'],
  ['palabras de enlace', 'linking words', 'conectores', 'connectors'],
  ['me presento', 'presentarme', 'presentarse', 'presentarte', 'introduce myself', 'my name is'],
  ['falsos amigos', 'false friends'],
  ['interjeccion', 'interjecciones', 'interjection'],
  ['tiempos verbales', 'tenses', 'verb tenses', 'tiempos'],
  ['verbos irregulares', 'irregulares', 'irregular verbs'],
  ['hay', 'there is', 'there are'],
];

const SINONIMOS_NORMALIZADOS: string[][] = SINONIMOS.map((grupo) => grupo.map((variante) => palabrasSueltas(variante).join(' ')));

/** Un nombre de la pregunta que tiene sinónimos: las palabras con las que se escribió y las que se agregan. */
export interface Ampliacion {
  /** Raíces de las palabras tal como las escribió la persona. */
  origen: string[];
  /** Raíces de los otros nombres del mismo concepto. */
  nuevos: string[];
}

/** Los sinónimos de lo que nombra la pregunta («presente perfecto» → «present perfect»), de a un concepto por vez. */
export function ampliarConSinonimos(textoNormalizado: string): Ampliacion[] {
  const relleno = ` ${palabrasSueltas(textoNormalizado).join(' ')} `;
  const ampliaciones: Ampliacion[] = [];
  for (const grupo of SINONIMOS_NORMALIZADOS) {
    const presentes = grupo.filter((variante) => relleno.includes(` ${variante} `));
    if (presentes.length === 0) continue;
    const origen = presentes.flatMap((variante) => tokenizar(variante));
    const nuevos = grupo.filter((variante) => !presentes.includes(variante)).flatMap((variante) => tokenizar(variante));
    ampliaciones.push({ origen, nuevos: nuevos.filter((r) => !origen.includes(r)) });
  }
  return ampliaciones;
}
