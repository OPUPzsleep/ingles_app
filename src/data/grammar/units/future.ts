import { Unit } from '@/types/grammar';

export const futureUnits: Record<number, Unit> = {
  "19": {
    "title": "Present Tenses for the Future",
    "topic": "Future",
    "explain": [
      {
        "head": "Present Continuous → personal arrangement",
        "body": "We use the present continuous to talk about a future event that is already arranged — you've fixed a time, a place, or made plans with another person, so it feels as definite as something happening right now. This is different from a vague future intention; it signals that the arrangement already exists, not just that you want it to happen. Compare it with the present simple below, which is used for impersonal, official timetables rather than personal plans.",
        "note": "I'm meeting Sarah at 6pm. · We're flying to Rome next week. · They're getting married in June."
      },
      {
        "head": "Present Simple → timetable/schedule",
        "body": "We use the present simple for events that are fixed by an official timetable or schedule — trains, flights, cinema showings, opening hours — because these times are set by an organization, not by you personally. The event feels like a fact on a schedule rather than a personal plan, even though it's still in the future. This contrasts with the present continuous, which describes an arrangement you personally made with someone.",
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
        "exp": "Personal future arrangement → present continuous: 'I am seeing Sam'."
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
        "exp": "Fixed timetable → present simple: 'leaves at 9.15'."
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
        "exp": "Personal plan/arrangement → present continuous: 'What are you doing?'"
      }
    ],
    "flashcards": [
      {
        "front": "Present Continuous vs Present Simple for future",
        "back": "Present Continuous = PERSONAL ARRANGEMENT:\n'I'm having dinner with Tom tonight.' (we planned it)\n\nPresent Simple = TIMETABLE/SCHEDULE:\n'The bus leaves at 7am.' (official timetable)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "What are you doing this weekend?", "translation": "¿Qué vas a hacer este fin de semana?" },
      { "speaker": "user", "text": "I'm visiting my parents on Saturday. We planned it last week.", "translation": "Voy a visitar a mis padres el sábado. Lo planeamos la semana pasada." },
      { "speaker": "other", "text": "Nice! How are you getting there?", "translation": "¡Qué bien! ¿Cómo vas a llegar?" },
      { "speaker": "user", "text": "I'm taking the train. It leaves at 10.15 and arrives at noon.", "translation": "Voy a tomar el tren. Sale a las 10:15 y llega al mediodía." },
      { "speaker": "other", "text": "And on Sunday? Are you doing anything?", "translation": "¿Y el domingo? ¿Vas a hacer algo?" },
      { "speaker": "user", "text": "Yes, I'm meeting some old friends for lunch. We're all getting together at a new restaurant.", "translation": "Sí, voy a reunirme con unos viejos amigos para almorzar. Todos nos vamos a juntar en un restaurante nuevo." },
      { "speaker": "other", "text": "Sounds like a great weekend. What time does the restaurant open, by the way?", "translation": "Suena como un gran fin de semana. Por cierto, ¿a qué hora abre el restaurante?" },
      { "speaker": "user", "text": "It opens at noon, so we're arriving right when it starts.", "translation": "Abre al mediodía, así que vamos a llegar justo cuando empieza." }
    ]
  },
  "20": {
    "title": "I'm Going to (do)",
    "topic": "Future",
    "explain": [
      {
        "head": "Going to — intention/plan",
        "body": "We use 'going to' when we talk about something we have already decided to do before the moment of speaking — it expresses a personal intention or plan that exists in your mind now, even if you haven't arranged the details with anyone else. This is different from 'will', which is for a decision made spontaneously, right at the moment of speaking. 'Going to' answers 'What have you decided?' rather than 'What are you deciding right now?'",
        "note": "'What are you going to do tonight?' 'I'm going to watch TV.' · I'm going to look for a new job."
      },
      {
        "head": "Going to — prediction from evidence",
        "body": "We also use 'going to' to predict something that seems certain to happen, based on evidence you can see or already know about in the present — dark clouds, someone losing their balance, and so on. The prediction is anchored in a present sign, not in general opinion. This is different from predictions with 'will', which are usually based on what we think or believe rather than on visible evidence right now.",
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
        "exp": "Already decided intention → 'going to': 'I'm going to watch a film.'"
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
        "exp": "Prediction from visible evidence → 'is going to rain'."
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
        "exp": "Pre-decided plan → 'going to': 'We're going to visit.'"
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
    "explain": [
      {
        "head": "Will — spontaneous decision",
        "body": "We use 'will' when we decide to do something at the exact moment of speaking, with no plan made beforehand — the idea occurs to you and you say it immediately. This spontaneity is the key difference from 'going to', which describes a decision made earlier and already fixed in your mind. Because the decision is made on the spot, 'will' is very common in offers and reactions to what someone has just said.",
        "note": "'It's cold in here.' 'I'll close the window.' · 'I'm thirsty.' 'I'll get you some water.'"
      },
      {
        "head": "Will — offers and promises",
        "body": "'Will' is also the natural choice for offering to do something for someone, promising a future action, or volunteering to help — all of these are spontaneous commitments made in the moment of speaking, just like the decisions above. The speaker is committing to the listener right then, which is why 'will' (not 'going to') feels natural here. Notice how promises with 'will' often use 'I promise' or 'won't' to reassure someone about the future.",
        "note": "I'll help you with your homework. · I promise I won't be late. · 'I can't carry this.' 'I'll help.'"
      },
      {
        "head": "Shall I / Shall we — suggestions",
        "body": "'Shall' is used specifically with 'I' and 'we' to offer to do something for someone or to suggest doing something together, usually as a question. It has a similar spontaneous, in-the-moment feel to 'will', but it specifically invites the other person's opinion or agreement rather than just stating a decision. You won't normally hear 'shall' with other subjects like 'you', 'he', or 'they' in modern English.",
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
        "exp": "Spontaneous offer → 'will': 'I'll get you some water.'"
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
        "exp": "Offering to do something → 'Shall I open the window?'"
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
        "exp": "Promise → 'won't': 'I promise I won't tell anyone.'"
      }
    ],
    "flashcards": [
      {
        "front": "When do you use WILL?",
        "back": "✅ Spontaneous decision: 'I'll have the fish.'\n✅ Offer/promise: 'I'll help you.'\n✅ Prediction: 'I think it will rain.'\n\nNOT for pre-arranged plans → use going to or present continuous"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Ugh, I still have three boxes left to carry to the truck.", "translation": "Uf, todavía tengo tres cajas que llevar al camión." },
      { "speaker": "user", "text": "Don't worry, I'll carry them for you.", "translation": "No te preocupes, yo las llevo." },
      { "speaker": "other", "text": "Thanks! Shall we take a break after this one?", "translation": "¡Gracias! ¿Tomamos un descanso después de esta?" },
      { "speaker": "user", "text": "Good idea. Shall I get us some water from the kitchen?", "translation": "Buena idea. ¿Te traigo agua de la cocina?" },
      { "speaker": "other", "text": "Yes please. Oh no, I think I forgot my keys inside.", "translation": "Sí, por favor. Ay no, creo que olvidé mis llaves adentro." },
      { "speaker": "user", "text": "I'll go check for them. I promise I won't take long.", "translation": "Voy a revisar. Prometo que no me tardaré." },
      { "speaker": "other", "text": "Thank you so much. Shall we call it a day once the truck is loaded?", "translation": "Muchísimas gracias. ¿Terminamos por hoy cuando el camión esté cargado?" },
      { "speaker": "user", "text": "Definitely. And I'll order pizza for everyone once we're done.", "translation": "Definitivamente. Y voy a pedir pizza para todos cuando terminemos." }
    ]
  },
  "22": {
    "title": "Will and Shall 2",
    "topic": "Future",
    "explain": [
      {
        "head": "Will — prediction",
        "body": "We use 'will' to predict what we think or believe will happen in the future, based on opinion, general knowledge, or expectation rather than on visible evidence right now. This is different from 'going to' predictions, which come from something you can actually see or already know is happening at this moment. Because it expresses a belief about the future, 'will' pairs naturally with expressions of certainty or opinion like 'I think' or 'probably'.",
        "note": "I think it will rain tomorrow. · She'll probably be late. · The economy will improve."
      },
      {
        "head": "Will — with I think / I'm sure / probably",
        "body": "Predictions with 'will' very often appear together with expressions that show how certain the speaker feels — 'I think', 'I'm sure', 'I expect', 'I hope', or 'probably' — because a prediction is, by nature, an opinion about something that hasn't happened yet. These expressions soften or strengthen the prediction without changing the grammar: 'will' still marks the future event itself. Learning these fixed combinations makes predictions sound much more natural than 'will' on its own.",
        "note": "I think England will win. · I'm sure you'll pass. · She probably won't come."
      },
      {
        "head": "Future with won't",
        "body": "'Won't' is simply the contracted negative of 'will', and it covers two related future meanings: a negative prediction (something you believe will not happen) and a refusal (someone's unwillingness to do something, even an object 'refusing' to work, as in a car that won't start). In both cases, the core idea of 'will' — a belief about the future — is just being denied. Context usually makes clear whether 'won't' expresses a prediction or a refusal of will.",
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
        "exp": "Prediction from evidence → 'going to rain'. (Or 'will rain' for general prediction)"
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
        "exp": "Prediction about future → 'will pass'."
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
        "exp": "Reassuring prediction → 'will': 'Everything will be fine.'"
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
    "explain": [
      {
        "head": "Will — unplanned, spontaneous",
        "body": "We use 'will' for a decision that is made right at the moment of speaking, with no prior planning — something happens (the phone rings, you notice you're thirsty) and you decide what to do about it immediately. The decision and the sentence expressing it happen together, almost simultaneously. This is the direct opposite of 'going to', which reports a decision that was already made before this moment.",
        "note": "(phone rings) 'I'll get it!' · 'I'm thirsty.' 'I'll make some tea.' (decided just now)"
      },
      {
        "head": "Going to — already decided",
        "body": "We use 'going to' when the decision was already made before the moment of speaking — you thought about it, chose a plan, and now you're simply reporting an intention that already exists. The action itself may still be in the future, but the decision-making is in the past relative to now. This contrasts directly with 'will', which announces a decision being made on the spot.",
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
        "exp": "Spontaneous decision at moment of speaking → 'will': 'I'll help you.'"
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
        "exp": "Pre-decided plan → 'going to': 'She's going to enter a marathon.'"
      }
    ],
    "flashcards": [
      {
        "front": "WILL (spontaneous) vs GOING TO (planned)",
        "back": "NOW: 'It's cold!' → 'I'll close the window.' (WILL — decided this second)\n\nBEFORE: 'I'm going to close the window.' (GOING TO — planned before)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Why do you have all these paint cans in the garage?", "translation": "¿Por qué tienes todas estas latas de pintura en el garaje?" },
      { "speaker": "user", "text": "I'm going to repaint the living room next weekend. I decided it last month.", "translation": "Voy a repintar la sala el próximo fin de semana. Lo decidí el mes pasado." },
      { "speaker": "other", "text": "Nice! Oh wait, this can is open and it's dripping!", "translation": "¡Qué bien! Ay espera, ¡esta lata está abierta y está goteando!" },
      { "speaker": "user", "text": "I'll grab a cloth right now, hold on.", "translation": "Voy a traer un trapo ahora mismo, espera." },
      { "speaker": "other", "text": "Thanks. So what color are you going to use?", "translation": "Gracias. Entonces, ¿qué color vas a usar?" },
      { "speaker": "user", "text": "I'm going to use light gray. I already bought the exact one I wanted.", "translation": "Voy a usar gris claro. Ya compré exactamente el que quería." },
      { "speaker": "other", "text": "It's getting dark in here. Should we turn on the light?", "translation": "Está oscureciendo aquí. ¿Prendemos la luz?" },
      { "speaker": "user", "text": "Good call, I'll turn it on now.", "translation": "Buena idea, la voy a prender ahora." }
    ]
  },
  "24": {
    "title": "Will Be Doing and Will Have Done",
    "topic": "Future",
    "explain": [
      {
        "head": "Future Continuous (will be doing)",
        "body": "We use the future continuous ('will be' + -ing) to describe an action that will already be under way, in the middle of happening, at a specific point in the future — you're picturing yourself in the middle of doing something at that future moment, the way the present continuous pictures an action in progress now. It's useful for saying what won't be a good time to contact someone, since they'll be busy with something else. This contrasts with the future perfect below, which looks at an action already finished by a future point rather than happening at it.",
        "note": "This time tomorrow I'll be flying to Paris. · Don't call at 9 — I'll be having dinner."
      },
      {
        "head": "Future Perfect (will have done)",
        "body": "We use the future perfect ('will have' + past participle) to look forward to a point in the future and look backward from there, describing an action that will already be finished by that time. It answers the question 'Will this be done by then?' rather than 'Will this be happening then?'. This is the mirror image of the future continuous above, which describes an action still in progress at the future moment, not yet complete.",
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
        "exp": "Action in progress at a future time → future continuous: 'will be lying'."
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
        "exp": "Completed before a future point → future perfect: 'will have cooked'."
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
    "explain": [
      {
        "head": "After when/if/before/after/until → present or present perfect",
        "body": "Even though the whole sentence is talking about the future, English does not use 'will' inside the clause that begins with a time or condition word like 'when', 'before', 'after', 'until', 'as soon as', or 'if' — that clause takes the present simple (or present perfect, if the action must finish first), and 'will' appears only in the main clause. This trips up many learners because logically both parts of the sentence are in the future, but grammatically only the main clause is marked for future time. Think of the time/if-clause as setting the scene, and the main clause as stating what will happen as a result.",
        "note": "I'll call you when I arrive. (NOT: when I will arrive ❌) · I'll call you when I've finished."
      },
      {
        "head": "When vs If",
        "body": "'When' introduces something the speaker is certain will happen — it's just a matter of time, so the sentence really means 'at the future moment that this happens'. 'If' introduces something that is only possible or uncertain — the speaker doesn't know whether it will happen at all. Both words can be followed by the same present-tense forms described above, but choosing between them changes how confident the sentence sounds about the future event actually occurring.",
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
        "exp": "After 'when' (time conjunction) → present simple, NOT will: 'when she arrives'."
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
        "exp": "Negative condition → 'Unless you hurry' = 'If you don't hurry'"
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
        "exp": "After 'as soon as' (time conjunction) → present simple: 'I arrive'."
      }
    ],
    "flashcards": [
      {
        "front": "Future after WHEN / IF / BEFORE / AFTER / UNTIL",
        "back": "NEVER use WILL after these conjunctions:\n\n'I'll call you WHEN I arrive.' ✅\n'I'll call you WHEN I will arrive.' ❌\n\n'If it rains, we'll stay home.' ✅\n'If it will rain, we'll stay home.' ❌"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "What time are we meeting after work today?", "translation": "¿A qué hora nos vemos después del trabajo hoy?" },
      { "speaker": "user", "text": "I'll text you when I leave the office.", "translation": "Te escribo cuando salga de la oficina." },
      { "speaker": "other", "text": "Okay. When I've finished this call, I'll head to the café.", "translation": "Okay. Cuando termine esta llamada, iré al café." },
      { "speaker": "user", "text": "Perfect. If it starts raining, we'll just meet inside instead.", "translation": "Perfecto. Si empieza a llover, nos vemos adentro mejor." },
      { "speaker": "other", "text": "Good plan. As soon as I get there, I'll order us a table.", "translation": "Buen plan. En cuanto llegue, pediré una mesa para nosotros." },
      { "speaker": "user", "text": "Great, and when I arrive, I'll bring the documents we need to sign.", "translation": "Genial, y cuando llegue, traeré los documentos que necesitamos firmar." },
      { "speaker": "other", "text": "Sounds good. We can leave once we've finished eating.", "translation": "Suena bien. Podemos irnos en cuanto terminemos de comer." },
      { "speaker": "user", "text": "Agreed. Unless something changes, I'll see you at six.", "translation": "De acuerdo. A menos que algo cambie, nos vemos a las seis." }
    ]
  }
};
