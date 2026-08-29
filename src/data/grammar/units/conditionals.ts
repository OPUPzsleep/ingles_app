import { Unit } from '@/types/grammar';

export const conditionalsUnits: Record<number, Unit> = {
  "38": {
    "title": "If I Do… and If I Did… (Conditionals 1 & 2)",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "1st Conditional — real/possible",
        "body": "For situations that are possible or likely. If + present simple → will + base.",
        "note": "If it rains tomorrow, we'll stay at home. · If you study hard, you will pass."
      },
      {
        "head": "2nd Conditional — unreal/imaginary NOW",
        "body": "For imaginary situations. If + past simple → would/could + base.",
        "note": "If I had a car, I would drive you. (I don't have a car) · If I were rich, I'd travel the world."
      },
      {
        "head": "Were for all persons (2nd conditional)",
        "body": "In formal/correct English, use 'were' for ALL persons in 2nd conditional.",
        "note": "If I were you… · If she were here… · If it were possible…"
      }
    ],
    "table": {
      "cols": [
        "Type",
        "If-clause",
        "Main clause"
      ],
      "rows": [
        [
          "1st (real/possible)",
          "If + present simple",
          "will / can / may + base"
        ],
        [
          "2nd (unreal/imaginary)",
          "If + past simple",
          "would / could / might + base"
        ]
      ]
    },
    "quiz": [
      {
        "q": "If I ___ a million dollars, I would travel the world.",
        "opts": [
          "have",
          "had",
          "would have",
          "will have"
        ],
        "ans": 1,
        "exp": "2nd conditional: if + past simple → 'If I had…'"
      },
      {
        "q": "If it ___ tomorrow, we'll cancel the picnic.",
        "opts": [
          "rained",
          "rains",
          "will rain",
          "rain"
        ],
        "ans": 1,
        "exp": "1st conditional: if + present simple → 'if it rains'"
      },
      {
        "q": "If I ___ you, I'd talk to her about it.",
        "opts": [
          "am",
          "was",
          "were",
          "be"
        ],
        "ans": 2,
        "exp": "2nd conditional: use 'were': 'If I were you…'"
      }
    ],
    "flashcards": [
      {
        "front": "1st vs 2nd conditional — key difference",
        "back": "1ST: real/possible → If it rains, I'll stay home.\n2ND: unreal/imaginary → If I were a bird, I would fly away. (I'm not a bird)"
      }
    ]
  },
  "39": {
    "title": "If I Knew… / I Wish I Knew…",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "I wish + past simple — present wish",
        "body": "Use 'wish + past simple' for things you want to be different NOW (but they aren't).",
        "note": "I wish I knew the answer. (I don't know) · I wish I had a car. (I don't have one)"
      },
      {
        "head": "I wish + were",
        "body": "Use 'were' (not was) in wish sentences for all persons.",
        "note": "I wish I were taller. · I wish it weren't so cold. · He wishes he were here."
      },
      {
        "head": "I wish + would — complaints",
        "body": "Use 'wish + would' to say you want something to change (usually a complaint).",
        "note": "I wish you would stop making that noise. · I wish it would stop raining."
      }
    ],
    "quiz": [
      {
        "q": "I wish I ___ the answer, but I don't.",
        "opts": [
          "know",
          "knew",
          "would know",
          "had known"
        ],
        "ans": 1,
        "exp": "Present wish (I don't know) → wish + past simple: 'I wish I knew'."
      },
      {
        "q": "She wishes she ___ taller.",
        "opts": [
          "is",
          "was",
          "were",
          "would be"
        ],
        "ans": 2,
        "exp": "Wish about present situation → wish + were: 'She wishes she were taller.'"
      },
      {
        "q": "I wish you ___ stop talking so loudly!",
        "opts": [
          "will",
          "would",
          "could",
          "should"
        ],
        "ans": 1,
        "exp": "Complaint about behaviour → wish + would: 'I wish you would stop.'"
      }
    ],
    "flashcards": [
      {
        "front": "WISH + past simple vs WISH + would",
        "back": "WISH + past simple = wish things were different NOW:\n'I wish I knew her name.' (I don't know)\n\nWISH + would = complaint about behaviour:\n'I wish you would stop shouting!' (you keep shouting and I hate it)"
      }
    ]
  },
  "40": {
    "title": "If I Had Known… / I Wish I Had Known…",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "3rd Conditional — imaginary past",
        "body": "For situations in the PAST that didn't happen. If + past perfect → would/could/might + have + pp.",
        "note": "If I had known about the party, I would have come. · If she had studied harder, she would have passed."
      },
      {
        "head": "I wish + past perfect — past regret",
        "body": "For regrets — things you wish had been different in the past.",
        "note": "I wish I had studied harder. (I didn't — I regret it) · I wish I hadn't said that."
      }
    ],
    "quiz": [
      {
        "q": "If I ___ about the party, I would have come.",
        "opts": [
          "knew",
          "had known",
          "know",
          "would know"
        ],
        "ans": 1,
        "exp": "3rd conditional: if + past perfect → 'If I had known'."
      },
      {
        "q": "If she had studied harder, she ___ the exam.",
        "opts": [
          "would pass",
          "will pass",
          "would have passed",
          "had passed"
        ],
        "ans": 2,
        "exp": "3rd conditional result → would + have + pp: 'would have passed'."
      },
      {
        "q": "I wish I ___ so rude to her yesterday.",
        "opts": [
          "wasn't",
          "haven't been",
          "hadn't been",
          "didn't be"
        ],
        "ans": 2,
        "exp": "Past regret → wish + past perfect: 'I wish I hadn't been rude.'"
      }
    ],
    "flashcards": [
      {
        "front": "3rd Conditional — structure",
        "back": "IF + had + past participle → WOULD HAVE + past participle\n\nIf I had left earlier, I would have caught the train.\n(I didn't leave early → I missed the train)\n\nFor IMAGINARY PAST situations."
      }
    ]
  },
  "41": {
    "title": "Wish",
    "topic": "Conditionals",
    "explain": [
      {
        "head": "Wish — summary of uses",
        "body": "Wish + past simple (present wish) · Wish + would (complaint) · Wish + past perfect (past regret)",
        "note": "I wish I were richer. (now) · I wish you would listen. (complaint) · I wish I had gone. (past regret)"
      },
      {
        "head": "If only — stronger wish/regret",
        "body": "'If only' is like 'I wish' but more emphatic.",
        "note": "If only I had more money! · If only I hadn't said that! · If only I could fly!"
      }
    ],
    "quiz": [
      {
        "q": "___ I had more time! I'm always so busy.",
        "opts": [
          "I wish",
          "If only",
          "Should",
          "Would"
        ],
        "ans": 1,
        "exp": "'If only' = strong wish/regret: 'If only I had more time!'"
      },
      {
        "q": "I wish I ___ that — it was a huge mistake.",
        "opts": [
          "didn't say",
          "hadn't said",
          "wouldn't say",
          "haven't said"
        ],
        "ans": 1,
        "exp": "Past regret → wish + past perfect: 'I wish I hadn't said that.'"
      }
    ],
    "flashcards": [
      {
        "front": "IF ONLY vs I WISH",
        "back": "Both express wishes and regrets, but IF ONLY is more emphatic:\n\nI wish I were taller.\n= If only I were taller! (stronger)\n\nI wish I hadn't said that.\n= If only I hadn't said that! (stronger)"
      }
    ]
  }
};
