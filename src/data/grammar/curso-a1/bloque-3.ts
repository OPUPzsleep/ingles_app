import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_3 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from './ayuda';

// Bloque 3 · Presente continuo, modales y necesidades (unidades 7–9).

// ─── Unidad 7 · Presente continuo ───

const UNIDAD_7: Unit = {
  title: 'Present Continuous',
  topic: BLOQUE_3,
  level: 'A1',
  explain: [
    teoria(
      '1 · Presente continuo: ¿cuándo se usa?',
      "El presente continuo habla de lo que está pasando ahora mismo y de acciones temporales de estos días. Es nuestro «estoy haciendo…».\n\n• Ahora mismo: I'm studying English.\n• Estos días: She's working in Lima this week.\n\nSe reconoce por palabras como now, right now, at the moment, today y this week.\n\nCompara: I study English every day (rutina) · I'm studying English now (ahora mismo).",
      [
        ["I'm studying English now.", 'Estoy estudiando inglés ahora.'],
        ['She is cooking dinner.', 'Ella está cocinando la cena.'],
        ['They are playing soccer in the park.', 'Ellos están jugando fútbol en el parque.'],
        ["It's raining today.", 'Hoy está lloviendo.'],
      ]
    ),
    teoria(
      '2 · Afirmativa: am / is / are + verbo-ing',
      "Se forma con el verbo to be (am / is / are) + el verbo terminado en -ing. El -ing no cambia nunca:\n\n• I'm working\n• he's working · she's working · it's working\n• you're working · we're working · they're working\n\nCómo se escribe el -ing:\n• casi todos: + ing → work → working\n• termina en e: se quita la e → make → making\n• una vocal + una consonante: se dobla la consonante → run → running\n\n⚠️ Ojo: siempre hace falta am / is / are: «I am working», nunca solo «I working».",
      [
        ["I'm reading a book.", 'Estoy leyendo un libro.'],
        ["She's making coffee.", 'Ella está preparando café.'],
        ["He's running in the park.", 'Él está corriendo en el parque.'],
        ["We're sitting in the kitchen.", 'Estamos sentados en la cocina.'],
        ["They're watching a film.", 'Ellos están viendo una película.'],
      ]
    ),
    teoria(
      '3 · Negativa: am / is / are + not + verbo-ing',
      "La negativa lleva not después de am / is / are:\n\n• I'm not working\n• he / she / it isn't working\n• you / we / they aren't working\n\n⚠️ Ojo: no se usa don't con el presente continuo: «I'm not working», no «I don't working».",
      [
        ["I'm not sleeping.", 'No estoy durmiendo.'],
        ["She isn't watching TV.", 'Ella no está viendo televisión.'],
        ["They aren't playing soccer today.", 'Hoy ellos no están jugando fútbol.'],
        ["It isn't raining now.", 'Ahora no está lloviendo.'],
      ]
    ),
    teoria(
      '4 · Preguntas de Sí / No',
      'Para preguntar se pone am / is / are ANTES del sujeto:\n\n• Are you working?\n• Is she cooking?\n• Am I talking too fast?\n\nEn la pregunta no hay contracciones y la voz sube al final.',
      [
        ['Are you working?', '¿Estás trabajando?'],
        ['Is she cooking dinner?', '¿Ella está cocinando la cena?'],
        ['Are they playing outside?', '¿Ellos están jugando afuera?'],
        ['Am I talking too fast?', '¿Estoy hablando muy rápido?'],
      ]
    ),
    teoria(
      '5 · Respuestas cortas',
      "Se contesta con Yes / No + sujeto + am / is / are (o + not). No se repite el verbo con -ing:\n\n• Are you working? → Yes, I am. · No, I'm not.\n• Is she cooking? → Yes, she is. · No, she isn't.\n• Are they playing? → Yes, they are. · No, they aren't.\n\n⚠️ Ojo: en el Yes no se contrae: «Yes, I am», no «Yes, I'm».",
      [
        ['Are you sleeping? Yes, I am.', '¿Estás durmiendo? Sí.'],
        ["Is he working? No, he isn't.", '¿Él está trabajando? No.'],
        ['Are they eating? Yes, they are.', '¿Ellos están comiendo? Sí.'],
        ["Is it raining? No, it isn't.", '¿Está lloviendo? No.'],
      ]
    ),
    teoria(
      '6 · Preguntas de información: What are you doing?',
      'La palabra interrogativa va al inicio y después el patrón de siempre: What / Where / Why + am / is / are + sujeto + verbo-ing.\n\n• What are you doing? → I\'m studying.\n• Where is she going? → She\'s going home.\n• What are they eating?\n• Why are you laughing?\n\nEs la forma natural de preguntar qué hace alguien ahora mismo.',
      [
        ["What are you doing? I'm cooking.", '¿Qué estás haciendo? Estoy cocinando.'],
        ['Where is he going?', '¿Adónde va él?'],
        ['What are they eating?', '¿Qué están comiendo ellos?'],
        ['Why are you laughing?', '¿Por qué te estás riendo?'],
      ]
    ),
    teoria(
      '7 · Verbos que no llevan -ing',
      'Algunos verbos expresan un estado, no una acción, y no se usan en presente continuo: like, love, want, need, know, understand.\n\n• I want a coffee. (no «I\'m wanting»)\n• She likes music. (no «She\'s liking»)\n• I know the answer. (no «I\'m knowing»)\n\nCon estos verbos se usa el presente simple, aunque se hable de ahora mismo.',
      [
        ['I want a coffee.', 'Quiero un café.'],
        ['She likes music.', 'A ella le gusta la música.'],
        ['I know the answer.', 'Sé la respuesta.'],
        ['We need help.', 'Necesitamos ayuda.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Casi todos: + ing', suj('work'), resto('→'), verbo('working')),
    fl('Termina en e: se quita la e', suj('make'), resto('→'), verbo('making')),
    fl('Una vocal + una consonante: se dobla', suj('run'), resto('→'), verbo('running')),
  ],
  table: {
    cols: ['Regla', 'Verbo', 'Con -ing'],
    rows: [
      ['+ ing', 'work', 'working'],
      ['+ ing', 'eat', 'eating'],
      ['+ ing (la y no cambia)', 'play', 'playing'],
      ['quita la e', 'make', 'making'],
      ['quita la e', 'write', 'writing'],
      ['dobla la consonante', 'run', 'running'],
      ['dobla la consonante', 'sit', 'sitting'],
    ],
  },
  contrastCard: {
    left: { label: 'Presente simple — siempre', example: 'I study English every day.', highlight: 'study' },
    right: { label: 'Presente continuo — ahora', example: "I'm studying English now.", highlight: "I'm studying" },
    caption: 'Rutina → presente simple. Ahora mismo → presente continuo (am / is / are + -ing).',
  },
  quiz: [
    ejercicio(
      'Look! It ___ right now.',
      'is raining',
      ['rains', 'rain', 'raining'],
      'right now (ahora mismo) pide presente continuo: it is raining. rains es presente simple y raining sin is le falta el auxiliar.'
    ),
    ejercicio(
      'She is ___ coffee. (make)',
      'making',
      ['makeing', 'makking', 'maked'],
      'make termina en e: se quita la e y se agrega -ing → making.'
    ),
    ejercicio(
      'They ___ soccer today. (No están jugando fútbol hoy.)',
      "aren't playing",
      ["don't playing", 'not playing', "aren't play"],
      "La negativa del presente continuo lleva am / is / are + not + verbo-ing: «They aren't playing». No se usa don't ni se omite el -ing."
    ),
    ejercicio(
      '___ you watching TV?',
      'Are',
      ['Do', 'Is', 'Does'],
      'La pregunta del presente continuo empieza con am / is / are, y con you va Are: «Are you watching TV?». Do y Does son del presente simple.'
    ),
    ejercicio(
      'Is he sleeping? — No, ___.',
      "he isn't",
      ["he doesn't", 'he not', "he aren't"],
      "La respuesta corta repite el verbo to be de la pregunta (is): «No, he isn't». doesn't no se usa con -ing y aren't es para you / we / they."
    ),
  ],
  flashcards: [
    tarjeta('¿Cuándo uso el presente continuo?', "Ahora mismo y acciones temporales de estos días:\nI'm studying now. · She's working this week."),
    tarjeta('Cómo se forma', "am / is / are + verbo-ing\nI'm working · she's working · they're working"),
    tarjeta('Ortografía del -ing', 'work → working\nmake → making (quita la e)\nrun → running (dobla la consonante)'),
    tarjeta('Negativa, pregunta y respuesta corta', "I'm not working · she isn't working\nAre you working? · Is she working?\nYes, I am. · No, she isn't."),
    tarjeta('Verbos que no llevan -ing', 'like · love · want · need · know · understand\nI want a coffee (no «I\'m wanting»).'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Hello! What are you doing?', translation: '¡Hola! ¿Qué estás haciendo?' },
    { speaker: 'user', text: "I'm cooking dinner. Are you at home?", translation: 'Estoy cocinando la cena. ¿Estás en casa?' },
    { speaker: 'other', text: "No, I'm not. I'm walking in the park with my dog.", translation: 'No. Estoy caminando en el parque con mi perro.' },
    { speaker: 'user', text: 'Is it raining there?', translation: '¿Está lloviendo ahí?' },
    { speaker: 'other', text: "No, it isn't. It's a beautiful day!", translation: 'No. ¡Es un día hermoso!' },
    { speaker: 'user', text: 'Great! Are your friends walking with you?', translation: '¡Genial! ¿Tus amigos están caminando contigo?' },
    { speaker: 'other', text: "Yes, they are. We're talking and laughing.", translation: 'Sí. Estamos hablando y riendo.' },
  ],
  readingText: {
    title: 'Saturday afternoon',
    body: "It is Saturday afternoon. Mom is cooking in the kitchen. Dad is watching TV in the living room. My sister is studying in her room, and her cat is sleeping on the bed. I'm writing this text on my computer. My brothers aren't playing outside because it is raining. What are you doing now?",
    translation:
      'Es sábado en la tarde. Mamá está cocinando en la cocina. Papá está viendo televisión en la sala. Mi hermana está estudiando en su cuarto y su gato está durmiendo en la cama. Yo estoy escribiendo este texto en mi computadora. Mis hermanos no están jugando afuera porque está lloviendo. ¿Qué estás haciendo tú ahora?',
  },
  tips: [
    'En el presente continuo siempre hace falta am / is / are: «I am working», nunca solo «I working».',
    'Para el -ing: work → working · make → making (se quita la e) · run → running (se dobla la consonante).',
    "No uses -ing con verbos de estado: «I want a coffee», no «I'm wanting a coffee». Tampoco con like, love, need ni know.",
    "Presente simple = siempre o cada día · presente continuo = ahora mismo: «I study every day» · «I'm studying now».",
  ],
  dailyWords: palabras('now', 'today', 'cook', 'rain', 'watch', 'window'),
  relacionados: [
    { etiqueta: '📖 Gramática: Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
    { unidad: 15 },
  ],
};

const FORMAS_7: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), verbo('verb-ing'))],
    ejemplos: [
      ['I am working.', 'Estoy trabajando.'],
      ['She is eating lunch.', 'Ella está almorzando.'],
      ["They're playing in the garden.", 'Ellos están jugando en el jardín.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), neg('not'), verbo('verb-ing'))],
    ejemplos: [
      ["I'm not working.", 'No estoy trabajando.'],
      ["He isn't sleeping.", 'Él no está durmiendo.'],
      ["We aren't watching TV.", 'No estamos viendo televisión.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Am / Is / Are'), suj('subject'), verbo('verb-ing')),
      fl('Información', resto('What / Where…'), aux('am / is / are'), suj('subject'), verbo('verb-ing')),
    ],
    ejemplos: [
      ['Are you working?', '¿Estás trabajando?'],
      ['Is she reading a book?', '¿Ella está leyendo un libro?'],
      ['What are they eating?', '¿Qué están comiendo ellos?'],
    ],
  },
  nota: "Contracciones: I'm not · he / she / it isn't · you / we / they aren't. Respuestas cortas: Yes, I am. / No, I'm not. (nunca «Yes, I'm»).",
  ojo: "El auxiliar nunca se omite: «Are you working?», no «You working?». Y la negación va después de am / is / are: «She isn't eating», no «She no is eating».",
};

// ─── Unidad 8 · Imperativos y verbos + infinitivo ───

const UNIDAD_8: Unit = {
  title: 'Imperatives and Verbs + Infinitive',
  topic: BLOQUE_3,
  level: 'A1',
  explain: [
    teoria(
      '1 · Imperativos: órdenes e instrucciones',
      'El imperativo sirve para dar órdenes, instrucciones y consejos. Es el verbo en forma base, sin sujeto:\n\n• Open the door. (Abre la puerta.)\n• Sit down. · Listen.\n• Con please suena más amable: Please sit down.\n\nSirve para una persona o para varias: Come here! = ¡Ven! / ¡Vengan!',
      [
        ['Open the door, please.', 'Abre la puerta, por favor.'],
        ['Sit down and listen.', 'Siéntate y escucha.'],
        ['Turn left at the corner.', 'Gira a la izquierda en la esquina.'],
        ['Come here and look at the board.', 'Ven aquí y mira la pizarra.'],
      ]
    ),
    teoria(
      "2 · Imperativo negativo: don't + verbo",
      "Para prohibir o aconsejar que no se haga algo se usa Don't + verbo en base:\n\n• Don't open the window.\n• Don't be late.\n• Don't worry. (No te preocupes.)\n\nPara incluirse uno mismo se usa Let's (Unidad 6): Let's go · Let's not go.",
      [
        ["Don't open the window.", 'No abras la ventana.'],
        ["Don't be late!", '¡No llegues tarde!'],
        ["Don't worry.", 'No te preocupes.'],
        ["Don't touch the cake.", 'No toques el pastel.'],
      ]
    ),
    teoria(
      '3 · like to / want to / need to / have to + verbo',
      'Después de like, want, need y have se usa to + verbo en forma base (infinitivo):\n\n• like to + verbo: me gusta… → I like to read.\n• want to + verbo: quiero… → I want to go home.\n• need to + verbo: necesito… → I need to study.\n• have to + verbo: tengo que… → I have to work.\n\nCon he / she / it: likes to · wants to · needs to · has to.\n\nCon like también se puede usar -ing: I like reading = I like to read.',
      [
        ['I like to read at night.', 'Me gusta leer en la noche.'],
        ['She wants to buy a car.', 'Ella quiere comprar un auto.'],
        ['We need to study for the test.', 'Necesitamos estudiar para el examen.'],
        ['He has to work on Saturdays.', 'Él tiene que trabajar los sábados.'],
      ]
    ),
    teoria(
      '4 · Negativa y pregunta con want to, need to, have to',
      "Se forman con do / does, igual que el presente simple. El verbo después de to no cambia:\n\n• Negativa: I don't want to go · She doesn't need to wait · We don't have to work.\n• Pregunta: Do you want to go? · Does he need to study? · Do they have to work?\n• Respuestas: Yes, I do. · No, she doesn't.\n\n⚠️ Ojo: don't have to significa «no hace falta» (no es obligatorio), no «está prohibido».",
      [
        ["I don't want to go.", 'No quiero ir.'],
        ["She doesn't need to wait.", 'Ella no necesita esperar.'],
        ['Do you want to eat pizza?', '¿Quieres comer pizza?'],
        ['Does he have to work today?', '¿Él tiene que trabajar hoy?'],
        ["We don't have to work on Sundays.", 'No tenemos que trabajar los domingos.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Imperativo afirmativo (Open the door)', verbo('base verb'), resto('rest of the sentence')),
    fl("Imperativo negativo (Don't open the door)", neg("Don't"), verbo('base verb'), resto('rest of the sentence')),
    fl('like / want / need / have + to (I want to go)', suj('subject'), aux('like / want / need…'), resto('to'), verbo('base verb')),
  ],
  table: {
    cols: ['Verbo', 'Significa', 'Ejemplo'],
    rows: [
      ['like to', 'me gusta', 'I like to read.'],
      ['want to', 'quiero', 'I want to go.'],
      ['need to', 'necesito', 'I need to study.'],
      ['have to', 'tengo que', 'I have to work.'],
      ["don't have to", 'no hace falta', "I don't have to wait."],
    ],
  },
  contrastCard: {
    left: { label: 'have to — obligación', example: 'I have to work today.', highlight: 'have to' },
    right: { label: "don't have to — no hace falta", example: "I don't have to work today.", highlight: "don't have to" },
    caption: "don't have to = no es necesario (puedes hacerlo si quieres). Para prohibir se usa Don't + verbo: «Don't open it».",
  },
  quiz: [
    ejercicio(
      '___ the door, please. (Abre la puerta.)',
      'Open',
      ['Opens', 'Opening', 'To open'],
      'El imperativo es el verbo en forma base, sin sujeto, sin -s, sin -ing y sin to: «Open the door, please».'
    ),
    ejercicio(
      '___ late! (¡No llegues tarde!)',
      "Don't be",
      ['Not be', "Don't", "Isn't"],
      "El imperativo negativo es Don't + verbo en base. Con el verbo be queda «Don't be late!»."
    ),
    ejercicio(
      'I ___ read at night. (Me gusta leer en la noche.)',
      'like to',
      ['like', 'likes to', 'am like to'],
      'like + to + verbo en base: «I like to read». Con I el verbo like no lleva -s, así que likes to no va.'
    ),
    ejercicio(
      'She ___ study for the test. (Ella necesita estudiar para el examen.)',
      'needs to',
      ['need to', 'needs', 'is need to'],
      'Con she el verbo lleva -s: needs to + verbo en base. need to es para I / you / we / they.'
    ),
    ejercicio(
      '___ you want to eat pizza?',
      'Do',
      ['Does', 'Are', 'Is'],
      'La pregunta con want to se arma con do / does igual que el presente simple. Con you va Do: «Do you want to eat pizza?».'
    ),
  ],
  flashcards: [
    tarjeta('Imperativo', 'Verbo en base, sin sujeto:\nOpen the door. · Sit down.\nNegativo: Don\'t open the door.'),
    tarjeta('like, want, need, have + to', 'I like to read · I want to go\nI need to study · I have to work\n(he / she / it: likes to · wants to · needs to · has to)'),
    tarjeta('Negativa y pregunta', "I don't want to go\nDoes she need to wait?\n(do / does + el verbo después de to sin -s)"),
    tarjeta("have to y don't have to", "have to = tengo que (obligación)\ndon't have to = no hace falta (no es obligatorio)"),
    tarjeta('Imperativo amable', 'Please sit down.\nOpen the window, please.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Come in and sit down, please.', translation: 'Pasa y siéntate, por favor.' },
    { speaker: 'user', text: 'Thank you. Do I have to wait here?', translation: 'Gracias. ¿Tengo que esperar aquí?' },
    { speaker: 'other', text: "No, you don't have to wait. Please open your book.", translation: 'No, no tienes que esperar. Por favor abre tu libro.' },
    { speaker: 'user', text: 'I need to ask a question.', translation: 'Necesito hacer una pregunta.' },
    { speaker: 'other', text: "Of course. Don't worry! What do you want to know?", translation: 'Claro. ¡No te preocupes! ¿Qué quieres saber?' },
    { speaker: 'user', text: "I like to learn English, but I don't understand this word.", translation: 'Me gusta aprender inglés, pero no entiendo esta palabra.' },
  ],
  readingText: {
    title: 'Class rules',
    body: "Welcome to our English class. Here are the rules. Come on time and sit down. Don't use your phone in class. Listen to the teacher and open your book. You don't have to be perfect, but you have to try. I like to speak English and I want to learn more. Do you want to learn English too? Let's start!",
    translation:
      'Bienvenidos a nuestra clase de inglés. Estas son las reglas. Lleguen a tiempo y siéntense. No usen el teléfono en clase. Escuchen al profesor y abran su libro. No tienen que ser perfectos, pero tienen que intentarlo. Me gusta hablar inglés y quiero aprender más. ¿Tú también quieres aprender inglés? ¡Empecemos!',
  },
  tips: [
    'El imperativo no lleva sujeto: «Open the door», no «You open the door» (eso sería una afirmación).',
    'Con please el imperativo suena más amable: «Please sit down».',
    'Después de want, need, have y like va to + verbo en base: «I want to go», no «I want go».',
    "don't have to = no hace falta; para prohibir se usa Don't + verbo: «Don't park here».",
  ],
  dailyWords: palabras('careful', 'open', 'learn', 'like', 'money', 'time'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
    { etiqueta: '📖 Gramática: El Verbo (Verb)', ruta: '/gramatica/concepto/el-verbo-verb' },
    { unidad: 14 },
  ],
};

const FORMAS_8: FormasUnidad = {
  titulo: 'like to · want to · need to · have to + verbo',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('like / want / need…'), resto('to'), verbo('base verb'))],
    ejemplos: [
      ['I want to go home.', 'Quiero ir a casa.'],
      ['She likes to dance.', 'A ella le gusta bailar.'],
      ['We have to leave now.', 'Tenemos que irnos ahora.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), neg("don't / doesn't"), aux('want / need / have'), resto('to'), verbo('base verb'))],
    ejemplos: [
      ["I don't want to wait.", 'No quiero esperar.'],
      ["He doesn't need to study.", 'Él no necesita estudiar.'],
      ["They don't have to pay.", 'Ellos no tienen que pagar.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Do / Does'), suj('subject'), aux('like / want / need…'), resto('to'), verbo('base verb'))],
    ejemplos: [
      ['Do you want to dance?', '¿Quieres bailar?'],
      ['Does she need to wait?', '¿Ella necesita esperar?'],
      ['Do they have to work?', '¿Ellos tienen que trabajar?'],
    ],
  },
  nota: "Con he / she / it: likes to · wants to · needs to · has to. Respuestas cortas: Yes, I do. / No, she doesn't. don't have to = no hace falta (no es obligatorio).",
  ojo: "Después de to va el verbo en base, sin -s: «She wants to go», no «She wants to goes». Y no se omite to: «I want to go», no «I want go».",
};

// ─── Unidad 9 · How much, this / that y can ───

const UNIDAD_9: Unit = {
  title: 'How much, This / That and Can',
  topic: BLOQUE_3,
  level: 'A1',
  explain: [
    teoria(
      '1 · How much…?: cuánto cuesta',
      "How much…? pregunta cuánto cuesta algo. Con una cosa va is y con varias, are:\n\n• How much is this shirt? → It's twenty dollars.\n• How much are these shoes? → They're fifty dollars.\n\nSe puede contestar con It's / They're + el precio, o solo con el precio: «Twenty dollars».",
      [
        ['How much is this shirt?', '¿Cuánto cuesta esta camisa?'],
        ["It's twenty dollars.", 'Cuesta veinte dólares.'],
        ['How much are these shoes?', '¿Cuánto cuestan estos zapatos?'],
        ["They're fifty dollars.", 'Cuestan cincuenta dólares.'],
        ['How much is a coffee?', '¿Cuánto cuesta un café?'],
      ]
    ),
    teoria(
      '2 · This / these / that / those',
      'Los demostrativos señalan cosas. Dependen de dos cosas: si es una o varias, y si está cerca o lejos.\n\n• this = este, esta (una cosa, cerca)\n• these = estos, estas (varias, cerca)\n• that = ese, esa, aquel (una cosa, lejos)\n• those = esos, esas, aquellos (varias, lejos)\n\nEn la Unidad 2 viste this y these; aquí se completan con that y those. También se usan solos: What\'s that? · Those are my friends.',
      [
        ['This coffee is hot.', 'Este café está caliente.'],
        ['These are my keys.', 'Estas son mis llaves.'],
        ['That is my house over there.', 'Esa es mi casa, allá.'],
        ['Those are my friends.', 'Esos son mis amigos.'],
        ['Is that your bike?', '¿Esa es tu bicicleta?'],
      ]
    ),
    teoria(
      "3 · Can y can't: saber y poder",
      "can + verbo en base expresa habilidad (saber hacer algo) y posibilidad. Es igual para todas las personas y se niega con can't (cannot):\n\n• Afirmativa: I can swim · She can drive.\n• Negativa: I can't swim · He can't drive.\n• Pregunta: Can you swim? · Can she drive?\n• Respuestas: Yes, I can. · No, I can't.\n\n⚠️ Ojo: después de can el verbo va sin to y sin -s: «She can swim», no «She cans swim» ni «She can to swim».",
      [
        ['I can swim very well.', 'Sé nadar muy bien.'],
        ["She can't drive.", 'Ella no sabe manejar.'],
        ['Can you speak English?', '¿Hablas inglés?'],
        ["Can he cook? No, he can't.", '¿Él sabe cocinar? No.'],
      ]
    ),
    teoria(
      '4 · Can para pedir y ofrecer',
      'Can también sirve para pedir permiso, pedir ayuda y ofrecer ayuda de forma amable:\n\n• Pedir permiso: Can I sit here? (¿Puedo sentarme aquí?)\n• Pedir ayuda: Can you help me? (¿Me puedes ayudar?)\n• Ofrecer ayuda: Can I help you? (¿Te ayudo?)\n\nSe contesta con Sure! / Of course! o con Sorry, I can\'t.',
      [
        ['Can I sit here?', '¿Puedo sentarme aquí?'],
        ['Can you help me, please?', '¿Me puedes ayudar, por favor?'],
        ['Can I help you?', '¿Le puedo ayudar?'],
        ['Can I have a coffee, please?', '¿Me das un café, por favor?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Precio (How much is this?)', resto('How much'), aux('is / are'), suj('noun')),
    fl('this / that + singular', aux('this / that'), suj('singular noun')),
    fl('these / those + plural', aux('these / those'), suj('plural noun')),
  ],
  table: {
    cols: ['', 'Una cosa', 'Varias'],
    rows: [
      ['Cerca', 'this (este)', 'these (estos)'],
      ['Lejos', 'that (ese)', 'those (esos)'],
    ],
  },
  contrastCard: {
    left: { label: 'this / these — cerca', example: 'This is my book.', highlight: 'This' },
    right: { label: 'that / those — lejos', example: 'That is your book.', highlight: 'That' },
    caption: 'Cerca → this (una) / these (varias). Lejos → that (una) / those (varias).',
  },
  quiz: [
    ejercicio(
      'How much ___ these shoes? (¿Cuánto cuestan estos zapatos?)',
      'are',
      ['is', 'does', 'do'],
      'shoes son varias cosas, así que va are: «How much are these shoes?». Con una sola cosa se dice How much is…?'
    ),
    ejercicio(
      '___ is my house, over there. (Esa es mi casa.)',
      'That',
      ['This', 'These', 'Those'],
      'La casa está lejos («over there») y es una sola: that. this es para algo cercano y these / those son para varias cosas.'
    ),
    ejercicio(
      'Look at ___ flowers here! (estas flores)',
      'these',
      ['this', 'that', 'those'],
      'flowers está en plural y las flores están cerca («here»): these. this y that son para una sola cosa.'
    ),
    ejercicio(
      'I ___ swim. (No sé nadar.)',
      "can't",
      ['can', "don't can", "doesn't can"],
      "La negativa de can es can't (cannot): «I can't swim». No se usa don't ni doesn't con can."
    ),
    ejercicio(
      '___ you speak English? — Yes, I can.',
      'Can',
      ['Do', 'Are', 'Does'],
      'La respuesta corta «Yes, I can» responde a una pregunta con can: «Can you speak English?». Con Do se contestaría «Yes, I do».'
    ),
  ],
  flashcards: [
    tarjeta('Preguntar el precio', 'How much is this? (una cosa)\nHow much are these? (varias)\nIt\'s twenty dollars. · They\'re fifty dollars.'),
    tarjeta('this, these, that, those', 'Cerca: this (una) · these (varias)\nLejos: that (una) · those (varias)'),
    tarjeta('can y can\'t', "I can swim · I can't swim\nCan you swim? · Yes, I can. · No, I can't.\n(igual para todas las personas, el verbo sin -s ni to)"),
    tarjeta('Can para pedir y ofrecer', 'Can I sit here? (permiso)\nCan you help me? (pedir ayuda)\nCan I help you? (ofrecer ayuda)'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Hello! Can I help you?', translation: '¡Hola! ¿Le puedo ayudar?' },
    { speaker: 'user', text: 'Yes, please. How much is this T-shirt?', translation: 'Sí, por favor. ¿Cuánto cuesta esta camiseta?' },
    { speaker: 'other', text: "It's fifteen dollars. And those blue shoes over there are thirty dollars.", translation: 'Cuesta quince dólares. Y esos zapatos azules de allá cuestan treinta dólares.' },
    { speaker: 'user', text: 'How much are these socks?', translation: '¿Cuánto cuestan estos calcetines?' },
    { speaker: 'other', text: "They're five dollars. Can you pay by card?", translation: 'Cuestan cinco dólares. ¿Puede pagar con tarjeta?' },
    { speaker: 'user', text: 'Yes, I can. Here you are.', translation: 'Sí, puedo. Aquí tiene.' },
  ],
  readingText: {
    title: 'At the market',
    body: "Today I'm at the market with my mother. This is the fruit stand. These apples are red, and those oranges over there are very big. How much are the apples? They're two dollars. My mother can speak English very well, so she can ask the price. I can't speak fast, but I can understand a lot. Can we buy some apples? Yes, we can!",
    translation:
      'Hoy estoy en el mercado con mi mamá. Este es el puesto de frutas. Estas manzanas son rojas y esas naranjas de allá son muy grandes. ¿Cuánto cuestan las manzanas? Cuestan dos dólares. Mi mamá habla muy bien inglés, así que puede preguntar el precio. Yo no puedo hablar rápido, pero puedo entender mucho. ¿Podemos comprar unas manzanas? ¡Sí, podemos!',
  },
  tips: [
    'How much is…? (una cosa) · How much are…? (varias): «How much is this?» · «How much are these?».',
    'this / these = cerca · that / those = lejos. Piensa en el dedo: lo cercano lo tocas, lo lejano lo señalas.',
    'can es igual para todas las personas y el verbo que sigue va sin -s ni to: «She can swim».',
    "En una frase normal can suena débil /kən/ y can't suena fuerte /kænt/: así se distinguen al hablar.",
  ],
  dailyWords: palabras('price', 'cost', 'cheap', 'expensive', 'money', 'shoes'),
  relacionados: [
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
    { unidad: 14 },
    { unidad: 18 },
  ],
};

const FORMAS_9: FormasUnidad = {
  titulo: "Can / Can't",
  afirmativa: {
    formulas: [f(suj('Subject'), aux('can'), verbo('base verb'))],
    ejemplos: [
      ['I can cook.', 'Sé cocinar.'],
      ['She can speak English.', 'Ella puede hablar inglés.'],
      ['They can swim.', 'Ellos saben nadar.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), neg("can't / cannot"), verbo('base verb'))],
    ejemplos: [
      ["I can't swim.", 'No sé nadar.'],
      ["He can't drive.", 'Él no sabe manejar.'],
      ["We can't come today.", 'No podemos venir hoy.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Can'), suj('subject'), verbo('base verb'))],
    ejemplos: [
      ['Can you help me?', '¿Me puedes ayudar?'],
      ['Can she sing?', '¿Ella sabe cantar?'],
      ['Can I sit here?', '¿Puedo sentarme aquí?'],
    ],
  },
  nota: "can es igual para todas las personas (sin -s). Respuestas cortas: Yes, I can. / No, I can't. Se usa para habilidad (saber), posibilidad y para pedir permiso o ayuda.",
  ojo: "Después de can el verbo va en base, sin to ni -s: «She can swim», no «She can to swim» ni «She cans swim».",
};

/** Las unidades del bloque 3, por número de unidad. */
export const UNIDADES_BLOQUE_3: Record<number, Unit> = {
  7: UNIDAD_7,
  8: UNIDAD_8,
  9: UNIDAD_9,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 3 que las tienen. */
export const FORMAS_BLOQUE_3: Record<number, FormasUnidad | FormasUnidad[]> = {
  7: FORMAS_7,
  8: FORMAS_8,
  9: FORMAS_9,
};
