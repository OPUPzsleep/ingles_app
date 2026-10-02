import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from '../curso/ayuda';

/** Examen del bloque 2 (ids 16–18, Unidad 4–6 de A2): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_A2_BLOQUE_2: QuizQuestion[] = [
  // ─── Unidad 4 · Going to, objetos indirectos, presente continuo para el futuro (7) ───
  ejercicio(
    'Why are you carrying a ladder? — I ___ paint my room.',
    'am going to',
    ['going to', 'am go to', 'do going to'],
    'Es un plan con una prueba visible (la escalera): am / is / are + going to. «I am going to paint». Las otras opciones no tienen el auxiliar correcto.'
  ),
  ejercicio(
    'We ___ to the cinema tonight. I have the tickets.',
    'are going',
    ['go', 'goes', 'does go'],
    'Es un arreglo ya organizado (ya hay entradas): presente continuo, «We are going to the cinema». go es presente simple y goes no concuerda con we.'
  ),
  ejercicio(
    'Is he going to ___ the exam? (take)',
    'take',
    ['takes', 'taking', 'took'],
    'Después de going to el verbo va en base: «Is he going to take the exam?». Los demás tienen -s, -ing o pasado.'
  ),
  ejercicio(
    'They ___ going to move next year.',
    "aren't",
    ["don't", "isn't", 'not'],
    "La negativa de be going to lleva el auxiliar be + not: con they, «They aren't going to move». don't es del presente simple e isn't es para he, she, it."
  ),
  ejercicio(
    'Can you send ___ the photos?',
    'me',
    ['I', 'my', 'mine'],
    'Después de send va el pronombre objeto: me. I es pronombre sujeto, my va antes de un sustantivo y mine significa «mío».'
  ),
  ejercicio(
    'She made a cake ___ her sister.',
    'for',
    ['to', 'at', 'of'],
    'Con el verbo make la persona beneficiada lleva for: «She made a cake for her sister». to se usa con give, send y show.'
  ),
  ejercicio(
    'I found your keys and gave ___ to Tom.',
    'them',
    ['they', 'their', 'theirs'],
    'keys es plural y es el objeto directo, así que se usa el pronombre objeto them: «I gave them to Tom». they es sujeto, their va antes de un sustantivo y theirs significa «de ellos».'
  ),

  // ─── Unidad 5 · Pasado simple, be born y determinantes (7) ───
  ejercicio(
    'My parents ___ in Cusco. (be born)',
    'were born',
    ['was born', 'are born', 'born'],
    'Nacer siempre se dice en pasado, y con my parents (they) va were: «were born». was es para un solo sujeto y are born no se usa.'
  ),
  ejercicio(
    'She ___ up at six yesterday. (get)',
    'got',
    ['get', 'gets', 'getted'],
    'yesterday pide pasado simple, y get es irregular: got. get y gets son presente y getted no existe.'
  ),
  ejercicio(
    '___ you tired after the trip?',
    'Were',
    ['Did', 'Was', 'Do'],
    'tired es un adjetivo y se usa con to be: en pasado y con you va Were. Did y Do son auxiliares de otros verbos y Was no concuerda con you.'
  ),
  ejercicio(
    'What time ___ the film start yesterday?',
    'did',
    ['do', 'does', 'was'],
    'start es un verbo común y yesterday pide pasado: la pregunta lleva did + verbo base. do y does son de presente y was no se usa con start.'
  ),
  ejercicio(
    'Who ___ the window yesterday? (break)',
    'broke',
    ['breaks', 'break', 'breaked'],
    'Con who como sujeto no se usa did, y el verbo va en pasado: broke (break es irregular). breaks y break son presente y breaked no existe.'
  ),
  ejercicio(
    '___ people love chocolate. (almost everyone)',
    'Most',
    ['None', 'No', 'Few'],
    'Most (la mayoría) significa casi todos. None y No indican que nadie lo hace y Few indica que muy pocos lo hacen.'
  ),
  ejercicio(
    'We went to a restaurant. ___ food was great.',
    'The',
    ['A', 'An', 'No article'],
    'Se habla de la comida de ese restaurante ya mencionado, algo específico: The food. A y an son para algo no identificado.'
  ),

  // ─── Unidad 6 · There is / are, one y some, ofrecimientos y peticiones (6) ───
  ejercicio(
    'There ___ a lot of people in the park today.',
    'are',
    ['is', 'be', 'have'],
    'a lot of people es plural, así que se usa there are. there is es para singular o incontables, be no se conjuga y have no significa «hay».'
  ),
  ejercicio(
    'A: Are there any buses at night? B: No, there ___.',
    "aren't",
    ["isn't", "don't", 'not'],
    "La respuesta corta repite there + el verbo de la pregunta (are): «No, there aren't». isn't es singular y don't no se usa con there."
  ),
  ejercicio(
    "A: Is there any sugar? B: Yes, there's ___.",
    'some',
    ['one', 'it', 'any'],
    'sugar es incontable, así que la respuesta afirmativa usa some: «Yes, there\'s some». one es para cosas contables en singular y any no va en afirmativas.'
  ),
  ejercicio(
    '___ you pass me the salt, please? (a polite request)',
    'Could',
    ['Are', 'Do', 'Is'],
    'Para pedir algo con cortesía se usa Could you…? Are, Do e Is no forman una petición con you + pass.'
  ),
  ejercicio(
    'Would you mind ___ the door? (close)',
    'closing',
    ['close', 'to close', 'closed'],
    'mind va seguido de -ing: «Would you mind closing the door?». close, to close y closed no se usan después de mind.'
  ),
  ejercicio(
    "There's a café on the corner. ___ very cheap.",
    "It's",
    ["There's", 'Is', "They're"],
    "There presenta el café y it lo describe: «It's very cheap». There's no se usa para describir, Is no tiene sujeto y They're es plural."
  ),
];
