import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 4 (ids 55–57, Unidad 10–12 de B1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B1_BLOQUE_4: QuizQuestion[] = [
  // ─── Unidad 10 · Presente perfecto continuo; since, for, already, still, yet (7) ───
  ejercicio(
    'She ___ English for three years. She loves it.',
    'has been studying',
    ['is studying', 'studied', 'has study'],
    'Una actividad que empezó hace tres años y sigue pide presente perfecto continuo: has been studying. is studying no marca la duración, studied es pasado y has study no existe.'
  ),
  ejercicio(
    'We ___ in this house since 2010.',
    'have lived',
    ['live', 'are living', 'lived'],
    'since 2010 marca desde cuándo, y con un verbo de estado (live) se usa el presente perfecto simple: have lived. live, are living y lived no conectan con el presente.'
  ),
  ejercicio(
    "I haven't been to the cinema ___ months.",
    'for',
    ['since', 'during', 'ago'],
    'for + una duración (months). since necesita un punto de inicio, y during y ago no se usan así.'
  ),
  ejercicio(
    "I've ___ finished my homework. Can I go out?",
    'already',
    ['yet', 'still', 'ever'],
    'already (ya) va entre have y el participio en afirmativas. yet es para negativas y preguntas, still significa «todavía» y ever no se usa así.'
  ),
  ejercicio(
    "She hasn't called me ___. I'm worried.",
    'yet',
    ['already', 'ever', 'just'],
    'En negativas se usa yet al final para decir «todavía no». already y just no se usan así y ever no significa «todavía».'
  ),
  ejercicio(
    'How long have you ___ for the bus?',
    'been waiting',
    ['wait', 'been wait', 'being waiting'],
    'How long con una actividad en curso pide presente perfecto continuo: have been waiting. wait, been wait y being waiting no son formas correctas.'
  ),
  ejercicio(
    'I ___ live in Lima. I have not moved.',
    'still',
    ['yet', 'already', 'ever'],
    'still (todavía) va antes del verbo y dice que algo sigue igual. yet va al final de negativas y preguntas, already es de afirmativas y ever no se usa así.'
  ),

  // ─── Unidad 11 · Especular con modales; adjetivos -ed e -ing (7) ───
  ejercicio(
    'The phone is ringing, but nobody answers. They ___ be at home.',
    "can't",
    ['must', 'ought', 'would to'],
    "Si nadie contesta, es casi seguro que no están en casa: can't be. must diría lo contrario, ought necesita to y would to no existe."
  ),
  ejercicio(
    'Look at those clouds. It ___ rain soon.',
    'might',
    ['mights', 'must to', 'does'],
    'Para una posibilidad se usa might + verbo base. mights no existe, must to lleva to de más y does no expresa posibilidad.'
  ),
  ejercicio(
    "She isn't here. She ___ forgotten about the meeting.",
    'must have',
    ['must', 'must has', 'musts have'],
    'Para deducir algo del pasado se usa must have + participio. must solo no lleva have, must has y musts have no son formas correctas.'
  ),
  ejercicio(
    'He ___ have taken the wrong bus. That would explain why he is late.',
    'might',
    ['might to', 'mights', 'does'],
    'Para una posibilidad sobre el pasado se usa might have + participio. might to y mights no existen y does no expresa posibilidad.'
  ),
  ejercicio(
    "I'm ___ in learning Spanish. It's a beautiful language.",
    'interested',
    ['interesting', 'interest', 'interestingly'],
    'Se habla de cómo se siente la persona, así que se usa -ed: interested. interesting describe lo que produce el interés, interest es sustantivo y interestingly es adverbio.'
  ),
  ejercicio(
    'The lesson was so ___ that everybody fell asleep.',
    'boring',
    ['bored', 'bore', 'boringly'],
    'Se describe la lección (lo que produce el aburrimiento), así que se usa -ing: boring. bored describe a quien se aburre, bore es verbo y boringly es adverbio.'
  ),
  ejercicio(
    'We were ___ when we heard the good news.',
    'excited',
    ['exciting', 'excite', 'excitingly'],
    'Se describe cómo se sintieron las personas, así que se usa -ed: excited. exciting describe lo que emociona, excite es verbo y excitingly es adverbio.'
  ),

  // ─── Unidad 12 · Voz pasiva (6) ───
  ejercicio(
    'Wine ___ from grapes.',
    'is made',
    ['makes', 'is making', 'make'],
    'El vino recibe la acción de hacerse, así que va pasiva: is made. makes y make son activas y is making es presente continuo.'
  ),
  ejercicio(
    'The letter ___ yesterday.',
    'was sent',
    ['sent', 'is sent', 'were sent'],
    'La carta recibe la acción en pasado: was sent. sent solo no tiene auxiliar, is sent es presente y were no concuerda con letter.'
  ),
  ejercicio(
    'The museum ___ by thousands of people every year.',
    'is visited',
    ['visits', 'is visiting', 'visit'],
    'El museo recibe la acción de ser visitado, y by indica quién la hace: is visited. visits y visit son activas y is visiting es continuo.'
  ),
  ejercicio(
    'Where ___ the film made last year?',
    'was',
    ['did', 'were', 'do'],
    'La pregunta en pasiva y en pasado lleva was con film: «Where was the film made?». did y do se usan en activa y were no concuerda con film.'
  ),
  ejercicio(
    'The thief ___ by the police yesterday.',
    'was caught',
    ['caught', 'is caught', 'were caught'],
    'El ladrón recibe la acción de ser atrapado en pasado: was caught. caught solo es activa, is caught es presente y were no concuerda con thief.'
  ),
  ejercicio(
    'These cars ___ in Japan.',
    'are made',
    ['is made', 'made', 'make'],
    'cars es plural y recibe la acción de fabricarse, así que va are made. is made no concuerda, made solo no tiene auxiliar y make es activa.'
  ),
];
