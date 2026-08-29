import { Unit } from '@/types/grammar';

export const futureUnits: Record<number, Unit> = {
  "19": {
    "title": "Present Tenses for the Future",
    "topic": "Future",
    "explain": [
      {
        "head": "Present Continuous → personal arrangement",
        "body": "Use present continuous for definite future arrangements (already planned with someone).",
        "note": "I'm meeting Sarah at 6pm. · We're flying to Rome next week. · They're getting married in June."
      },
      {
        "head": "Present Simple → timetable/schedule",
        "body": "Use present simple for fixed timetables and schedules.",
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
    ]
  },
  "20": {
    "title": "I'm Going to (do)",
    "topic": "Future",
    "explain": [
      {
        "head": "Going to — intention/plan",
        "body": "For things you have already decided to do (your intention).",
        "note": "'What are you going to do tonight?' 'I'm going to watch TV.' · I'm going to look for a new job."
      },
      {
        "head": "Going to — prediction from evidence",
        "body": "For predictions based on what you can see or know right NOW.",
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
    ]
  },
  "21": {
    "title": "Will and Shall 1",
    "topic": "Future",
    "explain": [
      {
        "head": "Will — spontaneous decision",
        "body": "Use 'will' for decisions made AT THE MOMENT of speaking.",
        "note": "'It's cold in here.' 'I'll close the window.' · 'I'm thirsty.' 'I'll get you some water.'"
      },
      {
        "head": "Will — offers and promises",
        "body": "Use 'will' for offers, promises, and volunteering.",
        "note": "I'll help you with your homework. · I promise I won't be late. · 'I can't carry this.' 'I'll help.'"
      },
      {
        "head": "Shall I / Shall we — suggestions",
        "body": "Use 'shall' with I/we to offer or suggest.",
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
    ]
  },
  "22": {
    "title": "Will and Shall 2",
    "topic": "Future",
    "explain": [
      {
        "head": "Will — prediction",
        "body": "Use 'will' for predictions about the future (what you think will happen).",
        "note": "I think it will rain tomorrow. · She'll probably be late. · The economy will improve."
      },
      {
        "head": "Will — with I think / I'm sure / probably",
        "body": "Common with: I think, I don't think, I'm sure, I expect, I hope, probably.",
        "note": "I think England will win. · I'm sure you'll pass. · She probably won't come."
      },
      {
        "head": "Future with won't",
        "body": "Use 'won't' (= will not) for negative predictions or refusals.",
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
    ]
  },
  "23": {
    "title": "I Will and I'm Going to",
    "topic": "Future",
    "explain": [
      {
        "head": "Will — unplanned, spontaneous",
        "body": "Use 'will' when you decide to do something AT THE MOMENT of speaking.",
        "note": "(phone rings) 'I'll get it!' · 'I'm thirsty.' 'I'll make some tea.' (decided just now)"
      },
      {
        "head": "Going to — already decided",
        "body": "Use 'going to' when you have already made a decision BEFORE speaking.",
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
    ]
  },
  "24": {
    "title": "Will Be Doing and Will Have Done",
    "topic": "Future",
    "explain": [
      {
        "head": "Future Continuous (will be doing)",
        "body": "For an action that will be in progress at a specific future time.",
        "note": "This time tomorrow I'll be flying to Paris. · Don't call at 9 — I'll be having dinner."
      },
      {
        "head": "Future Perfect (will have done)",
        "body": "For something that will be completed BEFORE a specific future time.",
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
    ]
  },
  "25": {
    "title": "When I Do and When I've Done / If and When",
    "topic": "Future",
    "explain": [
      {
        "head": "After when/if/before/after/until → present or present perfect",
        "body": "Don't use 'will' after time conjunctions (when, before, after, until, as soon as, if).",
        "note": "I'll call you when I arrive. (NOT: when I will arrive ❌) · I'll call you when I've finished."
      },
      {
        "head": "When vs If",
        "body": "'When' = certain (it will definitely happen) | 'If' = possible/uncertain",
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
    ]
  }
};
