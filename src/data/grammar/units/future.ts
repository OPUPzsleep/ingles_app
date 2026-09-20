import { Unit } from '@/types/grammar';

export const futureUnits: Record<number, Unit> = {
  "19": {
    "title": "Present Tenses for the Future",
    "topic": "Future",
    "level": "A2",
    "explain": [
      {
        "head": "Present Continuous: plan personal",
        "body": "Usamos el presente continuo para un evento futuro ya organizado — tienes hora, lugar o acuerdo con alguien — por eso suena tan definido como algo que pasa ahora. Se diferencia del presente simple, usado para horarios oficiales, no planes personales.",
        "note": "I'm meeting Sarah at 6pm. · We're flying to Rome next week. · They're getting married in June."
      },
      {
        "head": "Present Simple: horario fijo",
        "body": "Usamos el presente simple para eventos fijados por un horario oficial — trenes, vuelos, cines, horarios de apertura — porque los fija una organización, no tú. Se siente como un dato de horario, no un plan personal, a diferencia del presente continuo.",
        "note": "The train leaves at 8.30. · What time does the film start? · The shop opens at 9."
      }
    ],
    "table": {
      "cols": [
        "Present Continuous (future)",
        "Present Simple (future)"
      ],
      "rows": [
        [
          "Personal plans / arrangements",
          "Fixed timetable / schedule"
        ],
        [
          "I'm meeting Tom tomorrow.",
          "The train leaves at 8.30."
        ],
        [
          "We're flying to Paris next week.",
          "What time does the class start?"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I ___ Sam tonight. We arranged it yesterday.",
        "opts": [
          "see",
          "am seeing",
          "will see",
          "saw"
        ],
        "ans": 1,
        "exp": "Plan personal futuro → presente continuo: 'I am seeing Sam'."
      },
      {
        "q": "The next train to London ___ at 9.15.",
        "opts": [
          "is leaving",
          "will leave",
          "leaves",
          "left"
        ],
        "ans": 2,
        "exp": "Horario fijo → presente simple: 'leaves at 9.15'."
      },
      {
        "q": "What ___ you ___ this weekend?",
        "opts": [
          "will/do",
          "do/do",
          "are/doing",
          "have/done"
        ],
        "ans": 2,
        "exp": "Plan personal → presente continuo: 'What are you doing?'"
      }
    ],
    "flashcards": [
      {
        "front": "Present Continuous vs Present Simple for future",
        "back": "Present Continuous = PERSONAL ARRANGEMENT:\n'I'm having dinner with Tom tonight.' (we planned it)\n\nPresent Simple = TIMETABLE/SCHEDULE:\n'The bus leaves at 7am.' (official timetable)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "What are you doing this weekend?",
        "translation": "¿Qué vas a hacer este fin de semana?"
      },
      {
        "speaker": "user",
        "text": "I'm visiting my parents on Saturday. We planned it last week.",
        "translation": "Voy a visitar a mis padres el sábado. Lo planeamos la semana pasada."
      },
      {
        "speaker": "other",
        "text": "Nice! How are you getting there?",
        "translation": "¡Qué bien! ¿Cómo vas a llegar?"
      },
      {
        "speaker": "user",
        "text": "I'm taking the train. It leaves at 10.15 and arrives at noon.",
        "translation": "Voy a tomar el tren. Sale a las 10:15 y llega al mediodía."
      },
      {
        "speaker": "other",
        "text": "And on Sunday? Are you doing anything?",
        "translation": "¿Y el domingo? ¿Vas a hacer algo?"
      },
      {
        "speaker": "user",
        "text": "Yes, I'm meeting some old friends for lunch. We're all getting together at a new restaurant.",
        "translation": "Sí, voy a reunirme con unos viejos amigos para almorzar. Todos nos vamos a juntar en un restaurante nuevo."
      },
      {
        "speaker": "other",
        "text": "Sounds like a great weekend. What time does the restaurant open, by the way?",
        "translation": "Suena como un gran fin de semana. Por cierto, ¿a qué hora abre el restaurante?"
      },
      {
        "speaker": "user",
        "text": "It opens at noon, so we're arriving right when it starts.",
        "translation": "Abre al mediodía, así que vamos a llegar justo cuando empieza."
      }
    ]
  },
  "20": {
    "title": "I'm Going to (do)",
    "topic": "Future",
    "level": "A2",
    "explain": [
      {
        "head": "Going to: intención/plan",
        "body": "Usamos 'going to' para algo que ya decidiste antes de hablar: una intención o plan que ya existe en tu mente, aunque no hayas arreglado los detalles. Se diferencia de 'will', para decisiones espontáneas tomadas en el momento.",
        "note": "'What are you going to do tonight?' 'I'm going to watch TV.' · I'm going to look for a new job."
      },
      {
        "head": "Going to: predicción con evidencia",
        "body": "También usamos 'going to' para predecir algo casi seguro, basado en evidencia visible ahora — nubes oscuras, alguien perdiendo el equilibrio. Se diferencia de 'will', que se basa en opinión o creencia, no en una señal presente.",
        "note": "Look at those clouds! It's going to rain. · Be careful! You're going to drop that!"
      }
    ],
    "quiz": [
      {
        "q": "'What are you going to do tonight?' 'I ___ watch a film.'",
        "opts": [
          "will",
          "am going to",
          "go to",
          "going"
        ],
        "ans": 1,
        "exp": "Intención ya decidida → 'going to': 'I'm going to watch a film.'"
      },
      {
        "q": "Look at those dark clouds! It ___ rain.",
        "opts": [
          "will",
          "is going to",
          "rains",
          "is raining"
        ],
        "ans": 1,
        "exp": "Predicción con evidencia visible → 'is going to rain'."
      },
      {
        "q": "We ___ visit our grandparents next weekend. We've already booked tickets.",
        "opts": [
          "will",
          "are going to",
          "go to",
          "are going"
        ],
        "ans": 1,
        "exp": "Plan ya decidido → 'going to': 'We're going to visit.'"
      }
    ],
    "flashcards": [
      {
        "front": "WILL vs GOING TO — the difference",
        "back": "WILL = spontaneous decision (made right now):\n'It's cold! I'll close the window.'\n\nGOING TO = pre-decided plan:\n'I'm going to study medicine.' (already decided)\n\nGOING TO = prediction from evidence:\n'Look out! You're going to fall!'"
      }
    ],
    "readingText": {
      "title": "Storm Warning",
      "body": "Look at that sky! It's going to storm tonight, I'm sure of it. My brother is going to move all the garden furniture inside before it starts, because last time we forgot and everything got ruined. I'm going to check the windows now, and my sister is going to unplug the computer, just in case. The neighbor's tree looks like it's going to fall — those branches are bending badly in the wind. We're going to stay home tonight instead of going to the cinema like we planned. Honestly, watching those dark clouds roll in, I think this is going to be one of the worst storms we've had in years.",
      "translation": "¡Mira ese cielo! Va a haber tormenta esta noche, estoy seguro. Mi hermano va a meter todos los muebles del jardín adentro antes de que empiece, porque la última vez se nos olvidó y todo se arruinó. Voy a revisar las ventanas ahora, y mi hermana va a desconectar la computadora, por si acaso. El árbol del vecino parece que se va a caer — esas ramas se están doblando mucho con el viento. Vamos a quedarnos en casa esta noche en lugar de ir al cine como planeábamos. Sinceramente, viendo cómo se acercan esas nubes oscuras, creo que esta va a ser una de las peores tormentas que hemos tenido en años."
    }
  },
  "21": {
    "title": "Will and Shall 1",
    "topic": "Future",
    "level": "A2",
    "explain": [
      {
        "head": "Will: decisión espontánea",
        "body": "Usamos 'will' cuando decides algo justo en el momento de hablar, sin planearlo antes — la idea surge y la dices de inmediato. Es lo opuesto a 'going to', que reporta una decisión ya tomada. Por eso 'will' es común en ofrecimientos.",
        "note": "'It's cold in here.' 'I'll close the window.' · 'I'm thirsty.' 'I'll get you some water.'"
      },
      {
        "head": "Will: ofrecimientos y promesas",
        "body": "'Will' también es la opción natural para ofrecer ayuda, prometer algo o ofrecerte como voluntario — compromisos espontáneos tomados en el momento de hablar. Nota cómo las promesas usan 'I promise' o 'won't' para dar seguridad.",
        "note": "I'll help you with your homework. · I promise I won't be late. · 'I can't carry this.' 'I'll help.'"
      },
      {
        "head": "Shall I/we: sugerencias",
        "body": "'Shall' se usa solo con 'I' y 'we' para ofrecerte a hacer algo o sugerir algo juntos, casi siempre en pregunta. Tiene el mismo tono espontáneo de 'will', pero pide la opinión del otro. No se usa con 'you', 'he' o 'they'.",
        "note": "Shall I open the window? · Shall we go out tonight? · What shall I do?"
      }
    ],
    "quiz": [
      {
        "q": "'I'm thirsty.' '___ you some water.'",
        "opts": [
          "I get",
          "I'll get",
          "Shall I get",
          "I'm going to get"
        ],
        "ans": 1,
        "exp": "Ofrecimiento espontáneo → 'will': 'I'll get you some water.'"
      },
      {
        "q": "'___ the window?' (offering to open it)",
        "opts": [
          "Do I open",
          "Will I open",
          "Shall I open",
          "Am I opening"
        ],
        "ans": 2,
        "exp": "Ofrecerte a hacer algo → 'Shall I open the window?'"
      },
      {
        "q": "I promise I ___ anyone what you told me.",
        "opts": [
          "don't tell",
          "won't tell",
          "am not going to tell",
          "shall not tell"
        ],
        "ans": 1,
        "exp": "Promesa → 'won't': 'I promise I won't tell anyone.'"
      }
    ],
    "flashcards": [
      {
        "front": "When do you use WILL?",
        "back": "✅ Spontaneous decision: 'I'll have the fish.'\n✅ Offer/promise: 'I'll help you.'\n✅ Prediction: 'I think it will rain.'\n\nNOT for pre-arranged plans → use going to or present continuous"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Ugh, I still have three boxes left to carry to the truck.",
        "translation": "Uf, todavía tengo tres cajas que llevar al camión."
      },
      {
        "speaker": "user",
        "text": "Don't worry, I'll carry them for you.",
        "translation": "No te preocupes, yo las llevo."
      },
      {
        "speaker": "other",
        "text": "Thanks! Shall we take a break after this one?",
        "translation": "¡Gracias! ¿Tomamos un descanso después de esta?"
      },
      {
        "speaker": "user",
        "text": "Good idea. Shall I get us some water from the kitchen?",
        "translation": "Buena idea. ¿Te traigo agua de la cocina?"
      },
      {
        "speaker": "other",
        "text": "Yes please. Oh no, I think I forgot my keys inside.",
        "translation": "Sí, por favor. Ay no, creo que olvidé mis llaves adentro."
      },
      {
        "speaker": "user",
        "text": "I'll go check for them. I promise I won't take long.",
        "translation": "Voy a revisar. Prometo que no me tardaré."
      },
      {
        "speaker": "other",
        "text": "Thank you so much. Shall we call it a day once the truck is loaded?",
        "translation": "Muchísimas gracias. ¿Terminamos por hoy cuando el camión esté cargado?"
      },
      {
        "speaker": "user",
        "text": "Definitely. And I'll order pizza for everyone once we're done.",
        "translation": "Definitivamente. Y voy a pedir pizza para todos cuando terminemos."
      }
    ]
  },
  "22": {
    "title": "Will and Shall 2",
    "topic": "Future",
    "level": "B1",
    "explain": [
      {
        "head": "Will: predicción",
        "body": "Usamos 'will' para predecir lo que creemos que pasará, basado en opinión o conocimiento general, no en evidencia visible ahora. Se diferencia de 'going to', que se basa en algo que ya ves pasando. Combina bien con 'I think' o 'probably'.",
        "note": "I think it will rain tomorrow. · She'll probably be late. · The economy will improve."
      },
      {
        "head": "Will: con I think/probably",
        "body": "Las predicciones con 'will' suelen ir con expresiones de certeza — 'I think', 'I'm sure', 'I expect', 'I hope', 'probably' — porque una predicción es, por naturaleza, una opinión. Estas frases no cambian la gramática: 'will' sigue marcando el futuro.",
        "note": "I think England will win. · I'm sure you'll pass. · She probably won't come."
      },
      {
        "head": "Futuro con won't",
        "body": "'Won't' es la negación de 'will' y cubre dos ideas: una predicción negativa (algo que crees que NO pasará) o una negativa/rechazo (alguien, o algo como un auto, se 'niega' a funcionar). El contexto aclara cuál de las dos es.",
        "note": "She won't come if you don't invite her. · I won't be late. · The car won't start."
      }
    ],
    "quiz": [
      {
        "q": "I think it ___ rain tomorrow. Look at those clouds.",
        "opts": [
          "is going to",
          "will",
          "would",
          "shall"
        ],
        "ans": 0,
        "exp": "Predicción con evidencia → 'going to rain' (o 'will rain' para predicción general)."
      },
      {
        "q": "I'm sure she ___ the exam. She's very well prepared.",
        "opts": [
          "passes",
          "is passing",
          "will pass",
          "passed"
        ],
        "ans": 2,
        "exp": "Predicción sobre el futuro → 'will pass'."
      },
      {
        "q": "Don't worry. Everything ___ be fine.",
        "opts": [
          "is going to",
          "will",
          "shall",
          "would"
        ],
        "ans": 1,
        "exp": "Predicción tranquilizadora → 'will': 'Everything will be fine.'"
      }
    ],
    "flashcards": [
      {
        "front": "WILL for predictions",
        "back": "Use WILL for general predictions about the future:\n'I think it will rain.' · 'She'll be late.'\n\nCommon phrases: I think, I'm sure, I expect, I hope, probably\n'I hope you will enjoy it.' · 'She probably won't come.'"
      }
    ],
    "readingText": {
      "title": "Before the Big Exam",
      "body": "Tomorrow is my final exam, and I'm nervous, but I think I'll do fine. I'm sure I'll pass, because I've studied hard for weeks. My study partner probably won't sleep much tonight — she always gets anxious before exams. I expect the questions will be difficult, but I hope I'll remember everything I've learned. My teacher says the whole class will do well this year, and I believe her. If I don't understand a question, I won't panic — I'll just move on and come back later. My parents think I'll get a good grade, and honestly, I think they're right. Either way, life will go on, and I'm sure everything will be fine.",
      "translation": "Mañana es mi examen final, y estoy nervioso, pero creo que me irá bien. Estoy seguro de que aprobaré, porque he estudiado mucho durante semanas. Mi compañera de estudio probablemente no dormirá mucho esta noche — siempre se pone ansiosa antes de los exámenes. Espero que las preguntas sean difíciles, pero espero recordar todo lo que he aprendido. Mi profesora dice que toda la clase lo hará bien este año, y le creo. Si no entiendo una pregunta, no voy a entrar en pánico — simplemente seguiré adelante y volveré después. Mis padres creen que sacaré una buena nota, y sinceramente, creo que tienen razón. De cualquier manera, la vida seguirá, y estoy seguro de que todo estará bien."
    }
  },
  "23": {
    "title": "I Will and I'm Going to",
    "topic": "Future",
    "level": "B1",
    "explain": [
      {
        "head": "Will: espontáneo, sin plan",
        "body": "Usamos 'will' para una decisión tomada justo al hablar, sin planearla antes — pasa algo y decides qué hacer de inmediato. La decisión y la oración ocurren casi al mismo tiempo. Es lo opuesto de 'going to', que reporta un plan anterior.",
        "note": "(phone rings) 'I'll get it!' · 'I'm thirsty.' 'I'll make some tea.' (decided just now)"
      },
      {
        "head": "Going to: ya decidido",
        "body": "Usamos 'going to' cuando la decisión ya se tomó antes de hablar: ya lo pensaste, elegiste un plan, y ahora solo reportas una intención existente. La acción es futura, pero la decisión ya es pasada respecto a ahora.",
        "note": "'I'm going to look for a new flat.' (I decided this yesterday) · 'Are you going to watch the match?'"
      }
    ],
    "quiz": [
      {
        "q": "'I need help with this.' '___ help you.' (decided just now)",
        "opts": [
          "I'm going to",
          "I'll",
          "I am",
          "Shall I"
        ],
        "ans": 1,
        "exp": "Decisión espontánea al hablar → 'will': 'I'll help you.'"
      },
      {
        "q": "'Why is Emma at the gym?' 'She ___ enter a marathon.' (decided last week)",
        "opts": [
          "'ll",
          "is going to",
          "will",
          "shall"
        ],
        "ans": 1,
        "exp": "Plan ya decidido → 'going to': 'She's going to enter a marathon.'"
      }
    ],
    "flashcards": [
      {
        "front": "WILL (spontaneous) vs GOING TO (planned)",
        "back": "NOW: 'It's cold!' → 'I'll close the window.' (WILL — decided this second)\n\nBEFORE: 'I'm going to close the window.' (GOING TO — planned before)"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Why do you have all these paint cans in the garage?",
        "translation": "¿Por qué tienes todas estas latas de pintura en el garaje?"
      },
      {
        "speaker": "user",
        "text": "I'm going to repaint the living room next weekend. I decided it last month.",
        "translation": "Voy a repintar la sala el próximo fin de semana. Lo decidí el mes pasado."
      },
      {
        "speaker": "other",
        "text": "Nice! Oh wait, this can is open and it's dripping!",
        "translation": "¡Qué bien! Ay espera, ¡esta lata está abierta y está goteando!"
      },
      {
        "speaker": "user",
        "text": "I'll grab a cloth right now, hold on.",
        "translation": "Voy a traer un trapo ahora mismo, espera."
      },
      {
        "speaker": "other",
        "text": "Thanks. So what color are you going to use?",
        "translation": "Gracias. Entonces, ¿qué color vas a usar?"
      },
      {
        "speaker": "user",
        "text": "I'm going to use light gray. I already bought the exact one I wanted.",
        "translation": "Voy a usar gris claro. Ya compré exactamente el que quería."
      },
      {
        "speaker": "other",
        "text": "It's getting dark in here. Should we turn on the light?",
        "translation": "Está oscureciendo aquí. ¿Prendemos la luz?"
      },
      {
        "speaker": "user",
        "text": "Good call, I'll turn it on now.",
        "translation": "Buena idea, la voy a prender ahora."
      }
    ]
  },
  "24": {
    "title": "Will Be Doing and Will Have Done",
    "topic": "Future",
    "level": "B2",
    "explain": [
      {
        "head": "Future Continuous: en progreso",
        "body": "Usamos 'will be' + -ing para una acción que ya estará en marcha en un momento futuro específico — te imaginas en medio de hacer algo, como el presente continuo pero en el futuro. Útil para decir que alguien estará ocupado y no es buen momento para llamar.",
        "note": "This time tomorrow I'll be flying to Paris. · Don't call at 9 — I'll be having dinner."
      },
      {
        "head": "Future Perfect: ya terminado",
        "body": "Usamos 'will have' + participio para mirar un punto futuro y ver hacia atrás desde ahí, describiendo algo que ya estará terminado. Responde '¿estará listo para entonces?', no '¿estará pasando entonces?' — lo opuesto al future continuous.",
        "note": "By next year I'll have finished the course. · By the time you arrive, I'll have cooked dinner."
      }
    ],
    "quiz": [
      {
        "q": "This time tomorrow I ___ on the beach.",
        "opts": [
          "will lie",
          "will be lying",
          "will have lied",
          "am lying"
        ],
        "ans": 1,
        "exp": "Acción en progreso en un momento futuro → future continuous: 'will be lying'."
      },
      {
        "q": "By the time you arrive, I ___ dinner.",
        "opts": [
          "will cook",
          "will be cooking",
          "will have cooked",
          "am cooking"
        ],
        "ans": 2,
        "exp": "Terminado antes de un punto futuro → future perfect: 'will have cooked'."
      }
    ],
    "flashcards": [
      {
        "front": "Future Continuous vs Future Perfect",
        "back": "CONTINUOUS (will be doing) = in progress at a future time:\n'At 8pm tomorrow, I'll be watching the game.'\n\nPERFECT (will have done) = completed before a future time:\n'By 8pm, I'll have finished work.'"
      }
    ],
    "readingText": {
      "title": "This Time Next Week",
      "body": "This time next week, I'll be lying on a beach in Portugal, finally relaxing after months of work. By the time I land, I'll have been traveling for almost ten hours, so I'll probably be exhausted. My colleagues will still be working in the office while I'll be swimming in the sea. By next Friday, I'll have finished reading two whole books, something I never have time for at home. My sister says that by the time I come back, she'll have repainted my old bedroom as a surprise. I can't wait — this time next week, I won't be checking emails or answering calls. I'll just be enjoying the sun, and by the end of the trip, I'll have completely forgotten about work.",
      "translation": "A esta hora la próxima semana, estaré tumbado en una playa en Portugal, finalmente relajándome después de meses de trabajo. Para cuando aterrice, habré estado viajando casi diez horas, así que probablemente estaré agotado. Mis compañeros todavía estarán trabajando en la oficina mientras yo estaré nadando en el mar. Para el próximo viernes, habré terminado de leer dos libros completos, algo para lo que nunca tengo tiempo en casa. Mi hermana dice que para cuando regrese, habrá repintado mi antiguo cuarto como sorpresa. No puedo esperar — a esta hora la próxima semana, no estaré revisando correos ni contestando llamadas. Solo estaré disfrutando del sol, y para el final del viaje, me habré olvidado por completo del trabajo."
    }
  },
  "25": {
    "title": "When I Do and When I've Done / If and When",
    "topic": "Future",
    "level": "B2",
    "explain": [
      {
        "head": "Tras when/if: presente",
        "body": "Aunque la oración completa habla del futuro, tras 'when', 'before', 'after', 'until', 'as soon as' o 'if' NO se usa 'will' — va presente simple (o presente perfecto si la acción debe terminar antes). 'Will' solo aparece en la oración principal.",
        "note": "I'll call you when I arrive. (NOT: when I will arrive ❌) · I'll call you when I've finished."
      },
      {
        "head": "When vs If",
        "body": "'When' introduce algo que el hablante da por seguro que pasará, solo es cuestión de tiempo. 'If' introduce algo posible pero incierto. Ambas usan las mismas formas de presente explicadas arriba, pero cambian el grado de certeza.",
        "note": "When I see her, I'll tell her. (I will see her) · If I see her, I'll tell her. (maybe I'll see her)"
      }
    ],
    "quiz": [
      {
        "q": "I'll tell you when she ___. (certain)",
        "opts": [
          "will arrive",
          "arrives",
          "is arriving",
          "arrived"
        ],
        "ans": 1,
        "exp": "Tras 'when' (conjunción temporal) → presente simple, NO will: 'when she arrives'."
      },
      {
        "q": "___ you hurry, we'll miss the bus.",
        "opts": [
          "Unless",
          "If",
          "When",
          "Until"
        ],
        "ans": 0,
        "exp": "Condición negativa → 'Unless you hurry' = 'If you don't hurry'."
      },
      {
        "q": "I'll send you a message as soon as I ___.",
        "opts": [
          "will arrive",
          "arrive",
          "arrived",
          "am arriving"
        ],
        "ans": 1,
        "exp": "Tras 'as soon as' (conjunción temporal) → presente simple: 'I arrive'."
      }
    ],
    "flashcards": [
      {
        "front": "Future after WHEN / IF / BEFORE / AFTER / UNTIL",
        "back": "NEVER use WILL after these conjunctions:\n\n'I'll call you WHEN I arrive.' ✅\n'I'll call you WHEN I will arrive.' ❌\n\n'If it rains, we'll stay home.' ✅\n'If it will rain, we'll stay home.' ❌"
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "What time are we meeting after work today?",
        "translation": "¿A qué hora nos vemos después del trabajo hoy?"
      },
      {
        "speaker": "user",
        "text": "I'll text you when I leave the office.",
        "translation": "Te escribo cuando salga de la oficina."
      },
      {
        "speaker": "other",
        "text": "Okay. When I've finished this call, I'll head to the café.",
        "translation": "Okay. Cuando termine esta llamada, iré al café."
      },
      {
        "speaker": "user",
        "text": "Perfect. If it starts raining, we'll just meet inside instead.",
        "translation": "Perfecto. Si empieza a llover, nos vemos adentro mejor."
      },
      {
        "speaker": "other",
        "text": "Good plan. As soon as I get there, I'll order us a table.",
        "translation": "Buen plan. En cuanto llegue, pediré una mesa para nosotros."
      },
      {
        "speaker": "user",
        "text": "Great, and when I arrive, I'll bring the documents we need to sign.",
        "translation": "Genial, y cuando llegue, traeré los documentos que necesitamos firmar."
      },
      {
        "speaker": "other",
        "text": "Sounds good. We can leave once we've finished eating.",
        "translation": "Suena bien. Podemos irnos en cuanto terminemos de comer."
      },
      {
        "speaker": "user",
        "text": "Agreed. Unless something changes, I'll see you at six.",
        "translation": "De acuerdo. A menos que algo cambie, nos vemos a las seis."
      }
    ]
  }
};
