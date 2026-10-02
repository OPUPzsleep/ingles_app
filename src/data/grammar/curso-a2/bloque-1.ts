import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_A2_1 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 1 · Repasos y expresión de intereses (ids 13–15: Unidad 1–3 del nivel A2).

// ─── Unidad 1 (id 13) · Repaso de presente simple y to be; too y either ───

const UNIDAD_13: Unit = {
  title: 'Present Simple, Be, Too and Either',
  topic: BLOQUE_A2_1,
  level: 'A2',
  explain: [
    teoria(
      '1 · Repaso de to be: am, is, are',
      "El verbo to be significa ser o estar y cambia según la persona:\n\n• I am (I'm)\n• he is · she is · it is (he's · she's · it's)\n• you are · we are · they are (you're · we're · they're)\n\nSe usa para decir quién eres, de dónde eres, cómo estás, tu edad y tu trabajo.\n\n⚠️ Ojo: en inglés la edad se dice con be: «I am 25», no «I have 25».",
      [
        ["I'm from Peru.", 'Soy de Perú.'],
        ['She is a nurse.', 'Ella es enfermera.'],
        ['We are tired today.', 'Hoy estamos cansados.'],
        ['He is twenty years old.', 'Él tiene veinte años.'],
      ]
    ),
    teoria(
      '2 · To be: negativa, preguntas y respuestas cortas',
      "• Negativa: se agrega not después del verbo → I'm not · he isn't · they aren't\n• Pregunta: el verbo va antes del sujeto → Are you tired? · Is she at home?\n• Respuesta corta: Yes, I am. · No, she isn't. (en el Yes no se contrae)\n• Preguntas de información: Where are you from? · How old is he?\n\nNunca se usa do / does con to be: «Are you tired?», no «Do you are tired?».",
      [
        ["They aren't at home.", 'Ellos no están en casa.'],
        ['Are you ready?', '¿Estás listo?'],
        ["Is he your brother? No, he isn't.", '¿Es tu hermano? No.'],
        ['Where are you from?', '¿De dónde eres?'],
      ]
    ),
    teoria(
      '3 · Repaso del presente simple: afirmativa',
      'El presente simple habla de rutinas, hábitos y hechos. Con I, you, we y they el verbo no cambia; con he, she e it se agrega -s:\n\n• I work · you work · we work · they work\n• he works · she works · it works\n\nCómo se escribe la -s:\n• casi todos: + s → work → works\n• terminan en s, sh, ch, x u o: + es → watch → watches · go → goes\n• consonante + y: la y cambia a ies → study → studies\n• have → has',
      [
        ['I work in a bank.', 'Trabajo en un banco.'],
        ['She studies at night.', 'Ella estudia de noche.'],
        ['He watches TV after dinner.', 'Él ve televisión después de la cena.'],
        ['My dog sleeps all day.', 'Mi perro duerme todo el día.'],
      ]
    ),
    teoria(
      '4 · Presente simple: negativa, preguntas y respuestas cortas',
      "Se usa el auxiliar do (does con he, she, it) y el verbo vuelve a su forma base:\n\n• Negativa: I don't work · she doesn't work\n• Pregunta: Do you work? · Does she work?\n• Respuesta corta: Yes, I do. · No, she doesn't.\n• Información: Where do you work? · What does he do?\n\n⚠️ Ojo: con does la -s ya está en el auxiliar: «Does she work?», no «Does she works?».",
      [
        ["I don't drink coffee at night.", 'No tomo café de noche.'],
        ["She doesn't live here.", 'Ella no vive aquí.'],
        ['Do you work on Saturdays?', '¿Trabajas los sábados?'],
        ['Where does he study?', '¿Dónde estudia él?'],
      ]
    ),
    teoria(
      '5 · Be o presente simple: no los mezcles',
      'El verbo to be NO usa do / does, y los demás verbos NO usan am / is / are para hablar de rutinas:\n\n• She is a teacher. (to be) · She teaches English. (presente simple)\n• Is he tired? (to be) · Does he work here? (presente simple)\n• I\'m not hungry. (to be) · I don\'t like fish. (presente simple)\n\nPara decir cómo eres o estás se usa be + adjetivo; para decir qué haces, el verbo.',
      [
        ['She is a teacher.', 'Ella es profesora.'],
        ['She teaches English.', 'Ella enseña inglés.'],
        ["I'm not hungry.", 'No tengo hambre.'],
        ["I don't like fish.", 'No me gusta el pescado.'],
        ['Is he tired?', '¿Está cansado?'],
      ]
    ),
    teoria(
      '6 · Respuestas con too: yo también',
      'Para decir que tú también haces o eres lo mismo (después de una frase afirmativa) se repite el auxiliar y se agrega too al final:\n\n• I like pizza. → I do too. (o, más informal: Me too.)\n• She is tired. → I am too.\n• They work here. → We do too.\n\nEl auxiliar es el mismo de la frase original: be con to be, do / does con el presente simple, can con can.',
      [
        ['I like pizza. I do too.', 'Me gusta la pizza. A mí también.'],
        ["She is tired. I am too.", 'Ella está cansada. Yo también.'],
        ['They work here. We do too.', 'Ellos trabajan aquí. Nosotros también.'],
        ['I love music. Me too.', 'Me encanta la música. A mí también.'],
      ]
    ),
    teoria(
      '7 · Respuestas con either: yo tampoco',
      "Para decir «yo tampoco» después de una frase NEGATIVA se usa el auxiliar negativo + either al final:\n\n• I don't like coffee. → I don't either. (o: Me neither.)\n• She isn't at home. → He isn't either.\n• They don't work here. → We don't either.\n\n⚠️ Ojo: too va con frases afirmativas y either con negativas: «I don't either», nunca «I don't too».",
      [
        ["I don't like coffee. I don't either.", 'No me gusta el café. A mí tampoco.'],
        ["She isn't at home. He isn't either.", 'Ella no está en casa. Él tampoco.'],
        ["They don't work here. We don't either.", 'Ellos no trabajan aquí. Nosotros tampoco.'],
        ["I don't know. Me neither.", 'No sé. Yo tampoco.'],
      ]
    ),
    teoria(
      '8 · Extra: So do I y Neither do I',
      'Otra forma de decir «yo también» y «yo tampoco» es poner so o neither al inicio y cambiar el orden: auxiliar + sujeto.\n\n• I like pizza. → So do I.\n• She is tired. → So am I.\n• I don\'t like fish. → Neither do I.\n• He isn\'t ready. → Neither am I.\n\nSignifica lo mismo que «I do too» y «I don\'t either». Neither ya es negativo: no se le agrega not.',
      [
        ['I like pizza. So do I.', 'Me gusta la pizza. A mí también.'],
        ['She is tired. So am I.', 'Ella está cansada. Yo también.'],
        ["I don't like fish. Neither do I.", 'No me gusta el pescado. A mí tampoco.'],
        ["He isn't ready. Neither am I.", 'Él no está listo. Yo tampoco.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Yo también (too)', suj('I'), aux('do / am / can'), resto('too')),
    fl('Yo tampoco (either)', suj('I'), aux("don't / am not"), resto('either')),
    fl('Extra: So / Neither', resto('So / Neither'), aux('do / am'), suj('I')),
  ],
  table: {
    cols: ['Frase', 'Respuesta con too / either', 'Con so / neither'],
    rows: [
      ['I like pizza.', 'I do too.', 'So do I.'],
      ['She is tired.', 'I am too.', 'So am I.'],
      ['We can swim.', 'They can too.', 'So can they.'],
      ["I don't like fish.", "I don't either.", 'Neither do I.'],
      ["He isn't ready.", "I'm not either.", 'Neither am I.'],
    ],
  },
  contrastCard: {
    left: { label: 'Frase afirmativa → too', example: 'I like tea. I do too.', highlight: 'too' },
    right: { label: 'Frase negativa → either', example: "I don't like tea. I don't either.", highlight: 'either' },
    caption: 'Afirmativa → too. Negativa → either. Y siempre repites el auxiliar de la frase original.',
  },
  quiz: [
    ejercicio(
      'Maria ___ in a hospital. She is a doctor.',
      'works',
      ['work', 'is work', 'does work'],
      'En una rutina o un trabajo con she se usa presente simple con -s: «Maria works». work sin -s no concuerda con she, y is work mezcla be con otro verbo.'
    ),
    ejercicio(
      '___ your cousins live near the university?',
      'Do',
      ['Does', 'Are', 'Is'],
      'live es un verbo común, no to be: se pregunta con do. Con your cousins (they) va Do: «Do your cousins live near the university?». Does es para he, she e it.'
    ),
    ejercicio(
      'A: I love jazz. B: I do ___.',
      'too',
      ['either', 'neither', 'yet'],
      'La frase de A es afirmativa, así que se responde con too: «I do too». either es para frases negativas y neither ya trae la negación.'
    ),
    ejercicio(
      "A: I don't like cold weather. B: I don't ___.",
      'either',
      ['too', 'neither', 'so'],
      "La frase de A es negativa, así que se responde con either: «I don't either». too es para frases afirmativas y neither no se combina con don't."
    ),
    ejercicio(
      'My brother is 20 years old. He ___ a student.',
      'is',
      ['does', 'has', 'do'],
      'Con un sustantivo como student se usa to be, y con he va is: «He is a student». does y do son auxiliares del presente simple, y has no significa ser.'
    ),
  ],
  flashcards: [
    tarjeta('To be en presente', "I am · you are · he / she / it is · we are · they are\nNegativa: I'm not · he isn't · they aren't"),
    tarjeta('Presente simple: ¿cuándo se agrega -s?', 'Solo con he, she, it:\nShe works · He watches · It goes · She studies · He has'),
    tarjeta('Negativa y pregunta del presente simple', "I don't work · she doesn't work\nDo you work? · Does she work?\nEl verbo vuelve a su forma base."),
    tarjeta('Yo también / yo tampoco', "I like it. I do too. · I don't like it. I don't either.\nInformal: Me too. · Me neither."),
    tarjeta('So do I / Neither do I', 'I like pizza. So do I.\nI am tired. So am I.\nI don\'t like fish. Neither do I.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Hi! I'm Carla. I'm from Mexico. Where are you from?", translation: 'Hola. Soy Carla. Soy de México. ¿De dónde eres tú?' },
    { speaker: 'user', text: "I'm from Peru. I work in a school. Do you work here?", translation: 'Soy de Perú. Trabajo en una escuela. ¿Tú trabajas aquí?' },
    { speaker: 'other', text: "Yes, I do. I teach English. I love my job.", translation: 'Sí. Enseño inglés. Me encanta mi trabajo.' },
    { speaker: 'user', text: 'I love my job too! Do you like coffee?', translation: '¡A mí también me encanta mi trabajo! ¿Te gusta el café?' },
    { speaker: 'other', text: "No, I don't. I don't like coffee.", translation: 'No. No me gusta el café.' },
    { speaker: 'user', text: "I don't like it either. I drink tea.", translation: 'A mí tampoco me gusta. Yo tomo té.' },
    { speaker: 'other', text: 'So do I! Tea is my favorite.', translation: '¡Yo también! El té es mi favorito.' },
  ],
  readingText: {
    title: 'Two new friends',
    body: "Tom and Ana are new students. Tom is from Canada and Ana is from Chile. They aren't in the same class, but they have lunch together every day. Tom likes soccer, and Ana likes soccer too. Tom doesn't eat meat, and Ana doesn't eat meat either. They both study English, but they don't speak Spanish at lunch. Do you have a friend like that?",
    translation:
      'Tom y Ana son estudiantes nuevos. Tom es de Canadá y Ana es de Chile. No están en la misma clase, pero almuerzan juntos todos los días. A Tom le gusta el fútbol, y a Ana también le gusta el fútbol. Tom no come carne, y Ana tampoco come carne. Los dos estudian inglés, pero no hablan español en el almuerzo. ¿Tienes un amigo así?',
  },
  tips: [
    "Con he, she e it el verbo lleva -s (works) y el auxiliar también (does). Pero con does el verbo se queda en base: «Does she work?», no «Does she works?».",
    "To be no usa do / does: «Are you tired?» y «I'm not tired», nunca «Do you are tired?» ni «I don't tired».",
    "too va en frases afirmativas y either en negativas: «I do too» · «I don't either». Se repite el auxiliar de la frase original.",
    'En una conversación rápida basta con «Me too» y «Me neither». «So do I» y «Neither do I» suenan un poco más formales.',
  ],
  dailyWords: palabras('work', 'study', 'teacher', 'student', 'family', 'coffee'),
  relacionados: [
    { etiqueta: '📖 Gramática: Ser vs. Estar = BE', ruta: '/gramatica/concepto/ser-vs-estar-be' },
    { etiqueta: '📖 Gramática: Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

const FORMAS_13_BE: FormasUnidad = {
  titulo: 'Verbo to be',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), resto('complement'))],
    ejemplos: [
      ["I'm from Peru.", 'Soy de Perú.'],
      ['She is a nurse.', 'Ella es enfermera.'],
      ['They are at home.', 'Ellos están en casa.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), neg('not'), resto('complement'))],
    ejemplos: [
      ["I'm not tired.", 'No estoy cansado.'],
      ["He isn't a doctor.", 'Él no es doctor.'],
      ["We aren't late.", 'No llegamos tarde.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Am / Is / Are'), suj('subject'), resto('complement'))],
    ejemplos: [
      ['Are you ready?', '¿Estás listo?'],
      ['Is she your sister?', '¿Es tu hermana?'],
      ['Where are they from?', '¿De dónde son ellos?'],
    ],
  },
  nota: "Contracciones: I'm · he's · you're · isn't · aren't. Respuestas cortas: Yes, I am. / No, she isn't. (en el Yes no se contrae).",
  ojo: "To be no usa do / does: «Are you tired?», no «Do you are tired?».",
};

const FORMAS_13_SIMPLE: FormasUnidad = {
  titulo: 'Presente simple',
  afirmativa: {
    formulas: [f(suj('I / you / we / they'), verbo('verb')), f(suj('He / she / it'), verbo('verb + s / es'))],
    ejemplos: [
      ['I work in a bank.', 'Trabajo en un banco.'],
      ['She studies at night.', 'Ella estudia de noche.'],
      ['They live in Lima.', 'Ellos viven en Lima.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("don't / doesn't"), verbo('base verb'))],
    ejemplos: [
      ["I don't drink coffee.", 'No tomo café.'],
      ["She doesn't work here.", 'Ella no trabaja aquí.'],
      ["They don't speak French.", 'Ellos no hablan francés.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Do / Does'), suj('subject'), verbo('base verb'))],
    ejemplos: [
      ['Do you work on Saturdays?', '¿Trabajas los sábados?'],
      ['Does he live here?', '¿Él vive aquí?'],
      ['What do you do?', '¿A qué te dedicas?'],
    ],
  },
  nota: "Respuestas cortas: Yes, I do. / No, she doesn't. La -s del verbo solo aparece en la afirmativa con he, she, it.",
  ojo: "Con does el verbo vuelve a su forma base: «Does she work?», no «Does she works?».",
};

// ─── Unidad 2 (id 14) · Formas verbales, preposiciones y pronombres ───

const UNIDAD_14: Unit = {
  title: 'Verb Forms, Prepositions and Pronouns',
  topic: BLOQUE_A2_1,
  level: 'A2',
  explain: [
    teoria(
      '1 · Después de can y can\'t: verbo en base',
      "Después de can y can't el verbo va en su forma base: sin to, sin -s y sin -ing. can es igual para todas las personas.\n\n• I can swim · she can swim\n• I can't drive · he can't drive\n• Can you help me? · Can she come?\n\n⚠️ Ojo: «She can swim», no «She can swims» ni «She can to swim». Lo mismo pasa con could, will y should.",
      [
        ['I can speak English.', 'Puedo hablar inglés.'],
        ["He can't drive a car.", 'Él no sabe manejar.'],
        ['Can you open the window?', '¿Puedes abrir la ventana?'],
        ['She can dance very well.', 'Ella baila muy bien.'],
      ]
    ),
    teoria(
      '2 · Love, like, hate: -ing o to',
      "Para hablar de lo que te gusta o no te gusta hacer, después de love, like, hate y prefer puedes usar -ing o to + verbo. Casi no cambia el significado:\n\n• I love dancing. = I love to dance.\n• She likes cooking. = She likes to cook.\n• They hate waiting. = They hate to wait.\n\nCon would like siempre va to: «I would like to go», no «I would like going».",
      [
        ['I love dancing.', 'Me encanta bailar.'],
        ['She likes to cook.', 'A ella le gusta cocinar.'],
        ['They hate waiting.', 'Ellos odian esperar.'],
        ['I would like to travel.', 'Me gustaría viajar.'],
      ]
    ),
    teoria(
      '3 · Verbo + to: want, need, hope, decide',
      "Algunos verbos siempre van seguidos de to + verbo base: want, need, hope, decide, plan, promise, try, learn, offer.\n\n• I want to learn English.\n• She needs to work tomorrow.\n• We decided to stay home.\n• He hopes to travel next year.\n\n📖 Del libro: son un patrón fijo, no tienen lógica; se aprenden verbo por verbo. Confundirlos con los de -ing es un error muy común.",
      [
        ['I want to learn English.', 'Quiero aprender inglés.'],
        ['She needs to work tomorrow.', 'Ella necesita trabajar mañana.'],
        ['We decided to stay home.', 'Decidimos quedarnos en casa.'],
        ['He hopes to travel next year.', 'Él espera viajar el próximo año.'],
      ]
    ),
    teoria(
      '4 · Verbo + -ing: enjoy, finish, stop, avoid',
      "Otros verbos siempre piden -ing después: enjoy, finish, stop, avoid, mind, keep, practice, suggest.\n\n• I enjoy swimming.\n• She finished reading the book.\n• Stop talking, please!\n• Do you mind opening the door?\n\n📖 Del libro: poner to aquí («I enjoy to swim») es uno de los errores más repetidos.",
      [
        ['I enjoy swimming.', 'Disfruto nadar.'],
        ['She finished reading the book.', 'Ella terminó de leer el libro.'],
        ['Stop talking, please.', 'Dejen de hablar, por favor.'],
        ['Do you mind opening the door?', '¿Te molesta abrir la puerta?'],
      ]
    ),
    teoria(
      '5 · Preposiciones después de verbos y adjetivos',
      'Muchos verbos y adjetivos van con una preposición fija. Hay que aprenderlos juntos:\n\n• good at · bad at · interested in · afraid of · tired of\n• listen to · wait for · look at · talk to · think about\n\nSi después de la preposición va un verbo, siempre termina en -ing: good at swimming · interested in learning.\n\nRepaso: in (dentro de) · on (sobre) · at (en un punto): in the kitchen · on the table · at school.',
      [
        ["I'm good at cooking.", 'Soy bueno cocinando.'],
        ["She's interested in music.", 'A ella le interesa la música.'],
        ['Please listen to me.', 'Por favor, escúchame.'],
        ["We're waiting for the bus.", 'Estamos esperando el bus.'],
      ]
    ),
    teoria(
      '6 · La preposición al final de la pregunta',
      "En las preguntas de información la preposición suele ir al final de la frase, no junto a la palabra interrogativa:\n\n• Who are you talking to?\n• What are you looking at?\n• Where are you from?\n• Who do you live with?\n\n📖 Del libro: en español decimos «¿A quién le hablas?» (la preposición va antes); en inglés queda al final.",
      [
        ['Who are you talking to?', '¿Con quién estás hablando?'],
        ['What are you looking at?', '¿Qué estás mirando?'],
        ['Where are you from?', '¿De dónde eres?'],
        ['Who do you live with?', '¿Con quién vives?'],
      ]
    ),
    teoria(
      '7 · Pronombres objeto: me, you, him, her, it, us, them',
      'Los pronombres sujeto (I, you, he…) van ANTES del verbo. Los pronombres objeto reciben la acción y van DESPUÉS del verbo o de una preposición:\n\n• I → me · you → you · he → him · she → her\n• it → it · we → us · they → them\n\nEjemplos: «She calls me» · «I know him» · «Come with us».\n\n⚠️ Ojo: «Help me», no «Help I». Después de una preposición también va el objeto: «with me», no «with I».',
      [
        ['She calls me every day.', 'Ella me llama todos los días.'],
        ['I know him very well.', 'Lo conozco muy bien.'],
        ['Come with us!', '¡Ven con nosotros!'],
        ['I love them.', 'Los quiero.'],
      ]
    ),
    teoria(
      '8 · Pronombres indefinidos: some-, any-, no-, every-',
      'Se forman con some, any, no o every + one / body (personas), thing (cosas) o where (lugares):\n\n• someone / somebody · something · somewhere → afirmativas\n• anyone / anybody · anything · anywhere → preguntas y negativas\n• no one / nobody · nothing · nowhere → significan cero\n• everyone / everybody · everything · everywhere → todos\n\nSiempre van con el verbo en singular: «Everybody is here».',
      [
        ['Someone is at the door.', 'Alguien está en la puerta.'],
        ["I don't want anything.", 'No quiero nada.'],
        ['Is there anybody here?', '¿Hay alguien aquí?'],
        ['Everything is ready.', 'Todo está listo.'],
      ]
    ),
    teoria(
      '9 · No, none, nothing, nobody: sin doble negación',
      "📖 Del libro: nothing, nobody y no one ya llevan la negación adentro, así que el verbo se queda afirmativo. En español sí se doblan («no hay nadie»); en inglés no.\n\n• Nobody called. (no «Nobody didn't call»)\n• I have nothing. = I don't have anything.\n• There is no milk. = There isn't any milk.\n• None: 'How much is left?' 'None.' · None of my friends came.",
      [
        ['Nobody called me.', 'Nadie me llamó.'],
        ['I have nothing to do.', 'No tengo nada que hacer.'],
        ['There is no milk.', 'No hay leche.'],
        ['None of my friends came.', 'Ninguno de mis amigos vino.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('can / can\'t + base', suj('I'), aux('can / can\'t'), verbo('verb')),
    fl('love / like + -ing', suj('I'), aux('love / like'), verbo('verb-ing')),
    fl('want / need + to', suj('I'), aux('want / need'), resto('to'), verbo('verb')),
    fl('Preposición + -ing', aux('good at'), verbo('verb-ing')),
    fl('Pregunta con preposición', resto('Who'), aux('are you'), verbo('talking'), resto('to?')),
  ],
  table: {
    cols: ['Sujeto', 'Objeto', 'Ejemplo'],
    rows: [
      ['I', 'me', 'She calls me.'],
      ['you', 'you', 'I help you.'],
      ['he', 'him', 'We know him.'],
      ['she', 'her', 'They like her.'],
      ['it', 'it', 'I need it.'],
      ['we', 'us', 'Come with us.'],
      ['they', 'them', 'I see them.'],
    ],
  },
  contrastCard: {
    left: { label: 'Sujeto — quien hace la acción', example: 'She calls me.', highlight: 'She' },
    right: { label: 'Objeto — quien recibe la acción', example: 'I call her.', highlight: 'her' },
    caption: 'Sujeto antes del verbo; objeto después del verbo o de una preposición.',
  },
  quiz: [
    ejercicio(
      'I can ___ very fast. (run)',
      'run',
      ['runs', 'to run', 'running'],
      'Después de can el verbo va en base, sin -s, sin to y sin -ing: «I can run». Los demás no concuerdan con can.'
    ),
    ejercicio(
      'He enjoys ___ football with his friends. (play)',
      'playing',
      ['to play', 'play', 'plays'],
      'enjoy pide el verbo siguiente en -ing: «He enjoys playing». Con enjoy no se usa to + verbo.'
    ),
    ejercicio(
      "I'm interested ___ learning Italian.",
      'in',
      ['at', 'of', 'for'],
      'La combinación fija es interested in. Después de una preposición, el verbo va en -ing: «interested in learning».'
    ),
    ejercicio(
      "That's my teacher. Do you know ___?",
      'her',
      ['she', 'hers', 'herself'],
      'Después del verbo know va un pronombre objeto: her. she es pronombre sujeto, hers significa «de ella» y herself es reflexivo.'
    ),
    ejercicio(
      "I'm hungry, but there is ___ in the fridge.",
      'nothing',
      ['anything', 'everything', 'nobody'],
      'nothing significa «nada» y ya es negativo, así que el verbo queda afirmativo: «there is nothing». anything necesitaría una negación (there isn\'t anything) y nobody es para personas.'
    ),
  ],
  flashcards: [
    tarjeta('¿Qué forma va después de can?', "El verbo en base, sin to ni -s:\nI can swim · she can swim · I can't drive"),
    tarjeta('Verbos con -ing y verbos con to', 'enjoy, finish, stop, avoid + -ing: I enjoy swimming.\nwant, need, hope, decide + to: I want to swim.\nlove, like, hate: las dos formas.'),
    tarjeta('Preposición + verbo', 'Después de una preposición el verbo va en -ing:\ngood at cooking · interested in learning'),
    tarjeta('Pronombres objeto', 'me · you · him · her · it · us · them\nShe calls me. · I know them.'),
    tarjeta('Nothing, nobody, no one', "Ya son negativos: el verbo queda afirmativo.\nNobody called. (no «Nobody didn't call»)"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Do you like sports?', translation: '¿Te gustan los deportes?' },
    { speaker: 'user', text: "Yes, I love swimming. I'm good at it. What about you?", translation: 'Sí, me encanta nadar. Soy bueno. ¿Y tú?' },
    { speaker: 'other', text: "I can't swim, but I enjoy playing tennis. Can you play?", translation: 'No sé nadar, pero disfruto jugar tenis. ¿Sabes jugar?' },
    { speaker: 'user', text: "No, I can't. Who do you play with?", translation: 'No sé. ¿Con quién juegas?' },
    { speaker: 'other', text: 'I play with my brother. He wants to teach you!', translation: 'Juego con mi hermano. ¡Él quiere enseñarte!' },
    { speaker: 'user', text: "Great! I'd like to learn. Is anybody free on Saturday?", translation: '¡Genial! Me gustaría aprender. ¿Alguien está libre el sábado?' },
    { speaker: 'other', text: 'Everybody is free on Saturday. See you there!', translation: 'Todos están libres el sábado. ¡Nos vemos allí!' },
  ],
  readingText: {
    title: 'My family and their hobbies',
    body: "My family loves doing different things. My father enjoys cooking, and he is very good at it. My mother likes to read, and she is interested in history. My sister can sing, but she can't dance. I want to learn the guitar. I listen to music every day, and I always talk to my friends about it. Nobody in my house is bored. Everyone has something to do.",
    translation:
      'A mi familia le encanta hacer cosas distintas. A mi padre le gusta cocinar y es muy bueno. A mi madre le gusta leer y le interesa la historia. Mi hermana sabe cantar, pero no sabe bailar. Yo quiero aprender guitarra. Escucho música todos los días y siempre hablo con mis amigos de eso. Nadie en mi casa se aburre. Todos tienen algo que hacer.',
  },
  tips: [
    "Después de can, could, will y should el verbo siempre va en base: «She can swim», nunca «She can swims» ni «She can to swim».",
    'Después de una preposición el verbo va en -ing: «good at cooking», «before leaving», «without saying».',
    'Los pronombres objeto van después del verbo o de una preposición: «with me», no «with I»; «help him», no «help he».',
    "En inglés no se doblan las negaciones: «Nobody called» y «I don't know anything», no «Nobody didn't call».",
  ],
  dailyWords: palabras('music', 'language', 'phone', 'nobody', 'everyone', 'something'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
    { etiqueta: '📖 Gramática: La Preposición (Preposition)', ruta: '/gramatica/concepto/la-preposicion-preposition' },
  ],
};

// ─── Unidad 3 (id 15) · Presente simple vs. presente continuo; if y when ───

const UNIDAD_15: Unit = {
  title: 'Present Simple vs Present Continuous, If and When',
  topic: BLOQUE_A2_1,
  level: 'A2',
  explain: [
    teoria(
      '1 · Presente simple: rutinas y hechos',
      "El presente simple habla de lo que pasa siempre o de forma regular: rutinas, hábitos, hechos y situaciones permanentes.\n\n• Rutina: I get up at 6 every day.\n• Hecho: Water boils at 100 degrees.\n• Permanente: My parents live in Lima.\n\nSeñales: always, usually, often, sometimes, never, every day, on Mondays.",
      [
        ['I get up at six every day.', 'Me levanto a las seis todos los días.'],
        ['Water boils at 100 degrees.', 'El agua hierve a 100 grados.'],
        ['My parents live in Lima.', 'Mis padres viven en Lima.'],
        ['She often walks to work.', 'Ella suele caminar al trabajo.'],
      ]
    ),
    teoria(
      '2 · Presente continuo: ahora y temporal',
      "El presente continuo (am / is / are + verbo-ing) habla de lo que está pasando ahora mismo o de algo temporal, aunque no sea en este instante.\n\n• Ahora mismo: I'm studying right now.\n• Temporal: She is staying with friends this week.\n• Cambio: The weather is getting colder.\n\nSeñales: now, right now, at the moment, today, this week, these days, currently.",
      [
        ["I'm studying right now.", 'Estoy estudiando ahora mismo.'],
        ['She is staying with friends this week.', 'Ella se está quedando con amigos esta semana.'],
        ["They're working at home these days.", 'Estos días ellos trabajan en casa.'],
        ['The weather is getting colder.', 'El clima se está poniendo más frío.'],
      ]
    ),
    teoria(
      '3 · ¿Simple o continuo? Las palabras que ayudan',
      "Pregúntate: ¿es algo habitual o algo que pasa en este momento?\n\n• Habitual → presente simple: every day, always, usually, on Sundays.\n• Ahora o temporal → presente continuo: now, at the moment, today, this week.\n\nEl mismo verbo cambia de significado: «I live in Cusco» (vivo ahí siempre) · «I'm living in Cusco this year» (es temporal).",
      [
        ['I drink tea every morning.', 'Tomo té todas las mañanas.'],
        ["I'm drinking tea at the moment.", 'Estoy tomando té en este momento.'],
        ['He plays tennis on Sundays.', 'Él juega tenis los domingos.'],
        ["He's playing tennis today.", 'Hoy él está jugando tenis.'],
      ]
    ),
    teoria(
      '4 · Verbos de estado: no llevan -ing',
      '📖 Del libro: los verbos de estado describen estados mentales, sentimientos, posesión o hechos, no acciones. Aunque hablen de ahora, van en presente simple:\n\n• know, understand, believe, remember\n• want, need, like, love, hate, prefer\n• have (tener), own, belong, seem\n\n«I want a coffee», no «I\'m wanting a coffee». «I don\'t understand», no «I\'m not understanding».',
      [
        ['I know the answer.', 'Sé la respuesta.'],
        ["I don't understand this word.", 'No entiendo esta palabra.'],
        ['She wants a new phone.', 'Ella quiere un teléfono nuevo.'],
        ['We have a big house.', 'Tenemos una casa grande.'],
      ]
    ),
    teoria(
      '5 · Think y have: dos sentidos',
      "📖 Del libro: think y have tienen dos significados. Como estado van en simple; como acción van en continuo.\n\n• I think it's a good idea. (opinión, simple) · I'm thinking about my holidays. (pensar en algo, continuo)\n• I have a car. (tener, simple) · I'm having lunch. (comer, continuo)\n\nSi have significa tener, nunca lleva -ing; si es una actividad (have lunch, have a shower), sí.",
      [
        ["I think it's a good idea.", 'Creo que es buena idea.'],
        ["I'm thinking about my holidays.", 'Estoy pensando en mis vacaciones.'],
        ['She has a new car.', 'Ella tiene un auto nuevo.'],
        ["We're having lunch now.", 'Estamos almorzando ahora.'],
      ]
    ),
    teoria(
      '6 · Always con presente continuo: una queja',
      "📖 Del libro: con el presente simple, always es un hábito neutro. Con el presente continuo se vuelve una queja: pasa demasiado y molesta.\n\n• I always lock the door. (hábito, neutro)\n• He's always losing his keys. (¡otra vez! me molesta)\n• She always arrives on time. (neutro)\n• They're always arguing. (siempre pelean, molesta)",
      [
        ['I always lock the door.', 'Siempre cierro la puerta con llave.'],
        ["He's always losing his keys.", 'Siempre está perdiendo sus llaves.'],
        ['She always arrives on time.', 'Ella siempre llega a tiempo.'],
        ["They're always arguing.", 'Siempre están discutiendo.'],
      ]
    ),
    teoria(
      '7 · Cláusulas con when: hábitos y hechos',
      'When significa «cuando». Une dos ideas que pasan juntas o una después de la otra, siempre que se cumple una condición segura. Los dos verbos van en presente simple:\n\n• When it rains, I stay at home.\n• I stay at home when it rains.\n\nSi la cláusula con when va primero, se pone una coma. Si va al final, no.\n\n⚠️ Ojo: no se usa will después de when en este uso: «When I get home, I cook», no «When I will get home».',
      [
        ['When it rains, I stay at home.', 'Cuando llueve, me quedo en casa.'],
        ['I feel tired when I wake up early.', 'Me siento cansado cuando me despierto temprano.'],
        ['When she is busy, she eats at her desk.', 'Cuando está ocupada, come en su escritorio.'],
        ['The kids are happy when it snows.', 'Los niños están contentos cuando nieva.'],
      ]
    ),
    teoria(
      '8 · Cláusulas con if: hechos y consecuencias',
      'If significa «si». Une una condición con su resultado. Para hechos y consecuencias normales, los dos verbos van en presente simple:\n\n• If you heat ice, it melts.\n• If I am tired, I go to bed early.\n• She gets angry if people are late.\n\nAl igual que con when, si la cláusula con if va primero, lleva coma. Después de if no se usa will: «If it rains», no «If it will rain».',
      [
        ['If you heat ice, it melts.', 'Si calientas el hielo, se derrite.'],
        ['If I am tired, I go to bed early.', 'Si estoy cansado, me acuesto temprano.'],
        ['She gets angry if people are late.', 'Ella se enoja si la gente llega tarde.'],
        ["If you don't eat, you feel weak.", 'Si no comes, te sientes débil.'],
      ]
    ),
    teoria(
      '9 · If o when: ¿cuál pongo?',
      "• When = sabes que pasa (siempre o casi siempre): «When I get home, I take a shower» (llego a casa todos los días).\n• If = puede pasar o no: «If I get home early, I cook» (a veces llego temprano, a veces no).\n\nEn muchas frases de hábitos las dos funcionan y casi no cambia el significado, pero if siempre deja abierta la posibilidad.\n\nRecuerda: la cláusula con if / when puede ir al inicio (con coma) o al final (sin coma).",
      [
        ['When I get home, I take a shower.', 'Cuando llego a casa, me ducho.'],
        ['If I get home early, I cook.', 'Si llego temprano a casa, cocino.'],
        ['I call my mom when I have time.', 'Llamo a mi mamá cuando tengo tiempo.'],
        ["If it's cold, I wear a coat.", 'Si hace frío, uso abrigo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Presente simple', suj('I / you / we / they'), verbo('verb'), resto('every day')),
    fl('Presente continuo', suj('I'), aux('am / is / are'), verbo('verb-ing'), resto('now')),
    fl('When + presente, presente', resto('When'), suj('it'), verbo('rains'), resto(','), suj('I'), verbo('stay')),
    fl('If + presente, presente', resto('If'), suj('you'), verbo('heat ice'), resto(','), suj('it'), verbo('melts')),
  ],
  table: {
    cols: ['', 'Presente simple', 'Presente continuo'],
    rows: [
      ['Se usa para', 'rutinas, hechos', 'ahora, temporal'],
      ['Forma', 'verbo (+ s con he, she, it)', 'am / is / are + verbo-ing'],
      ['Señales', 'always, every day, usually', 'now, at the moment, today'],
      ['Ejemplo', 'She works in a bank.', 'She is working now.'],
      ['Verbos de estado', 'I know · I want · I like', 'no se usan con -ing'],
    ],
  },
  contrastCard: {
    left: { label: 'Presente simple — rutina', example: 'I drink tea every morning.', highlight: 'drink' },
    right: { label: 'Presente continuo — ahora', example: "I'm drinking tea now.", highlight: "I'm drinking" },
    caption: 'Rutina o hecho → presente simple. Ahora mismo o temporal → presente continuo.',
  },
  quiz: [
    ejercicio(
      'Be quiet! Dad ___ a phone call.',
      'is making',
      ['makes', 'make', 'is make'],
      'Be quiet! indica que algo pasa ahora mismo: presente continuo, is making. makes es presente simple (rutina) y is make no lleva -ing.'
    ),
    ejercicio(
      'I ___ what you mean.',
      'understand',
      ['am understanding', 'understanding', 'understands'],
      'understand es un verbo de estado y no se usa con -ing, aunque hable de ahora. Con I va sin -s: «I understand».'
    ),
    ejercicio(
      'Maria usually drinks coffee, but right now she ___ tea.',
      'is drinking',
      ['drinks', 'drink', 'is drink'],
      'right now (ahora mismo) pide presente continuo: is drinking. Con usually se habla de la rutina, pero la segunda parte contrasta con ahora.'
    ),
    ejercicio(
      'If you ___ water to 100 degrees, it boils.',
      'heat',
      ['heats', 'will heat', 'are heating'],
      'En una condición de un hecho se usa presente simple, y con you el verbo va sin -s: «If you heat water». Después de if no se usa will.'
    ),
    ejercicio(
      '___ I get home, I always take a shower.',
      'When',
      ['Then', 'Where', 'Which'],
      'Se habla de algo que pasa siempre que llegas a casa, así que se usa When (cuando). Then, Where y Which no unen las dos ideas de esta manera.'
    ),
  ],
  flashcards: [
    tarjeta('Presente simple o continuo', "Simple: lo que pasa siempre.\nI study every day.\nContinuo: lo que pasa ahora o es temporal.\nI'm studying now."),
    tarjeta('Verbos de estado', 'know · understand · want · need · like · love · have (tener)\nNo llevan -ing: «I want a coffee».'),
    tarjeta('Always + continuo', "He's always losing his keys.\nExpresa una queja: pasa demasiado."),
    tarjeta('When y if con presente simple', 'When it rains, I stay home. (seguro)\nIf you heat ice, it melts. (condición)\nDespués de when e if no va will.'),
    tarjeta('¿Coma o no?', 'Cláusula primero: coma → When it rains, I stay home.\nCláusula al final: sin coma → I stay home when it rains.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Hi Sam! What are you doing?', translation: '¡Hola Sam! ¿Qué estás haciendo?' },
    { speaker: 'user', text: "I'm studying for my exam. I study every evening.", translation: 'Estoy estudiando para mi examen. Estudio todas las tardes.' },
    { speaker: 'other', text: 'Do you study alone?', translation: '¿Estudias solo?' },
    { speaker: 'user', text: "Usually, yes. But today my friend is helping me. When I don't understand something, she explains it.", translation: 'Normalmente sí. Pero hoy mi amiga me está ayudando. Cuando no entiendo algo, ella me lo explica.' },
    { speaker: 'other', text: 'Nice! If you want, I can help too.', translation: '¡Qué bien! Si quieres, yo también puedo ayudar.' },
    { speaker: 'user', text: "Thanks! I'm having a break now. Do you want a coffee?", translation: '¡Gracias! Estoy descansando ahora. ¿Quieres un café?' },
  ],
  readingText: {
    title: 'A normal day, a different week',
    body: "Lucia usually works in an office. She gets up at seven, takes the bus and starts work at nine. When she finishes, she goes home and cooks dinner. But this week is different. She isn't working in the office; she is working from home because the building is closed. Now she is sitting at the kitchen table with her laptop. She likes her routine, but she doesn't mind the change. If everything goes well, she is back in the office next Monday.",
    translation:
      'Lucía normalmente trabaja en una oficina. Se levanta a las siete, toma el bus y empieza a trabajar a las nueve. Cuando termina, va a casa y cocina la cena. Pero esta semana es distinta. No está trabajando en la oficina; trabaja desde casa porque el edificio está cerrado. Ahora está sentada en la mesa de la cocina con su laptop. Le gusta su rutina, pero no le molesta el cambio. Si todo va bien, vuelve a la oficina el próximo lunes.',
  },
  tips: [
    "Pregúntate: ¿es una rutina o algo de este momento? Rutina → presente simple. Ahora o temporal → presente continuo.",
    "No uses -ing con verbos de estado: «I want», «I know», «I understand», «I like». Aunque hablen de ahora, van en presente simple.",
    'Después de if y when (en este uso) los dos verbos van en presente simple. No se pone will: «If it rains», no «If it will rain».',
    "Always + continuo es una queja: «He's always losing his keys». Con el presente simple, always es un hábito normal.",
  ],
  dailyWords: palabras('usually', 'always', 'weather', 'rain', 'ice', 'temperature'),
  relacionados: [
    { etiqueta: '📖 Gramática: Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
  ],
};

/** Las unidades del bloque 1, por id interno. */
export const UNIDADES_BLOQUE_1: Record<number, Unit> = {
  13: UNIDAD_13,
  14: UNIDAD_14,
  15: UNIDAD_15,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 1 que las tienen. */
export const FORMAS_BLOQUE_1: Record<number, FormasUnidad | FormasUnidad[]> = {
  13: [FORMAS_13_BE, FORMAS_13_SIMPLE],
};
