import { Unit } from '@/types/grammar';

export const presentAndPastUnits: Record<number, Unit> = {
  "1": {
    "title": "Present Continuous (I am doing)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "The present continuous combines a form of the verb 'be' — am, is, or are — with the main verb ending in -ing. Which 'be' form you choose depends only on the subject (I → am, he/she/it → is, we/you/they → are), while the -ing ending on the main verb stays the same for everyone. This two-part structure is also what you use to build negatives (am/is/are + not + -ing) and questions (am/is/are + subject + -ing).",
        "note": "I am working · She is eating · They are playing"
      },
      {
        "head": "Action happening NOW",
        "body": "We use the present continuous to talk about an action that is happening right now, exactly at the moment we are speaking — you could point at it as it unfolds. This is the most basic use of the tense: the action started a little before now and hasn't finished yet. It contrasts with the present simple, which describes things that are generally or always true rather than something taking place this very second.",
        "note": "Please be quiet! I'm trying to work. · 'Where's Tom?' 'He's having a shower.'"
      },
      {
        "head": "Temporary / around now",
        "body": "The present continuous also covers longer, temporary situations that are in progress 'around now' — this week, this month, this period of your life — even if you are not doing the action at this exact second. For example, you can be 'reading a great book at the moment' while actually sitting somewhere doing nothing at all, because the activity is still ongoing over these days. This temporary sense is what separates it from the present simple, which is reserved for permanent habits and facts.",
        "note": "I'm reading a great book at the moment. (not reading right now, but in the middle of it)"
      },
      {
        "head": "Changes in progress",
        "body": "We also use the present continuous with verbs that describe a gradual change happening over time, such as getting, becoming, increasing, rising, falling, and growing. These verbs describe a process moving from one state to another right now, in this period, rather than a finished fact — which is why they pair naturally with the -ing form instead of the present simple. Saying 'the population is increasing' frames it as an ongoing trend, not a fixed, permanent truth.",
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
        "exp": "Action happening NOW → present continuous: 'am trying'."
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
        "exp": "Action at moment of speaking → 'is raining'."
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
        "exp": "In progress around now → 'is learning'."
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
        "exp": "Change in progress → 'is growing'."
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
      { "label": "Affirmative", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "am/is/are", "role": "verb" }, { "text": "verb-ing", "role": "object" }
      ] },
      { "label": "Question", "chips": [
        { "text": "Am/Is/Are", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "verb-ing", "role": "object" }
      ] }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Hi! What are you doing right now?", "translation": "¡Hola! ¿Qué estás haciendo ahora mismo?" },
      { "speaker": "user", "text": "I'm cooking dinner, actually. Can I call you back?", "translation": "Estoy cocinando la cena, la verdad. ¿Te puedo llamar luego?" },
      { "speaker": "other", "text": "Sure. Are you still staying at your parents' house this week?", "translation": "Claro. ¿Sigues quedándote en casa de tus padres esta semana?" },
      { "speaker": "user", "text": "Yes, I'm staying there until Friday — my kitchen is being renovated.", "translation": "Sí, me quedo allí hasta el viernes — me están reformando la cocina." },
      { "speaker": "other", "text": "Oh right, is it getting better?", "translation": "Ah, cierto, ¿está mejorando?" },
      { "speaker": "user", "text": "Yes, it's improving a lot. It's almost finished.", "translation": "Sí, está mejorando mucho. Ya casi está terminada." }
    ],
    "tips": [
      "En español decimos 'estoy trabajando' sin pensar en un verbo auxiliar aparte, pero en inglés SIEMPRE necesitas am/is/are antes del verbo + -ing: 'I am working', nunca solo 'working'.",
      "Contrae 'is' y 'are' al hablar para sonar natural: 'she's eating', 'they're playing' — la forma completa suena muy formal."
    ],
    "dailyWords": [
      { "w": "currently", "ipa": "/ˈkʌrəntli/", "def": "actualmente, en este momento", "ex": "I'm currently working on a new project." },
      { "w": "at the moment", "ipa": "/ət ðə ˈməʊmənt/", "def": "en este momento, ahora mismo", "ex": "She's busy at the moment." }
    ]
  },
  "2": {
    "title": "Present Simple (I do)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "The present simple uses the base form of the verb for I, we, you, and they, but adds an -s or -es ending when the subject is he, she, or it. This extra letter on third-person singular verbs is one of the most commonly forgotten rules for learners, since no other subject needs it. Negatives and questions are built with do/does instead of changing the main verb, which is why the -s disappears in 'she doesn't work' and 'does she work?'.",
        "note": "I work · She works · They go · He does"
      },
      {
        "head": "General facts and truths",
        "body": "The present simple is the tense we reach for when describing things that are always true, regardless of the moment we are speaking — scientific facts, permanent states, general truths about the world. Because these facts don't change from one day to the next, there's no sense of 'in progress' about them, which is exactly why the continuous form would sound wrong here. Saying 'water boils at 100°C' describes a permanent property, not something happening right now in front of you.",
        "note": "Water boils at 100°C. · The earth goes round the sun."
      },
      {
        "head": "Habits and routines",
        "body": "We also use the present simple for habits and routines — actions that are repeated regularly over time, even if they are not happening at this exact moment. Adverbs of frequency like always, usually, often, sometimes, and never typically go with this tense because they describe how regularly something happens, not a single ongoing event. So 'I usually get up at 7' describes a repeated pattern, whereas 'I am getting up' would describe just one specific instance.",
        "note": "I usually get up at 7. · She never drinks coffee."
      },
      {
        "head": "Performative verbs",
        "body": "Certain verbs — like promise, suggest, apologise, and agree — describe an action that is completed simply by saying the words, so English uses the present simple with them rather than the continuous. The act of speaking IS the promise or the suggestion, not a process building up to it, so there's no 'in progress' stage to highlight with -ing. That's why we say 'I promise I won't be late' and not 'I am promising', even though the moment of speaking is technically 'now'.",
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
        "exp": "General fact → present simple: 'goes'."
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
        "exp": "Habit question with I/you → 'Do': 'Do you usually go…?'"
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
        "exp": "Negative habit with he/she → 'doesn't drink'."
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
        "exp": "Performative verb → present simple: 'I promise'."
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
      { "label": "Affirmative", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb (+s/es)", "role": "verb" }, { "text": "object", "role": "object" }
      ] },
      { "label": "Negative / Question", "chips": [
        { "text": "Do/Does(n't)", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "base verb", "role": "object" }
      ] }
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
      { "w": "routine", "ipa": "/ruːˈtiːn/", "def": "rutina", "ex": "Coffee is part of my morning routine." },
      { "w": "usually", "ipa": "/ˈjuːʒuəli/", "def": "normalmente, generalmente", "ex": "I usually walk to work." }
    ]
  },
  "3": {
    "title": "Continuous and Simple 1",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Continuous = NOW or temporary",
        "body": "Use the continuous form whenever you are describing an action that is currently in progress or a situation you consider temporary, not permanent. The idea is one of something 'mid-way' — started but not finished, or true for now but expected to change. This is why 'the water is boiling' works for what's happening on the stove right now, and 'I'm staying with friends' signals a short-term arrangement rather than where you actually live.",
        "note": "The water is boiling. · I'm staying with friends for a few weeks."
      },
      {
        "head": "Simple = general or permanent",
        "body": "Use the simple form for habits, general facts, and situations you consider permanent or long-term, with no sense of 'in progress' about them. These are things that stay true across time rather than describing what's happening at this precise moment. Compare 'water boils at 100°C' (a permanent fact about water) with 'the water is boiling' (something happening on your stove right now) — same verb, but a completely different meaning depending on the tense.",
        "note": "Water boils at 100°C. · My parents live in London."
      },
      {
        "head": "'I always do' vs 'I'm always doing'",
        "body": "'Always' with the present simple simply describes a neutral, regular habit, with no emotion attached — 'I always lock the door' just states a fact about your routine. But 'always' with the present continuous takes on a special, critical meaning: it suggests something happens more often than expected or wanted, and the speaker is mildly annoyed about it. So 'he's always losing his keys' doesn't mean it happens literally every time — it means it happens too frequently and it's frustrating.",
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
        "exp": "Permanent geographical fact → present simple: 'flows'."
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
        "exp": "Temporary situation right now → present continuous: 'is flowing'."
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
        "exp": "'He's always losing' = happens too often (critical use)."
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
        "exp": "Permanent situation → present simple: 'live'."
      }
    ],
    "flashcards": [
      {
        "front": "TEMPORARY vs. PERMANENT",
        "back": "Temporary → CONTINUOUS:\n'I'm living with friends.' (for now)\n\nPermanent → SIMPLE:\n'My parents live in London.' (always)"
      }
    ],
    "syntaxChips": [
      { "label": "Temporary (continuous)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "am/is/are", "role": "verb" }, { "text": "verb-ing", "role": "object" }
      ] },
      { "label": "Permanent (simple)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb (+s)", "role": "verb" }, { "text": "object", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "TEMPORARY — continuous", "example": "I'm staying with friends this week.", "highlight": "'m staying" },
      "right": { "label": "PERMANENT — simple", "example": "My parents live in London.", "highlight": "live" },
      "caption": "Use the continuous for something temporary or in progress now; use the simple form for habits and permanent situations."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Do you live in Madrid?", "translation": "¿Vives en Madrid?" },
      { "speaker": "user", "text": "Yes, I live there, but I'm staying with my sister in Valencia this month while my flat is being painted.", "translation": "Sí, vivo allí, pero este mes me estoy quedando con mi hermana en Valencia mientras me pintan el piso." },
      { "speaker": "other", "text": "That makes sense. Is she always so messy? You mentioned that before.", "translation": "Tiene sentido. ¿Es siempre tan desordenada? Ya me lo habías comentado." },
      { "speaker": "user", "text": "Ha, yes — she's always leaving her clothes everywhere! But normally she lives alone, so I guess she's not used to sharing.", "translation": "Ja, sí — siempre deja la ropa por todas partes. Pero normalmente vive sola, así que supongo que no está acostumbrada a compartir." },
      { "speaker": "other", "text": "Well, my parents live in the same house they've had for thirty years — completely different lifestyle!", "translation": "Bueno, mis padres viven en la misma casa que tienen desde hace treinta años — un estilo de vida totalmente distinto." },
      { "speaker": "user", "text": "Exactly — some things never change, and some things are just temporary.", "translation": "Exacto — hay cosas que nunca cambian, y otras que son solo temporales." }
    ],
    "tips": [
      "'Always' + presente continuo (she's always losing her keys) no significa 'siempre' literalmente, sino que algo pasa demasiado a menudo y te molesta.",
      "Antes de traducir desde el español, pregúntate: ¿es algo temporal (continuo) o permanente/habitual (simple)? Esa es la clave para elegir el tiempo correcto."
    ],
    "dailyWords": [
      { "w": "temporary", "ipa": "/ˈtemprəri/", "def": "temporal, provisional", "ex": "It's just a temporary solution." },
      { "w": "for now", "ipa": "/fɔːr naʊ/", "def": "por ahora, de momento", "ex": "I'm staying here for now." }
    ]
  },
  "4": {
    "title": "Continuous and Simple 2 (stative verbs)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Stative verbs — NOT normally continuous",
        "body": "Stative verbs describe a state of mind, feeling, or fact — like knowing, wanting, or understanding — rather than something you actively do, so they don't fit the idea of an action 'in progress' that the continuous form expresses. Because there's no ongoing process to highlight, these verbs almost always stay in the simple form, even when you're talking about right now. That's why we say 'I want something to eat' and 'do you understand?', never 'I'm wanting' or 'are you understanding?'.",
        "note": "I want something to eat. (NOT: I'm wanting) · Do you understand? (NOT: Are you understanding?)"
      },
      {
        "head": "THINK — two meanings",
        "body": "'Think' behaves differently depending on its meaning. When it means 'believe' or expresses an opinion, it's stative and stays in the simple form — 'what do you think of my idea?' is asking for your opinion, not describing a mental process happening live. But when 'think' means 'consider' or 'have in mind as a possibility', it describes an active, ongoing process, so the continuous is used instead — 'I'm thinking of quitting' means you are actively weighing up the idea right now.",
        "note": "What do you think of my idea? (opinion) · I'm thinking of quitting. (considering now)"
      },
      {
        "head": "SEE / HEAR / SMELL / TASTE",
        "body": "Verbs of perception like see, hear, smell, and taste are normally stative and use the simple form, because they describe an involuntary sensation rather than a deliberate action — 'do you see that?' just means the image is reaching your eyes, with no effort involved. However, when these same verbs describe a deliberate, arranged action, the continuous becomes possible: 'I'm seeing Tom tomorrow' doesn't mean your eyes are working, it means you have a meeting planned with him.",
        "note": "Do you see that? (perception) · I'm seeing Tom tomorrow. (arranged meeting)"
      },
      {
        "head": "BE + adjective = continuous for behaviour",
        "body": "'Be' is normally stative, but 'be + adjective' can take the continuous form when it describes temporary behaviour rather than a permanent character trait. 'He is being very selfish' means he is acting selfishly right now, in this specific situation — it implies the behaviour is unusual for him. Compare that with 'he is selfish', which uses the simple form to describe selfishness as a fixed part of who he is, all the time.",
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
        "exp": "'Want' is stative → never continuous: 'I want'."
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
        "exp": "'Think' = opinion → present simple: 'What do you think of…?'"
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
        "exp": "'Being' = behaving. He's acting rude right now (unusual): 'he is being rude'."
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
        "exp": "'See' as perception → present simple: 'Do you see that man?'"
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
      { "label": "Stative (simple only)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "know/want/like", "role": "verb" }, { "text": "object", "role": "object" }
      ] },
      { "label": "Be + adjective (temporary behaviour)", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "is/are being", "role": "verb" }, { "text": "adjective", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Permanent trait (simple)", "example": "He is selfish. He never shares.", "highlight": "is selfish" },
      "right": { "label": "Temporary behaviour (continuous)", "example": "He's being very selfish today — that's not like him.", "highlight": "'s being" },
      "caption": "'Be' is normally stative, but 'be + adjective' can take the continuous to describe temporary behaviour, not permanent character."
    },
    "simulatedChat": [
      { "speaker": "other", "text": "Why is Mark being so rude today? He's usually so nice.", "translation": "¿Por qué está siendo Mark tan borde hoy? Normalmente es tan majo." },
      { "speaker": "user", "text": "I don't know! He's being really difficult with everyone this morning.", "translation": "¡No lo sé! Está siendo muy difícil con todo el mundo esta mañana." },
      { "speaker": "other", "text": "Do you think something's wrong? What do you think happened?", "translation": "¿Crees que le pasa algo? ¿Qué crees que ha pasado?" },
      { "speaker": "user", "text": "I'm thinking it might be about his exam results — he's seeing the results this afternoon.", "translation": "Estoy pensando que puede ser por sus notas del examen — ve los resultados esta tarde." },
      { "speaker": "other", "text": "Ah, that makes sense. I understand now — he's probably just nervous.", "translation": "Ah, tiene sentido. Ahora lo entiendo — seguramente está nervioso." },
      { "speaker": "user", "text": "Yes, I think you're right. He isn't normally like this at all.", "translation": "Sí, creo que tienes razón. Normalmente no es nada así." }
    ],
    "tips": [
      "Verbos de percepción (see, hear, smell) casi nunca llevan -ing, salvo que signifiquen una acción planeada: 'I'm seeing the doctor' = tengo cita, no estoy percibiendo nada.",
      "'Think' tiene dos caras: para dar una opinión usa la forma simple ('I think it's great'); para plantearte algo usa la continua ('I'm thinking about it')."
    ],
    "dailyWords": [
      { "w": "behaviour", "ipa": "/bɪˈheɪvjər/", "def": "comportamiento", "ex": "His behaviour was strange yesterday." },
      { "w": "to consider", "ipa": "/kənˈsɪdər/", "def": "considerar, plantearse", "ex": "I'm considering a change of job." }
    ]
  },
  "5": {
    "title": "Past Simple (I did)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Regular verbs — add -ed",
        "body": "Most English verbs are 'regular': you form their past tense simply by adding -ed to the base verb, as in work→worked or play→played. A few spelling changes apply along the way — verbs ending in a consonant plus y change to -ied (study→studied), and some short verbs double their final consonant before adding -ed (stop→stopped). Learning this pattern lets you form the past tense of the vast majority of English verbs without memorizing anything extra."
      },
      {
        "head": "Irregular verbs — memorize",
        "body": "Irregular verbs don't follow the -ed pattern at all — instead, each one changes in its own unpredictable way, so there's no shortcut except memorizing them individually, as in go→went, see→saw, and write→wrote. These tend to be some of the most frequently used verbs in English, which is exactly why native speakers use them constantly without noticing they're irregular. There's no way to guess an irregular past form from the base verb, so building up this list through practice is an essential part of learning the past simple."
      },
      {
        "head": "Questions and negatives — use DID",
        "body": "To form negatives and questions in the past simple, English uses the auxiliary 'did' (or 'didn't') together with the base form of the main verb — never the -ed or irregular past form. The past tense is already expressed by 'did', so adding it again to the main verb would be redundant, which is why 'did you enjoyed?' is wrong and 'did you enjoy?' is correct. This rule applies to every verb, regular or irregular, once 'did' or 'didn't' appears in the sentence.",
        "note": "Did you enjoy it? · I didn't go out. · What did you do? (NOT: Did you enjoyed? ❌)"
      },
      {
        "head": "Was / Were",
        "body": "The verb 'be' has its own special past tense forms instead of following the regular -ed pattern: 'was' for I, he, she, and it, and 'were' for we, you, and they. Unlike other verbs, 'was/were' also forms its own negatives and questions directly, without needing 'did' — so you get 'it wasn't cold' and 'were they at home?' rather than a form with 'did'. Because 'be' is one of the most frequent verbs in the language, these irregular forms are worth learning early and solidly.",
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
        "exp": "Completed past action → past simple: 'wrote'."
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
        "exp": "Past simple question → 'Did you go out?'"
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
        "exp": "After 'didn't', use BASE verb: 'didn't buy'."
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
        "exp": "Past of 'be' → 'They weren't able to come.'"
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
      { "label": "Regular verbs", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "verb + ed", "role": "verb" }, { "text": "object", "role": "object" }
      ] },
      { "label": "Question / Negative", "chips": [
        { "text": "Did/Didn't", "role": "verb" }, { "text": "subject", "role": "subject" }, { "text": "base verb", "role": "object" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Regular verb", "example": "I worked late last night.", "highlight": "worked" },
      "right": { "label": "Irregular verb", "example": "I went to bed very late.", "highlight": "went" },
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
      { "w": "to arrive", "ipa": "/əˈraɪv/", "def": "llegar", "ex": "The train arrived late again." },
      { "w": "in the end", "ipa": "/ɪn ðə end/", "def": "al final, a fin de cuentas", "ex": "In the end, we decided to stay home." }
    ]
  },
  "6": {
    "title": "Past Continuous (I was doing)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "The past continuous is formed with 'was' or 'were' plus the main verb ending in -ing, following the same pattern as the present continuous but shifted into the past. Use 'was' with I, he, she, and it, and 'were' with we, you, and they. Because it's built from 'be' + -ing, negatives and questions work the same way as in the present continuous, just with 'was/were' instead of 'am/is/are'.",
        "note": "I was sleeping · She was working · They were playing"
      },
      {
        "head": "Action in progress at a past time",
        "body": "We use the past continuous to describe an action that was already in progress at a specific moment in the past — you can picture it as being in the middle of happening at that point, with no clear start or end mentioned. Naming the exact past moment, like 'this time yesterday' or 'at 10pm', is what triggers this tense, because we're describing what someone was doing at that instant, not what they did overall. This contrasts with the past simple, which presents an action as a complete, finished event.",
        "note": "This time yesterday I was lying on the beach. · At 10pm they were watching TV."
      },
      {
        "head": "Interrupted action (while/when)",
        "body": "One of the most common patterns with the past continuous is describing a longer background action that was interrupted by a shorter, completed one. The longer action in progress takes the past continuous, while the shorter action that cuts into it takes the past simple — as in 'I was watching TV when the phone rang', where watching TV is the ongoing background and the phone ringing is the sudden interruption. 'While' and 'when' are the typical signal words that introduce this kind of sentence.",
        "note": "I was watching TV when the phone rang. · While I was cooking, he arrived."
      },
      {
        "head": "Two simultaneous past actions",
        "body": "The past continuous can also describe two separate actions that were happening at the same time in the past, both in progress together rather than one interrupting the other. 'While I was studying, my sister was listening to music' shows two parallel, ongoing activities running side by side, connected by 'while'. This use highlights simultaneity rather than sequence, which is why both verbs appear in the continuous form instead of just one.",
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
        "exp": "Action in progress at a specific past time → 'was living'."
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
        "exp": "Interrupted action: 'was watching' (continuous) + 'rang' (interruption)."
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
        "exp": "Past continuous + past simple interruption: 'was making / rang'."
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
        "exp": "Action in progress at past time → 'were you doing?'"
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
      { "label": "Action in progress", "chips": [
        { "text": "Subject", "role": "subject" }, { "text": "was/were", "role": "verb" }, { "text": "verb-ing", "role": "object" }
      ] },
      { "label": "Interrupted action", "chips": [
        { "text": "while/when", "role": "connector" }, { "text": "was/were + -ing", "role": "verb" }, { "text": "past simple", "role": "verb" }
      ] }
    ],
    "contrastCard": {
      "left": { "label": "Past continuous — in progress", "example": "I was watching TV...", "highlight": "was watching" },
      "right": { "label": "Past simple — interruption", "example": "...when the phone rang.", "highlight": "rang" },
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
      { "w": "suddenly", "ipa": "/ˈsʌdənli/", "def": "de repente", "ex": "Suddenly, the lights went out." },
      { "w": "meanwhile", "ipa": "/ˈmiːnwaɪl/", "def": "mientras tanto", "ex": "Meanwhile, my sister was watching TV." }
    ]
  }
};
