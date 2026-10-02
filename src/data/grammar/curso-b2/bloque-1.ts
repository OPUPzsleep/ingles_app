import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import { BLOQUE_B2_1 } from '@/data/grammar/topics';
import type { FormasUnidad, Unit } from '@/types/grammar';

import { ejercicio, palabras, tarjeta, teoria } from '../curso/ayuda';

// Bloque 1 · Vidas interesantes, gustos personales y culturas (ids 113–115: Unidad 1–3 del nivel B2).

// ─── Unidad 1 (id 113) · Tiempos simples y continuos; verbo + -ing o to ───

const UNIDAD_113: Unit = {
  title: 'Simple and Continuous Verbs, Verb + -ing or To + Verb',
  topic: BLOQUE_B2_1,
  level: 'B2',
  explain: [
    teoria(
      '1 · Repaso: presente simple y presente continuo',
      "• Presente simple: rutinas, hechos, estados y horarios → «She works in a bank» · «Water boils at 100 degrees».\n• Presente continuo: lo que pasa ahora, algo temporal o un cambio → «She is working from home this week» · «Prices are rising».\n\nCon los verbos de estado (know, like, want, belong, believe) se usa el simple, incluso para hablar de ahora: «I know the answer».\n\nEl continuo con always expresa una queja: «He's always losing his keys».",
      [
        ['She works in a bank.', 'Ella trabaja en un banco.'],
        ['She is working from home this week.', 'Ella trabaja desde casa esta semana.'],
        ['Prices are rising every year.', 'Los precios suben cada año.'],
        ["He's always losing his keys.", 'Siempre está perdiendo sus llaves.'],
      ]
    ),
    teoria(
      '2 · Repaso: pasado simple, continuo y perfecto',
      "• Pasado simple: una acción terminada en un momento definido → «I met her in 2015».\n• Pasado continuo: una acción en curso en un momento del pasado, o interrumpida → «I was cooking when you called».\n• Presente perfecto: un pasado conectado con el presente → «I've lived here for ten years» · «I've lost my keys».\n• Presente perfecto continuo: duración de una actividad que sigue o acaba de terminar → «I've been studying all day».",
      [
        ['I met her in 2015.', 'La conocí en 2015.'],
        ['I was cooking when you called.', 'Estaba cocinando cuando llamaste.'],
        ["I've lived here for ten years.", 'Vivo aquí desde hace diez años.'],
        ["I've been studying all day.", 'He estado estudiando todo el día.'],
      ]
    ),
    teoria(
      '3 · Verbos con dos significados',
      "Algunos verbos cambian de significado: como estado van en simple; como acción, en continuo.\n\n• think: «I think it's great» (opinión) · «I'm thinking about moving» (considerando).\n• have: «She has a car» (tiene) · «She's having lunch» (almorzando).\n• see: «I see what you mean» (entiendo) · «I'm seeing the doctor tomorrow» (cita).\n• be: «He is kind» (es así) · «He is being kind today» (se comporta así hoy).",
      [
        ["I think it's a great idea.", 'Creo que es una gran idea.'],
        ["I'm thinking about moving abroad.", 'Estoy pensando en mudarme al extranjero.'],
        ["She's having lunch right now.", 'Ella está almorzando ahora.'],
        ["He is being very polite today.", 'Hoy se está portando muy educado.'],
      ]
    ),
    teoria(
      '4 · Contar historias: la combinación de tiempos',
      "Para contar una historia se combinan los tiempos:\n\n• Pasado continuo → el escenario y lo que estaba pasando: «It was raining and people were hurrying home».\n• Pasado simple → los hechos que hacen avanzar la historia: «Suddenly a car stopped».\n• Pasado perfecto → lo que había pasado antes: «She had forgotten her umbrella».\n\nPara contar algo en directo (chistes, anécdotas) también se usa el presente simple: «So I walk into the room and everybody stops talking».",
      [
        ['It was raining and people were hurrying home.', 'Estaba lloviendo y la gente se apuraba a casa.'],
        ['Suddenly a car stopped next to me.', 'De repente un auto se detuvo a mi lado.'],
        ['She had forgotten her umbrella.', 'Ella había olvidado su paraguas.'],
        ['So I walk into the room and everybody stops talking.', 'Entro a la sala y todos dejan de hablar.'],
      ]
    ),
    teoria(
      '5 · Verbo + -ing o to: casi sin cambio de sentido',
      "Con like, love, hate, prefer, start, begin y continue se pueden usar -ing o to + verbo, casi con el mismo significado:\n\n• I like swimming. = I like to swim.\n• It started raining. = It started to rain.\n• She loves dancing. = She loves to dance.\n\nPero con would like / would love / would prefer se usa siempre to: «I would like to travel». Y tras start / begin en continuo se evita repetir -ing: «It's starting to rain», no «It's starting raining».",
      [
        ['I like swimming.', 'Me gusta nadar.'],
        ['I like to swim in the morning.', 'Me gusta nadar por la mañana.'],
        ['It started raining.', 'Empezó a llover.'],
        ["It's starting to rain.", 'Está empezando a llover.'],
      ]
    ),
    teoria(
      '6 · Remember y forget: -ing o to cambian el sentido',
      "• remember / forget + to + verbo → acordarse de hacer algo (todavía no lo has hecho): «Remember to lock the door».\n• remember / forget + -ing → recordar algo que ya hiciste: «I remember locking the door» (lo hice y lo recuerdo).\n\nLo mismo con forget: «I forgot to lock the door» (no lo hice) · «I'll never forget meeting her» (lo hice y no lo olvido).",
      [
        ['Remember to lock the door.', 'Acuérdate de cerrar la puerta con llave.'],
        ['I remember locking the door.', 'Recuerdo haber cerrado la puerta con llave.'],
        ['I forgot to buy milk.', 'Olvidé comprar leche.'],
        ["I'll never forget meeting her.", 'Nunca olvidaré haberla conocido.'],
      ]
    ),
    teoria(
      '7 · Stop, try, regret y go on',
      "• stop + -ing → dejar de hacer algo: «He stopped smoking».\n• stop + to + verbo → detenerse para hacer algo: «He stopped to smoke».\n• try + to + verbo → intentar (esfuerzo): «I tried to open the door».\n• try + -ing → probar como experimento: «Try turning it off and on again».\n• regret + -ing → lamentar lo que hiciste: «I regret telling her».\n• regret + to + verbo → lamentar tener que decir algo: «I regret to inform you».\n• go on + -ing → seguir haciendo; go on + to → pasar a otra cosa.",
      [
        ['He stopped smoking last year.', 'Dejó de fumar el año pasado.'],
        ['He stopped to smoke a cigarette.', 'Se detuvo para fumar un cigarrillo.'],
        ['Try turning it off and on again.', 'Prueba apagarlo y encenderlo otra vez.'],
        ['I regret telling her the secret.', 'Lamento haberle contado el secreto.'],
      ]
    ),
    teoria(
      '8 · Otros verbos que cambian: mean, need, like',
      "• mean + to + verbo → tener la intención: «I didn't mean to hurt you».\n• mean + -ing → implicar: «This job means working at weekends».\n• like + -ing → disfrutar en general: «I like cooking».\n• like + to + verbo → preferir hacer algo por costumbre o buena idea: «I like to check my email before work».\n• need + to + verbo → necesitar hacer; need + -ing → hay que hacerlo (pasivo): «The car needs washing».",
      [
        ["I didn't mean to hurt you.", 'No quise lastimarte.'],
        ['This job means working at weekends.', 'Este trabajo implica trabajar los fines de semana.'],
        ['I like to check my email before work.', 'Me gusta revisar mi correo antes de trabajar.'],
        ['The car needs washing.', 'Al auto hay que lavarlo.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Recordar algo hecho', suj('I'), verbo('remember'), verbo('locking')),
    fl('Acordarse de hacer', verbo('Remember'), resto('to'), verbo('lock')),
    fl('Dejar de hacer', suj('He'), verbo('stopped'), verbo('smoking')),
    fl('Detenerse para hacer', suj('He'), verbo('stopped'), resto('to'), verbo('smoke')),
  ],
  table: {
    cols: ['Verbo', '+ -ing', '+ to + verbo'],
    rows: [
      ['remember', 'recordar lo hecho', 'acordarse de hacer'],
      ['forget', 'olvidar lo hecho', 'olvidar hacer'],
      ['stop', 'dejar de hacer', 'detenerse para hacer'],
      ['try', 'probar algo', 'intentar'],
      ['regret', 'lamentar lo hecho', 'lamentar tener que decir'],
      ['mean', 'implicar', 'tener la intención'],
    ],
  },
  contrastCard: {
    left: { label: 'Remember + -ing — ya pasó', example: 'I remember locking the door.', highlight: 'locking' },
    right: { label: 'Remember + to — pendiente', example: 'Remember to lock the door.', highlight: 'to lock' },
    caption: 'Con -ing se habla de algo que ya se hizo. Con to, de algo que hay que hacer.',
  },
  quiz: [
    ejercicio(
      'I clearly remember ___ the door before leaving. (lock)',
      'locking',
      ['to lock', 'lock', 'locked'],
      'Se recuerda una acción que ya se hizo: remember + -ing. remember to lock significaría acordarse de hacerlo en el futuro.'
    ),
    ejercicio(
      'Please remember ___ the milk on your way home.',
      'to buy',
      ['buying', 'buy', 'bought'],
      'Se pide que no se olvide hacer algo pendiente: remember + to + verbo. remember buying hablaría de algo que ya se compró.'
    ),
    ejercicio(
      "I'm trying to give up coffee. I stopped ___ it last week. (drink)",
      'drinking',
      ['to drink', 'drink', 'drank'],
      'Dejó de tomar café: stop + -ing significa dejar de hacer algo. stop to drink significaría detenerse para tomar algo.'
    ),
    ejercicio(
      'I\'m sorry, I forgot ___ your book. I left it at home. (bring)',
      'to bring',
      ['bringing', 'bring', 'brought'],
      'No lo hizo: forget + to + verbo significa olvidar hacer algo. forget bringing hablaría de olvidar una acción pasada.'
    ),
    ejercicio(
      'While I ___ dinner, the phone rang.',
      'was cooking',
      ['am cooking', 'have been cooking', 'cook'],
      'La acción de fondo en curso en el pasado va en pasado continuo: was cooking. am cooking es presente, have been cooking no encaja con rang y cook no marca la duración.'
    ),
  ],
  flashcards: [
    tarjeta('Simple o continuo', 'Simple: rutinas, hechos, estados.\nContinuo: ahora, temporal, cambio. Always + continuo = queja.'),
    tarjeta('Contar historias', 'Pasado continuo: el escenario.\nPasado simple: los hechos.\nPasado perfecto: lo que había pasado antes.'),
    tarjeta('Remember y forget', 'remember to → pendiente · remember -ing → ya hecho\nforget to → no lo hice · forget -ing → ya lo hice'),
    tarjeta('Stop y try', 'stop -ing = dejar de · stop to = detenerse para\ntry to = intentar · try -ing = probar'),
    tarjeta('Like, love, hate, start', '-ing o to casi sin cambio.\nwould like → siempre to.'),
  ],
  simulatedChat: [
    { speaker: 'other', text: "You look excited. What are you doing this summer?", translation: 'Te ves emocionado. ¿Qué haces este verano?' },
    { speaker: 'user', text: "I'm going to Japan! I'm thinking about staying for a month. I've been saving for two years.", translation: '¡Voy a Japón! Estoy pensando en quedarme un mes. Llevo dos años ahorrando.' },
    { speaker: 'other', text: 'Great! Remember to book your hotel early. I once forgot to do it and paid a fortune.', translation: '¡Genial! Acuérdate de reservar tu hotel con tiempo. Una vez olvidé hacerlo y pagué una fortuna.' },
    { speaker: 'user', text: "Good tip. I remember reading that Tokyo is expensive in August.", translation: 'Buen consejo. Recuerdo haber leído que Tokio es caro en agosto.' },
    { speaker: 'other', text: 'Try visiting in September, then. The weather is better and it stopped being so crowded.', translation: 'Entonces prueba ir en septiembre. El clima es mejor y dejó de estar tan lleno.' },
    { speaker: 'user', text: "I'll try to change my dates. Thanks!", translation: 'Intentaré cambiar mis fechas. ¡Gracias!' },
  ],
  readingText: {
    title: 'A strange evening',
    body: "It was a cold November evening, and I was walking home when I noticed that someone was following me. I stopped to look back, but the street was empty. I tried to stay calm and kept walking. Suddenly I remembered leaving my keys at the office, so I had to turn around. When I arrived, the building was dark. I had forgotten to ask the guard to wait. I regret not calling a friend, because I ended up sitting on the steps for two hours. It means being more careful in the future, and I'll never forget that night.",
    translation:
      'Era una fría tarde de noviembre y caminaba a casa cuando noté que alguien me seguía. Me detuve a mirar atrás, pero la calle estaba vacía. Intenté mantener la calma y seguí caminando. De repente recordé haber dejado mis llaves en la oficina, así que tuve que dar la vuelta. Cuando llegué, el edificio estaba a oscuras. Había olvidado pedirle al guardia que esperara. Lamento no haber llamado a un amigo, porque terminé sentado en las escaleras dos horas. Significa ser más cuidadoso en el futuro y nunca olvidaré esa noche.',
  },
  tips: [
    "Con verbos de estado (know, like, want, belong) usa el presente simple, incluso para hablar de ahora.",
    "Remember to + verbo = acordarse de hacer algo pendiente. Remember + -ing = recordar algo que ya hiciste.",
    "Stop + -ing = dejar de hacer. Stop to + verbo = detenerse para hacer algo.",
    "Con would like, would love y would prefer se usa siempre to: «I would like to travel».",
  ],
  dailyWords: palabras('memory', 'experience', 'habit', 'dream', 'story', 'moment'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Presente simple vs. continuo', ruta: '/gramatica/concepto/el-presente-simple-vs-continuo' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
  ],
};

// ─── Unidad 2 (id 114) · Comparaciones con as… as; preguntas negativas ───

const UNIDAD_114: Unit = {
  title: 'Comparisons with (Not) As… As and Negative Questions',
  topic: BLOQUE_B2_1,
  level: 'B2',
  explain: [
    teoria(
      '1 · As… as: igualdad',
      "Para decir que dos cosas son iguales se usa as + adjetivo (o adverbio) + as:\n\n• She is as tall as her brother.\n• This phone is as good as that one.\n• He runs as fast as I do.\n\nEl primer as es un adverbio («tan») y el segundo une la comparación («como»). Después del segundo as se puede usar un pronombre objeto (as me) o sujeto con auxiliar (as I do).",
      [
        ['She is as tall as her brother.', 'Ella es tan alta como su hermano.'],
        ['This phone is as good as that one.', 'Este teléfono es tan bueno como aquel.'],
        ['He runs as fast as I do.', 'Él corre tan rápido como yo.'],
        ['I am as tired as you.', 'Estoy tan cansado como tú.'],
      ]
    ),
    teoria(
      '2 · Not as… as: menos que',
      "Not as… as dice que algo tiene MENOS de una cualidad. Equivale a un comparativo con less:\n\n• The test wasn't as difficult as I expected. (= less difficult than)\n• This city isn't as big as Lima.\n• She doesn't speak as fast as her sister.\n\nEn inglés formal también se oye «not so… as»: «It isn't so cold as yesterday».",
      [
        ["The test wasn't as difficult as I expected.", 'El examen no fue tan difícil como esperaba.'],
        ["This city isn't as big as Lima.", 'Esta ciudad no es tan grande como Lima.'],
        ["She doesn't speak as fast as her sister.", 'Ella no habla tan rápido como su hermana.'],
        ["It isn't so cold as yesterday.", 'No hace tanto frío como ayer.'],
      ]
    ),
    teoria(
      '3 · Just, nearly, half, twice, three times',
      "Antes de as… as se pueden agregar palabras que precisan la comparación:\n\n• just as → exactamente igual: «She is just as clever as he is».\n• nearly / almost as → casi igual: «It is nearly as good».\n• not quite as → un poco menos.\n• half as / twice as / three times as → proporciones: «This costs twice as much as that» · «He earns half as much as I do».\n\nCon sustantivos: as much (incontables) / as many (contables) + as.",
      [
        ['She is just as clever as he is.', 'Ella es igual de lista que él.'],
        ['This costs twice as much as that.', 'Esto cuesta el doble que aquello.'],
        ['He earns half as much as I do.', 'Él gana la mitad de lo que gano yo.'],
        ['I have as many books as you.', 'Tengo tantos libros como tú.'],
      ]
    ),
    teoria(
      '4 · Expresiones fijas con as… as',
      "Algunas expresiones muy comunes:\n\n• as soon as possible (ASAP) → lo antes posible.\n• as much as possible / as many as possible.\n• as well as → además de.\n• as long as → siempre que.\n• the same as → igual que (la misma cosa).\n• as far as I know → que yo sepa.\n\n«Please reply as soon as possible.» · «She speaks French as well as English.»",
      [
        ['Please reply as soon as possible.', 'Responde lo antes posible.'],
        ['She speaks French as well as English.', 'Ella habla francés además de inglés.'],
        ["You can stay as long as you want.", 'Puedes quedarte todo el tiempo que quieras.'],
        ['As far as I know, he left yesterday.', 'Que yo sepa, se fue ayer.'],
      ]
    ),
    teoria(
      '5 · As o like',
      "📖 Del libro: as y like se confunden fácilmente:\n\n• like + sustantivo → parecido a: «She looks like her mother» · «It tastes like chicken».\n• as + sustantivo → en el papel o función de: «She works as a nurse» (es enfermera) · «Use it as a plate».\n\nCompara: «As your teacher, I think you should study» (soy tu profesor) · «Like your teacher, I think…» (opino igual que él).",
      [
        ['She looks like her mother.', 'Ella se parece a su madre.'],
        ['She works as a nurse.', 'Ella trabaja de enfermera.'],
        ['Use this box as a table.', 'Usa esta caja como mesa.'],
        ['It tastes like chicken.', 'Sabe a pollo.'],
      ]
    ),
    teoria(
      '6 · Preguntas negativas: la forma',
      "Una pregunta negativa empieza con un auxiliar negativo contraído (isn't, don't, haven't, can't, didn't…):\n\n• Isn't she coming?\n• Don't you like pizza?\n• Haven't you finished yet?\n• Didn't he call you?\n\nSe usan para mostrar sorpresa, para confirmar algo que ya crees, o para quejarse: «Can't you be quiet?». No se usa la forma sin contracción en conversación: «Is she not coming?» es formal.",
      [
        ["Isn't she coming?", '¿No viene ella?'],
        ["Don't you like pizza?", '¿No te gusta la pizza?'],
        ["Haven't you finished yet?", '¿Todavía no terminaste?'],
        ["Can't you be quiet?", '¿No puedes callarte?'],
      ]
    ),
    teoria(
      '7 · Cómo responder una pregunta negativa',
      "Cuidado: en inglés la respuesta depende de la REALIDAD, no de la forma de la pregunta:\n\n• Don't you like pizza? → Yes, I do. (sí me gusta) · No, I don't. (no me gusta)\n• Isn't she coming? → Yes, she is. · No, she isn't.\n• Haven't you finished? → Yes, I have. · No, I haven't.\n\nEn español decimos «sí, no me gusta», pero en inglés «Yes» siempre va con una afirmación y «No» con una negación.",
      [
        ["Don't you like pizza? Yes, I do. I love it.", '¿No te gusta la pizza? Sí me gusta. Me encanta.'],
        ["Don't you like pizza? No, I don't.", '¿No te gusta la pizza? No, no me gusta.'],
        ["Isn't she coming? Yes, she is.", '¿No viene ella? Sí, viene.'],
        ["Haven't you finished? No, I haven't.", '¿No has terminado? No, no he terminado.'],
      ]
    ),
    teoria(
      '8 · Why don\'t…? y otras preguntas negativas útiles',
      "Las preguntas negativas también sirven para sugerir o preguntar el motivo:\n\n• Why don't you come with us? (sugerencia)\n• Why didn't you tell me? (reproche)\n• Wouldn't it be better to wait? (opinión educada)\n• Aren't you tired? (¿no estás cansado?)\n\nWhy + auxiliar negativo no pregunta literalmente por qué no, sino que invita o critica.",
      [
        ["Why don't you come with us?", '¿Por qué no vienes con nosotros?'],
        ["Why didn't you tell me?", '¿Por qué no me lo dijiste?'],
        ["Wouldn't it be better to wait?", '¿No sería mejor esperar?'],
        ["Aren't you tired?", '¿No estás cansado?'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Igualdad', resto('as'), verbo('tall'), resto('as')),
    fl('Menos que', suj('It'), aux("isn't"), resto('as'), verbo('big'), resto('as')),
    fl('Pregunta negativa', aux("Don't"), suj('you'), verbo('like'), resto('it?')),
    fl('Why + negativo', resto('Why'), aux("don't"), suj('you'), verbo('come?')),
  ],
  table: {
    cols: ['Pregunta negativa', 'Es verdad', 'No es verdad'],
    rows: [
      ["Don't you like it?", 'Yes, I do.', "No, I don't."],
      ["Isn't she coming?", 'Yes, she is.', "No, she isn't."],
      ["Haven't you finished?", 'Yes, I have.', "No, I haven't."],
      ["Didn't he call?", 'Yes, he did.', "No, he didn't."],
      ["Can't you swim?", 'Yes, I can.', "No, I can't."],
    ],
  },
  contrastCard: {
    left: { label: 'As + sustantivo — función', example: 'She works as a nurse.', highlight: 'as a nurse' },
    right: { label: 'Like + sustantivo — parecido', example: 'She looks like a nurse.', highlight: 'like a nurse' },
    caption: 'As dice qué eres o qué haces. Like dice a qué te pareces.',
  },
  quiz: [
    ejercicio(
      'She is as tall ___ her brother.',
      'as',
      ['than', 'like', 'that'],
      'La igualdad se expresa con as… as: «as tall as». than es para comparativos y like y that no forman esta estructura.'
    ),
    ejercicio(
      "This test wasn't ___ difficult as I expected.",
      'as',
      ['more', 'than', 'much'],
      'Not as… as indica menos de una cualidad: «wasn\'t as difficult as». more y than son del comparativo y much no completa la estructura.'
    ),
    ejercicio(
      'Please reply as soon as ___.',
      'possible',
      ['possibly', 'possibility', 'able'],
      'La expresión fija es as soon as possible. possibly es un adverbio y possibility y able no se usan en esa expresión.'
    ),
    ejercicio(
      "A: Don't you like pizza? B: ___, I love it.",
      'Yes, I do',
      ['No, I do', "Yes, I don't", "No, I don't"],
      'Le encanta, así que la respuesta es afirmativa: «Yes, I do». «No» con una afirmación y «Yes» con una negación no son correctas en inglés.'
    ),
    ejercicio(
      "___ you come to the party? I think you'd enjoy it.",
      "Why don't",
      ['Why do', 'Why not you', "Don't why"],
      'Para sugerir algo se usa Why don\'t you…? Las otras formas no son estructuras de sugerencia en inglés.'
    ),
  ],
  flashcards: [
    tarjeta('As… as', 'igualdad: as tall as · menos: not as tall as\njust as · nearly as · twice as · half as'),
    tarjeta('As y like', 'as = función (She works as a nurse)\nlike = parecido (She looks like a nurse)'),
    tarjeta('Pregunta negativa', "Don't you like it? · Isn't she coming? · Haven't you finished?\nSorpresa, confirmación o queja."),
    tarjeta('Responder', "Se responde según la realidad.\nDon't you like it? Yes, I do (sí me gusta). No, I don't (no me gusta)."),
    tarjeta("Why don't…?", "Why don't you come with us? (sugerencia)\nWhy didn't you tell me? (reproche)"),
  ],
  simulatedChat: [
    { speaker: 'other', text: "Don't you want to come to the new restaurant with us?", translation: '¿No quieres venir con nosotros al restaurante nuevo?' },
    { speaker: 'user', text: "Yes, I do. Isn't it as expensive as the old one?", translation: 'Sí quiero. ¿No es tan caro como el anterior?' },
    { speaker: 'other', text: "No, it isn't. It's half as expensive and the food is just as good.", translation: 'No. Es la mitad de caro y la comida es igual de buena.' },
    { speaker: 'user', text: "Great. Haven't you booked a table yet?", translation: 'Genial. ¿Todavía no reservaste mesa?' },
    { speaker: 'other', text: "No, I haven't. I'll call as soon as possible.", translation: 'No. Llamaré lo antes posible.' },
    { speaker: 'user', text: "Why don't I do it? I work as a receptionist, so I'm used to it.", translation: '¿Por qué no lo hago yo? Trabajo de recepcionista, así que estoy acostumbrado.' },
  ],
  readingText: {
    title: 'Two brothers',
    body: "Tom and Jack are brothers, but they aren't as alike as people think. Tom is as tall as Jack, but he isn't nearly as sporty. Jack works as a chef and cooks twice as many dishes as his colleagues. Tom looks like their father, while Jack looks like their mother. Last week someone asked me, \"Don't you think they are very different?\" I said, \"Yes, I do.\" \"Haven't you noticed how Jack speaks as fast as he moves?\" she added. \"No, I haven't,\" I said, \"but Tom is as calm as a lake.\"",
    translation:
      'Tom y Jack son hermanos, pero no se parecen tanto como la gente piensa. Tom es tan alto como Jack, pero no es ni de cerca tan deportista. Jack trabaja de cocinero y prepara el doble de platos que sus compañeros. Tom se parece a su padre, mientras que Jack se parece a su madre. La semana pasada alguien me preguntó: «¿No crees que son muy distintos?». Dije: «Sí». «¿No has notado que Jack habla tan rápido como se mueve?», añadió. «No», dije, «pero Tom es tan tranquilo como un lago».',
  },
  tips: [
    "As… as para igualdad; not as… as para menos. Entre los dos as va el adjetivo, no el comparativo: «as tall as», no «as taller as».",
    "As = función o papel («works as a nurse»); like = parecido («looks like a nurse»).",
    "Una pregunta negativa se responde según la realidad: «Don't you like it? — Yes, I do» (sí me gusta).",
    "Why don't you…? es una sugerencia, no una pregunta literal sobre el motivo.",
  ],
  dailyWords: palabras('expensive', 'cheap', 'similar', 'different', 'same', 'difficult'),
  relacionados: [
    { etiqueta: '📖 Gramática: El Adjetivo (Adjective)', ruta: '/gramatica/concepto/el-adjetivo-adjective' },
    { etiqueta: '📖 Gramática: Verbos Auxiliares (Auxiliary Verbs)', ruta: '/gramatica/concepto/verbos-auxiliares-auxiliary-verbs' },
  ],
};

// ─── Unidad 3 (id 115) · Pasiva en presente simple; verbo + -ing y to; posición de not ───

const UNIDAD_115: Unit = {
  title: 'Present Simple Passive, More on Verb + -ing and To, the Position of Not',
  topic: BLOQUE_B2_1,
  level: 'B2',
  explain: [
    teoria(
      '1 · Presente simple pasivo: la forma',
      "Se forma con am / is / are + participio pasado. El objeto de la activa pasa a ser el sujeto de la pasiva:\n\n• Active: They make these shoes in Italy.\n• Passive: These shoes are made in Italy.\n\nSe usa cuando importa lo que le pasa a algo, no quién lo hace, o cuando el agente es desconocido o obvio.",
      [
        ['These shoes are made in Italy.', 'Estos zapatos se fabrican en Italia.'],
        ['The room is cleaned every morning.', 'La habitación se limpia todas las mañanas.'],
        ['I am paid on the last day of the month.', 'Me pagan el último día del mes.'],
        ['Coffee is grown in Colombia.', 'En Colombia se cultiva café.'],
      ]
    ),
    teoria(
      '2 · Negativa, preguntas y agente con by',
      "• Negativa: not después del auxiliar → «The office isn't cleaned at weekends».\n• Pregunta: el auxiliar va antes del sujeto → «Is the office cleaned every day?» · «Where are they made?».\n• By + agente solo si es útil: «The book is written by a famous author».\n\nCon dos objetos, cualquiera puede ser el sujeto: «I was given a book» (más natural) / «A book was given to me».",
      [
        ["The office isn't cleaned at weekends.", 'La oficina no se limpia los fines de semana.'],
        ['Is the office cleaned every day?', '¿Se limpia la oficina todos los días?'],
        ['The book is written by a famous author.', 'El libro está escrito por un autor famoso.'],
        ['I was given a book for my birthday.', 'Me regalaron un libro por mi cumpleaños.'],
      ]
    ),
    teoria(
      '3 · Verbo + preposición + -ing',
      "📖 Del libro: después de una preposición el verbo va siempre en -ing. Esto incluye verbos con preposición fija:\n\n• insist on · believe in · succeed in · apologize for · thank someone for\n• look forward to · be used to · object to\n\n«She insisted on paying.» · «I look forward to meeting you.» · «He apologized for being late.»\n\n⚠️ Ojo: en look forward to, to es una preposición, no parte del infinitivo.",
      [
        ['She insisted on paying.', 'Ella insistió en pagar.'],
        ['I look forward to meeting you.', 'Espero con ganas conocerte.'],
        ['He apologized for being late.', 'Él se disculpó por llegar tarde.'],
        ['They succeeded in finishing the project.', 'Lograron terminar el proyecto.'],
      ]
    ),
    teoria(
      "4 · There's no point in… e It's no use…",
      "📖 Del libro: para decir que algo no sirve de nada:\n\n• There's no point in + -ing → «There's no point in arguing with him».\n• It's no use + -ing → «It's no use waiting; she isn't coming».\n• It's not worth + -ing → «The film isn't worth seeing».\n\nTambién: can't help + -ing (no poder evitar): «I can't help laughing».",
      [
        ["There's no point in arguing with him.", 'No tiene sentido discutir con él.'],
        ["It's no use waiting. She isn't coming.", 'No sirve de nada esperar. Ella no viene.'],
        ["The film isn't worth seeing.", 'La película no vale la pena.'],
        ["I can't help laughing.", 'No puedo evitar reírme.'],
      ]
    ),
    teoria(
      '5 · To + verbo o preposición to + -ing',
      "📖 Del libro: to puede ser parte del infinitivo (to + verbo) o una preposición (to + -ing). Prueba: si puedes poner un sustantivo, es preposición y va -ing.\n\n• I want to go. (infinitivo)\n• I look forward to the trip. → I look forward to going. (preposición)\n• She is used to getting up early. (acostumbrada)\n• He objected to paying.\n\nParejas comunes con -ing: look forward to, be used to, get used to, object to, committed to.",
      [
        ['I want to go home.', 'Quiero ir a casa.'],
        ['I look forward to going on holiday.', 'Espero con ganas ir de vacaciones.'],
        ['She is used to getting up early.', 'Ella está acostumbrada a levantarse temprano.'],
        ['He objected to paying so much.', 'Él se opuso a pagar tanto.'],
      ]
    ),
    teoria(
      '6 · Más verbos con -ing y con to',
      "Algunos verbos piden siempre -ing y otros siempre to:\n\n• Con -ing: avoid · enjoy · finish · suggest · mind · keep · imagine · deny · consider.\n• Con to: decide · hope · plan · promise · refuse · manage · afford · agree · offer · expect.\n• Verbo + objeto + to: ask · tell · want · allow · persuade · remind.\n\n«I avoid driving at night.» · «She decided to leave.» · «He persuaded me to join.»",
      [
        ['I avoid driving at night.', 'Evito manejar de noche.'],
        ['She decided to leave.', 'Ella decidió irse.'],
        ['He persuaded me to join the club.', 'Él me convenció de unirme al club.'],
        ['They suggested going by train.', 'Sugirieron ir en tren.'],
      ]
    ),
    teoria(
      '7 · La posición de not',
      "En estas estructuras not va justo ANTES de -ing o de to:\n\n• not + -ing → «She regrets not studying» · «Not knowing the answer, he stayed quiet».\n• not to + verbo → «I decided not to go» · «He told me not to worry».\n• to not + verbo existe, pero es menos común y se evita en exámenes.\n\n⚠️ Ojo: no se usa don't dentro del infinitivo: «He told me not to be late», no «He told me don't be late».",
      [
        ['She regrets not studying harder.', 'Ella lamenta no haber estudiado más.'],
        ['I decided not to go.', 'Decidí no ir.'],
        ['He told me not to worry.', 'Me dijo que no me preocupara.'],
        ['Not knowing the answer, he stayed quiet.', 'Sin saber la respuesta, se quedó callado.'],
      ]
    ),
    teoria(
      '8 · Not con la pasiva y con being',
      "Con la pasiva, not va antes de be / being o del auxiliar:\n\n• The room isn't cleaned every day.\n• She hates not being told the truth.\n• I don't want to be disturbed. (to be + participio)\n• He doesn't like being laughed at.\n\nBeing + participio es el gerundio pasivo: «being told», «being invited». Con to: «to be told».",
      [
        ["She hates not being told the truth.", 'Ella odia que no le digan la verdad.'],
        ["I don't want to be disturbed.", 'No quiero que me molesten.'],
        ["He doesn't like being laughed at.", 'No le gusta que se rían de él.'],
        ['The room is not cleaned at weekends.', 'La habitación no se limpia los fines de semana.'],
      ]
    ),
  ],
  syntaxChips: [
    fl('Pasiva (presente)', resto('Shoes'), aux('are'), verbo('made')),
    fl('Preposición + -ing', resto('look forward to'), verbo('meeting')),
    fl('Not + -ing', verbo('regrets'), resto('not'), verbo('studying')),
    fl('Not to + verbo', verbo('decided'), resto('not to'), verbo('go')),
  ],
  table: {
    cols: ['Estructura', 'Ejemplo', 'Nota'],
    rows: [
      ['preposición + -ing', 'insist on paying', 'siempre -ing'],
      ['look forward to + -ing', 'look forward to meeting', 'to = preposición'],
      ['avoid / enjoy / suggest', 'avoid driving', 'siempre -ing'],
      ['decide / hope / refuse', 'decide to leave', 'siempre to'],
      ['not + -ing / not to', 'regret not going · decided not to go', 'not antes'],
    ],
  },
  contrastCard: {
    left: { label: 'To + verbo — infinitivo', example: 'I want to go.', highlight: 'to go' },
    right: { label: 'To + -ing — preposición', example: 'I look forward to going.', highlight: 'to going' },
    caption: 'Si to puede ir con un sustantivo (look forward to the trip), es preposición y el verbo va en -ing.',
  },
  quiz: [
    ejercicio(
      'These shoes ___ in Italy.',
      'are made',
      ['is made', 'make', 'made'],
      'shoes es plural y recibe la acción de hacerse: are made. is made no concuerda, make es activa y made solo no tiene auxiliar.'
    ),
    ejercicio(
      "I'm looking forward to ___ you.",
      'seeing',
      ['see', 'to see', 'saw'],
      'En look forward to, to es una preposición y el verbo va en -ing: seeing. see, to see y saw no se usan aquí.'
    ),
    ejercicio(
      'She decided ___ to the party.',
      'not to go',
      ['not going', "don't go", 'not go'],
      'Decide va seguido de to + verbo, y not va antes de to: «decided not to go». Las otras formas no son correctas.'
    ),
    ejercicio(
      "There is no point in ___ with him. He never listens. (argue)",
      'arguing',
      ['to argue', 'argue', 'argued'],
      'Después de una preposición (in) el verbo va en -ing: arguing. to argue, argue y argued no se usan después de in.'
    ),
    ejercicio(
      'She hates ___ what to do. (be told)',
      'being told',
      ['to tell', 'telling', 'told'],
      'Se necesita el gerundio pasivo: being + participio. to tell y telling son activos y told solo no tiene auxiliar.'
    ),
  ],
  flashcards: [
    tarjeta('Presente simple pasivo', 'am / is / are + participio\nThese shoes are made in Italy. · I am paid on Fridays.'),
    tarjeta('Preposición + -ing', 'insist on paying · apologize for being late\nlook forward to meeting (to = preposición)'),
    tarjeta("There's no point in…", "There's no point in arguing. · It's no use waiting.\nIt's not worth seeing."),
    tarjeta('Siempre -ing o siempre to', '-ing: avoid, enjoy, finish, suggest, mind, keep\nto: decide, hope, plan, promise, refuse, manage'),
    tarjeta('Not', 'not + -ing: regrets not studying\nnot to + verbo: decided not to go'),
  ],
  simulatedChat: [
    { speaker: 'other', text: 'Where is this coffee grown?', translation: '¿Dónde se cultiva este café?' },
    { speaker: 'user', text: "It's grown in Peru and roasted here. I'm used to drinking it black.", translation: 'Se cultiva en Perú y se tuesta aquí. Estoy acostumbrado a tomarlo negro.' },
    { speaker: 'other', text: 'I avoid drinking coffee after six. I decided not to take any risks with my sleep.', translation: 'Evito tomar café después de las seis. Decidí no arriesgarme con mi sueño.' },
    { speaker: 'user', text: "Smart. There's no point in lying awake all night.", translation: 'Inteligente. No tiene sentido pasar toda la noche despierto.' },
    { speaker: 'other', text: "I look forward to getting some rest this weekend. I hate not being able to switch off.", translation: 'Espero con ganas descansar este fin de semana. Odio no poder desconectar.' },
    { speaker: 'user', text: "Good idea. Don't forget to turn your phone off!", translation: 'Buena idea. ¡No olvides apagar tu teléfono!' },
  ],
  readingText: {
    title: 'A new routine',
    body: "My company has changed a lot this year. Reports are now written in English, and meetings are held online. At first I wasn't used to working like this, and I regretted not asking for training. I considered quitting, but there is no point in running away from change. My boss suggested taking an evening course, and I decided to try it. Now I look forward to learning something new every week. The course is taught by a young teacher who never gets tired of answering questions, and nobody is afraid of being corrected.",
    translation:
      'Mi empresa ha cambiado mucho este año. Ahora los informes se escriben en inglés y las reuniones se hacen en línea. Al principio no estaba acostumbrado a trabajar así y lamenté no haber pedido capacitación. Consideré renunciar, pero no tiene sentido huir del cambio. Mi jefe sugirió tomar un curso nocturno y decidí probarlo. Ahora espero con ganas aprender algo nuevo cada semana. El curso lo dicta un joven profesor que nunca se cansa de responder preguntas y nadie teme que lo corrijan.',
  },
  tips: [
    "Después de cualquier preposición el verbo va en -ing: «insist on paying», «look forward to meeting».",
    "Con look forward to, be used to y object to, to es una preposición: lleva -ing, no infinitivo.",
    "Not va antes de -ing o de to: «regrets not studying», «decided not to go», no «decided don't go».",
    "El gerundio pasivo es being + participio: «hates being told», «doesn't like being laughed at».",
  ],
  dailyWords: palabras('factory', 'company', 'country', 'market', 'brand', 'delivery'),
  relacionados: [
    { etiqueta: '📖 Gramática: La Voz Pasiva (Passive Voice)', ruta: '/gramatica/concepto/la-voz-pasiva-passive-voice' },
    { etiqueta: '📖 Gramática: El Gerundio / Forma -ing', ruta: '/gramatica/concepto/el-gerundio-forma-ing-gerund' },
    { etiqueta: '📖 Gramática: El Infinitivo (Infinitive)', ruta: '/gramatica/concepto/el-infinitivo-infinitive' },
  ],
};

const FORMAS_115: FormasUnidad = {
  titulo: 'Presente simple pasivo',
  afirmativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), verbo('past participle'))],
    ejemplos: [
      ['These shoes are made in Italy.', 'Estos zapatos se fabrican en Italia.'],
      ['The room is cleaned every day.', 'La habitación se limpia todos los días.'],
      ['I am paid on Fridays.', 'Me pagan los viernes.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), aux('am / is / are'), neg('not'), verbo('past participle'))],
    ejemplos: [
      ["The office isn't cleaned at weekends.", 'La oficina no se limpia los fines de semana.'],
      ["These cars aren't made here.", 'Estos autos no se fabrican aquí.'],
      ["I'm not paid enough.", 'No me pagan lo suficiente.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Am / Is / Are'), suj('subject'), verbo('past participle'))],
    ejemplos: [
      ['Is the office cleaned every day?', '¿Se limpia la oficina todos los días?'],
      ['Where are these shoes made?', '¿Dónde se fabrican estos zapatos?'],
      ['Are you paid weekly?', '¿Te pagan semanalmente?'],
    ],
  },
  nota: "El auxiliar concuerda con el sujeto (is / are). Respuestas cortas: Yes, it is. / No, they aren't. By + agente solo si importa quién lo hizo.",
  ojo: "El verbo principal va en participio y siempre hace falta el auxiliar be: «The room is cleaned», no «The room cleaned».",
};

/** Las unidades del bloque 1, por id interno. */
export const UNIDADES_BLOQUE_1: Record<number, Unit> = {
  113: UNIDAD_113,
  114: UNIDAD_114,
  115: UNIDAD_115,
};

/** Las formas (afirmativa, negativa, pregunta) de las unidades del bloque 1 que las tienen. */
export const FORMAS_BLOQUE_1: Record<number, FormasUnidad | FormasUnidad[]> = {
  115: FORMAS_115,
};
