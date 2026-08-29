import { Unit } from '@/types/grammar';

export const presentPerfectUnits: Record<number, Unit> = {
  "7": {
    "title": "Present Perfect 1 (I have done)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "have/has + past participle",
        "note": "I have worked → I've worked · She has gone → She's gone"
      },
      {
        "head": "Result connected to NOW",
        "body": "Use present perfect when a past action has a present result or connection.",
        "note": "I've lost my key. (= I don't have it NOW) · He's gone to Paris. (= he's there NOW)"
      },
      {
        "head": "Life experience (ever/never)",
        "body": "For experiences up to now — no specific time mentioned.",
        "note": "Have you ever eaten sushi? · I've never been to Canada."
      },
      {
        "head": "Recent news — just/recently/already/yet",
        "body": "For announcing recent information.",
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
    ]
  },
  "8": {
    "title": "Present Perfect 2 (just/already/yet/ever/never)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "JUST — very recently",
        "body": "Use 'just' for something that happened a very short time ago.",
        "note": "I've just spoken to Tom. · She's just left — you've missed her!"
      },
      {
        "head": "ALREADY — sooner than expected",
        "body": "Use 'already' in positive sentences (before expected).",
        "note": "'Would you like some food?' 'No thanks, I've already eaten.'"
      },
      {
        "head": "YET — by now (negatives and questions)",
        "body": "Use 'yet' to ask if something has happened, or to say it hasn't.",
        "note": "Have you done it yet? · I haven't spoken to her yet."
      },
      {
        "head": "EVER / NEVER — life experience",
        "body": "Ever = at any time in your life | Never = at no time",
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
    ]
  },
  "9": {
    "title": "Present Perfect Continuous (I have been doing)",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Form",
        "body": "have/has + been + verb-ing",
        "note": "I have been working · She has been waiting · They've been studying"
      },
      {
        "head": "Action in progress until now",
        "body": "For an activity that started in the past and is still continuing (or just stopped).",
        "note": "I've been waiting for an hour. (I'm still waiting) · I'm tired — I've been running."
      },
      {
        "head": "Why/how long",
        "body": "Use it to explain a present situation or say how long something has been happening.",
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
    ]
  },
  "10": {
    "title": "Present Perfect Continuous and Simple",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Continuous — activity/duration",
        "body": "Emphasizes the activity itself and how long it has been going on.",
        "note": "My hands are dirty. I've been repairing my bike. · She's been studying for 3 hours."
      },
      {
        "head": "Simple — result/completion",
        "body": "Emphasizes the result, completion, or how much/many.",
        "note": "I've repaired my bike. (it's ready now) · She's studied 3 chapters. (completed)"
      },
      {
        "head": "Verbs not used in continuous",
        "body": "Some verbs (stative) only use simple: know, want, like, need, be, have (possession).",
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
    ]
  },
  "11": {
    "title": "How long have you (been)…?",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "How long… for ongoing situations",
        "body": "Use present perfect (simple or continuous) with 'how long', 'for', and 'since' for situations that started in the past and continue now.",
        "note": "How long have you known her? · I've known her for five years. · I've lived here since 2018."
      },
      {
        "head": "FOR vs SINCE",
        "body": "FOR + period of time | SINCE + point in time",
        "note": "I've been waiting for two hours. · I've been waiting since 6 o'clock."
      },
      {
        "head": "How long with past simple — finished",
        "body": "Use past simple + 'for' when the situation is finished.",
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
    ]
  },
  "12": {
    "title": "For and Since / When…? and How long…?",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "FOR — duration",
        "body": "Use 'for' + a period of time with any tense.",
        "note": "I lived there for 3 years. (past) · I've worked here for 6 months. (present perfect) · She will be away for a week. (future)"
      },
      {
        "head": "SINCE — starting point",
        "body": "Use 'since' + the point when something started (present perfect tense).",
        "note": "I've been here since Monday. · She's worked here since she was 20."
      },
      {
        "head": "When vs How long",
        "body": "'When did it start?' → past simple | 'How long has it been going on?' → present perfect",
        "note": "When did you start learning English? (past simple) · How long have you been learning English? (present perfect)"
      },
      {
        "head": "Truco: SINCE = semilla, FOR = flecha",
        "body": "SINCE es como una semilla: marca el punto exacto donde se plantó/empezó la acción (desde). FOR es como una flecha: representa la duración completa recorrida (por/durante).",
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
    ]
  },
  "13": {
    "title": "Present Perfect and Past Simple 1",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "Past Simple — specific past time",
        "body": "Use past simple when you say or imply WHEN something happened.",
        "note": "I lost my key yesterday. · She called me an hour ago. · Did you see him last night?"
      },
      {
        "head": "Present Perfect — no specific time / NOW",
        "body": "Use present perfect when the connection is to the present, or no specific time.",
        "note": "I've lost my key. (I don't have it now) · Have you seen him? (at any time)"
      },
      {
        "head": "Just / already / yet → present perfect",
        "body": "'Just', 'already', and 'yet' go with present perfect (not past simple in British English).",
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
    ]
  },
  "14": {
    "title": "Present Perfect and Past Simple 2",
    "topic": "Present Perfect",
    "explain": [
      {
        "head": "News → present perfect; details → past simple",
        "body": "Use present perfect to announce news, then past simple for the details.",
        "note": "There's been an accident. A car hit a tree. Two people were injured. (first = pp, details = ps)"
      },
      {
        "head": "Gone vs been",
        "body": "'He has gone to…' = he's there now. 'He has been to…' = he visited (came back).",
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
    ]
  }
};
