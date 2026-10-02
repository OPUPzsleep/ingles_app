import type { QuizQuestion } from '@/types/grammar';

import { ejercicio } from './ayuda';

/** Examen del bloque 1 (unidades 1–3): 20 ejercicios distintos a los de las unidades. */
export const EXAMEN_BLOQUE_1: QuizQuestion[] = [
  // ─── Unidad 1 · Verbo To Be (7) ───
  ejercicio(
    'My parents ___ at work.',
    'are',
    ['is', 'am', 'be'],
    'My parents = they, y con they va are: «My parents are at work» (Mis padres están en el trabajo).'
  ),
  ejercicio(
    '¿Cuál oración es correcta? (No soy doctor.)',
    "I'm not a doctor.",
    ["I amn't a doctor.", "I isn't a doctor.", "I don't a doctor."],
    "Con I la negativa es I'm not (I am not). «I amn't» no existe, isn't es para he / she / it y don't no se usa con to be."
  ),
  ejercicio(
    '___ your sister at home?',
    'Is',
    ['Are', 'Am', 'Does'],
    'your sister = she, y en la pregunta el verbo va antes del sujeto: «Is she at home?» / «Is your sister at home?».'
  ),
  ejercicio(
    'Is Tom a student? — No, ___.',
    "he isn't",
    ["he aren't", 'he not is', "he doesn't"],
    "Se responde con el pronombre (he) y el verbo to be: «No, he isn't». aren't es para you / we / they, y doesn't no va con to be."
  ),
  ejercicio(
    'Are your parents at home? — Yes, ___.',
    'they are',
    ["they're", 'they is', 'we are'],
    "Tus padres = they, y en la respuesta corta afirmativa el verbo no se contrae: «Yes, they are» (no «Yes, they're»)."
  ),
  ejercicio(
    "___'s your phone number? — It's 555-0123.",
    'What',
    ['Where', 'Who', 'When'],
    "Se pregunta por qué número es: What's your phone number? (What is = What's). Where es para lugares."
  ),
  ejercicio(
    '¿Cómo se dice «Ellos no están en casa»?',
    "They aren't at home.",
    ['They no are at home.', "They don't at home.", "They isn't at home."],
    'La negativa de to be pone not después del verbo: they are not = they aren\'t. isn\'t es para he / she / it, y don\'t no se usa con to be.'
  ),

  // ─── Unidad 2 · A / An / The, This / These y plurales (7) ───
  ejercicio(
    'We wait for ___ hour.',
    'an',
    ['a', 'two', 'these'],
    'En hour la h no suena: empieza con sonido de vocal, así que va an: «an hour». Se cuenta el sonido, no la letra.'
  ),
  ejercicio(
    'Ana studies at ___ university in Lima.',
    'a',
    ['an', 'two', 'these'],
    'university empieza con sonido «iu» (de consonante), así que va a: «a university». Aunque empiece con la letra u, el sonido manda.'
  ),
  ejercicio(
    '___ moon is beautiful tonight.',
    'The',
    ['An', 'These', 'Two'],
    'Hay una sola luna y todos sabemos cuál es: the moon. Con cosas únicas (the sun, the moon) se usa the.'
  ),
  ejercicio(
    'Is ___ your phone?',
    'this',
    ['these', 'an', 'are'],
    'phone está en singular y cerca: this. these pide plural («Are these your phones?»).'
  ),
  ejercicio(
    '___ keys are mine.',
    'These',
    ['This', 'A', 'An'],
    'keys está en plural y cerca: these. this es para una sola cosa, y a / an no se usan con plurales.'
  ),
  ejercicio(
    'She has three ___. (watch)',
    'watches',
    ['watchs', 'watchies', 'watch'],
    'watch termina en -ch: el plural se forma con -es → watches.'
  ),
  ejercicio(
    'Two ___ are at the door. (man)',
    'men',
    ['mans', 'mens', 'man'],
    'man es irregular: man → men. No se le agrega -s.'
  ),

  // ─── Unidad 3 · Posesivos (6) ───
  ejercicio(
    "Is this ___ phone? (el teléfono de Leo)",
    "Leo's",
    ['Leos', "Leos'", 'Leo'],
    "Un solo dueño: se agrega 's → «Leo's phone». Sin el apóstrofo (Leos) sería un plural, no una posesión."
  ),
  ejercicio(
    'These are my ___ books. (los libros de mis padres)',
    "parents'",
    ["parent's", 'parents', "parents's"],
    "Varios dueños y el plural ya termina en -s: solo se agrega el apóstrofo → «my parents' books». parent's sería de un solo padre."
  ),
  ejercicio(
    'The ___ toys are here. (los juguetes de los niños)',
    "children's",
    ["childrens'", 'childrens', "childs'"],
    "children es un plural irregular que no termina en -s, así que se agrega 's → «the children's toys»."
  ),
  ejercicio(
    'Tom and Ana are with ___ friends.',
    'their',
    ['they', 'there', 'them'],
    'El posesivo de they es their y va antes del sustantivo: «their friends» (sus amigos).'
  ),
  ejercicio(
    'He loves ___ mother. (su mamá, de él)',
    'his',
    ['her', 'he', 'its'],
    'El dueño es un hombre (he), así que el posesivo es his. her sería de una mujer, y its es para cosas o animales.'
  ),
  ejercicio(
    'My sister ___ two dogs.',
    'has got',
    ['have got', 'is got', 'is have'],
    "Con he / she / it se dice has got (= has): «My sister has got two dogs». have got es para I / you / we / they."
  ),
];
