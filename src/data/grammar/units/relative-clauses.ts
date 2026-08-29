import { Unit } from '@/types/grammar';

export const relativeClausesUnits: Record<number, Unit> = {
  "92": {
    "title": "Relative Clauses 1 (who/that/which)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Who — for people",
        "body": "Use 'who' to refer to people.",
        "note": "The man who lives next door is a doctor. · The woman who called you is my sister."
      },
      {
        "head": "Which — for things",
        "body": "Use 'which' for things (not people).",
        "note": "The book which I'm reading is great. · The car which broke down was brand new."
      },
      {
        "head": "That — for people or things",
        "body": "'That' can replace 'who' or 'which' in defining clauses.",
        "note": "The man that lives next door is a doctor. · The book that I'm reading is great."
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ lives next door is a teacher.",
        "opts": [
          "which",
          "who",
          "what",
          "where"
        ],
        "ans": 1,
        "exp": "Person → 'who': 'The woman who lives next door.'"
      },
      {
        "q": "The book ___ I'm reading is very interesting.",
        "opts": [
          "who",
          "what",
          "which",
          "where"
        ],
        "ans": 2,
        "exp": "Thing → 'which' (or 'that'): 'The book which I'm reading.'"
      }
    ],
    "flashcards": [
      {
        "front": "WHO / WHICH / THAT in relative clauses",
        "back": "WHO → people:\n'The man who called me.'\n\nWHICH → things:\n'The car which broke down.'\n\nTHAT → people or things:\n'The man that called.' / 'The car that broke down.'"
      }
    ]
  },
  "93": {
    "title": "Relative Clauses 2 (with/without who/that/which)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Omitting who/that/which — object clauses",
        "body": "When the relative pronoun is the OBJECT of the clause, it can be omitted.",
        "note": "The book (that) I'm reading is good. (that = object) · The man (who) I met was kind."
      },
      {
        "head": "Cannot omit — subject clauses",
        "body": "When the relative pronoun is the SUBJECT, it cannot be omitted.",
        "note": "The man who called me was Tom. (who = subject — cannot omit) · The book which changed my life."
      }
    ],
    "quiz": [
      {
        "q": "The hotel ___ we stayed at was very expensive.",
        "opts": [
          "—",
          "who",
          "what",
          "there"
        ],
        "ans": 0,
        "exp": "'We stayed at' → 'hotel' is the object of 'stayed at' → relative pronoun can be omitted."
      },
      {
        "q": "The woman ___ phoned was my sister.",
        "opts": [
          "—",
          "who",
          "what",
          "whose"
        ],
        "ans": 1,
        "exp": "'Phoned' → 'woman' is the SUBJECT → cannot omit: 'who phoned'."
      }
    ],
    "flashcards": [
      {
        "front": "When can you omit who/that/which?",
        "back": "OBJECT clause → CAN omit:\n'The book (that) I read was good.' (I read it → 'that' is object)\n\nSUBJECT clause → CANNOT omit:\n'The book that changed my life.' (book changed it → 'that' is subject)"
      }
    ]
  },
  "94": {
    "title": "Relative Clauses 3 (whose/whom/where)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Whose — possessive",
        "body": "Use 'whose' to indicate possession in relative clauses.",
        "note": "The woman whose car was stolen is very upset. · I know a man whose brother is a famous actor."
      },
      {
        "head": "Whom — formal object (people)",
        "body": "'Whom' is the formal object form of 'who' (less common in spoken English).",
        "note": "The man whom I met was kind. (formal) = The man I met was kind. (informal)"
      },
      {
        "head": "Where — places",
        "body": "Use 'where' to refer to a place.",
        "note": "The city where I was born is in the south. · The hotel where we stayed was lovely."
      }
    ],
    "quiz": [
      {
        "q": "The student ___ phone rang had to leave.",
        "opts": [
          "who",
          "which",
          "whose",
          "whom"
        ],
        "ans": 2,
        "exp": "Possessive → 'whose': 'The student whose phone rang.'"
      },
      {
        "q": "That's the restaurant ___ we had our first date.",
        "opts": [
          "which",
          "who",
          "where",
          "that"
        ],
        "ans": 2,
        "exp": "Place → 'where': 'the restaurant where we had our first date'."
      }
    ],
    "flashcards": [
      {
        "front": "WHOSE / WHOM / WHERE in relative clauses",
        "back": "WHOSE = possessive:\n'The man whose car was stolen.'\n\nWHOM = formal object (person):\n'The woman whom I met.' (= who I met)\n\nWHERE = place:\n'The city where I was born.'"
      }
    ]
  },
  "95": {
    "title": "Relative Clauses 4 (extra information)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "Non-defining relative clauses — extra info",
        "body": "These clauses add EXTRA information about something already identified. They are separated by commas.",
        "note": "My brother, who lives in London, is a doctor. (extra info — I only have one brother) · Paris, which is the capital of France, is beautiful."
      },
      {
        "head": "Defining vs Non-defining",
        "body": "No comma = defining (needed to identify). With commas = non-defining (extra info, can be removed).",
        "note": "'The woman who called me is my sister.' (needed — which woman?) · 'My sister, who called me, is a teacher.' (extra info)"
      }
    ],
    "quiz": [
      {
        "q": "My sister, ___ is a doctor, lives in Paris.",
        "opts": [
          "that",
          "which",
          "who",
          "whose"
        ],
        "ans": 2,
        "exp": "Non-defining (extra info, with commas) + person → 'who'. (NOT 'that' in non-defining clauses)"
      },
      {
        "q": "The man ___ called was my boss.",
        "opts": [
          "who",
          ", who,",
          "which",
          "that,"
        ],
        "ans": 0,
        "exp": "Defining clause (needed to identify which man) → no commas, 'who'."
      }
    ],
    "flashcards": [
      {
        "front": "Defining vs Non-defining relative clauses",
        "back": "DEFINING (no comma) = needed to identify:\n'The man who stole my bag was arrested.'\n\nNON-DEFINING (commas) = extra info:\n'My brother, who lives in London, is a doctor.'\n\nNote: NEVER use 'that' in non-defining clauses!"
      }
    ]
  },
  "96": {
    "title": "Relative Clauses 5 (-ing and -ed clauses)",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "-ing to replace who/which + active verb",
        "body": "Replace 'who/which + active verb' with -ing participle clause.",
        "note": "The man who is standing in the corner → The man standing in the corner. · The car which is parked outside → The car parked outside."
      },
      {
        "head": "-ed to replace who/which + passive verb",
        "body": "Replace 'who/which + passive verb' with -ed/-en participle clause.",
        "note": "The letter which was written by Tom → The letter written by Tom. · The bridge that was built in 1900 → The bridge built in 1900."
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ in the corner is my colleague. (who is sitting)",
        "opts": [
          "seated",
          "sitting",
          "sat",
          "to sit"
        ],
        "ans": 1,
        "exp": "Active verb → -ing: 'the woman sitting in the corner'."
      },
      {
        "q": "The car ___ outside belongs to Tom. (which was parked)",
        "opts": [
          "parking",
          "to park",
          "parked",
          "parks"
        ],
        "ans": 2,
        "exp": "Passive verb → -ed: 'the car parked outside'."
      }
    ],
    "flashcards": [
      {
        "front": "-ing vs -ed to shorten relative clauses",
        "back": "-ING replaces who/which + ACTIVE verb:\n'The man standing there' (= who is standing)\n\n-ED replaces who/which + PASSIVE verb:\n'The letter written by Tom' (= which was written)"
      }
    ]
  },
  "97": {
    "title": "-ing and -ed Clauses",
    "topic": "Relative Clauses",
    "explain": [
      {
        "head": "-ING clauses — active meaning",
        "body": "An -ing clause after a noun replaces 'who/which + is/are/was doing' — it has an ACTIVE meaning.",
        "note": "The man talking to Sarah is my brother. (= who is talking) · Police stopped a car driving the wrong way."
      },
      {
        "head": "-ED clauses — passive meaning",
        "body": "An -ed clause after a noun replaces 'who/which + is/are/was + past participle' — it has a PASSIVE meaning.",
        "note": "The boy injured in the accident is in hospital. (= who was injured) · Documents written in English are accepted."
      },
      {
        "head": "Why use them?",
        "body": "They let you avoid repeating who/which/that + be — very common in written and news English.",
        "note": "The people invited to the party all came. (= who were invited)"
      }
    ],
    "quiz": [
      {
        "q": "The woman ___ to the manager is my aunt.",
        "opts": [
          "talk",
          "talking",
          "talked",
          "talks"
        ],
        "ans": 1,
        "exp": "Active meaning → -ing clause."
      },
      {
        "q": "The window ___ in the storm needs fixing.",
        "opts": [
          "breaking",
          "break",
          "broken",
          "breaks"
        ],
        "ans": 2,
        "exp": "Passive meaning (the window was broken) → -ed clause."
      },
      {
        "q": "Do you know the man ___ over there?",
        "opts": [
          "standing",
          "stood",
          "stand",
          "stands"
        ],
        "ans": 0,
        "exp": "Active → -ing."
      }
    ],
    "flashcards": [
      {
        "front": "-ING (active) vs -ED (passive) clauses",
        "back": "-ING = active: \"the man SPEAKING\" (who is speaking)\n-ED = passive: \"the language SPOKEN here\" (which is spoken)"
      }
    ]
  }
};
