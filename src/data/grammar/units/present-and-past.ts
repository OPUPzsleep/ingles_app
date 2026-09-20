import { Unit } from '@/types/grammar';

export const presentAndPastUnits: Record<number, Unit> = {
  "1": {
    "title": "Present Continuous (I am doing)",
    "topic": "Present & Past",
    "level": "A1",
    "explain": [
      {
        "head": "Forma",
        "body": "Se forma con am/is/are + verbo terminado en -ing. El auxiliar depende del sujeto (I → am; he/she/it → is; we/you/they → are) y el -ing no cambia nunca. Con ese mismo auxiliar se construyen las negativas (+ not) y las preguntas.",
        "note": "I am working · She is eating · They are playing"
      },
      {
        "head": "Acción ahora mismo",
        "body": "Describe algo que ocurre justo en el momento de hablar: empezó hace poco y todavía no termina. Es nuestro \"estoy haciendo\". A diferencia del present simple, no habla de lo que siempre es cierto, sino de lo que pasa en este instante.",
        "note": "Please be quiet! I'm trying to work. · 'Where's Tom?' 'He's having a shower.'"
      },
      {
        "head": "Situación temporal",
        "body": "También vale para algo en curso \"en estos días\", aunque no lo estés haciendo en este segundo. Puedes decir que estás leyendo un libro aunque ahora no lo tengas en la mano: lo tienes a medias. Lo temporal va en continuo; lo permanente, en present simple.",
        "note": "I'm reading a great book at the moment. (not reading right now, but in the middle of it)"
      },
      {
        "head": "Cambios en marcha",
        "body": "Con verbos de cambio gradual (get, become, increase, rise, fall, grow) el continuo indica un proceso que avanza ahora, no un dato fijo. \"The population is increasing\" presenta una tendencia en marcha, no una verdad permanente.",
        "note": "The population is increasing fast. · Is your English getting better?"
      }
    ],
    "table": {
      "cols": [
        "Subject",
        "Form",
        "Example"
      ],
      "rows": [
        [
          "I",
          "am (I'm) + -ing",
          "I'm working"
        ],
        [
          "He/She/It",
          "is (He's) + -ing",
          "She's eating"
        ],
        [
          "We/You/They",
          "are (They're) + -ing",
          "They're playing"
        ]
      ]
    },
    "quiz": [
      {
        "q": "Please be quiet. I ___ to concentrate.",
        "opts": [
          "try",
          "am trying",
          "tries",
          "trying"
        ],
        "ans": 1,
        "exp": "Acción justo AHORA → presente continuo: 'am trying'."
      },
      {
        "q": "Look! It ___ outside.",
        "opts": [
          "rains",
          "is raining",
          "rained",
          "rain"
        ],
        "ans": 1,
        "exp": "Ocurre en el momento de hablar → 'is raining'."
      },
      {
        "q": "Kate wants to work in Italy, so she ___ Italian.",
        "opts": [
          "learns",
          "learn",
          "is learning",
          "learned"
        ],
        "ans": 2,
        "exp": "En marcha en esta época → 'is learning'."
      },
      {
        "q": "The population ___ very fast.",
        "opts": [
          "grows",
          "grow",
          "is growing",
          "grew"
        ],
        "ans": 2,
        "exp": "Cambio en marcha → 'is growing'."
      }
    ],
    "flashcards": [
      {
        "front": "When do you use present continuous?",
        "back": "✅ Action happening NOW\n✅ Temporary situations around now\n✅ Changes in progress (getting, growing…)\n❌ NOT with stative verbs: know, want, like"
      },
      {
        "front": "Stative verbs (NEVER continuous)",
        "back": "know · want · like · love · hate · need · believe · understand · remember · belong · contain · seem · mean · prefer"
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
        "label": "Question",
        "chips": [
          {
            "text": "Am/Is/Are",
            "role": "verb"
          },
          {
            "text": "subject",
            "role": "subject"
          },
          {
            "text": "verb-ing",
            "role": "object"
          }
        ]
      }
    ],
    "simulatedChat": [
      {
        "speaker": "other",
        "text": "Hi! What are you doing right now?",
        "translation": "¡Hola! ¿Qué estás haciendo ahora mismo?"
      },
      {
        "speaker": "user",
        "text": "I'm cooking dinner, actually. Can I call you back?",
        "translation": "Estoy cocinando la cena, la verdad. ¿Te puedo llamar luego?"
      },
      {
        "speaker": "other",
        "text": "Sure. Are you still staying at your parents' house this week?",
        "translation": "Claro. ¿Sigues quedándote en casa de tus padres esta semana?"
      },
      {
        "speaker": "user",
        "text": "Yes, I'm staying there until Friday — my kitchen is being renovated.",
        "translation": "Sí, me quedo allí hasta el viernes — me están reformando la cocina."
      },
      {
        "speaker": "other",
        "text": "Oh right, is it getting better?",
        "translation": "Ah, cierto, ¿está mejorando?"
      },
      {
        "speaker": "user",
        "text": "Yes, it's improving a lot. It's almost finished.",
        "translation": "Sí, está mejorando mucho. Ya casi está terminada."
      }
    ],
    "tips": [
      "En español decimos 'estoy trabajando' sin pensar en un verbo auxiliar aparte, pero en inglés SIEMPRE necesitas am/is/are antes del verbo + -ing: 'I am working', nunca solo 'working'.",
      "Contrae 'is' y 'are' al hablar para sonar natural: 'she's eating', 'they're playing' — la forma completa suena muy formal."
    ],
    "dailyWords": [
      {
        "w": "currently",
        "ipa": "/ˈkʌrəntli/",
        "aprox": "kárentli",
        "def": "actualmente, en este momento",
        "ex": "I'm currently working on a new project."
      },
      {
        "w": "at the moment",
        "ipa": "/ət ðə ˈməʊmənt/",
        "aprox": "at de móument",
        "def": "en este momento, ahora mismo",
        "ex": "She's busy at the moment."
      }
    ]
  },
  "2": {
    "title": "Present Simple (I do)",
    "topic": "Present & Past",
    "level": "A1",
    "explain": [
      {
        "head": "Forma",
        "body": "Se usa el verbo en su forma base con I/you/we/they, y se añade -s o -es con he/she/it. Esa -s es el despiste más típico, porque ningún otro sujeto la lleva. En negativas y preguntas entra do/does y el verbo vuelve a la base: \"she doesn't work\".",
        "note": "I work · She works · They go · He does"
      },
      {
        "head": "Hechos generales",
        "body": "Para lo que es siempre verdad: hechos científicos, estados permanentes, verdades generales. Como no cambian de un día para otro, no hay nada \"en curso\" y el continuo sonaría raro. \"Water boils at 100°C\" describe una propiedad fija, no algo que pasa ahora.",
        "note": "Water boils at 100°C. · The earth goes round the sun."
      },
      {
        "head": "Hábitos y rutinas",
        "body": "Para acciones que se repiten con regularidad, aunque no ocurran en este momento. Lo acompañan always, usually, often, sometimes y never. \"I usually get up at 7\" describe un patrón repetido; \"I am getting up\" sería una sola vez, ahora.",
        "note": "I usually get up at 7. · She never drinks coffee."
      },
      {
        "head": "Verbos performativos",
        "body": "Verbos como promise, suggest, apologise o agree cumplen la acción al pronunciarlos, así que van en simple. Al decir \"I promise\" ya estás prometiendo: no hay proceso en curso que marcar con -ing. Por eso nunca se dice \"I am promising\".",
        "note": "I promise I won't be late. · I suggest you try again."
      }
    ],
    "table": {
      "cols": [
        "Subject",
        "Positive",
        "Negative",
        "Question"
      ],
      "rows": [
        [
          "I/You/We/They",
          "work",
          "don't work",
          "Do you work?"
        ],
        [
          "He/She/It",
          "works",
          "doesn't work",
          "Does she work?"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The earth ___ round the sun.",
        "opts": [
          "go",
          "is going",
          "goes",
          "going"
        ],
        "ans": 2,
        "exp": "Hecho general → present simple: 'goes'."
      },
      {
        "q": "___ you usually go to the gym?",
        "opts": [
          "Are",
          "Do",
          "Does",
          "Have"
        ],
        "ans": 1,
        "exp": "Pregunta sobre un hábito con I/you → 'Do': 'Do you usually go…?'"
      },
      {
        "q": "She ___ coffee. She prefers tea.",
        "opts": [
          "doesn't drink",
          "don't drink",
          "isn't drinking",
          "not drinks"
        ],
        "ans": 0,
        "exp": "Negativa habitual con he/she → 'doesn't drink'."
      },
      {
        "q": "I ___ I won't tell anyone. Trust me.",
        "opts": [
          "promise",
          "am promising",
          "will promise",
          "promised"
        ],
        "ans": 0,
        "exp": "Verbo performativo → present simple: 'I promise'."
      }
    ],
    "flashcards": [
      {
        "front": "When do you use present simple?",
        "back": "✅ General truths and facts\n✅ Habits/routines (always, usually, never…)\n✅ Permanent situations\n✅ Performative verbs (promise, suggest…)"
      },
      {
        "front": "He/she/it rule",
        "back": "Add -S or -ES in 3rd person singular:\nwork → works · go → goes · watch → watches · study → studies\n\nNegative: DOESN'T + base verb\nQuestion: DOES + subject + base verb?"
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
            "text": "verb (+s/es)",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          }
        ]
      },
      {
        "label": "Negative / Question",
        "chips": [
          {
            "text": "Do/Does(n't)",
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
      }
    ],
    "readingText": {
      "title": "A Typical Day",
      "body": "My name is Laura and I work as a teacher in Madrid. I usually get up at half past six, and I never skip breakfast — I always drink a coffee before I leave the house. School starts at nine, so I take the bus every morning. Water boils at 100°C, as my science students learn on their first day, and the Earth goes round the sun — these are the kinds of facts I teach every week! In the evening, I don't watch much television; I prefer to read. I promise my students that if they study a little every day, they always improve.",
      "translation": "Me llamo Laura y trabajo como profesora en Madrid. Normalmente me levanto a las seis y media, y nunca me salto el desayuno — siempre me tomo un café antes de salir de casa. El colegio empieza a las nueve, así que cojo el autobús todas las mañanas. El agua hierve a 100°C, como aprenden mis alumnos de ciencias el primer día, y la Tierra gira alrededor del Sol — este es el tipo de datos que enseño cada semana. Por la noche no veo mucha televisión; prefiero leer. Les prometo a mis alumnos que si estudian un poco cada día, siempre mejoran."
    },
    "tips": [
      "No olvides la -S en la tercera persona (he/she/it): 'she works', nunca 'she work' — es el error más común de los hispanohablantes.",
      "Para preguntas y negaciones usa 'do/does' y deja el verbo principal en su forma base: 'Does she work?', nunca 'Works she?'."
    ],
    "dailyWords": [
      {
        "w": "routine",
        "ipa": "/ruːˈtiːn/",
        "aprox": "rutín",
        "def": "rutina",
        "ex": "Coffee is part of my morning routine."
      },
      {
        "w": "usually",
        "ipa": "/ˈjuːʒuəli/",
        "aprox": "iúshuali",
        "def": "normalmente, generalmente",
        "ex": "I usually walk to work."
      }
    ]
  },
  "3": {
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
  "4": {
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
  "5": {
    "title": "Past Simple (I did)",
    "topic": "Present & Past",
    "level": "A1",
    "explain": [
      {
        "head": "Verbos regulares: -ed",
        "body": "La mayoría de los verbos forma el pasado añadiendo -ed: work→worked, play→played. Hay pequeños cambios de escritura: consonante + y pasa a -ied (study→studied) y algunos verbos cortos doblan la consonante final (stop→stopped)."
      },
      {
        "head": "Verbos irregulares",
        "body": "No siguen ninguna regla: cada uno cambia a su manera (go→went, see→saw, write→wrote) y hay que memorizarlos uno a uno. Son justo los verbos más usados del inglés, así que aparecen todo el rato. No se pueden deducir de la forma base."
      },
      {
        "head": "Preguntas y negativas: did",
        "body": "Con did/didn't el verbo principal vuelve a su forma base, nunca al pasado: el pasado ya lo marca \"did\". Por eso \"Did you enjoy it?\" es correcto y \"Did you enjoyed?\" no. Sirve para todos los verbos, regulares e irregulares.",
        "note": "Did you enjoy it? · I didn't go out. · What did you do? (NOT: Did you enjoyed? ❌)"
      },
      {
        "head": "Was y were",
        "body": "El verbo \"be\" tiene su propio pasado: was con I/he/she/it y were con we/you/they. Además forma negativas y preguntas por sí solo, sin \"did\": \"It wasn't cold\", \"Were they at home?\". Al ser tan frecuente, conviene aprenderlo pronto.",
        "note": "It was cold. · Were they at home? · I wasn't hungry."
      }
    ],
    "table": {
      "cols": [
        "Type",
        "Example"
      ],
      "rows": [
        [
          "Regular +",
          "I worked / She stopped"
        ],
        [
          "Irregular +",
          "He went / They saw"
        ],
        [
          "Negative",
          "I didn't go / She didn't work"
        ],
        [
          "Question",
          "Did you enjoy it?"
        ],
        [
          "Was/Were",
          "It was hot. / Were you tired?"
        ]
      ]
    },
    "quiz": [
      {
        "q": "Mozart ___ more than 600 pieces of music.",
        "opts": [
          "writes",
          "wrote",
          "has written",
          "write"
        ],
        "ans": 1,
        "exp": "Acción pasada y terminada → past simple: 'wrote'."
      },
      {
        "q": "___ you go out last night?",
        "opts": [
          "Did",
          "Were",
          "Have",
          "Do"
        ],
        "ans": 0,
        "exp": "Pregunta en pasado simple → 'Did you go out?'"
      },
      {
        "q": "I didn't ___ anything because I had no money.",
        "opts": [
          "bought",
          "buy",
          "buying",
          "buyed"
        ],
        "ans": 1,
        "exp": "Después de 'didn't', verbo en forma BASE: 'didn't buy'."
      },
      {
        "q": "They ___ able to come because they were busy.",
        "opts": [
          "weren't",
          "didn't",
          "wasn't",
          "don't"
        ],
        "ans": 0,
        "exp": "Pasado de 'be' → 'They weren't able to come.'"
      }
    ],
    "flashcards": [
      {
        "front": "Irregular past forms: go/see/write/have/buy/come/take/give/make/get",
        "back": "went / saw / wrote / had / bought / came / took / gave / made / got"
      },
      {
        "front": "How do you form a past simple QUESTION?",
        "back": "Did + subject + BASE VERB?\nDid you see that? ✅\nDid you saw that? ❌\nWhere did they go? ✅"
      }
    ],
    "syntaxChips": [
      {
        "label": "Regular verbs",
        "chips": [
          {
            "text": "Subject",
            "role": "subject"
          },
          {
            "text": "verb + ed",
            "role": "verb"
          },
          {
            "text": "object",
            "role": "object"
          }
        ]
      },
      {
        "label": "Question / Negative",
        "chips": [
          {
            "text": "Did/Didn't",
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
      }
    ],
    "contrastCard": {
      "left": {
        "label": "Regular verb",
        "example": "I worked late last night.",
        "highlight": "worked"
      },
      "right": {
        "label": "Irregular verb",
        "example": "I went to bed very late.",
        "highlight": "went"
      },
      "caption": "Regular verbs simply add -ed. Irregular verbs change unpredictably and must be memorized individually."
    },
    "readingText": {
      "title": "A Busy Saturday",
      "body": "Last Saturday, I woke up late and I didn't have time for breakfast. I quickly got dressed and walked to the station. I waited for ten minutes, but the train didn't arrive on time, so I called my friend Ana. She didn't answer, so I sent her a message instead. When I finally arrived at the market, I bought some fruit and I saw an old friend from school. We talked for a while and then I went home. It was a strange day, but I enjoyed it in the end.",
      "translation": "El sábado pasado me desperté tarde y no tuve tiempo para desayunar. Me vestí rápido y caminé hasta la estación. Esperé diez minutos, pero el tren no llegó a tiempo, así que llamé a mi amiga Ana. No contestó, así que le envié un mensaje. Cuando por fin llegué al mercado, compré fruta y vi a un viejo amigo del colegio. Hablamos un rato y luego me fui a casa. Fue un día raro, pero al final lo disfruté."
    },
    "tips": [
      "Los verbos irregulares no siguen ninguna regla — no hay atajo, solo memorizarlos poco a poco (go→went, see→saw...).",
      "Después de 'did/didn't', el verbo principal SIEMPRE va en infinitivo sin 'to': 'did you go?', nunca 'did you went?'."
    ],
    "dailyWords": [
      {
        "w": "to arrive",
        "ipa": "/əˈraɪv/",
        "aprox": "aráiv",
        "def": "llegar",
        "ex": "The train arrived late again."
      },
      {
        "w": "in the end",
        "ipa": "/ɪn ðə end/",
        "aprox": "in de énd",
        "def": "al final, a fin de cuentas",
        "ex": "In the end, we decided to stay home."
      }
    ]
  },
  "6": {
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
