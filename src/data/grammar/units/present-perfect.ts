import { Unit } from '@/types/grammar';

export const presentPerfectUnits: Record<number, Unit> = {
  "7": {
    "title": "Present Perfect 1 (I have done)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "The present perfect is formed with 'have' or 'has' followed by the past participle of the main verb — 'have' for I, you, we, and they, and 'has' for he, she, and it. Many past participles are regular (the same -ed form as the past simple), but irregular verbs have their own special participle, like 'gone' or 'written', which must be learned separately. In everyday speech these auxiliaries are almost always contracted, so 'I have worked' becomes 'I've worked' and 'she has gone' becomes 'she's gone'.",
        "note": "I have worked → I've worked · She has gone → She's gone"
      },
      {
        "head": "Result connected to NOW",
        "body": "The present perfect is used when something that happened in the past still matters or has a visible effect right now, even though we don't say exactly when it happened. The focus isn't really on the past event itself, but on its consequence in the present — 'I've lost my key' tells you I don't have it now, and 'he's gone to Paris' tells you he's there at this moment. This present-day connection is what separates the present perfect from the past simple, which simply reports a finished event without linking it to now.",
        "note": "I've lost my key. (= I don't have it NOW) · He's gone to Paris. (= he's there NOW)"
      },
      {
        "head": "Life experience (ever/never)",
        "body": "We also use the present perfect to talk about experiences a person has had at some point in their life up to now, without saying exactly when — the emphasis is on whether it happened at all, not on the specific occasion. Questions with 'ever' ask about any time up to the present ('have you ever eaten sushi?'), and 'never' denies it ever happening ('I've never been to Canada'). If you later specify when it happened, English switches to the past simple instead, since the sentence now focuses on a particular moment rather than the experience in general.",
        "note": "Have you ever eaten sushi? · I've never been to Canada."
      },
      {
        "head": "Recent news — just/recently/already/yet",
        "body": "The present perfect is also the natural tense for announcing news or recent information, treating it as freshly relevant to the present moment rather than a distant past fact. Words like 'just' (very recently), 'already' (sooner than expected), and 'yet' (used in questions and negatives) commonly appear with it to pin down how recent or expected the news is. Once the conversation moves on to give more specific details about when or how it happened, speakers typically shift into the past simple.",
        "note": "She's just arrived. · I've already eaten. · Have you done it yet?"
      }
    ],
    "table": {
      "cols": [
        "Subject",
        "Form",
        "Contraction"
      ],
      "rows": [
        [
          "I/You/We/They",
          "have + pp",
          "I've, You've"
        ],
        [
          "He/She/It",
          "has + pp",
          "He's, She's"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I can't find my wallet. I ___ it!",
        "opts": [
          "lost",
          "have lost",
          "was losing",
          "lose"
        ],
        "ans": 1,
        "exp": "Result NOW → present perfect: 'I've lost it.' (I don't have it now)"
      },
      {
        "q": "___ you ever been to Japan?",
        "opts": [
          "Did",
          "Have",
          "Were",
          "Are"
        ],
        "ans": 1,
        "exp": "Life experience → present perfect: 'Have you ever been…?'"
      },
      {
        "q": "She ___ just arrived. She's in the lobby.",
        "opts": [
          "has",
          "have",
          "had",
          "is"
        ],
        "ans": 0,
        "exp": "Recent event with 'just' → present perfect: 'has just arrived'."
      },
      {
        "q": "I've never ___ sushi.",
        "opts": [
          "ate",
          "eaten",
          "eat",
          "eating"
        ],
        "ans": 1,
        "exp": "Present perfect uses past participle: 'I've never eaten.'"
      }
    ],
    "flashcards": [
      {
        "front": "Present Perfect vs Past Simple — key rule",
        "back": "PRESENT PERFECT → connection to NOW:\nI've lost my key. (no key now)\nHave you ever been to Paris? (life experience)\n\nPAST SIMPLE → specific past time:\nI lost my key yesterday.\nI went to Paris in 2019."
      },
      {
        "front": "gone vs. been (present perfect of 'go')",
        "back": "He's GONE to Paris = he is there now (hasn't returned)\nHe's BEEN to Paris = he went and came back (experience)"
      }
    ],
    "syntaxChips": [
      { "label": "Affirmative", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has", "role": "verb" }, { "text": "past participle", "role": "object" }
      ] },
      { "label": "Life experience question", "chips": [
        { "text": "Have/Has", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "ever", "role": "connector" }, { "text": "past participle", "role": "object" }
      ] }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Guess what — I've just found a really nice flat near the city centre!", "translation": "Adivina qué — ¡acabo de encontrar un piso muy bonito cerca del centro!" },
      { "speaker": "user", "text": "That's great news! Have you already told your parents?", "translation": "¡Qué buena noticia! ¿Ya se lo has contado a tus padres?" },
      { "speaker": "other", "text": "Yes, I've already called them. They're really happy for me.", "translation": "Sí, ya les he llamado. Están muy contentos por mí." },
      { "speaker": "user", "text": "Have you ever lived on your own before, or is this your first time?", "translation": "¿Has vivido alguna vez sola antes, o es tu primera vez?" },
      { "speaker": "other", "text": "No, I've never lived alone — this will be a completely new experience for me!", "translation": "No, nunca he vivido sola — ¡va a ser una experiencia totalmente nueva para mí!" },
      { "speaker": "user", "text": "Well, I've been to that neighbourhood before, and it's lovely. You'll love it.", "translation": "Bueno, yo he estado en ese barrio antes, y es precioso. Te va a encantar." }
    ],
    "tips": [
      "'Have/has' casi siempre se contrae en el habla: I've, she's, they've — decir 'I have' completo suena muy formal o enfático.",
      "'Has gone' (sigue allí) y 'has been' (fue y volvió) no son intercambiables — confundirlos es un error clásico."
    ],
    "dailyWords": [
      { "w": "news", "ipa": "/njuːz/", "def": "noticia(s)", "ex": "I've got some good news for you." },
      { "w": "experience", "ipa": "/ɪkˈspɪəriəns/", "def": "experiencia", "ex": "Have you ever had this experience before?" }
    ]
  },
  "8": {
    "title": "Present Perfect 2 (just/already/yet/ever/never)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "JUST — very recently",
        "body": "'Just' is used with the present perfect to say that something happened a very short time ago — moments before now, so recent it still feels connected to the present. It slots in between the auxiliary and the past participle, as in 'I've just spoken to Tom', highlighting how fresh the news or action is. This immediacy is exactly why it pairs so naturally with the present-perfect idea of a past event still relevant right now.",
        "note": "I've just spoken to Tom. · She's just left — you've missed her!"
      },
      {
        "head": "ALREADY — sooner than expected",
        "body": "'Already' is used in positive present-perfect sentences to say that something happened sooner than expected, often to show that a task is done before someone assumed it would be. In 'I've already eaten', the speaker emphasizes that the eating is finished ahead of when the listener might have thought. Like 'just', it sits between the auxiliary and the past participle, and it reinforces the present-perfect sense of a completed action being relevant right now.",
        "note": "'Would you like some food?' 'No thanks, I've already eaten.'"
      },
      {
        "head": "YET — by now (negatives and questions)",
        "body": "'Yet' appears in negative present-perfect sentences and questions to talk about whether something has happened up to now, usually placed at the very end of the sentence. In a question, 'have you done it yet?' asks if the action has occurred by this point; in a negative, 'I haven't spoken to her yet' states that it hasn't happened so far, but implies it still might. Unlike 'already', 'yet' doesn't carry any sense of surprise — it's simply checking the current status of something expected to happen.",
        "note": "Have you done it yet? · I haven't spoken to her yet."
      },
      {
        "head": "EVER / NEVER — life experience",
        "body": "'Ever' and 'never' are used with the present perfect to talk about life experience up to now, without pointing to any specific occasion. 'Ever' means 'at any point in your life' and is mainly used in questions, as in 'have you ever met a famous person?', while 'never' is its negative counterpart, meaning 'at no point ever', as in 'I've never eaten oysters'. Both words emphasize the whole span of a person's life rather than one particular moment, which is why they pair so naturally with this tense.",
        "note": "Have you ever met a famous person? · I've never eaten oysters."
      }
    ],
    "table": {
      "cols": [
        "Word",
        "Use",
        "Position"
      ],
      "rows": [
        [
          "just",
          "very recently",
          "have + JUST + pp"
        ],
        [
          "already",
          "sooner than expected (positive)",
          "have + ALREADY + pp"
        ],
        [
          "yet",
          "by now (negative/question)",
          "at end of sentence"
        ],
        [
          "ever",
          "at any time (questions)",
          "have + EVER + pp"
        ],
        [
          "never",
          "at no time (positive)",
          "have + NEVER + pp"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I've ___ had breakfast, so I'm not hungry.",
        "opts": [
          "yet",
          "just",
          "already",
          "never"
        ],
        "ans": 2,
        "exp": "Positive sentence, sooner than expected → 'already'."
      },
      {
        "q": "Have you seen that new film ___?",
        "opts": [
          "already",
          "just",
          "ever",
          "yet"
        ],
        "ans": 3,
        "exp": "'Yet' in questions → 'Have you seen the film yet?'"
      },
      {
        "q": "I haven't spoken to her ___.",
        "opts": [
          "yet",
          "just",
          "already",
          "ever"
        ],
        "ans": 0,
        "exp": "'Yet' in negatives → 'I haven't spoken to her yet.'"
      },
      {
        "q": "It's the most exciting film I've ___ seen!",
        "opts": [
          "never",
          "ever",
          "just",
          "already"
        ],
        "ans": 1,
        "exp": "After superlative + present perfect → 'ever': 'I've ever seen'."
      }
    ],
    "flashcards": [
      {
        "front": "ALREADY vs YET",
        "back": "ALREADY = positive (sooner than expected):\n'I've already done my homework!'\n\nYET = negatives and questions:\n'Have you done it yet?'\n'I haven't done it yet.'"
      },
      {
        "front": "JUST / EVER / NEVER",
        "back": "JUST = very recently: 'She's just called.'\nEVER = at any time (questions): 'Have you ever been to Spain?'\nNEVER = at no time: 'I've never eaten sushi.'"
      }
    ],
    "syntaxChips": [
      { "label": "Just / Already", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has", "role": "verb" }, { "text": "just/already", "role": "connector" }, { "text": "past participle", "role": "object" }
      ] },
      { "label": "Yet (question/negative)", "chips": [
        { "text": "Have/Haven't", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "past participle", "role": "object" }, { "text": "yet", "role": "connector" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "ALREADY — positive sentences", "example": "I've already finished my homework.", "highlight": "already finished" },
      "right": { "label": "YET — negatives & questions", "example": "I haven't finished my homework yet.", "highlight": "finished... yet" },
      "caption": "Use 'already' in positive sentences to show something happened sooner than expected; use 'yet' in negatives and questions to ask or say if it has happened by now."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Have you packed your suitcase yet? We're leaving soon!", "translation": "¿Ya has hecho la maleta? ¡Nos vamos pronto!" },
      { "speaker": "user", "text": "Yes, I've already packed it — I did it last night.", "translation": "Sí, ya la he hecho — la hice anoche." },
      { "speaker": "other", "text": "Great. Have you called the taxi yet?", "translation": "Genial. ¿Ya has llamado al taxi?" },
      { "speaker": "user", "text": "I've just called them, actually — they'll be here in ten minutes.", "translation": "La verdad es que acabo de llamarles — llegarán en diez minutos." },
      { "speaker": "other", "text": "Perfect. Oh, have you ever forgotten your passport before a trip?", "translation": "Perfecto. Oye, ¿alguna vez se te ha olvidado el pasaporte antes de un viaje?" },
      { "speaker": "user", "text": "Ha, no, I've never forgotten it, but I almost did once!", "translation": "Ja, no, nunca se me ha olvidado, ¡pero una vez estuve a punto!" }
    ],
    "tips": [
      "'Yet' va casi siempre al final de la frase: 'Have you finished yet?', no en medio como 'already'.",
      "'Already' suena a sorpresa o rapidez ('¡ya lo hice!'), mientras que 'yet' simplemente pregunta o niega si algo ha pasado hasta ahora."
    ],
    "dailyWords": [
      { "w": "to pack", "ipa": "/pæk/", "def": "hacer la maleta, empacar", "ex": "Have you packed your suitcase yet?" },
      { "w": "suitcase", "ipa": "/ˈsuːtkeɪs/", "def": "maleta", "ex": "I've already put my suitcase in the car." }
    ]
  },
  "9": {
    "title": "Present Perfect Continuous (I have been doing)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "The present perfect continuous is built from 'have' or 'has' plus 'been' plus the main verb in its -ing form. It combines the present perfect's link to now with the continuous's idea of an ongoing activity, which is why it needs three parts instead of two: the auxiliary, 'been' (the past participle of 'be'), and the -ing verb. In speech, the auxiliary is usually contracted, so 'they have been studying' becomes 'they've been studying'.",
        "note": "I have been working · She has been waiting · They've been studying"
      },
      {
        "head": "Action in progress until now",
        "body": "We use the present perfect continuous for an activity that started at some point in the past and has continued up until now — either it's still going on, or it has only just stopped, with visible results in the present. 'I've been waiting for an hour' tells you the waiting started an hour ago and is still happening right now. If the activity has just finished, like 'I've been running', the emphasis is on the activity itself and why you're in your current state (tired, out of breath), rather than on what you achieved.",
        "note": "I've been waiting for an hour. (I'm still waiting) · I'm tired — I've been running."
      },
      {
        "head": "Why/how long",
        "body": "This tense is especially useful for explaining a present situation by pointing to the activity that caused it, or for asking and answering how long something has been going on. 'Why are your hands dirty? I've been fixing the car' links a visible present clue to a recent, ongoing activity, and 'how long have you been learning English?' asks about the duration of something that started in the past and continues now. In both cases, the focus is on the activity and its duration, not on a finished result.",
        "note": "Why are your hands dirty? I've been fixing the car. · How long have you been learning English?"
      }
    ],
    "table": {
      "cols": [
        "Continuous",
        "Simple"
      ],
      "rows": [
        [
          "I've been reading (activity)",
          "I've read the book (completed)"
        ],
        [
          "I've been running (explains tired)",
          "I've run 5km (result/achievement)"
        ],
        [
          "How long have you been waiting?",
          "How many books have you read?"
        ]
      ]
    },
    "quiz": [
      {
        "q": "You look exhausted! What ___ you ___?",
        "opts": [
          "did/do",
          "have/done",
          "have/been doing",
          "are/doing"
        ],
        "ans": 2,
        "exp": "Explaining a present state from a recent activity → 'have you been doing?'"
      },
      {
        "q": "I ___ for an hour. Where have you been?",
        "opts": [
          "wait",
          "waited",
          "have waited",
          "have been waiting"
        ],
        "ans": 3,
        "exp": "Activity in progress until now → 'have been waiting'."
      },
      {
        "q": "How long ___ you ___ English?",
        "opts": [
          "do/learn",
          "have/learned",
          "have/been learning",
          "did/learn"
        ],
        "ans": 2,
        "exp": "Duration of ongoing activity → 'have you been learning?'"
      },
      {
        "q": "I'm dirty because I ___ the garden.",
        "opts": [
          "dug",
          "have dug",
          "have been digging",
          "was digging"
        ],
        "ans": 2,
        "exp": "Explains present state (why dirty) → 'have been digging'."
      }
    ],
    "flashcards": [
      {
        "front": "Present Perfect vs Present Perfect Continuous",
        "back": "SIMPLE: I've read 3 books today. (completed, result)\nCONTINUOUS: I've been reading all day. (activity, duration)\n\nBoth can be used with 'how long':\nHow long have you been waiting? ✅\nHow long have you waited? ✅ (less common)"
      }
    ],
    "syntaxChips": [
      { "label": "Form", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has been", "role": "verb" }, { "text": "verb-ing", "role": "object" }
      ] },
      { "label": "Duration question", "chips": [
        { "text": "How long", "role": "connector" }, { "text": "have/has", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "been + verb-ing", "role": "object" }
      ] }
    ],
    "readingText": {
      "title": "A Long Day",
      "body": "I'm exhausted! I've been working since seven o'clock this morning, and I haven't stopped for more than a few minutes. My eyes are red because I've been staring at a screen all day, and my back hurts because I've been sitting in the same chair for hours. I've been trying to finish this report, but there's still so much to do. My colleague just asked me, 'How long have you been working on this?' and I honestly don't know anymore — it feels like forever!",
      "translation": "¡Estoy agotado! Llevo trabajando desde las siete de la mañana, y no he parado más de unos minutos. Tengo los ojos rojos porque llevo todo el día mirando una pantalla, y me duele la espalda porque llevo horas sentado en la misma silla. Llevo intentando terminar este informe, pero todavía queda mucho por hacer. Mi compañero me acaba de preguntar: '¿Cuánto tiempo llevas trabajando en esto?' y sinceramente ya no lo sé — ¡parece que llevo una eternidad!"
    },
    "tips": [
      "El presente perfecto continuo explica el 'por qué' de algo visible ahora: manos sucias, cansancio... la causa es la actividad reciente.",
      "'How long have you been + -ing?' es la pregunta clave para preguntar la duración de algo que sigue pasando."
    ],
    "dailyWords": [
      { "w": "exhausted", "ipa": "/ɪɡˈzɔːstɪd/", "def": "agotado, exhausto", "ex": "I'm exhausted — I've been running for an hour." },
      { "w": "on and off", "ipa": "/ɒn ənd ɒf/", "def": "de manera intermitente, a ratos", "ex": "I've been studying on and off all afternoon." }
    ]
  },
  "10": {
    "title": "Present Perfect Continuous and Simple",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Continuous — activity/duration",
        "body": "The present perfect continuous puts the focus on the activity itself and how long it has been happening, rather than on what has been achieved. 'I've been repairing my bike' tells you what you've been doing and hints that it may still not be finished, and 'she's been studying for 3 hours' emphasizes the ongoing effort and its duration. This makes it the natural choice when you're explaining a present state, like tiredness or dirty hands, that results from an activity in progress.",
        "note": "My hands are dirty. I've been repairing my bike. · She's been studying for 3 hours."
      },
      {
        "head": "Simple — result/completion",
        "body": "The present perfect simple, by contrast, emphasizes the result or completion of an action, or how much or how many were done, rather than the activity itself. 'I've repaired my bike' tells you the job is finished and the bike is ready now, and 'she's studied 3 chapters' gives a measurable, completed quantity. Choose this form when the achievement or outcome matters more than the process that led to it.",
        "note": "I've repaired my bike. (it's ready now) · She's studied 3 chapters. (completed)"
      },
      {
        "head": "Verbs not used in continuous",
        "body": "Stative verbs — like know, want, like, need, and 'have' meaning possession — describe states rather than activities, so they don't work in continuous forms even in the present perfect. Since there's no ongoing process to emphasize with these verbs, English simply uses the present perfect simple regardless of how long the state has lasted: 'I've known him for years', never 'I've been knowing him'. This is the same restriction that blocks these verbs from the ordinary present continuous.",
        "note": "I've known him for years. (NOT: I've been knowing) · She's been a teacher since 2010."
      }
    ],
    "quiz": [
      {
        "q": "I'm tired. I ___ all day.",
        "opts": [
          "worked",
          "have worked",
          "have been working",
          "was working"
        ],
        "ans": 2,
        "exp": "Explains current state — emphasizes activity → 'have been working'."
      },
      {
        "q": "She ___ three emails this morning. (completed, result)",
        "opts": [
          "has been writing",
          "has written",
          "was writing",
          "wrote"
        ],
        "ans": 1,
        "exp": "Completed with result → 'has written'. (Three emails = measurable result)"
      },
      {
        "q": "I ___ Tom for ten years. We're old friends.",
        "opts": [
          "have been knowing",
          "knew",
          "have known",
          "know"
        ],
        "ans": 2,
        "exp": "Stative verb 'know' → can't be continuous: 'have known'."
      }
    ],
    "flashcards": [
      {
        "front": "Continuous vs Simple present perfect",
        "back": "CONTINUOUS = activity/duration:\n'I've been reading.' (that's what I've been doing)\n\nSIMPLE = result/quantity:\n'I've read 3 chapters.' (that's what I've achieved)"
      }
    ],
    "syntaxChips": [
      { "label": "Continuous (activity)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has been", "role": "verb" }, { "text": "verb-ing", "role": "object" }
      ] },
      { "label": "Simple (result)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has", "role": "verb" }, { "text": "past participle (+ quantity)", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "CONTINUOUS — activity", "example": "I've been painting the fence.", "highlight": "'ve been painting" },
      "right": { "label": "SIMPLE — result", "example": "I've painted the fence.", "highlight": "'ve painted" },
      "caption": "Continuous highlights the activity and how long it took; simple highlights the finished result."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Wow, your hands are covered in paint! What have you been doing?", "translation": "¡Vaya, tienes las manos llenas de pintura! ¿Qué has estado haciendo?" },
      { "speaker": "user", "text": "I've been painting the kitchen all afternoon. Look, I've already painted two walls!", "translation": "He estado pintando la cocina toda la tarde. Mira, ¡ya he pintado dos paredes!" },
      { "speaker": "other", "text": "That's a great result. Have you been cleaning the garden too?", "translation": "Ese es un gran resultado. ¿También has estado limpiando el jardín?" },
      { "speaker": "user", "text": "Yes, I've been working out there as well, but I haven't finished it yet — I've only cut half the grass.", "translation": "Sí, también he estado trabajando ahí fuera, pero todavía no he terminado — solo he cortado la mitad del césped." },
      { "speaker": "other", "text": "You've done so much today! Do you know Mark? He's been a gardener since 2010.", "translation": "¡Has hecho muchísimo hoy! ¿Conoces a Mark? Es jardinero desde 2010." },
      { "speaker": "user", "text": "Really? I've known him for years but I never knew that!", "translation": "¿En serio? Le conozco desde hace años pero nunca supe eso." }
    ],
    "tips": [
      "Si puedes contar 'cuántos' o 'cuánto', usa la forma simple (he leído 3 libros); si describes la actividad en sí, usa la continua (he estado leyendo).",
      "Verbos de estado (know, like, be) no van en presente perfecto continuo: 'I've known him for years', nunca 'I've been knowing'."
    ],
    "dailyWords": [
      { "w": "result", "ipa": "/rɪˈzʌlt/", "def": "resultado", "ex": "The result of all that work is a beautiful garden." },
      { "w": "so far", "ipa": "/səʊ fɑːr/", "def": "hasta ahora", "ex": "So far, I've painted two rooms." }
    ]
  },
  "11": {
    "title": "How long have you (been)…?",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "How long… for ongoing situations",
        "body": "When a situation started in the past and is still true now, English uses the present perfect (simple or continuous) together with 'how long', 'for', or 'since' to talk about its duration. 'How long have you known her?' asks about a state that began at some point and continues today, and 'I've known her for five years' or 'I've lived here since 2018' answer with the length or starting point of that ongoing situation. Because the situation hasn't ended, the past simple would be the wrong choice here.",
        "note": "How long have you known her? · I've known her for five years. · I've lived here since 2018."
      },
      {
        "head": "FOR vs SINCE",
        "body": "'For' and 'since' both introduce duration, but they answer slightly different questions: 'for' is followed by a length or period of time (two hours, five years, a long time), while 'since' is followed by a specific starting point (6 o'clock, 2018, last Monday). 'I've been waiting for two hours' tells you how long the waiting has lasted, whereas 'I've been waiting since 6 o'clock' tells you exactly when it began. Choosing the right one just depends on whether the information you have is a duration or a starting moment.",
        "note": "I've been waiting for two hours. · I've been waiting since 6 o'clock."
      },
      {
        "head": "How long with past simple — finished",
        "body": "'How long' and 'for' aren't exclusive to the present perfect — when the situation being described is completely finished and no longer true, you switch to the past simple instead. 'I lived in London for two years' makes clear, through the past tense, that you no longer live there now; compare this with 'I've lived in London for two years', which would mean you still live there. So the tense you choose signals whether the situation continues into the present or belongs entirely to the past.",
        "note": "I lived in London for two years. (I don't live there now)"
      }
    ],
    "quiz": [
      {
        "q": "___ you known each other long?",
        "opts": [
          "Do",
          "Did",
          "Have",
          "Are"
        ],
        "ans": 2,
        "exp": "Ongoing situation up to now → present perfect: 'Have you known…?'"
      },
      {
        "q": "She has worked here ___ 2015.",
        "opts": [
          "for",
          "since",
          "during",
          "from"
        ],
        "ans": 1,
        "exp": "Point in time (year) → 'since 2015'."
      },
      {
        "q": "I've been studying ___ three hours.",
        "opts": [
          "for",
          "since",
          "during",
          "from"
        ],
        "ans": 0,
        "exp": "Period of time → 'for three hours'."
      },
      {
        "q": "How long ___ you ___ Spanish?",
        "opts": [
          "do/learn",
          "have/learned",
          "have/been learning",
          "did/learn"
        ],
        "ans": 2,
        "exp": "Ongoing activity with duration → 'have you been learning?'"
      }
    ],
    "flashcards": [
      {
        "front": "FOR vs SINCE",
        "back": "FOR + period of time:\nfor two hours · for five years · for a long time\n\nSINCE + point in time:\nsince 2015 · since Monday · since I was a child"
      }
    ],
    "syntaxChips": [
      { "label": "Ongoing duration", "chips": [
        { "text": "How long", "role": "connector" }, { "text": "have/has", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "past participle / been + -ing", "role": "object" }
      ] },
      { "label": "For / Since", "chips": [
        { "text": "for", "role": "connector" }, { "text": "+ period", "role": "object" }, { "text": "since", "role": "connector" }, { "text": "+ point in time", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "FOR — a period", "example": "I've lived here for five years.", "highlight": "for five years" },
      "right": { "label": "SINCE — a starting point", "example": "I've lived here since 2018.", "highlight": "since 2018" },
      "caption": "'For' is followed by a length of time; 'since' is followed by the specific point when the situation began."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "How long have you known your best friend?", "translation": "¿Cuánto tiempo hace que conoces a tu mejor amiga?" },
      { "speaker": "user", "text": "I've known her for over ten years — since we were at school together.", "translation": "La conozco desde hace más de diez años — desde que estábamos juntas en el colegio." },
      { "speaker": "other", "text": "Wow, that's a long time! And how long have you been living in this city?", "translation": "¡Vaya, cuánto tiempo! ¿Y cuánto llevas viviendo en esta ciudad?" },
      { "speaker": "user", "text": "I've been living here since 2019, so about six years now.", "translation": "Vivo aquí desde 2019, o sea unos seis años ya." },
      { "speaker": "other", "text": "Did you use to live somewhere else before that?", "translation": "¿Vivías en otro sitio antes de eso?" },
      { "speaker": "user", "text": "Yes, I lived in a small town for two years, but I don't live there anymore.", "translation": "Sí, viví en un pueblo pequeño durante dos años, pero ya no vivo allí." }
    ],
    "tips": [
      "Trucos para recordar: SINCE = semilla (un punto exacto), FOR = flecha (una duración completa).",
      "Si la situación ya terminó, usa el pasado simple ('I lived there for two years'), no el presente perfecto."
    ],
    "dailyWords": [
      { "w": "since", "ipa": "/sɪns/", "def": "desde (un punto en el tiempo)", "ex": "I've lived here since 2020." },
      { "w": "for ages", "ipa": "/fɔːr ˈeɪdʒɪz/", "def": "desde hace mucho tiempo (coloquial)", "ex": "I haven't seen her for ages." }
    ]
  },
  "12": {
    "title": "For and Since / When…? and How long…?",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "FOR — duration",
        "body": "'For' introduces a period of time — a duration — and it can be used with almost any tense, not only the present perfect. You'll find it in the past simple ('I lived there for 3 years'), the present perfect ('I've worked here for 6 months'), and even the future ('she will be away for a week'). What stays constant is its job: measuring how long something lasts, regardless of which tense carries that information.",
        "note": "I lived there for 3 years. (past) · I've worked here for 6 months. (present perfect) · She will be away for a week. (future)"
      },
      {
        "head": "SINCE — starting point",
        "body": "'Since' introduces the specific point in time when a situation began, and it's almost always paired with the present perfect, because it describes something that started in the past and is still true now. 'I've been here since Monday' and 'she's worked here since she was 20' both name the starting point, not the duration, of an ongoing situation. Unlike 'for', 'since' wouldn't normally combine with a finished past-simple situation, since it implies the state continues up to the present.",
        "note": "I've been here since Monday. · She's worked here since she was 20."
      },
      {
        "head": "When vs How long",
        "body": "'When' asks about the specific starting point of an action and is answered with the past simple, because it's asking about one moment in the past, not about the present. 'How long', on the other hand, asks about duration up to now and is normally answered with the present perfect, since it's asking about a span of time that reaches into the present. Comparing 'when did you start learning English?' with 'how long have you been learning English?' shows how the question word itself signals which tense the answer should use.",
        "note": "When did you start learning English? (past simple) · How long have you been learning English? (present perfect)"
      },
      {
        "head": "Truco: SINCE = semilla, FOR = flecha",
        "body": "Here's a memory trick: think of SINCE as a seed planted at one exact point in time — it marks only the starting moment when the action began, nothing more. Think of FOR as an arrow stretching across a distance — it represents the whole length of time covered, from start to end. So 'I've lived here since 2015' points to the seed, the starting point, while 'I've lived here for 5 years' measures the arrow, the full duration.",
        "note": "I've lived here SINCE 2015. (el punto de partida) · I've lived here FOR 5 years. (la duración)"
      }
    ],
    "quiz": [
      {
        "q": "I haven't seen him ___ last week.",
        "opts": [
          "for",
          "since",
          "during",
          "when"
        ],
        "ans": 1,
        "exp": "Point in time → 'since last week'."
      },
      {
        "q": "She's been learning French ___ three years.",
        "opts": [
          "since",
          "for",
          "during",
          "from"
        ],
        "ans": 1,
        "exp": "Period of time → 'for three years'."
      },
      {
        "q": "___ did you start this job? — Last May.",
        "opts": [
          "How long",
          "Since when",
          "When",
          "For how long"
        ],
        "ans": 2,
        "exp": "Answer gives a past time → question with 'When?' + past simple."
      }
    ],
    "flashcards": [
      {
        "front": "When vs How long",
        "back": "WHEN? → Past Simple:\n'When did you arrive?' 'I arrived at 3pm.'\n\nHOW LONG? → Present Perfect:\n'How long have you been here?' 'I've been here since 3pm.'"
      }
    ],
    "syntaxChips": [
      { "label": "When + past simple", "chips": [
        { "text": "When", "role": "connector" }, { "text": "did", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "base verb", "role": "object" }
      ] },
      { "label": "How long + present perfect", "chips": [
        { "text": "How long", "role": "connector" }, { "text": "have/has", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "past participle", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "WHEN — past simple", "example": "When did you start this job?", "highlight": "did you start" },
      "right": { "label": "HOW LONG — present perfect", "example": "How long have you had this job?", "highlight": "have you had" },
      "caption": "'When' asks about one past moment (answered with past simple); 'how long' asks about a duration up to now (answered with present perfect)."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "When did you start working at this company?", "translation": "¿Cuándo empezaste a trabajar en esta empresa?" },
      { "speaker": "user", "text": "I started three years ago, in 2023.", "translation": "Empecé hace tres años, en 2023." },
      { "speaker": "other", "text": "And how long have you been the team leader?", "translation": "¿Y cuánto tiempo llevas siendo el líder del equipo?" },
      { "speaker": "user", "text": "I've been the team leader since last January — so about eight months.", "translation": "Llevo siendo el líder del equipo desde enero pasado — o sea, unos ocho meses." },
      { "speaker": "other", "text": "I see. When did you move to this city, by the way?", "translation": "Ya veo. Por cierto, ¿cuándo te mudaste a esta ciudad?" },
      { "speaker": "user", "text": "I moved here for the job, five years ago. I've lived here ever since.", "translation": "Me mudé aquí por el trabajo, hace cinco años. He vivido aquí desde entonces." }
    ],
    "tips": [
      "'When' siempre lleva pasado simple: pregunta por UN momento concreto, no por una duración.",
      "'For' funciona con casi cualquier tiempo verbal (pasado, presente perfecto, futuro); 'since' casi siempre acompaña al presente perfecto."
    ],
    "dailyWords": [
      { "w": "to start", "ipa": "/stɑːrt/", "def": "empezar, comenzar", "ex": "When did you start your new job?" },
      { "w": "ever since", "ipa": "/ˈevər sɪns/", "def": "desde entonces", "ex": "I moved here in 2018 and I've lived here ever since." }
    ]
  },
  "13": {
    "title": "Present Perfect and Past Simple 1",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Past Simple — specific past time",
        "body": "The past simple is the tense to use whenever you state or clearly imply exactly when something happened, even if that time reference is just a single word like 'yesterday' or 'last night'. Naming or implying the specific moment shifts the focus away from any present relevance and onto the completed event itself, situated at that point in the past. 'I lost my key yesterday' and 'she called me an hour ago' both anchor the action to a definite past moment, which is exactly what triggers past simple instead of present perfect.",
        "note": "I lost my key yesterday. · She called me an hour ago. · Did you see him last night?"
      },
      {
        "head": "Present Perfect — no specific time / NOW",
        "body": "Use the present perfect instead when no specific time is mentioned, or when the real point of the sentence is the action's connection to the present moment rather than when exactly it happened. 'I've lost my key' doesn't say when you lost it — it tells you that you don't have it now. 'Have you seen him?' asks about any time up to now, not about one particular occasion, which is the key difference from the past simple.",
        "note": "I've lost my key. (I don't have it now) · Have you seen him? (at any time)"
      },
      {
        "head": "Just / already / yet → present perfect",
        "body": "In British English, the time words 'just', 'already', and 'yet' are strongly associated with the present perfect rather than the past simple, because all three describe an action's relevance to right now rather than a fixed point in the past. 'She's just left', 'I've already eaten', and 'have you called yet?' all treat the action as recent or currently relevant news. (American English is more flexible and sometimes allows the past simple with these words too, but the present perfect is the standard, safer choice.)",
        "note": "She's just left. · I've already eaten. · Have you called yet?"
      }
    ],
    "quiz": [
      {
        "q": "'Are you hungry?' 'No, I ___ already ___.",
        "opts": [
          "have/eaten",
          "did/eat",
          "was/eating",
          "ate/already"
        ],
        "ans": 0,
        "exp": "'Already' + present result → present perfect: 'have already eaten'."
      },
      {
        "q": "I ___ Tom yesterday. We had coffee together.",
        "opts": [
          "have seen",
          "saw",
          "see",
          "was seeing"
        ],
        "ans": 1,
        "exp": "Specific past time (yesterday) → past simple: 'saw'."
      },
      {
        "q": "___ you ever ___ to Australia?",
        "opts": [
          "Did/go",
          "Have/been",
          "Were/going",
          "Do/go"
        ],
        "ans": 1,
        "exp": "Life experience, no specific time → present perfect: 'Have you ever been?'"
      }
    ],
    "flashcards": [
      {
        "front": "When to use each — quick rule",
        "back": "PAST SIMPLE: I saw it YESTERDAY. (specific time)\nPRESENT PERFECT: I've seen it. (no time = connection to now)\n\nTime words like yesterday, last week, in 2020 → PAST SIMPLE\nTime words like just, already, ever, yet → PRESENT PERFECT"
      }
    ],
    "syntaxChips": [
      { "label": "Past simple (specific time)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb+ed / irregular", "role": "verb" }, { "text": "time expression", "role": "object" }
      ] },
      { "label": "Present perfect (unspecified time)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has", "role": "verb" }, { "text": "past participle", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "PAST SIMPLE — specific time", "example": "I lost my key yesterday.", "highlight": "lost... yesterday" },
      "right": { "label": "PRESENT PERFECT — no specific time", "example": "I've lost my key.", "highlight": "'ve lost" },
      "caption": "Name a specific past time (yesterday, last week) and use the past simple. Leave the time unspecified, focusing on the present result, and use the present perfect."
    },
    "readingText": {
      "title": "A Lost Wallet",
      "body": "I've lost my wallet! I can't find it anywhere. I remember I had it yesterday morning, when I bought a coffee near my office. I paid with cash, and I put the wallet back in my bag — or at least, I think I did. Have you seen it anywhere? I've already checked my desk twice, and I've looked under the sofa at home, but there's still no sign of it. Last night I went to the cinema with Laura, so maybe I dropped it there. I haven't called the cinema yet, but I'm going to do it right now.",
      "translation": "¡He perdido la cartera! No la encuentro por ningún lado. Recuerdo que la tenía ayer por la mañana, cuando compré un café cerca de la oficina. Pagué en efectivo, y volví a meter la cartera en el bolso — o al menos eso creo. ¿La has visto por algún sitio? Ya he revisado mi escritorio dos veces, y he mirado debajo del sofá en casa, pero sigue sin aparecer. Anoche fui al cine con Laura, así que a lo mejor se me cayó allí. Todavía no he llamado al cine, pero voy a hacerlo ahora mismo."
    },
    "tips": [
      "Palabras como 'yesterday', 'last week' o 'in 2020' exigen pasado simple; palabras como 'just', 'already', 'ever' exigen presente perfecto.",
      "Pregúntate: ¿importa CUÁNDO pasó (pasado simple) o importa que TENGA UN EFECTO AHORA (presente perfecto)?"
    ],
    "dailyWords": [
      { "w": "to lose", "ipa": "/luːz/", "def": "perder", "ex": "I've lost my keys again!" },
      { "w": "anywhere", "ipa": "/ˈeniweər/", "def": "en cualquier/ningún lugar", "ex": "I can't find it anywhere." }
    ]
  },
  "14": {
    "title": "Present Perfect and Past Simple 2",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "News → present perfect; details → past simple",
        "body": "A very common pattern in English is to announce a piece of news with the present perfect first, and then switch to the past simple to give the specific details of what happened. 'There's been an accident' introduces the news as newly relevant right now, and the sentences that follow — 'a car hit a tree, two people were injured' — move into the past simple because they're now describing the specific, completed events. Once listeners know 'when' through the story's details, there's no more need for the present perfect's vague, unspecified-time function.",
        "note": "There's been an accident. A car hit a tree. Two people were injured. (first = pp, details = ps)"
      },
      {
        "head": "Gone vs been",
        "body": "'Has gone to' and 'has been to' both use the present perfect, but they describe opposite situations. 'He has gone to Paris' means he traveled there and is still there now — he hasn't come back yet. 'He has been to Paris' means he visited at some point and has since returned, so it describes a completed experience rather than a current location. Mixing these up is a classic mistake, since the two participles here carry genuinely different meanings.",
        "note": "She's gone to Paris. (she's there now) · She's been to Paris. (she visited, she's back)"
      }
    ],
    "quiz": [
      {
        "q": "I hear that you ___ a new job. When ___ you start?",
        "opts": [
          "have got/did",
          "got/have",
          "have got/have",
          "got/did"
        ],
        "ans": 0,
        "exp": "News = present perfect; detail of when = past simple."
      },
      {
        "q": "Where's Tom? — He ___ to the shop. He'll be back soon.",
        "opts": [
          "has been",
          "went",
          "has gone",
          "was going"
        ],
        "ans": 2,
        "exp": "He's there now (hasn't returned) → 'has gone'."
      }
    ],
    "flashcards": [
      {
        "front": "HAS GONE vs HAS BEEN",
        "back": "has GONE = went and is still there\n'Tom has gone to Paris.' (he's in Paris now)\n\nhas BEEN = went and came back\n'Tom has been to Paris.' (he visited, he's back)"
      }
    ],
    "syntaxChips": [
      { "label": "Giving news", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "have/has + participle", "role": "verb" }, { "text": "(the news)", "role": "object" }
      ] },
      { "label": "Giving details", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "past simple verb", "role": "verb" }, { "text": "(when/how)", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "HAS GONE — still there", "example": "She has gone to Paris.", "highlight": "has gone" },
      "right": { "label": "HAS BEEN — went and returned", "example": "She has been to Paris.", "highlight": "has been" },
      "caption": "'Has gone' means the person is still there now. 'Has been' means they went and already came back."
    },
    "readingText": {
      "title": "Big News",
      "body": "I've got some big news — Sarah has had a baby! She had a little girl yesterday morning, and both are doing well. I heard the news from her mother, who called me an hour ago. Sarah's husband has already told everyone at his office, and they've decided to name the baby Emma. Meanwhile, where's Tom these days? Oh, he's gone to the hospital to visit them — he left about twenty minutes ago. He's never missed a chance to meet a new baby in the family!",
      "translation": "Tengo una noticia importante — ¡Sarah ha tenido un bebé! Tuvo una niña ayer por la mañana, y las dos están bien. Me enteré por su madre, que me llamó hace una hora. El marido de Sarah ya se lo ha contado a todos en su oficina, y han decidido llamar a la niña Emma. Por cierto, ¿dónde anda Tom estos días? Ah, ha ido al hospital a visitarlos — se fue hace unos veinte minutos. ¡Nunca se pierde la oportunidad de conocer a un nuevo bebé de la familia!"
    },
    "tips": [
      "Anuncia una noticia con presente perfecto ('There's been an accident') y luego da los detalles con pasado simple ('A car hit a tree').",
      "'Has gone to' = todavía está allí; 'has been to' = fue y ya volvió. Son opuestos, no sinónimos."
    ],
    "dailyWords": [
      { "w": "to announce", "ipa": "/əˈnaʊns/", "def": "anunciar", "ex": "They've just announced the news." },
      { "w": "these days", "ipa": "/ðiːz deɪz/", "def": "hoy en día, actualmente", "ex": "Where's Tom these days?" }
    ]
  }
};
