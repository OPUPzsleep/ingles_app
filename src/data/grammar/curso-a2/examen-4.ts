import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 4 (ids 22–24, Unidad 10–12 de A2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_A2_BLOQUE_4: QuizQuestion[] = [
  // ─── Unidad 10 · Comparativos; more, less y fewer (7) ───
  ejercicio(
    'Bruno is ___ than his brother. (young)',
    'younger',
    ['more young', 'youngest', 'youngger'],
    'Los adjetivos cortos agregan -er para comparar: younger than. more young mezcla las dos formas, youngest es superlativo y youngger no existe.'
  ),
  ejercicio(
    'My new phone is ___ than my old one. (expensive)',
    'more expensive',
    ['expensiver', 'most expensive', 'expensive'],
    'Los adjetivos largos usan more: «more expensive than». expensiver no existe, most expensive es superlativo y expensive no compara.'
  ),
  ejercicio(
    'This test was ___ than the last one. (bad)',
    'worse',
    ['badder', 'more bad', 'worst'],
    'bad tiene comparativo irregular: worse. badder y more bad no existen y worst es el superlativo.'
  ),
  ejercicio(
    'She is as tall ___ her sister.',
    'as',
    ['than', 'like', 'that'],
    'La igualdad se expresa con as + adjetivo + as: «as tall as». than es para comparativos, y like y that no forman esa estructura.'
  ),
  ejercicio(
    'This room is much ___ than that one. (big)',
    'bigger',
    ['more big', 'biger', 'bigest'],
    'big es un adjetivo corto terminado en vocal + consonante: se dobla la g y se agrega -er → bigger. more big mezcla las dos formas, y biger y bigest están mal escritas.'
  ),
  ejercicio(
    'There are ___ cars on this street than on that one.',
    'fewer',
    ['fewest', 'more few', 'littler'],
    'cars es contable en plural, así que se compara con fewer. fewest es superlativo, more few y littler no son formas correctas.'
  ),
  ejercicio(
    'I drink ___ coffee than before. Now I drink only one cup a day.',
    'less',
    ['fewer', 'fewest', 'lesser'],
    'coffee es incontable, así que se usa less. fewer es para contables en plural, fewest es superlativo y lesser no se usa así.'
  ),

  // ─── Unidad 11 · Describir personas, have got, -ing y preposiciones (7) ───
  ejercicio(
    'A: What is he like? B: ___',
    "He's friendly and funny.",
    ["He's tall with short hair.", "He's fine, thanks.", 'He likes football.'],
    'What is he like? pregunta por el carácter. «He\'s tall with short hair» responde a What does he look like? y «He\'s fine» responde a How is he?.'
  ),
  ejercicio(
    "I ___ got any brothers or sisters.",
    "haven't",
    ["don't", "hasn't", 'am not'],
    "La negativa de have got es haven't got (hasn't con he, she, it). don't no se usa con got, hasn't no concuerda con I y am not no forma la negativa."
  ),
  ejercicio(
    '___ she got a car? — No, she hasn\'t.',
    'Has',
    ['Have', 'Does', 'Is'],
    'La pregunta con have got empieza con Has para she: «Has she got a car?». Have es para I, you, we, they; Does y Is no se usan con got.'
  ),
  ejercicio(
    'The woman ___ on the bike is my aunt. (ride)',
    'riding',
    ['ride', 'rides', 'rode'],
    'Para identificar a una persona por lo que hace se usa un verbo en -ing: «The woman riding on the bike». Los demás no forman esa estructura.'
  ),
  ejercicio(
    'The girl ___ the piano is my sister. (play)',
    'playing',
    ['play', 'plays', 'played'],
    'Para identificar a la chica por lo que hace se usa -ing: «The girl playing the piano». Los demás no forman esa estructura.'
  ),
  ejercicio(
    'How tall ___ she? She is 1.70 meters.',
    'is',
    ['does', 'has', 'are'],
    'How tall se usa con to be: «How tall is she?». does y has no se usan para medir la estatura y are no concuerda con she.'
  ),
  ejercicio(
    "A: Does he have long hair? B: No, he ___.",
    "doesn't",
    ["hasn't", "isn't", "don't"],
    "La pregunta usa Does he have…?, así que la respuesta corta repite does: «No, he doesn't». hasn't, isn't y don't no repiten el auxiliar de la pregunta."
  ),

  // ─── Unidad 12 · Will, may, might y cláusulas de futuro (6) ───
  ejercicio(
    "A: I'm cold. B: I ___ get you a blanket.",
    'will',
    ['do', 'am', 'going to'],
    'Es una decisión o un ofrecimiento en el momento de hablar, así que se usa will: «I will get» (I\'ll get). do y am no forman el futuro y going to necesita un auxiliar.'
  ),
  ejercicio(
    "Don't worry. I ___ tell anyone your secret.",
    "won't",
    ["don't", "wouldn't", 'am not'],
    "Una promesa lleva will: la negativa es won't. don't es presente, wouldn't no se usa para promesas y am not no forma el futuro."
  ),
  ejercicio(
    "A: Are you coming to the party? B: I'm not sure. I ___ come.",
    'might',
    ['mights', 'might to', 'do'],
    'Might expresa posibilidad y va seguido del verbo base. mights no existe, might to lleva to de más y do no expresa posibilidad.'
  ),
  ejercicio(
    "We'll play outside if it ___ rain.",
    "doesn't",
    ["won't", "isn't", 'not'],
    "Después de if el verbo va en presente simple, y la negativa de it es doesn't: «if it doesn't rain». won't no se usa después de if, isn't y not no forman esa negativa."
  ),
  ejercicio(
    'Call me before you ___ home. (leave)',
    'leave',
    ['will leave', 'would leave', 'are leaving'],
    'Después de before el verbo va en presente simple: «before you leave». will leave y would leave no se usan después de before y are leaving no encaja en esta estructura.'
  ),
  ejercicio(
    '___ I open the window? It is hot in here.',
    'Shall',
    ['Do', 'Am', 'Will'],
    'Shall I…? se usa para ofrecer algo: «Shall I open the window?». Do, Am y Will no forman un ofrecimiento con I de esta manera.'
  ),
];
