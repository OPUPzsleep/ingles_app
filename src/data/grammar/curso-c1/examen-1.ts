import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 1 (ids 146–148, Unidad 1–3 de C1): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_C1_BLOQUE_1: QuizQuestion[] = [
  // ─── Unidad 1 · Hábitos y tendencias; And / But / So (7) ───
  ejercicio(
    'Journalists ___ not to reveal their sources.',
    'tend',
    ['tends', 'are tending', 'tending'],
    'Con journalists (plural) se usa tend + not to + verbo: tend not to. tends no concuerda y are tending y tending no se usan con este significado.'
  ),
  ejercicio(
    'He ___ always leave his dirty cups on the desk, however many times I ask him.',
    'will',
    ['is', 'has', 'does to'],
    'Will + verbo base expresa un comportamiento habitual con un matiz de queja: will always leave. is, has y does to no forman esa estructura.'
  ),
  ejercicio(
    "She's constantly ___ about her job. It's tiring to listen.",
    'complaining',
    ['complain', 'complains', 'to complain'],
    'Constantly + presente continuo expresa un hábito que molesta: «She\'s constantly complaining». complain, complains y to complain no forman esa estructura.'
  ),
  ejercicio(
    'Which question connects best to "I\'ve quit my job"?',
    'So what are you going to do now?',
    ['Although what are you going to do now?', 'What so are you going to do now?', 'Since what are you going to do now?'],
    'So al inicio de la pregunta saca una conclusión de lo que dijo el otro. Although y Since no inician preguntas y What so no es una estructura.'
  ),
  ejercicio(
    'I tend ___ the news on my phone rather than on TV. (read)',
    'to read',
    ['reading', 'read', 'to reading'],
    'Tend va seguido de to + verbo base: tend to read. reading, read y to reading no forman esa estructura.'
  ),
  ejercicio(
    'A teenager ___ spend all weekend gaming without eating a proper meal.',
    'will',
    ['tends', 'has', 'does'],
    'Will + verbo base describe el comportamiento típico de alguien: will spend. tends, has y does no se combinan con el verbo base de esta manera.'
  ),
  ejercicio(
    'When I was a child, my grandfather ___ tell us a story every night.',
    'would',
    ['will', 'is', 'tends'],
    'Would + verbo base describe un hábito del pasado. will y is son presentes y tends no se combina con el verbo base.'
  ),

  // ─── Unidad 2 · Cláusulas relativas; which; You know what…? (7) ───
  ejercicio(
    'Mrs Ortiz, ___ taught me English, is retiring.',
    'who',
    ['that', 'whom', 'which'],
    'En una cláusula no definitoria no se usa that. Para una persona que es sujeto de taught se usa who. whom es para objetos y which es para cosas.'
  ),
  ejercicio(
    'The photographs ___ were on display were stunning.',
    'that',
    ['who', 'whose', 'where'],
    'Es una cláusula definitoria sobre cosas: that (o which). who es para personas, whose indica posesión y where indica lugar.'
  ),
  ejercicio(
    'He lost his phone, ___ was a disaster.',
    'which',
    ['what', 'who', 'that'],
    'Para comentar toda la idea anterior se usa which después de una coma. what, who y that no se usan así.'
  ),
  ejercicio(
    'The woman ___ car was stolen called the police.',
    'whose',
    ['who', 'which', 'whom'],
    'El auto es «de» esa mujer: se usa whose para la posesión. who, which y whom no indican posesión.'
  ),
  ejercicio(
    'She has two sisters, both of ___ live abroad.',
    'whom',
    ['who', 'which', 'them'],
    'Después de both of se usa whom para personas en una cláusula no definitoria. who, which y them no se usan después de of en esta estructura.'
  ),
  ejercicio(
    'Choose the sentence in which the relative clause gives EXTRA information.',
    'My sister, who lives in Cusco, is a nurse.',
    ['Students who cheat will fail.', 'The man who called is here.', 'The book that I read was great.'],
    'La cláusula entre comas es no definitoria y aporta información extra. Las otras son definitorias y identifican de quién o de qué se habla.'
  ),
  ejercicio(
    'You ___ what? I do not think we should go.',
    'know',
    ['knew', 'known', 'knowing'],
    'La expresión para introducir un comentario es «You know what?». knew, known y knowing no forman esa expresión.'
  ),

  // ─── Unidad 3 · Tiempos narrativos; interrumpir una historia; no wonder (6) ───
  ejercicio(
    'She was nervous because she ___ flown before.',
    'had never',
    ['never had', 'has never', 'did never'],
    'Lo anterior a estar nerviosa se marca con el pasado perfecto: had never flown. never had, has never y did never no son correctas.'
  ),
  ejercicio(
    'His hands were covered in paint. He ___ the ceiling.',
    'had been painting',
    ['paints', 'was painted', 'has painted'],
    'Se explica un estado con una actividad anterior de la que importa la duración: pasado perfecto continuo, had been painting. Las otras formas no marcan esa relación.'
  ),
  ejercicio(
    'While we ___ dinner, the lights went out.',
    'were having',
    ['are having', 'had had', 'have'],
    'La acción de fondo en curso en el pasado va en pasado continuo: were having. are having es presente, had had y have no marcan una acción en curso.'
  ),
  ejercicio(
    "No wonder she failed — she ___ a single lesson. (never attended)",
    "hadn't attended",
    ["didn't attended", "hasn't attended", "wouldn't attend"],
    'Lo anterior al fracaso se marca con el pasado perfecto negativo: hadn\'t attended. Las otras formas están mal construidas o no marcan la anterioridad.'
  ),
  ejercicio(
    '…Anyway, as I was ___, we left at six.',
    'saying',
    ['say', 'said', 'to say'],
    'Para retomar una historia se dice «as I was saying». say, said y to say no forman esa expresión.'
  ),
  ejercicio(
    '___ wonder you feel ill after eating all that cake!',
    'No',
    ['Not', 'None', 'Any'],
    'La expresión es No wonder + cláusula. Not, None y Any no forman esa expresión.'
  ),
];
