import { Unit } from '@/types/grammar';

export const ingAndToUnits: Record<number, Unit> = {
  "53": {
    "title": "Verb + -ing (enjoy doing)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbos seguidos de -ing",
        "body": "Verbos como enjoy, finish, mind, suggest, avoid, keep o stop piden siempre el verbo siguiente en -ing, nunca 'to + infinitivo'. No hay lógica detrás: es un patrón fijo que se memoriza verbo por verbo. Poner 'to' aquí es uno de los errores más repetidos.",
        "note": "enjoy, finish, mind, suggest, avoid, keep, practise, admit, deny, imagine, consider, miss, stop, give up"
      },
      {
        "head": "Ejemplos",
        "body": "Fíjate en el patrón: 'I enjoy swimming.' 'She finished reading.' 'He avoids eating meat.' 'Stop talking!' El verbo que va detrás de enjoy, finish, avoid o stop siempre termina en -ing."
      },
      {
        "head": "Tras preposición, siempre -ing",
        "body": "Si un verbo va justo después de una preposición (at, in, of, about, without, before...), va obligatoriamente en -ing. Es una de las reglas más fiables del inglés y no tiene excepciones reales. Aquí quien manda es la preposición, no el verbo principal.",
        "note": "good at swimming · interested in learning · before leaving · without saying goodbye"
      }
    ],
    "quiz": [
      {
        "q": "I enjoy ___ in the rain.",
        "opts": [
          "to walk",
          "walk",
          "walking",
          "walked"
        ],
        "ans": 2,
        "exp": "'Enjoy' siempre lleva -ing: 'I enjoy walking.'"
      },
      {
        "q": "She suggested ___ a different route.",
        "opts": [
          "to take",
          "take",
          "taking",
          "taken"
        ],
        "ans": 2,
        "exp": "'Suggest' siempre lleva -ing: 'She suggested taking a different route.'"
      },
      {
        "q": "I'm thinking of ___ a new car.",
        "opts": [
          "buy",
          "to buy",
          "bought",
          "buying"
        ],
        "ans": 3,
        "exp": "Tras la preposición 'of' va -ing: 'thinking of buying'."
      }
    ],
    "flashcards": [
      {
        "front": "Verbs + -ing (not to): enjoy/finish/mind/avoid/keep/stop/imagine/suggest",
        "back": "enjoy DOING · finish DOING · avoid DOING\nkeep DOING · stop DOING · mind DOING\nsuggest DOING · imagine DOING · practise DOING"
      }
    ],
    "syntaxChips": [
      { "label": "Verb + -ing", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "enjoy / avoid / stop", "role": "verb" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Preposition + -ing", "chips": [
        { "text": "good at / interested in", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "readingText": {
      "title": "My Weekend Habits",
      "body": "I really enjoy reading in the mornings, before the house gets noisy. On Saturdays I usually finish cleaning early, so I don't keep putting it off until Sunday. I try to avoid checking my phone before breakfast — it's a habit I'm still working on. My sister suggested joining a running club, and I'm actually quite good at running, even though I only started last year. I'm also interested in learning to cook new dishes, so on Sunday afternoons I practise trying new recipes without following the instructions too closely. Last month I stopped eating so much sugar, and I don't miss it at all.",
      "translation": "Realmente disfruto leyendo por las mañanas, antes de que la casa se llene de ruido. Los sábados normalmente termino de limpiar temprano, así no sigo posponiéndolo hasta el domingo. Intento evitar mirar el móvil antes de desayunar — es un hábito en el que todavía estoy trabajando. Mi hermana sugirió apuntarme a un club de running, y la verdad se me da bien correr, aunque empecé hace solo un año. También me interesa aprender a cocinar platos nuevos, así que los domingos por la tarde practico probando recetas nuevas sin seguir las instrucciones al pie de la letra. El mes pasado dejé de comer tanto azúcar, y la verdad no lo echo de menos."
    },
    "tips": [
      "Recuerda: después de estos verbos (enjoy, avoid, finish, keep, suggest...) nunca uses \"to\" — siempre \"-ing\".",
      "Truco mental: si el verbo va justo después de una preposición (at, in, of, about...), casi siempre necesita \"-ing\"."
    ],
    "dailyWords": [
      { "w": "hobby", "ipa": "/ˈhɒbi/", "aprox": "jóbi", "def": "afición, pasatiempo", "ex": "Reading is my favorite hobby." },
      { "w": "habit", "ipa": "/ˈhæbɪt/", "aprox": "jábit", "def": "hábito, costumbre", "ex": "She's trying to break a bad habit." }
    ]
  },
  "54": {
    "title": "Verb + to… (want to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbo + to + infinitivo",
        "body": "Verbos como want, need, decide, plan, hope y promise van siempre seguidos de 'to + verbo base', nunca de -ing. Es un patrón fijo, sin lógica aparente, que se aprende verbo por verbo. Confundirlos con los verbos de la unidad anterior (enjoy, avoid...) es un error muy frecuente.",
        "note": "want, need, decide, plan, hope, expect, try, manage, fail, promise, refuse, offer, agree, afford"
      },
      {
        "head": "Ejemplos",
        "body": "Fíjate en el patrón: 'I want to go.' 'She decided to leave.' 'He failed to pass the exam.' 'They agreed to help.' Verbos como want, decide, fail o agree siempre van seguidos de 'to + verbo base', nunca de -ing."
      }
    ],
    "quiz": [
      {
        "q": "I want ___ a new phone.",
        "opts": [
          "buy",
          "buying",
          "to buy",
          "bought"
        ],
        "ans": 2,
        "exp": "'Want' + infinitivo con to: 'I want to buy'."
      },
      {
        "q": "She decided ___ a new job.",
        "opts": [
          "find",
          "finding",
          "to find",
          "found"
        ],
        "ans": 2,
        "exp": "'Decide' + infinitivo con to: 'She decided to find'."
      },
      {
        "q": "He managed ___ the exam.",
        "opts": [
          "pass",
          "passing",
          "to pass",
          "passed"
        ],
        "ans": 2,
        "exp": "'Manage' + infinitivo con to: 'He managed to pass'."
      }
    ],
    "flashcards": [
      {
        "front": "Verbs + to infinitive: want/need/decide/plan/hope/try/manage/promise/refuse",
        "back": "want TO DO · need TO DO · decide TO DO\nplan TO DO · hope TO DO · try TO DO\nmanage TO DO · promise TO DO · refuse TO DO"
      }
    ],
    "syntaxChips": [
      { "label": "Verb + to + base verb", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "want / decide / hope", "role": "verb" }, { "text": "to do", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "VERB + -ING (enjoy)", "example": "I enjoy playing tennis.", "highlight": "enjoy playing" },
      "right": { "label": "VERB + TO (want)", "example": "I want to play tennis.", "highlight": "want to play" },
      "caption": "Some verbs (enjoy, avoid, finish) take -ing; others (want, decide, hope) take to + infinitive — there's no rule, just memorize each verb."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "What do you want to do after university?", "translation": "¿Qué quieres hacer después de la universidad?" },
      { "speaker": "user", "text": "I've decided to travel for a year before looking for a job.", "translation": "He decidido viajar durante un año antes de buscar trabajo." },
      { "speaker": "other", "text": "Wow! Do you hope to visit Asia?", "translation": "¡Vaya! ¿Esperas visitar Asia?" },
      { "speaker": "user", "text": "Yes, and I plan to learn some Japanese before I go.", "translation": "Sí, y planeo aprender algo de japonés antes de irme." },
      { "speaker": "other", "text": "That sounds amazing. I promise to write to you!", "translation": "Suena increíble. ¡Te prometo que te escribiré!" }
    ],
    "tips": [
      "Estos verbos (want, need, decide, plan, hope, promise) siempre van seguidos de \"to + verbo\", nunca de \"-ing\".",
      "Consejo práctico: memoriza estos verbos en parejas de ejemplo (\"want to go\", \"hope to see\") en vez de la regla sola — así se te queda mejor."
    ],
    "dailyWords": [
      { "w": "goal", "ipa": "/ɡəʊl/", "aprox": "góul", "def": "objetivo, meta", "ex": "My goal is to speak fluent English." },
      { "w": "to plan", "ipa": "/tuː plæn/", "aprox": "tu plán", "def": "planear, planificar", "ex": "We plan to move next year." }
    ]
  },
  "55": {
    "title": "Verb + Object + to… (ask somebody to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbo + objeto + to",
        "body": "Verbos como ask, tell, want, expect, allow, remind y warn van seguidos de una persona (objeto) y luego 'to + verbo base', porque describen pedir, decir o permitir que ALGUIEN MÁS haga algo. El objeto indica quién realiza la acción. A diferencia de la unidad 54, aquí siempre hay una persona entre el verbo y el 'to'.",
        "note": "ask, tell, want, expect, help, allow, advise, encourage, invite, remind, warn, force, teach, persuade"
      },
      {
        "head": "Ejemplos",
        "body": "Fíjate en el orden: 'She asked me to help.' 'He told us to wait.' 'They want you to come.' 'I advised her to leave.' Siempre es verbo + persona + 'to + verbo base'."
      }
    ],
    "quiz": [
      {
        "q": "She asked me ___ her bags.",
        "opts": [
          "carry",
          "carrying",
          "to carry",
          "carried"
        ],
        "ans": 2,
        "exp": "Ask + objeto + infinitivo con to: 'asked me to carry'."
      },
      {
        "q": "He told us ___ quiet.",
        "opts": [
          "be",
          "being",
          "to be",
          "been"
        ],
        "ans": 2,
        "exp": "Tell + objeto + infinitivo con to: 'told us to be quiet'."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + Object + to infinitive",
        "back": "ask/tell/want/expect/help/allow/advise/encourage/invite/remind/warn/force\n\n+ OBJECT + TO DO:\n'She asked me TO HELP.'\n'He told us TO WAIT.'"
      }
    ],
    "syntaxChips": [
      { "label": "Verb + object + to", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "ask / tell / want", "role": "verb" }, { "text": "somebody", "role": "object" }, { "text": "to do", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "VERB + TO (no object)", "example": "I want to leave.", "highlight": "want to leave" },
      "right": { "label": "VERB + OBJECT + TO", "example": "I want you to leave.", "highlight": "want you to leave" },
      "caption": "Some verbs go straight to the infinitive; others need a person (object) first — 'ask/tell/want + somebody + to do'."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "My boss asked me to finish the report by Friday.", "translation": "Mi jefe me pidió que terminara el informe para el viernes." },
      { "speaker": "user", "text": "That's tight! Did she tell you to work overtime?", "translation": "¡Qué ajustado! ¿Te dijo que trabajaras horas extra?" },
      { "speaker": "other", "text": "No, but she did want me to send her a draft tonight.", "translation": "No, pero sí quería que le enviara un borrador esta noche." },
      { "speaker": "user", "text": "I'd advise you to ask a colleague to help.", "translation": "Yo te aconsejaría que le pidieras a un compañero que te ayudara." },
      { "speaker": "other", "text": "Good idea — I'll invite Sam to join me tomorrow.", "translation": "Buena idea — invitaré a Sam a que se una mañana." }
    ],
    "tips": [
      "El orden nunca cambia: verbo + persona + \"to\" + verbo. Nunca digas \"ask to me\" — di \"ask me to...\"",
      "Estos verbos (ask, tell, want, remind, warn) casi siempre hablan de que ALGUIEN MÁS haga la acción, no tú."
    ],
    "dailyWords": [
      { "w": "to remind", "ipa": "/rɪˈmaɪnd/", "aprox": "rimáind", "def": "recordar (a alguien que haga algo)", "ex": "Please remind me to call the bank." },
      { "w": "deadline", "ipa": "/ˈdedlaɪn/", "aprox": "dédlain", "def": "fecha límite, plazo", "ex": "The deadline for the report is Friday." }
    ]
  },
  "56": {
    "title": "Verb + -ing or to… 1 (remember, stop, try)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Remember: -ing o to",
        "body": "'Remember' puede llevar -ing o 'to' y el significado cambia: 'remember + -ing' es recordar algo que YA pasó (mirar al pasado); 'remember + to' es no olvidar algo pendiente (mirar al futuro). Este mismo contraste pasado/futuro se repite con 'stop' y 'try' más abajo.",
        "note": "I remember meeting her. (past) · Remember to call her. (future task)"
      },
      {
        "head": "Stop: -ing o to",
        "body": "'Stop + -ing' significa dejar de hacer algo que ya hacías. 'Stop + to' significa parar UNA cosa PARA empezar otra: aquí 'to' indica el propósito de la pausa. Son fáciles de confundir: 'stop doing' termina una acción; 'stop to do' empieza algo nuevo.",
        "note": "I stopped smoking. (I quit) · I stopped to smoke. (I paused to have a cigarette)"
      },
      {
        "head": "Try: -ing o to",
        "body": "'Try + -ing' es un experimento: haces algo para ver qué pasa, sin esperar dificultad. 'Try + to' es un esfuerzo genuino ante algo que puede ser difícil o fallar. Por eso 'try taking an aspirin' es 'prueba a ver si ayuda', y 'try to open the jar' es 'esfuérzate, aunque cueste'.",
        "note": "Try taking an aspirin. (as an experiment) · She tried to lift the box. (she attempted it)"
      }
    ],
    "quiz": [
      {
        "q": "Remember ___ the lights off when you leave!",
        "opts": [
          "turning",
          "to turn",
          "turn",
          "turned"
        ],
        "ans": 1,
        "exp": "Tarea futura que hay que recordar → 'remember to turn'."
      },
      {
        "q": "I stopped ___ last year. I'm much healthier now.",
        "opts": [
          "to smoke",
          "smoke",
          "smoking",
          "smoked"
        ],
        "ans": 2,
        "exp": "Dejar el hábito → 'stopped smoking'."
      },
      {
        "q": "She tried ___ the jar but it was too tight.",
        "opts": [
          "opening",
          "to open",
          "open",
          "opened"
        ],
        "ans": 1,
        "exp": "Intentar algo (quizá sin lograrlo) → 'tried to open'."
      }
    ],
    "flashcards": [
      {
        "front": "STOP -ing vs STOP to do",
        "back": "STOP -ing = give up, quit:\n'I stopped smoking.' (I quit the habit)\n\nSTOP to do = stop in order to do:\n'I stopped to smoke.' (I paused, then smoked)"
      },
      {
        "front": "REMEMBER -ing vs REMEMBER to do",
        "back": "REMEMBER -ing = recall a past event:\n'I remember meeting her.' (I recall it happened)\n\nREMEMBER to do = don't forget a future task:\n'Remember to lock the door!' (future task)"
      }
    ],
    "syntaxChips": [
      { "label": "Past memory", "chips": [
        { "text": "remember", "role": "verb" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Future task", "chips": [
        { "text": "remember", "role": "verb" }, { "text": "to do", "role": "object" }
      ] },
      { "label": "Experiment vs effort", "chips": [
        { "text": "try", "role": "verb" }, { "text": "doing / to do", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "STOP + -ING (end an activity)", "example": "I stopped smoking last year.", "highlight": "stopped smoking" },
      "right": { "label": "STOP + TO (pause in order to)", "example": "I stopped to smoke a cigarette.", "highlight": "stopped to smoke" },
      "caption": "'Stop doing' ends a habit; 'stop to do' means you paused one activity in order to start another."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Did you remember to lock the door before we left?", "translation": "¿Te acordaste de cerrar la puerta con llave antes de salir?" },
      { "speaker": "user", "text": "Yes, and I remember checking it twice.", "translation": "Sí, y recuerdo haberla comprobado dos veces." },
      { "speaker": "other", "text": "Good. I tried calling you earlier but you didn't answer.", "translation": "Bien. Intenté llamarte antes pero no contestaste." },
      { "speaker": "user", "text": "Sorry, I stopped to answer an email and lost track of time.", "translation": "Perdona, me detuve para responder un correo y se me pasó el tiempo." },
      { "speaker": "other", "text": "No worries — maybe try turning your phone volume up next time.", "translation": "No pasa nada — quizás prueba a subir el volumen del teléfono la próxima vez." }
    ],
    "tips": [
      "REMEMBER + -ing = recuerdo algo que YA pasó; REMEMBER + to = no olvido algo que TENGO que hacer.",
      "Truco: STOP + to = \"me detuve PARA hacer algo nuevo\"; STOP + -ing = \"dejé de hacer algo que hacía\"."
    ],
    "dailyWords": [
      { "w": "to forget", "ipa": "/fəˈɡet/", "aprox": "forguét", "def": "olvidar", "ex": "Don't forget to bring your umbrella." },
      { "w": "attempt", "ipa": "/əˈtempt/", "aprox": "atémpt", "def": "intento", "ex": "She made an attempt to fix the car." }
    ]
  },
  "57": {
    "title": "Verb + -ing or to… 2 (begin, start, prefer, like, love, hate)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Like/love/hate/prefer: -ing o to",
        "body": "Verbos de gustos como like, love, hate y prefer aceptan -ing o 'to + infinitivo' casi sin diferencia de significado: 'I like swimming' = 'I like to swim'. Esa libertad desaparece en cuanto añades 'would' delante, como en el bloque siguiente.",
        "note": "I like swimming. = I like to swim. · She hates waiting. = She hates to wait."
      },
      {
        "head": "Would like/love/prefer: siempre to",
        "body": "Con 'would' delante de like, love o prefer, solo vale 'to + infinitivo'; el -ing es incorrecto. 'Would like/love/prefer' habla de un deseo puntual para una ocasión concreta (a menudo una oferta educada), a diferencia del gusto general del bloque anterior.",
        "note": "I'd like to go. (NOT: I'd like going) · Would you like to come? · I'd love to help."
      },
      {
        "head": "Begin/start/continue: ambas formas",
        "body": "Con verbos de inicio o continuación (begin, start, continue), -ing y 'to + infinitivo' son igual de correctos y significan lo mismo: 'it started raining' = 'it started to rain'. Aquí puedes elegir la forma que te suene mejor.",
        "note": "It started raining. = It started to rain. · She began crying. = She began to cry."
      }
    ],
    "quiz": [
      {
        "q": "I'd love ___ you, but I'm busy.",
        "opts": [
          "helping",
          "help",
          "to help",
          "helped"
        ],
        "ans": 2,
        "exp": "Tras 'would love' → infinitivo con to: 'I'd love to help'."
      },
      {
        "q": "I like ___ to music when I study.",
        "opts": [
          "listen",
          "to listen",
          "listening",
          "listened"
        ],
        "ans": 2,
        "exp": "Like + -ing o to → ambos valen, pero -ing es más natural para hábitos: 'like listening'."
      }
    ],
    "flashcards": [
      {
        "front": "WOULD LIKE vs LIKE",
        "back": "LIKE + -ing OR to (both OK):\n'I like swimming.' / 'I like to swim.'\n\nWOULD LIKE + TO (always to):\n'I'd like to swim now.' ✅\n'I'd like swimming now.' ❌"
      }
    ],
    "syntaxChips": [
      { "label": "General preference (either form)", "chips": [
        { "text": "like / love / hate", "role": "verb" }, { "text": "doing / to do", "role": "object" }
      ] },
      { "label": "Specific wish (only to)", "chips": [
        { "text": "would like / love", "role": "verb" }, { "text": "to do", "role": "object" }
      ] },
      { "label": "Begin/start (either form)", "chips": [
        { "text": "begin / start", "role": "verb" }, { "text": "doing / to do", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "LIKE (general preference)", "example": "I like swimming in the sea.", "highlight": "like swimming" },
      "right": { "label": "WOULD LIKE (specific wish)", "example": "I'd like to swim now.", "highlight": "'d like to swim" },
      "caption": "'Like' + -ing/to describes a general preference; add 'would' and only 'to' works, for one specific occasion."
    },
    "readingText": {
      "title": "A Rainy Sunday",
      "body": "It started raining just after breakfast, so we decided to stay in. I like reading on rainy days — there's something cosy about it — but my brother would prefer to watch a film instead. We both love listening to music while we relax, so we put on a playlist and began cooking lunch together. Later, my mother said she'd like to join us for a board game, and my brother, who hates losing, insisted on choosing the game himself. By the evening, it had stopped raining, but nobody wanted to go outside anymore — we were all enjoying the lazy afternoon too much.",
      "translation": "Empezó a llover justo después del desayuno, así que decidimos quedarnos en casa. A mí me gusta leer los días de lluvia — tiene algo acogedor — pero mi hermano preferiría ver una película. A los dos nos encanta escuchar música mientras descansamos, así que pusimos una lista de reproducción y empezamos a cocinar juntos. Más tarde, mi madre dijo que le gustaría unirse a un juego de mesa, y mi hermano, que odia perder, insistió en elegir él el juego. Por la tarde había dejado de llover, pero ya nadie quería salir — estábamos disfrutando demasiado de la tarde tranquila."
    },
    "tips": [
      "LIKE/LOVE/HATE + -ing o + to: ambas formas son correctas y casi no cambian el significado.",
      "Pero con WOULD (would like, would love, would prefer) usa siempre \"to\" — nunca \"-ing\"."
    ],
    "dailyWords": [
      { "w": "cosy", "ipa": "/ˈkəʊzi/", "aprox": "kóusi", "def": "acogedor, confortable", "ex": "The cabin felt warm and cosy." },
      { "w": "board game", "ipa": "/bɔːd ɡeɪm/", "aprox": "bord guéim", "def": "juego de mesa", "ex": "We played a board game after dinner." }
    ]
  },
  "58": {
    "title": "Verb + -ing or to… 3 (interested in doing / want to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Frases con adjetivo/sustantivo + -ing o to",
        "body": "Muchas expresiones fijas con adjetivo o sustantivo (be interested in, be keen on, it's no use, there's no point in) exigen una forma concreta después, normalmente porque terminan en preposición. Al ser frases fijas, lo más práctico es aprender cada una junto con la forma que le sigue.",
        "note": "'be interested in + -ing' · 'be keen on + -ing' · 'It's no use + -ing' · 'There's no point in + -ing'"
      },
      {
        "head": "It's no use / no point / it's worth",
        "body": "'It's no use', 'there's no point (in)' e 'it's worth' siempre llevan -ing, nunca 'to + infinitivo': valoran si una actividad merece la pena o no. Como 'no point' suele ir con la preposición 'in', encaja con la regla general de preposición + -ing.",
        "note": "It's no use worrying. · There's no point in waiting. · It's worth trying."
      }
    ],
    "quiz": [
      {
        "q": "There's no point in ___ — they won't listen.",
        "opts": [
          "argue",
          "to argue",
          "arguing",
          "argued"
        ],
        "ans": 2,
        "exp": "'There's no point in' + -ing: 'arguing'."
      },
      {
        "q": "It's worth ___ that new restaurant.",
        "opts": [
          "try",
          "to try",
          "trying",
          "tried"
        ],
        "ans": 2,
        "exp": "'It's worth' + -ing: 'trying'."
      }
    ],
    "flashcards": [
      {
        "front": "Phrases + -ing",
        "back": "it's no use DOING\nthere's no point in DOING\nit's worth DOING\nit's no good DOING\nI can't help DOING (= I can't stop)\nI'm used to DOING\nI look forward to DOING"
      }
    ],
    "syntaxChips": [
      { "label": "Adjective + preposition + -ing", "chips": [
        { "text": "be interested in / keen on", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Fixed phrase + -ing", "chips": [
        { "text": "it's no use / there's no point in", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "ADJECTIVE + PREPOSITION + -ING", "example": "I'm interested in learning Italian.", "highlight": "interested in learning" },
      "right": { "label": "VERB + TO", "example": "I want to learn Italian.", "highlight": "want to learn" },
      "caption": "When a preposition (in, on, about) comes before the verb, it must take -ing — but plain verbs like 'want' take 'to'."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "I'm thinking of taking an evening class. I'm really interested in learning to paint.", "translation": "Estoy pensando en apuntarme a una clase por la tarde. Me interesa mucho aprender a pintar." },
      { "speaker": "user", "text": "That's great! Are you keen on trying watercolours?", "translation": "¡Qué bien! ¿Te apetece probar con acuarelas?" },
      { "speaker": "other", "text": "Yes, though there's no point in buying expensive materials at first.", "translation": "Sí, aunque no tiene sentido comprar materiales caros al principio." },
      { "speaker": "user", "text": "True — it's worth trying cheap ones before you commit.", "translation": "Cierto — merece la pena probar con unos baratos antes de comprometerte." },
      { "speaker": "other", "text": "Exactly. It's no use spending money if I might not stick with it.", "translation": "Exacto. No sirve de nada gastar dinero si a lo mejor no continúo." }
    ],
    "tips": [
      "Frases fijas como \"interested in\", \"keen on\", \"no point in\" siempre llevan \"-ing\" porque terminan en preposición.",
      "No confundas \"interested in doing\" (adjetivo+preposición) con \"want to do\" (verbo normal) — cada uno sigue su propia regla."
    ],
    "dailyWords": [
      { "w": "worthwhile", "ipa": "/ˌwɜːθˈwaɪl/", "aprox": "uorzuáil", "def": "que vale la pena", "ex": "It was a worthwhile experience." },
      { "w": "to commit to", "ipa": "/kəˈmɪt tuː/", "aprox": "comít tu", "def": "comprometerse a", "ex": "She committed to finishing the course." }
    ]
  },
  "59": {
    "title": "Prefer and Would Rather",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Prefer + -ing / to",
        "body": "'Prefer' expresa una preferencia general de dos formas: 'prefer + -ing + to + -ing' (comparando dos actividades: 'I prefer swimming to running') o 'prefer to + infinitivo + rather than + verbo base'. No lo confundas con 'would prefer', que es una elección puntual y siempre lleva 'to + infinitivo'.",
        "note": "I prefer swimming to running. · I prefer to swim rather than run."
      },
      {
        "head": "Would rather + verbo base",
        "body": "'Would rather' significa casi lo mismo que 'would prefer', pero va seguido directamente del verbo base, sin 'to': 'I'd rather stay' es correcto, 'I'd rather to stay' no. Por eso se comporta más como un modal (can, must) que como un verbo normal.",
        "note": "I'd rather stay at home. · She'd rather not go. · I'd rather have tea than coffee."
      },
      {
        "head": "Would rather + otra persona",
        "body": "Para decir lo que prefieres que haga OTRA persona (no tú), la estructura cambia: 'would rather + sujeto + pasado simple', como en 'I'd rather you didn't smoke'. Igual que en el segundo condicional, ese pasado no habla del pasado: es solo la marca gramatical para la acción de otra persona.",
        "note": "I'd rather you didn't smoke. · She'd rather we stayed home."
      }
    ],
    "quiz": [
      {
        "q": "I'd rather ___ at home tonight.",
        "opts": [
          "to stay",
          "staying",
          "stay",
          "stayed"
        ],
        "ans": 2,
        "exp": "'Would rather' + verbo base (sin to): 'I'd rather stay'."
      },
      {
        "q": "I prefer ___ to cycling.",
        "opts": [
          "walk",
          "walking",
          "to walk",
          "walked"
        ],
        "ans": 1,
        "exp": "'Prefer' + -ing: 'I prefer walking to cycling'."
      }
    ],
    "flashcards": [
      {
        "front": "WOULD RATHER vs PREFER",
        "back": "WOULD RATHER + base verb:\n'I'd rather stay home.'\n'I'd rather not go.' (negative)\n\nPREFER + -ing:\n'I prefer swimming to running.'\n\nWOULD PREFER + to infinitive:\n'I'd prefer to stay.'"
      }
    ],
    "syntaxChips": [
      { "label": "Prefer (general)", "chips": [
        { "text": "prefer", "role": "verb" }, { "text": "doing", "role": "object" }, { "text": "to doing", "role": "connector" }
      ] },
      { "label": "Would rather (yourself)", "chips": [
        { "text": "'d rather", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "Would rather (someone else)", "chips": [
        { "text": "'d rather", "role": "verb" }, { "text": "subject + past simple", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "PREFER + -ING / TO", "example": "I prefer walking to cycling.", "highlight": "prefer walking to" },
      "right": { "label": "WOULD RATHER + BASE VERB", "example": "I'd rather walk than cycle.", "highlight": "'d rather walk" },
      "caption": "'Prefer' takes -ing (+ to) or to-infinitive (+ rather than); 'would rather' drops 'to' completely and uses the bare verb."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Shall we get pizza tonight, or would you rather cook?", "translation": "¿Pedimos pizza esta noche, o prefieres cocinar?" },
      { "speaker": "user", "text": "Honestly, I'd rather order in — I'm exhausted.", "translation": "Sinceramente, prefiero pedir comida — estoy agotado." },
      { "speaker": "other", "text": "Fair enough. I prefer pizza to sushi anyway.", "translation": "Vale. De todas formas prefiero la pizza al sushi." },
      { "speaker": "user", "text": "Same here. Actually, I'd rather you chose the toppings this time.", "translation": "Yo también. De hecho, prefiero que elijas tú los ingredientes esta vez." },
      { "speaker": "other", "text": "Deal — I'd rather have mushrooms than olives.", "translation": "Trato hecho — prefiero champiñones antes que aceitunas." }
    ],
    "tips": [
      "WOULD RATHER nunca lleva \"to\": di \"I'd rather stay\", no \"I'd rather to stay\".",
      "Para hablar de lo que prefieres que OTRA persona haga, usa pasado simple: \"I'd rather you called me\" (no \"to call\")."
    ],
    "dailyWords": [
      { "w": "topping", "ipa": "/ˈtɒpɪŋ/", "aprox": "tópin", "def": "ingrediente que se pone encima (de una pizza, etc.)", "ex": "My favourite pizza topping is mushroom." },
      { "w": "to order in", "ipa": "/ˈɔːdər ɪn/", "aprox": "órder in", "def": "pedir comida a domicilio", "ex": "Let's order in tonight, I don't feel like cooking." }
    ]
  },
  "60": {
    "title": "Preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Después de preposición: siempre -ing",
        "body": "Cuando un verbo va justo después de una preposición (in, at, of, without, after, before), siempre toma la forma -ing; es una de las reglas más fiables del inglés. Algunas expresiones despistan porque parecen pedir 'to + infinitivo', pero si ese 'to' funciona como preposición (como en 'look forward to'), sigue aplicando la regla del -ing.",
        "note": "interested in learning · good at cooking · without saying goodbye · after leaving · before eating"
      },
      {
        "head": "Frases fijas con preposición + -ing",
        "body": "Expresiones muy comunes como look forward to, be used to, in addition to, succeed in o be responsible for terminan en preposición, aunque alguna (como 'to') no lo parezca a simple vista. Por eso el verbo que sigue va siempre en -ing.",
        "note": "look forward to doing · be used to doing · in addition to doing · succeed in doing · be responsible for doing"
      }
    ],
    "quiz": [
      {
        "q": "She left without ___ goodbye.",
        "opts": [
          "say",
          "to say",
          "saying",
          "said"
        ],
        "ans": 2,
        "exp": "Tras la preposición 'without' → -ing: 'without saying'."
      },
      {
        "q": "I look forward to ___ from you.",
        "opts": [
          "hear",
          "hearing",
          "to hear",
          "heard"
        ],
        "ans": 1,
        "exp": "'Look forward to' + -ing: 'I look forward to hearing from you.'"
      }
    ],
    "flashcards": [
      {
        "front": "After PREPOSITIONS → always -ing",
        "back": "in → interested IN LEARNING\nat → good AT COOKING\nof → tired OF WAITING\nafter → after EATING\nbefore → before LEAVING\nwithout → without SAYING goodbye\nto* → look forward TO DOING"
      }
    ],
    "syntaxChips": [
      { "label": "Preposition + -ing", "chips": [
        { "text": "interested in / good at / without", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Fixed phrasal expression", "chips": [
        { "text": "look forward to / be used to", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "readingText": {
      "title": "A Letter to a Friend",
      "body": "Dear Anna, I hope you're well. I'm really looking forward to seeing you next month — it's been ages! I've been quite busy at work, but I'm good at managing my time, so I still find moments to relax. Yesterday I left the office without finishing a report, which isn't like me, but I was tired after staying up late. Before leaving for the weekend, I succeeded in tidying my whole flat, which felt great. I'm also thinking about signing up for a cooking course — I'm interested in learning some new recipes before your visit. Write back soon instead of waiting for me to call!",
      "translation": "Querida Anna: Espero que estés bien. Tengo muchísimas ganas de verte el mes que viene — ¡ha pasado una eternidad! He estado bastante ocupada en el trabajo, pero se me da bien organizar mi tiempo, así que todavía encuentro momentos para relajarme. Ayer salí de la oficina sin terminar un informe, algo poco propio de mí, pero estaba cansada por haberme acostado tarde. Antes de irme el fin de semana, conseguí ordenar todo el piso, y me sentí genial. También estoy pensando en apuntarme a un curso de cocina — me interesa aprender recetas nuevas antes de tu visita. ¡Escríbeme pronto en vez de esperar a que te llame yo!"
    },
    "tips": [
      "Regla de oro: después de CUALQUIER preposición (in, at, of, without, before...) el verbo siempre va en \"-ing\".",
      "Ojo con \"to\" en frases como \"look forward to\" — ahí \"to\" es preposición, así que necesita \"-ing\", no infinitivo."
    ],
    "dailyWords": [
      { "w": "to tidy up", "ipa": "/ˈtaɪdi ʌp/", "aprox": "táidi ap", "def": "ordenar, poner en orden", "ex": "I need to tidy up my room." },
      { "w": "ages", "ipa": "/ˈeɪdʒɪz/", "aprox": "éiyis", "def": "mucho tiempo (coloquial)", "ex": "I haven't seen her in ages." }
    ]
  },
  "61": {
    "title": "Be/Get Used to… (I'm used to getting up early)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Used to + -ing (= acostumbrado a)",
        "body": "'Be used to' + -ing describe algo que ahora te resulta normal y familiar, porque ya lo has vivido muchas veces; aquí 'used' es adjetivo ('acostumbrado') y 'to' es preposición, por eso pide -ing. Describe un estado actual, no una acción. No lo confundas con 'used to + verbo base' (hábito pasado), visto en el bloque siguiente.",
        "note": "I'm used to getting up early. · She's not used to the cold. · Are you used to the noise?"
      },
      {
        "head": "Get used to + -ing",
        "body": "'Get used to' + -ing describe el PROCESO de acostumbrarte a algo, pasando de lo extraño a lo normal — es el cambio, no el estado ya logrado de 'be used to'. Dices 'I'm getting used to the traffic' mientras te adaptas, y 'I'm used to it' cuando ya lo has conseguido.",
        "note": "I'm getting used to the traffic. · It took time but I got used to living alone."
      },
      {
        "head": "Diferente de 'used to do'",
        "body": "No confundas 'used to + verbo base' (hábito del pasado que ya no existe: 'I used to wake up late') con 'be used to + -ing' (algo normal para ti ahora). Se parecen, pero 'used to do' habla del pasado sin preposición, y 'be/get used to doing' habla del presente y siempre pide -ing.",
        "note": "I used to wake up late. (past habit) · I'm used to waking up early. (accustomed to now)"
      }
    ],
    "quiz": [
      {
        "q": "I'm not used to ___ so early.",
        "opts": [
          "wake",
          "to wake",
          "woke",
          "waking"
        ],
        "ans": 3,
        "exp": "'Be used to' + -ing: 'I'm not used to waking so early.'"
      },
      {
        "q": "It's hard at first, but you'll ___ used to it.",
        "opts": [
          "be",
          "get",
          "become",
          "feel"
        ],
        "ans": 1,
        "exp": "Proceso de acostumbrarse → 'get used to it'."
      }
    ],
    "flashcards": [
      {
        "front": "USED TO do vs BE USED TO doing",
        "back": "USED TO + base verb = past habit (no longer):\n'I used to smoke.' (I don't now)\n\nBE USED TO + -ing = accustomed to:\n'I'm used to getting up early.' (it's normal for me)"
      }
    ],
    "syntaxChips": [
      { "label": "Accustomed now", "chips": [
        { "text": "be used to", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Becoming accustomed", "chips": [
        { "text": "get used to", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Past habit (different!)", "chips": [
        { "text": "used to", "role": "verb" }, { "text": "base verb", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "USED TO + BASE VERB (past habit)", "example": "I used to wake up late.", "highlight": "used to wake" },
      "right": { "label": "BE USED TO + -ING (current habit)", "example": "I'm used to waking up early now.", "highlight": "used to waking" },
      "caption": "'Used to + verb' is a habit that's over; 'be used to + -ing' means something feels normal to you now."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "How's life in London? Are you used to the weather yet?", "translation": "¿Qué tal la vida en Londres? ¿Ya te has acostumbrado al clima?" },
      { "speaker": "user", "text": "Slowly! I'm getting used to the rain, but I still miss the sun.", "translation": "¡Poco a poco! Me estoy acostumbrando a la lluvia, pero todavía echo de menos el sol." },
      { "speaker": "other", "text": "I remember that. I used to complain about it constantly at first.", "translation": "Me acuerdo de eso. Al principio yo me quejaba constantemente." },
      { "speaker": "user", "text": "Really? Are you used to it now?", "translation": "¿En serio? ¿Ya te has acostumbrado?" },
      { "speaker": "other", "text": "Completely — I'm even used to carrying an umbrella everywhere!", "translation": "Totalmente — ¡hasta me he acostumbrado a llevar paraguas a todas partes!" }
    ],
    "tips": [
      "BE USED TO + -ing = ya es normal para ti AHORA; USED TO + verbo base = un hábito del PASADO que ya no existe.",
      "GET used to = el proceso de acostumbrarte; BE used to = ya estás acostumbrado (el resultado final)."
    ],
    "dailyWords": [
      { "w": "to adapt", "ipa": "/əˈdæpt/", "aprox": "adápt", "def": "adaptarse", "ex": "It took months to adapt to the new schedule." },
      { "w": "umbrella", "ipa": "/ʌmˈbrelə/", "aprox": "ambréla", "def": "paraguas", "ex": "Don't forget your umbrella, it might rain." }
    ]
  },
  "62": {
    "title": "Verb + preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbo + preposición + -ing",
        "body": "Muchos verbos llevan una preposición fija (succeed IN, insist ON, apologise FOR, dream OF), y el verbo que sigue a esa preposición va siempre en -ing — la misma regla de otras unidades, aplicada aquí a verbo+preposición. Aprende el verbo junto con su preposición para recordar que pide -ing.",
        "note": "succeed IN doing · insist ON doing · apologise FOR doing · dream OF doing"
      },
      {
        "head": "Look forward to + -ing",
        "body": "En 'look forward to', el 'to' funciona como preposición, no como el 'to' del infinitivo, aunque se escriba igual — uno de los errores más comunes. Por eso el verbo siguiente va en -ing: 'I'm looking forward to seeing you', nunca 'to see you'.",
        "note": "I'm looking forward to seeing you. (NOT: to see you ❌)"
      },
      {
        "head": "Feel like + -ing",
        "body": "'Feel like' + -ing es una forma informal de decir que te apetece algo, normalmente un impulso pasajero más que un plan firme: 'I don't feel like going out tonight' es 'no me apetece salir'. Aquí 'like' también funciona como preposición, por eso pide -ing y no 'to'.",
        "note": "I don't feel like going out tonight."
      }
    ],
    "quiz": [
      {
        "q": "I'm looking forward ___ you soon.",
        "opts": [
          "to see",
          "to seeing",
          "seeing",
          "see"
        ],
        "ans": 1,
        "exp": "'Look forward to' + -ing (aquí 'to' es preposición)."
      },
      {
        "q": "She apologised ___ late.",
        "opts": [
          "for arrive",
          "for arriving",
          "to arrive",
          "arriving"
        ],
        "ans": 1,
        "exp": "'Apologise for' + -ing."
      },
      {
        "q": "He succeeded ___ the exam.",
        "opts": [
          "to pass",
          "in passing",
          "on passing",
          "pass"
        ],
        "ans": 1,
        "exp": "'Succeed in' + -ing."
      },
      {
        "q": "I don't feel ___ out tonight.",
        "opts": [
          "to go",
          "going",
          "like going",
          "go"
        ],
        "ans": 2,
        "exp": "'Feel like' + -ing = tener ganas de."
      }
    ],
    "flashcards": [
      {
        "front": "Verb + preposition + -ing",
        "back": "After a preposition, the verb always takes the -ing form, never the infinitive:\nsucceed IN doing · insist ON doing · apologise FOR doing · dream OF doing · think ABOUT doing"
      }
    ],
    "syntaxChips": [
      { "label": "Verb + preposition + -ing", "chips": [
        { "text": "succeed in / insist on / apologise for", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Special case: look forward to", "chips": [
        { "text": "look forward to", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "I'm sorry, I have to cancel dinner tonight.", "translation": "Lo siento, tengo que cancelar la cena de esta noche." },
      { "speaker": "user", "text": "No worries. I don't feel like going out much anyway.", "translation": "No te preocupes. La verdad es que hoy tampoco me apetece mucho salir." },
      { "speaker": "other", "text": "Thanks for understanding. I apologise for cancelling so late.", "translation": "Gracias por entenderlo. Me disculpo por cancelar tan tarde." },
      { "speaker": "user", "text": "Honestly, I'm looking forward to just staying home and resting.", "translation": "La verdad es que tengo ganas de quedarme en casa y descansar." },
      { "speaker": "other", "text": "Same! I dream of having a whole free weekend.", "translation": "¡Igual! Sueño con tener un fin de semana entero libre." }
    ],
    "tips": [
      "Muchos verbos llevan una preposición fija (succeed IN, insist ON, apologise FOR) — apréndelos juntos, como una sola pieza.",
      "Cuidado con \"look forward to\" y \"feel like\": aunque parezcan raros, siguen la misma regla — preposición + \"-ing\"."
    ],
    "dailyWords": [
      { "w": "to apologise", "ipa": "/əˈpɒlədʒaɪz/", "aprox": "apóloyais", "def": "disculparse, pedir perdón", "ex": "He apologised for being late." },
      { "w": "to insist", "ipa": "/ɪnˈsɪst/", "aprox": "insíst", "def": "insistir", "ex": "She insisted on paying the bill." }
    ]
  },
  "63": {
    "title": "There's No Point in… / It's No Use…",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Expresiones + -ing",
        "body": "Expresiones fijas sobre si algo merece la pena ('there's no point in', 'it's no use', 'it's not worth', 'I can't help') siempre llevan -ing. Casi todas esconden una preposición ('in', o implícita), la misma razón de la regla general preposición + -ing. Mejor aprenderlas como bloque completo.",
        "note": "There's no point in arguing. · It's no use crying. · It's not worth worrying about it. · I can't help laughing."
      },
      {
        "head": "I can't help + -ing",
        "body": "'Can't help' + -ing significa que no puedes evitar hacer algo, a menudo una reacción automática como reír o llorar: 'I can't help laughing' es 'no puedo evitar reírme'. Aquí 'help' significa 'evitar', no 'ayudar' — mejor aprenderlo como modismo fijo.",
        "note": "I can't help laughing when I hear that joke. · She couldn't help crying."
      }
    ],
    "quiz": [
      {
        "q": "It's no use ___ him — he never listens.",
        "opts": [
          "to tell",
          "tell",
          "telling",
          "told"
        ],
        "ans": 2,
        "exp": "'It's no use' + -ing: 'telling'."
      },
      {
        "q": "I can't help ___ when he says that.",
        "opts": [
          "laugh",
          "to laugh",
          "laughing",
          "laughed"
        ],
        "ans": 2,
        "exp": "'Can't help' + -ing: 'laughing'."
      }
    ],
    "flashcards": [
      {
        "front": "Expressions always followed by -ing",
        "back": "There's no POINT in DOING\nIt's no USE DOING\nIt's not WORTH DOING\nI can't HELP DOING (= can't stop)\nI don't mind DOING\nWhat's the point of DOING?"
      }
    ],
    "syntaxChips": [
      { "label": "Pointless/useless expressions", "chips": [
        { "text": "there's no point in / it's no use", "role": "connector" }, { "text": "doing", "role": "object" }
      ] },
      { "label": "Can't help", "chips": [
        { "text": "can't help", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "readingText": {
      "title": "Stuck in Traffic",
      "body": "There's no point in getting angry when you're stuck in traffic — it never makes the cars move any faster. Still, I can't help feeling frustrated every time it happens. This morning I sat in my car for almost an hour, and it was no use checking the map every five minutes because nothing changed. My friend texted me, saying there was no point in waiting for me at the usual time. Honestly, it's not worth worrying about things you can't control, but I couldn't help laughing when I saw three other drivers doing exactly what I was doing — checking their phones every few seconds.",
      "translation": "No sirve de nada enfadarse cuando estás atrapado en un atasco — nunca hace que los coches se muevan más rápido. Aun así, no puedo evitar sentirme frustrado cada vez que pasa. Esta mañana estuve casi una hora sentado en el coche, y no servía de nada mirar el mapa cada cinco minutos porque nada cambiaba. Mi amiga me escribió un mensaje diciendo que no tenía sentido esperarme a la hora habitual. Sinceramente, no merece la pena preocuparse por cosas que no puedes controlar, pero no pude evitar reírme cuando vi a otros tres conductores haciendo exactamente lo mismo que yo — mirando el móvil cada pocos segundos."
    },
    "tips": [
      "Estas expresiones (\"no point in\", \"no use\", \"not worth\") siempre van seguidas de \"-ing\", nunca de \"to\".",
      "CAN'T HELP + -ing significa que no puedes evitar hacer algo, como una reacción automática (reír, llorar...)."
    ],
    "dailyWords": [
      { "w": "frustrated", "ipa": "/frʌˈstreɪtɪd/", "aprox": "frastréitid", "def": "frustrado", "ex": "He felt frustrated after waiting so long." },
      { "w": "traffic jam", "ipa": "/ˈtræfɪk dʒæm/", "aprox": "tráfik yam", "def": "atasco de tráfico", "ex": "We were stuck in a traffic jam for an hour." }
    ]
  },
  "64": {
    "title": "To… For… So That… (Purpose)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "To + infinitivo: propósito",
        "body": "'To + infinitivo' es la forma más directa de explicar el propósito de una acción, respondiendo a '¿para qué?': 'I went to the shop to buy some milk'. Se usa cuando el sujeto del propósito es el mismo que el del verbo principal. Si el propósito es una cosa, se usa 'for + sustantivo'.",
        "note": "I went to the shop to buy some milk. · She studies hard to pass the exam."
      },
      {
        "head": "For + sustantivo: propósito",
        "body": "'For + sustantivo' expresa propósito igual que 'to + infinitivo', pero se usa cuando lo que sigue es una cosa, no una acción: 'I went to the shop for some milk' nombra la cosa; 'to buy some milk' nombra la acción. No digas 'for buy some milk': 'for' necesita un sustantivo.",
        "note": "I went to the shop for some milk. · This tool is for cutting wood."
      },
      {
        "head": "So that: propósito con sujeto propio",
        "body": "'So that + oración' se usa cuando el propósito involucra a otra persona distinta del sujeto principal, o necesita un modal (can, could, would) — casos donde 'to + infinitivo' no funciona. 'I left early so that I could catch the bus' expresa un propósito con 'could' que 'to catch the bus' no podría transmitir.",
        "note": "I left early so that I could catch the bus. · She speaks slowly so that people can understand."
      }
    ],
    "quiz": [
      {
        "q": "She called ___ check the time.",
        "opts": [
          "for",
          "so that",
          "to",
          "in order that"
        ],
        "ans": 2,
        "exp": "Propósito → 'to': 'She called to check the time.'"
      },
      {
        "q": "I spoke loudly ___ everyone could hear me.",
        "opts": [
          "to",
          "for",
          "so that",
          "because"
        ],
        "ans": 2,
        "exp": "Propósito con verbo modal → 'so that': 'so that everyone could hear'."
      }
    ],
    "flashcards": [
      {
        "front": "TO vs FOR vs SO THAT (purpose)",
        "back": "TO + infinitive: 'I went to buy milk.'\nFOR + noun: 'I went for milk.'\nSO THAT + clause: 'I went so that I could get milk.'\n\n'So that' used when purpose involves a modal or different subject."
      }
    ],
    "syntaxChips": [
      { "label": "Purpose (same subject)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb", "role": "verb" }, { "text": "to + base verb", "role": "connector" }
      ] },
      { "label": "Purpose (a thing)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb", "role": "verb" }, { "text": "for + noun", "role": "connector" }
      ] },
      { "label": "Purpose (modal/other subject)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb", "role": "verb" }, { "text": "so that + clause", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "TO + INFINITIVE (action)", "example": "I went to the shop to buy milk.", "highlight": "to buy" },
      "right": { "label": "FOR + NOUN (thing)", "example": "I went to the shop for some milk.", "highlight": "for some milk" },
      "caption": "Use 'to' before a verb (the action) and 'for' before a noun (the thing) — they express the same purpose, differently."
    },
    "readingText": {
      "title": "A Busy Morning",
      "body": "I woke up early to finish some work before my meeting. First, I went to the kitchen for a strong coffee, and then I drove to the supermarket for a few things we needed for dinner. On the way home, I stopped at the pharmacy to pick up a prescription for my mother, so that she wouldn't have to go out in the cold herself. I also called my sister to ask about the weekend, and I spoke slowly so that she could hear me clearly over the noisy street. By the time I got home, I was exhausted, but at least I'd done everything for a smooth start to the week.",
      "translation": "Me desperté temprano para terminar algo de trabajo antes de mi reunión. Primero fui a la cocina a por un café bien cargado, y luego conduje hasta el supermercado a por algunas cosas que necesitábamos para la cena. De camino a casa, paré en la farmacia para recoger una receta de mi madre, para que ella no tuviera que salir con el frío. También llamé a mi hermana para preguntarle sobre el fin de semana, y hablé despacio para que pudiera oírme bien con el ruido de la calle. Cuando llegué a casa, estaba agotada, pero al menos había hecho todo para empezar bien la semana."
    },
    "tips": [
      "TO + verbo explica la acción (\"to buy milk\"); FOR + sustantivo explica la cosa (\"for some milk\").",
      "Usa SO THAT cuando el propósito necesita un verbo modal (can, could, would) o involucra a otra persona distinta del sujeto."
    ],
    "dailyWords": [
      { "w": "errand", "ipa": "/ˈerənd/", "aprox": "érand", "def": "recado, mandado", "ex": "I have to run a few errands this morning." },
      { "w": "prescription", "ipa": "/prɪˈskrɪpʃn/", "aprox": "priskrípshon", "def": "receta médica", "ex": "She picked up her prescription at the pharmacy." }
    ]
  },
  "65": {
    "title": "Adjective + to…",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Adjetivo + to",
        "body": "Muchos adjetivos (nice, easy, difficult, happy, sorry...) van seguidos de 'to + infinitivo' al comentar una acción o reacción: 'nice to meet you', 'difficult to learn'. Es un patrón muy productivo, especialmente en frases sociales fijas como 'nice to meet you' o 'sorry to hear that'.",
        "note": "nice to meet you · easy to understand · difficult to learn · happy to help · sorry to hear that"
      },
      {
        "head": "It's + adjetivo + to",
        "body": "'It's + adjetivo + to + infinitivo' es una estructura muy común para comentar una acción en general, usando 'it' como sujeto vacío que no se refiere a nada concreto: 'it's easy to make mistakes' comenta la actividad en general, no un error concreto.",
        "note": "It's easy to make mistakes. · It's important to be on time. · It's nice to see you."
      },
      {
        "head": "Too / enough + to",
        "body": "'Too' y 'enough' se combinan con adjetivo + 'to + infinitivo' con lógica opuesta: 'too + adjetivo + to' bloquea la acción por exceso ('too hot to go outside'), y 'adjetivo + enough + to' la permite por ser suficiente ('old enough to vote'). Ojo al orden: 'enough' va DESPUÉS del adjetivo, 'too' va ANTES.",
        "note": "It's too hot to go outside. · She's old enough to vote. · I'm not strong enough to lift it."
      }
    ],
    "quiz": [
      {
        "q": "It's nice ___ you.",
        "opts": [
          "meeting",
          "meet",
          "to meet",
          "met"
        ],
        "ans": 2,
        "exp": "Adjetivo + infinitivo con to: 'It's nice to meet you.'"
      },
      {
        "q": "The box is too heavy ___.",
        "opts": [
          "to lift",
          "for lifting",
          "lifting",
          "lift"
        ],
        "ans": 0,
        "exp": "'Too + adjetivo + to': 'too heavy to lift'."
      }
    ],
    "flashcards": [
      {
        "front": "TOO / ENOUGH + to infinitive",
        "back": "TOO + adj + TO do:\n'It's too cold to go outside.' (= so cold that I can't go)\n\nAdj + ENOUGH + TO do:\n'She's tall enough to reach it.' (= sufficiently tall)"
      }
    ],
    "syntaxChips": [
      { "label": "Adjective + to", "chips": [
        { "text": "It's", "role": "subject" }, { "text": "adjective", "role": "verb" }, { "text": "to do", "role": "object" }
      ] },
      { "label": "Too + adjective + to", "chips": [
        { "text": "too", "role": "connector" }, { "text": "adjective", "role": "verb" }, { "text": "to do", "role": "object" }
      ] },
      { "label": "Adjective + enough + to", "chips": [
        { "text": "adjective", "role": "verb" }, { "text": "enough", "role": "connector" }, { "text": "to do", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "TOO + adjective + TO (excessive, blocks action)", "example": "It's too cold to go outside.", "highlight": "too cold to go" },
      "right": { "label": "adjective + ENOUGH + TO (sufficient, allows action)", "example": "She's old enough to vote.", "highlight": "old enough to vote" },
      "caption": "'Too' comes before the adjective and blocks the action; 'enough' comes after the adjective and allows it."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "It's nice to finally meet you in person!", "translation": "¡Qué bien conocerte por fin en persona!" },
      { "speaker": "user", "text": "You too! Sorry to hear your flight was delayed.", "translation": "¡Igualmente! Siento que tu vuelo se retrasara." },
      { "speaker": "other", "text": "It's not too bad — I'm just glad it's warm enough to sit outside today.", "translation": "No está tan mal — me alegra que haga suficiente calor para sentarnos fuera hoy." },
      { "speaker": "user", "text": "True, though it's too windy to stay out here long.", "translation": "Es verdad, aunque hace demasiado viento para quedarnos aquí mucho rato." },
      { "speaker": "other", "text": "Fair point — let's find somewhere quiet enough to talk properly.", "translation": "Buen punto — busquemos un sitio suficientemente tranquilo para hablar bien." }
    ],
    "tips": [
      "TOO + adjetivo significa \"demasiado\" y bloquea la acción: \"too heavy to lift\" (no se puede levantar).",
      "Adjetivo + ENOUGH significa \"suficientemente\" y permite la acción — ojo, \"enough\" va DESPUÉS del adjetivo."
    ],
    "dailyWords": [
      { "w": "delayed", "ipa": "/dɪˈleɪd/", "aprox": "diléid", "def": "retrasado", "ex": "Our flight was delayed by two hours." },
      { "w": "windy", "ipa": "/ˈwɪndi/", "aprox": "uíndi", "def": "ventoso", "ex": "It's too windy to fly a kite today." }
    ]
  },
  "66": {
    "title": "to… and preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "¿'To' es infinitivo o preposición?",
        "body": "Normalmente 'to' + verbo base es la marca del infinitivo ('I want to go'). Pero en expresiones fijas como look forward to, be/get used to u object to, 'to' funciona en secreto como preposición, así que el verbo siguiente va en -ing. Hay que reconocer estas excepciones y aprenderlas una por una.",
        "note": "I want to go. (infinitive) · I'm looking forward to going. (preposition + -ing)"
      },
      {
        "head": "Be/get used to + -ing",
        "body": "Es la misma confusión de la unidad 61: 'used to + verbo base' es un hábito pasado ya terminado ('I used to smoke'), sin preposición; 'be/get used to' + -ing describe familiaridad presente, donde 'to' es preposición ('I'm used to smoking'). Comparten las palabras pero tienen gramática distinta.",
        "note": "I used to smoke. (past habit) · I'm used to smoking. (accustomed, = to is a preposition) · I'm getting used to waking up early."
      },
      {
        "head": "Object to / in addition to + -ing",
        "body": "'Object to' e 'in addition to' son otras dos expresiones donde 'to' es preposición, no marca de infinitivo, así que el verbo siguiente va en -ing: 'he objects to being told what to do', 'in addition to working, she studies at night'. Se aprenden en bloque, como 'look forward to'.",
        "note": "He objects to being told what to do. · In addition to working, she studies at night."
      }
    ],
    "quiz": [
      {
        "q": "I'm not used ___ up so early.",
        "opts": [
          "to get",
          "to getting",
          "get",
          "getting"
        ],
        "ans": 1,
        "exp": "'Be used to' — aquí 'to' es preposición, va con -ing."
      },
      {
        "q": "She decided ___ the job.",
        "opts": [
          "to accept",
          "to accepting",
          "accepting",
          "accept"
        ],
        "ans": 0,
        "exp": "'Decide to' + infinitivo — 'to' normal."
      },
      {
        "q": "He objects ___ asked personal questions.",
        "opts": [
          "to be",
          "to being",
          "being",
          "be"
        ],
        "ans": 1,
        "exp": "'Object to' + -ing — 'to' es preposición."
      }
    ],
    "flashcards": [
      {
        "front": "Is TO an infinitive marker or a preposition?",
        "back": "Usually 'to' + base verb = infinitive: 'I want to go.'\nBut some expressions use 'to' as a PREPOSITION, followed by -ing:\nlook forward TO doing · be/get used TO doing · object TO doing\nCompare: 'I used to smoke.' (past habit, + base verb) vs 'I'm used to smoking.' (accustomed, + -ing)"
      }
    ],
    "syntaxChips": [
      { "label": "To = infinitive marker", "chips": [
        { "text": "want / decide", "role": "verb" }, { "text": "to", "role": "connector" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "To = preposition", "chips": [
        { "text": "look forward to / be used to / object to", "role": "connector" }, { "text": "doing", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "TO = infinitive marker", "example": "I used to smoke.", "highlight": "used to smoke" },
      "right": { "label": "TO = preposition (+ -ing)", "example": "I'm used to smoking now.", "highlight": "used to smoking" },
      "caption": "Same words, different grammar: as an infinitive marker 'to' takes the base verb; as a hidden preposition it demands -ing."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "How's the new job? Are you used to waking up so early yet?", "translation": "¿Qué tal el nuevo trabajo? ¿Ya te has acostumbrado a despertarte tan temprano?" },
      { "speaker": "user", "text": "Not really, but I'm looking forward to getting a routine going.", "translation": "La verdad es que no, pero tengo ganas de coger una rutina." },
      { "speaker": "other", "text": "I remember I used to hate mornings too.", "translation": "Recuerdo que a mí también solían disgustarme las mañanas." },
      { "speaker": "user", "text": "My only problem is my boss objects to me arriving five minutes late.", "translation": "Mi único problema es que a mi jefe le molesta que llegue cinco minutos tarde." },
      { "speaker": "other", "text": "Well, in addition to getting up earlier, maybe try leaving the house sooner!", "translation": "Bueno, además de levantarte antes, ¡quizás prueba a salir de casa antes!" }
    ],
    "tips": [
      "No confundas \"used to + verbo\" (hábito pasado) con \"be used to + -ing\" (algo normal ahora) — llevan la misma palabra \"to\" pero significan cosas distintas.",
      "Cuando \"to\" va después de una expresión fija (look forward to, object to, in addition to), casi siempre es preposición → usa \"-ing\"."
    ],
    "dailyWords": [
      { "w": "routine", "ipa": "/ruːˈtiːn/", "aprox": "rutín", "def": "rutina", "ex": "It took a while to get into a routine." },
      { "w": "to object", "ipa": "/əbˈdʒekt/", "aprox": "obyékt", "def": "oponerse, poner objeciones", "ex": "Nobody objected to the new plan." }
    ]
  },
  "67": {
    "title": "See Somebody Do / Doing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "See/hear/watch + objeto + -ing (en curso)",
        "body": "Con see, hear o watch + objeto + -ing, presenciaste solo una PARTE de la acción, ya en marcha, sin saber cuándo empezó o acabó: 'I saw her crossing the street' sugiere que la viste a medio cruce, no el trayecto entero.",
        "note": "I saw her crossing the street. · I could hear them arguing. · I watched them playing."
      },
      {
        "head": "See/hear/watch + objeto + verbo base (completa)",
        "body": "Con see, hear o watch + objeto + verbo base (sin -ing), presenciaste la acción ENTERA, de principio a fin: 'I saw her cross the street' significa que viste todo el cruce. Elegir entre las dos formas indica cuánto viste realmente de la acción.",
        "note": "I saw her cross the street. (the whole event) · I heard him come in."
      }
    ],
    "quiz": [
      {
        "q": "I saw him ___ the building. (complete action)",
        "opts": [
          "to enter",
          "entering",
          "enter",
          "entered"
        ],
        "ans": 2,
        "exp": "Acción completa vista de principio a fin → verbo base: 'saw him enter'."
      },
      {
        "q": "I could hear someone ___ in the next room.",
        "opts": [
          "to cry",
          "cry",
          "cries",
          "crying"
        ],
        "ans": 3,
        "exp": "Acción parcial (en curso) → -ing: 'hear someone crying'."
      }
    ],
    "flashcards": [
      {
        "front": "See/hear/watch + object + -ING vs base verb",
        "back": "-ING = action in progress when witnessed:\n'I saw him crossing the street.' (in the middle of it)\n\nBASE VERB = complete action:\n'I saw him cross the street.' (from start to finish)"
      }
    ],
    "syntaxChips": [
      { "label": "Action in progress", "chips": [
        { "text": "see / hear / watch", "role": "verb" }, { "text": "object", "role": "object" }, { "text": "doing", "role": "connector" }
      ] },
      { "label": "Complete action", "chips": [
        { "text": "see / hear / watch", "role": "verb" }, { "text": "object", "role": "object" }, { "text": "base verb", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "SEE + OBJECT + -ING (in progress)", "example": "I saw her crossing the street.", "highlight": "saw her crossing" },
      "right": { "label": "SEE + OBJECT + BASE VERB (complete)", "example": "I saw her cross the street.", "highlight": "saw her cross" },
      "caption": "-ing catches only part of the action in progress; the base verb shows you witnessed it from start to finish."
    },
    "readingText": {
      "title": "Something Strange at the Park",
      "body": "Yesterday, while I was walking through the park, I saw a man acting very strangely. At first, I saw him talking loudly to himself near the fountain, waving his arms about. A few minutes later, I watched him take a small notebook from his bag and start writing quickly. Then I heard someone shout his name, and I saw him turn around and run towards a woman waving at him from across the grass. It turned out he was rehearsing lines for a play — I could hear him practising his speech the whole time, and I even watched him bow to an imaginary audience before he noticed I was watching!",
      "translation": "Ayer, mientras caminaba por el parque, vi a un hombre comportándose de forma muy extraña. Al principio, lo vi hablando en voz alta solo, cerca de la fuente, moviendo los brazos. Unos minutos después, lo observé sacar una pequeña libreta de su bolsa y ponerse a escribir rápidamente. Entonces oí a alguien gritar su nombre, y lo vi darse la vuelta y correr hacia una mujer que le saludaba con la mano desde el otro lado del césped. Resultó que estaba ensayando las líneas de una obra de teatro — podía oírlo practicando su discurso todo el rato, e incluso lo vi hacer una reverencia a un público imaginario antes de darse cuenta de que yo estaba mirando."
    },
    "tips": [
      "SEE/HEAR/WATCH + persona + -ING = solo viste una PARTE de la acción, en marcha.",
      "SEE/HEAR/WATCH + persona + verbo base (sin \"to\") = viste la acción COMPLETA, de principio a fin."
    ],
    "dailyWords": [
      { "w": "to rehearse", "ipa": "/rɪˈhɜːs/", "aprox": "rijérs", "def": "ensayar", "ex": "The actors rehearsed the scene twice." },
      { "w": "to bow", "ipa": "/baʊ/", "aprox": "báu", "def": "hacer una reverencia, inclinarse", "ex": "The actor bowed at the end of the show." }
    ]
  },
  "68": {
    "title": "-ing Clauses",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "-ing como adjetivo / sujeto / resultado",
        "body": "Una cláusula en -ing puede funcionar como adjetivo que describe un sustantivo ('the man sitting in the corner'), como sujeto de la oración ('living in a city has its advantages'), o como resultado de una acción ('she fell, hurting her knee'). Permite añadir información sin usar una oración aparte con su propio sujeto.",
        "note": "The man sitting in the corner is my uncle. · Living in a city has its advantages. · She fell, hurting her knee."
      },
      {
        "head": "Having + participio: razón pasada",
        "body": "'Having + participio pasado' al inicio de una oración indica que una acción terminó antes de que empezara otra, explicando normalmente la causa de lo que sigue: 'having finished the work, I went home' es 'después de terminar el trabajo, me fui a casa'. Es una versión compacta de una oración de causa con pasado perfecto.",
        "note": "Having finished the work, I went home. (= After I had finished, I went home.)"
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ by the window is my sister.",
        "opts": [
          "sit",
          "sat",
          "sitting",
          "to sit"
        ],
        "ans": 2,
        "exp": "Cláusula -ing que modifica al sustantivo: 'the woman sitting by the window'."
      },
      {
        "q": "___ all the food, we ordered more.",
        "opts": [
          "Eaten",
          "Having eaten",
          "Eating",
          "To eat"
        ],
        "ans": 1,
        "exp": "'Having + participio' = tras completar la acción: 'Having eaten all the food'."
      }
    ],
    "flashcards": [
      {
        "front": "-ing clauses — uses",
        "back": "AS ADJECTIVE: 'The girl sitting there is my friend.'\nAS SUBJECT: 'Swimming is good for you.'\nAS RESULT: 'She slipped, breaking her arm.'\nPAST REASON: 'Having done the work, I rested.'"
      }
    ],
    "syntaxChips": [
      { "label": "-ing as adjective/subject/result", "chips": [
        { "text": "-ing clause", "role": "connector" }, { "text": "noun / sentence", "role": "object" }
      ] },
      { "label": "Having + past participle", "chips": [
        { "text": "Having", "role": "connector" }, { "text": "past participle", "role": "verb" }, { "text": "main clause", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "-ING CLAUSE (simultaneous/description)", "example": "The man sitting in the corner is my uncle.", "highlight": "sitting in the corner" },
      "right": { "label": "HAVING + PAST PARTICIPLE (completed first)", "example": "Having finished the work, I went home.", "highlight": "Having finished" },
      "caption": "A plain -ing clause describes something happening at the same time; 'having done' shows one action was finished before the next began."
    },
    "readingText": {
      "title": "A Morning Walk",
      "body": "Walking through the old part of town, I noticed a small café I had never seen before. The woman standing by the door smiled and invited me in. Having finished a long week at work, I decided to treat myself to a proper breakfast. Sitting by the window, I watched people hurrying past, all wrapped up against the cold. An old man was reading a newspaper, occasionally glancing outside. Having ordered a coffee and a croissant, I opened my book and relaxed completely, forgetting all about my long to-do list waiting for me at home.",
      "translation": "Paseando por el casco antiguo, me fijé en una pequeña cafetería que nunca había visto. La mujer que estaba de pie junto a la puerta sonrió y me invitó a entrar. Habiendo terminado una semana larga de trabajo, decidí darme el capricho de un buen desayuno. Sentada junto a la ventana, observaba a la gente pasar deprisa, todos bien abrigados contra el frío. Un hombre mayor leía el periódico, echando un vistazo de vez en cuando hacia fuera. Habiendo pedido un café y un cruasán, abrí mi libro y me relajé por completo, olvidándome de toda la lista de tareas que me esperaba en casa."
    },
    "tips": [
      "Una cláusula en \"-ing\" puede funcionar como adjetivo (\"the man sitting there\"), como sujeto (\"swimming is fun\") o como resultado de otra acción.",
      "HAVING + participio pasado indica que una acción terminó ANTES de la siguiente — es como decir \"después de haber hecho algo\"."
    ],
    "dailyWords": [
      { "w": "croissant", "ipa": "/ˈkwʌsɒ̃/", "aprox": "kuáson", "def": "cruasán", "ex": "She had a coffee and a croissant for breakfast." },
      { "w": "to wrap up", "ipa": "/ræp ʌp/", "aprox": "ráp ap", "def": "abrigarse bien", "ex": "Wrap up warm, it's freezing outside." }
    ]
  }
};
