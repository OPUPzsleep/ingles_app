import { Unit } from '@/types/grammar';

export const reportedSpeechUnits: Record<number, Unit> = {
  "47": {
    "title": "Reported Speech (He said…)",
    "topic": "Reported Speech",
    "explain": [
      {
        "head": "Direct vs Reported speech",
        "body": "Direct speech quotes someone's exact words, usually inside quotation marks: 'I'm tired,' she said. Reported speech instead tells us what someone said without quoting them word for word, which means dropping the quotation marks and often shifting pronouns and verb tenses to fit the new context: She said (that) she was tired. The word 'that' here is optional and can always be left out without changing the meaning."
      },
      {
        "head": "Tense backshift in reported speech",
        "body": "When you report what someone said, the verb tense usually moves one step back into the past, even if what they said is still true — this pattern is called 'backshift'. It happens because the act of reporting takes place later than the original words were spoken, so the whole sentence gets anchored further back in time. Present simple becomes past simple, present continuous becomes past continuous, and past simple becomes past perfect, exactly as shown in the examples.",
        "note": "'I work here.' → He said he worked there.\n'I'm working.' → He said he was working.\n'I worked.' → He said he had worked."
      },
      {
        "head": "Will → would / can → could",
        "body": "Modal verbs follow the same backshift pattern as other tenses: 'will' becomes 'would' and 'can' becomes 'could' once you move a sentence into reported speech. This keeps the sentence consistent, since anything reported after a past-tense reporting verb like 'she said' or 'he asked' needs to sit one step further back in time. Not every modal changes, though — 'should', 'might', 'could', and 'would' already are the 'back' form, so they stay the same.",
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
    ],
    "readingText": {
      "title": "What She Told Me",
      "body": "Yesterday I bumped into my old friend Laura. She told me she worked at a hospital now. 'I work here as a nurse,' she said, and she seemed really happy. She also said she was studying for a new certification and that she would finish it next year. I asked about her brother, and she said he had moved to Canada two years ago. She told me he could speak French fluently now. Before we said goodbye, she said she would call me soon to catch up properly. I really hope she does!",
      "translation": "Ayer me encontré con mi vieja amiga Laura. Me dijo que ahora trabajaba en un hospital. 'Trabajo aquí como enfermera,' dijo, y parecía realmente feliz. También dijo que estaba estudiando para una nueva certificación y que la terminaría el próximo año. Le pregunté por su hermano, y dijo que se había mudado a Canadá hace dos años. Me contó que ahora podía hablar francés con fluidez. Antes de despedirnos, dijo que me llamaría pronto para ponernos al día como es debido. ¡Realmente espero que lo haga!"
    }
  },
  "48": {
    "title": "Reported Speech 2 (Questions)",
    "topic": "Reported Speech",
    "explain": [
      {
        "head": "Reported questions — word order changes",
        "body": "When you report a question, it stops being a direct question and becomes part of a larger statement, so it must follow normal statement word order (subject before verb) instead of the inverted order direct questions use. The auxiliary 'do/does/did' also disappears, because it was only needed to create that inversion in the first place. Learners often keep the question order out of habit, but 'she asked where I lived' is correct while 'she asked where did I live' is not.",
        "note": "'Where do you live?' → She asked me where I lived. (NOT: where did I live)"
      },
      {
        "head": "Yes/No questions → whether/if",
        "body": "A direct question expecting a yes-or-no answer has no question word like 'where' or 'what' to introduce it once it's reported, so English uses 'if' or 'whether' to fill that role instead. The two words work the same way here and are generally interchangeable. The rest of the sentence still follows the normal reported-speech rules: statement word order and, usually, a tense backshift.",
        "note": "'Are you coming?' → She asked if/whether I was coming."
      },
      {
        "head": "Time and place changes",
        "body": "When the moment or place of reporting is different from when and where the original words were spoken, time and place expressions need to change to stay accurate — something called 'today' last week is no longer 'today' when you report it now, so it becomes 'that day'. The same logic applies to place words, such as 'here' becoming 'there' once you are no longer in that location. These are not rules to apply mechanically every time — they only matter when the context has genuinely changed.",
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
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "How was your job interview?", "translation": "¿Cómo estuvo tu entrevista de trabajo?" },
      { "speaker": "user", "text": "It was interesting. They asked me where I had studied.", "translation": "Estuvo interesante. Me preguntaron dónde había estudiado." },
      { "speaker": "other", "text": "What else did they ask?", "translation": "¿Qué más te preguntaron?" },
      { "speaker": "user", "text": "They asked if I was available to start immediately.", "translation": "Me preguntaron si estaba disponible para empezar de inmediato." },
      { "speaker": "other", "text": "Did they ask about your salary expectations?", "translation": "¿Te preguntaron sobre tus expectativas salariales?" },
      { "speaker": "user", "text": "Yes, they asked how much I wanted to earn.", "translation": "Sí, me preguntaron cuánto quería ganar." },
      { "speaker": "other", "text": "What did you say?", "translation": "¿Qué dijiste?" },
      { "speaker": "user", "text": "I told them I wasn't sure yet.", "translation": "Les dije que todavía no estaba seguro." }
    ]
  }
};
