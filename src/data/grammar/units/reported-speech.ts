import { Unit } from '@/types/grammar';

export const reportedSpeechUnits: Record<number, Unit> = {
  "47": {
    "title": "Reported Speech (He said…)",
    "topic": "Reported Speech",
    "explain": [
      {
        "head": "Direct vs Reported speech",
        "body": "Direct: 'I'm tired,' she said. Reported: She said (that) she was tired."
      },
      {
        "head": "Tense backshift in reported speech",
        "body": "When reporting, verb tenses shift back one step.",
        "note": "'I work here.' → He said he worked there.\n'I'm working.' → He said he was working.\n'I worked.' → He said he had worked."
      },
      {
        "head": "Will → would / can → could",
        "body": "Modal verbs also shift back.",
        "note": "'I will come.' → She said she would come.\n'I can help.' → He said he could help."
      }
    ],
    "table": {
      "cols": [
        "Direct",
        "Reported"
      ],
      "rows": [
        [
          "am/is/are",
          "was/were"
        ],
        [
          "present simple",
          "past simple"
        ],
        [
          "present continuous",
          "past continuous"
        ],
        [
          "past simple",
          "past perfect"
        ],
        [
          "will",
          "would"
        ],
        [
          "can",
          "could"
        ],
        [
          "may",
          "might"
        ]
      ]
    },
    "quiz": [
      {
        "q": "'I'm tired,' she said. → She said she ___ tired.",
        "opts": [
          "is",
          "was",
          "were",
          "has been"
        ],
        "ans": 1,
        "exp": "Present → past in reported speech: 'was'."
      },
      {
        "q": "'I will call you,' he said. → He said he ___ me.",
        "opts": [
          "will call",
          "would call",
          "called",
          "is calling"
        ],
        "ans": 1,
        "exp": "Will → would in reported speech: 'he said he would call'."
      },
      {
        "q": "'I've finished,' Anna said. → Anna said she ___ finished.",
        "opts": [
          "has",
          "have",
          "had",
          "was"
        ],
        "ans": 2,
        "exp": "Present perfect → past perfect: 'had finished'."
      }
    ],
    "flashcards": [
      {
        "front": "Tense backshift in reported speech",
        "back": "DIRECT → REPORTED:\n'I work' → said he WORKED\n'I'm working' → said he WAS WORKING\n'I worked' → said he HAD WORKED\n'I will' → said he WOULD\n'I can' → said he COULD"
      }
    ]
  },
  "48": {
    "title": "Reported Speech 2 (Questions)",
    "topic": "Reported Speech",
    "explain": [
      {
        "head": "Reported questions — word order changes",
        "body": "In reported questions, use statement word order (not question word order). No do/does/did.",
        "note": "'Where do you live?' → She asked me where I lived. (NOT: where did I live)"
      },
      {
        "head": "Yes/No questions → whether/if",
        "body": "Yes/No questions become 'if' or 'whether' in reported speech.",
        "note": "'Are you coming?' → She asked if/whether I was coming."
      },
      {
        "head": "Time and place changes",
        "body": "Time and place expressions change in reported speech.",
        "note": "now→then, today→that day, yesterday→the day before, here→there, tomorrow→the next day"
      }
    ],
    "quiz": [
      {
        "q": "'Where do you live?' → She asked me where I ___.",
        "opts": [
          "live",
          "did live",
          "lived",
          "was living"
        ],
        "ans": 2,
        "exp": "Reported question: backshift + statement order: 'where I lived'."
      },
      {
        "q": "'Are you happy?' → He asked me ___ I was happy.",
        "opts": [
          "if",
          "that",
          "what",
          "which"
        ],
        "ans": 0,
        "exp": "Yes/No question → reported with 'if': 'he asked if I was happy'."
      }
    ],
    "flashcards": [
      {
        "front": "Reported questions — word order",
        "back": "DIRECT: 'Where does she live?'\nREPORTED: He asked where she LIVED. ✅\n(NOT: He asked where did she live ❌)\n\nKey: use statement word order in reported questions."
      }
    ]
  }
};
