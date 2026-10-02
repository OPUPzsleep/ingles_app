import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 2 (ids 49–51, Unidad 4–6 de B1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B1_BLOQUE_2: QuizQuestion[] = [
  // ─── Unidad 4 · Patrones verbales; used to y would (7) ───
  ejercicio(
    'The teacher made the students ___ the exercise again.',
    'do',
    ['to do', 'doing', 'did'],
    'Después de make + objeto va el verbo en base, sin to: «made the students do». Las otras formas no se usan con make.'
  ),
  ejercicio(
    'Please help me ___ this box. It is heavy.',
    'carry',
    ['carrying', 'carried', 'carries'],
    'Después de help + objeto se usa el verbo en base: «help me carry». carrying, carried y carries no se usan aquí.'
  ),
  ejercicio(
    "I'll have the mechanic ___ the car tomorrow.",
    'check',
    ['to check', 'checking', 'checks'],
    'Después de have + objeto (la persona) va el verbo en base: «have the mechanic check». to check, checking y checks no se usan con have en este patrón.'
  ),
  ejercicio(
    'I want you ___ here at nine.',
    'to be',
    ['be', 'being', 'been'],
    'Después de want + objeto va to + verbo base: «want you to be». be, being y been no forman esta estructura.'
  ),
  ejercicio(
    'We ___ go to the beach every summer when I was a kid.',
    'used to',
    ['use to', 'are used to', 'would to'],
    'Un hábito del pasado se expresa con used to + verbo base. use to solo va en negativas y preguntas, are used to tiene otro significado y would to no existe.'
  ),
  ejercicio(
    'Did you ___ live in Lima?',
    'use to',
    ['used to', 'using to', 'uses to'],
    'Después de did el auxiliar marca el pasado, así que se escribe use to (sin -d): «Did you use to live…?». used to, using to y uses to no son correctas aquí.'
  ),
  ejercicio(
    'When I was a child, I ___ afraid of dogs. (a state, not an action)',
    'used to be',
    ['would be', 'am used to be', 'use to be'],
    'be es un estado, y para estados del pasado se usa used to. would se reserva a hábitos y acciones repetidas; am used to be y use to be no son formas correctas.'
  ),

  // ─── Unidad 5 · Contables e incontables, cuantificadores, too y enough (7) ───
  ejercicio(
    'We bought some new ___ for the living room.',
    'furniture',
    ['furnitures', 'a furniture', 'many furniture'],
    'furniture es incontable: no tiene plural ni lleva a / an ni many. «some new furniture» es la forma correcta.'
  ),
  ejercicio(
    'Could I have a ___ of water, please?',
    'glass',
    ['slice', 'loaf', 'piece'],
    'Para contar el agua se usa a glass of water. slice, loaf y piece se usan con pastel, pan y otras cosas, no con líquidos.'
  ),
  ejercicio(
    'I have a ___ minutes before the meeting.',
    'few',
    ['little', 'much', 'very'],
    'minutes es contable plural, así que se usa a few. a little es para incontables y much y very no forman esta estructura.'
  ),
  ejercicio(
    'There is very ___ time. We must hurry.',
    'little',
    ['few', 'a few', 'many'],
    'time es incontable, así que se usa very little (casi no hay tiempo). few, a few y many son para contables.'
  ),
  ejercicio(
    "There is ___ sugar in this coffee. I can't drink it.",
    'too much',
    ['too many', 'too', 'very many'],
    'sugar es incontable y hay más de lo que se puede tolerar, así que se usa too much. too many es para contables y very many no se usa con incontables.'
  ),
  ejercicio(
    'The room is big ___ for ten people.',
    'enough',
    ['too', 'much', 'very'],
    'Con un adjetivo, enough va después del adjetivo: «big enough». too, much y very no forman esta estructura.'
  ),
  ejercicio(
    'Did you buy ___ apples for the cake? We need six.',
    'enough',
    ['too much', 'much', 'little'],
    'enough significa «suficientes» y va antes del sustantivo: «enough apples». too much y little son para incontables y much no se usa así en una pregunta afirmativa.'
  ),

  // ─── Unidad 6 · Futuro, consejos, obligación y would rather (6) ───
  ejercicio(
    'The shop ___ at nine every morning.',
    'opens',
    ['is open', 'will opening', 'opening'],
    'Un horario fijo va en presente simple: «opens» (con it / the shop). is open describe un estado y will opening y opening no forman la frase.'
  ),
  ejercicio(
    "A: There's no milk. B: I ___ buy some on my way home.",
    'will',
    ['go to', 'do', 'am going'],
    'Es una decisión que se toma en el momento de hablar, así que se usa will: «I will buy» (I\'ll buy). go to, do y am going no forman el futuro de esta manera.'
  ),
  ejercicio(
    'You look pale. You ___ see a doctor.',
    'ought to',
    ['ought', 'ought for', 'oughts to'],
    'Ought siempre va con to: «ought to see». ought solo no lleva to, ought for no existe y oughts to no se conjuga.'
  ),
  ejercicio(
    'You ___ be late again. The boss is angry.',
    'had better not',
    ['better not had', 'not had better', 'had not better to'],
    'La negativa de had better es had better not + verbo base: «You had better not be late». Las otras opciones tienen mal el orden.'
  ),
  ejercicio(
    "I'd rather ___ a taxi than walk.",
    'take',
    ['to take', 'taking', 'took'],
    'Después de would rather va el verbo en base, sin to: «I\'d rather take». to take, taking y took no se usan con would rather.'
  ),
  ejercicio(
    'We ___ get up early tomorrow. The flight is at six.',
    'will have to',
    ['will having to', 'have to will', 'would to have'],
    'Para una obligación futura se usa will have to + verbo base. will having to, have to will y would to have no son formas correctas.'
  ),
];
