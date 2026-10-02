import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B2_2 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 2 · Vida social, ley y orden, y eventos extraños (ids 116–118: Unidad 4–6 del nivel B2).

// ─── Unidad 4 (id 116) · Be supposed to, was going to, phrasal verbs inseparables ───

const UNIDAD_116: Unit = {
  title: 'Be Supposed To, Was Going To and Inseparable Phrasal Verbs',
  topic: BLOQUE_B2_2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Be supposed to: lo que se espera o se debe',
      "Be supposed to + verbo expresa lo que se espera que pase o lo que dicen las reglas. Es más suave que must:\n\n• The meeting is supposed to start at nine. (está programada)\n• You are supposed to wear a helmet. (es la regla)\n• She is supposed to call me today. (quedó en llamar)\n\nSe forma con am / is / are + supposed to + verbo base. Equivale a «se supone que…» o «debería…».",
      [
        ['The meeting is supposed to start at nine.', 'Se supone que la reunión empieza a las nueve.'],
        ['You are supposed to wear a helmet.', 'Se supone que debes usar casco.'],
        ['She is supposed to call me today.', 'Se supone que ella me llama hoy.'],
        ['Am I supposed to pay now?', '¿Se supone que debo pagar ahora?'],
      ]
    ),
    teoria(
      '2 · Not supposed to: prohibido o poco recomendable',
      "En negativa, not supposed to dice que algo está prohibido o no se debe hacer, de forma menos fuerte que mustn't:\n\n• You aren't supposed to park here.\n• Children aren't supposed to use this machine.\n• I'm not supposed to tell you, but…\n\nSe usa mucho para hablar de reglas de la vida social y de la ley: «You're not supposed to use your phone while driving».",
      [
        ["You aren't supposed to park here.", 'No se supone que estaciones aquí.'],
        ["Children aren't supposed to use this machine.", 'Los niños no deben usar esta máquina.'],
        ["I'm not supposed to tell you, but…", 'No debería decírtelo, pero…'],
        ["You're not supposed to drive using your phone.", 'No se debe manejar usando el teléfono.'],
      ]
    ),
    teoria(
      '3 · Be supposed to: rumores y fama',
      "También se usa para lo que «se dice» o se cree de algo:\n\n• This restaurant is supposed to be the best in town.\n• He is supposed to be very rich.\n• The film is supposed to be great.\n\nEs una forma de decir «dicen que es…» sin asegurar que sea verdad.",
      [
        ['This restaurant is supposed to be the best in town.', 'Dicen que este restaurante es el mejor del pueblo.'],
        ['He is supposed to be very rich.', 'Dicen que él es muy rico.'],
        ['The film is supposed to be great.', 'Se dice que la película es genial.'],
        ["It's supposed to rain tomorrow.", 'Se supone que lloverá mañana.'],
      ]
    ),
    teoria(
      '4 · Was / were supposed to: lo que debía pasar y no pasó',
      "En pasado, was / were supposed to + verbo dice lo que se esperaba y muchas veces no se cumplió:\n\n• I was supposed to meet him at six, but I was late.\n• The train was supposed to arrive at eight.\n• You were supposed to clean your room.\n\nLa frase siguiente suele explicar qué pasó de verdad.",
      [
        ['I was supposed to meet him at six, but I was late.', 'Debía encontrarme con él a las seis, pero llegué tarde.'],
        ['The train was supposed to arrive at eight.', 'El tren debía llegar a las ocho.'],
        ['You were supposed to clean your room.', 'Se suponía que debías limpiar tu cuarto.'],
        ["We weren't supposed to be there.", 'No debíamos estar ahí.'],
      ]
    ),
    teoria(
      '5 · Was / were going to: planes frustrados',
      "Was / were going to + verbo base expresa un plan o intención del pasado que NO se cumplió. Suele ir seguido de but:\n\n• I was going to call you, but I forgot.\n• We were going to travel, but it rained.\n• She was going to say something, but she stopped.\n\nTambién: was about to (a punto de) → «I was about to leave when you called».",
      [
        ['I was going to call you, but I forgot.', 'Iba a llamarte, pero me olvidé.'],
        ['We were going to travel, but it rained.', 'Íbamos a viajar, pero llovió.'],
        ['She was going to say something, but she stopped.', 'Iba a decir algo, pero se detuvo.'],
        ['I was about to leave when you called.', 'Estaba a punto de irme cuando llamaste.'],
      ]
    ),
    teoria(
      '6 · Was going to o would',
      "• was / were going to: un plan que no se cumplió → «I was going to buy it» (pero no lo compré).\n• would (en estilo indirecto): lo que se dijo en el pasado sobre el futuro → «She said she would call».\n• Con since: «I had been going to…» es poco común.\n\nCompara: «I was going to tell you» (no lo dije) · «I told you I would come» (lo dije en el pasado sobre el futuro).",
      [
        ["I was going to buy it, but it was too expensive.", 'Iba a comprarlo, pero era demasiado caro.'],
        ['She said she would call.', 'Ella dijo que llamaría.'],
        ['I told you I would come.', 'Te dije que vendría.'],
        ['They were going to move, but changed their minds.', 'Iban a mudarse, pero cambiaron de idea.'],
      ]
    ),
    teoria(
      '7 · Phrasal verbs inseparables',
      "Los phrasal verbs inseparables no permiten colocar el objeto entre el verbo y la partícula. El objeto siempre va después:\n\n• look after (cuidar): «I look after my niece» — no «I look my niece after».\n• look for (buscar) · get over (superar) · run into (encontrarse con)\n• come across (encontrar por casualidad) · take after (parecerse a)\n• deal with (ocuparse de) · go through (pasar por)\n\nCon un pronombre también va después: «I look after her», no «I look her after».",
      [
        ['I look after my niece on Fridays.', 'Cuido a mi sobrina los viernes.'],
        ['I ran into an old friend yesterday.', 'Ayer me encontré con un viejo amigo.'],
        ['She takes after her mother.', 'Ella se parece a su madre.'],
        ['I came across this photo by accident.', 'Encontré esta foto por casualidad.'],
      ]
    ),
    teoria(
      '8 · Phrasal verbs de tres partes',
      "Los phrasal verbs de tres partes (verbo + partícula + preposición) son siempre inseparables:\n\n• look forward to (esperar con ganas) · get on with (llevarse bien con)\n• put up with (soportar) · run out of (quedarse sin)\n• look up to (admirar) · come up with (idear) · catch up with (alcanzar)\n\n«I can't put up with the noise.» · «She came up with a great idea.» · «We ran out of time.»",
      [
        ["I can't put up with the noise.", 'No soporto el ruido.'],
        ['She came up with a great idea.', 'Ella se le ocurrió una gran idea.'],
        ['We ran out of time.', 'Nos quedamos sin tiempo.'],
        ['I get on well with my neighbors.', 'Me llevo bien con mis vecinos.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Be supposed to', suj('It'), aux('is supposed to'), verbo('start')),
    fl('Prohibido', suj('You'), aux("aren't supposed to"), verbo('park')),
    fl('Plan frustrado', suj('I'), aux('was going to'), verbo('call')),
    fl('Inseparable', suj('I'), verbo('look after'), suj('her')),
  ],
  table: {
    cols: ['Expresión', 'Significado', 'Ejemplo'],
    rows: [
      ['is supposed to', 'se espera / se dice', 'It is supposed to rain.'],
      ["isn't supposed to", 'prohibido', "You aren't supposed to park."],
      ['was supposed to', 'debía (y no pasó)', 'I was supposed to call.'],
      ['was going to', 'plan frustrado', 'I was going to call.'],
      ['look after', 'cuidar', 'I look after my niece.'],
    ],
  },
  contrastCard: {
    left: { label: 'Was supposed to — la regla o el acuerdo', example: 'I was supposed to meet him at six.', highlight: 'was supposed to' },
    right: { label: 'Was going to — mi intención', example: 'I was going to call you.', highlight: 'was going to' },
    caption: 'Was supposed to viene de un acuerdo o regla. Was going to viene de tu propio plan.',
  },
  quiz: [
    ejercicio(
      "You ___ park here. It's a no-parking zone.",
      "aren't supposed to",
      ["aren't suppose to", "don't supposed to", 'not supposed to'],
      "La negativa de be supposed to lleva el auxiliar be + not y supposed con -d: «aren't supposed to». Las otras formas están mal escritas o sin auxiliar."
    ),
    ejercicio(
      'I ___ call you yesterday, but I lost my phone.',
      'was going to',
      ['am going to', 'was go to', 'would to'],
      'Un plan del pasado que no se cumplió se expresa con was going to + verbo base. am going to es presente y las otras no existen.'
    ),
    ejercicio(
      'The train is ___ arrive at eight, but it is late.',
      'supposed to',
      ['suppose to', 'supposing to', 'supposed'],
      'La expresión es be supposed to + verbo base. suppose to, supposing to y supposed solo no son formas correctas.'
    ),
    ejercicio(
      'I ran ___ an old friend at the supermarket.',
      'into',
      ['up', 'at', 'to'],
      'El phrasal verb para encontrarse por casualidad con alguien es run into. run up, run at y run to no tienen ese significado.'
    ),
    ejercicio(
      'Choose the correct sentence.',
      'She looked after the children.',
      ['She looked the children after.', 'She looked them after.', 'She after looked the children.'],
      'Look after es un phrasal verb inseparable: el objeto va siempre después. Las otras opciones separan o cambian el orden.'
    ),
  ],
  flashcards: [
    tarjeta('Be supposed to', 'Se espera / se dice / regla.\nIt is supposed to rain. · You are not supposed to park here.'),
    tarjeta('Was supposed to', 'Lo que debía pasar (y quizás no pasó).\nI was supposed to call him, but I forgot.'),
    tarjeta('Was going to', 'Un plan que no se cumplió.\nI was going to travel, but it rained.'),
    tarjeta('Inseparables', 'El objeto siempre va después.\nlook after her · run into him · take after her mother'),
    tarjeta('Tres partes', 'put up with · get on with · run out of · come up with\nlook forward to · look up to · catch up with'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "You're late! The meeting was supposed to start ten minutes ago.", translation: '¡Llegas tarde! La reunión se suponía que empezaba hace diez minutos.' },
    { speaker: 'user', text: "I know, sorry. I was going to leave earlier, but my car broke down.", translation: 'Lo sé, perdón. Iba a salir más temprano, pero se me averió el auto.' },
    { speaker: 'other', text: "Don't worry. The boss isn't here yet. He's supposed to arrive at ten.", translation: 'No te preocupes. El jefe todavía no llegó. Se supone que llega a las diez.' },
    { speaker: 'user', text: "Good. I ran into a colleague on the way, so I wasn't alone.", translation: 'Bien. Me encontré con un colega en el camino, así que no estuve solo.' },
    { speaker: 'other', text: "We ran out of coffee, too. I can't put up with a meeting without coffee!", translation: 'También nos quedamos sin café. ¡No soporto una reunión sin café!' },
    { speaker: 'user', text: "I'll go and look for some. I came across a shop nearby.", translation: 'Iré a buscar. Encontré una tienda cerca.' },
  ],
  readingText: {
    title: 'The wrong day',
    body: "Last Saturday I was supposed to meet my cousins at the park. We were going to have a picnic, but nobody told me that the park was closed for repairs. When I arrived, a guard said, \"You aren't supposed to be here.\" I ran into a neighbor who was also confused. We came up with a plan: we would have the picnic at my place. It was supposed to be sunny, but it started to rain, so we ate indoors. My cousins take after my grandmother: they get on with everybody and they never put up with a bad mood.",
    translation:
      'El sábado pasado debía encontrarme con mis primos en el parque. Íbamos a hacer un picnic, pero nadie me avisó que el parque estaba cerrado por reparaciones. Cuando llegué, un guardia dijo: «No se supone que esté aquí». Me encontré con un vecino que también estaba confundido. Se nos ocurrió un plan: haríamos el picnic en mi casa. Se suponía que haría sol, pero empezó a llover, así que comimos adentro. Mis primos se parecen a mi abuela: se llevan bien con todos y nunca soportan un mal humor.',
  },
  tips: [
    "Be supposed to + verbo base: se espera / se dice / es la regla. La negativa es «aren't supposed to».",
    "Was / were supposed to y was / were going to hablan de lo que debía o iba a pasar y muchas veces no pasó.",
    "Los phrasal verbs inseparables no se separan: «look after her», no «look her after».",
    "Los de tres partes (put up with, get on with, run out of) siempre son inseparables.",
  ],
  dailyWords: palabras('rule', 'meeting', 'plan', 'neighbor', 'reason', 'attention'),
  relacionados: [
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
    { etiqueta: '📖 Gramática: Verbos Frasales (Phrasal Verbs)', ruta: '/gramatica/concepto/verbos-frasales-phrasal-verbs' },
  ],
};

// ─── Unidad 5 (id 117) · Pasiva de modales; get passive; catch + persona + -ing ───

const UNIDAD_117: Unit = {
  title: 'Passive Modals, Get Passive vs Be Passive, Catch + Person + -ing',
  topic: BLOQUE_B2_2,
  level: 'B2',
  explain: [
    teoria(
      '1 · La voz pasiva de los verbos modales',
      "Se forma con modal + be + participio pasado:\n\n• must be done · can be seen · should be told\n• will be finished · might be cancelled · has to be paid\n\n• Active: You must finish this form by Friday.\n• Passive: This form must be finished by Friday.\n\nEl modal no cambia y be va siempre en forma base.",
      [
        ['This form must be finished by Friday.', 'Este formulario debe terminarse antes del viernes.'],
        ['The stars can be seen clearly tonight.', 'Las estrellas se pueden ver claramente esta noche.'],
        ['The match might be cancelled.', 'El partido podría cancelarse.'],
        ['You should be told the truth.', 'Deberían decirte la verdad.'],
      ]
    ),
    teoria(
      '2 · Negativa y preguntas con modales pasivos',
      "• Negativa: not después del modal → «The door can't be opened» · «It mustn't be forgotten».\n• Pregunta: el modal va antes del sujeto → «Can it be repaired?» · «Should this be signed?».\n• Información: «How can this be done?» · «When will it be finished?».\n\nRespuesta corta: Yes, it can. · No, it can't.",
      [
        ["The door can't be opened.", 'La puerta no se puede abrir.'],
        ['Can it be repaired?', '¿Se puede reparar?'],
        ['How can this be done?', '¿Cómo se puede hacer esto?'],
        ['When will it be finished?', '¿Cuándo estará terminado?'],
      ]
    ),
    teoria(
      '3 · Modales pasivos en el pasado',
      "Para el pasado se usa modal + have been + participio:\n\n• The window should have been repaired. (debió repararse)\n• He could have been killed. (pudo haber muerto)\n• The letter might have been lost.\n• It must have been stolen.\n\nSe usa para críticas, deducciones y posibilidades sobre el pasado.",
      [
        ['The window should have been repaired.', 'La ventana debió haberse reparado.'],
        ['He could have been killed.', 'Él pudo haber muerto.'],
        ['The letter might have been lost.', 'La carta pudo haberse perdido.'],
        ['It must have been stolen.', 'Seguro que se la robaron.'],
      ]
    ),
    teoria(
      '4 · Be passive y get passive',
      "Hay dos pasivas: la normal (be + participio) y la informal con get (get + participio).\n\n• Be passive: «The window was broken» · «He was fired».\n• Get passive: «The window got broken» · «He got fired».\n\nGet pone el foco en el cambio o suceso y suena informal. Be es neutral y sirve también para describir estados y en textos formales.",
      [
        ['The window was broken.', 'La ventana fue rota.'],
        ['The window got broken.', 'La ventana se rompió.'],
        ['He was fired last week.', 'Lo despidieron la semana pasada.'],
        ['He got fired last week.', 'Lo echaron la semana pasada.'],
      ]
    ),
    teoria(
      '5 · Cuándo se usa get passive',
      "Se usa get passive para:\n• Cosas inesperadas, accidentes o que afectan a alguien: get hurt · get lost · get stolen · get fired.\n• Procesos y cambios de estado: get married · get divorced · get dressed · get promoted · get paid.\n\nNo se usa get con verbos de estado (no «She got loved»). No admite agente fácilmente: se prefiere be + by. «He was hit by a car» (más natural que «got hit by a car by…»).",
      [
        ['She got hurt in the accident.', 'Ella resultó herida en el accidente.'],
        ['They got married in June.', 'Se casaron en junio.'],
        ['I got lost on my way here.', 'Me perdí en el camino.'],
        ['He got promoted last year.', 'Lo ascendieron el año pasado.'],
      ]
    ),
    teoria(
      '6 · Get passive: negativa y pregunta',
      "Get passive se comporta como un verbo normal: necesita do / does / did en negativas y preguntas.\n\n• Negativa: «He didn't get invited» · «Many people don't get paid on time».\n• Pregunta: «Did you get paid?» · «Do they get fired often?».\n\nCon be passive no se usa do: «Was he invited?».",
      [
        ["He didn't get invited to the party.", 'No lo invitaron a la fiesta.'],
        ["Many people don't get paid on time.", 'Mucha gente no cobra a tiempo.'],
        ['Did you get paid?', '¿Te pagaron?'],
        ['Do they get fired often?', '¿Los despiden a menudo?'],
      ]
    ),
    teoria(
      '7 · Catch + persona + -ing',
      "Catch + persona + -ing significa sorprender a alguien haciendo algo (generalmente malo o privado):\n\n• I caught him stealing money.\n• She caught me reading her diary.\n• The teacher caught them cheating.\n• Don't let anyone catch you smoking.\n\nSe forma catch + objeto + verbo-ing. Es distinto de catch + sustantivo (catch a bus, catch a cold).",
      [
        ['I caught him stealing money.', 'Lo sorprendí robando dinero.'],
        ['She caught me reading her diary.', 'Me sorprendió leyendo su diario.'],
        ['The teacher caught them cheating.', 'El profesor los sorprendió copiando.'],
        ["Don't let anyone catch you smoking.", 'No dejes que nadie te vea fumando.'],
      ]
    ),
    teoria(
      '8 · See, hear, watch + persona + -ing / base',
      "📖 Del libro: con verbos de percepción (see, hear, watch, notice, feel) se usa objeto + base o -ing:\n\n• I saw him cross the street. (lo vi hacerlo, completo)\n• I saw him crossing the street. (lo vi en el proceso)\n• I heard her sing. · I heard her singing.\n\nCon -ing se ve parte de la acción; con base, se ve la acción completa. Catch solo usa -ing.",
      [
        ['I saw him cross the street.', 'Lo vi cruzar la calle (completo).'],
        ['I saw him crossing the street.', 'Lo vi cruzando la calle.'],
        ['I heard her singing in the shower.', 'La oí cantando en la ducha.'],
        ['We watched the sun go down.', 'Vimos ponerse el sol.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Modal pasivo', resto('It'), aux('must be'), verbo('done')),
    fl('Modal pasivo (pasado)', resto('It'), aux('should have been'), verbo('done')),
    fl('Get passive', resto('He'), aux('got'), verbo('fired')),
    fl('Catch + -ing', suj('I'), verbo('caught'), suj('him'), verbo('stealing')),
  ],
  table: {
    cols: ['Tipo', 'Estructura', 'Ejemplo'],
    rows: [
      ['modal pasivo', 'modal + be + participio', 'It must be finished.'],
      ['modal pasivo pasado', 'modal + have been + participio', 'It should have been repaired.'],
      ['be passive', 'be + participio', 'He was fired.'],
      ['get passive', 'get + participio', 'He got fired.'],
      ['catch', 'catch + persona + -ing', 'I caught him stealing.'],
    ],
  },
  contrastCard: {
    left: { label: 'Be passive — neutral, formal', example: 'The window was broken.', highlight: 'was broken' },
    right: { label: 'Get passive — suceso, informal', example: 'The window got broken.', highlight: 'got broken' },
    caption: 'Get passive enfatiza el suceso o el cambio y es informal. Be passive es neutral.',
  },
  quiz: [
    ejercicio(
      'This form ___ by Friday. (must)',
      'must be completed',
      ['must complete', 'must be complete', 'must completed'],
      'La pasiva de un modal es modal + be + participio: must be completed. Las demás formas no tienen la estructura correcta.'
    ),
    ejercicio(
      'The match ___ because of the rain. (might)',
      'might be cancelled',
      ['might cancel', 'might be cancel', 'might cancelled'],
      'La pasiva de un modal es modal + be + participio: might be cancelled. Las otras opciones están mal formadas.'
    ),
    ejercicio(
      'He ___ fired last week. (informal, unexpected)',
      'got',
      ['was got', 'has get', 'did get fire'],
      'La pasiva informal de un suceso se forma con get + participio: «He got fired». Las otras opciones no son formas correctas.'
    ),
    ejercicio(
      'Our teacher caught us ___ in the exam.',
      'cheating',
      ['cheat', 'to cheat', 'cheated'],
      'Catch + persona + -ing: caught us cheating. cheat, to cheat y cheated no se usan con catch en esta estructura.'
    ),
    ejercicio(
      'The report can ___ by email.',
      'be sent',
      ['send', 'sent', 'be sending'],
      'La pasiva de un modal es modal + be + participio: can be sent. send, sent y be sending no forman la pasiva.'
    ),
  ],
  flashcards: [
    tarjeta('Pasiva de modales', 'modal + be + participio\nIt must be finished. · It can\'t be repaired.'),
    tarjeta('Modales pasivos en pasado', 'modal + have been + participio\nIt should have been repaired. · He could have been killed.'),
    tarjeta('Get passive', 'get + participio: informal, sucesos y cambios\nget hurt · get lost · get married · get fired'),
    tarjeta('Be o get', 'be: neutral y formal (The window was broken).\nget: suceso informal (The window got broken).'),
    tarjeta('Catch + persona + -ing', 'Sorprender a alguien haciendo algo.\nI caught him stealing. · She caught me reading her diary.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Did you hear what happened at the office?', translation: '¿Escuchaste qué pasó en la oficina?' },
    { speaker: 'user', text: 'No. Somebody got fired, right?', translation: 'No. A alguien lo despidieron, ¿verdad?' },
    { speaker: 'other', text: 'Yes. The manager caught him copying client files. He should have been warned earlier.', translation: 'Sí. El gerente lo sorprendió copiando archivos de clientes. Debieron haberle advertido antes.' },
    { speaker: 'user', text: "Wow. These files can't be shared outside the company. It must have been a serious problem.", translation: 'Vaya. Estos archivos no se pueden compartir fuera de la empresa. Debió de ser un problema serio.' },
    { speaker: 'other', text: "Yes, and it could have been much worse. The matter will be investigated next week.", translation: 'Sí, y pudo haber sido mucho peor. El asunto será investigado la próxima semana.' },
    { speaker: 'user', text: 'I hope nobody else gets hurt by this.', translation: 'Espero que nadie más salga perjudicado por esto.' },
  ],
  readingText: {
    title: 'A night at the museum',
    body: "Last Tuesday a painting was stolen from the city museum. The guard said he had caught a man hiding in the garden, but the man got away. The police say the painting must have been taken at night, because the alarm was turned off. It can be seen on the security video that two people entered the building. The painting might be sold abroad, but it will be recognized because it is very famous. The museum manager said, \"The doors should have been locked, and the guard shouldn't have been left alone.\" Nobody got hurt, but the museum has got a big problem.",
    translation:
      'El martes pasado robaron un cuadro del museo de la ciudad. El guardia dijo que había sorprendido a un hombre escondido en el jardín, pero el hombre se escapó. La policía dice que el cuadro debió de ser sustraído de noche, porque la alarma estaba apagada. En el video de seguridad se puede ver que dos personas entraron al edificio. El cuadro podría venderse en el extranjero, pero será reconocido porque es muy famoso. El gerente del museo dijo: «Las puertas debieron haber estado cerradas y no debió dejarse solo al guardia». Nadie resultó herido, pero el museo tiene un gran problema.',
  },
  tips: [
    "La pasiva de un modal: modal + be + participio («must be done»). En pasado: modal + have been + participio.",
    "Get passive es informal y se usa para sucesos y cambios: get fired, get lost, get married.",
    "Con get passive las negativas y preguntas necesitan do / did: «Did you get paid?».",
    "Catch + persona + -ing sorprende a alguien haciendo algo: «I caught him stealing».",
  ],
  dailyWords: palabras('police officer', 'injury', 'museum', 'problem', 'risk', 'trouble'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: Expresiones Modales', ruta: '/gramatica/concepto/expresiones-modales-semi-modals' },
  ],
};

// ─── Unidad 6 (id 118) · Pasado perfecto; respuestas cortas con So y Neither ───

const UNIDAD_118: Unit = {
  title: 'Past Perfect and Short Answers with So and Neither',
  topic: BLOQUE_B2_2,
  level: 'B2',
  explain: [
    teoria(
      '1 · Pasado perfecto: la forma',
      "Se forma con had + participio pasado. Es igual para todas las personas:\n\n• I had finished. · She had left. · They had arrived.\n\nContracciones: I'd, she'd, they'd. Negativa: hadn't + participio. Pregunta: Had + sujeto + participio.\n\nEl participio de los irregulares: gone, seen, taken, written, eaten… (los mismos que en el presente perfecto).",
      [
        ['I had finished my homework.', 'Había terminado mi tarea.'],
        ['She had left before I arrived.', 'Ella se había ido antes de que yo llegara.'],
        ["They hadn't arrived yet.", 'Todavía no habían llegado.'],
        ['Had you seen him before?', '¿Lo habías visto antes?'],
      ]
    ),
    teoria(
      '2 · Cuándo se usa: lo que pasó antes de otro hecho del pasado',
      "El pasado perfecto marca una acción anterior a otra acción del pasado:\n\n• When I arrived, the film had already started. (1.º empezó; 2.º llegué)\n• She was sad because she had lost her keys.\n• I couldn't open the door because I had forgotten my key.\n\nSin el pasado perfecto, el orden de los hechos puede cambiar: «When I arrived, the film started» (empezó después de que llegué).",
      [
        ['When I arrived, the film had already started.', 'Cuando llegué, la película ya había empezado.'],
        ['She was sad because she had lost her keys.', 'Estaba triste porque había perdido sus llaves.'],
        ["I couldn't open the door because I had forgotten my key.", 'No pude abrir la puerta porque había olvidado mi llave.'],
        ['When I arrived, the film started.', 'Cuando llegué, empezó la película.'],
      ]
    ),
    teoria(
      '3 · Palabras que acompañan al pasado perfecto',
      "Estas palabras se usan con frecuencia:\n\n• already (ya) · just (acababa de) · never… before (nunca antes)\n• by the time (para cuando) · before · after · until\n• when · as soon as (con un hecho posterior)\n\n«By the time we arrived, they had left.» · «I had never seen snow before.» · «After he had eaten, he went out.»",
      [
        ['By the time we arrived, they had left.', 'Para cuando llegamos, ya se habían ido.'],
        ['I had never seen snow before.', 'Nunca antes había visto nieve.'],
        ['After he had eaten, he went out.', 'Después de comer, salió.'],
        ['She had just gone out when I called.', 'Acababa de salir cuando llamé.'],
      ]
    ),
    teoria(
      '4 · Pasado perfecto o pasado simple',
      "• Dos hechos en orden: si se cuentan en el orden en que pasaron, basta el pasado simple: «He opened the door and went in».\n• Para marcar que uno fue ANTES de otro y que eso importa, el pasado perfecto: «When he went in, she had already left».\n\nCon before y after el orden ya es claro, y el pasado perfecto es opcional: «After he (had) eaten, he went out».",
      [
        ['He opened the door and went in.', 'Abrió la puerta y entró.'],
        ['When he went in, she had already left.', 'Cuando entró, ella ya se había ido.'],
        ['After he had eaten, he went out.', 'Después de comer, salió.'],
        ['After he ate, he went out.', 'Después de comer, salió.'],
      ]
    ),
    teoria(
      '5 · Pasado perfecto continuo',
      "Had been + verbo-ing muestra una actividad que estaba en curso antes de otro momento del pasado:\n\n• She was tired because she had been working all day.\n• When he arrived, we had been waiting for an hour.\n• The ground was wet. It had been raining.\n\nEs el \"pasado\" del presente perfecto continuo.",
      [
        ['She was tired because she had been working all day.', 'Estaba cansada porque había estado trabajando todo el día.'],
        ['When he arrived, we had been waiting for an hour.', 'Cuando llegó, llevábamos una hora esperando.'],
        ['The ground was wet. It had been raining.', 'El suelo estaba mojado. Había estado lloviendo.'],
        ["I hadn't been sleeping well.", 'No había estado durmiendo bien.'],
      ]
    ),
    teoria(
      '6 · Respuestas cortas de acuerdo: So…',
      "Para decir «yo también» después de una frase AFIRMATIVA se usa So + auxiliar + sujeto. El auxiliar es el mismo de la frase original:\n\n• I love music. → So do I.\n• She was tired. → So was I.\n• I've seen it. → So have I.\n• He can swim. → So can she.\n• I had never been there. → So had I.\n\nEl orden es siempre auxiliar + sujeto, no al revés.",
      [
        ['I love music. So do I.', 'Me encanta la música. A mí también.'],
        ['She was tired. So was I.', 'Ella estaba cansada. Yo también.'],
        ["I've seen it. So have I.", 'Lo he visto. Yo también.'],
        ['He can swim. So can she.', 'Él sabe nadar. Ella también.'],
      ]
    ),
    teoria(
      '7 · Respuestas cortas de acuerdo: Neither / Nor…',
      "Para decir «yo tampoco» después de una frase NEGATIVA se usa Neither (o Nor) + auxiliar + sujeto. Neither ya es negativo: el auxiliar va en afirmativo:\n\n• I don't like fish. → Neither do I.\n• She wasn't there. → Neither was he.\n• I haven't finished. → Neither have I.\n• He can't drive. → Nor can she.\n\n⚠️ Ojo: «Neither don't I» es incorrecto (doble negación).",
      [
        ["I don't like fish. Neither do I.", 'No me gusta el pescado. A mí tampoco.'],
        ["She wasn't there. Neither was he.", 'Ella no estaba ahí. Él tampoco.'],
        ["I haven't finished. Neither have I.", 'No he terminado. Yo tampoco.'],
        ["He can't drive. Nor can she.", 'Él no sabe manejar. Ella tampoco.'],
      ]
    ),
    teoria(
      '8 · Estar en desacuerdo y las formas informales',
      "• Desacuerdo: se repite el auxiliar con la polaridad contraria: «I love it. — I don't.» · «I can't swim. — I can.»\n• Informales: «Me too» · «Me neither» · «Same here» · «I do too» · «I don't either».\n\nCon el pasado perfecto: «I had never been to Paris. — Neither had I» (acuerdo) · «I had. I went in 2010» (desacuerdo).",
      [
        ["I love it. I don't.", 'Me encanta. A mí no.'],
        ["I can't swim. I can.", 'No sé nadar. Yo sí.'],
        ['I had never been to Paris. Neither had I.', 'Nunca había estado en París. Yo tampoco.'],
        ["I'm hungry. Me too.", 'Tengo hambre. Yo también.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pasado perfecto', suj('She'), aux('had'), verbo('left')),
    fl('Pasado perfecto continuo', suj('She'), aux('had been'), verbo('working')),
    fl('So + auxiliar', resto('So'), aux('do'), suj('I')),
    fl('Neither + auxiliar', resto('Neither'), aux('do'), suj('I')),
  ],
  table: {
    cols: ['Frase', 'Acuerdo', 'Desacuerdo'],
    rows: [
      ['I love it.', 'So do I.', "I don't."],
      ['She was tired.', 'So was I.', 'I wasn\'t.'],
      ["I've seen it.", 'So have I.', "I haven't."],
      ["I don't like it.", 'Neither do I.', 'I do.'],
      ["I hadn't been there.", 'Neither had I.', 'I had.'],
    ],
  },
  contrastCard: {
    left: { label: 'Pasado perfecto — antes', example: 'When I arrived, the film had started.', highlight: 'had started' },
    right: { label: 'Pasado simple — después', example: 'When I arrived, the film started.', highlight: 'started' },
    caption: 'Con el pasado perfecto el hecho ya había pasado. Con el pasado simple, pasó a continuación.',
  },
  quiz: [
    ejercicio(
      'When I arrived, the film ___ already started.',
      'had',
      ['has', 'was', 'did'],
      'La película empezó antes de que llegara: pasado perfecto con had. has es presente perfecto, was y did no forman el pasado perfecto.'
    ),
    ejercicio(
      'She was sad because she ___ her keys.',
      'had lost',
      ['was losing', 'loses', 'has lost'],
      'Perder las llaves fue anterior a estar triste: pasado perfecto, had lost. was losing, loses y has lost no marcan esa relación.'
    ),
    ejercicio(
      'By the time we arrived, they ___ left.',
      'had',
      ['have', 'were', 'did'],
      'By the time + pasado simple pide pasado perfecto en la otra cláusula: had left. have, were y did no forman el pasado perfecto.'
    ),
    ejercicio(
      "A: I've never been to Japan. B: ___ I.",
      'Neither have',
      ['So have', 'Neither do', 'So do'],
      'La frase de A es negativa y con have, así que se responde Neither have I. So es para frases afirmativas y do no repite el auxiliar de la frase.'
    ),
    ejercicio(
      'A: I loved the film. B: ___ I.',
      'So did',
      ['Neither did', 'So do', 'Neither do'],
      'La frase de A es afirmativa y en pasado, así que se responde So did I. Neither es para negativas y do es presente.'
    ),
  ],
  flashcards: [
    tarjeta('Pasado perfecto', 'had + participio\nWhen I arrived, the film had already started.'),
    tarjeta('Palabras clave', 'already · just · never… before · by the time · after · before\nBy the time we arrived, they had left.'),
    tarjeta('Pasado perfecto continuo', 'had been + -ing: actividad en curso antes de otro momento.\nShe had been working all day.'),
    tarjeta('So + auxiliar + sujeto', 'Acuerdo en afirmativas: I love it. So do I. · I\'ve seen it. So have I.'),
    tarjeta('Neither + auxiliar + sujeto', "Acuerdo en negativas: I don't like it. Neither do I.\nNeither ya es negativo: no «Neither don't I»."),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Why were you so late yesterday?', translation: '¿Por qué llegaste tan tarde ayer?' },
    { speaker: 'user', text: "My train had already left when I got to the station. I had forgotten to check the timetable.", translation: 'Mi tren ya se había ido cuando llegué a la estación. Había olvidado revisar el horario.' },
    { speaker: 'other', text: "I've done that too. I had never missed a train before last month.", translation: 'Yo también lo he hecho. Nunca había perdido un tren antes del mes pasado.' },
    { speaker: 'user', text: "So have I. I hadn't been that stressed in years.", translation: 'Yo también. No me había estresado tanto en años.' },
    { speaker: 'other', text: "I don't like waiting for trains. — Neither do I.", translation: 'No me gusta esperar trenes. — A mí tampoco.' },
    { speaker: 'user', text: "I love traveling by car. — So do I!", translation: 'Me encanta viajar en auto. — ¡A mí también!' },
  ],
  readingText: {
    title: 'The surprise',
    body: "When Laura got home, she noticed that the lights were on. She had left the house in the morning, and she was sure she had turned them off. Her heart was beating fast. She opened the door slowly, and a crowd shouted \"Surprise!\" Her friends had been waiting for an hour, and they had prepared a huge cake. Laura hadn't remembered that it was her birthday. \"I had forgotten it!\" she said. \"So had I,\" said her brother, \"until I saw the cake.\" \"I don't believe it,\" said Laura. \"Neither do we,\" laughed everyone.",
    translation:
      'Cuando Laura llegó a casa, notó que las luces estaban encendidas. Había salido de la casa en la mañana y estaba segura de que las había apagado. Su corazón latía rápido. Abrió la puerta despacio y una multitud gritó «¡Sorpresa!». Sus amigos llevaban una hora esperando y habían preparado un pastel enorme. Laura no había recordado que era su cumpleaños. «¡Lo había olvidado!», dijo. «Yo también», dijo su hermano, «hasta que vi el pastel». «No lo puedo creer», dijo Laura. «Nosotros tampoco», rieron todos.',
  },
  tips: [
    "Pasado perfecto = lo que había pasado ANTES de otro hecho del pasado: «When I arrived, the film had started».",
    "Con by the time, after y before, el pasado perfecto marca el hecho anterior.",
    "So + auxiliar + sujeto para acuerdo afirmativo («So do I»). Neither + auxiliar + sujeto para negativo («Neither do I»).",
    "El auxiliar de So / Neither es el de la frase original: «I've seen it. So have I», no «So do I».",
  ],
  dailyWords: palabras('birthday', 'surprise', 'timetable', 'station', 'ticket', 'platform'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Pasado: simple, continuo y perfecto', ruta: '/gramatica/concepto/el-pasado-simple-vs-continuo-vs-perfecto' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

const FORMAS_118: FormasUnidad = {
  titulo: 'Pasado perfecto',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('had'), verbo('past participle'))],
    ejemplos: [
      ['I had finished my homework.', 'Había terminado mi tarea.'],
      ['She had left before I arrived.', 'Ella se había ido antes de que llegara.'],
      ['They had already eaten.', 'Ellos ya habían comido.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('had'), neg('not'), verbo('past participle'))],
    ejemplos: [
      ["I hadn't finished.", 'No había terminado.'],
      ["She hadn't left yet.", 'Ella todavía no se había ido.'],
      ["They hadn't eaten.", 'Ellos no habían comido.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Had'), suj('subject'), verbo('past participle'))],
    ejemplos: [
      ['Had you seen him before?', '¿Lo habías visto antes?'],
      ['Had she left?', '¿Se había ido ella?'],
      ['What had they done?', '¿Qué habían hecho?'],
    ],
  },
  nota: "Had es igual para todas las personas. Contracciones: I'd · she'd · hadn't. Respuestas cortas: Yes, I had. / No, she hadn't. Pasado perfecto continuo: had been + -ing.",
  ojo: "Con el pasado perfecto el verbo principal va en participio: «had finished», no «had finish». Y para decir cuándo, el otro hecho va en pasado simple.",
};

/** Las unidades del bloque 2, por id interno. */
export const UNIDADES_BLOQUE_2: Record<number, Unit> = {
  116: UNIDAD_116,
  117: UNIDAD_117,
  118: UNIDAD_118,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 2 que las tienen. */
export const FORMAS_BLOQUE_2: Record<number, FormasUnidad | FormasUnidad[]> = {
  118: FORMAS_118,
};
