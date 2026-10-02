import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_A2_3 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 3 · Viajes, hogar y eventos pasados (ids 19–21: Unidad 7–9 del nivel A2).

// ─── Unidad 7 (id 19) · Infinitivos de propósito, It's + adjetivo + to, consejos y sugerencias ───

const UNIDAD_19: Unit = {
  title: "Infinitives of Purpose, It's + Adjective + To, Advice and Suggestions",
  topic: BLOQUE_A2_3,
  level: 'A2',
  explain: [
    teoria(
      '1 · Infinitivo de propósito: to + verbo',
      "Para decir PARA QUÉ haces algo se usa to + verbo base. Responde a la pregunta Why? (¿para qué?):\n\n• I went to the bank to get some money.\n• She is studying English to find a better job.\n• We use a map to find the way.\n\nEn español usamos «para + verbo». En inglés basta con to: no se dice «for get» ni «for to get».",
      [
        ['I went to the bank to get some money.', 'Fui al banco para sacar dinero.'],
        ['She is studying English to find a better job.', 'Ella estudia inglés para encontrar un mejor trabajo.'],
        ['We use a map to find the way.', 'Usamos un mapa para encontrar el camino.'],
        ['He called to say hello.', 'Él llamó para saludar.'],
      ]
    ),
    teoria(
      '2 · In order to y for',
      "• in order to es lo mismo que to, pero más formal: «She saved money in order to travel».\n• Para negar el propósito: in order not to + verbo → «I wrote it down in order not to forget».\n• for + sustantivo explica el motivo: «I went to the shop for milk».\n• for + -ing explica para qué sirve una cosa: «This knife is for cutting bread».\n\n⚠️ Ojo: con un verbo de acción se usa to: «I went there to learn», no «for learn».",
      [
        ['She saved money in order to travel.', 'Ella ahorró dinero para viajar.'],
        ['I wrote it down in order not to forget.', 'Lo anoté para no olvidarlo.'],
        ['I went to the shop for milk.', 'Fui a la tienda por leche.'],
        ['This knife is for cutting bread.', 'Este cuchillo es para cortar pan.'],
      ]
    ),
    teoria(
      "3 · It's + adjetivo + to + verbo",
      "📖 Del libro: para dar una opinión sobre una actividad se usa it + be + adjetivo + to + verbo:\n\n• It's easy to learn English.\n• It's important to sleep well.\n• It's dangerous to drive fast.\n• It's nice to meet you.\n\nEl sujeto es it, no la actividad. No se dice «To learn English is easy» como frase normal, aunque se entienda; lo natural es empezar con It's.",
      [
        ["It's easy to learn English.", 'Es fácil aprender inglés.'],
        ["It's important to sleep well.", 'Es importante dormir bien.'],
        ["It's dangerous to drive fast.", 'Es peligroso manejar rápido.'],
        ["It's nice to meet you.", 'Es un gusto conocerte.'],
      ]
    ),
    teoria(
      '4 · It\'s + adjetivo + for + persona + to',
      'Para decir QUIÉN encuentra difícil, fácil o importante la actividad se agrega for + persona después del adjetivo:\n\n• It\'s difficult for me to wake up early.\n• It\'s easy for her to speak English.\n• It\'s important for children to play.\n\nCon un pronombre se usa el objeto: for me, for you, for him, for her, for us, for them.',
      [
        ["It's difficult for me to wake up early.", 'Me cuesta levantarme temprano.'],
        ["It's easy for her to speak English.", 'A ella le resulta fácil hablar inglés.'],
        ["It's important for children to play.", 'Es importante que los niños jueguen.'],
        ["Is it hard for you to get up early?", '¿Te cuesta levantarte temprano?'],
      ]
    ),
    teoria(
      '5 · Dar consejos con should y shouldn\'t',
      "Should significa «deberías» y se usa para dar un consejo. Es igual para todas las personas y el verbo que sigue va en base:\n\n• You should see a doctor.\n• She shouldn't eat so much sugar.\n• Should I take an umbrella?\n\nRespuesta corta: Yes, you should. · No, you shouldn't.\n\n⚠️ Ojo: «You should go», no «You should to go» ni «You shoulds go».",
      [
        ['You should see a doctor.', 'Deberías ver a un doctor.'],
        ["She shouldn't eat so much sugar.", 'Ella no debería comer tanta azúcar.'],
        ['Should I take an umbrella?', '¿Debería llevar un paraguas?'],
        ["You shouldn't worry so much.", 'No deberías preocuparte tanto.'],
      ]
    ),
    teoria(
      '6 · Otras formas de aconsejar',
      "Además de should hay otras formas amables de aconsejar:\n\n• Why don't you…? → Why don't you ask your teacher?\n• You could… → You could try a different bus.\n• I think you should… → I think you should rest.\n• If I were you, I'd… → If I were you, I'd call him.\n\nCon Why don't you, you could y I think you should el verbo siguiente va en base.",
      [
        ["Why don't you ask your teacher?", '¿Por qué no le preguntas a tu profesor?'],
        ['You could try a different bus.', 'Podrías probar otro bus.'],
        ['I think you should rest.', 'Creo que deberías descansar.'],
        ["If I were you, I'd call him.", 'Yo en tu lugar, lo llamaría.'],
      ]
    ),
    teoria(
      '7 · Hacer sugerencias: Let\'s, Why don\'t we, How about',
      "Para proponer hacer algo junto con otras personas:\n\n• Let's + verbo → Let's go to the beach.\n• Why don't we + verbo → Why don't we eat out?\n• How about / What about + -ing → How about going to the cinema?\n• Shall we + verbo → Shall we start?\n\nHow about y What about van seguidos de -ing o de un sustantivo: «How about pizza?».",
      [
        ["Let's go to the beach.", 'Vamos a la playa.'],
        ["Why don't we eat out tonight?", '¿Por qué no comemos afuera esta noche?'],
        ['How about going to the cinema?', '¿Qué tal si vamos al cine?'],
        ['Shall we start now?', '¿Empezamos ahora?'],
      ]
    ),
    teoria(
      '8 · Aceptar o rechazar una sugerencia',
      "Para aceptar: Good idea! · Great! · Yes, let's. · Sure, why not?\nPara rechazar con cortesía: I'd rather not. · Sorry, I can't. · That's a nice idea, but I'm busy.\nPara proponer otra cosa: Why don't we… instead?\n\nUna sugerencia y su respuesta suelen ir juntas: «How about a coffee?» — «Good idea!».",
      [
        ["Let's take a taxi. Good idea!", 'Tomemos un taxi. ¡Buena idea!'],
        ["Why don't we go out? Sure, why not?", '¿Por qué no salimos? Claro, ¿por qué no?'],
        ["How about a movie? Sorry, I can't.", '¿Qué tal una película? Lo siento, no puedo.'],
        ["Shall we walk? I'd rather take the bus.", '¿Caminamos? Prefiero tomar el bus.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Propósito', suj('I'), verbo('went'), resto('to get money')),
    fl("It's + adjetivo + to", resto("It's"), aux('easy / hard'), resto('to'), verbo('verb')),
    fl('Con for + persona', resto("It's"), aux('hard'), resto('for me'), resto('to'), verbo('verb')),
    fl('Sugerencia con -ing', resto('How about'), verbo('verb-ing?')),
  ],
  table: {
    cols: ['Para…', 'Estructura', 'Ejemplo'],
    rows: [
      ['Propósito', 'to + verbo', 'I went to buy bread.'],
      ['Opinión', "It's + adjetivo + to", "It's easy to learn."],
      ['Consejo', 'should + verbo', 'You should rest.'],
      ['Sugerencia', "Let's + verbo", "Let's go home."],
      ['Sugerencia', 'How about + -ing', 'How about eating out?'],
    ],
  },
  contrastCard: {
    left: { label: 'Consejo — should', example: 'You should sleep more.', highlight: 'should' },
    right: { label: 'Sugerencia conjunta — Let\'s', example: "Let's go to the beach.", highlight: "Let's" },
    caption: 'Should aconseja a otra persona. Let\'s propone hacer algo entre todos, incluido tú.',
  },
  quiz: [
    ejercicio(
      'I went to the market ___ some fruit.',
      'to buy',
      ['for buy', 'buying', 'to buying'],
      'Para decir para qué fuiste se usa to + verbo base: «to buy». for buy y to buying no son formas correctas y buying solo no expresa propósito.'
    ),
    ejercicio(
      "It's important ___ enough water every day.",
      'to drink',
      ['drink', 'for drink', 'to drinking'],
      "Después de It's + adjetivo se usa to + verbo base: «It's important to drink». Las otras formas no completan la estructura."
    ),
    ejercicio(
      'You look tired. You ___ go to bed early.',
      'should',
      ['should to', 'are should', 'do should'],
      'Should se usa directamente antes del verbo base: «You should go». No lleva to, ni se combina con are o do.'
    ),
    ejercicio(
      "You ___ eat so much sugar. It's bad for your health.",
      "shouldn't",
      ["don't should", 'not should', "shouldn't to"],
      "La negativa de should es shouldn't + verbo base: «You shouldn't eat». Las demás opciones están mal formadas."
    ),
    ejercicio(
      "Let's ___ a pizza for dinner.",
      'order',
      ['to order', 'ordering', 'orders'],
      "Después de Let's va el verbo en base, sin to: «Let's order». to order, ordering y orders no se usan en esta estructura."
    ),
  ],
  flashcards: [
    tarjeta('Infinitivo de propósito', 'to + verbo base responde a «¿para qué?»\nI went to the bank to get money. (no «for get»)'),
    tarjeta("It's + adjetivo + to + verbo", "It's easy to learn English.\nIt's difficult for me to wake up early."),
    tarjeta('Should y shouldn\'t', "You should see a doctor.\nShe shouldn't eat so much.\nShould I go? (el verbo siempre en base)"),
    tarjeta('Hacer sugerencias', "Let's + verbo · Why don't we + verbo\nHow about + -ing · Shall we + verbo"),
    tarjeta('Aceptar o rechazar', "Good idea! · Sure, why not?\nSorry, I can't. · I'd rather not."),
  ],
  simulatedChat: [
    { speaker: 'other', text: "I'm so tired. It's difficult for me to wake up early.", translation: 'Estoy muy cansado. Me cuesta levantarme temprano.' },
    { speaker: 'user', text: 'You should go to bed earlier. It\'s important to sleep eight hours.', translation: 'Deberías acostarte más temprano. Es importante dormir ocho horas.' },
    { speaker: 'other', text: "I know. I stay up to watch series.", translation: 'Lo sé. Me quedo despierto para ver series.' },
    { speaker: 'user', text: "Why don't you watch them on the weekend?", translation: '¿Por qué no las ves el fin de semana?' },
    { speaker: 'other', text: "Good idea! How about watching one together on Saturday?", translation: '¡Buena idea! ¿Qué tal si vemos una juntos el sábado?' },
    { speaker: 'user', text: "Sure, why not? Let's meet at my house.", translation: 'Claro, ¿por qué no? Quedemos en mi casa.' },
  ],
  readingText: {
    title: 'A trip to the mountains',
    body: "Last month my friends and I went to the mountains to relax. It was easy to find a small hotel, but it was difficult for us to choose a trail. A local guide said, \"You should take warm clothes. It's cold at night. And you shouldn't walk alone.\" We bought good shoes to walk safely and brought a map to find the way. On the last day somebody said, \"How about having a picnic by the lake?\" Everyone said, \"Good idea!\"",
    translation:
      'El mes pasado mis amigos y yo fuimos a las montañas a descansar. Fue fácil encontrar un hotel pequeño, pero nos costó elegir un sendero. Un guía local dijo: «Deberían llevar ropa abrigada. Hace frío de noche. Y no deberían caminar solos». Compramos buenos zapatos para caminar con seguridad y llevamos un mapa para encontrar el camino. El último día alguien dijo: «¿Qué tal si hacemos un picnic junto al lago?». Todos dijeron: «¡Buena idea!».',
  },
  tips: [
    "Para decir «para + verbo» usa to: «I went there to learn», no «for learn».",
    "Con should el verbo va en base y sin to: «You should rest», no «You should to rest».",
    "En It's + adjetivo + to, el sujeto es it: «It's easy to learn», y si quieres decir quién, agrega for: «for me».",
    'Let\'s y Why don\'t we proponen algo entre todos. Should y Why don\'t you aconsejan a otra persona.',
  ],
  dailyWords: palabras('advice', 'idea', 'health', 'exercise', 'easy', 'difficult'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
    { etiqueta: '📖 Gramática: POR / PARA — for, to, by, in order to', ruta: '/gramatica/concepto/por-para-for-to-by-in-order-to' },
  ],
};

const FORMAS_19: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('should'), verbo('base verb'))],
    ejemplos: [
      ['You should see a doctor.', 'Deberías ver a un doctor.'],
      ['She should rest.', 'Ella debería descansar.'],
      ['We should leave now.', 'Deberíamos irnos ya.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("shouldn't"), verbo('base verb'))],
    ejemplos: [
      ["You shouldn't eat so much sugar.", 'No deberías comer tanta azúcar.'],
      ["He shouldn't drive tonight.", 'Él no debería manejar esta noche.'],
      ["We shouldn't be late.", 'No deberíamos llegar tarde.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Should'), suj('subject'), verbo('base verb'))],
    ejemplos: [
      ['Should I take an umbrella?', '¿Debería llevar un paraguas?'],
      ['Should she call him?', '¿Debería llamarlo ella?'],
      ['What should we do?', '¿Qué deberíamos hacer?'],
    ],
  },
  nota: "should es igual para todas las personas (sin -s). Respuestas cortas: Yes, you should. / No, you shouldn't. Se usa para consejos y opiniones.",
  ojo: "Después de should el verbo va en base, sin to ni -s: «You should go», no «You should to go» ni «She shoulds go».",
};

// ─── Unidad 8 (id 20) · Whose, posesivos, orden de adjetivos, one y ones, ubicación ───

const UNIDAD_20: Unit = {
  title: 'Whose, Possessive Pronouns, Adjective Order, One and Ones',
  topic: BLOQUE_A2_3,
  level: 'A2',
  explain: [
    teoria(
      '1 · Preguntas con Whose…?',
      "Whose significa «¿de quién?» y se usa para preguntar quién es el dueño de algo. Va seguido del sustantivo:\n\n• Whose bag is this?\n• Whose keys are those?\n• Whose is this? (sin sustantivo)\n\nRespuestas: It's Ana's. · They're mine. · It's my sister's.\n\n⚠️ Ojo: Whose (de quién) no es lo mismo que Who's (who is). Suenan igual, pero se escriben distinto.",
      [
        ['Whose bag is this?', '¿De quién es esta bolsa?'],
        ['Whose keys are those?', '¿De quién son esas llaves?'],
        ['Whose is this jacket? It\'s mine.', '¿De quién es esta chaqueta? Es mía.'],
        ["Who's that? It's my brother.", '¿Quién es ese? Es mi hermano.'],
      ]
    ),
    teoria(
      '2 · Pronombres posesivos: mine, yours, his, hers',
      'Los adjetivos posesivos (my, your, his…) van ANTES de un sustantivo. Los pronombres posesivos reemplazan al sustantivo y van solos:\n\n• my → mine · your → yours · his → his\n• her → hers · our → ours · their → theirs\n\nEjemplos: «This is my bag» → «This bag is mine». «Is that your phone?» → «Is that phone yours?».\n\n⚠️ Ojo: no llevan apóstrofo: «hers», no «her\'s», y no se les pone el sustantivo: «mine bag», no.',
      [
        ['This is my bag. This bag is mine.', 'Esta es mi bolsa. Esta bolsa es mía.'],
        ['Is that phone yours?', '¿Ese teléfono es tuyo?'],
        ["Those keys aren't ours. They're theirs.", 'Esas llaves no son nuestras. Son de ellos.'],
        ['My car is old, but hers is new.', 'Mi auto es viejo, pero el de ella es nuevo.'],
      ]
    ),
    teoria(
      "3 · Posesivo con 's y con of",
      "📖 Del libro: para personas y animales se usa 's: Ana's bag · my brother's car · the dog's tail. Si el nombre es plural con s, solo el apóstrofo: my parents' house.\n\nPara cosas se usa of: the door of the room · the end of the film · the name of the street.\n\nCon expresiones de tiempo y lugar también se usa 's: yesterday's news · today's lesson · the city's parks.",
      [
        ["This is Ana's bag.", 'Esta es la bolsa de Ana.'],
        ["My parents' house is big.", 'La casa de mis padres es grande.'],
        ['The door of the room is open.', 'La puerta de la habitación está abierta.'],
        ["I read yesterday's news.", 'Leí las noticias de ayer.'],
      ]
    ),
    teoria(
      '4 · El orden de los adjetivos',
      'Cuando hay varios adjetivos antes del sustantivo, siguen un orden:\n\n1. opinión (beautiful, nice)\n2. tamaño (big, small)\n3. edad (old, new)\n4. color (red, blue)\n5. origen (Italian, Peruvian)\n6. material (wooden, leather)\n\nEjemplos: «a beautiful big old house» · «a small black leather bag».\n\nNo se usan más de tres a la vez; y no llevan coma ni «and» salvo entre colores.',
      [
        ['She has a beautiful big house.', 'Ella tiene una casa grande y hermosa.'],
        ['He bought a small black leather bag.', 'Él compró una bolsa pequeña, negra de cuero.'],
        ['I like that old wooden table.', 'Me gusta esa mesa de madera vieja.'],
        ['She works in a modern Italian restaurant.', 'Ella trabaja en un restaurante italiano moderno.'],
      ]
    ),
    teoria(
      '5 · One y ones: para no repetir',
      'One (singular) y ones (plural) reemplazan a un sustantivo que ya se mencionó:\n\n• Which bag do you like? — The red one.\n• I don\'t like these shoes. I prefer the blue ones.\n• This phone is old. I want a new one.\n\nSe usan después de un adjetivo, de this / that / these / those, de the o de which.',
      [
        ['Which bag do you like? The red one.', '¿Qué bolsa te gusta? La roja.'],
        ["I prefer the blue ones.", 'Prefiero los azules.'],
        ['This phone is old. I want a new one.', 'Este teléfono es viejo. Quiero uno nuevo.'],
        ['Which one is yours?', '¿Cuál es el tuyo?'],
      ]
    ),
    teoria(
      '6 · One: cuándo sí y cuándo no',
      'One tiene límites:\n\n• Después de un posesivo no se usa: no «my one»; se dice «mine».\n• Con sustantivos incontables: no «the cold one» para hablar de la leche; se repite el sustantivo («the cold milk») o se omite («the cold»).\n• Sin adjetivo, one solo funciona como «uno» con have: «Do you have a pen? Yes, I have one.»\n\nLos pronombres posesivos tampoco llevan one: «Which is yours? Mine.», no «mine one».',
      [
        ['Is this your phone? Mine is on the table.', '¿Es este tu teléfono? El mío está sobre la mesa.'],
        ['Do you have a pen? Yes, I have one.', '¿Tienes un lápiz? Sí, tengo uno.'],
        ['I like these shoes, but not those.', 'Me gustan estos zapatos, pero no esos.'],
        ['Which is hers? The big one.', '¿Cuál es el de ella? El grande.'],
      ]
    ),
    teoria(
      '7 · Ubicación después de un sustantivo',
      "📖 Del libro: para decir DÓNDE está algo, se pone la expresión de lugar después del sustantivo:\n\n• The shop next to the bank sells shoes.\n• The girl on the left is my sister.\n• The cat under the table is mine.\n\nLas preposiciones más usadas: in (dentro), on (sobre, en un lado), at (en un punto), next to, behind, between, near.\n\nCon izquierda y derecha: on the left · on the right · in the middle · at the top · at the bottom.",
      [
        ['The shop next to the bank sells shoes.', 'La tienda al lado del banco vende zapatos.'],
        ['The girl on the left is my sister.', 'La chica de la izquierda es mi hermana.'],
        ['The cat under the table is mine.', 'El gato debajo de la mesa es mío.'],
        ['The restaurant at the corner is cheap.', 'El restaurante de la esquina es barato.'],
      ]
    ),
    teoria(
      '8 · Ubicación después de one y ones',
      "También se pone la ubicación después de one o ones para decir cuál:\n\n• Which one? The one on the left.\n• Which ones? The ones near the window.\n• I want the one with the red cover.\n• The one in the middle is mine.\n\nEs la forma natural de señalar algo sin repetir el nombre: the one + preposición + lugar.",
      [
        ['Which one is yours? The one on the left.', '¿Cuál es el tuyo? El de la izquierda.'],
        ['Which ones do you want? The ones near the window.', '¿Cuáles quieres? Los que están cerca de la ventana.'],
        ['I want the one with the red cover.', 'Quiero el de la tapa roja.'],
        ['The one in the middle is mine.', 'El del medio es mío.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Adjetivo posesivo', suj('my'), verbo('bag')),
    fl('Pronombre posesivo', suj('mine'), resto('(sin sustantivo)')),
    fl('Orden de adjetivos', resto('opinion'), resto('size'), resto('age'), resto('color'), verbo('noun')),
    fl('One / ones + lugar', resto('the one'), resto('on the left')),
  ],
  table: {
    cols: ['Sujeto', 'Adjetivo posesivo', 'Pronombre posesivo'],
    rows: [
      ['I', 'my bag', 'mine'],
      ['you', 'your bag', 'yours'],
      ['he', 'his bag', 'his'],
      ['she', 'her bag', 'hers'],
      ['we', 'our bag', 'ours'],
      ['they', 'their bag', 'theirs'],
    ],
  },
  contrastCard: {
    left: { label: 'Adjetivo posesivo + sustantivo', example: 'This is my bag.', highlight: 'my bag' },
    right: { label: 'Pronombre posesivo (solo)', example: 'This bag is mine.', highlight: 'mine' },
    caption: 'my / your / his van antes del sustantivo. mine / yours / hers van solos, sin sustantivo.',
  },
  quiz: [
    ejercicio(
      'A: ___ jacket is this? B: It\'s mine.',
      'Whose',
      ['Who', "Who's", 'Whom'],
      'Para preguntar de quién es algo se usa Whose + sustantivo: «Whose jacket is this?». Who y Who\'s preguntan por una persona, no por el dueño.'
    ),
    ejercicio(
      "This isn't my book. ___ is on the table.",
      'Mine',
      ['My', 'Me', 'Myself'],
      'Sin sustantivo se usa el pronombre posesivo: «Mine is on the table». my necesita un sustantivo después, me es pronombre objeto y myself es reflexivo.'
    ),
    ejercicio(
      'She has a ___ bag.',
      'big black leather',
      ['black big leather', 'leather big black', 'big leather black'],
      'El orden de los adjetivos es tamaño (big), color (black) y material (leather): «a big black leather bag». Las demás combinaciones rompen ese orden.'
    ),
    ejercicio(
      "I don't like the red shoes. I prefer the blue ___.",
      'ones',
      ['one', 'shoe', 'them'],
      'shoes es plural, así que se reemplaza con ones: «the blue ones». one es singular, shoe repite el sustantivo mal y them no va después de the blue.'
    ),
    ejercicio(
      'The shop ___ the bank sells shoes.',
      'next to',
      ['next of', 'beside to', 'at next'],
      'Para decir «al lado de» se usa next to: «The shop next to the bank». Las otras combinaciones no existen en inglés.'
    ),
  ],
  flashcards: [
    tarjeta('Whose…?', "Whose bag is this? It's Ana's / It's mine.\nWhose (de quién) no es Who's (who is)."),
    tarjeta('Posesivos', 'my → mine · your → yours · his → his\nher → hers · our → ours · their → theirs\nNo llevan apóstrofo.'),
    tarjeta("'s y of", "Personas: Ana's bag · my parents' house\nCosas: the door of the room"),
    tarjeta('Orden de adjetivos', 'opinión · tamaño · edad · color · origen · material\na beautiful big old house · a small black leather bag'),
    tarjeta('One y ones', 'The red one · the blue ones · a new one\nSirven para no repetir el sustantivo.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Whose umbrella is this?', translation: '¿De quién es este paraguas?' },
    { speaker: 'user', text: "I think it's Carla's. Hers is red.", translation: 'Creo que es de Carla. El de ella es rojo.' },
    { speaker: 'other', text: 'No, mine is red. This one is black.', translation: 'No, el mío es rojo. Este es negro.' },
    { speaker: 'user', text: 'Which one is yours, then?', translation: '¿Cuál es el tuyo entonces?' },
    { speaker: 'other', text: 'The one next to the door. It is a big red one.', translation: 'El que está al lado de la puerta. Es uno rojo y grande.' },
    { speaker: 'user', text: 'Oh yes, I see it. And this black one is probably theirs.', translation: 'Ah sí, lo veo. Y este negro probablemente es de ellos.' },
  ],
  readingText: {
    title: 'A busy shop',
    body: "There is a small shop next to my house. It sells beautiful old wooden furniture. Yesterday I went in to buy a chair. The owner showed me two: a big brown one and a small black one. \"Which one do you like?\" he asked. I liked the one near the window. It was a nice old chair with a green cover. \"Whose idea was it to put it there?\" I asked. \"It's my mother's,\" he said. \"The shop is hers, not mine.\"",
    translation:
      'Hay una tienda pequeña al lado de mi casa. Vende hermosos muebles antiguos de madera. Ayer entré a comprar una silla. El dueño me mostró dos: una grande y marrón y otra pequeña y negra. «¿Cuál te gusta?», preguntó. Me gustó la que estaba cerca de la ventana. Era una silla vieja y bonita con una tapa verde. «¿De quién fue la idea de ponerla ahí?», pregunté. «De mi madre», dijo. «La tienda es de ella, no mía».',
  },
  tips: [
    "Whose pregunta por el dueño: «Whose bag is this?». Who's es who is: «Who's that?». Suenan igual y se escriben distinto.",
    "Los pronombres posesivos van solos y sin apóstrofo: «This bag is hers», no «her's» ni «hers bag».",
    'El orden de los adjetivos: opinión, tamaño, edad, color, origen, material. «a beautiful big old house».',
    "Para no repetir el sustantivo usa one (singular) u ones (plural): «the red one», «the blue ones». Y para señalar cuál, agrega la ubicación: «the one on the left».",
  ],
  dailyWords: palabras('bag', 'jacket', 'shoes', 'key', 'umbrella', 'watch'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
    { etiqueta: '📖 Gramática: IN / ON / AT — lugar', ruta: '/gramatica/concepto/in-on-at-preposiciones-de-lugar' },
  ],
};

// ─── Unidad 9 (id 21) · Pasado continuo y pronombres reflexivos ───

const UNIDAD_21: Unit = {
  title: 'Past Continuous and Reflexive Pronouns',
  topic: BLOQUE_A2_3,
  level: 'A2',
  explain: [
    teoria(
      '1 · Pasado continuo: ¿cuándo se usa?',
      "El pasado continuo describe lo que ESTABA pasando en un momento del pasado: una acción en curso, sin decir cuándo empezó ni cuándo terminó. Es nuestro «estaba haciendo…».\n\n• At 8 last night, I was cooking.\n• This time yesterday, they were traveling.\n• It was raining all morning.\n\nSe reconoce por marcas de tiempo como at 8, at that moment, all day y this time yesterday.",
      [
        ['At eight last night, I was cooking.', 'Anoche a las ocho, yo estaba cocinando.'],
        ['This time yesterday, they were traveling.', 'A esta hora ayer, ellos estaban viajando.'],
        ['It was raining all morning.', 'Estuvo lloviendo toda la mañana.'],
        ['What were you doing at nine?', '¿Qué estabas haciendo a las nueve?'],
      ]
    ),
    teoria(
      '2 · Afirmativa: was / were + verbo-ing',
      "Se forma con el pasado de to be (was / were) + verbo-ing:\n\n• I was working · he / she / it was working\n• you were working · we were working · they were working\n\nEl -ing se escribe igual que en el presente continuo: make → making · run → running.\n\n⚠️ Ojo: siempre hace falta was / were: «I was working», nunca «I working».",
      [
        ['I was working at home.', 'Yo estaba trabajando en casa.'],
        ['She was reading a book.', 'Ella estaba leyendo un libro.'],
        ['We were watching a film.', 'Estábamos viendo una película.'],
        ['They were playing in the garden.', 'Ellos estaban jugando en el jardín.'],
      ]
    ),
    teoria(
      '3 · Negativa: wasn\'t / weren\'t + verbo-ing',
      "La negativa lleva not después de was / were:\n\n• I wasn't sleeping.\n• She wasn't working.\n• They weren't listening.\n\nNo se usa didn't con el pasado continuo: «She wasn't working», no «She didn't working».",
      [
        ["I wasn't sleeping at that time.", 'No estaba durmiendo a esa hora.'],
        ["She wasn't working yesterday.", 'Ayer ella no estaba trabajando.'],
        ["They weren't listening to the teacher.", 'Ellos no estaban escuchando al profesor.'],
        ["We weren't watching TV at nine.", 'No estábamos viendo televisión a las nueve.'],
      ]
    ),
    teoria(
      '4 · Preguntas y respuestas cortas',
      "Para preguntar se pone was / were ANTES del sujeto:\n\n• Were you sleeping?\n• Was she working?\n• What were you doing?\n• Where were they going?\n\nRespuestas cortas: Yes, I was. · No, she wasn't. · Yes, they were. · No, we weren't.",
      [
        ['Were you sleeping? Yes, I was.', '¿Estabas durmiendo? Sí.'],
        ["Was she working? No, she wasn't.", '¿Ella estaba trabajando? No.'],
        ['What were you doing?', '¿Qué estabas haciendo?'],
        ['Where were they going?', '¿Adónde iban ellos?'],
      ]
    ),
    teoria(
      '5 · Acción interrumpida: pasado continuo + when + pasado simple',
      "📖 Del libro: la acción larga de fondo va en pasado continuo y la acción corta que la interrumpe va en pasado simple. Las une when:\n\n• I was cooking when the phone rang.\n• She was walking home when it started to rain.\n• They were sleeping when the alarm went off.\n\nLa acción larga estaba en curso; la corta pasó en medio.",
      [
        ['I was cooking when the phone rang.', 'Estaba cocinando cuando sonó el teléfono.'],
        ['She was walking home when it started to rain.', 'Ella caminaba a casa cuando empezó a llover.'],
        ['They were sleeping when the alarm went off.', 'Ellos dormían cuando sonó la alarma.'],
        ['He was driving when he saw the accident.', 'Él conducía cuando vio el accidente.'],
      ]
    ),
    teoria(
      '6 · Dos acciones a la vez: while',
      "📖 Del libro: cuando dos acciones estaban en curso al mismo tiempo, ambas van en pasado continuo unidas por while (mientras):\n\n• While I was cooking, he was watching TV.\n• She was studying while the kids were playing.\n\nWhile se usa con acciones largas; when con la acción corta que interrumpe: «While I was sleeping, the phone rang».",
      [
        ['While I was cooking, he was watching TV.', 'Mientras yo cocinaba, él veía televisión.'],
        ['She was studying while the kids were playing.', 'Ella estudiaba mientras los niños jugaban.'],
        ['While I was sleeping, the phone rang.', 'Mientras dormía, sonó el teléfono.'],
        ['They were talking while they were walking.', 'Hablaban mientras caminaban.'],
      ]
    ),
    teoria(
      '7 · Pasado continuo o pasado simple',
      "• Pasado continuo: acción en curso, de fondo, sin terminar en ese momento → «I was reading at ten».\n• Pasado simple: acción terminada o que pasó de golpe → «I read the book last week» · «The phone rang».\n\nCon una acción completa se usa el simple: «I cooked dinner» (la terminé). Con una acción en curso, el continuo: «I was cooking dinner» (la estaba haciendo, quizás no la terminé).",
      [
        ['I was reading at ten.', 'A las diez estaba leyendo.'],
        ['I read the book last week.', 'Leí el libro la semana pasada.'],
        ['I was cooking dinner. (en curso)', 'Estaba cocinando la cena.'],
        ['I cooked dinner. (terminada)', 'Cociné la cena.'],
      ]
    ),
    teoria(
      '8 · Pronombres reflexivos: myself, yourself…',
      "Se usan cuando el sujeto y el objeto de la acción son la misma persona:\n\n• I → myself · you → yourself · he → himself · she → herself · it → itself\n• we → ourselves · you (plural) → yourselves · they → themselves\n\nEjemplos: «I cut myself» · «She looked at herself in the mirror» · «They enjoyed themselves».\n\n⚠️ Ojo: se escribe himself y themselves, no «hisself» ni «theirselves».",
      [
        ['I cut myself with a knife.', 'Me corté con un cuchillo.'],
        ['She looked at herself in the mirror.', 'Ella se miró en el espejo.'],
        ['They enjoyed themselves at the party.', 'Se divirtieron en la fiesta.'],
        ['Be careful, or you will hurt yourself.', 'Cuidado, o te vas a lastimar.'],
      ]
    ),
    teoria(
      '9 · Cuándo usar y cuándo no usar reflexivos',
      "📖 Del libro: en español usamos «se» en muchos verbos, pero en inglés no siempre:\n\n• Sin reflexivo: wash, dress, shave, get up, relax, sit down → «I wash before breakfast».\n• Con reflexivo cuando quieres enfatizar o cambia el sentido: enjoy yourself (diviértete) · help yourself (sírvete) · by myself (yo solo).\n\nFrases útiles: Enjoy yourself! · Help yourself! · I did it myself.",
      [
        ['I wash before breakfast.', 'Me lavo antes del desayuno.'],
        ['Enjoy yourself at the party!', '¡Diviértete en la fiesta!'],
        ['Help yourself to some cake.', 'Sírvete un poco de pastel.'],
        ['She lives by herself.', 'Ella vive sola.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Reflexivo', suj('I'), verbo('cut'), suj('myself')),
    fl('Acción interrumpida', suj('I'), aux('was'), verbo('cooking'), resto('when the phone rang')),
  ],
  table: {
    cols: ['Sujeto', 'Pronombre reflexivo', 'Ejemplo'],
    rows: [
      ['I', 'myself', 'I cut myself.'],
      ['you', 'yourself', 'You hurt yourself.'],
      ['he', 'himself', 'He looked at himself.'],
      ['she', 'herself', 'She taught herself.'],
      ['it', 'itself', 'The cat washed itself.'],
      ['we', 'ourselves', 'We enjoyed ourselves.'],
      ['they', 'themselves', 'They helped themselves.'],
    ],
  },
  contrastCard: {
    left: { label: 'Pasado continuo — en curso', example: 'I was cooking at eight.', highlight: 'was cooking' },
    right: { label: 'Pasado simple — terminado', example: 'I cooked dinner last night.', highlight: 'cooked' },
    caption: 'El continuo muestra una acción en curso en un momento. El simple, una acción completa.',
  },
  quiz: [
    ejercicio(
      "At 8 o'clock last night, I ___ dinner.",
      'was cooking',
      ['am cooking', 'were cooking', 'was cook'],
      'Un momento preciso del pasado (at 8 last night) pide pasado continuo: was + verbo-ing. am cooking es presente, were no concuerda con I y was cook no lleva -ing.'
    ),
    ejercicio(
      'They ___ when the teacher came in. (talk)',
      'were talking',
      ['was talking', 'are talking', 'were talk'],
      'Una acción en curso interrumpida va en pasado continuo, y con they se usa were: «were talking». was es para un solo sujeto y are es presente.'
    ),
    ejercicio(
      '___ you sleeping when I called?',
      'Were',
      ['Did', 'Was', 'Are'],
      'La pregunta del pasado continuo empieza con was / were, y con you va Were. Did no se usa con -ing, Was no concuerda con you y Are es presente.'
    ),
    ejercicio(
      'She hurt ___ while she was playing tennis.',
      'herself',
      ['her', 'hers', 'she'],
      'El sujeto y quien recibe la acción son la misma persona, así que se usa el reflexivo herself. her es pronombre objeto, hers es posesivo y she es sujeto.'
    ),
    ejercicio(
      "We ___ watching TV at 9 last night. We were at the cinema.",
      "weren't",
      ["wasn't", "didn't", "aren't"],
      "La negativa del pasado continuo lleva was / were + not, y con we va weren't. wasn't es para un solo sujeto, didn't no se usa con -ing y aren't es presente."
    ),
  ],
  flashcards: [
    tarjeta('Pasado continuo', "was / were + verbo-ing\nI was cooking · they were playing\nwasn't · weren't · Were you…? · Was she…?"),
    tarjeta('Acción interrumpida', 'Larga: pasado continuo. Corta: pasado simple.\nI was cooking when the phone rang.'),
    tarjeta('While', 'Dos acciones a la vez, las dos en continuo:\nWhile I was cooking, he was watching TV.'),
    tarjeta('Pronombres reflexivos', 'myself · yourself · himself · herself · itself\nourselves · yourselves · themselves'),
    tarjeta('Sin reflexivo en inglés', 'wash, dress, shave, get up, relax, sit down\nI wash before breakfast. (sin myself)\nCon: enjoy yourself · help yourself · by myself'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What were you doing at nine last night? I called you.', translation: '¿Qué estabas haciendo anoche a las nueve? Te llamé.' },
    { speaker: 'user', text: "Sorry! I was cooking. I cut myself with a knife.", translation: '¡Perdón! Estaba cocinando. Me corté con un cuchillo.' },
    { speaker: 'other', text: 'Oh no! Were you alone?', translation: '¡Ay no! ¿Estabas solo?' },
    { speaker: 'user', text: "Yes, I was by myself. My roommates were watching a film at the cinema.", translation: 'Sí, estaba solo. Mis compañeros de cuarto estaban viendo una película en el cine.' },
    { speaker: 'other', text: 'Are you OK now?', translation: '¿Estás bien ahora?' },
    { speaker: 'user', text: "Yes, thanks. I was reading a book when you called again.", translation: 'Sí, gracias. Estaba leyendo un libro cuando volviste a llamar.' },
  ],
  readingText: {
    title: 'The power cut',
    body: "Last Saturday I was at home with my family. My mother was cooking in the kitchen, my father was watching the news, and my sister and I were playing a board game. Suddenly the lights went out. Nobody was talking for a second, and then we all laughed. While my father was looking for candles, my sister burned herself with a hot cup. Luckily, she was fine. We had dinner by candlelight, and we really enjoyed ourselves.",
    translation:
      'El sábado pasado estaba en casa con mi familia. Mi madre estaba cocinando en la cocina, mi padre estaba viendo las noticias y mi hermana y yo estábamos jugando un juego de mesa. De repente se apagaron las luces. Nadie hablaba por un segundo y luego todos nos reímos. Mientras mi padre buscaba velas, mi hermana se quemó con una taza caliente. Por suerte estaba bien. Cenamos a la luz de las velas y nos divertimos mucho.',
  },
  tips: [
    "En el pasado continuo siempre hace falta was / were: «I was working», nunca solo «I working».",
    'Acción larga de fondo → pasado continuo; acción corta que interrumpe → pasado simple: «I was cooking when the phone rang».',
    "Con while usa dos pasados continuos: «While I was cooking, he was watching TV».",
    "Con wash, dress, shave y get up no se usa reflexivo en inglés. Con enjoy, help y hurt sí: «Enjoy yourself!», «Help yourself!».",
  ],
  dailyWords: palabras('while', 'suddenly', 'night', 'shower', 'mirror', 'kitchen'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
  ],
};

const FORMAS_21: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('was / were'), verbo('verb-ing'))],
    ejemplos: [
      ['I was working.', 'Yo estaba trabajando.'],
      ['She was reading a book.', 'Ella estaba leyendo un libro.'],
      ['They were playing outside.', 'Ellos estaban jugando afuera.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('was / were'), neg('not'), verbo('verb-ing'))],
    ejemplos: [
      ["I wasn't sleeping.", 'No estaba durmiendo.'],
      ["He wasn't working.", 'Él no estaba trabajando.'],
      ["We weren't watching TV.", 'No estábamos viendo televisión.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Was / Were'), suj('subject'), verbo('verb-ing')),
      fl('Información', resto('What / Where…'), aux('was / were'), suj('subject'), verbo('verb-ing')),
    ],
    ejemplos: [
      ['Were you sleeping?', '¿Estabas durmiendo?'],
      ['Was she working?', '¿Ella estaba trabajando?'],
      ['What were they doing?', '¿Qué estaban haciendo ellos?'],
    ],
  },
  nota: "Contracciones: wasn't · weren't. Respuestas cortas: Yes, I was. / No, they weren't. Acción interrumpida: I was cooking when the phone rang. Dos acciones a la vez: While I was cooking, he was watching TV.",
  ojo: "El auxiliar nunca se omite: «Were you sleeping?», no «You sleeping?». Y con el pasado continuo no se usa didn't: «She wasn't working», no «She didn't working».",
};

/** Las unidades del bloque 3, por id interno. */
export const UNIDADES_BLOQUE_3: Record<number, Unit> = {
  19: UNIDAD_19,
  20: UNIDAD_20,
  21: UNIDAD_21,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 3 que las tienen. */
export const FORMAS_BLOQUE_3: Record<number, FormasUnidad | FormasUnidad[]> = {
  19: FORMAS_19,
  21: FORMAS_21,
};
