import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_A2_2 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 2 · Futuro, pasado y ciudad (ids 16–18: Unidad 4–6 del nivel A2).

// ─── Unidad 4 (id 16) · Going to, objetos indirectos y presente continuo para el futuro ───

const UNIDAD_16: Unit = {
  title: 'Going To, Indirect Objects and Present Continuous for the Future',
  topic: BLOQUE_A2_2,
  level: 'A2',
  explain: [
    teoria(
      '1 · Going to: planes e intenciones',
      "Be going to habla de planes e intenciones que ya tienes sobre el futuro: algo que decidiste antes de hablar.\n\n• I'm going to study tonight.\n• We're going to visit my aunt on Sunday.\n• She's going to learn Italian.\n\nSe forma con am / is / are + going to + verbo base. En español se parece a «voy a + verbo».",
      [
        ["I'm going to study tonight.", 'Voy a estudiar esta noche.'],
        ["We're going to visit my aunt on Sunday.", 'Vamos a visitar a mi tía el domingo.'],
        ["She's going to learn Italian.", 'Ella va a aprender italiano.'],
        ["They're going to buy a house.", 'Ellos van a comprar una casa.'],
      ]
    ),
    teoria(
      '2 · Going to: negativa, preguntas y respuestas cortas',
      "• Negativa: am / is / are + not + going to + verbo → I'm not going to go · she isn't going to work\n• Pregunta: Am / Is / Are + sujeto + going to + verbo → Are you going to study?\n• Respuesta corta: Yes, I am. · No, she isn't.\n• Información: What are you going to do? · When is he going to arrive?\n\nGoing to siempre lleva el verbo base después: «She is going to cook», no «She is going to cooks».",
      [
        ["I'm not going to go to the party.", 'No voy a ir a la fiesta.'],
        ['Are you going to study tonight?', '¿Vas a estudiar esta noche?'],
        ["Is he going to call? No, he isn't.", '¿Él va a llamar? No.'],
        ['What are you going to do tomorrow?', '¿Qué vas a hacer mañana?'],
      ]
    ),
    teoria(
      '3 · Going to: predicciones con evidencia',
      "También se usa going to para predecir algo cuando HAY una señal que lo muestra ahora mismo:\n\n• Look at those clouds! It's going to rain.\n• Be careful! You're going to fall.\n• She's pale. She's going to be sick.\n\nSe ve la señal (nubes, el piso mojado, la cara) y por eso se predice lo que viene.",
      [
        ["Look at those clouds! It's going to rain.", '¡Mira esas nubes! Va a llover.'],
        ["Be careful! You're going to fall.", '¡Cuidado! Te vas a caer.'],
        ["The baby is yawning. He's going to sleep.", 'El bebé está bostezando. Se va a dormir.'],
        ["The sky is red. It's going to be a hot day.", 'El cielo está rojo. Va a ser un día caluroso.'],
      ]
    ),
    teoria(
      '4 · Palabras del futuro',
      "Con el futuro se usan palabras de tiempo que miran hacia adelante:\n\n• tonight · tomorrow · tomorrow morning\n• next week · next month · next year\n• this weekend · this summer\n• in two days · in a month\n• soon · later\n\nEn inglés, «next» va sin preposición: «next week», no «in next week».",
      [
        ["I'm going to call you tomorrow.", 'Te voy a llamar mañana.'],
        ["We're going to travel next month.", 'Vamos a viajar el próximo mes.'],
        ["She's going to arrive in two days.", 'Ella va a llegar en dos días.'],
        ["I'm going to rest this weekend.", 'Voy a descansar este fin de semana.'],
      ]
    ),
    teoria(
      '5 · Presente continuo para el futuro: citas y arreglos',
      "📖 Del libro: el presente continuo también habla del futuro cuando es un arreglo ya organizado, con persona, lugar u hora definidos. Casi siempre lleva una palabra de tiempo futuro.\n\n• I'm meeting Ana at 5 tomorrow.\n• We're having dinner with my parents on Friday.\n• She's flying to Madrid next week.\n\nSi no hay palabra de futuro, se entiende que es ahora: «I'm meeting Ana» (ahora).",
      [
        ["I'm meeting Ana at five tomorrow.", 'Me voy a encontrar con Ana mañana a las cinco.'],
        ["We're having dinner with my parents on Friday.", 'Cenamos con mis padres el viernes.'],
        ["She's flying to Madrid next week.", 'Ella viaja a Madrid la próxima semana.'],
        ["What are you doing this weekend?", '¿Qué haces este fin de semana?'],
      ]
    ),
    teoria(
      '6 · Going to o presente continuo',
      "Con un plan ya organizado, las dos formas sirven y casi no cambia el significado:\n\n• I'm going to see the doctor on Monday. = I'm seeing the doctor on Monday.\n\nDiferencias:\n• Solo going to para intenciones sin arreglo: «I'm going to learn to drive someday».\n• Solo going to para predicciones: «It's going to rain».\n• Con go y come suena mejor el continuo: «I'm going to Lima tomorrow», no «I'm going to go to Lima».",
      [
        ["I'm seeing the doctor on Monday.", 'Veo al doctor el lunes.'],
        ["I'm going to learn to drive someday.", 'Algún día voy a aprender a manejar.'],
        ["It's going to rain this afternoon.", 'Va a llover esta tarde.'],
        ["I'm going to Lima tomorrow.", 'Mañana voy a Lima.'],
      ]
    ),
    teoria(
      '7 · Objetos indirectos: give me a book',
      'Algunos verbos pueden llevar dos objetos: lo que se da (objeto directo) y a quién se da (objeto indirecto). Hay dos formas:\n\n• Persona primero: She gave me a book. (sin to)\n• Persona al final: She gave a book to me. (con to o for)\n\nVerbos con to: give, send, show, tell, bring, lend, teach.\nVerbos con for: buy, make, cook, get, find.',
      [
        ['She gave me a book.', 'Ella me dio un libro.'],
        ['She gave a book to me.', 'Ella dio un libro a mí.'],
        ['He bought his mother a gift.', 'Él le compró un regalo a su mamá.'],
        ['He bought a gift for his mother.', 'Él compró un regalo para su mamá.'],
      ]
    ),
    teoria(
      '8 · Pronombres de objeto indirecto: give it to me',
      "Si el objeto directo es un pronombre (it, them), debe ir primero, y la persona va después con to o for:\n\n• She gave it to me. (no «She gave me it»)\n• I sent them to him.\n• He made it for us.\n\nSi los dos objetos son sustantivos, las dos formas sirven. Si la persona es un pronombre y la cosa un sustantivo, también: «Give me the keys».\n\nEl pronombre de la persona es el objeto: me, you, him, her, us, them.",
      [
        ['Show me your phone.', 'Muéstrame tu teléfono.'],
        ['She gave it to me.', 'Ella me lo dio.'],
        ['I sent them to him yesterday.', 'Se los envié ayer.'],
        ['Can you tell us the story?', '¿Nos puedes contar la historia?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Plan: going to', suj('I'), aux("'m going to"), verbo('verb')),
    fl('Arreglo: presente continuo', suj('I'), aux("'m"), verbo('verb-ing'), resto('tomorrow')),
    fl('Dos objetos', suj('She'), verbo('gave'), suj('me'), resto('a book')),
    fl('Con to / for', suj('She'), verbo('gave'), resto('a book'), aux('to'), suj('me')),
  ],
  table: {
    cols: ['Verbo', 'Persona primero', 'Persona al final'],
    rows: [
      ['give', 'give me a book', 'give a book to me'],
      ['send', 'send her a letter', 'send a letter to her'],
      ['show', 'show us the photo', 'show the photo to us'],
      ['buy', 'buy him a coffee', 'buy a coffee for him'],
      ['make', 'make them dinner', 'make dinner for them'],
    ],
  },
  contrastCard: {
    left: { label: 'Going to — plan o predicción', example: "It's going to rain.", highlight: 'going to' },
    right: { label: 'Presente continuo — arreglo hecho', example: "I'm meeting Ana at five.", highlight: "I'm meeting" },
    caption: 'Going to sirve para planes y predicciones. El continuo, para citas ya organizadas con hora o persona.',
  },
  quiz: [
    ejercicio(
      'Look at those dark clouds! It ___ rain.',
      'is going to',
      ['goes to', 'going to', 'does going to'],
      'Hay una señal ahora mismo (las nubes), así que se predice con am / is / are + going to: «It is going to rain». Las otras formas no tienen el auxiliar.'
    ),
    ejercicio(
      'We ___ visit my grandparents next weekend. (plan)',
      'are going to',
      ['is going to', 'going to', 'are go to'],
      'Con we el verbo to be es are: «We are going to visit». is es para he, she, it; going to solo no tiene auxiliar y go to no forma el futuro.'
    ),
    ejercicio(
      "She ___ going to buy a car. She doesn't have enough money.",
      "isn't",
      ["doesn't", "aren't", 'not'],
      "La negativa de be going to lleva el auxiliar be + not: con she, «She isn't going to buy». doesn't es del presente simple y aren't es para you, we, they."
    ),
    ejercicio(
      'A: ___ you going to study tonight? B: Yes, I am.',
      'Are',
      ['Do', 'Is', 'Does'],
      'La pregunta con going to empieza con am / is / are, y con you va Are: «Are you going to study tonight?». Do y Does son del presente simple.'
    ),
    ejercicio(
      'He bought a gift ___ his mother.',
      'for',
      ['to', 'at', 'of'],
      'Con el verbo buy la persona al final lleva for: «He bought a gift for his mother». to se usa con verbos como give, send y show.'
    ),
  ],
  flashcards: [
    tarjeta('Be going to', "am / is / are + going to + verbo base\nI'm going to study · She isn't going to come · Are you going to eat?"),
    tarjeta('Going to: ¿cuándo?', 'Planes e intenciones: «I\'m going to learn English».\nPredicciones con evidencia: «Look! It\'s going to rain».'),
    tarjeta('Presente continuo para el futuro', "Arreglos ya organizados, con una palabra de futuro:\nI'm meeting Ana tomorrow. · We're flying on Friday."),
    tarjeta('Dos objetos', 'She gave me a book. = She gave a book to me.\nCon buy / make: for → He bought a gift for her.'),
    tarjeta('Con pronombres: la cosa primero', 'She gave it to me. (no «She gave me it»)\nI sent them to him.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'What are you going to do this weekend?', translation: '¿Qué vas a hacer este fin de semana?' },
    { speaker: 'user', text: "I'm going to visit my grandmother on Saturday. Then I'm meeting my friends for lunch.", translation: 'Voy a visitar a mi abuela el sábado. Luego me encuentro con mis amigos para almorzar.' },
    { speaker: 'other', text: "Nice! Are you going to take her a gift?", translation: '¡Qué bien! ¿Le vas a llevar un regalo?' },
    { speaker: 'user', text: "Yes, I bought her some flowers. I'm going to give them to her after lunch.", translation: 'Sí, le compré unas flores. Se las voy a dar después del almuerzo.' },
    { speaker: 'other', text: "Look, the sky is dark. It's going to rain!", translation: 'Mira, el cielo está oscuro. ¡Va a llover!' },
    { speaker: 'user', text: "Then I'm going to take an umbrella. Thanks!", translation: 'Entonces voy a llevar un paraguas. ¡Gracias!' },
  ],
  readingText: {
    title: 'Plans for the summer',
    body: "Next month Laura is going to travel to Cusco with her sister. They are flying on July 10, and they are staying in a small hotel near the main square. Laura is going to take many photos, and her sister is going to buy gifts for the family. They aren't going to visit Machu Picchu on the first day because they are going to rest. Laura is writing a list of things to pack. She is going to send her mother a message from the airport.",
    translation:
      'El próximo mes Laura va a viajar a Cusco con su hermana. Vuelan el 10 de julio y se quedan en un hotel pequeño cerca de la plaza principal. Laura va a tomar muchas fotos y su hermana va a comprar regalos para la familia. No van a visitar Machu Picchu el primer día porque van a descansar. Laura está escribiendo una lista de cosas para empacar. Le va a enviar un mensaje a su madre desde el aeropuerto.',
  },
  tips: [
    'Going to lleva siempre el verbo base: «I\'m going to cook», no «I\'m going to cooking» ni «I\'m going to cooks».',
    "Si ves una señal en este momento (nubes, un piso mojado), usa going to para predecir: «It's going to rain».",
    "Con un arreglo organizado (hora, persona, lugar) el presente continuo suena natural: «I'm meeting Ana at five».",
    'Con pronombres, la cosa va primero: «She gave it to me», no «She gave me it».',
  ],
  dailyWords: palabras('tomorrow', 'weekend', 'plan', 'trip', 'gift', 'present'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Futuro en inglés', ruta: '/gramatica/concepto/el-futuro-en-ingles' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
  ],
};

const FORMAS_16: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), resto('going to'), verbo('base verb'))],
    ejemplos: [
      ["I'm going to study tonight.", 'Voy a estudiar esta noche.'],
      ["She's going to buy a car.", 'Ella va a comprar un auto.'],
      ["They're going to travel next month.", 'Ellos van a viajar el próximo mes.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), neg('not'), resto('going to'), verbo('base verb'))],
    ejemplos: [
      ["I'm not going to go.", 'No voy a ir.'],
      ["He isn't going to call.", 'Él no va a llamar.'],
      ["We aren't going to eat out.", 'No vamos a comer afuera.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Am / Is / Are'), suj('subject'), resto('going to'), verbo('base verb')),
      fl('Información', resto('What / When…'), aux('am / is / are'), suj('subject'), resto('going to'), verbo('verb')),
    ],
    ejemplos: [
      ['Are you going to study?', '¿Vas a estudiar?'],
      ['Is she going to come?', '¿Ella va a venir?'],
      ['What are they going to do?', '¿Qué van a hacer ellos?'],
    ],
  },
  nota: "Contracciones: I'm going to · he's going to · you're going to · isn't going to · aren't going to. Respuestas cortas: Yes, I am. / No, she isn't.",
  ojo: "El verbo que sigue a going to va en base: «She is going to cook», no «She is going to cooks». Y no se omite el auxiliar: «Are you going to…?», no «You going to…?».",
};

// ─── Unidad 5 (id 17) · Pasado simple, be born y determinantes ───

const UNIDAD_17: Unit = {
  title: 'Past Simple, Be Born and Determiners',
  topic: BLOQUE_A2_2,
  level: 'A2',
  explain: [
    teoria(
      '1 · Pasado simple: afirmativa',
      "El pasado simple habla de acciones terminadas en un momento del pasado. Los verbos regulares agregan -ed; los irregulares cambian y hay que aprenderlos.\n\n• Regulares: work → worked · play → played\n• Terminan en e: + d → live → lived\n• Consonante + y: ied → study → studied\n• Una vocal + una consonante: se dobla → stop → stopped\n• Irregulares: go → went · see → saw · eat → ate · have → had\n\nEl pasado es igual para todas las personas.",
      [
        ['I worked all day yesterday.', 'Ayer trabajé todo el día.'],
        ['She studied for the exam.', 'Ella estudió para el examen.'],
        ['We went to the beach last summer.', 'Fuimos a la playa el verano pasado.'],
        ['He ate pizza for lunch.', 'Él comió pizza en el almuerzo.'],
      ]
    ),
    teoria(
      '2 · Pasado simple: negativa',
      "Para negar en pasado se usa didn't (did not) y el verbo vuelve a su forma base. El auxiliar ya marca el pasado.\n\n• I didn't work yesterday.\n• She didn't go to school.\n• They didn't see the film.\n\n⚠️ Ojo: «She didn't go», no «She didn't went». Con didn't el verbo nunca va en pasado.",
      [
        ["I didn't work yesterday.", 'No trabajé ayer.'],
        ["She didn't go to school.", 'Ella no fue a la escuela.'],
        ["They didn't see the film.", 'Ellos no vieron la película.'],
        ["We didn't eat breakfast.", 'No desayunamos.'],
      ]
    ),
    teoria(
      '3 · Preguntas de Sí / No y respuestas cortas',
      "Se pone did al inicio y el verbo va en base:\n\n• Did you work yesterday?\n• Did she go to the party?\n\nRespuestas cortas: Yes, I did. · No, she didn't. (se repite did, no el verbo).\n\n⚠️ Ojo: «Did you go?», no «Did you went?».",
      [
        ['Did you work yesterday?', '¿Trabajaste ayer?'],
        ['Did she go to the party?', '¿Ella fue a la fiesta?'],
        ['Did they like the food? Yes, they did.', '¿Les gustó la comida? Sí.'],
        ["Did he call you? No, he didn't.", '¿Él te llamó? No.'],
      ]
    ),
    teoria(
      '4 · Preguntas de información en pasado',
      "La palabra interrogativa va al inicio y después did + sujeto + verbo base:\n\n• What did you do last night?\n• Where did she go?\n• Why did they leave early?\n• How did you get home?\n\nCuando la palabra interrogativa es el SUJETO (who, what), no se usa did: «Who called you?» · «What happened?».",
      [
        ['What did you do last night?', '¿Qué hiciste anoche?'],
        ['Where did she go on holiday?', '¿Adónde fue ella de vacaciones?'],
        ['Why did they leave early?', '¿Por qué se fueron temprano?'],
        ['Who called you?', '¿Quién te llamó?'],
      ]
    ),
    teoria(
      '5 · Pasado de to be: was y were',
      'El pasado de am / is es was y el de are es were:\n\n• I was · he was · she was · it was\n• you were · we were · they were\n\nNegativa: wasn\'t · weren\'t. Pregunta: Was she at home? · Were you tired? Información: Where were you?\n\nCon was y were NO se usa did: «Were you at home?», no «Did you were at home?».',
      [
        ['I was at home last night.', 'Anoche estuve en casa.'],
        ["She wasn't tired.", 'Ella no estaba cansada.'],
        ['Were you at the party?', '¿Estuviste en la fiesta?'],
        ['Where were they yesterday?', '¿Dónde estaban ayer?'],
      ]
    ),
    teoria(
      '6 · Be born: nací, naciste',
      "To be born significa «nacer». En inglés siempre se usa en pasado: was / were born. En español decimos «nací», pero en inglés es «fui nacido».\n\n• I was born in 1995.\n• She was born in Lima.\n• Where were you born?\n• My parents were born in Peru.\n\n⚠️ Ojo: «I was born», no «I am born» ni «I born». Para el presente se dice «I live in…».",
      [
        ['I was born in 1995.', 'Nací en 1995.'],
        ['She was born in Lima.', 'Ella nació en Lima.'],
        ['Where were you born?', '¿Dónde naciste?'],
        ['My parents were born in Peru.', 'Mis padres nacieron en Perú.'],
      ]
    ),
    teoria(
      '7 · Uso general: sin artículo',
      "Para hablar de algo EN GENERAL (todos los ejemplos de una clase) se usa el plural o el incontable sin artículo:\n\n• I love music.\n• Dogs are friendly.\n• Coffee is expensive here.\n• Children need sleep.\n\nEn español decimos «me encanta LA música», pero en inglés no se pone the para generalizar.",
      [
        ['I love music.', 'Me encanta la música.'],
        ['Dogs are friendly animals.', 'Los perros son animales amistosos.'],
        ['Coffee is expensive here.', 'El café es caro aquí.'],
        ['Children need sleep.', 'Los niños necesitan dormir.'],
      ]
    ),
    teoria(
      '8 · Uso específico: the',
      "📖 Del libro: se usa the cuando hablas de algo ESPECÍFICO, que quien escucha ya puede identificar:\n\n• Ya se mencionó: I bought a book. The book is great.\n• Es único: the sun, the moon, the president\n• Se aclara cuál: The music in this café is nice.\n• Con superlativos y first, last, same: the best, the first, the same\n\nSin the: breakfast, school (como actividad), by bus, at home.",
      [
        ['The music in this café is nice.', 'La música de este café es agradable.'],
        ['I bought a book. The book is great.', 'Compré un libro. El libro es genial.'],
        ['The sun rises in the east.', 'El sol sale por el este.'],
        ['She goes to school by bus.', 'Ella va a la escuela en bus.'],
      ]
    ),
    teoria(
      '9 · All, most, some, no, none',
      "📖 Del libro: son determinantes de cantidad y van antes del sustantivo (all, most, some, no) o con of (none of, most of):\n\n• All students need a pass. (100%)\n• Most people like pizza. (casi todos)\n• Some people don't. (una parte)\n• No students came. = None of the students came.\n\nNone se usa solo o con of; no se usa antes de un sustantivo: «No students», no «None students».",
      [
        ['All students need a pass.', 'Todos los estudiantes necesitan un pase.'],
        ['Most people like pizza.', 'A la mayoría de la gente le gusta la pizza.'],
        ['Some of my friends live abroad.', 'Algunos de mis amigos viven en el extranjero.'],
        ['None of the shops were open.', 'Ninguna de las tiendas estaba abierta.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Be born', suj('I'), aux('was born'), resto('in 1995')),
    fl('General: sin artículo', suj('I'), verbo('love'), resto('music')),
    fl('Específico: the', resto('The'), verbo('music'), resto('in this café')),
    fl('Cantidad + sustantivo', resto('All / Most / Some / No'), verbo('people')),
  ],
  table: {
    cols: ['Verbo', 'Pasado', 'Nota'],
    rows: [
      ['work', 'worked', '+ ed'],
      ['live', 'lived', '+ d'],
      ['study', 'studied', 'ied'],
      ['stop', 'stopped', 'dobla la consonante'],
      ['go', 'went', 'irregular'],
      ['have', 'had', 'irregular'],
    ],
  },
  contrastCard: {
    left: { label: 'General — sin artículo', example: 'I love music.', highlight: 'music' },
    right: { label: 'Específico — con the', example: 'The music here is loud.', highlight: 'The music' },
    caption: 'En general no se usa the. Cuando se habla de algo concreto que ya se identifica, sí.',
  },
  quiz: [
    ejercicio(
      'I ___ TV last night. (not watch)',
      "didn't watch",
      ["don't watch", "didn't watched", 'not watched'],
      "La negativa del pasado simple es didn't + verbo base: «I didn't watch». No se usa don't (presente) y con didn't el verbo no lleva -ed."
    ),
    ejercicio(
      '___ you go to the party on Saturday?',
      'Did',
      ['Do', 'Were', 'Was'],
      'go es un verbo común y la acción es pasada: la pregunta empieza con Did. Do es presente; Were y Was son del verbo to be.'
    ),
    ejercicio(
      'My grandmother ___ in 1950.',
      'was born',
      ['is born', 'born', 'were born'],
      'Nacer siempre se dice en pasado: was / were born. Con my grandmother (she) va was: «She was born in 1950».'
    ),
    ejercicio(
      '___ sun rises in the east.',
      'The',
      ['A', 'An', 'No article'],
      'El sol es único, así que se usa the: «The sun rises in the east». A y an son para cosas no específicas y sin artículo no se usa con algo único.'
    ),
    ejercicio(
      '___ of my friends came to the party. Nobody was free.',
      'None',
      ['All', 'Most', 'Some'],
      'Nobody was free indica que nadie pudo ir, así que se usa None of my friends. All, Most y Some significan que sí fue gente.'
    ),
  ],
  flashcards: [
    tarjeta('Pasado simple regular', 'work → worked · live → lived\nstudy → studied · stop → stopped\nIgual para todas las personas.'),
    tarjeta('Negativa y pregunta en pasado', "I didn't work · Did you work?\nCon did / didn't el verbo vuelve a la base: «Did you go?», no «Did you went?»."),
    tarjeta('Was / were', "I was · he was · you were · we were · they were\nwasn't · weren't · Was she…? · Were you…?"),
    tarjeta('Be born', 'I was born in 1995. · Where were you born?\nSiempre en pasado: «I was born», no «I am born».'),
    tarjeta('General o específico', 'General: sin artículo → I love music.\nEspecífico: the → The music here is loud.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Where were you born?', translation: '¿Dónde naciste?' },
    { speaker: 'user', text: 'I was born in Arequipa in 1996. And you?', translation: 'Nací en Arequipa en 1996. ¿Y tú?' },
    { speaker: 'other', text: "I was born in Madrid, but I didn't grow up there. We moved to Lima when I was five.", translation: 'Nací en Madrid, pero no crecí allí. Nos mudamos a Lima cuando yo tenía cinco años.' },
    { speaker: 'user', text: 'Did you like Lima?', translation: '¿Te gustó Lima?' },
    { speaker: 'other', text: 'Yes, I did. I loved the food and the beach. Most people were very friendly.', translation: 'Sí. Me encantaron la comida y la playa. La mayoría de la gente era muy amable.' },
    { speaker: 'user', text: 'What did you do on weekends?', translation: '¿Qué hacías los fines de semana?' },
    { speaker: 'other', text: 'I played soccer with my cousins and we ate ceviche.', translation: 'Jugaba fútbol con mis primos y comíamos ceviche.' },
  ],
  readingText: {
    title: 'My grandfather',
    body: "My grandfather was born in a small village in 1950. He didn't have much money, but he worked hard. He studied at night and became a teacher. In 1980 he moved to the city, and he met my grandmother there. They got married two years later. Most people in the village were farmers, but my grandfather loved books. Did he have an easy life? No, he didn't, but he was always happy. Some people say he was the best teacher in town.",
    translation:
      'Mi abuelo nació en un pueblo pequeño en 1950. No tenía mucho dinero, pero trabajó duro. Estudió de noche y se hizo profesor. En 1980 se mudó a la ciudad y allí conoció a mi abuela. Se casaron dos años después. La mayoría de la gente del pueblo eran agricultores, pero a mi abuelo le encantaban los libros. ¿Tuvo una vida fácil? No, pero siempre fue feliz. Algunas personas dicen que fue el mejor profesor del pueblo.',
  },
  tips: [
    "Con did o didn't el verbo va en base: «Did she go?» y «She didn't go», nunca «Did she went?» ni «She didn't went».",
    'Con was y were no se usa did: «Were you at home?», no «Did you were at home?».',
    "Para nacer se usa siempre el pasado: «I was born in 1995», no «I am born».",
    'Para hablar en general no uses the: «I love music», «Dogs are friendly». Para algo concreto sí: «The music here is loud».',
  ],
  dailyWords: palabras('yesterday', 'birthday', 'party', 'story', 'life', 'year'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '📖 Gramática: El Artículo (Article)', ruta: '/gramatica/concepto/el-articulo-article' },
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
  ],
};

const FORMAS_17_PASADO: FormasUnidad = {
  titulo: 'Pasado simple',
  afirmativa: {
    formulas: [f(suj('Subject'), verbo('verb + ed / irregular'))],
    ejemplos: [
      ['I worked all day.', 'Trabajé todo el día.'],
      ['She went to Lima.', 'Ella fue a Lima.'],
      ['They ate pizza.', 'Ellos comieron pizza.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("didn't"), verbo('base verb'))],
    ejemplos: [
      ["I didn't work.", 'No trabajé.'],
      ["She didn't go to Lima.", 'Ella no fue a Lima.'],
      ["They didn't eat pizza.", 'Ellos no comieron pizza.'],
    ],
  },
  pregunta: {
    formulas: [
      fl('Sí / No', aux('Did'), suj('subject'), verbo('base verb')),
      fl('Información', resto('What / Where…'), aux('did'), suj('subject'), verbo('base verb')),
    ],
    ejemplos: [
      ['Did you work yesterday?', '¿Trabajaste ayer?'],
      ['Where did she go?', '¿Adónde fue ella?'],
      ['What did they eat?', '¿Qué comieron ellos?'],
    ],
  },
  nota: "Respuestas cortas: Yes, I did. / No, she didn't. Con did / didn't el verbo vuelve a su forma base y did sirve para todas las personas.",
  ojo: "Con did el verbo no va en pasado: «Did you go?», no «Did you went?». Y con who / what como sujeto no se usa did: «Who called?».",
};

const FORMAS_17_BE: FormasUnidad = {
  titulo: 'Pasado de to be (was / were)',
  afirmativa: {
    formulas: [f(suj('I / he / she / it'), aux('was')), f(suj('you / we / they'), aux('were'))],
    ejemplos: [
      ['I was at home.', 'Estuve en casa.'],
      ['She was born in Lima.', 'Ella nació en Lima.'],
      ['They were tired.', 'Ellos estaban cansados.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux("wasn't / weren't"), resto('complement'))],
    ejemplos: [
      ["I wasn't hungry.", 'No tenía hambre.'],
      ["He wasn't at school.", 'Él no estaba en la escuela.'],
      ["We weren't late.", 'No llegamos tarde.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Was / Were'), suj('subject'), resto('complement'))],
    ejemplos: [
      ['Were you at the party?', '¿Estuviste en la fiesta?'],
      ['Was she tired?', '¿Estaba cansada?'],
      ['Where were they?', '¿Dónde estaban ellos?'],
    ],
  },
  nota: "Respuestas cortas: Yes, I was. / No, they weren't. Para nacer: I was born · they were born.",
  ojo: "Was y were no usan did: «Were you at home?», no «Did you were at home?».",
};

// ─── Unidad 6 (id 18) · There is / are, one y some, ofrecimientos y peticiones ───

const UNIDAD_18: Unit = {
  title: 'There Is / Are, One and Some, Offers and Requests',
  topic: BLOQUE_A2_2,
  level: 'A2',
  explain: [
    teoria(
      '1 · There is / There are: repaso',
      "There is / There are significan «hay». There is va con una cosa o con algo incontable; There are va con varias cosas.\n\n• There is a bank near here.\n• There is some milk in the fridge.\n• There are two cafés on this street.\n\nContracción: there's. Se usa para decir que algo existe o está en un lugar.",
      [
        ["There's a bank near here.", 'Hay un banco cerca de aquí.'],
        ['There is some milk in the fridge.', 'Hay algo de leche en el refrigerador.'],
        ['There are two cafés on this street.', 'Hay dos cafés en esta calle.'],
        ["There's a park behind the school.", 'Hay un parque detrás de la escuela.'],
      ]
    ),
    teoria(
      '2 · Is there…? Are there…? y la negativa',
      "• Pregunta: el verbo va antes de there → Is there a bank? · Are there any shops?\n• Respuesta corta: Yes, there is. · No, there isn't. · Yes, there are. · No, there aren't.\n• Negativa: isn't / aren't → There isn't a bank. · There aren't any shops.\n\nPara preguntar cuántos: How many…? → How many people are there?",
      [
        ['Is there a pharmacy near here?', '¿Hay una farmacia cerca de aquí?'],
        ['Are there any good restaurants?', '¿Hay buenos restaurantes?'],
        ["No, there isn't. There aren't any.", 'No, no hay. No hay ninguno.'],
        ['How many people are there?', '¿Cuánta gente hay?'],
      ]
    ),
    teoria(
      '3 · Con a, an, some, any y a lot of',
      "Después de there is / are se usan estas palabras:\n\n• a / an → una cosa: There is a hotel.\n• some → afirmativa con varias o incontables: There are some shops.\n• any → preguntas y negativas: Are there any shops? · There aren't any.\n• a lot of → mucho: There are a lot of people.\n\nPara describir la ciudad: there is / are + sustantivo + lugar (in, on, near, next to).",
      [
        ['There is a hotel next to the bank.', 'Hay un hotel al lado del banco.'],
        ['There are some shops on this street.', 'Hay algunas tiendas en esta calle.'],
        ["There aren't any buses at night.", 'No hay buses de noche.'],
        ['There are a lot of tourists in summer.', 'Hay muchos turistas en verano.'],
      ]
    ),
    teoria(
      '4 · One y some: para no repetir',
      "Para no repetir el sustantivo en la respuesta se usan one y some:\n\n• Is there a bank? → Yes, there's one. (una cosa)\n• Are there any restaurants? → Yes, there are some. (varias)\n• Is there any milk? → Yes, there's some. (incontable)\n\nPara una respuesta negativa: No, there isn't one. · No, there aren't any.",
      [
        ["Is there a bank? Yes, there's one.", '¿Hay un banco? Sí, hay uno.'],
        ['Are there any restaurants? Yes, there are some.', '¿Hay restaurantes? Sí, hay algunos.'],
        ["Is there any milk? Yes, there's some.", '¿Hay leche? Sí, hay algo.'],
        ["Is there a gym? No, there isn't one.", '¿Hay un gimnasio? No, no hay.'],
      ]
    ),
    teoria(
      '5 · There… and it…',
      "📖 Del libro: se usa there para presentar algo nuevo y it para hablar de ese algo después:\n\n• There's a hotel on the corner. It's very old.\n• There are two cafés. They're both cheap.\n• There's a café near here. It's very good.\n\nThere dice que existe; it o they dicen cómo es. No se dice «There is very old».",
      [
        ["There's a hotel on the corner. It's very old.", 'Hay un hotel en la esquina. Es muy antiguo.'],
        ["There are two cafés. They're both cheap.", 'Hay dos cafés. Los dos son baratos.'],
        ["There's a museum. It's free on Sundays.", 'Hay un museo. Es gratis los domingos.'],
        ["There's a bus stop. It's near my house.", 'Hay una parada de bus. Está cerca de mi casa.'],
      ]
    ),
    teoria(
      '6 · Ofrecimientos con can',
      "Para ofrecer ayuda se usa Can I…? o I can… Es amable, directo y muy común:\n\n• Can I help you?\n• Can I get you a coffee?\n• I can carry that for you.\n• Can I open the window?\n\nRespuestas: Yes, please. · No, thanks. · That's very kind of you.",
      [
        ['Can I help you?', '¿Le puedo ayudar?'],
        ['Can I get you a coffee?', '¿Le traigo un café?'],
        ['I can carry that for you.', 'Yo puedo cargarlo por usted.'],
        ['Can I open the window?', '¿Puedo abrir la ventana?'],
      ]
    ),
    teoria(
      '7 · Peticiones con can y could',
      'Para pedir que otra persona haga algo se usa Can you…? o Could you…? Could es más amable y formal. Con please suena aún mejor.\n\n• Can you help me, please?\n• Could you open the door, please?\n• Could you tell me the time?\n\nTambién se usa para pedir permiso: Can I use your phone? · Could I sit here?',
      [
        ['Can you help me, please?', '¿Me puedes ayudar, por favor?'],
        ['Could you open the door, please?', '¿Podría abrir la puerta, por favor?'],
        ['Could you tell me the time?', '¿Me podría decir la hora?'],
        ['Could I sit here?', '¿Podría sentarme aquí?'],
      ]
    ),
    teoria(
      '8 · Would you…? y cómo responder',
      "📖 Del libro: would you también sirve para peticiones y ofrecimientos educados:\n\n• Would you open the window, please?\n• Would you like some tea? (ofrecimiento)\n• Would you mind waiting? (pedir con cortesía; mind + -ing)\n\nPara aceptar: Sure. · Of course. · No problem.\nPara rechazar con cortesía: Sorry, I can't. · I'm afraid I can't.",
      [
        ['Would you open the window, please?', '¿Podría abrir la ventana, por favor?'],
        ['Would you like some tea?', '¿Le gustaría un té?'],
        ['Would you mind waiting a minute?', '¿Le molestaría esperar un minuto?'],
        ["Sorry, I can't. I'm busy now.", 'Lo siento, no puedo. Estoy ocupado ahora.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pregunta', aux('Is there'), resto('a / any'), verbo('noun?')),
    fl('Respuesta con one', resto('Yes,'), aux("there's"), verbo('one')),
    fl('Respuesta con some', resto('Yes,'), aux('there are'), verbo('some')),
    fl('Ofrecer con can', aux('Can I'), verbo('help you?')),
    fl('Pedir con could', aux('Could you'), verbo('open the door,'), resto('please?')),
  ],
  contrastCard: {
    left: { label: 'Ofrecer — Can I…?', example: 'Can I help you?', highlight: 'Can I' },
    right: { label: 'Pedir — Could you…?', example: 'Could you help me?', highlight: 'Could you' },
    caption: 'Can I ofrece o pide permiso. Can you / Could you piden que el otro haga algo. Could es más cortés.',
  },
  table: {
    cols: ['Pregunta', 'Sí', 'No'],
    rows: [
      ['Is there a bank?', "Yes, there's one.", "No, there isn't one."],
      ['Is there any milk?', "Yes, there's some.", "No, there isn't any."],
      ['Are there any shops?', 'Yes, there are some.', "No, there aren't any."],
      ['Can I help you?', 'Yes, please.', 'No, thanks.'],
      ['Could you help me?', 'Of course.', "Sorry, I can't."],
    ],
  },
  quiz: [
    ejercicio(
      '___ a bank near here?',
      'Is there',
      ['There is', 'Are there', 'Is it'],
      'bank es singular, así que la pregunta es Is there…?: «Is there a bank near here?». There is es la afirmativa y Are there es para plural.'
    ),
    ejercicio(
      '___ any good restaurants in this street?',
      'Are there',
      ['Is there', 'There are', 'Are they'],
      'restaurants es plural y es pregunta: Are there any…? Is there es singular y There are es la afirmativa.'
    ),
    ejercicio(
      "Is there a pharmacy? — Yes, there's ___.",
      'one',
      ['some', 'it', 'any'],
      'Para no repetir un sustantivo singular se usa one: «Yes, there\'s one». some es para varios o incontables, y any no se usa en una afirmativa.'
    ),
    ejercicio(
      '___ I help you with your suitcase?',
      'Can',
      ['Do', 'Are', 'Does'],
      'Para ofrecer ayuda se usa Can I…?: «Can I help you?». Do, Are y Does no forman un ofrecimiento con I.'
    ),
    ejercicio(
      'There ___ two cafés on this street.',
      'are',
      ['is', 'be', 'does'],
      'cafés es plural, así que se usa there are. there is es singular, be no se conjuga y does no se usa con there.'
    ),
  ],
  flashcards: [
    tarjeta('There is / There are', "There's a bank · There are two cafés\nIs there a bank? · Are there any shops?\nNo, there isn't · No, there aren't."),
    tarjeta('One y some', "Is there a bank? Yes, there's one.\nAre there any shops? Yes, there are some.\nNo, there aren't any."),
    tarjeta('There… and it…', "There's a café. It's very good.\nThere presenta; it o they describen."),
    tarjeta('Ofrecer', "Can I help you? · Can I get you a coffee?\nRespuestas: Yes, please. / No, thanks."),
    tarjeta('Pedir con cortesía', 'Can you…? · Could you…? (más formal) · Would you…?\nSiempre con please.\nSure. · Of course. · Sorry, I can\'t.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Excuse me. Is there a bank near here?', translation: 'Disculpe. ¿Hay un banco cerca de aquí?' },
    { speaker: 'user', text: "Yes, there's one on the corner. It's next to the pharmacy.", translation: 'Sí, hay uno en la esquina. Está al lado de la farmacia.' },
    { speaker: 'other', text: 'Thanks! Are there any cafés on this street?', translation: '¡Gracias! ¿Hay cafés en esta calle?' },
    { speaker: 'user', text: "Yes, there are some. There's a nice one across the street.", translation: 'Sí, hay algunos. Hay uno bonito al otro lado de la calle.' },
    { speaker: 'other', text: 'Could you show me on the map, please?', translation: '¿Podría mostrarme en el mapa, por favor?' },
    { speaker: 'user', text: 'Of course. Can I see your phone?', translation: 'Claro. ¿Puedo ver tu teléfono?' },
    { speaker: 'other', text: 'Sure. Here you are.', translation: 'Claro. Aquí tiene.' },
  ],
  readingText: {
    title: 'My neighborhood',
    body: "I live in a small neighborhood in the city. There's a park near my house, and there are two bakeries on the same street. There isn't a cinema, but there's a big shopping mall ten minutes away. Are there any museums? Yes, there are some downtown. There's also a library. It's very quiet and it's free. Sometimes tourists ask me for help. They say, \"Could you tell me the way to the station, please?\" I always say, \"Of course! Can I show you on the map?\"",
    translation:
      'Vivo en un barrio pequeño de la ciudad. Hay un parque cerca de mi casa y hay dos panaderías en la misma calle. No hay un cine, pero hay un centro comercial grande a diez minutos. ¿Hay museos? Sí, hay algunos en el centro. También hay una biblioteca. Es muy tranquila y es gratis. A veces los turistas me piden ayuda. Dicen: «¿Podría decirme cómo llegar a la estación, por favor?». Yo siempre digo: «¡Claro! ¿Se lo muestro en el mapa?».',
  },
  tips: [
    'There is / There are depende de lo que viene después: una cosa o incontable → is; varias cosas → are.',
    'En una respuesta corta no repitas el sustantivo: «Yes, there\'s one» (singular) · «Yes, there are some» (plural).',
    'There presenta algo nuevo y it lo describe: «There\'s a café. It\'s very good».',
    'Could you…? es más cortés que Can you…? Con please suena aún mejor. Y Can I…? sirve para ofrecer o pedir permiso.',
  ],
  dailyWords: palabras('bank', 'pharmacy', 'restaurant', 'street', 'near', 'far'),
  relacionados: [
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
    { etiqueta: '📖 Gramática: Determinantes y Cuantificadores', ruta: '/gramatica/concepto/determinantes-y-cuantificadores-determiners' },
  ],
};

const FORMAS_18: FormasUnidad = {
  afirmativa: {
    formulas: [f(resto('There'), aux('is / are'), resto('noun'), resto('place'))],
    ejemplos: [
      ["There's a bank near here.", 'Hay un banco cerca de aquí.'],
      ['There are two cafés on this street.', 'Hay dos cafés en esta calle.'],
      ['There is some milk in the fridge.', 'Hay algo de leche en el refrigerador.'],
    ],
  },
  negativa: {
    formulas: [f(resto('There'), aux('isn\'t / aren\'t'), resto('a / any'), resto('noun'))],
    ejemplos: [
      ["There isn't a cinema here.", 'No hay un cine aquí.'],
      ["There aren't any shops.", 'No hay tiendas.'],
      ["There isn't any milk.", 'No hay leche.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Is / Are'), resto('there'), resto('a / any'), resto('noun'))],
    ejemplos: [
      ['Is there a bank near here?', '¿Hay un banco cerca de aquí?'],
      ['Are there any good restaurants?', '¿Hay buenos restaurantes?'],
      ['How many people are there?', '¿Cuánta gente hay?'],
    ],
  },
  nota: "Respuestas cortas: Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't. Para no repetir: Yes, there's one. · Yes, there are some.",
  ojo: "Hay que decir there: «There is a bank», no «Is a bank» ni «It has a bank». Para el singular, there is; para el plural, there are.",
};

/** Las unidades del bloque 2, por id interno. */
export const UNIDADES_BLOQUE_2: Record<number, Unit> = {
  16: UNIDAD_16,
  17: UNIDAD_17,
  18: UNIDAD_18,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 2 que las tienen. */
export const FORMAS_BLOQUE_2: Record<number, FormasUnidad | FormasUnidad[]> = {
  16: FORMAS_16,
  17: [FORMAS_17_PASADO, FORMAS_17_BE],
  18: FORMAS_18,
};
