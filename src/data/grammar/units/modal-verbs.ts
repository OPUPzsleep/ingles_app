import { Unit } from '@/types/grammar';

export const modalVerbsUnits: Record<number, Unit> = {
  "26": {
    "title": "Can, Could and (be) Able to",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "CAN — present ability/possibility",
        "body": "For present ability or general possibility.",
        "note": "I can swim. · Can you speak French? · The weather can be cold here."
      },
      {
        "head": "COULD — past general ability",
        "body": "For something you were generally able to do in the past.",
        "note": "When I was young, I could run very fast. · She could speak three languages."
      },
      {
        "head": "WAS/WERE ABLE TO — specific past success",
        "body": "For a specific successful achievement (NOT could for specific events).",
        "note": "The fire spread, but everyone was able to escape. · I was able to find a parking space."
      },
      {
        "head": "BE ABLE TO — other tenses",
        "body": "Use 'be able to' for tenses where 'can/could' don't work.",
        "note": "I will be able to help you tomorrow. · I've never been able to understand maths."
      }
    ],
    "table": {
      "cols": [
        "Time",
        "Ability",
        "Negative"
      ],
      "rows": [
        [
          "Present",
          "can do",
          "can't do"
        ],
        [
          "Past (general)",
          "could do",
          "couldn't do"
        ],
        [
          "Past (specific success)",
          "was able to do",
          "wasn't able to do"
        ],
        [
          "Future",
          "will be able to",
          "won't be able to"
        ]
      ]
    },
    "quiz": [
      {
        "q": "The fire spread, but everyone ___ escape.",
        "opts": [
          "could",
          "was able to",
          "can",
          "managed"
        ],
        "ans": 1,
        "exp": "Specific past achievement → 'was able to escape'."
      },
      {
        "q": "When I was a child, I ___ climb trees very quickly.",
        "opts": [
          "was able to",
          "can",
          "could",
          "am able to"
        ],
        "ans": 2,
        "exp": "General past ability → 'could'."
      },
      {
        "q": "'___ you help me for a moment, please?'",
        "opts": [
          "Can",
          "Could",
          "Are able",
          "Shall"
        ],
        "ans": 1,
        "exp": "'Could you help me?' is more polite than 'Can you help me?'"
      },
      {
        "q": "I looked everywhere but I ___ find my passport.",
        "opts": [
          "couldn't",
          "can't",
          "wasn't able",
          "mustn't"
        ],
        "ans": 0,
        "exp": "Past inability → 'couldn't find'."
      }
    ],
    "flashcards": [
      {
        "front": "Could vs Was/Were Able To (past)",
        "back": "COULD = general past ability:\n'I could swim when I was five.'\n\nWAS/WERE ABLE TO = specific past success:\n'I was able to swim across the river.' ✅\n'I could swim across the river.' ❌ (specific event)"
      }
    ]
  },
  "27": {
    "title": "Could (do) and Could Have (done)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Could do — present/future possibility",
        "body": "Use 'could' for present or future possibility (= it's possible/an option).",
        "note": "I could go now if you want. · We could try a different approach."
      },
      {
        "head": "Could have done — unrealized past possibility",
        "body": "Use 'could have done' for something that was possible in the past but didn't happen.",
        "note": "You could have called me! (but you didn't) · She could have passed if she'd studied."
      },
      {
        "head": "Couldn't have done — past impossibility",
        "body": "For something that was definitely impossible in the past.",
        "note": "It couldn't have been Tom — he was abroad. · The letter couldn't have arrived already."
      }
    ],
    "quiz": [
      {
        "q": "You ___ told me earlier! I didn't know.",
        "opts": [
          "could",
          "could have",
          "should",
          "ought"
        ],
        "ans": 1,
        "exp": "Unrealized past possibility (but didn't happen) → 'could have told'."
      },
      {
        "q": "It ___ been Emma — she was at work all day.",
        "opts": [
          "couldn't have",
          "couldn't",
          "can't have",
          "can't"
        ],
        "ans": 0,
        "exp": "Past impossibility → 'couldn't have been'."
      },
      {
        "q": "I'm free this evening. We ___ go out if you want.",
        "opts": [
          "could",
          "could have",
          "should have",
          "might have"
        ],
        "ans": 0,
        "exp": "Present/future option → 'could': 'We could go out.'"
      }
    ],
    "flashcards": [
      {
        "front": "Could have done — what does it mean?",
        "back": "= It was possible but it DIDN'T HAPPEN:\n'You could have helped me!' (but you didn't)\n'She could have been a doctor.' (but she chose otherwise)\n\nNOT the same as 'was able to' which means it DID happen."
      }
    ]
  },
  "28": {
    "title": "Must and Can't (deduction)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — sure it's true",
        "body": "Use 'must' when you are sure something is true based on evidence.",
        "note": "You must be tired — you've been awake since 5am. · She must be at home — the lights are on."
      },
      {
        "head": "Can't — sure it's NOT true",
        "body": "Use 'can't' when you are sure something is impossible or false.",
        "note": "That can't be Tom — he's in Paris. · You can't be hungry! You just ate."
      },
      {
        "head": "Must have / Can't have — past deduction",
        "body": "Use must have or can't have for deductions about past events.",
        "note": "She must have left already. · They can't have arrived — the road was closed."
      }
    ],
    "quiz": [
      {
        "q": "You ___ be tired — you've been up since 5am.",
        "opts": [
          "can't",
          "must",
          "should",
          "have to"
        ],
        "ans": 1,
        "exp": "Logical deduction (I'm sure you're tired) → 'must': 'You must be tired.'"
      },
      {
        "q": "That ___ be right — it's impossible!",
        "opts": [
          "must",
          "can",
          "can't",
          "mustn't"
        ],
        "ans": 2,
        "exp": "Sure it's NOT true → 'can't': 'That can't be right.'"
      },
      {
        "q": "She ___ have left already — her bag is still here.",
        "opts": [
          "must",
          "can't",
          "should",
          "could"
        ],
        "ans": 1,
        "exp": "Past deduction (impossible she left — bag is here) → 'can't have left'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs CAN'T for deduction",
        "back": "MUST = I'm sure it's TRUE:\n'You must be tired.' (evidence: awake since 5am)\n\nCAN'T = I'm sure it's NOT TRUE:\n'That can't be right.' (it's impossible)"
      }
    ]
  },
  "29": {
    "title": "May and Might 1",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "May / Might — possibility",
        "body": "Use may or might for present or future possibility (maybe, perhaps). They are similar in meaning.",
        "note": "It may rain tomorrow. · She might be at home. · I might not come to the party."
      },
      {
        "head": "Might — slightly less certain",
        "body": "'Might' is sometimes used for slightly less certain possibilities than 'may'.",
        "note": "I may go out tonight. (quite possible) · I might go out. (a little less certain)"
      },
      {
        "head": "May I / Might I — permission (formal)",
        "body": "'May I' is used to ask permission (formal). 'Might I' is very formal.",
        "note": "May I sit here? · May I ask you something? · Might I suggest an alternative?"
      }
    ],
    "quiz": [
      {
        "q": "I'm not sure where she is. She ___ be at home.",
        "opts": [
          "must",
          "should",
          "might",
          "will"
        ],
        "ans": 2,
        "exp": "Uncertain possibility → 'might': 'She might be at home.'"
      },
      {
        "q": "Take an umbrella — it ___ rain later.",
        "opts": [
          "will",
          "must",
          "may",
          "should"
        ],
        "ans": 2,
        "exp": "Possible future event → 'may' or 'might': 'it may rain'."
      },
      {
        "q": "___ I use your phone?",
        "opts": [
          "Should",
          "Must",
          "May",
          "Will"
        ],
        "ans": 2,
        "exp": "Asking permission politely → 'May I use your phone?'"
      }
    ],
    "flashcards": [
      {
        "front": "MAY vs MIGHT — difference",
        "back": "Both express POSSIBILITY (maybe, perhaps)\nMight is sometimes slightly less certain than may.\n\n'It may rain.' = possible\n'It might rain.' = a little less certain\n\nIn practice, they are usually interchangeable."
      }
    ]
  },
  "30": {
    "title": "May and Might 2",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Might as well / May as well",
        "body": "Use 'might as well' to say there is no better alternative — let's do this since there's nothing better.",
        "note": "We might as well wait here. · You might as well tell the truth. · I may as well go home."
      },
      {
        "head": "May/might have done — past possibility",
        "body": "For something that was possibly true in the past (but we're not sure).",
        "note": "She may have forgotten about the meeting. · They might have left already."
      }
    ],
    "quiz": [
      {
        "q": "There's nothing to do. We ___ stay home.",
        "opts": [
          "should",
          "might as well",
          "could have",
          "must"
        ],
        "ans": 1,
        "exp": "No better option available → 'might as well': 'We might as well stay home.'"
      },
      {
        "q": "She's not here. She ___ have gone to the library.",
        "opts": [
          "must",
          "should",
          "might",
          "could"
        ],
        "ans": 2,
        "exp": "Uncertain past possibility → 'might have gone'."
      }
    ],
    "flashcards": [
      {
        "front": "MIGHT AS WELL",
        "back": "= there's no better option, so let's do this:\n'We might as well wait.' (there's nothing better to do)\n\nSimilar to: 'We may as well wait.' or 'Let's just wait.'"
      }
    ]
  },
  "31": {
    "title": "Have To and Must",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — speaker's obligation",
        "body": "Use 'must' for strong personal obligation or when you feel it's important.",
        "note": "I must call my mother. (I feel I should) · You must try this restaurant! (I strongly recommend)"
      },
      {
        "head": "Have to — external obligation",
        "body": "Use 'have to' for obligation from outside (rules, laws, other people's requirements).",
        "note": "I have to be at work by 9. (the rule) · She has to wear a uniform. (company rule)"
      },
      {
        "head": "Don't have to — no obligation",
        "body": "Use 'don't have to' to say it's not necessary (but you can if you want).",
        "note": "You don't have to come if you don't want to. · She doesn't have to work on Sundays."
      }
    ],
    "table": {
      "cols": [
        "Must",
        "Have to"
      ],
      "rows": [
        [
          "Speaker feels it's important",
          "External rule/obligation"
        ],
        [
          "I must call her (I think so)",
          "I have to call her (boss said so)"
        ],
        [
          "Mustn't = NOT allowed",
          "Don't have to = not necessary"
        ]
      ]
    },
    "quiz": [
      {
        "q": "All passengers ___ wear a seatbelt. It's the law.",
        "opts": [
          "must",
          "have to",
          "should",
          "need to"
        ],
        "ans": 1,
        "exp": "External law/obligation → 'have to'."
      },
      {
        "q": "You ___ see this film! It's amazing. (strong recommendation)",
        "opts": [
          "have to",
          "must",
          "need to",
          "should"
        ],
        "ans": 1,
        "exp": "Speaker's strong personal feeling → 'must': 'You must see this film!'"
      },
      {
        "q": "You ___ come to the party if you don't want to.",
        "opts": [
          "mustn't",
          "don't have to",
          "must",
          "should"
        ],
        "ans": 1,
        "exp": "Not necessary (but OK if you do) → 'don't have to'."
      }
    ],
    "flashcards": [
      {
        "front": "MUST vs HAVE TO vs DON'T HAVE TO",
        "back": "MUST = I feel it's important (personal):\n'I must lose weight.' (my own decision)\n\nHAVE TO = external obligation:\n'I have to work late.' (boss said so)\n\nDON'T HAVE TO = not necessary:\n'You don't have to wear a tie.' (optional)"
      }
    ]
  },
  "32": {
    "title": "Must / Mustn't / Needn't",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Must — obligation",
        "body": "Strong obligation or necessity.",
        "note": "You must stop at a red light. · I must remember to call her."
      },
      {
        "head": "Mustn't — prohibition",
        "body": "It is NOT allowed. Do not do it!",
        "note": "You mustn't smoke in here. · She mustn't tell anyone."
      },
      {
        "head": "Needn't / Don't need to — not necessary",
        "body": "It is NOT necessary. You don't have to but you can.",
        "note": "You needn't worry. · You don't need to bring anything."
      }
    ],
    "quiz": [
      {
        "q": "You ___ tell anyone! It's a secret.",
        "opts": [
          "needn't",
          "don't have to",
          "mustn't",
          "couldn't"
        ],
        "ans": 2,
        "exp": "Prohibition (NOT allowed) → 'mustn't': 'You mustn't tell anyone!'"
      },
      {
        "q": "You ___ hurry — we have plenty of time.",
        "opts": [
          "mustn't",
          "needn't",
          "must",
          "can't"
        ],
        "ans": 1,
        "exp": "Not necessary → 'needn't': 'You needn't hurry.' (= You don't need to hurry.)"
      }
    ],
    "flashcards": [
      {
        "front": "MUSTN'T vs NEEDN'T / DON'T HAVE TO",
        "back": "MUSTN'T = NOT ALLOWED:\n'You mustn't park here.' (it's forbidden)\n\nNEEDN'T / DON'T HAVE TO = NOT NECESSARY:\n'You needn't come.' (you can, but it's not required)"
      }
    ]
  },
  "33": {
    "title": "Should 1",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Should — advice/recommendation",
        "body": "Use 'should' to give advice or say what is the right/best thing to do.",
        "note": "You look pale. You should see a doctor. · She should study more if she wants to pass."
      },
      {
        "head": "Should — expectation",
        "body": "Use 'should' to say what you expect to happen.",
        "note": "The package should arrive tomorrow. · You should be able to find it easily."
      },
      {
        "head": "Shouldn't — advice against",
        "body": "Use 'shouldn't' to say something is not a good idea.",
        "note": "You shouldn't eat so much sugar. · We shouldn't be late."
      }
    ],
    "quiz": [
      {
        "q": "You look tired. You ___ get some rest.",
        "opts": [
          "must",
          "should",
          "shall",
          "would"
        ],
        "ans": 1,
        "exp": "Advice → 'should': 'You should get some rest.'"
      },
      {
        "q": "The film ___ be good — it has 5-star reviews.",
        "opts": [
          "should",
          "must",
          "shall",
          "would"
        ],
        "ans": 0,
        "exp": "Expectation → 'should': 'The film should be good.'"
      },
      {
        "q": "You ___ park here — it's illegal.",
        "opts": [
          "shouldn't",
          "mustn't",
          "needn't",
          "couldn't"
        ],
        "ans": 0,
        "exp": "Advice against → 'shouldn't'. (Mustn't is also possible but stronger — prohibition)"
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD vs MUST — difference",
        "back": "SHOULD = mild advice/recommendation:\n'You should eat more vegetables.' (suggestion)\n\nMUST = strong obligation:\n'You must stop at a red light.' (law)\n\nSHOULD HAVE = past regret:\n'I should have studied harder.'"
      }
    ]
  },
  "34": {
    "title": "Should 2",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Should have done — past regret",
        "body": "Use 'should have done' to say that something was the right thing but didn't happen.",
        "note": "I should have called her. (I didn't, but it was the right thing to do) · You shouldn't have said that."
      },
      {
        "head": "Should after: suggest, recommend, insist",
        "body": "Use 'should' after verbs like suggest, insist, recommend, demand.",
        "note": "I suggested that he should go. · She insisted that I should come."
      }
    ],
    "quiz": [
      {
        "q": "I ___ called you earlier. I'm sorry I didn't.",
        "opts": [
          "would",
          "should have",
          "must have",
          "could"
        ],
        "ans": 1,
        "exp": "Past regret/mistake → 'should have called': it was right but didn't happen."
      },
      {
        "q": "You ___ said that. It was very rude.",
        "opts": [
          "should",
          "shouldn't have",
          "shouldn't",
          "mustn't have"
        ],
        "ans": 1,
        "exp": "Regret about past action (it was wrong) → 'shouldn't have said'."
      }
    ],
    "flashcards": [
      {
        "front": "SHOULD HAVE done",
        "back": "= It was the right thing but DIDN'T happen:\n'I should have studied harder.' (I didn't → I failed)\n\nSHOULDN'T HAVE done:\n'I shouldn't have eaten so much.' (I did → I regret it)"
      }
    ]
  },
  "35": {
    "title": "I'd Better / It's Time…",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "I'd better do — urgent advice",
        "body": "Use 'I'd better + base verb' for urgent advice or a warning. Similar to 'should' but more urgent.",
        "note": "I'd better go now or I'll be late. · You'd better not be late or he'll be angry."
      },
      {
        "head": "It's time — overdue action",
        "body": "Use 'it's time + subject + past simple' to say something should happen now.",
        "note": "It's time you went to bed. · It's time we left. · It's time he stopped complaining."
      }
    ],
    "quiz": [
      {
        "q": "You ___ better see a doctor about that cough.",
        "opts": [
          "had",
          "have",
          "should",
          "must"
        ],
        "ans": 0,
        "exp": "'I'd better' = I had better. 'You'd better' = You had better."
      },
      {
        "q": "It's time you ___ to bed. It's midnight!",
        "opts": [
          "go",
          "went",
          "are going",
          "have gone"
        ],
        "ans": 1,
        "exp": "'It's time + subject + past simple' for overdue action: 'It's time you went'."
      }
    ],
    "flashcards": [
      {
        "front": "I'D BETTER vs IT'S TIME",
        "back": "I'D BETTER + base verb (urgent advice):\n'You'd better hurry or you'll miss the bus.'\n\nIT'S TIME + subject + past simple (overdue):\n'It's time you went to bed.' (you should have gone earlier)"
      }
    ]
  },
  "36": {
    "title": "Would",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Would — conditional",
        "body": "Use 'would' as the result in 2nd conditional sentences.",
        "note": "If I had more time, I would learn to paint. · She would call you if she had your number."
      },
      {
        "head": "Would — polite requests",
        "body": "Use 'would' in polite requests (more formal than 'will').",
        "note": "Would you help me please? · Would you mind waiting?"
      },
      {
        "head": "Would — past habits",
        "body": "Use 'would + base verb' for past repeated actions (similar to 'used to').",
        "note": "When I was a child, I would go fishing with my father every weekend."
      }
    ],
    "quiz": [
      {
        "q": "If I were rich, I ___ travel the world.",
        "opts": [
          "will",
          "would",
          "had",
          "should"
        ],
        "ans": 1,
        "exp": "2nd conditional result → 'would': 'I would travel the world.'"
      },
      {
        "q": "___ you mind closing the door?",
        "opts": [
          "Will",
          "Would",
          "Could",
          "Should"
        ],
        "ans": 1,
        "exp": "Polite request → 'Would you mind…?'"
      },
      {
        "q": "When I was a child, I ___ visit my grandparents every Sunday.",
        "opts": [
          "used to",
          "would",
          "will",
          "was"
        ],
        "ans": 1,
        "exp": "Past repeated habit → 'would': 'I would visit…' (or 'used to visit')."
      }
    ],
    "flashcards": [
      {
        "front": "WOULD — three main uses",
        "back": "1. CONDITIONAL: 'If I had time, I would help.'\n2. POLITE REQUEST: 'Would you mind waiting?'\n3. PAST HABIT: 'We would go fishing every Sunday.' (= used to)"
      }
    ]
  },
  "37": {
    "title": "Can / Could / Would you…? (Requests)",
    "topic": "Modal Verbs",
    "explain": [
      {
        "head": "Making requests — polite scale",
        "body": "Can < Could < Would you mind = increasingly polite",
        "note": "Can you help me? (informal) · Could you help me? (more polite) · Would you mind helping me? (very polite)"
      },
      {
        "head": "Would you mind…? — requires -ing",
        "body": "After 'Would you mind', use -ing (gerund).",
        "note": "Would you mind closing the door? · Would you mind waiting a moment?"
      },
      {
        "head": "Do you mind if I…? — asking permission",
        "body": "For asking if it's OK to do something.",
        "note": "Do you mind if I open the window? · Would you mind if I left early?"
      }
    ],
    "quiz": [
      {
        "q": "___ you lend me your pen for a second?",
        "opts": [
          "Should",
          "Shall",
          "Could",
          "Must"
        ],
        "ans": 2,
        "exp": "Polite request → 'Could you lend me…?'"
      },
      {
        "q": "Would you mind ___ the TV? I'm trying to work.",
        "opts": [
          "to turn off",
          "turn off",
          "turning off",
          "turned off"
        ],
        "ans": 2,
        "exp": "'Would you mind' + -ing: 'turning off the TV'."
      }
    ],
    "flashcards": [
      {
        "front": "Requests: CAN vs COULD vs WOULD YOU MIND",
        "back": "CAN you help me? (informal, direct)\nCOULD you help me? (more polite)\nWOULD YOU MIND helping me? (very polite)\n\n'Would you mind' → always + -ing"
      }
    ]
  }
};
