import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 3 (ids 119–121, Unidad 7–9 de B2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B2_BLOQUE_3: QuizQuestion[] = [
  // ─── Unidad 7 · Causativos get y have; need + -ing y pasivo (7) ───
  ejercicio(
    "I'm having my hair ___ tomorrow.",
    'cut',
    ['cutting', 'to cut', 'cuts'],
    'Have + objeto + participio expresa un servicio: having my hair cut. cutting, to cut y cuts no forman el causativo.'
  ),
  ejercicio(
    'She ___ her passport renewed last week.',
    'got',
    ['has get', 'did got', 'was got'],
    'Get + objeto + participio expresa un servicio: «got her passport renewed». Las otras formas están mal construidas.'
  ),
  ejercicio(
    "I'll have the plumber ___ the sink.",
    'fix',
    ['to fix', 'fixing', 'fixed'],
    'Have + persona + verbo base: «have the plumber fix». to fix, fixing y fixed no se usan con have y una persona.'
  ),
  ejercicio(
    'We had our luggage ___ at the airport.',
    'lost',
    ['lose', 'losing', 'to lose'],
    'Have + objeto + participio también expresa algo malo que le pasa a alguien: had our luggage lost. Las otras formas no forman ese causativo.'
  ),
  ejercicio(
    'Did you ___ your car washed?',
    'have',
    ['had', 'having', 'to have'],
    'Después de did el verbo va en base: have your car washed. had, having y to have no se usan después de did.'
  ),
  ejercicio(
    'The grass needs ___.',
    'cutting',
    ['cut', 'to cutting', 'cuts'],
    'Need + -ing tiene sentido pasivo: need cutting (hay que cortarla). cut, to cutting y cuts no forman esta estructura.'
  ),
  ejercicio(
    'The floor needs to be ___ before the guests arrive.',
    'cleaned',
    ['clean', 'cleaning', 'cleans'],
    'El infinitivo pasivo es to be + participio: to be cleaned. clean, cleaning y cleans no completan la estructura.'
  ),

  // ─── Unidad 8 · Modales en pasado (7) ───
  ejercicio(
    'You ___ me earlier! Now it is too late.',
    'should have told',
    ['should tell', 'should told', 'must tell'],
    'Una crítica por algo que no se hizo se expresa con should have + participio. should tell es presente y las otras formas no son correctas.'
  ),
  ejercicio(
    "I'm sorry, I ___ so rude.",
    "shouldn't have been",
    ["shouldn't be", "shouldn't been", "wouldn't be"],
    'Un arrepentimiento sobre algo que ya pasó se expresa con shouldn\'t have + participio. Las otras formas no marcan el pasado correctamente.'
  ),
  ejercicio(
    'The lights are on. Someone ___ at home last night. (I am sure)',
    'must have been',
    ['must be', 'must been', 'can have been'],
    'Una deducción casi segura sobre el pasado se expresa con must have + participio. must be es presente y las otras formas están mal construidas.'
  ),
  ejercicio(
    'She ___ the message. Her phone was off all day. (it is impossible)',
    "can't have received",
    ['must have received', "can't received", "couldn't have receive"],
    'Es casi seguro que no lo recibió: can\'t have + participio. must have received diría lo contrario y las otras formas están mal construidas.'
  ),
  ejercicio(
    'If I had known, I ___ you a lift.',
    'would have given',
    ['would give', 'had given', 'will have given'],
    'En el tercer condicional la cláusula principal lleva would have + participio. would give es del segundo condicional y las otras formas no son correctas.'
  ),
  ejercicio(
    'It ___ been easy to move abroad. I am sure it was hard.',
    "can't have",
    ['must have', 'might have', 'should have'],
    'Es casi seguro que no fue fácil: can\'t have been. must have diría lo contrario, might have solo dice que es posible y should have no deduce.'
  ),
  ejercicio(
    'I could ___ you earlier, but I forgot.',
    'have called',
    ['call', 'called', 'had call'],
    'Una posibilidad que no se aprovechó se expresa con could have + participio: could have called. call, called y had call no forman esa estructura.'
  ),

  // ─── Unidad 9 · Estilo indirecto (6) ───
  ejercicio(
    "He said, \"I live in Lima.\" → He said he ___ in Lima.",
    'lived',
    ['live', 'living', 'has lived'],
    'Con un verbo introductorio en pasado, el presente simple retrocede a pasado simple: lived. live, living y has lived no hacen ese cambio.'
  ),
  ejercicio(
    "She said, \"I've finished.\" → She said she ___ finished.",
    'had',
    ['has', 'have', 'was'],
    'El presente perfecto retrocede a pasado perfecto: had finished. has y have son presentes y was no forma el pasado perfecto.'
  ),
  ejercicio(
    'She asked me ___ I was doing there.',
    'what',
    ['that', 'if', 'which'],
    'Una pregunta con what mantiene la palabra interrogativa en el estilo indirecto: asked me what. that, if y which no forman esa pregunta.'
  ),
  ejercicio(
    "He asked, \"Are you coming?\" → He asked ___ I was coming.",
    'whether',
    ['that', 'what', 'where'],
    'Una pregunta de sí / no se une con whether o if. that, what y where no forman esa pregunta.'
  ),
  ejercicio(
    'The teacher told us ___ our books.',
    'to open',
    ['open', 'opening', 'that open'],
    'Una orden pasa a tell + persona + to + verbo: told us to open. open, opening y that open no forman esa estructura.'
  ),
  ejercicio(
    "\"Don't touch it,\" he said. → He told me ___ it.",
    'not to touch',
    ["don't touch", 'not touching', 'not touch'],
    'Una orden negativa pasa a tell + persona + not to + verbo: told me not to touch. Las otras formas no son correctas.'
  ),
];
