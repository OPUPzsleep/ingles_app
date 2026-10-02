import { aux, fl, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_C1_4 } from '@/data/grammar/topics';
import type { Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 4 · Viajes, cultura y habilidad (ids 155–157: Unidad 10–12 del nivel C1).

// ─── Unidad 10 (id 155) · Estilo indirecto; sacar conclusiones y pedir detalles ───

const UNIDAD_155: Unit = {
  title: 'Reported Speech: Statements, Questions and Instructions; Drawing Conclusions',
  topic: BLOQUE_C1_4,
  level: 'C1',
  explain: [
    teoria(
      '1 · Estilo indirecto de afirmaciones: repaso',
      "Al contar lo que alguien dijo, los tiempos retroceden un paso y cambian pronombres y referencias de tiempo y lugar:\n\n• \"I'm working in Lisbon.\" → She said she was working in Lisbon.\n• \"I've never been abroad.\" → He said he had never been abroad.\n• \"I'll call you tomorrow.\" → She said she would call me the next day.\n\nNo es obligatorio retroceder si lo dicho sigue siendo verdad: «She said she lives in Lima».",
      [
        ["She said she was working in Lisbon.", 'Dijo que estaba trabajando en Lisboa.'],
        ['He said he had never been abroad.', 'Dijo que nunca había estado en el extranjero.'],
        ['She said she would call me the next day.', 'Dijo que me llamaría al día siguiente.'],
        ['She said she lives in Lima.', 'Dijo que vive en Lima (todavía es cierto).'],
      ]
    ),
    teoria(
      '2 · Verbos de comunicación más precisos',
      "En vez de say, en C1 se usan verbos que indican la intención del hablante. Cada uno tiene su patrón:\n\n• + that: admit, claim, explain, insist, mention, point out, suggest, warn.\n• + to + verbo: agree, promise, refuse, offer, threaten.\n• + objeto + to + verbo: advise, ask, tell, warn, remind, persuade, invite.\n• + -ing: admit, deny, suggest, recommend, apologise for.\n\n«She admitted taking the money» · «He promised to call» · «She advised me to wait».",
      [
        ['She admitted taking the money.', 'Admitió haber tomado el dinero.'],
        ['He promised to call.', 'Prometió llamar.'],
        ['She advised me to wait.', 'Me aconsejó esperar.'],
        ['He claimed that he had never seen her.', 'Afirmó que nunca la había visto.'],
      ]
    ),
    teoria(
      '3 · Estilo indirecto de preguntas',
      "Las preguntas se reportan sin inversión y sin do / does / did:\n\n• Sí / no → if o whether: «Are you coming?» → He asked if I was coming.\n• Wh- → la misma palabra interrogativa: «Where do you live?» → She asked where I lived.\n• Con modales: «Can you help?» → She asked whether I could help.\n\nSe omite el signo de interrogación. En el estilo directo la pregunta lleva auxiliar; en el indirecto el orden es de afirmación.",
      [
        ['He asked if I was coming.', 'Preguntó si venía.'],
        ['She asked where I lived.', 'Preguntó dónde vivía.'],
        ['She asked whether I could help.', 'Preguntó si podía ayudar.'],
        ['They asked how long I had been waiting.', 'Preguntaron cuánto tiempo llevaba esperando.'],
      ]
    ),
    teoria(
      '4 · Estilo indirecto de instrucciones y peticiones',
      "Las órdenes, peticiones y consejos se reportan con tell / ask / advise + persona + to + verbo:\n\n• \"Close the door.\" → He told me to close the door.\n• \"Could you wait?\" → She asked me to wait.\n• \"Don't touch it.\" → He warned me not to touch it.\n• \"You should rest.\" → The doctor advised me to rest.\n\nPara peticiones de cosas: «She asked for a glass of water».",
      [
        ['He told me to close the door.', 'Me dijo que cerrara la puerta.'],
        ['She asked me to wait.', 'Me pidió que esperara.'],
        ['He warned me not to touch it.', 'Me advirtió que no lo tocara.'],
        ['The doctor advised me to rest.', 'El médico me aconsejó descansar.'],
      ]
    ),
    teoria(
      '5 · Modales y casos especiales en estilo indirecto',
      "• will → would · can → could · may → might · must → had to (obligación)\n• should, would, could, might, ought to no cambian.\n• Condicionales: el segundo y el tercero no cambian: «If I had time, I'd help» → He said that if he had time, he'd help.\n• Con el pasado simple, el cambio a pasado perfecto es opcional si el contexto es claro.\n• Con there y with verbos de percepción puede no haber cambio.",
      [
        ['"I will help." → He said he would help.', '«Ayudaré» → Dijo que ayudaría.'],
        ['"You must leave." → She said I had to leave.', '«Debes irte» → Dijo que tenía que irme.'],
        ['"You should rest." → He said I should rest.', '«Deberías descansar» → Dijo que debería descansar.'],
        ["\"If I had time, I'd help.\" → He said that if he had time, he'd help.", '«Si tuviera tiempo, ayudaría» → Dijo que si tuviera tiempo, ayudaría.'],
      ]
    ),
    teoria(
      '6 · Estrategia: sacar conclusiones con You mean… y So what you\'re saying is…',
      "💬 Para confirmar que entendiste, sacar una conclusión o reformular lo que oíste:\n\n• You mean… → «You mean you've never been abroad?»\n• So what you're saying is… → «So what you're saying is that the trip is cancelled.»\n• So I guess… → «So I guess we'll have to wait.»\n• So you're telling me… → «So you're telling me nobody knew?»\n\nSuenan educadas y evitan malentendidos antes de seguir.",
      [
        ["You mean you've never been abroad?", '¿O sea que nunca has estado en el extranjero?'],
        ["So what you're saying is that the trip is cancelled.", 'O sea que lo que dices es que el viaje está cancelado.'],
        ["So I guess we'll have to wait.", 'Así que supongo que tendremos que esperar.'],
        ["So you're telling me nobody knew?", '¿Me estás diciendo que nadie lo sabía?'],
      ]
    ),
    teoria(
      '7 · Estrategia: pedir detalles con In what way?',
      "💬 In what way? pide una aclaración concreta sobre algo que acaba de decirse de manera general. Se pueden usar variantes:\n\n• A: «The new system is better.» B: «In what way?»\n• A: «She's changed.» B: «How do you mean?»\n• A: «It was a strange trip.» B: «Strange in what way?»\n• Could you be more specific? · Such as?\n\nEs la forma natural de dejar que el otro desarrolle su idea sin sonar a interrogatorio.",
      [
        ['The new system is better. In what way?', 'El nuevo sistema es mejor. ¿En qué sentido?'],
        ["She's changed. How do you mean?", 'Ha cambiado. ¿A qué te refieres?'],
        ['It was a strange trip. Strange in what way?', 'Fue un viaje extraño. ¿Extraño en qué sentido?'],
        ['Could you be more specific?', '¿Podrías ser más específico?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Afirmación', resto('She said'), suj('she'), aux('was'), verbo('working')),
    fl('Pregunta sí / no', resto('He asked'), resto('if'), suj('I'), aux('was'), verbo('coming')),
    fl('Instrucción', resto('He told'), suj('me'), resto('to'), verbo('wait')),
    fl('Concluir', resto("So you're saying…")),
  ],
  table: {
    cols: ['Tipo', 'Estructura', 'Ejemplo'],
    rows: [
      ['afirmación', 'said / told + (that) + retroceso', 'She said she was tired.'],
      ['pregunta sí / no', 'asked + if / whether', 'He asked if I was coming.'],
      ['pregunta wh-', 'asked + wh- + orden normal', 'She asked where I lived.'],
      ['instrucción', 'told / asked + persona + to', 'He told me to wait.'],
      ['verbo con -ing', 'admit / suggest / deny + -ing', 'She admitted taking it.'],
    ],
  },
  contrastCard: {
    left: { label: 'Pregunta directa', example: '"Where do you live?"', highlight: 'do you live' },
    right: { label: 'Pregunta indirecta', example: 'She asked where I lived.', highlight: 'where I lived' },
    caption: 'En el estilo indirecto no hay inversión ni do; el tiempo retrocede.',
  },
  quiz: [
    ejercicio(
      'She admitted ___ the money. (take)',
      'taking',
      ['to take', 'take', 'took'],
      'Admit va seguido de -ing: admitted taking. to take, take y took no forman esa estructura.'
    ),
    ejercicio(
      'He promised ___ late. (not be)',
      'not to be',
      ['not being', 'to not been', "don't be"],
      'Promise va seguido de to + verbo base, y not va antes de to: promised not to be. Las otras formas no son correctas.'
    ),
    ejercicio(
      'She asked me what time ___.',
      'it was',
      ['was it', 'did it', 'it were'],
      'En el estilo indirecto no hay inversión y el verbo retrocede: it was. was it invierte el orden, did it no se usa y it were no concuerda.'
    ),
    ejercicio(
      'The doctor advised him ___ more exercise.',
      'to do',
      ['do', 'doing', 'that do'],
      'Advise + persona + to + verbo base: advised him to do. do, doing y that do no forman esta estructura.'
    ),
    ejercicio(
      'A: The new system is better in some ways. B: ___ way?',
      'In what',
      ['On what', 'At what', 'By what'],
      'La expresión para pedir detalles es In what way? On what, At what y By what no forman esa expresión.'
    ),
  ],
  flashcards: [
    tarjeta('Retroceso de tiempos', 'presente → pasado · pasado → pasado perfecto\nwill → would · can → could · must → had to'),
    tarjeta('Verbos precisos', 'admit + -ing · promise + to · advise + persona + to · claim + that'),
    tarjeta('Preguntas reportadas', 'asked if / whether (sí / no) · asked where I lived (wh-)\nSin inversión ni do.'),
    tarjeta('Instrucciones', 'told me to close the door · asked me to wait\nwarned me not to touch it.'),
    tarjeta('Estrategias', "You mean…? · So what you're saying is… · So I guess…\nIn what way? · How do you mean?"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'The guide told us that the museum was closed on Mondays and advised us to book in advance.', translation: 'El guía nos dijo que el museo cierra los lunes y nos aconsejó reservar con anticipación.' },
    { speaker: 'user', text: "So what you're saying is that we can't go tomorrow?", translation: '¿O sea que no podemos ir mañana?' },
    { speaker: 'other', text: "Well, he asked whether we had a reservation. When I said no, he suggested trying the website.", translation: 'Bueno, preguntó si teníamos reserva. Cuando dije que no, sugirió probar en la página web.' },
    { speaker: 'user', text: 'And did he mention the price? You mean it might be sold out?', translation: '¿Y mencionó el precio? ¿O sea que podría estar agotado?' },
    { speaker: 'other', text: "He warned us that tickets sell fast. He also said it was better to go in the morning.", translation: 'Nos advirtió que las entradas se agotan rápido. También dijo que era mejor ir por la mañana.' },
    { speaker: 'user', text: "So I guess we should book now. The queues are different in summer? In what way?", translation: 'Entonces supongo que deberíamos reservar ahora. ¿Las colas son distintas en verano? ¿En qué sentido?' },
  ],
  readingText: {
    title: 'The lost luggage',
    body: "When I arrived in Lisbon, my suitcase wasn't on the belt. I asked an employee where I could find it, and she told me to fill in a form. She explained that bags sometimes got delayed and promised to deliver mine the next day. I asked whether the airline would pay for new clothes, and she admitted not knowing. A colleague suggested contacting customer service. The manager apologised for the mistake and advised me to keep all receipts. My suitcase arrived two days later. So, you could say that the airline kept its promise, but not exactly in the way I had expected.",
    translation:
      'Cuando llegué a Lisboa, mi maleta no estaba en la cinta. Le pregunté a una empleada dónde podía encontrarla y me dijo que llenara un formulario. Explicó que a veces las maletas se retrasaban y prometió entregar la mía al día siguiente. Pregunté si la aerolínea pagaría ropa nueva y admitió no saberlo. Una colega sugirió contactar al servicio al cliente. El gerente se disculpó por el error y me aconsejó guardar todos los recibos. Mi maleta llegó dos días después. Así que se podría decir que la aerolínea cumplió su promesa, pero no exactamente como yo esperaba.',
  },
  tips: [
    "En el estilo indirecto los tiempos retroceden, pero no si lo dicho sigue siendo verdad.",
    "Cada verbo de comunicación tiene su patrón: admit + -ing, promise + to, advise + persona + to, claim + that.",
    "Las preguntas indirectas no llevan inversión ni do: «She asked where I lived».",
    "You mean…? y So what you're saying is… confirman que entendiste; In what way? pide detalles.",
  ],
  dailyWords: palabras('opinion', 'question', 'answer', 'meaning', 'sentence', 'word'),
  relacionados: [
    { etiqueta: '📖 Gramática: Estructura de la oración (Sentence Structure)', ruta: '/gramatica/concepto/estructura-de-la-oracion-sentence-structure' },
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
  ],
};

// ─── Unidad 11 (id 156) · Relativas con when, where y whose; verbos con dos objetos; suavizar y Yeah, no ───

const UNIDAD_156: Unit = {
  title: 'Relative Clauses with When, Where and Whose; Verbs with Two Objects; Softening',
  topic: BLOQUE_C1_4,
  level: 'C1',
  explain: [
    teoria(
      '1 · Where: el lugar',
      "Where introduce una cláusula relativa que describe un lugar. Equivale a in / at / to which:\n\n• That's the café where we first met. (= in which)\n• The town where I grew up is tiny.\n• Lisbon, where I lived for two years, is my favourite city.\n\nEn las no definitorias va entre comas. Where se puede reemplazar por in which (formal): «the house in which she was born». También se omite si el sustantivo es place o somewhere: «the place we met».",
      [
        ["That's the café where we first met.", 'Ese es el café donde nos conocimos.'],
        ['The town where I grew up is tiny.', 'El pueblo donde crecí es diminuto.'],
        ['Lisbon, where I lived for two years, is my favourite city.', 'Lisboa, donde viví dos años, es mi ciudad favorita.'],
        ['The house in which she was born is now a museum.', 'La casa en la que nació ahora es un museo.'],
      ]
    ),
    teoria(
      '2 · When y why: el tiempo y la razón',
      "• when introduce una cláusula con un nombre de tiempo (day, year, time, moment, summer): «I remember the summer when we travelled across Italy».\n• why introduce una razón después de the reason: «The reason why he left is unclear».\n• When y why se pueden omitir o sustituir por that: «the day (that) we met» · «the reason (that) he left».\n\nNo se usa when para un evento: «the day when it rains», sino «the day it rains».",
      [
        ['I remember the summer when we travelled across Italy.', 'Recuerdo el verano en que viajamos por Italia.'],
        ['The reason why he left is unclear.', 'La razón por la que se fue no está clara.'],
        ['The day we met was a Tuesday.', 'El día que nos conocimos fue un martes.'],
        ['There was a time when letters took weeks to arrive.', 'Hubo un tiempo en que las cartas tardaban semanas en llegar.'],
      ]
    ),
    teoria(
      '3 · Whose: la posesión',
      "Whose indica posesión y reemplaza a un posesivo (his, her, their, its):\n\n• The writer whose novel won the prize is only twenty.\n• A country whose economy depends on tourism is vulnerable.\n• She is the colleague whose idea saved the project.\n\nVa siempre seguido de un sustantivo y se usa con personas y cosas. Se puede usar en definitorias y no definitorias.",
      [
        ['The writer whose novel won the prize is only twenty.', 'La escritora cuya novela ganó el premio solo tiene veinte años.'],
        ['A country whose economy depends on tourism is vulnerable.', 'Un país cuya economía depende del turismo es vulnerable.'],
        ['She is the colleague whose idea saved the project.', 'Ella es la colega cuya idea salvó el proyecto.'],
        ['The man whose car was stolen called the police.', 'El hombre cuyo auto fue robado llamó a la policía.'],
      ]
    ),
    teoria(
      '4 · Verbos con complemento directo e indirecto',
      "Algunos verbos aceptan dos complementos: la cosa (directo) y la persona (indirecto):\n\n• give, send, show, offer, lend, pass, tell, teach, buy, make, bring, owe.\n• Persona primero, sin preposición: «She gave me a book».\n• Cosa primero, con to / for: «She gave a book to me» · «He bought a gift for her».\n• Con pronombres: la cosa va primero: «She gave it to me».\n\nTo con give, send, show, lend, pass, tell. For con buy, make, cook, find, get.",
      [
        ['She gave me a book.', 'Me dio un libro.'],
        ['She gave a book to me.', 'Dio un libro a mí.'],
        ['He bought a gift for her.', 'Compró un regalo para ella.'],
        ['She gave it to me.', 'Me lo dio.'],
      ]
    ),
    teoria(
      '5 · Verbos que solo aceptan to + persona',
      "Algunos verbos NO admiten la estructura persona + cosa. Siempre usan to antes de la persona:\n\n• explain · say · describe · suggest · introduce · announce · mention · propose · recommend.\n\n• She explained the problem to me. (no «explained me the problem»)\n• He described the scene to us.\n• I suggested a solution to them.\n\nEs un error muy común, porque en español se dice «me explicó».",
      [
        ['She explained the problem to me.', 'Me explicó el problema.'],
        ['He described the scene to us.', 'Nos describió la escena.'],
        ['I suggested a solution to them.', 'Les sugerí una solución.'],
        ['She introduced her friend to me.', 'Me presentó a su amiga.'],
      ]
    ),
    teoria(
      '6 · Estrategia: suavizar con kind of, a little y not really',
      "💬 En conversación, para no sonar demasiado directo o rotundo:\n\n• kind of / sort of → «It was kind of boring.» (un poco, algo)\n• a little / a bit → «I'm a little worried.»\n• not really → respuesta negativa suave: «Did you like it? — Not really.»\n• not exactly / not entirely → «It's not exactly what I wanted.»\n• I wouldn't say… → «I wouldn't say it was great.»\n\nSuavizan críticas y desacuerdos.",
      [
        ['It was kind of boring.', 'Fue algo aburrido.'],
        ["I'm a little worried about the exam.", 'Estoy un poco preocupado por el examen.'],
        ['Did you like it? Not really.', '¿Te gustó? No mucho.'],
        ["It's not exactly what I wanted.", 'No es exactamente lo que quería.'],
      ]
    ),
    teoria(
      '7 · Estrategia: Yeah, no',
      "💬 «Yeah, no…» tiene dos usos en el inglés conversacional:\n\n• Estar de acuerdo y añadir un comentario propio: «Yeah, no, you're right. But I'd also say…»\n• Rechazar con suavidad: «Yeah, no, I don't think so.»\n\nEn el primer uso, el «no» no niega: reconoce lo que el otro dijo antes de añadir algo. Es muy común en inglés británico y australiano.\n\n«Yeah, no, absolutely. It's a great city, though it can be expensive.»",
      [
        ["Yeah, no, you're right. But I'd also say it's expensive.", 'Sí, tienes razón. Pero yo también diría que es caro.'],
        ["Yeah, no, I don't think so.", 'No, no lo creo.'],
        ["Yeah, no, absolutely. It's a great city.", 'Sí, totalmente. Es una gran ciudad.'],
        ["Yeah, no, I've been there. It's lovely.", 'Sí, he estado allí. Es precioso.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Where', resto('The café'), aux('where'), suj('we'), verbo('met')),
    fl('Whose', resto('The writer'), aux('whose'), resto('novel won')),
    fl('Dos objetos', suj('She'), verbo('gave'), suj('me'), resto('a book')),
    fl('Solo to', suj('She'), verbo('explained'), resto('it'), aux('to'), suj('me')),
  ],
  table: {
    cols: ['Relativo', 'Se usa con', 'Ejemplo'],
    rows: [
      ['where', 'lugares', 'the café where we met'],
      ['when', 'tiempos', 'the summer when we travelled'],
      ['why', 'the reason', 'the reason why he left'],
      ['whose', 'posesión', 'the writer whose novel…'],
      ['to + persona', 'explain, describe, suggest', 'explained it to me'],
    ],
  },
  contrastCard: {
    left: { label: 'Give — admite dos formas', example: 'She gave me a book.', highlight: 'gave me a book' },
    right: { label: 'Explain — solo con to', example: 'She explained the problem to me.', highlight: 'to me' },
    caption: 'Con give, send y show la persona puede ir primero. Con explain, describe y suggest siempre va con to.',
  },
  quiz: [
    ejercicio(
      "That's the café ___ we first met.",
      'where',
      ['which', 'when', 'whose'],
      'Se habla de un lugar: where. which sin preposición no encaja, when es para tiempos y whose indica posesión.'
    ),
    ejercicio(
      'I remember the summer ___ we travelled across Italy.',
      'when',
      ['where', 'whose', 'who'],
      'Se habla de un momento: when. where es para lugares, whose indica posesión y who es para personas.'
    ),
    ejercicio(
      'She explained the problem ___ me.',
      'to',
      ['for', 'at', 'of'],
      'Explain no admite persona + cosa: se usa explained the problem to me. for, at y of no se combinan así con explain.'
    ),
    ejercicio(
      "He's the writer ___ novel won the prize.",
      'whose',
      ['who', 'which', 'whom'],
      'La novela es «de» ese escritor: se usa whose. who, which y whom no indican posesión.'
    ),
    ejercicio(
      'A: Was the film good? B: ___. It was kind of boring.',
      'Not really',
      ['No doubt', 'Absolutely', 'Definitely'],
      'Not really es una respuesta negativa suave que concuerda con kind of boring. No doubt, Absolutely y Definitely expresan acuerdo fuerte.'
    ),
  ],
  flashcards: [
    tarjeta('Where, when, why', 'the café where we met · the summer when we travelled\nthe reason why he left'),
    tarjeta('Whose', 'posesión, siempre + sustantivo: the writer whose novel won the prize.'),
    tarjeta('Dos objetos', 'give me a book = give a book to me\nPronombres: give it to me.'),
    tarjeta('Solo con to', 'explain, describe, suggest, introduce, say, mention\nShe explained the problem to me.'),
    tarjeta('Suavizar y Yeah, no', "kind of · a little · not really · not exactly\nYeah, no, you're right. But…"),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Have you been to Lisbon? The city where my parents met?', translation: '¿Has estado en Lisboa? ¿La ciudad donde se conocieron mis padres?' },
    { speaker: 'user', text: "Yeah, no, I went last summer, which was kind of too hot. It's a beautiful city, though.", translation: 'Sí, fui el verano pasado, que estaba algo caluroso. Es una ciudad preciosa, eso sí.' },
    { speaker: 'other', text: 'Did you like the food? A friend whose husband is Portuguese told me it was amazing.', translation: '¿Te gustó la comida? Una amiga cuyo esposo es portugués me dijo que era increíble.' },
    { speaker: 'user', text: "Not really, to be honest. I wouldn't say it was my favourite. I bought my sister some pastries, though.", translation: 'No mucho, para ser sincero. No diría que fue mi favorita. Aunque le compré unos pasteles a mi hermana.' },
    { speaker: 'other', text: 'Did you give them to her, or did you eat them?', translation: '¿Se los diste o te los comiste?' },
    { speaker: 'user', text: "I gave a few to her, and I explained the recipe to my neighbour — it's the day when I discovered I'm a terrible cook!", translation: 'Le di algunos y le expliqué la receta a mi vecino. ¡Fue el día en que descubrí que soy un pésimo cocinero!' },
  ],
  readingText: {
    title: 'The town where I grew up',
    body: "The town where I grew up is a place whose beauty you notice only when you leave. I remember the summer when the river flooded and the whole street had to be evacuated. My grandmother, whose house was on the hill, offered us a room. She gave us blankets and told us stories about the day when she first arrived. She explained how the town had changed, and she showed me photographs of the square where she had danced as a girl. It's the reason why I still go back every year, even if it's kind of far.",
    translation:
      'El pueblo donde crecí es un lugar cuya belleza solo notas cuando te vas. Recuerdo el verano en que el río se desbordó y hubo que evacuar toda la calle. Mi abuela, cuya casa estaba en la colina, nos ofreció una habitación. Nos dio mantas y nos contó historias sobre el día en que llegó por primera vez. Explicó cómo había cambiado el pueblo y me mostró fotografías de la plaza donde había bailado de joven. Es la razón por la que todavía vuelvo cada año, aunque quede algo lejos.',
  },
  tips: [
    "Where para lugares, when para tiempos, whose para posesión: «the writer whose novel…».",
    "Explain, describe, suggest y mention no admiten persona + cosa: «explained it to me», no «explained me it».",
    "Con give, send y show la persona puede ir primero; con pronombres, la cosa va primero: «give it to me».",
    "Kind of, a little y not really suavizan; Yeah, no puede significar acuerdo y no un rechazo.",
  ],
  dailyWords: palabras('village', 'town', 'city', 'country', 'neighborhood', 'address'),
  relacionados: [
    { etiqueta: '📖 Gramática: Oraciones subordinadas (Clauses)', ruta: '/gramatica/concepto/oraciones-subordinadas-clauses' },
    { etiqueta: '📖 Gramática: El Pronombre (Pronoun)', ruta: '/gramatica/concepto/el-pronombre-pronoun' },
  ],
};

// ─── Unidad 12 (id 157) · Adverbios de grado, as… as, comparativos y superlativos; vaguedad y acuerdo ───

const UNIDAD_157: Unit = {
  title: 'Adverbs Before Adjectives and Adverbs; As… As, Comparatives and Superlatives; Vague Language',
  topic: BLOQUE_C1_4,
  level: 'C1',
  explain: [
    teoria(
      '1 · Adverbios de grado antes de adjetivos',
      "En C1 se espera elegir el adverbio exacto para cada adjetivo. Algunos adverbios se combinan con adjetivos concretos (colocaciones):\n\n• highly: unlikely, successful, skilled, recommended.\n• deeply: concerned, ashamed, moved, divided.\n• utterly: ridiculous, impossible, exhausted.\n• entirely: different, new, up to you.\n• fully: aware, understand, prepared.\n• bitterly: disappointed, cold.\n\n«It's highly unlikely.» · «I was deeply moved.»",
      [
        ["It's highly unlikely that he'll come.", 'Es muy improbable que venga.'],
        ['I was deeply moved by the film.', 'La película me conmovió profundamente.'],
        ["That's utterly ridiculous.", 'Eso es totalmente ridículo.'],
        ['The two cities are entirely different.', 'Las dos ciudades son completamente distintas.'],
      ]
    ),
    teoria(
      '2 · Adjetivos graduables y no graduables',
      "• Graduables (good, tired, cold, interesting): admiten very, fairly, quite, rather, extremely, a bit.\n• No graduables o extremos (brilliant, exhausted, terrible, fantastic, freezing): admiten absolutely, completely, utterly, totally, really, but not very.\n\n• «It's very cold.» / «It's absolutely freezing.»\n• «She's quite tired.» / «She's utterly exhausted.»\n\nQuite significa «bastante» con graduables y «completamente» con no graduables: «quite impossible».",
      [
        ["It's very cold today.", 'Hoy hace mucho frío.'],
        ["It's absolutely freezing today.", 'Hoy hace un frío helado.'],
        ["She's quite tired.", 'Ella está bastante cansada.'],
        ["She's utterly exhausted.", 'Ella está completamente agotada.'],
      ]
    ),
    teoria(
      '3 · Adverbios antes de adverbios',
      "Los mismos adverbios de grado modifican a otros adverbios:\n\n• surprisingly quickly · remarkably well · incredibly slowly\n• extremely carefully · fairly often · terribly badly\n• much too quickly · far too slowly\n\n«She speaks remarkably well for a beginner.» · «He drove far too fast.»\n\nCuidado: too tiene sentido negativo (más de lo deseable): «It's too cold» (no se puede salir).",
      [
        ['She speaks remarkably well for a beginner.', 'Habla notablemente bien para ser principiante.'],
        ['He drove far too fast.', 'Manejó demasiado rápido.'],
        ['They worked surprisingly quickly.', 'Trabajaron sorprendentemente rápido.'],
        ['I see him fairly often.', 'Lo veo con bastante frecuencia.'],
      ]
    ),
    teoria(
      '4 · As… as con matices',
      "• as + adjetivo + as → igualdad: «as tall as».\n• not as / not so + adjetivo + as → menos: «not as expensive as».\n• just as, every bit as → exactamente igual: «every bit as good».\n• nowhere near as / not nearly as → mucho menos: «nowhere near as difficult».\n• twice as, three times as, half as → proporciones.\n• as much as / as many as → cantidades.\n\n«It's every bit as good as the original.»",
      [
        ["It's every bit as good as the original.", 'Es igual de bueno que el original.'],
        ["The exam wasn't nearly as hard as I expected.", 'El examen no fue ni de cerca tan difícil como esperaba.'],
        ['This costs twice as much as that.', 'Esto cuesta el doble que aquello.'],
        ['She earns half as much as her brother.', 'Gana la mitad que su hermano.'],
      ]
    ),
    teoria(
      '5 · Comparativos con matiz',
      "Antes de un comparativo se pueden usar modificadores que indican la diferencia:\n\n• mucho: far, much, a great deal, considerably, significantly → «far better», «considerably more expensive».\n• poco: slightly, a bit, marginally, a little → «slightly warmer».\n• Doble comparativo (cambio gradual): «getting better and better», «increasingly difficult».\n• the + comparativo, the + comparativo: «The more you practise, the better you get».\n\nNo se usa very con comparativos: «much better», no «very better».",
      [
        ['This phone is far better than my old one.', 'Este teléfono es mucho mejor que mi viejo.'],
        ["It's slightly warmer today.", 'Hoy hace un poco más de calor.'],
        ["The situation is getting increasingly difficult.", 'La situación se está poniendo cada vez más difícil.'],
        ['The more you practise, the better you get.', 'Cuanto más practicas, mejor te sale.'],
      ]
    ),
    teoria(
      '6 · Superlativos con matiz',
      "Para reforzar o matizar un superlativo:\n\n• by far the + superlativo → «by far the best».\n• easily the + superlativo → «easily the most important».\n• one of the + superlativo + plural → «one of the best books».\n• the least + adjetivo → el opuesto: «the least expensive».\n• the second / third + superlativo → «the second largest city».\n\n«She is by far the most talented player in the team.»",
      [
        ['She is by far the most talented player in the team.', 'Es, con mucho, la jugadora más talentosa del equipo.'],
        ['It is easily the most important decision of my life.', 'Es fácilmente la decisión más importante de mi vida.'],
        ['Lima is the second largest city in South America.', 'Lima es la segunda ciudad más grande de Sudamérica.'],
        ['This is the least expensive option.', 'Esta es la opción menos cara.'],
      ]
    ),
    teoria(
      '7 · Estrategia: lenguaje vago con and that kind of thing',
      "💬 En conversación natural es normal no dar todos los detalles, con expresiones vagas:\n\n• and that kind of thing / and things like that → «We talked about politics and that kind of thing.»\n• and so on / and so forth / etcetera.\n• or something / or whatever → «Maybe she was ill or something.»\n• stuff like that / sort of thing / that sort of stuff.\n\nSe usan cuando la lista es obvia o los detalles no importan. En textos formales se evitan.",
      [
        ['We talked about politics and that kind of thing.', 'Hablamos de política y cosas así.'],
        ['Maybe she was ill or something.', 'Quizás estaba enferma o algo así.'],
        ['He likes hiking, camping and stuff like that.', 'Le gusta el senderismo, acampar y cosas así.'],
        ['They sell books, maps, postcards and so on.', 'Venden libros, mapas, postales y demás.'],
      ]
    ),
    teoria(
      '8 · Estrategia: mostrar fuerte acuerdo con No doubt',
      "💬 Para expresar acuerdo total o certeza:\n\n• No doubt (about it) → «A: It was a brilliant match. B: No doubt.»\n• Absolutely · Definitely · Exactly · Precisely · Without a doubt.\n• «There's no doubt that…» → «There's no doubt that it was the best.»\n• I couldn't agree more.\n\nNo doubt también puede significar «probablemente» al inicio de una frase: «No doubt he'll call later».",
      [
        ['It was a brilliant match. No doubt.', 'Fue un partido brillante. Sin duda.'],
        ["There's no doubt that it was the best.", 'No hay duda de que fue el mejor.'],
        ['I couldn’t agree more.', 'No podría estar más de acuerdo.'],
        ["No doubt he'll call later.", 'Seguramente llamará más tarde.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Colocación', resto('highly'), verbo('unlikely')),
    fl('As… as con matiz', resto('every bit as'), verbo('good'), resto('as')),
    fl('Superlativo', resto('by far the'), verbo('best')),
    fl('Vaguedad', resto('and that kind of thing')),
  ],
  table: {
    cols: ['Tipo', 'Ejemplo', 'Nota'],
    rows: [
      ['adjetivo graduable', 'very cold · quite tired', 'very, fairly, extremely'],
      ['adjetivo extremo', 'absolutely freezing · utterly exhausted', 'no very'],
      ['colocación', 'highly unlikely · deeply moved', 'se aprenden juntos'],
      ['comparativo', 'far better · slightly warmer', 'no very'],
      ['superlativo', 'by far the best · easily the most', 'refuerzo'],
    ],
  },
  contrastCard: {
    left: { label: 'Adjetivo graduable — very', example: "It's very cold.", highlight: 'very cold' },
    right: { label: 'Adjetivo extremo — absolutely', example: "It's absolutely freezing.", highlight: 'absolutely freezing' },
    caption: 'Los adjetivos extremos ya significan «muy»: se combinan con absolutely, completely o utterly, no con very.',
  },
  quiz: [
    ejercicio(
      'The film was ___ brilliant.',
      'absolutely',
      ['very', 'fairly', 'a bit'],
      'brilliant es un adjetivo extremo y se combina con absolutely. very, fairly y a bit se usan con adjetivos graduables.'
    ),
    ejercicio(
      'This phone is ___ better than my old one.',
      'far',
      ['very', 'too', 'so'],
      'Antes de un comparativo se usa far o much, no very. too y so no se combinan con comparativos de esta manera.'
    ),
    ejercicio(
      'She is ___ the best player in the team.',
      'by far',
      ['by long', 'far by', 'at far'],
      'La expresión es by far the + superlativo. by long, far by y at far no forman esa expresión.'
    ),
    ejercicio(
      "My new job isn't nearly ___ stressful as the old one.",
      'as',
      ['than', 'like', 'that'],
      'La estructura es not nearly as + adjetivo + as. than, like y that no completan la comparación de igualdad.'
    ),
    ejercicio(
      'A: The film is overrated. B: ___. It was boring.',
      'No doubt',
      ['No doubts', 'Not doubt', 'No doubtful'],
      'La expresión de acuerdo fuerte es No doubt. No doubts, Not doubt y No doubtful no existen.'
    ),
  ],
  flashcards: [
    tarjeta('Colocaciones', 'highly unlikely · deeply concerned · utterly ridiculous\nentirely different · fully aware'),
    tarjeta('Graduable o extremo', 'very cold / absolutely freezing\nvery tired / utterly exhausted'),
    tarjeta('As… as con matiz', 'every bit as good · not nearly as hard · nowhere near as\ntwice as · half as'),
    tarjeta('Comparativos y superlativos', 'far better · slightly warmer · increasingly difficult\nby far the best · easily the most important'),
    tarjeta('Vaguedad y acuerdo', 'and that kind of thing · or something · stuff like that\nNo doubt. · I couldn\'t agree more.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'How was the trip? I heard it was absolutely exhausting.', translation: '¿Cómo estuvo el viaje? Escuché que fue agotador.' },
    { speaker: 'user', text: "Yeah, no, it was utterly exhausting, but deeply rewarding. We visited museums, markets and that kind of thing.", translation: 'Sí, fue completamente agotador, pero muy gratificante. Visitamos museos, mercados y cosas así.' },
    { speaker: 'other', text: 'Was it as cold as they said? It was highly unlikely to be warm.', translation: '¿Hacía tanto frío como decían? Era muy improbable que hiciera calor.' },
    { speaker: 'user', text: "Not nearly as cold. The locals were far friendlier than I expected, and it's easily the best trip I've taken.", translation: 'Ni de cerca tanto frío. La gente era mucho más amable de lo esperado y es fácilmente el mejor viaje que he hecho.' },
    { speaker: 'other', text: 'The food must have been remarkably good.', translation: 'La comida debió de ser notablemente buena.' },
    { speaker: 'user', text: 'No doubt. By far the best soup of my life.', translation: 'Sin duda. De lejos la mejor sopa de mi vida.' },
  ],
  readingText: {
    title: 'A skill for life',
    body: "Learning a language is a deeply rewarding challenge. It is highly unlikely that anyone becomes fluent overnight, and progress can be painfully slow. Yet the more you practise, the better you get. Some learners move surprisingly quickly, while others need far more time; neither group is better than the other. What matters is regular practice. By far the most effective method is speaking with real people, even if you make mistakes. Reading, watching series, listening to podcasts and that kind of thing all help. And, as every teacher knows, being patient is every bit as important as being talented.",
    translation:
      'Aprender un idioma es un desafío profundamente gratificante. Es muy improbable que alguien llegue a hablar con fluidez de la noche a la mañana y el progreso puede ser dolorosamente lento. Sin embargo, cuanto más practicas, mejor te sale. Algunos aprendices avanzan sorprendentemente rápido, mientras que otros necesitan mucho más tiempo; ningún grupo es mejor que el otro. Lo que importa es la práctica regular. De lejos el método más eficaz es hablar con personas reales, aunque cometas errores. Leer, ver series, escuchar pódcast y cosas así ayudan. Y, como todo profesor sabe, ser paciente es tan importante como tener talento.',
  },
  tips: [
    "Los adjetivos extremos (freezing, exhausted, brilliant) se combinan con absolutely, utterly o completely, no con very.",
    "Antes de un comparativo usa far, much o slightly, no very: «far better», «slightly warmer».",
    "By far the + superlativo y easily the + superlativo refuerzan: «by far the best».",
    "And that kind of thing, or something y stuff like that dan vaguedad natural; No doubt expresa acuerdo total.",
  ],
  dailyWords: palabras('level', 'power', 'success', 'experience', 'attention', 'habit'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adverbio (Adverb)', ruta: '/gramatica/concepto/el-adverbio-adverb' },
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
  ],
};

/** Las unidades del bloque 4, por id interno. */
export const UNIDADES_BLOQUE_4: Record<number, Unit> = {
  155: UNIDAD_155,
  156: UNIDAD_156,
  157: UNIDAD_157,
};
