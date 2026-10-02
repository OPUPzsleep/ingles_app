import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 1 (ids 46–48, Unidad 1–3 de B1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_B1_BLOQUE_1: QuizQuestion[] = [
  // ─── Unidad 1 · Adjetivos y adverbios, adverbios de grado, prefijos (7) ───
  ejercicio(
    "Please speak ___. I can't understand you when you talk fast. (slow)",
    'slowly',
    ['slowness', 'more slow', 'slows'],
    'Se describe cómo hablar (una acción), así que va el adverbio slowly. slowness es un sustantivo, more slow es un comparativo mal formado y slows es un verbo.'
  ),
  ejercicio(
    'My grandmother looks very ___ today. (happy)',
    'happy',
    ['happily', 'happiness', 'more happily'],
    'Después de look (verbo de sentido) se usa un adjetivo que describe al sujeto: «looks very happy». happily es adverbio y happiness es sustantivo.'
  ),
  ejercicio(
    'He works ___ and never takes a break.',
    'hard',
    ['hardly', 'hards', 'hardness'],
    'hard es adjetivo y también adverbio con el significado «duro». hardly significa «casi no», que cambia el sentido, y hards y hardness no son adverbios.'
  ),
  ejercicio(
    'The hotel was ___ expensive, but we stayed anyway. (more than expected)',
    'rather',
    ['ratherly', 'absolutely', 'completely'],
    'rather significa «más de lo esperado» y se usa antes de adjetivos normales como expensive. absolutely y completely se usan con adjetivos extremos y ratherly no existe.'
  ),
  ejercicio(
    "It's ___ to read his handwriting. Nobody can.",
    'impossible',
    ['unpossible', 'inpossible', 'dispossible'],
    'Antes de p se usa el prefijo im-: impossible. unpossible, inpossible y dispossible no existen.'
  ),
  ejercicio(
    'She is a very ___ person. She never lies.',
    'honest',
    ['dishonest', 'unhonest', 'honestly'],
    'honest describe a una persona (adjetivo) y significa que no miente. dishonest significa lo contrario, unhonest no existe y honestly es un adverbio.'
  ),
  ejercicio(
    'He plays the guitar very ___.',
    'well',
    ['good', 'goodly', 'more good'],
    'Se describe cómo toca (una acción), y el adverbio de good es well: «very well». good es adjetivo, y goodly y more good no se usan así.'
  ),

  // ─── Unidad 2 · Presente perfecto y pasado simple (7) ───
  ejercicio(
    'She ___ to Japan three times.',
    'has been',
    ['have been', 'was', 'is been'],
    'Para una experiencia sin fecha se usa presente perfecto, y con she va has: «has been». have no concuerda con she, was no es presente perfecto e is been no existe.'
  ),
  ejercicio(
    'We ___ the film yesterday.',
    'saw',
    ['have seen', 'seen', 'see'],
    'yesterday es un tiempo terminado, así que se usa pasado simple: saw. have seen no se usa con yesterday, seen necesita un auxiliar y see es la base.'
  ),
  ejercicio(
    'I have ___ my homework. Can I go out now? (do)',
    'done',
    ['did', 'do', 'doed'],
    'Después de have va el participio. El participio de do es done. did es el pasado simple, do es la base y doed no existe.'
  ),
  ejercicio(
    'A: Has she called? B: No, she ___.',
    "hasn't",
    ["didn't", "doesn't", "haven't"],
    "La respuesta corta repite el auxiliar de la pregunta (has): «No, she hasn't». didn't y doesn't no corresponden a una pregunta con has y haven't no concuerda con she."
  ),
  ejercicio(
    '___ did you meet your husband? In 2015.',
    'When',
    ['Have', 'Did', 'Where'],
    'La respuesta da un año, así que la pregunta es por el momento: When did you meet…? Have y Did no son palabras interrogativas y Where preguntaría por un lugar.'
  ),
  ejercicio(
    "He's not here. He has ___ to the bank.",
    'gone',
    ['went', 'goes', 'going'],
    'Como no está aquí, se usa has gone (fue y todavía no vuelve). went es pasado simple y no va con has; goes y going no son participios.'
  ),
  ejercicio(
    "I've ___ been to Brazil, but I'd love to go.",
    'never',
    ['ever', 'not', 'yet'],
    'never significa «nunca» y va entre have y el participio: «I\'ve never been». ever se usa en preguntas, y not y yet no forman esta frase afirmativa.'
  ),

  // ─── Unidad 3 · Superlativos y How + adjetivo (6) ───
  ejercicio(
    'This is ___ restaurant in town. (good)',
    'the best',
    ['the better', 'the goodest', 'best'],
    'El superlativo de good es the best. the better es un comparativo con the, the goodest no existe y best necesita the delante.'
  ),
  ejercicio(
    'She is ___ student in my class. (intelligent)',
    'the most intelligent',
    ['the intelligentest', 'more intelligent', 'the most intelligenter'],
    'Los adjetivos largos forman el superlativo con the most: «the most intelligent». the intelligentest y the most intelligenter mezclan las formas y more intelligent es comparativo.'
  ),
  ejercicio(
    'It was ___ day of my life! (bad)',
    'the worst',
    ['the baddest', 'the most bad', 'worse'],
    'El superlativo de bad es the worst. the baddest y the most bad no existen y worse es el comparativo.'
  ),
  ejercicio(
    'The team at the bottom of the table has the ___ points.',
    'fewest',
    ['most', 'fewer', 'littlest'],
    'points es contable en plural y se habla del menor número: the fewest. the most sería lo contrario, fewer es comparativo y littlest no se usa así.'
  ),
  ejercicio(
    '___ is it from here to the station? About two kilometers.',
    'How far',
    ['How many', 'How much', 'How old'],
    'Se pregunta por la distancia: How far. How many y How much preguntan por cantidades y How old por la edad.'
  ),
  ejercicio(
    '___ do you go to the gym? Three times a week.',
    'How often',
    ['How long', 'How far', 'How much'],
    'La respuesta indica frecuencia, así que se pregunta con How often. How long, How far y How much no preguntan por frecuencia.'
  ),
];
