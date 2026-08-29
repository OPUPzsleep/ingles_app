import { Unit } from '@/types/grammar';

export const presentAndPastUnits: Record<number, Unit> = {
  "1": {
    "title": "Present Continuous (I am doing)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "am/is/are + verb-ing",
        "note": "I am working · She is eating · They are playing"
      },
      {
        "head": "Action happening NOW",
        "body": "Use present continuous for something happening at the moment of speaking.",
        "note": "Please be quiet! I'm trying to work. · 'Where's Tom?' 'He's having a shower.'"
      },
      {
        "head": "Temporary / around now",
        "body": "Also for situations in progress this period, not necessarily this exact second.",
        "note": "I'm reading a great book at the moment. (not reading right now, but in the middle of it)"
      },
      {
        "head": "Changes in progress",
        "body": "Use with: getting, becoming, increasing, rising, falling, growing…",
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
    ]
  },
  "2": {
    "title": "Present Simple (I do)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "I/we/you/they → base verb | He/she/it → verb +s/es",
        "note": "I work · She works · They go · He does"
      },
      {
        "head": "General facts and truths",
        "body": "For things that are always true.",
        "note": "Water boils at 100°C. · The earth goes round the sun."
      },
      {
        "head": "Habits and routines",
        "body": "For repeated actions with: always, usually, often, sometimes, never.",
        "note": "I usually get up at 7. · She never drinks coffee."
      },
      {
        "head": "Performative verbs",
        "body": "When saying it = doing it: promise, suggest, apologise, agree…",
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
    ]
  },
  "3": {
    "title": "Continuous and Simple 1",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Continuous = NOW or temporary",
        "body": "Use continuous for actions in progress or temporary situations.",
        "note": "The water is boiling. · I'm staying with friends for a few weeks."
      },
      {
        "head": "Simple = general or permanent",
        "body": "Use simple for habits, facts, permanent situations.",
        "note": "Water boils at 100°C. · My parents live in London."
      },
      {
        "head": "'I always do' vs 'I'm always doing'",
        "body": "'Always + simple' = neutral habit | 'Always + continuous' = too often (annoyed)",
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
    ]
  },
  "4": {
    "title": "Continuous and Simple 2 (stative verbs)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Stative verbs — NOT normally continuous",
        "body": "Some verbs describe states, not actions, and are rarely used in continuous form.",
        "note": "I want something to eat. (NOT: I'm wanting) · Do you understand? (NOT: Are you understanding?)"
      },
      {
        "head": "THINK — two meanings",
        "body": "'think' = believe/opinion → simple | 'think' = consider right now → continuous",
        "note": "What do you think of my idea? (opinion) · I'm thinking of quitting. (considering now)"
      },
      {
        "head": "SEE / HEAR / SMELL / TASTE",
        "body": "As perception verbs → normally simple. As deliberate actions → continuous OK.",
        "note": "Do you see that? (perception) · I'm seeing Tom tomorrow. (arranged meeting)"
      },
      {
        "head": "BE + adjective = continuous for behaviour",
        "body": "'He is being...' = behaving that way now (not his general character)",
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
    ]
  },
  "5": {
    "title": "Past Simple (I did)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Regular verbs — add -ed",
        "body": "work→worked · invite→invited · stop→stopped · study→studied · play→played"
      },
      {
        "head": "Irregular verbs — memorize",
        "body": "go→went · see→saw · write→wrote · have→had · buy→bought · come→came · take→took · give→gave"
      },
      {
        "head": "Questions and negatives — use DID",
        "body": "Use did/didn't + base verb (NOT the -ed form!).",
        "note": "Did you enjoy it? · I didn't go out. · What did you do? (NOT: Did you enjoyed? ❌)"
      },
      {
        "head": "Was / Were",
        "body": "Past of 'be': I/he/she/it → was | We/you/they → were",
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
    ]
  },
  "6": {
    "title": "Past Continuous (I was doing)",
    "topic": "Present & Past",
    "explain": [
      {
        "head": "Form",
        "body": "was/were + verb-ing",
        "note": "I was sleeping · She was working · They were playing"
      },
      {
        "head": "Action in progress at a past time",
        "body": "For an action that was ongoing at a specific moment in the past.",
        "note": "This time yesterday I was lying on the beach. · At 10pm they were watching TV."
      },
      {
        "head": "Interrupted action (while/when)",
        "body": "Past continuous (longer) + past simple (shorter interruption).",
        "note": "I was watching TV when the phone rang. · While I was cooking, he arrived."
      },
      {
        "head": "Two simultaneous past actions",
        "body": "Use past continuous for two ongoing actions at the same time.",
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
    ]
  }
};
