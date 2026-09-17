import { Unit } from '@/types/grammar';

export const reportedSpeechUnits: Record<number, Unit> = {
  "47": {
    "title": "Reported Speech (He said…)",
    "topic": "Reported Speech",
    "explain": [
      {
        "head": "Estilo directo e indirecto",
        "body": "El estilo directo cita las palabras exactas entre comillas. El indirecto cuenta lo que alguien dijo sin comillas, ajustando pronombres y tiempos verbales al nuevo contexto. La palabra 'that' es opcional: puedes omitirla sin cambiar el significado."
      },
      {
        "head": "El verbo retrocede un paso",
        "body": "Al reportar, el verbo suele retroceder un tiempo hacia el pasado, aunque lo dicho siga siendo verdad. Presente simple pasa a pasado simple, presente continuo a pasado continuo y pasado simple a pasado perfecto.",
        "note": "'I work here.' → He said he worked there.\n'I'm working.' → He said he was working.\n'I worked.' → He said he had worked."
      },
      {
        "head": "Will pasa a would",
        "body": "Los modales retroceden igual que los demás verbos: 'will' se vuelve 'would' y 'can' se vuelve 'could'. En cambio 'should', 'might', 'could' y 'would' ya son formas retrasadas, así que no cambian.",
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
        "exp": "En estilo indirecto el presente pasa a pasado: 'was'."
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
        "exp": "'Will' se convierte en 'would': 'he said he would call'."
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
        "exp": "El present perfect pasa a past perfect: 'had finished'."
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
        "head": "Orden de frase afirmativa",
        "body": "Al reportarla, la pregunta pasa a formar parte de una afirmación: se usa el orden sujeto + verbo y desaparece el auxiliar 'do/does/did'. Por eso 'she asked where I lived' es correcto y 'she asked where did I live' no lo es.",
        "note": "'Where do you live?' → She asked me where I lived. (NOT: where did I live)"
      },
      {
        "head": "Preguntas de sí o no",
        "body": "Si la pregunta no lleva palabra interrogativa, se introduce con 'if' o 'whether', que equivalen a nuestro 'si'. Las dos son intercambiables, y el resto sigue las reglas de siempre: orden de afirmación y retroceso del verbo.",
        "note": "'Are you coming?' → She asked if/whether I was coming."
      },
      {
        "head": "Cambios de tiempo y lugar",
        "body": "Si reportas desde otro momento u otro sitio, las expresiones de tiempo y lugar se ajustan: 'today' pasa a 'that day' y 'here' pasa a 'there'. No es automático: solo cambian cuando el contexto realmente es distinto.",
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
        "exp": "Pregunta reportada: verbo atrás y orden de afirmación: 'where I lived'."
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
        "exp": "Pregunta de sí/no: se reporta con 'if': 'he asked if I was happy'."
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
