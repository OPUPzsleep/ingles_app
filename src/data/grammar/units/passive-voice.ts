import { Unit } from '@/types/grammar';

export const passiveVoiceUnits: Record<number, Unit> = {
  "42": {
    "title": "Passive 1 (is done / was done)",
    "topic": "Passive Voice",
    "explain": [
      {
        "head": "Active vs Passive",
        "body": "Active: subject DOES the action. Passive: subject RECEIVES the action.",
        "note": "Active: Somebody cleans the office. Passive: The office is cleaned."
      },
      {
        "head": "Present passive — am/is/are + pp",
        "body": "Use for regular passive actions in the present.",
        "note": "The windows are cleaned every week. · English is spoken here. · I am paid monthly."
      },
      {
        "head": "Past passive — was/were + pp",
        "body": "Use for passive actions in the past.",
        "note": "The office was cleaned yesterday. · The letter was written by Sarah."
      },
      {
        "head": "By + agent",
        "body": "Add 'by' to say WHO does/did the action (only when important).",
        "note": "The Mona Lisa was painted by Leonardo da Vinci. · The window was broken. (agent unknown)"
      }
    ],
    "table": {
      "cols": [
        "Tense",
        "Active",
        "Passive"
      ],
      "rows": [
        [
          "Present",
          "They clean the office.",
          "The office is cleaned."
        ],
        [
          "Past",
          "She wrote the letter.",
          "The letter was written."
        ],
        [
          "Future",
          "They will build a hotel.",
          "A hotel will be built."
        ]
      ]
    },
    "quiz": [
      {
        "q": "The office ___ every day.",
        "opts": [
          "cleans",
          "is cleaned",
          "was cleaned",
          "cleaned"
        ],
        "ans": 1,
        "exp": "Present passive for regular action: 'is cleaned'."
      },
      {
        "q": "The Mona Lisa ___ by Leonardo da Vinci.",
        "opts": [
          "was painted",
          "is painted",
          "painted",
          "were painted"
        ],
        "ans": 0,
        "exp": "Past passive + 'by' agent: 'was painted by'."
      },
      {
        "q": "A new hospital ___ next year.",
        "opts": [
          "is built",
          "was built",
          "will be built",
          "builds"
        ],
        "ans": 2,
        "exp": "Future passive: 'will be built'."
      }
    ],
    "flashcards": [
      {
        "front": "How do you form the passive?",
        "back": "am/is/are/was/were/will be + PAST PARTICIPLE\n\nPresent: The room is cleaned daily.\nPast: The window was broken.\nFuture: The bridge will be built next year."
      },
      {
        "front": "When do you use the passive voice?",
        "back": "✅ When the action matters more than who did it.\n✅ When the doer is unknown or obvious.\n✅ In formal/academic writing.\n\nThe window was broken. (we don't know who)"
      }
    ]
  },
  "43": {
    "title": "Passive 2 (be done / been done)",
    "topic": "Passive Voice",
    "explain": [
      {
        "head": "Passive with modals — modal + be + pp",
        "body": "Use 'be' (not 'is/are') after modal verbs in the passive.",
        "note": "The work must be done today. · The problem can be solved. · Mistakes might be made."
      },
      {
        "head": "Passive with perfect — have been + pp",
        "body": "Present perfect passive: have/has been + past participle.",
        "note": "The letter has been sent. · Three people have been arrested. · The bridge has been closed."
      }
    ],
    "quiz": [
      {
        "q": "The work ___ finished by tomorrow.",
        "opts": [
          "must be",
          "must is",
          "must has been",
          "must been"
        ],
        "ans": 0,
        "exp": "Modal passive → modal + be + pp: 'must be finished'."
      },
      {
        "q": "Three people ___ in the accident.",
        "opts": [
          "injured",
          "were injured",
          "have been injured",
          "are injuring"
        ],
        "ans": 2,
        "exp": "Present perfect passive: 'have been injured'."
      }
    ],
    "flashcards": [
      {
        "front": "Passive with modals",
        "back": "Modal + BE + past participle:\n'The work must be done.' (not 'must is done')\n'This can be fixed.' · 'It should be reported.'"
      }
    ]
  },
  "44": {
    "title": "Passive 3 (two objects / get / born)",
    "topic": "Passive Voice",
    "explain": [
      {
        "head": "Passive with two objects",
        "body": "Verbs like give, send, show, offer, pay, promise, sell and tell can have two objects, so they can form the passive two ways.",
        "note": "I was given a watch. (indirect object as subject) · A watch was given to me. (direct object as subject)"
      },
      {
        "head": "GET as a passive alternative",
        "body": "Informal English often uses GET instead of BE for passives, especially for things that happen suddenly or unluckily.",
        "note": "get married · get paid · get caught · get hurt"
      },
      {
        "head": "BORN — always passive",
        "body": "'Born' is a passive form and is always used with was/were, never as an active verb.",
        "note": "She was born in Brazil in 1990. · Where were you born?"
      }
    ],
    "quiz": [
      {
        "q": "I ___ a watch for my birthday.",
        "opts": [
          "gave",
          "was given",
          "was giving",
          "am given"
        ],
        "ans": 1,
        "exp": "Passive with two objects: 'I was given a watch' (indirect object becomes subject)."
      },
      {
        "q": "They ___ married last summer.",
        "opts": [
          "got",
          "got got",
          "were get",
          "get"
        ],
        "ans": 0,
        "exp": "'Get married' = informal passive with 'get'."
      },
      {
        "q": "She ___ in Brazil in 1990.",
        "opts": [
          "born",
          "was born",
          "is born",
          "borns"
        ],
        "ans": 1,
        "exp": "'Born' is always passive: 'was/were born'."
      }
    ],
    "flashcards": [
      {
        "front": "Passive with two objects",
        "back": "Verbs like give/send/show/offer/pay/tell can form the passive two ways:\n'I was given a watch.' (indirect object as subject) ✅\n'A watch was given to me.' (direct object as subject) ✅"
      },
      {
        "front": "GET as a passive alternative",
        "back": "Informal English often uses GET instead of BE for passives, especially for things that happen suddenly or unluckily:\nget married · get paid · get caught · get hurt"
      }
    ]
  },
  "45": {
    "title": "Passive 3 (it is said that…)",
    "topic": "Passive Voice",
    "explain": [
      {
        "head": "It is said that… / He is said to…",
        "body": "Passive structures for reporting what people say/think/know/believe.",
        "note": "It is said that he is very rich. = He is said to be very rich. · It is believed that the earth is 4.5 billion years old."
      },
      {
        "head": "Reporting verbs — thought/believed/known/claimed/expected",
        "body": "It is thought that... · It is known that... · He is expected to...",
        "note": "It is thought that prices will rise. · She is known to be an expert. · They are expected to arrive soon."
      }
    ],
    "quiz": [
      {
        "q": "It ___ that he is extremely wealthy.",
        "opts": [
          "said",
          "is saying",
          "is said",
          "says"
        ],
        "ans": 2,
        "exp": "Passive reporting → 'It is said that…'"
      },
      {
        "q": "She ___ to be the best player in the team.",
        "opts": [
          "is saying",
          "said",
          "is said",
          "says"
        ],
        "ans": 2,
        "exp": "Personal passive: 'She is said to be…'"
      }
    ],
    "flashcards": [
      {
        "front": "IT IS SAID THAT vs HE IS SAID TO",
        "back": "It is said that he is rich. (impersonal)\n= He is said to be rich. (personal)\n\nOther verbs: thought, believed, known, expected, reported, claimed\n'It is believed that...' / 'She is believed to be...'"
      }
    ]
  },
  "46": {
    "title": "Have Something Done",
    "topic": "Passive Voice",
    "explain": [
      {
        "head": "Have something done — you arrange it",
        "body": "Use 'have + object + past participle' when you arrange for someone else to do something for you.",
        "note": "I'm having my hair cut. · We're having the house painted. · I had my car repaired."
      },
      {
        "head": "Get something done — less formal",
        "body": "'Get + object + pp' is less formal, same meaning.",
        "note": "I need to get my watch fixed. · She got her hair done before the party."
      }
    ],
    "quiz": [
      {
        "q": "I'm ___ my car ___ at the garage tomorrow.",
        "opts": [
          "having/repaired",
          "getting/repair",
          "having/repair",
          "making/repaired"
        ],
        "ans": 0,
        "exp": "Have + object + past participle: 'having my car repaired'."
      },
      {
        "q": "They ___ their house ___ last year.",
        "opts": [
          "had/painted",
          "made/paint",
          "did/paint",
          "let/paint"
        ],
        "ans": 0,
        "exp": "Have something done (past): 'had their house painted'."
      }
    ],
    "flashcards": [
      {
        "front": "HAVE SOMETHING DONE",
        "back": "= you ARRANGE for someone to do it for you\n\nI cut my hair. (I did it myself)\nI had my hair cut. (a hairdresser did it — I arranged it)\n\nStructure: HAVE + object + past participle"
      }
    ]
  }
};
