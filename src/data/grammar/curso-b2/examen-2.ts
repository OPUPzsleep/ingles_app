import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 2 (ids 116–118, Unidad 4–6 de B2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B2_BLOQUE_2: QuizQuestion[] = [
  // ─── Unidad 4 · Be supposed to, was going to, phrasal verbs inseparables (7) ───
  ejercicio(
    'The concert is ___ start at eight.',
    'supposed to',
    ['suppose to', 'supposing to', 'supposed'],
    'La expresión es be supposed to + verbo base. suppose to, supposing to y supposed solo no son formas correctas.'
  ),
  ejercicio(
    'Visitors ___ feed the animals. There is a sign.',
    "aren't supposed to",
    ["don't supposed to", "aren't suppose to", 'not supposed to'],
    "La negativa lleva el auxiliar be + not y supposed con -d: «aren't supposed to». Las otras formas están mal escritas o sin auxiliar."
  ),
  ejercicio(
    'I ___ go to the gym this morning, but I overslept.',
    'was going to',
    ['am going to', 'would to', 'was go to'],
    'Un plan del pasado que no se cumplió se expresa con was going to + verbo base. am going to es presente y las otras no existen.'
  ),
  ejercicio(
    'We were ___ leave when the phone rang.',
    'about to',
    ['about of', 'on to', 'near to'],
    'Estar a punto de hacer algo se dice be about to + verbo. about of, on to y near to no forman esa expresión.'
  ),
  ejercicio(
    'She ___ her father. They both love fishing.',
    'takes after',
    ['takes father after', 'takes after of', 'after takes'],
    'Take after es un phrasal verbo inseparable y significa parecerse a: «takes after her father». Las otras opciones cambian el orden o agregan palabras.'
  ),
  ejercicio(
    "I can't ___ this noise any more.",
    'put up with',
    ['put up', 'put with up', 'put on with'],
    'El phrasal verb de tres partes para soportar algo es put up with. Las otras opciones están incompletas o mal ordenadas.'
  ),
  ejercicio(
    "We've ___ milk. Can you buy some?",
    'run out of',
    ['run out', 'run off of', 'run away of'],
    'El phrasal verb para quedarse sin algo es run out of. run out sin of no lleva objeto y las otras no existen.'
  ),

  // ─── Unidad 5 · Pasiva de modales, get passive, catch + -ing (7) ───
  ejercicio(
    'The letter must ___ today. It is urgent.',
    'be sent',
    ['send', 'be send', 'sent'],
    'La pasiva de un modal es modal + be + participio: must be sent. send, be send y sent no forman la pasiva.'
  ),
  ejercicio(
    'The bridge ___ by the end of the year.',
    'will be finished',
    ['will finish', 'will be finish', 'will finished'],
    'La pasiva en futuro es will + be + participio: will be finished. Las otras formas son activas o están mal formadas.'
  ),
  ejercicio(
    'The window ___ repaired last month, but nobody did it.',
    'should have been',
    ['should be', 'should have', 'should been'],
    'Una crítica sobre el pasado en pasiva lleva should have been + participio. should be es presente y las otras formas están incompletas.'
  ),
  ejercicio(
    'He ___ hurt in the accident. (informal)',
    'got',
    ['was got', 'has get', 'did got'],
    'La pasiva informal con get se forma get + participio: «got hurt». Las otras opciones no son formas correctas.'
  ),
  ejercicio(
    'Where did you ___ married?',
    'get',
    ['be', 'become', 'make'],
    'La expresión es get married. be married describe un estado, become married no se usa y make married no existe.'
  ),
  ejercicio(
    'I caught my little brother ___ my chocolate!',
    'eating',
    ['eat', 'to eat', 'ate'],
    'Catch + persona + -ing: caught my brother eating. eat, to eat y ate no se usan con catch.'
  ),
  ejercicio(
    'We watched the plane ___ off.',
    'take',
    ['took', 'to take', 'taken'],
    'Después de watch + objeto se usa el verbo en base para una acción completa: take off. took, to take y taken no se usan así.'
  ),

  // ─── Unidad 6 · Pasado perfecto, So y Neither (6) ───
  ejercicio(
    'The room was empty. Everyone ___ gone home.',
    'had',
    ['has', 'was', 'did'],
    'Irse fue anterior a ver la sala vacía: pasado perfecto con had. has es presente perfecto, was y did no forman el pasado perfecto.'
  ),
  ejercicio(
    'I had never ___ such a big city before. (see)',
    'seen',
    ['saw', 'see', 'seeing'],
    'Después de had va el participio: seen. saw es el pasado simple, see es la base y seeing es el gerundio.'
  ),
  ejercicio(
    'After they ___ dinner, they watched a film.',
    'had eaten',
    ['have eaten', 'were eating', 'eat'],
    'Comer fue anterior a ver la película: pasado perfecto, had eaten. have eaten es presente perfecto, were eating no marca el orden y eat es presente.'
  ),
  ejercicio(
    "A: I don't speak French. B: ___ I.",
    'Neither do',
    ['So do', "Neither don't", "So don't"],
    'La frase de A es negativa, así que se responde Neither do I. So es para afirmativas, y Neither don\'t y So don\'t son dobles negaciones.'
  ),
  ejercicio(
    "A: She can't swim. B: ___ can he.",
    'Nor',
    ['So', "Neither don't", 'Too'],
    'La frase de A es negativa, y Nor funciona como Neither: «Nor can he». So es para afirmativas, y las otras no forman la respuesta.'
  ),
  ejercicio(
    "A: I'm really tired. B: ___ I.",
    'So am',
    ['So do', 'Neither am', 'Neither do'],
    'La frase de A es afirmativa y con am, así que se responde So am I. So do no repite el auxiliar y Neither es para frases negativas.'
  ),
];
