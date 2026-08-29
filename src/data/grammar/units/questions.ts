import { Unit } from '@/types/grammar';

export const questionsUnits: Record<number, Unit> = {
  "49": {
    "title": "Questions 1",
    "topic": "Questions",
    "explain": [
      {
        "head": "Word order in questions",
        "body": "In questions, the auxiliary comes BEFORE the subject.",
        "note": "Are you coming? · Does she like it? · Did they arrive? · Have you seen it?"
      },
      {
        "head": "Wh- questions",
        "body": "Wh-word + auxiliary + subject + main verb?",
        "note": "Where do you live? · What time does the train leave? · Why did you leave?"
      },
      {
        "head": "Questions with prepositions",
        "body": "Prepositions go to the END in English questions.",
        "note": "What are you looking at? · Who are you talking to? · What did you buy that for?"
      }
    ],
    "quiz": [
      {
        "q": "___ he know about the meeting?",
        "opts": [
          "Does",
          "Is",
          "Do",
          "Has"
        ],
        "ans": 0,
        "exp": "Present simple question with he/she/it → 'Does'."
      },
      {
        "q": "What time ___ the last train leave?",
        "opts": [
          "do",
          "does",
          "is",
          "has"
        ],
        "ans": 1,
        "exp": "Present simple question with 'the train' (= it) → 'does'."
      },
      {
        "q": "How long ___ you been waiting?",
        "opts": [
          "do",
          "did",
          "have",
          "are"
        ],
        "ans": 2,
        "exp": "Present perfect question → 'have': 'How long have you been waiting?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question word order — the rule",
        "back": "(Wh-word) + AUXILIARY + SUBJECT + main verb?\n\nDo you like it? ✅ · You like it? ❌\nWhere does she live? ✅ · Where she lives? ❌"
      }
    ]
  },
  "50": {
    "title": "Questions 2 (who/what/which)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Questions about the subject — no auxiliary",
        "body": "When who/what/which IS the subject, no auxiliary is needed.",
        "note": "Who called? (who = subject) · What happened? · Which team won?"
      },
      {
        "head": "Questions about the object — use auxiliary",
        "body": "When who/what/which IS the object, use an auxiliary.",
        "note": "Who did you call? (you = subject, who = object) · What did you do? · Which team did you support?"
      }
    ],
    "quiz": [
      {
        "q": "___ happened last night? (subject question)",
        "opts": [
          "What did",
          "What",
          "Who did",
          "Which"
        ],
        "ans": 1,
        "exp": "'What' = subject → no auxiliary: 'What happened?'"
      },
      {
        "q": "___ did you meet at the party? (object question)",
        "opts": [
          "Who",
          "Who did",
          "Whom",
          "What"
        ],
        "ans": 0,
        "exp": "'Who' = object → 'Who did you meet?' (auxiliary needed)"
      }
    ],
    "flashcards": [
      {
        "front": "Subject questions vs Object questions",
        "back": "SUBJECT: who/what IS the subject → NO auxiliary:\n'Who called you?' (who = subject, called = verb)\n\nOBJECT: who/what is the OBJECT → USE auxiliary:\n'Who did you call?' (you = subject, who = object)"
      }
    ]
  },
  "51": {
    "title": "Auxiliary Verbs (do/be/have)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Auxiliary verbs for emphasis",
        "body": "Use do/does/did for emphasis in positive sentences.",
        "note": "'You don't believe me.' 'I DO believe you!' · 'She doesn't care.' 'She DOES care!'"
      },
      {
        "head": "Short answers",
        "body": "Use auxiliary verb in short answers.",
        "note": "'Are you tired?' 'Yes, I am.' 'No, I'm not.' · 'Did you go?' 'Yes, I did.' 'No, I didn't.'"
      },
      {
        "head": "So/Neither + auxiliary",
        "body": "So + auxiliary (agreement with positive) · Neither + auxiliary (agreement with negative)",
        "note": "'I'm tired.' 'So am I.' · 'I don't like it.' 'Neither do I.'"
      }
    ],
    "quiz": [
      {
        "q": "'Are you hungry?' 'Yes, I ___.",
        "opts": [
          "do",
          "am",
          "have",
          "will"
        ],
        "ans": 1,
        "exp": "Short answer matching the auxiliary: 'Yes, I am.'"
      },
      {
        "q": "'I can't swim.' '___ I.'",
        "opts": [
          "So can",
          "So can't",
          "Neither can",
          "Neither do"
        ],
        "ans": 2,
        "exp": "Agreement with negative → 'Neither can I.'"
      }
    ],
    "flashcards": [
      {
        "front": "SO / NEITHER for agreement",
        "back": "Positive agreement → SO + aux:\n'I'm tired.' 'SO AM I.'\n\nNegative agreement → NEITHER + aux:\n'I don't smoke.' 'NEITHER DO I.'\n(OR: 'I don't either.')"
      }
    ]
  },
  "52": {
    "title": "Question Tags",
    "topic": "Questions",
    "explain": [
      {
        "head": "Question tags — basic rule",
        "body": "Positive sentence → negative tag | Negative sentence → positive tag",
        "note": "It's cold, isn't it? · You like coffee, don't you? · She doesn't smoke, does she?"
      },
      {
        "head": "Tags with auxiliaries",
        "body": "The tag uses the same auxiliary as the main sentence.",
        "note": "You can swim, can't you? · They've arrived, haven't they? · You were there, weren't you?"
      },
      {
        "head": "I am → aren't I",
        "body": "Special case: 'I am' → 'aren't I?' (not 'amn't I')",
        "note": "I'm right, aren't I? · I'm late, aren't I?"
      }
    ],
    "quiz": [
      {
        "q": "It's a beautiful day, ___ it?",
        "opts": [
          "is",
          "isn't",
          "doesn't",
          "wasn't"
        ],
        "ans": 1,
        "exp": "Positive sentence → negative tag: 'isn't it?'"
      },
      {
        "q": "She doesn't smoke, ___ she?",
        "opts": [
          "does",
          "doesn't",
          "is",
          "isn't"
        ],
        "ans": 0,
        "exp": "Negative sentence → positive tag: 'does she?'"
      },
      {
        "q": "I'm right, ___ I?",
        "opts": [
          "am",
          "amn't",
          "aren't",
          "isn't"
        ],
        "ans": 2,
        "exp": "Special case: 'I am' → 'aren't I?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question tag rules",
        "back": "Positive → NEGATIVE tag:\n'It's cold, ISN'T IT?'\n\nNegative → POSITIVE tag:\n'She doesn't know, DOES SHE?'\n\nSpecial: I AM → AREN'T I?\n'I'm late, AREN'T I?'"
      }
    ]
  }
};
