import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_2 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from './ayuda';

// Bloque 2 · Presente simple y cuantificadores (unidades 4–6).

// ─── Unidad 4 · Presente simple y adverbios de frecuencia ───

const UNIDAD_4: Unit = {
  title: 'Present Simple and Adverbs of Frequency',
  topic: BLOQUE_2,
  level: 'A1',
  explain: [
    teoria(
      '1 · Presente simple: ¿cuándo se usa?',
      'El presente simple habla de lo que haces siempre o muchas veces, y de hechos que son verdad.\n\n• Rutinas: I get up at seven.\n• Hábitos: She plays soccer on Saturdays.\n• Hechos: The shop opens at nine.\n\nSe reconoce por palabras como every day, on Mondays, at night, always y never.',
      [
        ['I get up at seven every day.', 'Me levanto a las siete todos los días.'],
        ['She plays soccer on Saturdays.', 'Ella juega fútbol los sábados.'],
        ['They live in a small town.', 'Ellos viven en un pueblo pequeño.'],
        ['The shop opens at nine.', 'La tienda abre a las nueve.'],
      ]
    ),
    teoria(
      '2 · Afirmativa: sujeto + verbo',
      'Con I, you, we y they el verbo se queda igual. Con he, she e it se agrega -s:\n\n• I work · you work · we work · they work\n• he works · she works · it works\n\nOrtografía con he / she / it:\n• casi todos: + s → works, plays, eats\n• s, sh, ch, x, o: + es → watches, goes, does\n• consonante + y: -ies → study → studies\n• have → has\n\n⚠️ Ojo: la -s de he / she / it es el error más común: «She works», no «She work».',
      [
        ['I work in a bank.', 'Trabajo en un banco.'],
        ['She watches TV at night.', 'Ella ve televisión en la noche.'],
        ['He studies English every day.', 'Él estudia inglés todos los días.'],
        ['My dog has a big bed.', 'Mi perro tiene una cama grande.'],
        ['We eat lunch at noon.', 'Almorzamos al mediodía.'],
      ]
    ),
    teoria(
      "3 · Negativa: don't / doesn't + verbo",
      "Para negar se usa do + not antes del verbo, y el verbo vuelve a su forma base (sin -s):\n\n• I, you, we, they → don't (do not)\n• he, she, it → doesn't (does not)\n\n• I don't like coffee.\n• She doesn't like coffee.\n\n⚠️ Ojo: la -s se queda en doesn't: «She doesn't work», no «She doesn't works».",
      [
        ["I don't like coffee.", 'No me gusta el café.'],
        ["They don't work on Sundays.", 'Ellos no trabajan los domingos.'],
        ["He doesn't eat meat.", 'Él no come carne.'],
        ["She doesn't live here.", 'Ella no vive aquí.'],
      ]
    ),
    teoria(
      '4 · Preguntas de Sí / No: Do / Does',
      'Para preguntar se pone Do o Does al inicio, luego el sujeto y el verbo en forma base:\n\n• Do + I / you / we / they + verbo?\n• Does + he / she / it + verbo?\n\n• Do you work here? · Does she work here?\n\n⚠️ Ojo: en la pregunta tampoco se agrega la -s al verbo: «Does she work?», no «Does she works?».',
      [
        ['Do you work here?', '¿Trabajas aquí?'],
        ['Does she like pizza?', '¿A ella le gusta la pizza?'],
        ['Do they play soccer?', '¿Ellos juegan fútbol?'],
        ['Does your brother live in Lima?', '¿Tu hermano vive en Lima?'],
      ]
    ),
    teoria(
      '5 · Respuestas cortas',
      "Se responde con Yes o No + sujeto + do / does (o don't / doesn't). No se repite el verbo principal:\n\n• Do you work here? → Yes, I do. · No, I don't.\n• Does she like pizza? → Yes, she does. · No, she doesn't.\n\nCon he, she e it se usa does / doesn't; con los demás, do / don't.",
      [
        ['Do you like music? Yes, I do.', '¿Te gusta la música? Sí.'],
        ["Do they live here? No, they don't.", '¿Ellos viven aquí? No.'],
        ['Does he work today? Yes, he does.', '¿Él trabaja hoy? Sí.'],
        ["Does she speak English? No, she doesn't.", '¿Ella habla inglés? No.'],
      ]
    ),
    teoria(
      '6 · Preguntas de información',
      'Las preguntas con What (qué), Where (dónde), When (cuándo), Why (por qué) y How (cómo) llevan la palabra interrogativa al inicio y después el patrón de siempre: do / does + sujeto + verbo en base.\n\n• What do you eat for breakfast?\n• Where does he live?\n• What time do you get up?\n• How does she go to work?\n• Why do they study English?',
      [
        ['What do you eat for breakfast?', '¿Qué desayunas?'],
        ['Where does he live?', '¿Dónde vive él?'],
        ['What time do you get up?', '¿A qué hora te levantas?'],
        ['How does she go to work?', '¿Cómo va ella al trabajo?'],
        ['Why do they study English?', '¿Por qué ellos estudian inglés?'],
      ]
    ),
    teoria(
      '7 · Adverbios de frecuencia',
      "Dicen cada cuánto pasa algo. De más a menos:\n\n• always (siempre) — 100%\n• usually (normalmente)\n• often (a menudo)\n• sometimes (a veces)\n• never (nunca) — 0%\n\nVan ANTES del verbo principal («I always get up early») y DESPUÉS de to be («She is always happy»).\n\nPara preguntar cada cuánto: How often…? Se responde con un adverbio o con every day, once a week (una vez por semana), twice a month (dos veces al mes).\n\n⚠️ Ojo: never ya es negativo: «I never eat meat», no «I don't never eat meat».",
      [
        ['I always drink coffee in the morning.', 'Siempre tomo café en la mañana.'],
        ['She usually walks to school.', 'Ella normalmente camina a la escuela.'],
        ['We often eat pizza on Fridays.', 'A menudo comemos pizza los viernes.'],
        ['He sometimes plays video games.', 'Él a veces juega videojuegos.'],
        ["I'm never late.", 'Nunca llego tarde.'],
        ['How often do you study? Every day.', '¿Con qué frecuencia estudias? Todos los días.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Adverbio + verbo principal (I always work)', suj('subject'), resto('adverb'), verbo('verb')),
    fl('to be + adverbio (She is always happy)', suj('subject'), aux('am / is / are'), resto('adverb')),
    fl('How often…? (How often do you study?)', resto('How often'), aux('do / does'), suj('subject'), verbo('verb')),
  ],
  table: {
    cols: ['Termina en', 'he / she / it', 'Ejemplo'],
    rows: [
      ['casi todos', '+ s', 'work → works'],
      ['s, sh, ch, x', '+ es', 'watch → watches'],
      ['o', '+ es', 'go → goes'],
      ['consonante + y', '-y → -ies', 'study → studies'],
      ['vocal + y', '+ s', 'play → plays'],
      ['have', 'has', 'have → has'],
    ],
  },
  contrastCard: {
    left: { label: 'I / you / we / they', example: 'They work here.', highlight: 'work' },
    right: { label: 'he / she / it', example: 'She works here.', highlight: 'works' },
    caption: 'Con he, she e it el verbo lleva -s (works); con los demás no (work).',
  },
  quiz: [
    ejercicio(
      'My sister ___ in a bank. (Mi hermana trabaja en un banco.)',
      'works',
      ['work', 'is work', 'working'],
      'My sister = she: con he / she / it el verbo lleva -s → «works». work es para I / you / we / they, y «is work» y «working» mezclan to be con el verbo.'
    ),
    ejercicio(
      'He ___ coffee. (Él no toma café.)',
      "doesn't drink",
      ["don't drink", "doesn't drinks", "isn't drink"],
      "Con he la negativa es doesn't + verbo en base: «doesn't drink». don't es para I / you / we / they, y la -s no se agrega después de doesn't."
    ),
    ejercicio(
      '___ your parents live in Lima?',
      'Do',
      ['Does', 'Are', 'Is'],
      'your parents = they, y con they la pregunta empieza con Do: «Do your parents live in Lima?». Does es para he / she / it.'
    ),
    ejercicio(
      'Does she speak English? — No, ___.',
      "she doesn't",
      ["she don't", "she isn't", 'she not'],
      "La respuesta corta repite el auxiliar de la pregunta (does): «No, she doesn't». don't es para I / you / we / they, y isn't es de to be."
    ),
    ejercicio(
      '¿Cuál oración es correcta? (Siempre llego temprano.)',
      'I always arrive early.',
      ['I arrive always early.', 'Always arrive I early.', 'I am always arrive early.'],
      'El adverbio de frecuencia va ANTES del verbo principal: «I always arrive early». No se mezcla con to be («I am always arrive» está mal).'
    ),
  ],
  flashcards: [
    tarjeta('¿Cuándo uso el presente simple?', 'Rutinas, hábitos y hechos:\nI get up at seven.\nShe plays soccer on Saturdays.'),
    tarjeta('La -s de he / she / it', 'work → works · play → plays\nwatch → watches · go → goes\nstudy → studies · have → has'),
    tarjeta('Negativa y pregunta', "I / you / we / they: don't · Do\nhe / she / it: doesn't · Does\n(el verbo siempre en base: She doesn't work · Does she work?)"),
    tarjeta('Respuestas cortas', "Yes, I do. · No, I don't.\nYes, she does. · No, she doesn't."),
    tarjeta('Adverbios de frecuencia', 'always · usually · often · sometimes · never\nAntes del verbo: I always work.\nDespués de to be: She is always happy.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What do you do every day?', translation: '¿Qué haces todos los días?' },
    { speaker: 'user', text: 'I work in a shop. I usually get up at six.', translation: 'Trabajo en una tienda. Normalmente me levanto a las seis.' },
    { speaker: 'other', text: 'Do you work on Saturdays?', translation: '¿Trabajas los sábados?' },
    { speaker: 'user', text: "Yes, I do. But I don't work on Sundays.", translation: 'Sí. Pero no trabajo los domingos.' },
    { speaker: 'other', text: 'What does your sister do?', translation: '¿Qué hace tu hermana?' },
    { speaker: 'user', text: 'She studies English. She never gets up early!', translation: 'Ella estudia inglés. ¡Nunca se levanta temprano!' },
  ],
  readingText: {
    title: 'A day with Tom',
    body: 'Tom is a student. He gets up at seven o\'clock every day. He eats breakfast and goes to school by bus. He always studies in the library after class. On Saturdays he sometimes plays soccer with his friends. In the evening he usually watches TV. Does he go to bed late? No, he doesn\'t. He goes to bed at ten.',
    translation:
      'Tom es estudiante. Se levanta a las siete todos los días. Desayuna y va a la escuela en bus. Siempre estudia en la biblioteca después de clases. Los sábados a veces juega fútbol con sus amigos. En la noche normalmente ve televisión. ¿Se acuesta tarde? No. Se acuesta a las diez.',
  },
  tips: [
    'No olvides la -s de he / she / it: «She works», nunca «She work».',
    "En negativas y preguntas la -s pasa al auxiliar: «She doesn't work», «Does she work?», nunca «doesn't works».",
    'Con to be no se usa do / does: «Are you tired?», no «Do you tired?». Con los demás verbos sí.',
    "Los adverbios de frecuencia van antes del verbo («I always study») pero después de to be («I'm always happy»).",
  ],
  dailyWords: palabras('always', 'usually', 'often', 'sometimes', 'never', 'breakfast'),
  relacionados: [
    { etiqueta: '📖 Gramática: Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '➡️ Unidad 13 · Continuous and simple 1 (A2)', ruta: '/unidad/13' },
  ],
};

const FORMAS_4: FormasUnidad = {
  afirmativa: {
    formulas: [
      fl('I, you, we, they', suj('I / you / we / they'), verbo('verb')),
      fl('he, she, it', suj('he / she / it'), verbo('verb + s / es')),
    ],
    ejemplos: [
      ['I work here.', 'Yo trabajo aquí.'],
      ['She works here.', 'Ella trabaja aquí.'],
      ['They live in Lima.', 'Ellos viven en Lima.'],
    ],
  },
  negativa: {
    formulas: [
      fl('I, you, we, they', suj('I / you / we / they'), neg("don't"), verbo('verb')),
      fl('he, she, it', suj('he / she / it'), neg("doesn't"), verbo('verb')),
    ],
    ejemplos: [
      ["I don't work here.", 'Yo no trabajo aquí.'],
      ["He doesn't like coffee.", 'A él no le gusta el café.'],
      ["We don't eat meat.", 'No comemos carne.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Do / Does'), suj('subject'), verbo('verb')),
      fl('Información', resto('What / Where / When…'), aux('do / does'), suj('subject'), verbo('verb')),
    ],
    ejemplos: [
      ['Do you work here?', '¿Trabajas aquí?'],
      ['Does she like coffee?', '¿A ella le gusta el café?'],
      ['Where do they live?', '¿Dónde viven ellos?'],
    ],
  },
  nota: "do / don't con I, you, we, they · does / doesn't con he, she, it. Respuestas cortas: Yes, I do. / No, she doesn't. Los adverbios de frecuencia van antes del verbo: I always work.",
  ojo: "La -s se queda en el auxiliar: «She doesn't work» y «Does she work?» (no «doesn't works» ni «Does she works?»).",
};

// ─── Unidad 5 · There is / There are · Cuantificadores · Adjetivos ───

const UNIDAD_5: Unit = {
  title: 'There is / There are, Quantifiers and Adjectives',
  topic: BLOQUE_2,
  level: 'A1',
  explain: [
    teoria(
      '1 · There is / There are: hay',
      "there is y there are significan «hay»: se usan para decir que algo existe o está en un lugar.\n\n• there is (there's) + una cosa: There's a book on the table.\n• there are + varias cosas: There are two books on the table.\n\n⚠️ Ojo: en español «hay» no cambia (hay un libro, hay dos libros); en inglés sí: there is / there are.",
      [
        ["There's a park near my house.", 'Hay un parque cerca de mi casa.'],
        ['There are two chairs in the room.', 'Hay dos sillas en el cuarto.'],
        ["There's a cat on the sofa.", 'Hay un gato en el sofá.'],
        ['There are three bedrooms in the house.', 'Hay tres habitaciones en la casa.'],
      ]
    ),
    teoria(
      '2 · Negativa, pregunta y respuestas cortas',
      "• Negativa: there isn't (is not) · there aren't (are not)\n• Pregunta: Is there…? · Are there…?\n• Respuestas: Yes, there is. · No, there isn't. / Yes, there are. · No, there aren't.\n\nThere isn't a bank here. → Is there a bank here? → No, there isn't.\n\n⚠️ Ojo: en el Yes no se contrae: «Yes, there is», no «Yes, there's».",
      [
        ["There isn't a bank here.", 'No hay un banco aquí.'],
        ["There aren't two beds in my room.", 'No hay dos camas en mi cuarto.'],
        ['Is there a restaurant near here?', '¿Hay un restaurante cerca de aquí?'],
        ['Are there two beds? Yes, there are.', '¿Hay dos camas? Sí, hay.'],
        ["Is there a bus? No, there isn't.", '¿Hay un bus? No.'],
      ]
    ),
    teoria(
      '3 · Cuantificadores: some, any, a lot of…',
      "Los cuantificadores dicen cuánto o cuántos hay:\n\n• some (unos, algo de): en afirmativas → There are some apples.\n• any (ningún, alguno): en negativas y preguntas → There aren't any apples. · Are there any apples?\n• a lot of (mucho, muchos): There are a lot of apples.\n• a few (unos pocos) + plural: a few apples\n• a little (un poco) + algo que no se cuenta: a little milk\n• no (ningún): There are no apples (= There aren't any apples).\n\nMás adelante se ven some / any (Unidad 12) y much / many (Unidades 11 y 12).",
      [
        ['There are some apples on the table.', 'Hay unas manzanas en la mesa.'],
        ["There aren't any eggs in the kitchen.", 'No hay huevos en la cocina.'],
        ['There are a lot of people in the park.', 'Hay mucha gente en el parque.'],
        ['There is a little milk in the cup.', 'Hay un poco de leche en la taza.'],
        ['There are a few books on the desk.', 'Hay unos pocos libros en el escritorio.'],
      ]
    ),
    teoria(
      '4 · Adjetivos antes del sustantivo',
      'En inglés el adjetivo va ANTES del sustantivo (en español va después): a red car = un auto rojo. Y no cambia: no tiene plural ni género.\n\n• a big house → una casa grande\n• two big houses → dos casas grandes\n• an old man → un hombre viejo (an delante de vocal)\n\nTambién va después de to be: The house is big.\n\n⚠️ Ojo: «a car red» está mal, y «reds cars» también: se dice «red cars».',
      [
        ['I have a red car.', 'Tengo un auto rojo.'],
        ['She has two small dogs.', 'Ella tiene dos perros pequeños.'],
        ['This is a very nice restaurant.', 'Este es un restaurante muy lindo.'],
        ['They live in a big old house.', 'Ellos viven en una casa grande y vieja.'],
        ['The house is big.', 'La casa es grande.'],
      ]
    ),
    teoria(
      '📖 Del libro · Comparativos: adjetivos cortos (-er)',
      'Para comparar dos cosas se usa el comparativo + than (que). Con adjetivos cortos (una sílaba) se agrega -er:\n\n• old → older · fast → faster\n• big → bigger (se dobla la consonante)\n• happy → happier (la y cambia a i)\n\nDespués de than va lo que se compara: «My car is faster than your car».',
      [
        ['My brother is taller than me.', 'Mi hermano es más alto que yo.'],
        ['The train is faster than the bus.', 'El tren es más rápido que el bus.'],
        ['This room is bigger than my room.', 'Este cuarto es más grande que mi cuarto.'],
        ['I am happier today than yesterday.', 'Hoy estoy más feliz que ayer.'],
      ]
    ),
    teoria(
      '📖 Del libro · Comparativos: adjetivos largos (more)',
      'Con adjetivos largos (dos sílabas o más) no se agrega -er: se pone more antes del adjetivo, que no cambia:\n\n• expensive → more expensive\n• interesting → more interesting\n• comfortable → more comfortable\n\nPara decir «menos» se usa less: less expensive.',
      [
        ['This phone is more expensive than my phone.', 'Este teléfono es más caro que mi teléfono.'],
        ['English is more interesting than math.', 'El inglés es más interesante que las matemáticas.'],
        ['This chair is more comfortable than the sofa.', 'Esta silla es más cómoda que el sofá.'],
        ['The bus is less expensive than the taxi.', 'El bus es menos caro que el taxi.'],
      ]
    ),
    teoria(
      '📖 Del libro · Comparativos irregulares',
      'Algunos adjetivos muy comunes tienen un comparativo irregular que hay que memorizar:\n\n• good → better (mejor)\n• bad → worse (peor)\n\n«More good» y «more bad» no existen.',
      [
        ['Today is better than yesterday.', 'Hoy es mejor que ayer.'],
        ['This film is worse than the book.', 'Esta película es peor que el libro.'],
        ['My English is better now.', 'Mi inglés es mejor ahora.'],
      ]
    ),
    teoria(
      '📖 Del libro · in / at / on (lugar)',
      'Para decir dónde está algo:\n\n• in = dentro de un espacio: in the room · in London · in a car\n• on = sobre una superficie: on the table · on the wall · on the bus\n• at = en un punto o lugar: at the door · at the station · at home · at school\n\nCon at home, at school y at work no se usa the.',
      [
        ['The keys are in the box.', 'Las llaves están en la caja.'],
        ['The book is on the table.', 'El libro está sobre la mesa.'],
        ['She is at the door.', 'Ella está en la puerta.'],
        ['My parents are at home.', 'Mis padres están en casa.'],
        ['I live in Lima.', 'Vivo en Lima.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('some / any / a lot of + sustantivo', aux('some / any / a lot of'), suj('noun')),
    fl('Adjetivo antes del sustantivo (a big house)', resto('a / an'), aux('adjective'), suj('noun')),
    fl('Comparativo (My brother is taller than me)', suj('subject'), aux('am / is / are'), verbo('adjective + er'), resto('than + noun')),
    fl('Lugar (in the room · on the table · at the door)', aux('in / on / at'), resto('place')),
  ],
  table: {
    cols: ['Cuantificador', 'Se usa con', 'Ejemplo'],
    rows: [
      ['some', 'afirmativas', 'some apples'],
      ['any', 'negativas y preguntas', "aren't any apples"],
      ['a lot of', 'todo', 'a lot of apples'],
      ['a few', 'plural', 'a few apples'],
      ['a little', 'lo que no se cuenta', 'a little milk'],
      ['no', 'afirmativas (= not any)', 'no apples'],
    ],
  },
  contrastCard: {
    left: { label: 'some — afirmativa', example: 'There are some apples.', highlight: 'some apples' },
    right: { label: 'any — negativa y pregunta', example: "There aren't any apples.", highlight: 'any apples' },
    caption: 'some en afirmativas · any en negativas y preguntas («Are there any apples?»).',
  },
  quiz: [
    ejercicio('There ___ a cat on the sofa.', 'is', ['are', 'have', 'has'], 'a cat es una sola cosa, así que va there is: «There is a cat on the sofa» (Hay un gato en el sofá). There are es para varias cosas.'),
    ejercicio('There ___ three books on the table.', 'are', ['is', 'have', 'has'], 'three books son varias cosas, así que va there are. There have / has no existen para decir «hay».'),
    ejercicio('___ there a bank near here? — Yes, there is.', 'Is', ['Are', 'Do', 'Does'], 'La pregunta con there is cambia el orden: Is there…? Con una sola cosa (a bank) va Is; Are there…? es para varias.'),
    ejercicio("I don't have ___ friends here.", 'any', ['some', 'a', 'an'], 'En las negativas se usa any: «I don\'t have any friends». some es para afirmativas, y a / an no van con plurales.'),
    ejercicio(
      '¿Cuál oración es correcta? (Es una casa pequeña.)',
      "It's a small house.",
      ["It's a house small.", "It's a smalls house.", "It's small a house."],
      'El adjetivo va ANTES del sustantivo y no cambia: «a small house». Después del sustantivo («house small») es el orden del español.'
    ),
  ],
  flashcards: [
    tarjeta('¿there is o there are?', "there is + una cosa: There's a bank.\nthere are + varias: There are two banks."),
    tarjeta('Negativa y pregunta', "there isn't · there aren't\nIs there…? · Are there…?\nYes, there is. · No, there isn't."),
    tarjeta('some, any, a lot of', 'some: afirmativas\nany: negativas y preguntas\na lot of: mucho / muchos'),
    tarjeta('El adjetivo va antes', 'a red car (no «a car red»)\ntwo red cars (el adjetivo no cambia)'),
    tarjeta('in, on, at (lugar)', 'in: dentro (in the room)\non: sobre una superficie (on the table)\nat: un punto (at the door, at home)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Is there a bank near your house?', translation: '¿Hay un banco cerca de tu casa?' },
    { speaker: 'user', text: "Yes, there is. There's a small bank next to the park.", translation: 'Sí. Hay un banco pequeño junto al parque.' },
    { speaker: 'other', text: 'Are there any restaurants?', translation: '¿Hay restaurantes?' },
    { speaker: 'user', text: "Yes, there are a lot of restaurants, but there isn't a big supermarket.", translation: 'Sí, hay muchos restaurantes, pero no hay un supermercado grande.' },
    { speaker: 'other', text: 'And is there a school?', translation: '¿Y hay una escuela?' },
    { speaker: 'user', text: "No, there isn't. But there are some good schools in the city.", translation: 'No. Pero hay algunas buenas escuelas en la ciudad.' },
  ],
  readingText: {
    title: 'My room',
    body: "This is my room. It is small, but it is nice. There is a big bed and a small table. There are two chairs and a lamp. On the table there are some books and a blue pen. There isn't a TV in my room, but there are a lot of pictures on the wall. Is there a window? Yes, there is. It is a big window, and there is a beautiful garden outside.",
    translation:
      'Este es mi cuarto. Es pequeño, pero es lindo. Hay una cama grande y una mesa pequeña. Hay dos sillas y una lámpara. Sobre la mesa hay algunos libros y un bolígrafo azul. No hay televisor en mi cuarto, pero hay muchos cuadros en la pared. ¿Hay una ventana? Sí, hay. Es una ventana grande y afuera hay un jardín hermoso.',
  },
  tips: [
    'En español «hay» no cambia, pero en inglés sí: there is + una cosa, there are + varias.',
    "En la respuesta corta no se contrae: «Yes, there is», no «Yes, there's».",
    "En afirmativas usa some; en negativas y preguntas, any: «There are some books» · «There aren't any books» · «Are there any books?».",
    'El adjetivo va ANTES del sustantivo y no cambia: «a red car», «two red cars».',
  ],
  dailyWords: palabras('big', 'small', 'new', 'old', 'kitchen', 'bedroom'),
  relacionados: [
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
    { etiqueta: '📖 Gramática: IN / ON / AT — lugar', ruta: '/gramatica/concepto/in-on-at-preposiciones-de-lugar' },
    { etiqueta: '➡️ Unidad 33 · there… and it… (A2)', ruta: '/unidad/33' },
    { etiqueta: '➡️ Unidad 35 · much, many, little, few (A2)', ruta: '/unidad/35' },
  ],
};

const FORMAS_5: FormasUnidad = {
  afirmativa: {
    formulas: [f(resto('There'), aux('is / are'), suj('noun'), resto('place'))],
    ejemplos: [
      ["There's a bank near here.", 'Hay un banco cerca de aquí.'],
      ['There are two parks in my town.', 'Hay dos parques en mi pueblo.'],
      ["There's a lamp on the table.", 'Hay una lámpara sobre la mesa.'],
    ],
  },
  negativa: {
    formulas: [
      fl('Forma completa', resto('There'), aux('is / are'), neg('not'), suj('noun')),
      fl('Forma corta', resto('There'), neg("isn't / aren't"), suj('noun')),
    ],
    ejemplos: [
      ["There isn't a school here.", 'No hay una escuela aquí.'],
      ["There aren't any shops.", 'No hay tiendas.'],
      ["There isn't a TV in my room.", 'No hay televisor en mi cuarto.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Is / Are'), resto('there'), suj('noun'), resto('place'))],
    ejemplos: [
      ['Is there a bus stop near here?', '¿Hay una parada de bus cerca de aquí?'],
      ['Are there any restaurants?', '¿Hay restaurantes?'],
      ['Is there a window in your room?', '¿Hay una ventana en tu cuarto?'],
    ],
  },
  nota: "there's = there is. Respuestas cortas: Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't. En plural: some en afirmativas, any en negativas y preguntas.",
  ojo: "En español «hay» no cambia; en inglés sí: there is + una cosa, there are + varias. Y en el Yes no se contrae: «Yes, there is».",
};

// ─── Unidad 6 · La hora y Let's ───

const UNIDAD_6: Unit = {
  title: "The Time and Let's",
  topic: BLOQUE_2,
  level: 'A1',
  explain: [
    teoria(
      '1 · La hora: What time is it?',
      "Para preguntar la hora se dice What time is it? y se responde con It's + la hora.\n\n• 7:00 → It's seven o'clock.\n• 7:10 → It's ten past seven.\n• 7:15 → It's quarter past seven.\n• 7:30 → It's half past seven.\n• 7:45 → It's quarter to eight.\n• 7:50 → It's ten to eight.\n\npast = después de (hasta la media hora) · to = faltan para (después de la media hora). Con to se nombra la hora que viene.",
      [
        ["What time is it? It's three o'clock.", '¿Qué hora es? Son las tres en punto.'],
        ["It's half past six.", 'Son las seis y media.'],
        ["It's quarter past nine.", 'Son las nueve y cuarto.'],
        ["It's quarter to ten.", 'Son las diez menos cuarto.'],
        ["It's ten past two.", 'Son las dos y diez.'],
      ]
    ),
    teoria(
      '2 · A qué hora: at + hora',
      'Para decir a qué hora pasa algo se usa at + la hora, y para preguntarlo What time + do / does…?\n\n• What time does the class start? → It starts at nine.\n• I get up at seven.\n\nPara aclarar se agrega a.m. (de medianoche a mediodía) o p.m. (de mediodía a medianoche): 8 a.m. · 8 p.m.',
      [
        ['What time do you get up?', '¿A qué hora te levantas?'],
        ['I get up at seven.', 'Me levanto a las siete.'],
        ['The class starts at nine a.m.', 'La clase empieza a las nueve de la mañana.'],
        ['The film is at eight p.m.', 'La película es a las ocho de la noche.'],
      ]
    ),
    teoria(
      "3 · Let's: sugerencias",
      "Let's + verbo en base sirve para proponer algo que hacen todos juntos (let's = let us). Se parece a «vamos a…» o «hagamos…».\n\n• Afirmativa: Let's go. · Let's eat pizza.\n• Negativa: Let's not + verbo → Let's not be late.\n• Pregunta: Shall we + verbo? → Shall we go? (¿Vamos?)\n• Para aceptar: Good idea! · Sure! · OK.\n• Para rechazar: Sorry, I can't.\n\n⚠️ Ojo: después de Let's el verbo va sin to: «Let's go», no «Let's to go».",
      [
        ["Let's go to the park.", 'Vamos al parque.'],
        ["Let's eat pizza tonight.", 'Comamos pizza esta noche.'],
        ["Let's not be late.", 'No lleguemos tarde.'],
        ["Let's study together. Good idea!", 'Estudiemos juntos. ¡Buena idea!'],
        ['Shall we start now?', '¿Empezamos ahora?'],
      ]
    ),
    teoria(
      '📖 Del libro · at / on / in (tiempo)',
      'Para decir cuándo pasa algo se usan tres palabras:\n\n• at + hora o momento exacto: at 7 o\'clock · at noon · at night · at the weekend\n• on + día o fecha: on Monday · on June 5th · on my birthday\n• in + mes, año, estación o parte del día: in July · in 2025 · in summer · in the morning\n\nTruco: at = un punto exacto, on = un día, in = un periodo más largo.',
      [
        ['The class starts at nine.', 'La clase empieza a las nueve.'],
        ['I play soccer on Saturdays.', 'Juego fútbol los sábados.'],
        ['My birthday is in July.', 'Mi cumpleaños es en julio.'],
        ['We go to school in the morning.', 'Vamos a la escuela en la mañana.'],
      ]
    ),
  ],
  syntaxChips: [
    fl("Let's + verbo (Let's go)", aux("Let's"), verbo('base verb')),
    fl("Let's not + verbo (Let's not wait)", aux("Let's"), neg('not'), verbo('base verb')),
    fl('Pregunta (Shall we go?)', aux('Shall'), suj('we'), verbo('base verb')),
    fl('Preguntar la hora (What time is it?)', resto('What time'), aux('is'), suj('it')),
    fl('A qué hora (at + hora)', suj('subject'), verbo('verb'), resto('at + time')),
  ],
  table: {
    cols: ['Hora', 'En inglés', 'En español'],
    rows: [
      ['3:00', "It's three o'clock", 'las tres en punto'],
      ['3:05', "It's five past three", 'las tres y cinco'],
      ['3:15', "It's quarter past three", 'las tres y cuarto'],
      ['3:30', "It's half past three", 'las tres y media'],
      ['3:40', "It's twenty to four", 'las cuatro menos veinte'],
      ['3:45', "It's quarter to four", 'las cuatro menos cuarto'],
    ],
  },
  contrastCard: {
    left: { label: 'past — después de', example: "It's ten past two. (2:10)", highlight: 'past' },
    right: { label: 'to — faltan para', example: "It's ten to three. (2:50)", highlight: 'to' },
    caption: 'past: hasta la media hora (2:10). to: después de la media hora; se nombra la hora que viene (2:50 → to three).',
  },
  quiz: [
    ejercicio("4:30 → It's ___ four.", 'half past', ['half to', 'quarter past', "o'clock"], 'half past = y media: 4:30 → «half past four». quarter past sería 4:15 y o\'clock, las 4:00 en punto.'),
    ejercicio("5:50 → It's ten ___ six.", 'to', ['past', 'at', 'in'], 'Después de la media hora se dice cuánto falta para la hora que viene con to: 5:50 → «ten to six» (diez para las seis).'),
    ejercicio("The film starts ___ eight o'clock.", 'at', ['on', 'in', 'to'], "Con una hora exacta se usa at: «at eight o'clock»."),
    ejercicio('¿Cuál oración es correcta? (Vamos a comer.)', "Let's eat.", ["Let's to eat.", 'Lets eating.', 'Let eat.'], "Let's + verbo en forma base, sin to ni -ing: «Let's eat»."),
    ejercicio("It's late. ___ wait here. (No esperemos aquí.)", "Let's not", ["Not let's", "Let's no", 'We not let\'s'], "La negativa de Let's es Let's not + verbo en base: «Let's not wait here»."),
  ],
  flashcards: [
    tarjeta('La hora', "7:00 → seven o'clock\n7:15 → quarter past seven\n7:30 → half past seven\n7:45 → quarter to eight"),
    tarjeta('¿past o to?', 'past: hasta la media hora (2:10 → ten past two)\nto: después de la media hora, con la hora que viene (2:50 → ten to three)'),
    tarjeta('A qué hora', 'What time does the class start?\nIt starts at nine. (at + hora)'),
    tarjeta("Let's", "Let's + verbo en base: Let's go.\nNegativa: Let's not be late.\nSin to: no «Let's to go»."),
    tarjeta('at, on, in (tiempo)', 'at: hora exacta (at seven)\non: día o fecha (on Monday)\nin: mes, año, estación, parte del día (in July, in the morning)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What time is it?', translation: '¿Qué hora es?' },
    { speaker: 'user', text: "It's half past five. Let's go home!", translation: 'Son las cinco y media. ¡Vamos a casa!' },
    { speaker: 'other', text: 'OK. What time does the film start?', translation: 'Bien. ¿A qué hora empieza la película?' },
    { speaker: 'user', text: "It starts at seven o'clock. Let's eat pizza before the film.", translation: 'Empieza a las siete. Comamos pizza antes de la película.' },
    { speaker: 'other', text: "Good idea! Let's not be late.", translation: '¡Buena idea! No lleguemos tarde.' },
    { speaker: 'user', text: "Sure. Let's meet at quarter to seven.", translation: 'Claro. Veámonos a las siete menos cuarto.' },
  ],
  readingText: {
    title: 'A busy Saturday',
    body: 'Today is Saturday. I get up at eight o\'clock and I have breakfast at half past eight. At nine, my friends call me: "Let\'s play soccer!" We play from ten until noon. Then we eat lunch at a small restaurant. In the afternoon I study English for an hour. The film starts at quarter to seven, so we go to the cinema at six. At night I go to bed at half past ten. What a good day!',
    translation:
      'Hoy es sábado. Me levanto a las ocho y desayuno a las ocho y media. A las nueve me llaman mis amigos: «¡Juguemos fútbol!». Jugamos de diez hasta el mediodía. Luego almorzamos en un restaurante pequeño. En la tarde estudio inglés durante una hora. La película empieza a las siete menos cuarto, así que vamos al cine a las seis. En la noche me acuesto a las diez y media. ¡Qué buen día!',
  },
  tips: [
    'past se usa hasta la media hora (2:10 → ten past two) y to después de la media hora, con la hora que viene (2:50 → ten to three).',
    "Para decir a qué hora pasa algo usa at: «at seven», «at half past six».",
    "Let's + verbo SIN to: «Let's go», no «Let's to go».",
    'Las horas 15 y 50 se parecen al oír: fifteen /fɪfˈtiːn/ (el acento va al final) y fifty /ˈfɪfti/ (el acento va al inicio).',
  ],
  dailyWords: palabras('clock', 'hour', 'minute', 'half', 'quarter', 'noon'),
  relacionados: [
    { etiqueta: '📖 Gramática: Frases para opinar, acordar y reaccionar', ruta: '/gramatica/concepto/frases-para-opinar-acordar-y-reaccionar' },
    { etiqueta: '📖 Gramática: SINCE / FOR — tiempo', ruta: '/gramatica/concepto/since-for-tiempo' },
    { etiqueta: '➡️ Unidad 23 · can / could / would you…? (A2)', ruta: '/unidad/23' },
  ],
};

/** Las unidades del bloque 2, por número de unidad. */
export const UNIDADES_BLOQUE_2: Record<number, Unit> = {
  4: UNIDAD_4,
  5: UNIDAD_5,
  6: UNIDAD_6,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 2 que las tienen. */
export const FORMAS_BLOQUE_2: Record<number, FormasUnidad | FormasUnidad[]> = {
  4: FORMAS_4,
  5: FORMAS_5,
};
