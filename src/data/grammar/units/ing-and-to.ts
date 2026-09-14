import { Unit } from '@/types/grammar';

export const ingAndToUnits: Record<number, Unit> = {
  "53": {
    "title": "Verb + -ing (enjoy doing)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbs followed by -ing",
        "body": "Certain common verbs — like enjoy, finish, mind, suggest, avoid, keep, and stop — are always followed by the -ing form (the gerund) when another verb comes right after them, never by 'to + infinitive'. This isn't about meaning; it's simply a fixed grammatical pattern that has to be memorized verb by verb, because there's no rule that predicts which verbs take -ing and which take 'to'. Getting this list right matters, since using 'to' after one of these verbs is a very common mistake for learners.",
        "note": "enjoy, finish, mind, suggest, avoid, keep, practise, admit, deny, imagine, consider, miss, stop, give up"
      },
      {
        "head": "Examples",
        "body": "These sentences show the pattern in action: 'I enjoy swimming.' 'She finished reading.' 'He avoids eating meat.' 'Stop talking!' In each one, the verb right after enjoy/finish/avoid/stop takes the -ing form, confirming that these verbs never take a plain 'to + infinitive' afterwards."
      },
      {
        "head": "After prepositions — always -ing",
        "body": "Whenever a verb comes immediately after a preposition (at, in, of, about, without, before...), it must take the -ing form, never the infinitive — this is one of the most reliable rules in English grammar and has no real exceptions. It's easy to forget when the preposition is a small, easily overlooked word like 'at' or 'in', but the rule holds regardless of which preposition is involved. This is a separate pattern from the enjoy/finish-type verbs above: here it's the preposition, not the main verb, that forces the -ing form.",
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
        "exp": "'Enjoy' + -ing: 'I enjoy walking.'"
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
        "exp": "'Suggest' + -ing: 'She suggested taking a different route.'"
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
        "exp": "After preposition 'of' → -ing: 'thinking of buying'."
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
      { "w": "hobby", "ipa": "/ˈhɒbi/", "def": "afición, pasatiempo", "ex": "Reading is my favorite hobby." },
      { "w": "habit", "ipa": "/ˈhæbɪt/", "def": "hábito, costumbre", "ex": "She's trying to break a bad habit." }
    ]
  },
  "54": {
    "title": "Verb + to… (want to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verbs followed by to + infinitive",
        "body": "Certain common verbs — like want, need, decide, plan, hope, expect, and promise — are always followed by 'to + base verb' (the to-infinitive) when another verb comes right after them, never by the -ing form. As with the enjoy-type verbs, there's no logical reason why these particular verbs take 'to' instead of -ing; it's a fixed pattern you simply have to learn for each verb. Mixing up these two verb groups is one of the most frequent errors Spanish speakers make in English.",
        "note": "want, need, decide, plan, hope, expect, try, manage, fail, promise, refuse, offer, agree, afford"
      },
      {
        "head": "Examples",
        "body": "These sentences show the pattern in action: 'I want to go.' 'She decided to leave.' 'He failed to pass the exam.' 'They agreed to help.' In each case, the verb that follows want/decide/fail/agree takes 'to + base verb', confirming that these verbs are never directly followed by -ing."
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
        "exp": "'Want' + to infinitive: 'I want to buy'."
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
        "exp": "'Decide' + to infinitive: 'She decided to find'."
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
        "exp": "'Manage' + to infinitive: 'He managed to pass'."
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
      { "w": "goal", "ipa": "/ɡəʊl/", "def": "objetivo, meta", "ex": "My goal is to speak fluent English." },
      { "w": "to plan", "ipa": "/tuː plæn/", "def": "planear, planificar", "ex": "We plan to move next year." }
    ]
  },
  "55": {
    "title": "Verb + Object + to… (ask somebody to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verb + object + to infinitive",
        "body": "Verbs like ask, tell, want, expect, allow, remind, and warn follow a different pattern: instead of going straight into the infinitive, they first name a person (the object) and only then add 'to + base verb', because these verbs describe asking, telling, or allowing somebody else to do something. The object tells you who is expected to perform the action described by the infinitive. This differs from unit 54's pattern, where 'to + infinitive' follows the main verb directly with no object in between.",
        "note": "ask, tell, want, expect, help, allow, advise, encourage, invite, remind, warn, force, teach, persuade"
      },
      {
        "head": "Examples",
        "body": "These sentences show the pattern in action: 'She asked me to help.' 'He told us to wait.' 'They want you to come.' 'I advised her to leave.' In each one, notice the order: verb + person (object) + 'to + base verb', with the object showing who is meant to carry out the action."
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
        "exp": "Ask + object + to infinitive: 'asked me to carry'."
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
        "exp": "Tell + object + to infinitive: 'told us to be quiet'."
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
      { "w": "to remind", "ipa": "/rɪˈmaɪnd/", "def": "recordar (a alguien que haga algo)", "ex": "Please remind me to call the bank." },
      { "w": "deadline", "ipa": "/ˈdedlaɪn/", "def": "fecha límite, plazo", "ex": "The deadline for the report is Friday." }
    ]
  },
  "56": {
    "title": "Verb + -ing or to… 1 (remember, stop, try)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Remember + -ing vs to",
        "body": "'Remember' can be followed by either -ing or 'to', and the choice completely changes the meaning: 'remember + -ing' means you recall something that already happened, looking back at a memory, while 'remember + to' means you don't forget to carry out a task that still needs doing, looking forward to the future. The direction in time — past memory versus future duty — is what tells the two forms apart. This same past-versus-future contrast reappears with 'stop' and 'try' below, so it's worth remembering as a general pattern.",
        "note": "I remember meeting her. (past) · Remember to call her. (future task)"
      },
      {
        "head": "Stop + -ing vs to",
        "body": "'Stop + -ing' means you end an activity you were doing — you give up a habit or interrupt an ongoing action, and the -ing verb names the thing you were doing before you stopped. 'Stop + to' has a completely different structure: here 'to' introduces a purpose, so 'stop to do something' means you paused one activity in order to start a new one. It's easy to confuse the two because they look similar, but 'stop doing' ends an action while 'stop to do' begins a new one.",
        "note": "I stopped smoking. (I quit) · I stopped to smoke. (I paused to have a cigarette)"
      },
      {
        "head": "Try + -ing vs to",
        "body": "'Try + -ing' suggests an experiment: you do something as a test, to see what result it produces, without necessarily expecting difficulty. 'Try + to' suggests a genuine attempt or effort at something that might be difficult or might fail — the focus is on the struggle to achieve it, not on testing an option. So 'try taking an aspirin' means 'see if this helps', while 'try to open the jar' means 'make an effort, even though it may not work'.",
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
        "exp": "Future task to remember → 'remember to turn'."
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
        "exp": "Giving up the habit → 'stopped smoking'."
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
        "exp": "Making an attempt (but possibly failing) → 'tried to open'."
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
      { "w": "to forget", "ipa": "/fəˈɡet/", "def": "olvidar", "ex": "Don't forget to bring your umbrella." },
      { "w": "attempt", "ipa": "/əˈtempt/", "def": "intento", "ex": "She made an attempt to fix the car." }
    ]
  },
  "57": {
    "title": "Verb + -ing or to… 2 (begin, start, prefer, like, love, hate)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Like/love/hate/prefer — both forms OK",
        "body": "Verbs expressing likes and dislikes — like, love, hate, prefer — are flexible: you can follow them with either -ing or 'to + infinitive' with almost no change in meaning, so 'I like swimming' and 'I like to swim' both describe the same general preference. This flexibility disappears, however, as soon as you add 'would' in front of these verbs, which is covered in the next block. Either form is safe to use here, so this is one case where you don't need to worry about choosing 'correctly'.",
        "note": "I like swimming. = I like to swim. · She hates waiting. = She hates to wait."
      },
      {
        "head": "Would like/would love/would prefer — always to",
        "body": "As soon as you put 'would' before like, love, or prefer, the rule tightens: only 'to + infinitive' is possible, and -ing becomes incorrect. This is because 'would like/love/prefer' talks about a specific wish or preference for one particular occasion (often making a polite offer or request), unlike the general, habitual liking described in the block above, which is why the two patterns behave differently even though they use the same verbs.",
        "note": "I'd like to go. (NOT: I'd like going) · Would you like to come? · I'd love to help."
      },
      {
        "head": "Begin/start/continue — both forms",
        "body": "With verbs describing the start or continuation of an action — begin, start, continue — both -ing and 'to + infinitive' are acceptable and mean essentially the same thing, so 'it started raining' and 'it started to rain' are equally correct. As with like/love/hate/prefer above, this is a case where English simply allows two equivalent structures, so you can choose whichever sounds more natural to you at the moment.",
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
        "exp": "After 'would love' → to infinitive: 'I'd love to help'."
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
        "exp": "Like + -ing or to → both OK, but -ing more natural for general habit: 'like listening'."
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
      { "w": "cosy", "ipa": "/ˈkəʊzi/", "def": "acogedor, confortable", "ex": "The cabin felt warm and cosy." },
      { "w": "board game", "ipa": "/bɔːd ɡeɪm/", "def": "juego de mesa", "ex": "We played a board game after dinner." }
    ]
  },
  "58": {
    "title": "Verb + -ing or to… 3 (interested in doing / want to do)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Adjective/noun phrases followed by -ing or to",
        "body": "Beyond single verbs, many fixed adjective and noun expressions also determine whether the next verb takes -ing or 'to' — phrases like 'be interested in', 'be keen on', 'it's no use', and 'there's no point in' each come with their own required form, usually because they end in a preposition. Because these are set phrases rather than general rules, the safest approach is to learn each expression together with the form it takes, rather than trying to guess from its meaning.",
        "note": "'be interested in + -ing' · 'be keen on + -ing' · 'It's no use + -ing' · 'There's no point in + -ing'"
      },
      {
        "head": "It's no use / there's no point / it's worth",
        "body": "The specific phrases 'it's no use', 'there's no point (in)', and 'it's worth' are always followed by the -ing form, never by 'to + infinitive' — you can think of 'no use' and 'no point' as judging whether an activity (named by the -ing verb) is worthwhile or not. Because 'no point' is normally followed by the preposition 'in', this fits the wider rule that a verb after a preposition takes -ing, even when 'in' is sometimes left out in casual speech.",
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
      { "w": "worthwhile", "ipa": "/ˌwɜːθˈwaɪl/", "def": "que vale la pena", "ex": "It was a worthwhile experience." },
      { "w": "to commit to", "ipa": "/kəˈmɪt tuː/", "def": "comprometerse a", "ex": "She committed to finishing the course." }
    ]
  },
  "59": {
    "title": "Prefer and Would Rather",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Prefer + -ing / to + infinitive",
        "body": "'Prefer' can express a general preference in two ways: 'prefer + -ing + to + -ing' (comparing two activities, e.g. 'I prefer swimming to running') or 'prefer + to + infinitive + rather than + base verb'. Both patterns talk about what you generally like better, not a preference for right now. Don't confuse this general 'prefer' with 'would prefer', which (like 'would like') refers to a specific choice on one occasion and always uses 'to + infinitive'.",
        "note": "I prefer swimming to running. · I prefer to swim rather than run."
      },
      {
        "head": "Would rather + base verb",
        "body": "'Would rather' means almost the same as 'would prefer', but it has its own special grammar: it's followed directly by the base form of the verb, with no 'to' at all, unlike 'would prefer to' or 'would like to'. So 'I'd rather stay' is correct, while 'I'd rather to stay' is not. This makes 'would rather' behave more like a modal verb (such as 'can' or 'must') than like an ordinary verb such as 'prefer'.",
        "note": "I'd rather stay at home. · She'd rather not go. · I'd rather have tea than coffee."
      },
      {
        "head": "Would rather somebody else did something",
        "body": "When you want to say what you'd prefer someone else to do (not yourself), the structure changes again: 'would rather + subject + past simple', as in 'I'd rather you didn't smoke'. Just like the past simple in the second conditional, this past tense doesn't refer to past time — it's simply the grammatical marker used when the preference concerns another person's action rather than your own. This is different from the plain 'would rather + base verb' pattern above, which is used only when you yourself are the one doing the action.",
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
        "exp": "'Would rather' + base verb (no to): 'I'd rather stay'."
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
      { "w": "topping", "ipa": "/ˈtɒpɪŋ/", "def": "ingrediente que se pone encima (de una pizza, etc.)", "ex": "My favourite pizza topping is mushroom." },
      { "w": "to order in", "ipa": "/ˈɔːdər ɪn/", "def": "pedir comida a domicilio", "ex": "Let's order in tonight, I don't feel like cooking." }
    ]
  },
  "60": {
    "title": "Preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "After prepositions — always -ing",
        "body": "Whenever a verb directly follows a preposition — in, at, of, without, after, before — it must take the -ing form; this is one of the most consistent rules in English and applies no matter which preposition is involved or what the sentence is about. Learners often make mistakes here because some of these expressions look like they should take 'to + infinitive', but if 'to' itself is functioning as a preposition (as in 'look forward to'), the same -ing rule still applies, which is explored further in the next block.",
        "note": "interested in learning · good at cooking · without saying goodbye · after leaving · before eating"
      },
      {
        "head": "Common prepositional phrases + -ing",
        "body": "Many common fixed expressions — 'look forward to', 'be used to', 'in addition to', 'succeed in', 'be responsible for' — end in a preposition, even though some of them (like 'to') don't look like typical prepositions at first glance. Because the expression as a whole ends in a preposition, the same rule from above applies: whatever verb comes next must be in the -ing form. Recognizing that these phrases end in a preposition is the key to remembering why -ing is required.",
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
        "exp": "After preposition 'without' → -ing: 'without saying'."
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
      { "w": "to tidy up", "ipa": "/ˈtaɪdi ʌp/", "def": "ordenar, poner en orden", "ex": "I need to tidy up my room." },
      { "w": "ages", "ipa": "/ˈeɪdʒɪz/", "def": "mucho tiempo (coloquial)", "ex": "I haven't seen her in ages." }
    ]
  },
  "61": {
    "title": "Be/Get Used to… (I'm used to getting up early)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Used to + -ing (= accustomed to)",
        "body": "'Be used to' + -ing describes something that feels normal and familiar to you now, because you've experienced it enough times that it no longer feels strange — here 'used' is an adjective meaning 'accustomed', and 'to' is a preposition, which is why the verb after it takes -ing. This describes a current state of familiarity, not an action itself. It's easy to confuse this with 'used to + base verb' (a past habit that no longer happens), which is contrasted directly in the block below.",
        "note": "I'm used to getting up early. · She's not used to the cold. · Are you used to the noise?"
      },
      {
        "head": "Get used to + -ing",
        "body": "'Get used to' + -ing describes the process of becoming familiar with something, moving from finding it strange toward finding it normal — it's the change, rather than the finished state described by 'be used to'. You might say 'I'm getting used to the traffic' while you're still adjusting, and later say 'I'm used to it' once the adjustment is complete. Both phrases still take -ing afterward, since 'to' here is a preposition, not part of an infinitive.",
        "note": "I'm getting used to the traffic. · It took time but I got used to living alone."
      },
      {
        "head": "DIFFERENT from 'used to do'",
        "body": "Don't confuse 'used to + base verb', which describes a habit or state that existed in the past but not anymore (e.g. 'I used to wake up late'), with 'be used to + -ing', which describes something that feels normal to you now. They look almost identical, but 'used to do' is entirely about past time with no 'to'-as-preposition involved, while 'be/get used to doing' is about present familiarity and always needs -ing after it. Reading the full sentence carefully — is 'used' acting as a verb or as an adjective after 'be'? — is the best way to tell them apart.",
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
        "exp": "Process of becoming accustomed → 'get used to it'."
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
      { "w": "to adapt", "ipa": "/əˈdæpt/", "def": "adaptarse", "ex": "It took months to adapt to the new schedule." },
      { "w": "umbrella", "ipa": "/ʌmˈbrelə/", "def": "paraguas", "ex": "Don't forget your umbrella, it might rain." }
    ]
  },
  "62": {
    "title": "Verb + preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Verb + preposition + -ing",
        "body": "Many verbs are regularly followed by a fixed preposition (succeed IN, insist ON, apologise FOR, dream OF), and whenever a verb comes after that preposition, it must be in the -ing form — this is the same rule seen in earlier units, just applied to verb+preposition combinations rather than adjectives or fixed phrases. Learning the verb together with its preposition (e.g. 'apologise for', not just 'apologise') makes it easier to remember that -ing has to follow. The two special cases below, 'look forward to' and 'feel like', are worth learning separately because their prepositions ('to' and 'like') are easy to mistake for something else.",
        "note": "succeed IN doing · insist ON doing · apologise FOR doing · dream OF doing"
      },
      {
        "head": "LOOK FORWARD TO + -ing",
        "body": "In 'look forward to', the word 'to' is acting as a preposition, not as the 'to' of an infinitive, even though it looks exactly the same — this is one of the most common mistakes English learners make, since 'to + base verb' feels so natural elsewhere. Because it's a preposition here, the verb that follows must be -ing: 'I'm looking forward to seeing you', never 'to see you'. Whenever you see 'to' after a fixed expression like this, it's worth checking whether it's really an infinitive marker or a disguised preposition.",
        "note": "I'm looking forward to seeing you. (NOT: to see you ❌)"
      },
      {
        "head": "FEEL LIKE + -ing",
        "body": "'Feel like' + -ing is an informal way of saying you want to do something, usually describing a passing mood or desire rather than a firm plan — 'I don't feel like going out tonight' means 'I don't want to go out'. Here too, 'like' functions as a preposition rather than the verb 'to like', which is why -ing follows rather than 'to'. It's a useful everyday expression for talking about spontaneous wishes.",
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
        "exp": "'Look forward to' + -ing (to is a preposition here)."
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
        "exp": "'Feel like' + -ing = want to."
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
      { "w": "to apologise", "ipa": "/əˈpɒlədʒaɪz/", "def": "disculparse, pedir perdón", "ex": "He apologised for being late." },
      { "w": "to insist", "ipa": "/ɪnˈsɪst/", "def": "insistir", "ex": "She insisted on paying the bill." }
    ]
  },
  "63": {
    "title": "There's No Point in… / It's No Use…",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Expressions + -ing",
        "body": "A whole group of fixed expressions about whether something is worthwhile or pointless — 'there's no point in', 'it's no use', 'it's not worth', 'I can't help' — are always followed by the -ing form. Most of these expressions contain a hidden preposition ('in', or an implied one), which is the underlying reason -ing is required, consistent with the general preposition + -ing rule seen elsewhere in this topic. Because they're fixed expressions, it's best to learn each one as a whole chunk rather than analyzing the grammar every time.",
        "note": "There's no point in arguing. · It's no use crying. · It's not worth worrying about it. · I can't help laughing."
      },
      {
        "head": "I can't help + -ing",
        "body": "'Can't help' + -ing means you're unable to stop or avoid doing something, often an automatic reaction like laughing or crying, even if you wanted to control it — 'I can't help laughing' means 'I simply can't stop myself from laughing'. This is a slightly special meaning of 'help' (closer to 'avoid' than to 'assist'), so it's best learned as a fixed idiom rather than analyzed word by word. As with the other expressions in this unit, -ing follows because of the underlying idea of a preposition-like structure.",
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
      { "w": "frustrated", "ipa": "/frʌˈstreɪtɪd/", "def": "frustrado", "ex": "He felt frustrated after waiting so long." },
      { "w": "traffic jam", "ipa": "/ˈtræfɪk dʒæm/", "def": "atasco de tráfico", "ex": "We were stuck in a traffic jam for an hour." }
    ]
  },
  "64": {
    "title": "To… For… So That… (Purpose)",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "To + infinitive — purpose",
        "body": "'To + infinitive' is the most direct way of explaining the purpose or reason behind an action — it answers the question 'why did you do that?' with a short verb phrase, as in 'I went to the shop to buy some milk'. It's used when the subject of the purpose is the same person as the subject of the main verb. When the purpose is expressed as a thing rather than an action, 'for + noun' is used instead, as shown in the next block.",
        "note": "I went to the shop to buy some milk. · She studies hard to pass the exam."
      },
      {
        "head": "For + noun — purpose",
        "body": "'For + noun' expresses purpose in a similar way to 'to + infinitive', but it's used when what follows is a noun (a thing) rather than a verb describing an action — 'I went to the shop for some milk' names the thing you wanted, while 'to buy some milk' names the action you performed. Mixing these up is a common error: you can't normally say 'for buy some milk', because 'for' needs a noun, not a base verb.",
        "note": "I went to the shop for some milk. · This tool is for cutting wood."
      },
      {
        "head": "So that — purpose with a subject",
        "body": "'So that + clause' is needed when the purpose involves a different person than the subject of the main sentence, or when the purpose clause needs a modal verb like 'can', 'could', or 'would' — situations where a simple 'to + infinitive' wouldn't work grammatically. For example, 'I left early so that I could catch the bus' explains a purpose that needs the modal 'could', which 'to catch the bus' alone couldn't express as clearly. Think of 'so that' as the more flexible, clause-based option for purpose, used when the simpler 'to' or 'for' patterns aren't enough.",
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
        "exp": "Purpose → 'to': 'She called to check the time.'"
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
        "exp": "Purpose with modal → 'so that': 'so that everyone could hear'."
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
      { "w": "errand", "ipa": "/ˈerənd/", "def": "recado, mandado", "ex": "I have to run a few errands this morning." },
      { "w": "prescription", "ipa": "/prɪˈskrɪpʃn/", "def": "receta médica", "ex": "She picked up her prescription at the pharmacy." }
    ]
  },
  "65": {
    "title": "Adjective + to…",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Adjective + to infinitive",
        "body": "Many adjectives — nice, easy, difficult, happy, sorry, and others — are naturally followed by 'to + infinitive' when they comment on an action or express a reaction, as in 'nice to meet you' or 'difficult to learn'. This is a very productive pattern: once you know an adjective can take this structure, you can use it to comment on almost any action. It's especially common in polite, fixed social phrases like 'nice to meet you' and 'sorry to hear that'.",
        "note": "nice to meet you · easy to understand · difficult to learn · happy to help · sorry to hear that"
      },
      {
        "head": "It's + adjective + to",
        "body": "'It's + adjective + to + infinitive' is a very common structure for making a general comment about an action, using 'it' as a dummy subject that doesn't refer to anything specific — 'it's easy to make mistakes' comments on the general activity of making mistakes, not on any one particular mistake. This impersonal 'it' pattern is extremely common in spoken and written English for expressing opinions and general truths.",
        "note": "It's easy to make mistakes. · It's important to be on time. · It's nice to see you."
      },
      {
        "head": "Too / enough + to",
        "body": "'Too' and 'enough' both combine with an adjective and 'to + infinitive', but with opposite logic: 'too + adjective + to' means there's an excessive degree of something that prevents the action ('too hot to go outside' = so hot that going outside isn't possible), while 'adjective + enough + to' means there's a sufficient degree of something that allows the action ('old enough to vote' = sufficiently old to be allowed to vote). Notice that 'enough' comes after the adjective, while 'too' comes before it — the word order is different for each.",
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
        "exp": "Adjective + to infinitive: 'It's nice to meet you.'"
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
        "exp": "'Too + adj + to': 'too heavy to lift'."
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
      { "w": "delayed", "ipa": "/dɪˈleɪd/", "def": "retrasado", "ex": "Our flight was delayed by two hours." },
      { "w": "windy", "ipa": "/ˈwɪndi/", "def": "ventoso", "ex": "It's too windy to fly a kite today." }
    ]
  },
  "66": {
    "title": "to… and preposition + -ing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "Is TO an infinitive marker, or a preposition?",
        "body": "Most of the time, 'to' followed by a base verb is simply the infinitive marker, as in 'I want to go'. But in a handful of fixed expressions — 'look forward to', 'be/get used to', 'object to' — 'to' is secretly working as a preposition instead, which means the verb after it must be -ing, not the base form. There's no way to tell just by looking at the word 'to' itself; you have to recognize these expressions as exceptions and learn them individually.",
        "note": "I want to go. (infinitive) · I'm looking forward to going. (preposition + -ing)"
      },
      {
        "head": "BE/GET USED TO + -ing",
        "body": "This is exactly the confusion covered in unit 61: 'used to + base verb' describes a past habit that's now over ('I used to smoke'), with no preposition involved, while 'be/get used to' + -ing describes present familiarity, where 'to' is a preposition and therefore takes -ing ('I'm used to smoking'). The two phrases share the words 'used to' but have completely different grammar and meaning, so context is essential for telling them apart.",
        "note": "I used to smoke. (past habit) · I'm used to smoking. (accustomed, = to is a preposition) · I'm getting used to waking up early."
      },
      {
        "head": "OBJECT TO / IN ADDITION TO + -ing",
        "body": "'Object to' and 'in addition to' are two more expressions where 'to' is a preposition rather than an infinitive marker, so the verb that follows must be -ing: 'he objects to being told what to do', 'in addition to working, she studies at night'. These join 'look forward to' and 'be/get used to' as expressions worth memorizing as fixed chunks, since their grammar doesn't follow the more common 'to + base verb' pattern.",
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
        "exp": "'Be used to' — 'to' is a preposition here, + -ing."
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
        "exp": "'Decide to' + infinitive — normal 'to'."
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
        "exp": "'Object to' + -ing — 'to' is a preposition."
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
      { "w": "routine", "ipa": "/ruːˈtiːn/", "def": "rutina", "ex": "It took a while to get into a routine." },
      { "w": "to object", "ipa": "/əbˈdʒekt/", "def": "oponerse, poner objeciones", "ex": "Nobody objected to the new plan." }
    ]
  },
  "67": {
    "title": "See Somebody Do / Doing",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "See/hear/watch + object + -ing (in progress)",
        "body": "When you use see, hear, or watch with an object followed by -ing, you're describing that you witnessed only part of an action while it was already in progress — you don't necessarily know when it started or finished, just that you caught it happening. 'I saw her crossing the street' suggests you saw her partway through, not necessarily the whole journey from one side to the other. This contrasts with the pattern below, where the base verb form indicates you saw the entire action from start to finish.",
        "note": "I saw her crossing the street. · I could hear them arguing. · I watched them playing."
      },
      {
        "head": "See/hear/watch + object + base verb (complete)",
        "body": "When see, hear, or watch is followed by an object and the base form of the verb (no -ing), it means you witnessed the whole action, from beginning to end, as one complete event — 'I saw her cross the street' means you watched the entire crossing, start to finish. This is the opposite of the -ing form above, which only shows part of an action in progress; choosing between the two forms lets you signal exactly how much of the action you actually saw.",
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
        "exp": "Complete action seen from start to end → base verb: 'saw him enter'."
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
        "exp": "Partial action (in progress) → -ing: 'hear someone crying'."
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
      { "w": "to rehearse", "ipa": "/rɪˈhɜːs/", "def": "ensayar", "ex": "The actors rehearsed the scene twice." },
      { "w": "to bow", "ipa": "/baʊ/", "def": "hacer una reverencia, inclinarse", "ex": "The actor bowed at the end of the show." }
    ]
  },
  "68": {
    "title": "-ing Clauses",
    "topic": "-ing and to…",
    "explain": [
      {
        "head": "-ing clause as adjective / subject / result",
        "body": "An -ing clause can do several different jobs in a sentence beyond simply following a verb: it can act like an adjective describing a noun ('the man sitting in the corner'), it can act as the subject of the whole sentence ('living in a city has its advantages'), or it can describe the result of an action that was just mentioned ('she fell, hurting her knee'). In each case, the -ing form lets you pack extra information into a sentence without needing a separate clause with its own subject and conjunction.",
        "note": "The man sitting in the corner is my uncle. · Living in a city has its advantages. · She fell, hurting her knee."
      },
      {
        "head": "Having done — explains the past reason",
        "body": "'Having + past participle' is used at the start of a sentence to show that one action was completed before another one began, usually explaining the reason or cause behind what happens next — 'having finished the work, I went home' means 'because/after I had finished the work, I went home'. It works like a compressed version of a time or reason clause with the past perfect, letting you combine two related past events into a single, more elegant sentence.",
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
        "exp": "-ing clause modifying noun: 'the woman sitting by the window'."
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
        "exp": "'Having + pp' = after completing the action: 'Having eaten all the food'."
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
      { "w": "croissant", "ipa": "/ˈkwʌsɒ̃/", "def": "cruasán", "ex": "She had a coffee and a croissant for breakfast." },
      { "w": "to wrap up", "ipa": "/ræp ʌp/", "def": "abrigarse bien", "ex": "Wrap up warm, it's freezing outside." }
    ]
  }
};
