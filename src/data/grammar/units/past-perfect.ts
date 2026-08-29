import { Unit } from '@/types/grammar';

export const pastPerfectUnits: Record<number, Unit> = {
  "15": {
    "title": "Past Perfect (I had done)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "had + past participle (same for all persons)",
        "note": "I had finished · She had gone · They had eaten · We hadn't started · Had you met?"
      },
      {
        "head": "The earlier of two past actions",
        "body": "Use past perfect for the action that happened FIRST, before another past action.",
        "note": "When I arrived at the party, Tom had already gone home. (1st: Tom left. 2nd: I arrived.)"
      },
      {
        "head": "With: because / after / by the time / before",
        "body": "Common with these conjunctions to show sequence.",
        "note": "She was tired because she hadn't slept well. · By the time I got there, the film had started."
      }
    ],
    "table": {
      "cols": [
        "Earlier action (Past Perfect)",
        "Later action (Past Simple)"
      ],
      "rows": [
        [
          "Tom HAD GONE home",
          "when I ARRIVED."
        ],
        [
          "By the time we GOT there",
          "the film HAD STARTED."
        ],
        [
          "She WAS tired",
          "because she HADN'T SLEPT."
        ]
      ]
    },
    "quiz": [
      {
        "q": "When I arrived, Tom ___ already ___.",
        "opts": [
          "has/left",
          "had/left",
          "did/leave",
          "was/leaving"
        ],
        "ans": 1,
        "exp": "Action before another past action → past perfect: 'had already left'."
      },
      {
        "q": "She was tired because she ___ well the night before.",
        "opts": [
          "didn't sleep",
          "hadn't slept",
          "hasn't slept",
          "wasn't sleeping"
        ],
        "ans": 1,
        "exp": "Reason for past situation → past perfect: 'hadn't slept'."
      },
      {
        "q": "By the time we got to the cinema, the film ___.",
        "opts": [
          "already started",
          "had already started",
          "has already started",
          "was already starting"
        ],
        "ans": 1,
        "exp": "'By the time' + past → past perfect: 'had already started'."
      }
    ],
    "flashcards": [
      {
        "front": "When do you use the past perfect?",
        "back": "For the EARLIER of two past actions:\nWhen she arrived, we had already eaten.\n(1st: we ate → past perfect)\n(2nd: she arrived → past simple)"
      },
      {
        "front": "Complete: 'By the time I got to the station, the train ___.'",
        "back": "By the time I got to the station, the train HAD ALREADY LEFT.\n(past perfect = the earlier action)"
      }
    ]
  },
  "16": {
    "title": "Past Perfect Continuous (I had been doing)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "had been + verb-ing",
        "note": "I had been waiting · She had been working · They had been studying"
      },
      {
        "head": "Activity before a past moment",
        "body": "For an activity in progress before a past moment (often explains a past state).",
        "note": "I was tired because I had been working all day. · When he arrived, we had been waiting for two hours."
      }
    ],
    "quiz": [
      {
        "q": "I was exhausted because I ___ for 12 hours.",
        "opts": [
          "worked",
          "had worked",
          "had been working",
          "was working"
        ],
        "ans": 2,
        "exp": "Activity explaining past state → 'had been working'."
      },
      {
        "q": "She ___ for ten minutes when the bus finally arrived.",
        "opts": [
          "waited",
          "had waited",
          "had been waiting",
          "was waiting"
        ],
        "ans": 2,
        "exp": "Activity in progress before a past moment → 'had been waiting'."
      }
    ],
    "flashcards": [
      {
        "front": "Past Perfect vs Past Perfect Continuous",
        "back": "SIMPLE: She had written 3 emails. (completed, result)\nCONTINUOUS: She had been writing emails. (activity, duration)\n\nBoth: activity/state before another past moment"
      }
    ]
  },
  "17": {
    "title": "Have and Have Got",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Have and have got — same meaning",
        "body": "'Have' and 'have got' mean the same for possession. 'Have got' is more informal/British.",
        "note": "I have a car. = I've got a car. · Do you have any brothers? = Have you got any brothers?"
      },
      {
        "head": "Questions and negatives",
        "body": "Have: Do you have...? / I don't have... | Have got: Have you got...? / I haven't got...",
        "note": "Do you have a pen? / Have you got a pen? (both correct)"
      },
      {
        "head": "Past tense — only 'had'",
        "body": "For past tense, only use 'had' (not 'had got' in standard English).",
        "note": "I had a dog when I was young. (NOT: I had got a dog)"
      }
    ],
    "quiz": [
      {
        "q": "___ you got the time?",
        "opts": [
          "Do",
          "Have",
          "Did",
          "Are"
        ],
        "ans": 1,
        "exp": "'Have you got…?' = informal British English for possession."
      },
      {
        "q": "I ___ a headache yesterday, so I went to bed early.",
        "opts": [
          "have",
          "have got",
          "had",
          "had got"
        ],
        "ans": 2,
        "exp": "Past tense possession → 'had'. ('Had got' not standard in past)"
      },
      {
        "q": "She ___ three brothers and two sisters.",
        "opts": [
          "is having",
          "have",
          "has got",
          "is got"
        ],
        "ans": 2,
        "exp": "Possession → 'has got' = 'She has got three brothers'. (Or: She has three brothers.)"
      }
    ],
    "flashcards": [
      {
        "front": "Have vs Have Got",
        "back": "SAME MEANING (possession):\nI have a car. = I've got a car.\n\nPast: only HAVE (had):\nI had a car when I was young. ✅\nI had got a car when I was young. ❌"
      }
    ]
  },
  "18": {
    "title": "Used to (do)",
    "topic": "Past Perfect",
    "explain": [
      {
        "head": "Used to — past habit or state",
        "body": "Use 'used to + infinitive' for something that happened regularly in the past but doesn't happen now.",
        "note": "I used to play tennis a lot, but I don't play now. · She used to live in London."
      },
      {
        "head": "Question and negative",
        "body": "Did you use to...? / I didn't use to... (no -d in negative/question)",
        "note": "Did you use to smoke? · I didn't use to like vegetables, but I do now."
      },
      {
        "head": "Used to vs Past Simple",
        "body": "'Used to' emphasises that something was a habit. Past simple can also express habits.",
        "note": "I used to walk to school. = I walked to school every day. (both correct for habits)"
      }
    ],
    "quiz": [
      {
        "q": "I ___ smoke but I gave it up two years ago.",
        "opts": [
          "use to",
          "used to",
          "was used to",
          "am used to"
        ],
        "ans": 1,
        "exp": "Past habit no longer happening → 'used to smoke'."
      },
      {
        "q": "___ you use to play football when you were young?",
        "opts": [
          "Were",
          "Did",
          "Have",
          "Do"
        ],
        "ans": 1,
        "exp": "'Did you use to…?' (no -d in 'use' in questions)"
      },
      {
        "q": "She ___ have long hair but she cut it short.",
        "opts": [
          "used to",
          "use to",
          "is used to",
          "was used to"
        ],
        "ans": 0,
        "exp": "Past state that changed → 'used to have'."
      }
    ],
    "flashcards": [
      {
        "front": "USED TO do vs AM/GET USED TO doing",
        "back": "USED TO + infinitive = past habit (no longer):\n'I used to smoke.' (I don't smoke now)\n\nAM USED TO + -ing = am accustomed to:\n'I'm used to getting up early.' (it feels normal to me)"
      }
    ]
  }
};
