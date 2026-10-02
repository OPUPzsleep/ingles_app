import { aux, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_EXTRA_B1 } from '@/data/grammar/topics';
import type { PronunUnit, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque extra del B1, parte 2 (ids 1105–1109): temas del libro que el plan de estudios no incluye.

// ─── Extra 5 (id 1105) · Preposiciones después de adjetivos, verbos y sustantivos ───

const UNIDAD_1105: Unit = {
  title: 'Prepositions After Adjectives, Verbs and Nouns',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Adjetivo + preposición',
      'Muchos adjetivos van siempre con una preposición fija. Hay que aprender el par completo, porque no siempre coincide con el español:\n\n• afraid of · proud of · tired of · jealous of\n• good at · bad at\n• interested in\n• angry about (algo) · angry with (alguien)\n• different from · similar to · married to',
      [
        ['She is afraid of spiders.', 'Ella le tiene miedo a las arañas.'],
        ['I am good at drawing.', 'Dibujo bien.'],
        ['He is interested in history.', 'Él está interesado en la historia.'],
        ['My flat is different from yours.', 'Mi departamento es diferente al tuyo.'],
      ]
    ),
    teoria(
      '2 · Verbo + preposición',
      'Algunos verbos necesitan una preposición para unirse a su objeto, y no es la que esperarías en español:\n\n• listen to · wait for · look at · look for\n• depend on · believe in · belong to\n• think about · talk to / about · worry about\n• arrive in (ciudad) / at (lugar pequeño)\n\nNo se dice «depend of», «listen the music» ni «wait the bus».',
      [
        ['I am listening to music.', 'Estoy escuchando música.'],
        ['We are waiting for the bus.', 'Estamos esperando el autobús.'],
        ['It depends on the weather.', 'Depende del clima.'],
        ['This book belongs to my sister.', 'Este libro pertenece a mi hermana.'],
      ]
    ),
    teoria(
      '3 · Sustantivo + preposición',
      'También hay sustantivos que se combinan con una preposición determinada:\n\n• a reason for · a cause of · an answer to · a solution to\n• a problem with · a trouble with\n• an increase in · a decrease in · damage to\n• a picture of · a photo of\n\nSi dudas, busca la combinación en el diccionario: suele aparecer en los ejemplos.',
      [
        ['There is a problem with my computer.', 'Hay un problema con mi computadora.'],
        ['What is the reason for the delay?', '¿Cuál es el motivo del retraso?'],
        ['We need an answer to this question.', 'Necesitamos una respuesta a esta pregunta.'],
        ['There was an increase in prices.', 'Hubo un aumento de precios.'],
      ]
    ),
    teoria(
      '4 · Preposiciones de lugar: in, at, on',
      'Con lugares concretos conviene aprender las expresiones completas:\n\n• in the corner (de una habitación) · on the corner (de una calle)\n• at the top · at the bottom · at the end\n• on the left · on the right · in the middle\n• in a picture · on the wall · at the door\n\nCambiar la preposición cambia lo que quieres decir: «in the corner of the room», «on the corner of the street».',
      [
        ['The cat is sleeping in the corner of the room.', 'El gato duerme en la esquina del cuarto.'],
        ['There is a café on the corner of the street.', 'Hay un café en la esquina de la calle.'],
        ['My name is at the top of the list.', 'Mi nombre está arriba de la lista.'],
        ['The picture is on the wall.', 'El cuadro está en la pared.'],
      ]
    ),
    teoria(
      '5 · Después de la preposición: sustantivo o -ing',
      'Después de la preposición va un sustantivo, un pronombre o un verbo en -ing (nunca en infinitivo):\n\n• afraid of dogs · afraid of flying\n• good at maths · good at cooking\n• thanks for the gift · thanks for coming\n• I am tired of waiting.\n\nEn español usamos el infinitivo: «cansado de esperar» = tired of waiting.',
      [
        ['I am afraid of flying.', 'Le tengo miedo a volar.'],
        ['She is good at solving problems.', 'Ella es buena resolviendo problemas.'],
        ['Thanks for coming to my party.', 'Gracias por venir a mi fiesta.'],
        ['He is tired of waiting.', 'Él está cansado de esperar.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Adjetivo + prep.', suj('She'), aux('is'), verbo('afraid'), aux('of'), resto('spiders')),
    fl('Verbo + prep.', suj('We'), verbo('wait'), aux('for'), resto('the bus')),
    fl('Prep. + -ing', verbo('good'), aux('at'), verbo('cooking')),
  ],
  table: {
    cols: ['Tipo', 'Combinación', 'Ejemplo'],
    rows: [
      ['adjetivo', 'afraid of', 'afraid of spiders'],
      ['adjetivo', 'good at', 'good at cooking'],
      ['verbo', 'wait for', 'wait for the bus'],
      ['verbo', 'depend on', 'It depends on you.'],
      ['sustantivo', 'a problem with', 'a problem with my phone'],
    ],
  },
  contrastCard: {
    left: { label: 'Inglés', example: 'I am waiting for the bus.', highlight: 'waiting for' },
    right: { label: 'Error típico', example: 'I am waiting the bus.', highlight: 'waiting the' },
    caption: 'En español «esperar» no lleva preposición; en inglés wait sí lleva for.',
  },
  quiz: [
    ejercicio(
      'She is afraid ___ spiders.',
      'of',
      ['from', 'to', 'with'],
      'El adjetivo afraid siempre va con of: «afraid of spiders». afraid from, to y with no se usan.'
    ),
    ejercicio(
      'We are waiting ___ the bus.',
      'for',
      ['to', 'at', 'of'],
      'El verbo wait lleva for: «wait for the bus». En español esperamos «el bus» sin preposición, pero en inglés hace falta for.'
    ),
    ejercicio(
      'There is a problem ___ my computer.',
      'with',
      ['of', 'to', 'at'],
      'El sustantivo problem se combina con with: «a problem with my computer». of, to y at no son las preposiciones de este sustantivo.'
    ),
    ejercicio(
      'The cat is sitting ___ the corner of the room.',
      'in',
      ['on', 'at', 'to'],
      'La esquina interior de una habitación se dice in the corner. on the corner es la esquina de una calle y at o to no describen esa posición.'
    ),
    ejercicio(
      'I am good ___ cooking.',
      'at',
      ['in', 'on', 'for'],
      'El adjetivo good va con at para decir en qué eres bueno: «good at cooking». good for significa que algo es útil o sano.'
    ),
  ],
  flashcards: [
    tarjeta('Adjetivo + preposición', 'afraid of · good at · interested in\nproud of · tired of · different from'),
    tarjeta('Verbo + preposición', 'wait for · listen to · look at · depend on\nbelieve in · belong to · think about'),
    tarjeta('Sustantivo + preposición', 'a problem with · a reason for\nan answer to · an increase in'),
    tarjeta('Preposición + -ing', 'good at cooking · thanks for coming\nafraid of flying · tired of waiting'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Are you interested in joining the English club?', translation: '¿Te interesa unirte al club de inglés?' },
    { speaker: 'user', text: 'Yes! I am good at reading, but I am bad at speaking.', translation: '¡Sí! Soy bueno leyendo, pero malo hablando.' },
    { speaker: 'other', text: 'Do not worry about that. Everyone is afraid of making mistakes.', translation: 'No te preocupes por eso. Todos le tienen miedo a cometer errores.' },
    { speaker: 'user', text: 'That is true. What time does the club start?', translation: 'Es verdad. ¿A qué hora empieza el club?' },
    { speaker: 'other', text: 'It depends on the day. I will send you the schedule.', translation: 'Depende del día. Te enviaré el horario.' },
    { speaker: 'user', text: 'Thanks for helping me!', translation: '¡Gracias por ayudarme!' },
  ],
  readingText: {
    title: 'A small problem',
    body: 'Last night I had a problem with my phone. I was looking at a photo of my family when the screen went black. I was worried about losing all my pictures. I listened to the instructions on the internet and waited for twenty minutes. Finally it worked. Now I am proud of myself for solving it, and I am thinking about buying a new one.',
    translation:
      'Anoche tuve un problema con mi teléfono. Estaba mirando una foto de mi familia cuando la pantalla se puso negra. Me preocupaba perder todas mis fotos. Escuché las instrucciones en internet y esperé veinte minutos. Por fin funcionó. Ahora estoy orgulloso de mí mismo por resolverlo, y estoy pensando en comprar uno nuevo.',
  },
  tips: [
    'Aprende la preposición junto con la palabra, como un solo bloque: «afraid of», «good at», «wait for».',
    'No traduzcas la preposición del español: «pensar en» es think about, «soñar con» es dream of / about, «esperar» es wait for.',
    'Después de una preposición, el verbo siempre va en -ing: «good at swimming», nunca «good at swim».',
  ],
  dailyWords: palabras('problem', 'reason', 'answer', 'picture', 'corner', 'wall'),
  relacionados: [
    { etiqueta: '📖 Gramática: Locuciones Preposicionales', ruta: '/gramatica/concepto/locuciones-preposicionales-complex-prepositions' },
    { unidad: 1104 },
  ],
};

// ─── Extra 6 (id 1106) · Both, either, neither; all, every, whole; so y such ───

const UNIDAD_1106: Unit = {
  title: 'Both, Either, Neither, All, Every, Each, So and Such',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Both, either y neither: dos cosas',
      'Las tres palabras se usan cuando hablas de DOS personas o cosas:\n\n• both = los dos, ambos (afirmativo): Both of them are doctors.\n• either = uno u otro, cualquiera de los dos: You can take either one.\n• neither = ninguno de los dos (ya es negativo): Neither of them is here.\n\nCon neither no se agrega not: «Neither of us knows», no «Neither of us doesn\'t know».',
      [
        ['Both my parents are teachers.', 'Mis dos padres son profesores.'],
        ['You can sit at either table.', 'Puedes sentarte en cualquiera de las dos mesas.'],
        ['Neither of the answers is correct.', 'Ninguna de las dos respuestas es correcta.'],
        ['I like both of these jackets.', 'Me gustan las dos chaquetas.'],
      ]
    ),
    teoria(
      '2 · All, every y each: más de dos',
      'Para más de dos:\n\n• all + plural: all the students (todos los estudiantes)\n• every + singular: every student (cada estudiante, todos como grupo)\n• each + singular: each student (cada uno por separado): each of the students\n\nevery y each llevan el verbo en singular: «Every student has a book».',
      [
        ['All the students are here.', 'Todos los estudiantes están aquí.'],
        ['Every student has a book.', 'Cada estudiante tiene un libro.'],
        ['Each of the rooms has a window.', 'Cada uno de los cuartos tiene una ventana.'],
        ['I go running every morning.', 'Salgo a correr cada mañana.'],
      ]
    ),
    teoria(
      '3 · Whole y all',
      'whole significa «entero, completo» y va después de the / a / my (nunca antes):\n\n• the whole day = all day (todo el día)\n• a whole pizza (una pizza entera)\n• my whole family\n\nCon all, el orden es diferente: all day, all the money. «The all day» es incorrecto.',
      [
        ['I worked the whole day.', 'Trabajé todo el día.'],
        ['She ate a whole pizza.', 'Ella se comió una pizza entera.'],
        ['My whole family came to the party.', 'Toda mi familia vino a la fiesta.'],
        ['We stayed at home all day.', 'Nos quedamos en casa todo el día.'],
      ]
    ),
    teoria(
      '4 · So + adjetivo y such + sustantivo',
      'Los dos intensifican, pero se combinan distinto:\n\n• so + adjetivo / adverbio: so tired, so fast, so well\n• such + (a / an) + (adjetivo) + sustantivo: such a nice day, such good friends\n\nMira lo que sigue: si es un sustantivo, such; si es solo adjetivo o adverbio, so.',
      [
        ['I am so tired today.', 'Estoy muy cansado hoy.'],
        ['It was such a beautiful day.', 'Fue un día muy hermoso.'],
        ['They are such good friends.', 'Son muy buenos amigos.'],
        ['She speaks so quickly.', 'Ella habla muy rápido.'],
      ]
    ),
    teoria(
      '5 · So … that y such … that',
      'so y such pueden terminar con that para decir la consecuencia:\n\n• I was so tired that I went to bed at seven.\n• It was such a good film that I watched it twice.\n\nEn el habla informal that a veces se omite: «I was so tired I went to bed».',
      [
        ['I was so tired that I went to bed early.', 'Estaba tan cansado que me acosté temprano.'],
        ['It was such a good film that I watched it twice.', 'Fue una película tan buena que la vi dos veces.'],
        ['The soup was so hot that I could not eat it.', 'La sopa estaba tan caliente que no pude comerla.'],
        ['She is such a kind person that everyone loves her.', 'Es una persona tan amable que todos la quieren.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('So', aux('so'), verbo('adjective')),
    fl('Such', aux('such a'), verbo('adjective'), suj('noun')),
    fl('Every', aux('every'), suj('singular noun')),
  ],
  table: {
    cols: ['Palabra', 'Cuántos', 'Se usa con', 'Ejemplo'],
    rows: [
      ['both', '2', 'plural', 'Both of them are here.'],
      ['either', '1 de 2', 'singular', 'Either one is fine.'],
      ['neither', 'ninguno de 2', 'singular', 'Neither of us knows.'],
      ['all', 'todos', 'plural', 'All the students…'],
      ['every / each', 'cada', 'singular', 'Every student has a book.'],
    ],
  },
  contrastCard: {
    left: { label: 'so + adjetivo', example: 'It was so cold.', highlight: 'so cold' },
    right: { label: 'such + sustantivo', example: 'It was such a cold day.', highlight: 'such a cold day' },
    caption: 'so va con adjetivo o adverbio; such va con un sustantivo.',
  },
  quiz: [
    ejercicio(
      'I like ___ of these two jackets.',
      'both',
      ['all', 'every', 'neither'],
      'Hablas de dos jackets y te gustan las dos: both of. all y every son para más de dos y neither es negativo.'
    ),
    ejercicio(
      '___ student must bring a pen to the exam.',
      'Every',
      ['All', 'Both', 'Whole'],
      'Después va un sustantivo singular (student): Every. All y Both necesitan plural y whole no se usa en esta posición.'
    ),
    ejercicio(
      'We worked the ___ day and were exhausted.',
      'whole',
      ['all', 'every', 'each'],
      'Con the + sustantivo se usa whole: «the whole day». all va sin the («all day») y every o each no tienen este sentido.'
    ),
    ejercicio(
      'It was ___ a beautiful day!',
      'such',
      ['so', 'very', 'too'],
      'Después viene un sustantivo con a (a beautiful day), así que va such. so se usa solo con adjetivos o adverbios.'
    ),
    ejercicio(
      'I was ___ tired that I went to bed at seven.',
      'so',
      ['such', 'very', 'too'],
      'Después viene solo un adjetivo (tired) y la consecuencia con that: so tired that. such necesita un sustantivo, y very o too no se usan con that.'
    ),
  ],
  flashcards: [
    tarjeta('both / either / neither', 'both = los dos · either = uno u otro\nneither = ninguno de los dos (ya es negativo)'),
    tarjeta('all / every / each', 'all + plural · every + singular · each = cada uno\nEvery student has a book.'),
    tarjeta('whole', 'the whole day = all day\na whole pizza · my whole family'),
    tarjeta('so / such', 'so + adjetivo: so tired\nsuch + sustantivo: such a nice day'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do you like both of these restaurants?', translation: '¿Te gustan los dos restaurantes?' },
    { speaker: 'user', text: 'Neither of them is cheap, but the food is so good!', translation: 'Ninguno de los dos es barato, ¡pero la comida es tan buena!' },
    { speaker: 'other', text: 'We can go to either one. Every Friday they have live music.', translation: 'Podemos ir a cualquiera de los dos. Cada viernes tienen música en vivo.' },
    { speaker: 'user', text: 'Great! I was so tired after work that I forgot about it.', translation: '¡Genial! Estaba tan cansado después del trabajo que lo olvidé.' },
    { speaker: 'other', text: 'It is such a nice place. The whole family loves it.', translation: 'Es un lugar muy agradable. A toda la familia le encanta.' },
    { speaker: 'user', text: 'Then it is decided. Let us go this Friday.', translation: 'Entonces está decidido. Vamos este viernes.' },
  ],
  readingText: {
    title: 'A busy weekend',
    body: 'Last weekend my whole family visited my grandparents. All the cousins were there, and each child brought a small gift. Both my aunts cooked, and neither of them wanted help. It was such a lovely day that we stayed in the garden until night. I was so happy that I did not want to leave.',
    translation:
      'El fin de semana pasado toda mi familia visitó a mis abuelos. Todos los primos estaban allí y cada niño trajo un pequeño regalo. Mis dos tías cocinaron y ninguna de las dos quiso ayuda. Fue un día tan lindo que nos quedamos en el jardín hasta la noche. Estaba tan feliz que no quería irme.',
  },
  tips: [
    'both, either y neither hablan de dos. Para más de dos usa all, every o each.',
    'neither ya es negativo: no le sumes not. «Neither of us knows», no «Neither of us doesn\'t know».',
    'Elige so o such mirando lo que sigue: un adjetivo suelto → so; un sustantivo → such.',
  ],
  dailyWords: palabras('both', 'either', 'neither', 'whole', 'garden', 'family'),
  relacionados: [
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
    { unidad: 17 },
  ],
};

// ─── Extra 7 (id 1107) · The con nombres de lugares; a friend of mine, my own ───

const UNIDAD_1107: Unit = {
  title: 'The With Names, A Friend of Mine and Own',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · Nombres sin the',
      'La mayoría de los nombres propios van sin artículo:\n\n• Personas: Tom, Dr. Smith\n• Países y ciudades: Peru, Chile, Lima, Paris\n• Continentes: South America, Europe\n• Calles y plazas: Main Street, Times Square\n• Lagos y montañas sueltas: Lake Titicaca, Mount Everest\n\nNo se dice «the Peru» ni «the Lima».',
      [
        ['Lima is the capital of Peru.', 'Lima es la capital de Perú.'],
        ['She lives in South America.', 'Ella vive en Sudamérica.'],
        ['We walked along Main Street.', 'Caminamos por Main Street.'],
        ['Lake Titicaca is in Peru and Bolivia.', 'El lago Titicaca está en Perú y Bolivia.'],
      ]
    ),
    teoria(
      '2 · Nombres con the',
      'Se usa the con:\n\n• países con nombre plural o con «república, reino, estados»: the Netherlands, the United States, the United Kingdom\n• cordilleras e islas en grupo: the Andes, the Alps, the Canary Islands\n• ríos, mares y océanos: the Amazon, the Pacific, the Mediterranean\n• desiertos: the Sahara, the Atacama',
      [
        ['He lives in the Netherlands.', 'Él vive en los Países Bajos.'],
        ['We crossed the Andes by bus.', 'Cruzamos los Andes en autobús.'],
        ['The Amazon is a very long river.', 'El Amazonas es un río larguísimo.'],
        ['The Pacific Ocean is huge.', 'El océano Pacífico es enorme.'],
      ]
    ),
    teoria(
      '3 · Lugares con y sin the',
      'Algunos lugares (school, hospital, church, prison, bed, work, home) no llevan the cuando hablas de su función habitual; con the hablas del edificio en concreto:\n\n• My son goes to school. (es estudiante)\n• I went to the school to talk to the teacher. (el edificio)\n• She is in hospital. (como paciente, inglés británico)\n• I visited my friend in the hospital.',
      [
        ['My son goes to school by bus.', 'Mi hijo va a la escuela en autobús.'],
        ['I went to the school to meet the director.', 'Fui a la escuela a reunirme con el director.'],
        ['He is in bed with a cold.', 'Está en cama con un resfriado.'],
        ['I am at work until six.', 'Estoy en el trabajo hasta las seis.'],
      ]
    ),
    teoria(
      '4 · A friend of mine',
      'Para decir «un amigo mío» el inglés usa a / an + sustantivo + of + pronombre posesivo (mine, yours, his, hers, ours, theirs):\n\n• a friend of mine · a cousin of hers\n• He is a colleague of ours.\n\nNo se dice «a friend of me» ni «my a friend». También con nombres: a friend of my brother\'s.',
      [
        ['He is a friend of mine.', 'Él es un amigo mío.'],
        ['She is a cousin of his.', 'Ella es una prima suya.'],
        ['Mr Lopez is a colleague of ours.', 'El señor López es un colega nuestro.'],
        ["I met a friend of my brother's.", 'Conocí a un amigo de mi hermano.'],
      ]
    ),
    teoria(
      '5 · Own y on my own',
      'own refuerza que algo es de uno mismo («propio»). Va después del posesivo: my own room, her own car.\n\non my own (o by myself) significa «yo solo, sin ayuda» o «sin compañía»:\n\n• I want my own room.\n• She lives on her own.\n• He did it on his own. (nadie lo ayudó)',
      [
        ['I want my own room.', 'Quiero mi propio cuarto.'],
        ['She has her own car.', 'Ella tiene su propio carro.'],
        ['He lives on his own.', 'Él vive solo.'],
        ['I cooked dinner on my own.', 'Cociné la cena yo solo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Con the', aux('the'), suj('Netherlands / Andes')),
    fl('A friend of mine', suj('a friend'), aux('of'), verbo('mine / yours')),
    fl('Own', verbo('my'), aux('own'), suj('room')),
  ],
  table: {
    cols: ['Sin the', 'Con the'],
    rows: [
      ['Peru, Chile, Lima', 'the United States, the Netherlands'],
      ['South America', 'the Andes, the Alps'],
      ['Lake Titicaca', 'the Amazon, the Pacific'],
      ['Main Street', 'the Sahara'],
      ['school, bed, work, home', 'the school (el edificio)'],
    ],
  },
  contrastCard: {
    left: { label: 'Sin the (función)', example: 'My son goes to school.', highlight: 'school' },
    right: { label: 'Con the (el edificio)', example: 'I went to the school.', highlight: 'the school' },
    caption: 'Sin the hablas de la actividad; con the, del lugar concreto.',
  },
  quiz: [
    ejercicio(
      'My friend lives in ___ Netherlands.',
      'the',
      ['a', 'an', 'no article'],
      'Los países con nombre en plural llevan the: «the Netherlands». Igual que the United States o the Philippines.'
    ),
    ejercicio(
      'We sailed across ___ Pacific Ocean.',
      'the',
      ['a', 'an', 'no article'],
      'Los océanos, mares y ríos llevan the: «the Pacific Ocean», «the Amazon», «the Mediterranean».'
    ),
    ejercicio(
      'Peru and Chile are in ___ South America.',
      'no article',
      ['the', 'a', 'an'],
      'Los continentes no llevan artículo: «South America», «Europe». Por eso la respuesta es sin the.'
    ),
    ejercicio(
      'Tom is ___ of mine from university.',
      'a friend',
      ['a friend of', 'friend', 'my a friend'],
      'La estructura es a friend + of + pronombre posesivo: «a friend of mine». Por eso se completa con «a friend».'
    ),
    ejercicio(
      'I want my ___ room, not a shared one.',
      'own',
      ['self', 'alone', 'proper'],
      'own va después del posesivo y significa «propio»: «my own room». self y alone no se usan así y proper significa adecuado.'
    ),
  ],
  flashcards: [
    tarjeta('Sin the', 'países y ciudades: Peru, Lima\ncontinentes: South America\ncalles: Main Street'),
    tarjeta('Con the', 'the Netherlands · the United States\nthe Andes · the Amazon · the Pacific · the Sahara'),
    tarjeta('A friend of mine', 'a / an + sustantivo + of + mine / yours / his\nHe is a friend of mine.'),
    tarjeta('Own / on my own', 'my own room = mi propio cuarto\nI live on my own = vivo solo'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Where are you from?', translation: '¿De dónde eres?' },
    { speaker: 'user', text: 'I am from Peru. I live in Lima now, but I grew up near the Andes.', translation: 'Soy de Perú. Ahora vivo en Lima, pero crecí cerca de los Andes.' },
    { speaker: 'other', text: 'Do you live on your own?', translation: '¿Vives solo?' },
    { speaker: 'user', text: 'No, I live with a friend of mine. We both have our own rooms.', translation: 'No, vivo con un amigo mío. Los dos tenemos nuestro propio cuarto.' },
    { speaker: 'other', text: 'Do you ever travel abroad?', translation: '¿Viajas alguna vez al extranjero?' },
    { speaker: 'user', text: 'Yes! Last year I visited the United States and flew over the Atlantic Ocean.', translation: '¡Sí! El año pasado visité Estados Unidos y crucé el océano Atlántico en avión.' },
  ],
  readingText: {
    title: 'Two trips',
    body: 'Luis lives in Chile, near the Andes. Last summer he travelled to the United Kingdom with a cousin of his. They flew across the Atlantic and arrived in London in the morning. Luis wanted his own room, so they stayed in two different hotels. His cousin goes to university and works at the hospital, but Luis is on holiday and stays at home most days.',
    translation:
      'Luis vive en Chile, cerca de los Andes. El verano pasado viajó al Reino Unido con un primo suyo. Volaron sobre el Atlántico y llegaron a Londres por la mañana. Luis quería su propio cuarto, así que se quedaron en dos hoteles diferentes. Su primo va a la universidad y trabaja en el hospital, pero Luis está de vacaciones y se queda en casa casi todos los días.',
  },
  tips: [
    'Países en plural, repúblicas, cordilleras, ríos, mares y desiertos llevan the; países en singular, ciudades y continentes no.',
    'Con school, hospital, bed, work y home no uses the cuando hablas de su función (estudiar, estar enfermo, descansar, trabajar).',
    'Para «un amigo mío» usa a friend of mine, nunca «a friend of me». «Mine» es el pronombre posesivo.',
  ],
  dailyWords: palabras('country', 'river', 'mountain', 'island', 'ocean', 'desert'),
  relacionados: [{ unidad: 17 }, { unidad: 20 }],
};

// ─── Extra 8 (id 1108) · Orden de las palabras y posición de los adverbios ───

const UNIDAD_1108: Unit = {
  title: 'Word Order and Adverb Position',
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      '1 · El orden básico de una oración',
      'En inglés el orden es muy fijo: sujeto + verbo + objeto, y después lugar y tiempo:\n\n• sujeto + verbo + objeto + lugar + tiempo\n• I met Tom at the station yesterday.\n\nNo se puede poner un adverbio entre el verbo y el objeto: «I met at the station Tom» y «I like very much pizza» son incorrectas.',
      [
        ['I met Tom at the station yesterday.', 'Ayer me encontré con Tom en la estación.'],
        ['She bought a new phone in the mall.', 'Ella compró un teléfono nuevo en el centro comercial.'],
        ['We play football in the park on Sundays.', 'Jugamos fútbol en el parque los domingos.'],
        ['I like pizza very much.', 'Me gusta mucho la pizza.'],
      ]
    ),
    teoria(
      '2 · Adverbios de frecuencia',
      'always, usually, often, sometimes, never… van:\n\n• antes del verbo principal: She always arrives early.\n• después de be: He is never late.\n• con auxiliar: después del primer auxiliar: I have never seen it. · She does not usually eat meat.\n\nsometimes también puede ir al principio o al final: «Sometimes I walk» · «I walk sometimes».',
      [
        ['She always arrives early.', 'Ella siempre llega temprano.'],
        ['He is never late.', 'Él nunca llega tarde.'],
        ['I have never seen that film.', 'Nunca he visto esa película.'],
        ['Sometimes we eat out.', 'A veces comemos fuera.'],
      ]
    ),
    teoria(
      '3 · Also, only, just, still, already',
      'Estos adverbios van normalmente en la posición media: antes del verbo principal o después de be / del primer auxiliar:\n\n• I also like tea. · She is also a doctor.\n• He only speaks Spanish. · I just called him.\n• They still live here. · I have already finished.\n\nOjo con still: «I am still waiting» (after be), «I still love you» (before verb).',
      [
        ['I also like tea.', 'A mí también me gusta el té.'],
        ['He only speaks Spanish.', 'Él solo habla español.'],
        ['They still live in Lima.', 'Ellos todavía viven en Lima.'],
        ['I have already finished my homework.', 'Ya terminé mi tarea.'],
      ]
    ),
    teoria(
      '4 · Adverbios de modo',
      'Los adverbios que dicen cómo (well, quickly, carefully, badly) van después del verbo o del objeto, no antes del objeto:\n\n• She speaks English well. ✓\n• She speaks well English. ✗\n\nTambién pueden ir antes del verbo para dar énfasis: «She carefully opened the door».',
      [
        ['She speaks English very well.', 'Ella habla inglés muy bien.'],
        ['He opened the door carefully.', 'Él abrió la puerta con cuidado.'],
        ['They finished the work quickly.', 'Terminaron el trabajo rápido.'],
        ['She carefully opened the box.', 'Ella abrió la caja con cuidado.'],
      ]
    ),
    teoria(
      '5 · Expresiones de tiempo y lugar',
      'Las expresiones de tiempo (yesterday, last week, on Monday) suelen ir al final, pero también pueden ir al principio para dar énfasis. El lugar va antes que el tiempo:\n\n• I saw her at the cinema yesterday.\n• Yesterday I saw her at the cinema.\n\nSi hay lugar y tiempo, el orden normal es lugar + tiempo.',
      [
        ['I saw her at the cinema yesterday.', 'Ayer la vi en el cine.'],
        ['Yesterday I saw her at the cinema.', 'Ayer la vi en el cine (con énfasis en ayer).'],
        ['We arrived in Lima on Monday.', 'Llegamos a Lima el lunes.'],
        ['She is going to Paris next week.', 'Ella va a París la próxima semana.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Orden básico', suj('subject'), verbo('verb'), resto('object'), resto('place'), resto('time')),
    fl('Frecuencia', suj('She'), aux('always'), verbo('arrives')),
    fl('Con be', suj('He'), aux('is'), aux('never'), resto('late')),
  ],
  table: {
    cols: ['Adverbio', 'Posición', 'Ejemplo'],
    rows: [
      ['always, never, often', 'antes del verbo / después de be', 'She always arrives early.'],
      ['also, only, just', 'antes del verbo', 'I also like tea.'],
      ['still, already', 'antes del verbo / después de be', 'I have already finished.'],
      ['well, quickly', 'después del verbo u objeto', 'She speaks English well.'],
      ['yesterday, last week', 'al final (o al principio)', 'I saw her yesterday.'],
    ],
  },
  contrastCard: {
    left: { label: 'Correcto', example: 'She speaks English well.', highlight: 'speaks English well' },
    right: { label: 'Incorrecto', example: 'She speaks well English.', highlight: 'speaks well English' },
    caption: 'Nunca pongas un adverbio entre el verbo y su objeto.',
  },
  quiz: [
    ejercicio(
      '¿Cuál de estas frases es correcta?',
      'She speaks English very well.',
      ['She speaks very well English.', 'She very well speaks English.', 'Speaks she English very well.'],
      'El adverbio de modo va después del objeto: «speaks English very well». No se coloca entre el verbo y el objeto ni antes del verbo con very well.'
    ),
    ejercicio(
      'He ___ late for work.',
      'is never',
      ['never is', 'is late never', 'does never'],
      'Con el verbo be, el adverbio de frecuencia va después: «is never late». never is no es el orden normal en inglés.'
    ),
    ejercicio(
      'I ___ finished my homework.',
      'have already',
      ['already have', 'has already', 'did already'],
      'El adverbio va después del primer auxiliar y antes del participio: «have already finished». already have no es el orden correcto y has no concuerda con I.'
    ),
    ejercicio(
      '¿Cuál tiene el orden correcto?',
      'We met our friends at the station yesterday.',
      ['We met at the station our friends yesterday.', 'We met yesterday our friends at the station.', 'We yesterday met our friends at the station.'],
      'El orden normal es verbo + objeto + lugar + tiempo: «met our friends at the station yesterday». El objeto no se separa del verbo.'
    ),
    ejercicio(
      'They ___ play tennis on Sundays.',
      'always',
      ['play always', 'always are', 'are always'],
      'Con verbos normales el adverbio de frecuencia va antes del verbo principal: «always play». «play always» no se usa y «are always» cambia el verbo.'
    ),
  ],
  flashcards: [
    tarjeta('Orden básico', 'sujeto + verbo + objeto + lugar + tiempo\nI met Tom at the station yesterday.'),
    tarjeta('Frecuencia', 'antes del verbo: She always arrives.\ndespués de be: He is never late.'),
    tarjeta('Con auxiliar', 'después del primer auxiliar:\nI have never seen it · She does not usually eat meat.'),
    tarjeta('Adverbios de modo', 'después del verbo u objeto:\nShe speaks English well. (no «speaks well English»)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'How often do you go to the gym?', translation: '¿Con qué frecuencia vas al gimnasio?' },
    { speaker: 'user', text: 'I usually go three times a week.', translation: 'Normalmente voy tres veces por semana.' },
    { speaker: 'other', text: 'Do you always train in the morning?', translation: '¿Siempre entrenas en la mañana?' },
    { speaker: 'user', text: 'No, I sometimes train in the evening. I am never ready before eight!', translation: 'No, a veces entreno por la tarde. ¡Nunca estoy listo antes de las ocho!' },
    { speaker: 'other', text: 'I have just joined, but I already love it.', translation: 'Me acabo de inscribir, pero ya me encanta.' },
    { speaker: 'user', text: 'Great! Come with me on Saturday.', translation: '¡Genial! Ven conmigo el sábado.' },
  ],
  readingText: {
    title: 'My routine',
    body: 'I always wake up early. I usually have breakfast at seven and I never skip it. I travel to work by bus, and I am rarely late. I speak English well at the office because I practise every day. After work I sometimes go to the park with my dog. We play there on Saturdays. I have already planned next weekend.',
    translation:
      'Siempre me despierto temprano. Normalmente desayuno a las siete y nunca me lo salto. Viajo al trabajo en autobús y rara vez llego tarde. Hablo inglés bien en la oficina porque practico todos los días. Después del trabajo a veces voy al parque con mi perro. Allí jugamos los sábados. Ya planeé el próximo fin de semana.',
  },
  tips: [
    'En inglés no puedes separar el verbo de su objeto con un adverbio: «I like pizza very much», no «I like very much pizza».',
    'Los adverbios de frecuencia van antes del verbo principal y después de be: «She always works» · «She is always happy».',
    'Con varios complementos al final, el orden normal es lugar y luego tiempo: «at the station yesterday».',
  ],
  dailyWords: palabras('always', 'usually', 'often', 'sometimes', 'never', 'already'),
  relacionados: [{ unidad: 46 }, { unidad: 15 }],
};

// ─── Extra 9 (id 1109) · Must, mustn't, needn't y question tags ───

const UNIDAD_1109: Unit = {
  title: "Must, Mustn't, Needn't and Question Tags",
  topic: BLOQUE_EXTRA_B1,
  level: 'B1',
  explain: [
    teoria(
      "1 · Must y mustn't",
      "must expresa obligación («debes») y mustn't prohibición («no debes», «está prohibido»). Después va el verbo en forma base y es igual para todas las personas:\n\n• You must wear a seat belt.\n• You mustn't park here. (está prohibido)\n• Pregunta: Must I go? (poco usada; se prefiere Do I have to…?)\n\n⚠️ Ojo: mustn't no es «no hace falta»; eso es needn't o don't have to.",
      [
        ['You must wear a seat belt.', 'Debes usar el cinturón de seguridad.'],
        ["You mustn't park here.", 'No debes estacionar aquí.'],
        ["Children mustn't play with fire.", 'Los niños no deben jugar con fuego.'],
        ['We must leave now.', 'Debemos irnos ahora.'],
      ]
    ),
    teoria(
      "2 · Needn't y don't have to",
      "needn't (o don't have to) significa que no es necesario: puedes hacerlo, pero no hace falta. Es muy diferente de mustn't:\n\n• You needn't hurry. We have plenty of time. (no hace falta)\n• You don't have to come. (si quieres)\n• You mustn't be late. (está prohibido llegar tarde)\n\nneedn't va con verbo en base: «You needn't worry».",
      [
        ["You needn't hurry. We have plenty of time.", 'No hace falta que te apures. Tenemos tiempo de sobra.'],
        ["You don't have to come if you are busy.", 'No tienes que venir si estás ocupado.'],
        ["She needn't pay. It is free.", 'No necesita pagar. Es gratis.'],
        ["We mustn't be late for the exam.", 'No debemos llegar tarde al examen.'],
      ]
    ),
    teoria(
      '3 · Question tags: tras una frase afirmativa',
      'Una question tag es una pregunta corta al final de una frase para confirmar o pedir acuerdo («¿verdad?», «¿no?»). Si la frase es afirmativa, la tag es negativa, y usa el mismo auxiliar:\n\n• You like tea, don\'t you?\n• She is a doctor, isn\'t she?\n• They can swim, can\'t they?\n\nSi no hay auxiliar, se usa do / does / did.',
      [
        ["You like tea, don't you?", 'Te gusta el té, ¿verdad?'],
        ["She is a doctor, isn't she?", 'Ella es doctora, ¿no?'],
        ["They can swim, can't they?", 'Ellos saben nadar, ¿cierto?'],
        ["He lives in Lima, doesn't he?", 'Él vive en Lima, ¿no?'],
      ]
    ),
    teoria(
      '4 · Question tags: tras una frase negativa',
      'Si la frase es negativa, la tag es afirmativa:\n\n• You don\'t like coffee, do you?\n• She isn\'t here, is she?\n• They can\'t swim, can they?\n\nLa tag repite el auxiliar de la frase, y el pronombre debe coincidir con el sujeto (he, she, they…).',
      [
        ["You don't like coffee, do you?", 'No te gusta el café, ¿verdad?'],
        ["She isn't here, is she?", 'Ella no está aquí, ¿verdad?'],
        ["They can't swim, can they?", 'Ellos no saben nadar, ¿cierto?'],
        ["He didn't call, did he?", 'Él no llamó, ¿verdad?'],
      ]
    ),
    teoria(
      '5 · La entonación de la tag',
      'La voz decide el sentido de la tag:\n\n• Si sube (↗): es una pregunta real, no estás seguro. «You are Tom, aren\'t you?»\n• Si baja (↘): pides confirmación de algo que ya sabes. «It\'s a nice day, isn\'t it?»\n\nLas respuestas son cortas: Yes, I do. / No, I don\'t.',
      [
        ["It's a beautiful day, isn't it?", 'Es un día hermoso, ¿verdad?'],
        ["You are Tom, aren't you?", 'Tú eres Tom, ¿no?'],
        ["You haven't seen my keys, have you?", 'No has visto mis llaves, ¿verdad?'],
        ["Let's go, shall we?", 'Vamos, ¿te parece?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Prohibición', suj('You'), neg("mustn't"), verbo('verb')),
    fl('No hace falta', suj('You'), neg("needn't"), verbo('verb')),
    fl('Tag', resto('+ sentence'), resto(', -'), aux("tag?")),
  ],
  table: {
    cols: ['Frase', 'Question tag', 'Respuesta'],
    rows: [
      ['You like tea,', "don't you?", 'Yes, I do.'],
      ['She is a doctor,', "isn't she?", 'Yes, she is.'],
      ["You don't like coffee,", 'do you?', "No, I don't."],
      ["They can't swim,", 'can they?', "No, they can't."],
    ],
  },
  contrastCard: {
    left: { label: "mustn't → prohibido", example: "You mustn't park here.", highlight: "mustn't" },
    right: { label: "needn't → no hace falta", example: "You needn't hurry.", highlight: "needn't" },
    caption: "mustn't es una prohibición; needn't significa que no es necesario.",
  },
  quiz: [
    ejercicio(
      'You ___ park here. It is forbidden.',
      "mustn't",
      ["needn't", "don't must", 'not must'],
      'Es una prohibición: mustn\'t. needn\'t significa que no hace falta, y «don\'t must» y «not must» no existen.'
    ),
    ejercicio(
      'You ___ hurry. We have plenty of time.',
      "needn't",
      ["mustn't", 'must', "can't"],
      "No hace falta apurarse porque hay tiempo: needn't. mustn't sería una prohibición, must una obligación y can't no encaja."
    ),
    ejercicio(
      'She lives in Lima, ___?',
      "doesn't she",
      ["isn't she", 'does she', "didn't she"],
      "La frase es afirmativa y el verbo es lives (presente simple): la tag lleva does en negativa, «doesn't she». isn't, does y didn't no concuerdan."
    ),
    ejercicio(
      "They aren't ready, ___?",
      'are they',
      ["aren't they", "don't they", 'do they'],
      'La frase es negativa con be, así que la tag es afirmativa y usa be: «are they?». Una tag negativa o con do no encaja.'
    ),
    ejercicio(
      'You can swim, ___?',
      "can't you",
      ["don't you", "aren't you", 'can you'],
      "La frase es afirmativa con can, así que la tag es negativa y repite can: «can't you?». don't y aren't no repiten el auxiliar."
    ),
  ],
  flashcards: [
    tarjeta("must / mustn't / needn't", "must = deber · mustn't = prohibido\nneedn't = no hace falta (don't have to)"),
    tarjeta('Tag tras afirmativa', "You like tea, don't you?\nShe is a doctor, isn't she?"),
    tarjeta('Tag tras negativa', "You don't like tea, do you?\nShe isn't here, is she?"),
    tarjeta('Entonación', 'sube = pregunta real\nbaja = pides confirmación'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "You are the new manager, aren't you?", translation: 'Tú eres el nuevo gerente, ¿verdad?' },
    { speaker: 'user', text: "Yes, I am. You work in accounting, don't you?", translation: 'Sí, lo soy. Tú trabajas en contabilidad, ¿no?' },
    { speaker: 'other', text: "That's right. You mustn't forget the meeting at ten.", translation: 'Así es. No debes olvidar la reunión a las diez.' },
    { speaker: 'user', text: "Thanks. We needn't prepare a report, do we?", translation: 'Gracias. No hace falta preparar un informe, ¿verdad?' },
    { speaker: 'other', text: "No, we don't have to. Just bring your ideas.", translation: 'No, no tenemos que hacerlo. Solo trae tus ideas.' },
    { speaker: 'user', text: "Great. It's going to be a good day, isn't it?", translation: 'Genial. Va a ser un buen día, ¿verdad?' },
  ],
  readingText: {
    title: 'Rules of the library',
    body: "The library has some simple rules. You must be quiet and you mustn't eat or drink inside. You must return the books on time. You needn't pay to enter, but you must show your card. You don't have to be a student. The librarian is very kind, isn't she? She always helps everyone, doesn't she?",
    translation:
      'La biblioteca tiene algunas reglas simples. Debes guardar silencio y no debes comer ni beber adentro. Debes devolver los libros a tiempo. No necesitas pagar para entrar, pero debes mostrar tu carnet. No tienes que ser estudiante. La bibliotecaria es muy amable, ¿verdad? Siempre ayuda a todos, ¿no?',
  },
  tips: [
    "mustn't es «prohibido»; needn't y don't have to son «no hace falta». Confundirlos cambia el sentido.",
    "En una question tag, frase afirmativa → tag negativa y frase negativa → tag afirmativa, siempre con el mismo auxiliar.",
    'Con la entonación puedes cambiar el sentido: sube si preguntas de verdad, baja si pides confirmar.',
  ],
  dailyWords: palabras('rule', 'library', 'quiet', 'closed', 'open', 'manager'),
  relacionados: [
    { etiqueta: '📖 Gramática: Verbos Auxiliares', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
    { unidad: 56 },
  ],
};

/** Las unidades 1105–1109 del bloque extra del B1. */
export const UNIDADES_EXTRA_B1_B: Record<number, Unit> = {
  1105: UNIDAD_1105,
  1106: UNIDAD_1106,
  1107: UNIDAD_1107,
  1108: UNIDAD_1108,
  1109: UNIDAD_1109,
};

/** La pronunciación de las unidades 1105–1109. */
export const PRONUN_EXTRA_B1_B: Record<number, PronunUnit> = {
  1105: {
    tips: [
      {
        head: 'of, at y for se debilitan',
        body: 'En una frase normal las preposiciones suenan débiles: of /əv/, at /ət/, for /fər/. Se pegan a la palabra anterior: afraid of suena /əˈfreɪd əv/.',
        examples: ['afraid of /əˈfreɪd əv/', 'good at /ˈɡʊd ət/', 'wait for /ˈweɪt fər/'],
      },
      {
        head: 'depend y belong',
        body: 'Los verbos depend /dɪˈpend/ y belong /bɪˈlɔːŋ/ tienen la primera sílaba débil y el acento en la segunda.',
        examples: ['depend /dɪˈpend/', 'belong /bɪˈlɔːŋ/', 'listen /ˈlɪsn/'],
      },
    ],
    vocab: palabras('problem', 'reason', 'answer', 'picture'),
  },
  1106: {
    tips: [
      {
        head: 'both, either, neither',
        body: 'both suena /boʊθ/ (con th sorda al final). either se dice /ˈiːðər/ o /ˈaɪðər/ y neither /ˈniːðər/ o /ˈnaɪðər/: las dos formas son correctas.',
        examples: ['both /boʊθ/', 'either /ˈiːðər/', 'neither /ˈniːðər/'],
      },
      {
        head: 'whole',
        body: 'whole se dice /hoʊl/: la w no se pronuncia y suena igual que hole (agujero). Es una trampa común.',
        examples: ['whole /hoʊl/', 'the whole day /ðə hoʊl ˈdeɪ/'],
      },
    ],
    vocab: palabras('both', 'either', 'neither', 'whole'),
  },
  1107: {
    tips: [
      {
        head: 'Los países en plural',
        body: 'the se dice /ðə/ antes de consonante y /ði/ antes de vocal: the Netherlands /ðə ˈneðərləndz/, the United States /ði juˌnaɪtɪd ˈsteɪts/.',
        examples: ['the Netherlands /ðə ˈneðərləndz/', 'the Andes /ði ˈændiːz/'],
      },
      {
        head: 'own',
        body: 'own se dice /oʊn/, como la palabra «on» pero con una o larga que termina en u. Va con acento en la palabra anterior: my OWN room.',
        examples: ['own /oʊn/', 'my own room /maɪ ˌoʊn ˈruːm/'],
      },
    ],
    vocab: palabras('country', 'river', 'mountain', 'island'),
  },
  1108: {
    tips: [
      {
        head: 'always y usually',
        body: 'always se dice /ˈɔːlweɪz/ (la l casi no se oye) y usually /ˈjuːʒuəli/ con el sonido /ʒ/ del medio, como en «television».',
        examples: ['always /ˈɔːlweɪz/', 'usually /ˈjuːʒuəli/', 'sometimes /ˈsʌmtaɪmz/'],
      },
      {
        head: 'never y already',
        body: 'never suena /ˈnevər/ con acento en la primera sílaba. already suena /ɔːlˈredi/ con acento en la segunda.',
        examples: ['never /ˈnevər/', 'already /ɔːlˈredi/'],
      },
    ],
    vocab: palabras('always', 'usually', 'often', 'sometimes', 'never'),
  },
  1109: {
    tips: [
      {
        head: "mustn't y needn't",
        body: "En mustn't la t del medio no se pronuncia: suena /ˈmʌsnt/. needn't suena /ˈniːdnt/. Las dos terminan en una n con sonido corto.",
        examples: ["mustn't /ˈmʌsnt/", "needn't /ˈniːdnt/", "You mustn't /ju ˈmʌsnt/"],
      },
      {
        head: 'La entonación de la tag',
        body: "En una tag que pregunta de verdad la voz sube al final (aren't you? ↗). En una tag que confirma, la voz baja (isn't it? ↘).",
        examples: ["isn't it? /ˈɪznt ɪt/", "don't you? /ˈdoʊnt ju/"],
      },
    ],
    vocab: palabras('rule', 'library', 'quiet', 'manager'),
  },
};
