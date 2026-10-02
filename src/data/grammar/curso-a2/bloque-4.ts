import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_A2_4 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 4 · Comunicación, apariencia y futuro (ids 22–24: Unidad 10–12 del nivel A2).

// ─── Unidad 10 (id 22) · Comparativos; more, less y fewer ───

const UNIDAD_22: Unit = {
  title: 'Comparative Adjectives, More, Less and Fewer',
  topic: BLOQUE_A2_4,
  level: 'A2',
  explain: [
    teoria(
      '1 · Comparativo con -er (adjetivos cortos)',
      "Para comparar dos cosas o personas, los adjetivos cortos (una sílaba) agregan -er y se usa than (que):\n\n• tall → taller than\n• fast → faster than\n• old → older than\n\nOrtografía:\n• terminan en e: + r → nice → nicer\n• consonante + y: ier → happy → happier\n• una vocal + una consonante: se dobla → big → bigger · hot → hotter",
      [
        ['My brother is taller than me.', 'Mi hermano es más alto que yo.'],
        ['A car is faster than a bike.', 'Un auto es más rápido que una bicicleta.'],
        ['Today is hotter than yesterday.', 'Hoy hace más calor que ayer.'],
        ['She is happier than before.', 'Ella está más feliz que antes.'],
      ]
    ),
    teoria(
      '2 · Comparativo con more (adjetivos largos)',
      "Los adjetivos largos (dos o más sílabas) usan more antes del adjetivo, sin cambiarlo:\n\n• expensive → more expensive than\n• interesting → more interesting than\n• beautiful → more beautiful than\n\nLos de dos sílabas que terminan en -y usan -ier: easy → easier · funny → funnier.\n\n⚠️ Ojo: no se mezclan: «taller», no «more taller»; «more expensive», no «expensiver».",
      [
        ['This book is more interesting than that one.', 'Este libro es más interesante que aquel.'],
        ['Cusco is more beautiful than I imagined.', 'Cusco es más hermoso de lo que imaginaba.'],
        ['English is easier than I thought.', 'El inglés es más fácil de lo que pensaba.'],
        ['A taxi is more expensive than a bus.', 'Un taxi es más caro que un bus.'],
      ]
    ),
    teoria(
      '3 · Comparativos irregulares',
      "Algunos adjetivos tienen una forma propia:\n\n• good → better\n• bad → worse\n• far → farther / further\n• little → less\n• much / many → more\n\nEjemplos: «Her English is better than mine» · «This film is worse than the book».\n\n⚠️ Ojo: «better», no «gooder» ni «more good».",
      [
        ['Her English is better than mine.', 'Su inglés es mejor que el mío.'],
        ['This film is worse than the book.', 'Esta película es peor que el libro.'],
        ['The station is farther than the bank.', 'La estación está más lejos que el banco.'],
        ['I feel better today.', 'Hoy me siento mejor.'],
      ]
    ),
    teoria(
      '4 · As… as: igualdad',
      "Para decir que dos cosas son iguales se usa as + adjetivo + as. Para decir que no lo son, not as… as:\n\n• She is as tall as her sister.\n• This bag is as expensive as that one.\n• He isn't as old as he looks.\n\nTambién se usa the same as (igual que) y different from (distinto de): «My phone is the same as yours».",
      [
        ['She is as tall as her sister.', 'Ella es tan alta como su hermana.'],
        ['This bag is as expensive as that one.', 'Esta bolsa es tan cara como aquella.'],
        ["He isn't as old as he looks.", 'Él no es tan viejo como parece.'],
        ['My phone is the same as yours.', 'Mi teléfono es igual al tuyo.'],
      ]
    ),
    teoria(
      '5 · Much, a lot, a bit: cuánto más',
      "📖 Del libro: antes de un comparativo se pueden usar palabras que dicen la DIFERENCIA:\n\n• much / a lot / far → mucho más: «much older» · «a lot bigger»\n• a bit / a little / slightly → un poco más: «a bit taller» · «a little cheaper»\n\nSe ponen antes del comparativo y no se usan con very: «much better», no «very better».",
      [
        ['My brother is much older than me.', 'Mi hermano es mucho mayor que yo.'],
        ['This room is a lot bigger than that one.', 'Esta habitación es mucho más grande que aquella.'],
        ['The blue shirt is a bit cheaper.', 'La camisa azul es un poco más barata.'],
        ["It's slightly warmer today.", 'Hoy hace un poco más de calor.'],
      ]
    ),
    teoria(
      '6 · Cada vez más y cuanto más…',
      "📖 Del libro: con dos comparativos iguales se expresa un cambio continuo, y con the + comparativo se explica una relación:\n\n• It's getting colder and colder.\n• The weather is getting better and better.\n• The more you practice, the better you speak.\n• The earlier you leave, the sooner you arrive.",
      [
        ["It's getting colder and colder.", 'Cada vez hace más frío.'],
        ['The weather is getting better and better.', 'El clima está mejorando cada vez más.'],
        ['The more you practice, the better you speak.', 'Cuanto más practicas, mejor hablas.'],
        ['The earlier you leave, the sooner you arrive.', 'Cuanto antes salgas, antes llegas.'],
      ]
    ),
    teoria(
      '7 · More, less y fewer con sustantivos',
      "Para comparar CANTIDADES se usa more, less o fewer + sustantivo + than:\n\n• more → contables e incontables: more people · more money\n• less → incontables: less money · less time · less traffic\n• fewer → contables en plural: fewer people · fewer cars · fewer mistakes\n\n⚠️ Ojo: «fewer people», no «less people» (aunque se oye mucho).",
      [
        ['I have more friends than my brother.', 'Tengo más amigos que mi hermano.'],
        ['There is less traffic today.', 'Hoy hay menos tráfico.'],
        ['She makes fewer mistakes now.', 'Ahora ella comete menos errores.'],
        ['We have less time than before.', 'Tenemos menos tiempo que antes.'],
      ]
    ),
    teoria(
      '8 · Comparar acciones: adverbios',
      "También se comparan acciones. Los adverbios cortos agregan -er y los largos usan more:\n\n• She runs faster than me.\n• He works harder than his brother.\n• She speaks more slowly than before.\n• He drives more carefully than I do.\n\nIrregular: well → better: «She sings better than me».",
      [
        ['She runs faster than me.', 'Ella corre más rápido que yo.'],
        ['He works harder than his brother.', 'Él trabaja más duro que su hermano.'],
        ['She speaks more slowly than before.', 'Ella habla más despacio que antes.'],
        ['She sings better than me.', 'Ella canta mejor que yo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Corto: + er', suj('tall'), resto('→'), verbo('taller than')),
    fl('Largo: more + adjetivo', resto('more'), verbo('expensive'), resto('than')),
    fl('Igualdad', resto('as'), verbo('tall'), resto('as')),
    fl('Cantidad', resto('more / less / fewer'), verbo('noun'), resto('than')),
  ],
  table: {
    cols: ['Adjetivo', 'Comparativo', 'Regla'],
    rows: [
      ['tall', 'taller', '+ er'],
      ['nice', 'nicer', '+ r'],
      ['big', 'bigger', 'dobla la consonante'],
      ['happy', 'happier', 'y → ier'],
      ['expensive', 'more expensive', 'more + adjetivo'],
      ['good', 'better', 'irregular'],
      ['bad', 'worse', 'irregular'],
    ],
  },
  contrastCard: {
    left: { label: 'Less — incontables', example: 'I have less money.', highlight: 'less' },
    right: { label: 'Fewer — contables en plural', example: 'I have fewer friends.', highlight: 'fewer' },
    caption: 'Less con lo que no se cuenta (money, time). Fewer con lo que se cuenta (friends, cars).',
  },
  quiz: [
    ejercicio(
      'My brother is ___ than me. (tall)',
      'taller',
      ['more tall', 'tallest', 'tall'],
      'Los adjetivos cortos agregan -er para comparar: taller than. more tall mezcla las dos formas, tallest es superlativo y tall no compara.'
    ),
    ejercicio(
      'This book is ___ than that one. (interesting)',
      'more interesting',
      ['interestinger', 'interesting', 'most interesting'],
      'Los adjetivos largos usan more: «more interesting than». interestinger no existe, interesting no compara y most interesting es superlativo.'
    ),
    ejercicio(
      'Her English is ___ than mine. (good)',
      'better',
      ['gooder', 'more good', 'best'],
      'good tiene comparativo irregular: better. gooder y more good no existen y best es el superlativo.'
    ),
    ejercicio(
      'There is ___ traffic today than yesterday.',
      'less',
      ['fewer', 'least', 'many'],
      'traffic es incontable, así que se usa less. fewer es para contables en plural, least es superlativo y many no compara.'
    ),
    ejercicio(
      'I have ___ friends than my sister. She is very popular.',
      'fewer',
      ['fewest', 'more few', 'littler'],
      'friends es contable en plural, así que se compara con fewer. fewest es superlativo, more few y littler no son formas correctas.'
    ),
  ],
  flashcards: [
    tarjeta('Comparativo corto', 'adjetivo + er + than\ntaller · nicer · bigger · happier'),
    tarjeta('Comparativo largo', 'more + adjetivo + than\nmore expensive · more interesting'),
    tarjeta('Irregulares', 'good → better · bad → worse\nfar → farther / further'),
    tarjeta('As… as', 'She is as tall as her sister.\nHe isn\'t as old as he looks.'),
    tarjeta('More, less, fewer', 'more + contable o incontable\nless + incontable (less time)\nfewer + contable plural (fewer people)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Which phone do you prefer?', translation: '¿Qué teléfono prefieres?' },
    { speaker: 'user', text: 'The new one is better, but it is more expensive.', translation: 'El nuevo es mejor, pero es más caro.' },
    { speaker: 'other', text: "The old one isn't as fast as the new one, is it?", translation: 'El viejo no es tan rápido como el nuevo, ¿verdad?' },
    { speaker: 'user', text: 'No, it is a lot slower. But I have less money now than last month.', translation: 'No, es mucho más lento. Pero ahora tengo menos dinero que el mes pasado.' },
    { speaker: 'other', text: 'And you have fewer free days, so you need a faster phone for work!', translation: '¡Y tienes menos días libres, así que necesitas un teléfono más rápido para trabajar!' },
    { speaker: 'user', text: "You're right. The more I think, the more I want the new one.", translation: 'Tienes razón. Cuanto más lo pienso, más quiero el nuevo.' },
  ],
  readingText: {
    title: 'Two cities',
    body: "Lima and Cusco are very different. Lima is bigger than Cusco and has more people, but Cusco is older and quieter. In Lima there is more traffic and there are fewer quiet streets. The weather in Lima is warmer than in Cusco, and the food is a bit cheaper in Cusco. Which city is better? It depends. The more you travel, the more you learn. For me, the best city is the one where my family lives.",
    translation:
      'Lima y Cusco son muy distintas. Lima es más grande que Cusco y tiene más gente, pero Cusco es más antigua y más tranquila. En Lima hay más tráfico y hay menos calles tranquilas. El clima en Lima es más cálido que en Cusco y la comida es un poco más barata en Cusco. ¿Cuál ciudad es mejor? Depende. Cuanto más viajas, más aprendes. Para mí, la mejor ciudad es aquella donde vive mi familia.',
  },
  tips: [
    "No mezcles las dos formas: «taller», no «more taller»; «more expensive», no «expensiver».",
    'Después de un comparativo se usa than: «taller than me». Con igualdad se usa as… as: «as tall as».',
    "Con less y fewer: less + incontable (less time), fewer + contable plural (fewer people).",
    "Para decir cuánto más, usa much, a lot o a bit antes del comparativo: «much older», no «very older».",
  ],
  dailyWords: palabras('cheap', 'expensive', 'heavy', 'light', 'strong', 'weak'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: El Adverbio (Adverb)', ruta: '/gramatica/concepto/el-adverbio-adverb' },
  ],
};

// ─── Unidad 11 (id 23) · Describir personas, have got, -ing y preposiciones ───

const UNIDAD_23: Unit = {
  title: 'Describing People, Have Got, -ing and Prepositions',
  topic: BLOQUE_A2_4,
  level: 'A2',
  explain: [
    teoria(
      '1 · What does she look like? ¿Cómo es? ¿Cómo está?',
      "En inglés hay tres preguntas distintas para hablar de una persona:\n\n• What does she look like? → cómo se ve (apariencia): She's tall with long dark hair.\n• What is she like? → cómo es (personalidad): She's friendly and funny.\n• How is she? → cómo está (salud o ánimo): She's fine, thanks.\n\n⚠️ Ojo: «What is she like?» no pregunta si le gusta algo (eso es «Does she like…?»).",
      [
        ['What does she look like? She is tall with long hair.', '¿Cómo es físicamente? Es alta y de pelo largo.'],
        ['What is she like? She is friendly.', '¿Cómo es ella? Es amable.'],
        ['How is she? She is fine, thanks.', '¿Cómo está ella? Está bien, gracias.'],
        ['What does your brother look like?', '¿Cómo es físicamente tu hermano?'],
      ]
    ),
    teoria(
      '2 · Describir la apariencia',
      "Para describir a una persona se usan estas estructuras:\n\n• be + adjetivo: He is tall · She is slim · He is in his thirties.\n• have / has + rasgo: She has long dark hair · He has blue eyes.\n• wear / wears + ropa: He wears glasses · She is wearing a red coat.\n\nEl pelo: long, short, straight, curly · dark, fair. Los ojos: brown, blue, green. Estatura y cuerpo: tall, short, slim, strong.",
      [
        ['He is tall and slim.', 'Él es alto y delgado.'],
        ['She has long dark hair.', 'Ella tiene el pelo largo y oscuro.'],
        ['He has blue eyes and a beard.', 'Él tiene ojos azules y barba.'],
        ['She wears glasses.', 'Ella usa lentes.'],
      ]
    ),
    teoria(
      "3 · Have got: afirmativa",
      "Have got significa lo mismo que have (tener) y es muy común en el inglés hablado. Se usa para posesiones, rasgos y relaciones:\n\n• I've got a new phone. · You've got nice eyes.\n• He's got two sisters. · She's got long hair.\n• We've got a big house. · They've got a dog.\n\nContracciones: I've, you've, we've, they've · he's, she's, it's (OJO: he's got = he has got).",
      [
        ["I've got a new phone.", 'Tengo un teléfono nuevo.'],
        ["She's got long dark hair.", 'Ella tiene el pelo largo y oscuro.'],
        ["He's got two sisters.", 'Él tiene dos hermanas.'],
        ["They've got a big house.", 'Ellos tienen una casa grande.'],
      ]
    ),
    teoria(
      '4 · Have got: negativa, preguntas y respuestas cortas',
      "Have got se comporta como un verbo auxiliar: no necesita do / does.\n\n• Negativa: haven't got / hasn't got → I haven't got a car · She hasn't got a brother.\n• Pregunta: Have / Has + sujeto + got → Have you got a pen? · Has she got a car?\n• Respuesta corta: Yes, I have. · No, she hasn't.\n\n⚠️ Ojo: «Have you got a pen?», no «Do you got a pen?».",
      [
        ["I haven't got a car.", 'No tengo auto.'],
        ["She hasn't got any brothers.", 'Ella no tiene hermanos.'],
        ['Have you got a pen? Yes, I have.', '¿Tienes un lápiz? Sí.'],
        ["Has he got a bike? No, he hasn't.", '¿Él tiene una bicicleta? No.'],
      ]
    ),
    teoria(
      '5 · Have o have got',
      "Para tener (posesión, rasgos, familia) las dos formas sirven: «I have a car» = «I've got a car». Pero hay diferencias:\n\n• Have got es más informal y solo se usa en presente.\n• Con have se usa do / does: «Do you have a pen?» · «She doesn't have a car».\n• Para acciones (have breakfast, have a shower, have fun) solo se usa have, nunca have got.",
      [
        ['I have a car. I\'ve got a car.', 'Tengo un auto.'],
        ["Do you have a pen? Have you got a pen?", '¿Tienes un lápiz?'],
        ['I have breakfast at seven.', 'Desayuno a las siete.'],
        ['We had fun at the party.', 'Nos divertimos en la fiesta.'],
      ]
    ),
    teoria(
      '6 · Responder: how tall, how old',
      "Para preguntar por medidas y edad se usa How + adjetivo + be:\n\n• How tall is she? → She is 1.70 meters tall.\n• How old is he? → He is thirty. · He is in his forties.\n• How long is your hair? → It is shoulder-length.\n\nPara decir la edad no se dice «have years»: «He is thirty years old» o solo «He is thirty».",
      [
        ['How tall is she? She is one seventy.', '¿Cuánto mide? Mide uno setenta.'],
        ['How old is he? He is thirty.', '¿Cuántos años tiene? Tiene treinta.'],
        ['He is in his forties.', 'Él tiene unos cuarenta años.'],
        ['How long is her hair?', '¿Qué tan largo es su pelo?'],
      ]
    ),
    teoria(
      '7 · Identificar personas con verbo + -ing',
      "Para decir CUÁL persona es, se puede usar un verbo en -ing después del sustantivo:\n\n• The man talking to Ana is my teacher.\n• The girl wearing a red coat is my cousin.\n• Who is the woman standing near the door?\n• The boy playing the guitar is Tom.\n\nEs lo mismo que «the man who is talking to Ana», pero más corto.",
      [
        ['The man talking to Ana is my teacher.', 'El hombre que habla con Ana es mi profesor.'],
        ['The girl wearing a red coat is my cousin.', 'La chica que lleva un abrigo rojo es mi prima.'],
        ['Who is the woman standing near the door?', '¿Quién es la mujer que está parada junto a la puerta?'],
        ['The boy playing the guitar is Tom.', 'El chico que toca la guitarra es Tom.'],
      ]
    ),
    teoria(
      '8 · Identificar personas con preposiciones',
      "También se identifica con with, in, on y next to:\n\n• with → rasgos o cosas que lleva: The girl with long hair · The man with a beard.\n• in → ropa y colores: The woman in a red dress · The boy in a blue T-shirt.\n• on / next to → lugar: The man on the left · The girl next to Ana.\n\nPregunta típica: Which one is your sister? — The one with glasses.",
      [
        ['The girl with long hair is my sister.', 'La chica de pelo largo es mi hermana.'],
        ['The woman in a red dress is my aunt.', 'La mujer con vestido rojo es mi tía.'],
        ['The man on the left is my uncle.', 'El hombre de la izquierda es mi tío.'],
        ['Which one is your brother? The one with glasses.', '¿Cuál es tu hermano? El de los lentes.'],
      ]
    ),
    teoria(
      '9 · Preguntas para identificar',
      "Para preguntar quién es alguien se combinan las estructuras anteriores:\n\n• Who is the man talking to Ana?\n• Which one is your brother?\n• Who is the girl with the long hair?\n• Is that your sister? The one in the blue jacket?\n\nRespuestas: He's my teacher. · The one on the right. · Yes, that's her.",
      [
        ['Who is the man talking to Ana?', '¿Quién es el hombre que habla con Ana?'],
        ['Which one is your brother?', '¿Cuál es tu hermano?'],
        ['Who is the girl with the long hair?', '¿Quién es la chica del pelo largo?'],
        ['Is that your sister? The one in the blue jacket?', '¿Esa es tu hermana? ¿La de la chaqueta azul?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Apariencia', resto('What'), aux('does'), suj('she'), verbo('look like?')),
    fl('Con verbo + -ing', resto('The man'), verbo('talking'), resto('to Ana')),
    fl('Con with / in', resto('The girl'), aux('with'), resto('long hair')),
  ],
  table: {
    cols: ['Pregunta', 'Qué pregunta', 'Respuesta'],
    rows: [
      ['What does she look like?', 'Apariencia', 'She is tall with long hair.'],
      ['What is she like?', 'Personalidad', 'She is friendly.'],
      ['How is she?', 'Estado o salud', 'She is fine.'],
      ['How tall is she?', 'Estatura', 'She is 1.70 m tall.'],
      ['Which one is she?', 'Identificar', 'The one with glasses.'],
    ],
  },
  contrastCard: {
    left: { label: 'Look like — apariencia', example: 'What does he look like?', highlight: 'look like' },
    right: { label: 'Be like — personalidad', example: 'What is he like?', highlight: 'is he like' },
    caption: 'What does he look like? pregunta cómo se ve. What is he like? pregunta cómo es de carácter.',
  },
  quiz: [
    ejercicio(
      'A: What does she look like? B: ___',
      "She's tall with long hair.",
      ["She's very kind.", "She's fine, thanks.", 'She likes music.'],
      'What does she look like? pregunta por la apariencia, así que se responde con rasgos físicos. «She\'s very kind» describe el carácter y «She\'s fine» responde a How is she?.'
    ),
    ejercicio(
      'He ___ got a new bike.',
      'has',
      ['have', 'is', 'does'],
      'Have got con he se usa como has got: «He has got a new bike» (he\'s got). have no concuerda, is no significa tener y does no se usa con got.'
    ),
    ejercicio(
      '___ you got a pen?',
      'Have',
      ['Do', 'Are', 'Has'],
      'La pregunta con have got empieza con Have o Has, y con you va Have: «Have you got a pen?». Do no se usa con got.'
    ),
    ejercicio(
      'The woman ___ to Ana is my mother. (talk)',
      'talking',
      ['talk', 'talks', 'talked'],
      'Para identificar a una persona por lo que hace se usa un verbo en -ing: «The woman talking to Ana». Los demás no forman esa estructura.'
    ),
    ejercicio(
      'The girl ___ long dark hair is my cousin.',
      'with',
      ['in', 'on', 'at'],
      'Para describir rasgos se usa with: «the girl with long dark hair». in se usa con la ropa y on y at con ubicaciones.'
    ),
  ],
  flashcards: [
    tarjeta('Tres preguntas', 'What does she look like? → apariencia\nWhat is she like? → personalidad\nHow is she? → cómo está'),
    tarjeta('Have got', "I've got · he's got · they've got\nI haven't got · Have you got…? · Has she got…?\nYes, I have. / No, she hasn't."),
    tarjeta('Have y have got', 'I have a car = I\'ve got a car.\nAcciones: have breakfast, have a shower (sin got).\nCon have: Do you have…? · She doesn\'t have…'),
    tarjeta('Identificar con -ing', 'The man talking to Ana is my teacher.\nThe girl wearing a red coat is my cousin.'),
    tarjeta('Identificar con preposiciones', 'with: rasgos · in: ropa · on / next to: lugar\nThe girl with long hair · the man in a black jacket'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do you see my brother in this photo?', translation: '¿Ves a mi hermano en esta foto?' },
    { speaker: 'user', text: 'Which one is he? What does he look like?', translation: '¿Cuál es él? ¿Cómo es físicamente?' },
    { speaker: 'other', text: "He's tall, with short dark hair. He's the one talking to the girl in the red dress.", translation: 'Es alto, de pelo corto y oscuro. Es el que habla con la chica del vestido rojo.' },
    { speaker: 'user', text: "Oh, I see him. He's got glasses, hasn't he? What is he like?", translation: 'Ah, lo veo. Tiene lentes, ¿verdad? ¿Cómo es él?' },
    { speaker: 'other', text: "He's funny and very friendly. He's got a big family, too.", translation: 'Es gracioso y muy amable. También tiene una familia grande.' },
    { speaker: 'user', text: 'Has he got any sisters?', translation: '¿Tiene hermanas?' },
    { speaker: 'other', text: "Yes, he has. Two. The girl with long hair is one of them.", translation: 'Sí. Dos. La chica de pelo largo es una de ellas.' },
  ],
  readingText: {
    title: 'My new neighbors',
    body: "Last week a new family moved in next door. The father is tall and slim, and he has a beard. The mother is short with long curly hair, and she wears glasses. They've got two children. The boy playing in the garden is eight, and the girl with the red bike is twelve. I asked my mother, \"What are they like?\" She said, \"They are very friendly. The woman wearing the yellow coat helped me with my bags yesterday.\" I think we'll be good friends.",
    translation:
      'La semana pasada se mudó una familia nueva al lado. El padre es alto y delgado y tiene barba. La madre es baja, de pelo largo y rizado, y usa lentes. Tienen dos hijos. El niño que juega en el jardín tiene ocho años y la niña de la bicicleta roja tiene doce. Le pregunté a mi mamá: «¿Cómo son?». Ella dijo: «Son muy amables. La mujer del abrigo amarillo me ayudó con las bolsas ayer». Creo que seremos buenos amigos.',
  },
  tips: [
    "What does she look like? es por el físico; What is she like? es por el carácter. Son preguntas distintas.",
    "Have got no usa do / does: «Have you got a pen?», no «Do you got a pen?».",
    'Para acciones usa solo have: «I have breakfast», no «I\'ve got breakfast».',
    'Para identificar a alguien: with (rasgos), in (ropa), -ing (lo que hace) y la ubicación: «the man on the left».',
  ],
  dailyWords: palabras('hair', 'eye', 'glasses', 'beard', 'slim', 'handsome'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
    { etiqueta: '📖 Gramática: La Preposición (Preposition)', ruta: '/gramatica/concepto/la-preposicion-preposition' },
  ],
};

const FORMAS_23: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('have / has'), resto('got'), resto('noun'))],
    ejemplos: [
      ["I've got a new phone.", 'Tengo un teléfono nuevo.'],
      ["She's got long dark hair.", 'Ella tiene el pelo largo y oscuro.'],
      ["They've got a big house.", 'Ellos tienen una casa grande.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('have / has'), neg('not'), resto('got'), resto('noun'))],
    ejemplos: [
      ["I haven't got a car.", 'No tengo auto.'],
      ["She hasn't got any brothers.", 'Ella no tiene hermanos.'],
      ["We haven't got time.", 'No tenemos tiempo.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Have / Has'), suj('subject'), resto('got'), resto('noun?'))],
    ejemplos: [
      ['Have you got a pen?', '¿Tienes un lápiz?'],
      ['Has she got a car?', '¿Ella tiene un auto?'],
      ['What have they got?', '¿Qué tienen ellos?'],
    ],
  },
  nota: "Contracciones: I've · you've · he's · she's · we've · they've got. Respuestas cortas: Yes, I have. / No, she hasn't. Have got es informal y solo se usa en presente.",
  ojo: "Have got no usa do / does: «Have you got a pen?», no «Do you got a pen?». Y para acciones (have breakfast, have a shower) se usa have solo.",
};

// ─── Unidad 12 (id 24) · Will, may, might y cláusulas de futuro ───

const UNIDAD_24: Unit = {
  title: 'Will, May and Might, Future Clauses with If, When, After and Before',
  topic: BLOQUE_A2_4,
  level: 'A2',
  explain: [
    teoria(
      '1 · Will: predicciones y decisiones',
      "Will habla del futuro cuando es una decisión del momento, una predicción, una promesa o un ofrecimiento. Es igual para todas las personas y el verbo va en base:\n\n• I think it will rain tomorrow. (predicción)\n• The phone is ringing. I'll answer it. (decisión en el momento)\n• I'll help you with your bags. (ofrecimiento)\n• I promise I will call you. (promesa)\n\nContracción: I'll, you'll, he'll, she'll, we'll, they'll.",
      [
        ['I think it will rain tomorrow.', 'Creo que lloverá mañana.'],
        ["The phone is ringing. I'll answer it.", 'El teléfono está sonando. Yo contesto.'],
        ["I'll help you with your bags.", 'Te ayudo con tus bolsas.'],
        ['I promise I will call you.', 'Prometo que te llamaré.'],
      ]
    ),
    teoria(
      "2 · Will: negativa, preguntas y respuestas cortas",
      "• Negativa: will not → won't: I won't forget · She won't come.\n• Pregunta: Will + sujeto + verbo → Will you help me? · Will it rain?\n• Respuesta corta: Yes, I will. · No, she won't.\n• Información: What will you do? · When will they arrive?\n\n⚠️ Ojo: «She will come», no «She will comes» ni «She wills come».",
      [
        ["I won't forget your birthday.", 'No olvidaré tu cumpleaños.'],
        ['Will you help me? Yes, I will.', '¿Me ayudarás? Sí.'],
        ["Will it rain? No, it won't.", '¿Va a llover? No.'],
        ['When will they arrive?', '¿Cuándo llegarán?'],
      ]
    ),
    teoria(
      '3 · Will o going to',
      "• Will → decisión en el momento, promesa, ofrecimiento o predicción sin evidencia: «I'll take this one» · «I think it will be fine».\n• Going to → plan ya decidido o predicción con evidencia: «I'm going to study tonight» · «Look at the clouds! It's going to rain».\n\nSi ya tenías el plan antes de hablar, usa going to. Si decides mientras hablas, usa will.",
      [
        ["I'll take this one, please.", 'Me llevo este, por favor.'],
        ["I'm going to study tonight.", 'Voy a estudiar esta noche.'],
        ["I think it will be a good year.", 'Creo que será un buen año.'],
        ["Look at those clouds! It's going to rain.", '¡Mira esas nubes! Va a llover.'],
      ]
    ),
    teoria(
      '4 · Shall: ofrecimientos y sugerencias',
      "📖 Del libro: shall se usa casi solo con I y we para ofrecer algo o sugerir:\n\n• Shall I open the window? (ofrecimiento)\n• Shall we go? (sugerencia)\n• What shall we do tonight?\n\nEs más formal y más común en inglés británico. En una afirmativa suena muy formal: «I shall return».",
      [
        ['Shall I open the window?', '¿Abro la ventana?'],
        ['Shall we go to the cinema?', '¿Vamos al cine?'],
        ['What shall we do tonight?', '¿Qué hacemos esta noche?'],
        ['Shall I carry your bag?', '¿Le cargo la bolsa?'],
      ]
    ),
    teoria(
      '5 · May y might: posibilidad',
      "May y might significan «puede que», «quizás». Hablan de algo POSIBLE, no seguro. El verbo que sigue va en base:\n\n• It may rain later.\n• She might be late.\n• I may not go to the party. · He might not come.\n\nMight es un poco menos seguro que may, pero se usan casi igual. En la pregunta no se usan: se usa «Do you think…?» o «Maybe».",
      [
        ['It may rain later.', 'Puede que llueva más tarde.'],
        ['She might be late.', 'Puede que ella llegue tarde.'],
        ["I may not go to the party.", 'Puede que no vaya a la fiesta.'],
        ['He might not come.', 'Puede que él no venga.'],
      ]
    ),
    teoria(
      '6 · Will, may y might: cuánta seguridad hay',
      "Con las mismas ideas se puede mostrar el grado de seguridad:\n\n• Seguro: will · definitely will → «I will definitely come».\n• Probable: will probably · probably won't → «It will probably rain».\n• Posible: may · might · maybe · perhaps → «I might go» · «Maybe I'll go».\n\nProbably, definitely y perhaps cambian la posición: I will probably · I probably won't · Maybe I'll go.",
      [
        ["I'll definitely be there at eight.", 'Definitivamente estaré ahí a las ocho.'],
        ['It will probably rain tomorrow.', 'Probablemente llueva mañana.'],
        ['I might go to the gym later.', 'Puede que vaya al gimnasio más tarde.'],
        ["Maybe I'll call him tonight.", 'Quizás lo llame esta noche.'],
      ]
    ),
    teoria(
      '7 · Presente continuo y going to: repaso y contraste',
      'Para el futuro tienes cuatro herramientas. Elige según lo que quieres decir:\n\n• Presente continuo → arreglo organizado: «I\'m meeting Ana at 5».\n• Going to → plan o predicción con evidencia: «I\'m going to learn Italian».\n• Will → decisión en el momento, promesa u ofrecimiento: «I\'ll help you».\n• May / might → posibilidad: «I might go».\n\nCon un arreglo ya organizado y un plan, las dos primeras se pueden cambiar sin problema.',
      [
        ["I'm meeting Ana at five tomorrow.", 'Me encuentro con Ana mañana a las cinco.'],
        ["I'm going to learn Italian.", 'Voy a aprender italiano.'],
        ["I'll help you with that.", 'Te ayudo con eso.'],
        ['I might go to the party.', 'Puede que vaya a la fiesta.'],
      ]
    ),
    teoria(
      '8 · Cláusulas con if y when: presente para el futuro',
      "Después de if y when, aunque se hable del futuro, el verbo va en presente simple. La cláusula principal lleva will:\n\n• If it rains tomorrow, we will stay at home.\n• When I get home, I'll call you.\n• If you study, you will pass the exam.\n\n⚠️ Ojo: «If it rains», no «If it will rain»; «When I get home», no «When I will get home».",
      [
        ['If it rains tomorrow, we will stay at home.', 'Si llueve mañana, nos quedaremos en casa.'],
        ["When I get home, I'll call you.", 'Cuando llegue a casa, te llamaré.'],
        ['If you study, you will pass the exam.', 'Si estudias, aprobarás el examen.'],
        ["I'll tell you if I hear anything.", 'Te aviso si me entero de algo.'],
      ]
    ),
    teoria(
      '9 · Cláusulas con after y before',
      "Con after (después de que) y before (antes de que) pasa lo mismo: el verbo de esa cláusula va en presente simple, y la principal usa will, going to o un imperativo:\n\n• After I finish work, I'll go to the gym.\n• Before you leave, call me.\n• I'll wait until you arrive.\n• As soon as I know, I'll tell you.\n\nLa cláusula puede ir al inicio (con coma) o al final (sin coma).",
      [
        ["After I finish work, I'll go to the gym.", 'Después de que termine el trabajo, iré al gimnasio.'],
        ['Before you leave, call me.', 'Antes de que te vayas, llámame.'],
        ["I'll wait until you arrive.", 'Esperaré hasta que llegues.'],
        ["As soon as I know, I'll tell you.", 'Apenas lo sepa, te aviso.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Will', suj('I'), aux('will / won\'t'), verbo('verb')),
    fl('May / might', suj('It'), aux('may / might'), verbo('verb')),
    fl('If + presente', resto('If'), suj('it'), verbo('rains'), resto(','), suj('we'), aux('will'), verbo('stay')),
    fl('When / after / before', resto('When'), suj('I'), verbo('get home'), resto(','), suj('I'), aux("'ll"), verbo('call')),
  ],
  table: {
    cols: ['Idea', 'Estructura', 'Ejemplo'],
    rows: [
      ['Arreglo organizado', 'presente continuo', "I'm meeting Ana at five."],
      ['Plan o evidencia', 'going to', "It's going to rain."],
      ['Decisión del momento', 'will', "I'll answer it."],
      ['Posibilidad', 'may / might', 'It might rain.'],
      ['Cláusula de futuro', 'if / when + presente', "If it rains, I'll stay."],
    ],
  },
  contrastCard: {
    left: { label: 'Will — decisión o seguridad', example: "I'll help you.", highlight: "I'll" },
    right: { label: 'Might — solo posible', example: 'I might help you.', highlight: 'might' },
    caption: 'Will muestra decisión o seguridad. May y might muestran posibilidad: puede pasar o no.',
  },
  quiz: [
    ejercicio(
      "It's very hot in here. I ___ open the window.",
      'will',
      ['going to', 'do', 'am'],
      "Es una decisión que se toma en el momento de hablar, así que se usa will: «I will open» (I'll open). going to necesita am / is / are y do y am no forman el futuro."
    ),
    ejercicio(
      "Don't worry. I ___ forget your birthday. I promise.",
      "won't",
      ["don't", "wouldn't", 'am not'],
      "Una promesa sobre el futuro lleva will: la negativa es won't. don't es presente, wouldn't no se usa para promesas y am not no concuerda."
    ),
    ejercicio(
      'Take an umbrella. It ___ rain later.',
      'might',
      ['mights', 'might to', 'does'],
      'Might expresa posibilidad y va seguido del verbo base. mights no existe, might to lleva to de más y does no forma la posibilidad.'
    ),
    ejercicio(
      'If it ___ tomorrow, we will stay at home.',
      'rains',
      ['will rain', 'would rain', 'rain'],
      'Después de if el verbo va en presente simple, aunque hable del futuro: «If it rains». will rain y would rain no se usan después de if, y rain no concuerda con it.'
    ),
    ejercicio(
      "I'll call you when I ___ home. (get)",
      'get',
      ['will get', 'would get', 'got'],
      'Después de when el verbo va en presente simple: «when I get home». will get y would get no se usan después de when, y got es pasado.'
    ),
  ],
  flashcards: [
    tarjeta('Will', "Decisión en el momento, promesa, ofrecimiento, predicción.\nI'll help you · I won't forget · Will you come?"),
    tarjeta('May y might', 'Posibilidad: puede pasar o no.\nIt may rain · She might be late · He might not come'),
    tarjeta('Los cuatro futuros', 'Presente continuo: arreglo · going to: plan o evidencia\nwill: decisión o promesa · may / might: posibilidad'),
    tarjeta('If y when con presente', 'If it rains, we will stay.\nWhen I get home, I\'ll call.\nNo se usa will después de if ni de when.'),
    tarjeta('After y before', "After I finish, I'll go.\nBefore you leave, call me.\nEl verbo de esa cláusula va en presente simple."),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Are you coming to the party on Saturday?', translation: '¿Vienes a la fiesta el sábado?' },
    { speaker: 'user', text: "I'm not sure. I might come, but I may have to work.", translation: 'No estoy seguro. Puede que vaya, pero puede que tenga que trabajar.' },
    { speaker: 'other', text: "If you finish early, will you come?", translation: 'Si terminas temprano, ¿vendrás?' },
    { speaker: 'user', text: "Yes, I will. After I finish work, I'll take a taxi.", translation: 'Sí. Después de terminar el trabajo, tomaré un taxi.' },
    { speaker: 'other', text: "Great! Call me before you leave, and I'll wait for you at the door.", translation: '¡Genial! Llámame antes de salir y te espero en la puerta.' },
    { speaker: 'user', text: "Perfect. I'll definitely call you.", translation: 'Perfecto. Definitivamente te llamaré.' },
  ],
  readingText: {
    title: 'The weekend forecast',
    body: "This weekend the weather will be changeable. On Saturday it will probably be sunny in the morning, but it might rain in the afternoon. If it rains, the festival in the park will move to the school. On Sunday it may be cloudy, and the temperature will fall. When the sun goes down, it will be cold, so take a jacket. We're going to leave early on Saturday because we're meeting friends at ten. Before we go, I'll check the forecast again.",
    translation:
      'Este fin de semana el clima será cambiante. El sábado probablemente haya sol por la mañana, pero puede que llueva por la tarde. Si llueve, el festival del parque se trasladará a la escuela. El domingo puede que esté nublado y la temperatura bajará. Cuando se ponga el sol, hará frío, así que lleva una chaqueta. Vamos a salir temprano el sábado porque nos encontramos con amigos a las diez. Antes de salir, volveré a revisar el pronóstico.',
  },
  tips: [
    "Después de will, may y might el verbo va en base: «She will come», «It might rain». No llevan -s ni to.",
    "Después de if, when, after y before el verbo va en presente simple aunque hable del futuro: «If it rains, I'll stay», no «If it will rain».",
    'Decisión del momento → will. Plan que ya tenías → going to. Arreglo con hora y persona → presente continuo.',
    'May y might expresan posibilidad. En preguntas no se usan: se dice «Do you think it will rain?».',
  ],
  dailyWords: palabras('maybe', 'perhaps', 'probably', 'definitely', 'soon', 'later'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

const FORMAS_24_WILL: FormasUnidad = {
  titulo: 'Will',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('will'), verbo('base verb'))],
    ejemplos: [
      ["I'll help you.", 'Te ayudo.'],
      ['It will rain tomorrow.', 'Lloverá mañana.'],
      ["They'll arrive at six.", 'Ellos llegarán a las seis.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("won't"), verbo('base verb'))],
    ejemplos: [
      ["I won't forget.", 'No olvidaré.'],
      ["She won't come.", 'Ella no vendrá.'],
      ["We won't be late.", 'No llegaremos tarde.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Will'), suj('subject'), verbo('base verb'))],
    ejemplos: [
      ['Will you help me?', '¿Me ayudarás?'],
      ['Will it rain?', '¿Va a llover?'],
      ['What will you do?', '¿Qué harás?'],
    ],
  },
  nota: "will es igual para todas las personas. Contracciones: I'll · you'll · he'll · she'll · we'll · they'll · won't. Respuestas cortas: Yes, I will. / No, she won't.",
  ojo: "Después de will el verbo va en base: «She will come», no «She will comes» ni «She will to come».",
};

const FORMAS_24_MAY: FormasUnidad = {
  titulo: 'May y might',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('may / might'), verbo('base verb'))],
    ejemplos: [
      ['It may rain later.', 'Puede que llueva más tarde.'],
      ['She might be late.', 'Puede que ella llegue tarde.'],
      ['We might go out.', 'Puede que salgamos.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('may / might'), neg('not'), verbo('base verb'))],
    ejemplos: [
      ["I may not go to the party.", 'Puede que no vaya a la fiesta.'],
      ['He might not come.', 'Puede que él no venga.'],
      ['It might not rain.', 'Puede que no llueva.'],
    ],
  },
  pregunta: {
    formulas: [f(resto('Do you think'), suj('subject'), aux('will / might'), verbo('verb?'))],
    ejemplos: [
      ['Do you think it will rain?', '¿Crees que va a llover?'],
      ['Do you think she might come?', '¿Crees que ella podría venir?'],
      ['Maybe you will win.', 'Quizás ganes.'],
    ],
  },
  nota: 'may y might expresan posibilidad (puede pasar o no) y son iguales para todas las personas. En la negativa no suelen contraerse: may not, might not.',
  ojo: "Después de may y might el verbo va en base: «She might come», no «She might comes» ni «She might to come». No se usan para preguntar posibilidades: se dice «Do you think…?» o «Maybe».",
};

/** Las unidades del bloque 4, por id interno. */
export const UNIDADES_BLOQUE_4: Record<number, Unit> = {
  22: UNIDAD_22,
  23: UNIDAD_23,
  24: UNIDAD_24,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 4 que las tienen. */
export const FORMAS_BLOQUE_4: Record<number, FormasUnidad | FormasUnidad[]> = {
  23: FORMAS_23,
  24: [FORMAS_24_WILL, FORMAS_24_MAY],
};
