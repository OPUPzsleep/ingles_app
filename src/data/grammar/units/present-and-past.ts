import { Unit } from '@/types/grammar';

export const presentAndPastUnits: Record<number, Unit> = {
  "13": {
    "title": "Continuous and Simple 1",
    "topic": "Present & Past",
    "level": "A2",
    "explain": [
      {
        "head": "Continuo: ahora o temporal",
        "body": "El continuo describe algo en curso o que consideras pasajero: empezado y sin terminar, o cierto solo por ahora. Por eso \"the water is boiling\" habla de lo que pasa en la cocina, y \"I'm staying with friends\" indica algo temporal, no dónde vives.",
        "note": "The water is boiling. · I'm staying with friends for a few weeks."
      },
      {
        "head": "Simple: general o permanente",
        "body": "El simple sirve para hábitos, hechos y situaciones permanentes, sin idea de \"en curso\". Compara \"water boils at 100°C\" (propiedad del agua) con \"the water is boiling\" (ahora, en tu cocina): mismo verbo, significados totalmente distintos.",
        "note": "Water boils at 100°C. · My parents live in London."
      },
      {
        "head": "Always: neutro o crítico",
        "body": "Con el simple, \"always\" es un hábito neutro: cierras la puerta siempre, sin más. Con el continuo se convierte en queja: \"he's always losing his keys\" no significa literalmente siempre, sino demasiado a menudo y me molesta.",
        "note": "He's always losing his keys. (happens too often) · I always lock the door. (habit, neutral)"
      }
    ],
    "table": {
      "cols": [
        "Continuous",
        "Simple"
      ],
      "rows": [
        [
          "Happening now / temporary",
          "General / permanent"
        ],
        [
          "The water IS BOILING now",
          "Water BOILS at 100°C"
        ],
        [
          "I'M STAYING with friends (temporary)",
          "My parents LIVE in London (permanent)"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The River Nile ___ into the Mediterranean. (general fact)",
        "opts": [
          "is flowing",
          "flows",
          "flowed",
          "flow"
        ],
        "ans": 1,
        "exp": "Hecho geográfico permanente → present simple: 'flows'."
      },
      {
        "q": "The river ___ very fast today — much faster than usual.",
        "opts": [
          "flows",
          "flow",
          "is flowing",
          "flowed"
        ],
        "ans": 2,
        "exp": "Situación temporal ahora mismo → presente continuo: 'is flowing'."
      },
      {
        "q": "He ___ always ___ his keys. It's so annoying!",
        "opts": [
          "is/losing",
          "does/lose",
          "always/loses",
          "has/lost"
        ],
        "ans": 0,
        "exp": "'He's always losing' = pasa demasiado a menudo (uso crítico)."
      },
      {
        "q": "My parents ___ in London. They've been there all their lives.",
        "opts": [
          "are living",
          "live",
          "lives",
          "lived"
        ],
        "ans": 1,
        "exp": "Situación permanente → present simple: 'live'."
      }
    ],
    "flashcards": [
      {
        "front": "TEMPORARY vs. PERMANENT",
        "back": "Temporary → CONTINUOUS:\n'I'm living with friends.' (for now)\n\nPermanent → SIMPLE:\n'My parents live in London.' (always)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Temporary (continuous)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "am/is/are",
            "role": "verb"
          },
          {
            "text": "verb-ing",
            "role": "object"
          }
        ]
      },
      {
        "label": "Permanent (simple)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "verb (+s)",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "TEMPORARY — continuous",
        "example": "I'm staying with friends this week.",
        "highlight": "'m staying"
      },
      "right": {
        "label": "PERMANENT — simple",
        "example": "My parents live in London.",
        "highlight": "live"
      },
      "caption": "Use the continuous for something temporary or in progress now; use the simple form for habits and permanent situations."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Do you live in Madrid?",
        "translation": "¿Vives en Madrid?"
      },
      {
        "speaker": "user",
        "text": "Yes, I live there, but I'm staying with my sister in Valencia this month while my flat is being painted.",
        "translation": "Sí, vivo allí, pero este mes me estoy quedando con mi hermana en Valencia mientras me pintan el piso."
      },
      {
        "speaker": "other",
        "text": "That makes sense. Is she always so messy? You mentioned that before.",
        "translation": "Tiene sentido. ¿Es siempre tan desordenada? Ya me lo habías comentado."
      },
      {
        "speaker": "user",
        "text": "Ha, yes — she's always leaving her clothes everywhere! But normally she lives alone, so I guess she's not used to sharing.",
        "translation": "Ja, sí — siempre deja la ropa por todas partes. Pero normalmente vive sola, así que supongo que no está acostumbrada a compartir."
      },
      {
        "speaker": "other",
        "text": "Well, my parents live in the same house they've had for thirty years — completely different lifestyle!",
        "translation": "Bueno, mis padres viven en la misma casa que tienen desde hace treinta años — un estilo de vida totalmente distinto."
      },
      {
        "speaker": "user",
        "text": "Exactly — some things never change, and some things are just temporary.",
        "translation": "Exacto — hay cosas que nunca cambian, y otras que son solo temporales."
      }
    ],
    "tips": [
      "'Always' + presente continuo (she's always losing her keys) no significa 'siempre' literalmente, sino que algo pasa demasiado a menudo y te molesta.",
      "Antes de traducir desde el español, pregúntate: ¿es algo temporal (continuo) o permanente/habitual (simple)? Esa es la clave para elegir el tiempo correcto."
    ],
    "dailyWords": [
      {
        "w": "temporary",
        "ipa": "/ˈtemprəri/",
        "aprox": "témprari",
        "def": "temporal, provisional",
        "ex": "It's just a temporary solution."
      },
      {
        "w": "for now",
        "ipa": "/fɔːr naʊ/",
        "aprox": "for náu",
        "def": "por ahora, de momento",
        "ex": "I'm staying here for now."
      }
    ]
  },
  "14": {
    "title": "Continuous and Simple 2 (stative verbs)",
    "topic": "Present & Past",
    "level": "A2",
    "explain": [
      {
        "head": "Verbos de estado",
        "body": "Describen estados mentales, sentimientos o hechos (know, want, understand), no acciones que se hacen, así que no admiten la idea de \"en curso\". Van en simple aunque hables de este momento: se dice \"I want something to eat\", nunca \"I'm wanting\".",
        "note": "I want something to eat. (NOT: I'm wanting) · Do you understand? (NOT: Are you understanding?)"
      },
      {
        "head": "Think: dos sentidos",
        "body": "Cuando \"think\" significa opinar o creer, es verbo de estado y va en simple: \"What do you think of my idea?\". Cuando significa plantearse algo, es un proceso activo y va en continuo: \"I'm thinking of quitting\".",
        "note": "What do you think of my idea? (opinion) · I'm thinking of quitting. (considering now)"
      },
      {
        "head": "Verbos de percepción",
        "body": "See, hear, smell y taste describen sensaciones involuntarias y van en simple: \"Do you see that?\". Pero si describen algo deliberado o planeado, sí admiten continuo: \"I'm seeing Tom tomorrow\" es una cita, no percepción.",
        "note": "Do you see that? (perception) · I'm seeing Tom tomorrow. (arranged meeting)"
      },
      {
        "head": "Be + adjetivo: conducta",
        "body": "\"Be\" suele ser de estado, pero con adjetivo el continuo describe una conducta pasajera: \"He's being very selfish\" significa que hoy se está portando así, no es lo normal en él. \"He is selfish\" describe su carácter de siempre.",
        "note": "He's being very selfish. (behaving selfishly right now) · He is selfish. (his character)"
      }
    ],
    "table": {
      "cols": [
        "Stative (simple only)",
        "Dynamic (can be continuous)"
      ],
      "rows": [
        [
          "know, believe, understand",
          "think (= consider)"
        ],
        [
          "like, love, hate, want",
          "enjoy, feel"
        ],
        [
          "see, hear, smell, taste",
          "look at, listen to"
        ],
        [
          "belong, contain, mean",
          "have (= experience)"
        ]
      ]
    },
    "quiz": [
      {
        "q": "I'm hungry. I ___ something to eat.",
        "opts": [
          "am wanting",
          "want",
          "wants",
          "wanting"
        ],
        "ans": 1,
        "exp": "'Want' es verbo de estado → nunca continuo: 'I want'."
      },
      {
        "q": "What ___ you ___ of my plan?",
        "opts": [
          "do/think",
          "are/thinking",
          "have/thought",
          "do/thinking"
        ],
        "ans": 0,
        "exp": "'Think' = opinión → present simple: 'What do you think of…?'"
      },
      {
        "q": "I can't understand why he ___ so rude today.",
        "opts": [
          "is",
          "is being",
          "was",
          "has been"
        ],
        "ans": 1,
        "exp": "'Being' = comportándose. Hoy actúa así, no es lo normal: 'he is being rude'."
      },
      {
        "q": "___ you ___ that man over there?",
        "opts": [
          "Are/seeing",
          "Do/see",
          "Have/seen",
          "Are/see"
        ],
        "ans": 1,
        "exp": "'See' como percepción → present simple: 'Do you see that man?'"
      }
    ],
    "flashcards": [
      {
        "front": "Name 6 stative verbs (no continuous)",
        "back": "know · understand · believe · want · need · like\n(Also: love, hate, prefer, remember, belong, contain, seem, mean)"
      },
      {
        "front": "'He is selfish' vs 'He's being selfish'",
        "back": "HE IS SELFISH = his general character\nHE'S BEING SELFISH = behaving selfishly right now (unusual for him)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Stative (simple only)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "know/want/like",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          }
        ]
      },
      {
        "label": "Be + adjective (temporary behaviour)",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "is/are being",
            "role": "verb"
          },
          {
            "text": "adjective",
            "role": "object"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "Permanent trait (simple)",
        "example": "He is selfish. He never shares.",
        "highlight": "is selfish"
      },
      "right": {
        "label": "Temporary behaviour (continuous)",
        "example": "He's being very selfish today — that's not like him.",
        "highlight": "'s being"
      },
      "caption": "'Be' is normally stative, but 'be + adjective' can take the continuous to describe temporary behaviour, not permanent character."
    },
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Why is Mark being so rude today? He's usually so nice.",
        "translation": "¿Por qué está siendo Mark tan borde hoy? Normalmente es tan majo."
      },
      {
        "speaker": "user",
        "text": "I don't know! He's being really difficult with everyone this morning.",
        "translation": "¡No lo sé! Está siendo muy difícil con todo el mundo esta mañana."
      },
      {
        "speaker": "other",
        "text": "Do you think something's wrong? What do you think happened?",
        "translation": "¿Crees que le pasa algo? ¿Qué crees que ha pasado?"
      },
      {
        "speaker": "user",
        "text": "I'm thinking it might be about his exam results — he's seeing the results this afternoon.",
        "translation": "Estoy pensando que puede ser por sus notas del examen — ve los resultados esta tarde."
      },
      {
        "speaker": "other",
        "text": "Ah, that makes sense. I understand now — he's probably just nervous.",
        "translation": "Ah, tiene sentido. Ahora lo entiendo — seguramente está nervioso."
      },
      {
        "speaker": "user",
        "text": "Yes, I think you're right. He isn't normally like this at all.",
        "translation": "Sí, creo que tienes razón. Normalmente no es nada así."
      }
    ],
    "tips": [
      "Verbos de percepción (see, hear, smell) casi nunca llevan -ing, salvo que signifiquen una acción planeada: 'I'm seeing the doctor' = tengo cita, no estoy percibiendo nada.",
      "'Think' tiene dos caras: para dar una opinión usa la forma simple ('I think it's great'); para plantearte algo usa la continua ('I'm thinking about it')."
    ],
    "dailyWords": [
      {
        "w": "behaviour",
        "ipa": "/bɪˈheɪvjər/",
        "aprox": "bijéivior",
        "def": "comportamiento",
        "ex": "His behaviour was strange yesterday."
      },
      {
        "w": "to consider",
        "ipa": "/kənˈsɪdər/",
        "aprox": "kensíder",
        "def": "considerar, plantearse",
        "ex": "I'm considering a change of job."
      }
    ]
  },
  "15": {
    "title": "Past Continuous (I was doing)",
    "topic": "Present & Past",
    "level": "A2",
    "explain": [
      {
        "head": "Forma",
        "body": "Se forma con was/were + verbo en -ing: was con I/he/she/it y were con we/you/they. Es el mismo esquema del presente continuo, pero trasladado al pasado, así que negativas y preguntas funcionan exactamente igual.",
        "note": "I was sleeping · She was working · They were playing"
      },
      {
        "head": "En curso en el pasado",
        "body": "Describe algo que ya estaba pasando en un momento concreto del pasado, a medias, sin decir cuándo empezó ni cuándo acabó. Lo activa una referencia horaria: \"At 10pm they were watching TV\". El pasado simple, en cambio, presenta la acción ya completa.",
        "note": "This time yesterday I was lying on the beach. · At 10pm they were watching TV."
      },
      {
        "head": "Acción interrumpida",
        "body": "La acción larga de fondo va en pasado continuo y la corta que la corta va en pasado simple: \"I was watching TV when the phone rang\". \"While\" y \"when\" son las palabras que suelen introducir este tipo de frase.",
        "note": "I was watching TV when the phone rang. · While I was cooking, he arrived."
      },
      {
        "head": "Dos acciones a la vez",
        "body": "Cuando dos acciones estaban en curso al mismo tiempo, ambas van en pasado continuo unidas por \"while\": \"While I was studying, my sister was listening to music\". Aquí no hay interrupción, solo simultaneidad.",
        "note": "While I was studying, my sister was listening to music."
      }
    ],
    "table": {
      "cols": [
        "Past Continuous",
        "Past Simple"
      ],
      "rows": [
        [
          "Was/were in progress",
          "Completed action"
        ],
        [
          "Longer background action",
          "Shorter interruption"
        ],
        [
          "I was cooking…",
          "…when he arrived."
        ],
        [
          "While she was working…",
          "…I fell asleep."
        ]
      ]
    },
    "quiz": [
      {
        "q": "This time last year I ___ in Paris.",
        "opts": [
          "live",
          "lived",
          "was living",
          "am living"
        ],
        "ans": 2,
        "exp": "Acción en curso en un momento concreto del pasado → 'was living'."
      },
      {
        "q": "I ___ TV when the phone ___.",
        "opts": [
          "watched/rang",
          "was watching/rang",
          "watched/was ringing",
          "was watching/was ringing"
        ],
        "ans": 1,
        "exp": "Acción interrumpida: 'was watching' (continuo) + 'rang' (interrupción)."
      },
      {
        "q": "While she ___ dinner, the doorbell ___.",
        "opts": [
          "made/rang",
          "was making/rang",
          "was making/was ringing",
          "made/was ringing"
        ],
        "ans": 1,
        "exp": "Pasado continuo + interrupción en pasado simple: 'was making / rang'."
      },
      {
        "q": "What ___ you ___ at 8 o'clock last night?",
        "opts": [
          "did/do",
          "were/doing",
          "have/done",
          "do/do"
        ],
        "ans": 1,
        "exp": "Acción en curso en un momento del pasado → 'were you doing?'"
      }
    ],
    "flashcards": [
      {
        "front": "Past Continuous vs Past Simple — key difference",
        "back": "Past Continuous = IN PROGRESS at a past time\n'At 9pm, I was reading.' (in the middle of it)\n\nPast Simple = COMPLETED action\n'I read for two hours.' (finished)"
      },
      {
        "front": "Complete: 'I ___ (sleep) when the earthquake ___ (start).'",
        "back": "I WAS SLEEPING when the earthquake STARTED.\n(continuous = in progress; simple = interruption)"
      }
    ],
    "syntaxChips": [
      {
        "label": "Action in progress",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "was/were",
            "role": "verb"
          },
          {
            "text": "verb-ing",
            "role": "object"
          }
        ]
      },
      {
        "label": "Interrupted action",
        "chips": [
          {
            "text": "while/when",
            "role": "connector"
          },
          {
            "text": "was/were + -ing",
            "role": "verb"
          },
          {
            "text": "past simple",
            "role": "verb"
          }
        ]
      }
    ],
    "contrastCard": {
      "left": {
        "label": "Past continuous — in progress",
        "example": "I was watching TV...",
        "highlight": "was watching"
      },
      "right": {
        "label": "Past simple — interruption",
        "example": "...when the phone rang.",
        "highlight": "rang"
      },
      "caption": "The longer background action takes the past continuous; the shorter action that interrupts it takes the past simple."
    },
    "readingText": {
      "title": "The Night of the Storm",
      "body": "Last night, I was cooking dinner when the lights suddenly went out. My sister was watching a film in the living room, and my parents were talking on the phone with our neighbours. While I was lighting some candles, the wind grew stronger outside. Everyone was doing something different when the storm hit, but within an hour, the electricity came back and we all sat down to eat together.",
      "translation": "Anoche estaba cocinando la cena cuando de repente se fue la luz. Mi hermana estaba viendo una película en el salón, y mis padres estaban hablando por teléfono con los vecinos. Mientras yo encendía unas velas, el viento se hizo más fuerte fuera. Cada uno estaba haciendo algo distinto cuando llegó la tormenta, pero en una hora volvió la electricidad y todos nos sentamos a cenar juntos."
    },
    "tips": [
      "Usa el pasado continuo para la acción 'de fondo' más larga, y el pasado simple para la acción corta que la interrumpe: 'I was sleeping when the alarm rang.'",
      "'While' suele introducir el pasado continuo (la acción en progreso), y 'when' suele introducir la interrupción en pasado simple."
    ],
    "dailyWords": [
      {
        "w": "suddenly",
        "ipa": "/ˈsʌdənli/",
        "aprox": "sádenli",
        "def": "de repente",
        "ex": "Suddenly, the lights went out."
      },
      {
        "w": "meanwhile",
        "ipa": "/ˈmiːnwaɪl/",
        "aprox": "míinuail",
        "def": "mientras tanto",
        "ex": "Meanwhile, my sister was watching TV."
      }
    ]
  }
};
