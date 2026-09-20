import { Unit } from '@/types/grammar';

export const presentPerfectUnits: Record<number, Unit> = {
  "7": {
    "title": "Present Perfect 1 (I have done)",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "Forma",
        "body": "Se forma con have/has + participio pasado: 'have' con I/you/we/they y 'has' con he/she/it. Muchos participios son regulares (-ed, como el pasado simple), pero los irregulares (gone, written...) hay que aprenderlos aparte. Al hablar casi siempre se contrae: 'I've worked', 'she's gone'.",
        "note": "I have worked → I've worked · She has gone → She's gone"
      },
      {
        "head": "Resultado conectado con AHORA",
        "body": "Se usa cuando algo pasado sigue importando o teniendo efecto ahora, aunque no digamos cuándo ocurrió. El foco no está en el hecho pasado, sino en su consecuencia presente: 'I've lost my key' indica que ahora no la tienes. Aquí está la diferencia clave con el pretérito perfecto español, que no siempre implica esa conexión con el presente.",
        "note": "I've lost my key. (= I don't have it NOW) · He's gone to Paris. (= he's there NOW)"
      },
      {
        "head": "Experiencia de vida (ever/never)",
        "body": "Habla de experiencias vividas hasta ahora, sin decir cuándo exactamente — importa si pasó, no el momento. 'Ever' pregunta por cualquier momento ('have you ever eaten sushi?') y 'never' lo niega. Si luego especificas cuándo pasó, se cambia a pasado simple.",
        "note": "Have you ever eaten sushi? · I've never been to Canada."
      },
      {
        "head": "Noticias recientes — just/already/yet",
        "body": "Es el tiempo natural para anunciar noticias recientes, como algo fresco y relevante ahora mismo. 'Just' (hace un momento), 'already' (antes de lo esperado) y 'yet' (en preguntas/negativas) marcan qué tan reciente o esperado es. Al dar más detalles, se suele pasar a pasado simple.",
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
        "exp": "Resultado AHORA → present perfect: 'I've lost it.' (ya no la tengo)"
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
        "exp": "Experiencia de vida → present perfect: 'Have you ever been…?'"
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
        "exp": "Hecho reciente con 'just' → present perfect: 'has just arrived'."
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
        "exp": "El present perfect usa el participio: 'I've never eaten.'"
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
      {
        "label": "Affirmative",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "Life experience question",
        "chips": [
          {
            "text": "Have/Has",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "ever",
            "role": "connector"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Guess what — I've just found a really nice flat near the city centre!",
        "translation": "Adivina qué — ¡acabo de encontrar un piso muy bonito cerca del centro!"
      },
      {
        "speaker": "user",
        "text": "That's great news! Have you already told your parents?",
        "translation": "¡Qué buena noticia! ¿Ya se lo has contado a tus padres?"
      },
      {
        "speaker": "other",
        "text": "Yes, I've already called them. They're really happy for me.",
        "translation": "Sí, ya les he llamado. Están muy contentos por mí."
      },
      {
        "speaker": "user",
        "text": "Have you ever lived on your own before, or is this your first time?",
        "translation": "¿Has vivido alguna vez sola antes, o es tu primera vez?"
      },
      {
        "speaker": "other",
        "text": "No, I've never lived alone — this will be a completely new experience for me!",
        "translation": "No, nunca he vivido sola — ¡va a ser una experiencia totalmente nueva para mí!"
      },
      {
        "speaker": "user",
        "text": "Well, I've been to that neighbourhood before, and it's lovely. You'll love it.",
        "translation": "Bueno, yo he estado en ese barrio antes, y es precioso. Te va a encantar."
      }
    ],
    "tips": [
      "'Have/has' casi siempre se contrae en el habla: I've, she's, they've — decir 'I have' completo suena muy formal o enfático.",
      "'Has gone' (sigue allí) y 'has been' (fue y volvió) no son intercambiables — confundirlos es un error clásico."
    ],
    "dailyWords": [
      {
        "w": "news",
        "ipa": "/njuːz/",
        "aprox": "niús",
        "def": "noticia(s)",
        "ex": "I've got some good news for you."
      },
      {
        "w": "experience",
        "ipa": "/ɪkˈspɪəriəns/",
        "aprox": "ekspírians",
        "def": "experiencia",
        "ex": "Have you ever had this experience before?"
      }
    ]
  },
  "8": {
    "title": "Present Perfect 2 (just/already/yet/ever/never)",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "JUST — hace un momento",
        "body": "'Just' indica que algo pasó hace muy poco, tan reciente que aún se siente conectado con el presente. Va entre el auxiliar y el participio: 'I've just spoken to Tom'. Por eso encaja tan bien con la idea del present perfect.",
        "note": "I've just spoken to Tom. · She's just left — you've missed her!"
      },
      {
        "head": "ALREADY — antes de lo esperado",
        "body": "'Already' se usa en frases afirmativas para decir que algo pasó antes de lo esperado, resaltando que ya está hecho. En 'I've already eaten', el hablante subraya que ya comió, antes de lo que el oyente suponía. Va entre el auxiliar y el participio, igual que 'just'.",
        "note": "'Would you like some food?' 'No thanks, I've already eaten.'"
      },
      {
        "head": "YET — todavía (negativas/preguntas)",
        "body": "'Yet' se usa en negativas y preguntas para preguntar o decir si algo ha pasado hasta ahora, casi siempre al final de la frase: 'have you done it yet?', 'I haven't spoken to her yet'. A diferencia de 'already', no implica sorpresa, solo comprueba el estado actual.",
        "note": "Have you done it yet? · I haven't spoken to her yet."
      },
      {
        "head": "EVER / NEVER — experiencia de vida",
        "body": "'Ever' y 'never' hablan de experiencias de toda la vida hasta ahora, sin señalar un momento concreto. 'Ever' (alguna vez) se usa sobre todo en preguntas: 'have you ever met a famous person?'. 'Never' (nunca) es su negación: 'I've never eaten oysters'.",
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
        "exp": "Frase afirmativa, antes de lo esperado → 'already'."
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
        "exp": "'Yet' en preguntas → 'Have you seen the film yet?'"
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
        "exp": "'Yet' en negativas → 'I haven't spoken to her yet.'"
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
        "exp": "Después de superlativo + present perfect → 'ever': 'I've ever seen'."
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
      {
        "label": "Just / Already",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "just/already",
            "role": "connector"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      },
      {
        "label": "Yet (question/negative)",
        "chips": [
          {
            "text": "Have/Haven't",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "past participle",
            "role": "object"
          },
          {
            "text": "yet",
            "role": "connector"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "ALREADY — positive sentences",
        "example": "I've already finished my homework.",
        "highlight": "already finished"
      },
      "right": {
        "label": "YET — negatives & questions",
        "example": "I haven't finished my homework yet.",
        "highlight": "finished... yet"
      },
      "caption": "Use 'already' in positive sentences to show something happened sooner than expected; use 'yet' in negatives and questions to ask or say if it has happened by now."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Have you packed your suitcase yet? We're leaving soon!",
        "translation": "¿Ya has hecho la maleta? ¡Nos vamos pronto!"
      },
      {
        "speaker": "user",
        "text": "Yes, I've already packed it — I did it last night.",
        "translation": "Sí, ya la he hecho — la hice anoche."
      },
      {
        "speaker": "other",
        "text": "Great. Have you called the taxi yet?",
        "translation": "Genial. ¿Ya has llamado al taxi?"
      },
      {
        "speaker": "user",
        "text": "I've just called them, actually — they'll be here in ten minutes.",
        "translation": "La verdad es que acabo de llamarles — llegarán en diez minutos."
      },
      {
        "speaker": "other",
        "text": "Perfect. Oh, have you ever forgotten your passport before a trip?",
        "translation": "Perfecto. Oye, ¿alguna vez se te ha olvidado el pasaporte antes de un viaje?"
      },
      {
        "speaker": "user",
        "text": "Ha, no, I've never forgotten it, but I almost did once!",
        "translation": "Ja, no, nunca se me ha olvidado, ¡pero una vez estuve a punto!"
      }
    ],
    "tips": [
      "'Yet' va casi siempre al final de la frase: 'Have you finished yet?', no en medio como 'already'.",
      "'Already' suena a sorpresa o rapidez ('¡ya lo hice!'), mientras que 'yet' simplemente pregunta o niega si algo ha pasado hasta ahora."
    ],
    "dailyWords": [
      {
        "w": "to pack",
        "ipa": "/pæk/",
        "aprox": "pak",
        "def": "hacer la maleta, empacar",
        "ex": "Have you packed your suitcase yet?"
      },
      {
        "w": "suitcase",
        "ipa": "/ˈsuːtkeɪs/",
        "aprox": "sútkeis",
        "def": "maleta",
        "ex": "I've already put my suitcase in the car."
      }
    ]
  },
  "9": {
    "title": "Present Perfect Continuous (I have been doing)",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "Forma",
        "body": "Se forma con have/has + been + verbo en -ing. Combina la conexión con el presente del present perfect con la idea de acción en curso del continuo, por eso lleva tres piezas. En el habla se contrae: 'they've been studying'.",
        "note": "I have been working · She has been waiting · They've been studying"
      },
      {
        "head": "Acción en curso hasta ahora",
        "body": "Se usa para una actividad que empezó en el pasado y sigue hasta ahora, o que acaba de parar dejando efectos visibles. 'I've been waiting for an hour' indica que sigues esperando. Si acaba de terminar ('I've been running'), el foco está en la actividad y por qué estás así (cansado), no en el resultado.",
        "note": "I've been waiting for an hour. (I'm still waiting) · I'm tired — I've been running."
      },
      {
        "head": "Por qué / cuánto tiempo",
        "body": "Sirve para explicar algo visible ahora señalando la actividad que lo causó, o para preguntar cuánto tiempo lleva pasando algo. 'Why are your hands dirty? I've been fixing the car' conecta una pista presente con su causa; 'how long have you been learning English?' pregunta la duración.",
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
        "exp": "Explica un estado presente por una actividad reciente → 'have you been doing?'"
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
        "exp": "Actividad en curso hasta ahora → 'have been waiting'."
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
        "exp": "Duración de una actividad en curso → 'have you been learning?'"
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
        "exp": "Explica el estado presente (por qué sucio) → 'have been digging'."
      }
    ],
    "flashcards": [
      {
        "front": "Present Perfect vs Present Perfect Continuous",
        "back": "SIMPLE: I've read 3 books today. (completed, result)\nCONTINUOUS: I've been reading all day. (activity, duration)\n\nBoth can be used with 'how long':\nHow long have you been waiting? ✅\nHow long have you waited? ✅ (less common)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Form",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has been",
            "role": "verb"
          },
          {
            "text": "verb-ing",
            "role": "object"
          }
        ]
      },
      {
        "label": "Duration question",
        "chips": [
          {
            "text": "How long",
            "role": "connector"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "been + verb-ing",
            "role": "object"
          }
        ]
      }
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
      {
        "w": "exhausted",
        "ipa": "/ɪɡˈzɔːstɪd/",
        "aprox": "egzósted",
        "def": "agotado, exhausto",
        "ex": "I'm exhausted — I've been running for an hour."
      },
      {
        "w": "on and off",
        "ipa": "/ɒn ənd ɒf/",
        "aprox": "on and óf",
        "def": "de manera intermitente, a ratos",
        "ex": "I've been studying on and off all afternoon."
      }
    ]
  },
  "10": {
    "title": "Present Perfect Continuous and Simple",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "Continuo — actividad/duración",
        "body": "El continuo pone el foco en la actividad y cuánto ha durado, no en lo logrado. 'I've been repairing my bike' sugiere que quizá no ha terminado; 'she's been studying for 3 hours' resalta el esfuerzo y su duración. Es ideal para explicar un estado presente, como cansancio o manos sucias.",
        "note": "My hands are dirty. I've been repairing my bike. · She's been studying for 3 hours."
      },
      {
        "head": "Simple — resultado/finalización",
        "body": "El simple, en cambio, resalta el resultado o la cantidad terminada, no la actividad en sí. 'I've repaired my bike' indica que ya está lista; 'she's studied 3 chapters' da una cantidad medible y completa. Úsalo cuando importa el logro, no el proceso.",
        "note": "I've repaired my bike. (it's ready now) · She's studied 3 chapters. (completed)"
      },
      {
        "head": "Verbos que no van en continuo",
        "body": "Los verbos de estado (know, want, like, need, have de posesión) describen estados, no actividades, así que nunca van en continuo, ni siquiera aquí: 'I've known him for years', nunca 'I've been knowing him'. Es la misma restricción del present continuous normal.",
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
        "exp": "Explica el estado actual — resalta la actividad → 'have been working'."
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
        "exp": "Completado con resultado → 'has written'. (tres emails = cantidad medible)"
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
        "exp": "Verbo de estado 'know' → nunca continuo: 'have known'."
      }
    ],
    "flashcards": [
      {
        "front": "Continuous vs Simple present perfect",
        "back": "CONTINUOUS = activity/duration:\n'I've been reading.' (that's what I've been doing)\n\nSIMPLE = result/quantity:\n'I've read 3 chapters.' (that's what I've achieved)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Continuous (activity)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has been",
            "role": "verb"
          },
          {
            "text": "verb-ing",
            "role": "object"
          }
        ]
      },
      {
        "label": "Simple (result)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "past participle (+ quantity)",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "CONTINUOUS — activity",
        "example": "I've been painting the fence.",
        "highlight": "'ve been painting"
      },
      "right": {
        "label": "SIMPLE — result",
        "example": "I've painted the fence.",
        "highlight": "'ve painted"
      },
      "caption": "Continuous highlights the activity and how long it took; simple highlights the finished result."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Wow, your hands are covered in paint! What have you been doing?",
        "translation": "¡Vaya, tienes las manos llenas de pintura! ¿Qué has estado haciendo?"
      },
      {
        "speaker": "user",
        "text": "I've been painting the kitchen all afternoon. Look, I've already painted two walls!",
        "translation": "He estado pintando la cocina toda la tarde. Mira, ¡ya he pintado dos paredes!"
      },
      {
        "speaker": "other",
        "text": "That's a great result. Have you been cleaning the garden too?",
        "translation": "Ese es un gran resultado. ¿También has estado limpiando el jardín?"
      },
      {
        "speaker": "user",
        "text": "Yes, I've been working out there as well, but I haven't finished it yet — I've only cut half the grass.",
        "translation": "Sí, también he estado trabajando ahí fuera, pero todavía no he terminado — solo he cortado la mitad del césped."
      },
      {
        "speaker": "other",
        "text": "You've done so much today! Do you know Mark? He's been a gardener since 2010.",
        "translation": "¡Has hecho muchísimo hoy! ¿Conoces a Mark? Es jardinero desde 2010."
      },
      {
        "speaker": "user",
        "text": "Really? I've known him for years but I never knew that!",
        "translation": "¿En serio? Le conozco desde hace años pero nunca supe eso."
      }
    ],
    "tips": [
      "Si puedes contar 'cuántos' o 'cuánto', usa la forma simple (he leído 3 libros); si describes la actividad en sí, usa la continua (he estado leyendo).",
      "Verbos de estado (know, like, be) no van en presente perfecto continuo: 'I've known him for years', nunca 'I've been knowing'."
    ],
    "dailyWords": [
      {
        "w": "result",
        "ipa": "/rɪˈzʌlt/",
        "aprox": "risólt",
        "def": "resultado",
        "ex": "The result of all that work is a beautiful garden."
      },
      {
        "w": "so far",
        "ipa": "/səʊ fɑːr/",
        "aprox": "sóu far",
        "def": "hasta ahora",
        "ex": "So far, I've painted two rooms."
      }
    ]
  },
  "11": {
    "title": "How long have you (been)…?",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "How long… para situaciones en curso",
        "body": "Cuando una situación empezó en el pasado y sigue siendo cierta ahora, se usa present perfect (simple o continuo) con 'how long', 'for' o 'since' para hablar de su duración. 'How long have you known her?' pregunta por algo que sigue hoy; como no ha terminado, el pasado simple sería incorrecto aquí.",
        "note": "How long have you known her? · I've known her for five years. · I've lived here since 2018."
      },
      {
        "head": "FOR vs SINCE",
        "body": "Ambas indican duración, pero responden preguntas distintas: 'for' + un periodo (two hours, five years), 'since' + un punto de partida (6 o'clock, 2018). 'I've been waiting for two hours' dice cuánto ha durado; 'I've been waiting since 6 o'clock' dice desde cuándo.",
        "note": "I've been waiting for two hours. · I've been waiting since 6 o'clock."
      },
      {
        "head": "How long con pasado simple — terminado",
        "body": "'How long' y 'for' también funcionan con pasado simple si la situación ya terminó por completo. 'I lived in London for two years' deja claro que ya no vives allí; compáralo con 'I've lived in London for two years', que significa que sigues viviendo allí. El tiempo verbal marca si continúa o no.",
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
        "exp": "Situación en curso hasta ahora → present perfect: 'Have you known…?'"
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
        "exp": "Punto en el tiempo (año) → 'since 2015'."
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
        "exp": "Periodo de tiempo → 'for three hours'."
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
        "exp": "Actividad en curso con duración → 'have you been learning?'"
      }
    ],
    "flashcards": [
      {
        "front": "FOR vs SINCE",
        "back": "FOR + period of time:\nfor two hours · for five years · for a long time\n\nSINCE + point in time:\nsince 2015 · since Monday · since I was a child"
      }
    ],
    "syntaxChips": [
      {
        "label": "Ongoing duration",
        "chips": [
          {
            "text": "How long",
            "role": "connector"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "past participle / been + -ing",
            "role": "object"
          }
        ]
      },
      {
        "label": "For / Since",
        "chips": [
          {
            "text": "for",
            "role": "connector"
          },
          {
            "text": "+ period",
            "role": "object"
          },
          {
            "text": "since",
            "role": "connector"
          },
          {
            "text": "+ point in time",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "FOR — a period",
        "example": "I've lived here for five years.",
        "highlight": "for five years"
      },
      "right": {
        "label": "SINCE — a starting point",
        "example": "I've lived here since 2018.",
        "highlight": "since 2018"
      },
      "caption": "'For' is followed by a length of time; 'since' is followed by the specific point when the situation began."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "How long have you known your best friend?",
        "translation": "¿Cuánto tiempo hace que conoces a tu mejor amiga?"
      },
      {
        "speaker": "user",
        "text": "I've known her for over ten years — since we were at school together.",
        "translation": "La conozco desde hace más de diez años — desde que estábamos juntas en el colegio."
      },
      {
        "speaker": "other",
        "text": "Wow, that's a long time! And how long have you been living in this city?",
        "translation": "¡Vaya, cuánto tiempo! ¿Y cuánto llevas viviendo en esta ciudad?"
      },
      {
        "speaker": "user",
        "text": "I've been living here since 2019, so about six years now.",
        "translation": "Vivo aquí desde 2019, o sea unos seis años ya."
      },
      {
        "speaker": "other",
        "text": "Did you use to live somewhere else before that?",
        "translation": "¿Vivías en otro sitio antes de eso?"
      },
      {
        "speaker": "user",
        "text": "Yes, I lived in a small town for two years, but I don't live there anymore.",
        "translation": "Sí, viví en un pueblo pequeño durante dos años, pero ya no vivo allí."
      }
    ],
    "tips": [
      "Trucos para recordar: SINCE = semilla (un punto exacto), FOR = flecha (una duración completa).",
      "Si la situación ya terminó, usa el pasado simple ('I lived there for two years'), no el presente perfecto."
    ],
    "dailyWords": [
      {
        "w": "since",
        "ipa": "/sɪns/",
        "aprox": "sins",
        "def": "desde (un punto en el tiempo)",
        "ex": "I've lived here since 2020."
      },
      {
        "w": "for ages",
        "ipa": "/fɔːr ˈeɪdʒɪz/",
        "aprox": "for éichis",
        "def": "desde hace mucho tiempo (coloquial)",
        "ex": "I haven't seen her for ages."
      }
    ]
  },
  "12": {
    "title": "For and Since / When…? and How long…?",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "FOR — duración",
        "body": "'For' introduce un periodo de tiempo y funciona con casi cualquier tiempo verbal, no solo present perfect: pasado simple ('I lived there for 3 years'), present perfect ('I've worked here for 6 months') o futuro ('she will be away for a week'). Su función siempre es la misma: medir cuánto dura algo.",
        "note": "I lived there for 3 years. (past) · I've worked here for 6 months. (present perfect) · She will be away for a week. (future)"
      },
      {
        "head": "SINCE — punto de partida",
        "body": "'Since' señala el punto exacto en que empezó una situación, y casi siempre acompaña al present perfect, porque describe algo que sigue siendo cierto ahora. 'I've been here since Monday' da el inicio, no la duración. A diferencia de 'for', no suele combinarse con una situación ya terminada.",
        "note": "I've been here since Monday. · She's worked here since she was 20."
      },
      {
        "head": "When vs. How long",
        "body": "'When' pregunta por un momento concreto de inicio y se responde con pasado simple. 'How long' pregunta por una duración hasta ahora y se responde con present perfect. La propia pregunta indica qué tiempo verbal debe llevar la respuesta.",
        "note": "When did you start learning English? (past simple) · How long have you been learning English? (present perfect)"
      },
      {
        "head": "Truco: SINCE = semilla, FOR = flecha",
        "body": "Piensa en SINCE como una semilla plantada en un punto exacto: solo marca el inicio, nada más. Piensa en FOR como una flecha que recorre una distancia: representa toda la duración, de principio a fin. 'I've lived here since 2015' es la semilla; 'I've lived here for 5 years' es la flecha.",
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
        "exp": "Punto en el tiempo → 'since last week'."
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
        "exp": "Periodo de tiempo → 'for three years'."
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
        "exp": "La respuesta da un momento pasado → pregunta con 'When?' + pasado simple."
      }
    ],
    "flashcards": [
      {
        "front": "When vs How long",
        "back": "WHEN? → Past Simple:\n'When did you arrive?' 'I arrived at 3pm.'\n\nHOW LONG? → Present Perfect:\n'How long have you been here?' 'I've been here since 3pm.'"
      }
    ],
    "syntaxChips": [
      {
        "label": "When + past simple",
        "chips": [
          {
            "text": "When",
            "role": "connector"
          },
          {
            "text": "did",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "base verb",
            "role": "object"
          }
        ]
      },
      {
        "label": "How long + present perfect",
        "chips": [
          {
            "text": "How long",
            "role": "connector"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "WHEN — past simple",
        "example": "When did you start this job?",
        "highlight": "did you start"
      },
      "right": {
        "label": "HOW LONG — present perfect",
        "example": "How long have you had this job?",
        "highlight": "have you had"
      },
      "caption": "'When' asks about one past moment (answered with past simple); 'how long' asks about a duration up to now (answered with present perfect)."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "When did you start working at this company?",
        "translation": "¿Cuándo empezaste a trabajar en esta empresa?"
      },
      {
        "speaker": "user",
        "text": "I started three years ago, in 2023.",
        "translation": "Empecé hace tres años, en 2023."
      },
      {
        "speaker": "other",
        "text": "And how long have you been the team leader?",
        "translation": "¿Y cuánto tiempo llevas siendo el líder del equipo?"
      },
      {
        "speaker": "user",
        "text": "I've been the team leader since last January — so about eight months.",
        "translation": "Llevo siendo el líder del equipo desde enero pasado — o sea, unos ocho meses."
      },
      {
        "speaker": "other",
        "text": "I see. When did you move to this city, by the way?",
        "translation": "Ya veo. Por cierto, ¿cuándo te mudaste a esta ciudad?"
      },
      {
        "speaker": "user",
        "text": "I moved here for the job, five years ago. I've lived here ever since.",
        "translation": "Me mudé aquí por el trabajo, hace cinco años. He vivido aquí desde entonces."
      }
    ],
    "tips": [
      "'When' siempre lleva pasado simple: pregunta por UN momento concreto, no por una duración.",
      "'For' funciona con casi cualquier tiempo verbal (pasado, presente perfecto, futuro); 'since' casi siempre acompaña al presente perfecto."
    ],
    "dailyWords": [
      {
        "w": "to start",
        "ipa": "/stɑːrt/",
        "aprox": "start",
        "def": "empezar, comenzar",
        "ex": "When did you start your new job?"
      },
      {
        "w": "ever since",
        "ipa": "/ˈevər sɪns/",
        "aprox": "éver sins",
        "def": "desde entonces",
        "ex": "I moved here in 2018 and I've lived here ever since."
      }
    ]
  },
  "13": {
    "title": "Present Perfect and Past Simple 1",
    "topic": "Present Perfect",
    "level": "B1",
    "explain": [
      {
        "head": "Past Simple — momento pasado concreto",
        "body": "Se usa pasado simple cuando dices o das a entender exactamente cuándo pasó algo, aunque sea solo una palabra como 'yesterday'. Nombrar el momento concreto quita el foco del presente y lo pone en el hecho ya terminado: 'I lost my key yesterday', 'she called me an hour ago'.",
        "note": "I lost my key yesterday. · She called me an hour ago. · Did you see him last night?"
      },
      {
        "head": "Present Perfect — sin tiempo concreto / AHORA",
        "body": "Usa present perfect cuando no se menciona un momento concreto, o cuando lo importante es la conexión con el presente. 'I've lost my key' no dice cuándo, solo que ahora no la tienes. 'Have you seen him?' pregunta por cualquier momento hasta ahora, no por una ocasión concreta.",
        "note": "I've lost my key. (I don't have it now) · Have you seen him? (at any time)"
      },
      {
        "head": "Just / already / yet → present perfect",
        "body": "En inglés británico, 'just', 'already' y 'yet' van casi siempre con present perfect, porque describen la relevancia de la acción ahora mismo, no un momento fijo del pasado. En inglés americano a veces se acepta el pasado simple, pero present perfect es la opción más segura.",
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
        "exp": "'Already' + resultado presente → present perfect: 'have already eaten'."
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
        "exp": "Momento pasado concreto (yesterday) → past simple: 'saw'."
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
        "exp": "Experiencia de vida, sin tiempo concreto → present perfect: 'Have you ever been?'"
      }
    ],
    "flashcards": [
      {
        "front": "When to use each — quick rule",
        "back": "PAST SIMPLE: I saw it YESTERDAY. (specific time)\nPRESENT PERFECT: I've seen it. (no time = connection to now)\n\nTime words like yesterday, last week, in 2020 → PAST SIMPLE\nTime words like just, already, ever, yet → PRESENT PERFECT"
      }
    ],
    "syntaxChips": [
      {
        "label": "Past simple (specific time)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "verb+ed / irregular",
            "role": "verb"
          },
          {
            "text": "time expression",
            "role": "object"
          }
        ]
      },
      {
        "label": "Present perfect (unspecified time)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has",
            "role": "verb"
          },
          {
            "text": "past participle",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "PAST SIMPLE — specific time",
        "example": "I lost my key yesterday.",
        "highlight": "lost... yesterday"
      },
      "right": {
        "label": "PRESENT PERFECT — no specific time",
        "example": "I've lost my key.",
        "highlight": "'ve lost"
      },
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
      {
        "w": "to lose",
        "ipa": "/luːz/",
        "aprox": "lus",
        "def": "perder",
        "ex": "I've lost my keys again!"
      },
      {
        "w": "anywhere",
        "ipa": "/ˈeniweər/",
        "aprox": "éniuer",
        "def": "en cualquier/ningún lugar",
        "ex": "I can't find it anywhere."
      }
    ]
  },
  "14": {
    "title": "Present Perfect and Past Simple 2",
    "topic": "Present Perfect",
    "level": "B2",
    "explain": [
      {
        "head": "Noticia → present perfect; detalles → past simple",
        "body": "Es muy común anunciar una noticia con present perfect y luego dar los detalles en pasado simple. 'There's been an accident' presenta la noticia como algo recién relevante; lo que sigue ('a car hit a tree, two people were injured') ya son hechos concretos, así que pasa a pasado simple.",
        "note": "There's been an accident. A car hit a tree. Two people were injured. (first = pp, details = ps)"
      },
      {
        "head": "Gone vs. been",
        "body": "'Has gone to' y 'has been to' usan present perfect, pero significan lo contrario. 'He has gone to Paris' = viajó y sigue allí, no ha vuelto. 'He has been to Paris' = fue y ya volvió, es una experiencia pasada. Confundirlos es un error muy clásico.",
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
        "exp": "Noticia = present perfect; el detalle de cuándo = past simple."
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
        "exp": "Sigue allí (no ha vuelto) → 'has gone'."
      }
    ],
    "flashcards": [
      {
        "front": "HAS GONE vs HAS BEEN",
        "back": "has GONE = went and is still there\n'Tom has gone to Paris.' (he's in Paris now)\n\nhas BEEN = went and came back\n'Tom has been to Paris.' (he visited, he's back)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Giving news",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "have/has + participle",
            "role": "verb"
          },
          {
            "text": "(the news)",
            "role": "object"
          }
        ]
      },
      {
        "label": "Giving details",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "past simple verb",
            "role": "verb"
          },
          {
            "text": "(when/how)",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "HAS GONE — still there",
        "example": "She has gone to Paris.",
        "highlight": "has gone"
      },
      "right": {
        "label": "HAS BEEN — went and returned",
        "example": "She has been to Paris.",
        "highlight": "has been"
      },
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
      {
        "w": "to announce",
        "ipa": "/əˈnaʊns/",
        "aprox": "anáuns",
        "def": "anunciar",
        "ex": "They've just announced the news."
      },
      {
        "w": "these days",
        "ipa": "/ðiːz deɪz/",
        "aprox": "díis déis",
        "def": "hoy en día, actualmente",
        "ex": "Where's Tom these days?"
      }
    ]
  }
};
