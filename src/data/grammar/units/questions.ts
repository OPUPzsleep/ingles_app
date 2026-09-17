import { Unit } from '@/types/grammar';

export const questionsUnits: Record<number, Unit> = {
  "49": {
    "title": "Questions 1",
    "topic": "Questions",
    "explain": [
      {
        "head": "Orden de las preguntas",
        "body": "En inglés el auxiliar se coloca delante del sujeto y el verbo principal se queda después. Si la frase no tiene auxiliar propio, se añade \"do/does/did\" solo para poder hacer esa inversión.",
        "note": "Are you coming? · Does she like it? · Did they arrive? · Have you seen it?"
      },
      {
        "head": "Preguntas con wh-",
        "body": "Las preguntas que piden información (who, what, where, why...) solo añaden la palabra interrogativa delante del mismo orden auxiliar-sujeto-verbo de las preguntas de sí/no. 'Where do you live?' mantiene el auxiliar justo después de la palabra interrogativa y antes del sujeto, como una pregunta normal con una palabra extra delante.",
        "note": "Where do you live? · What time does the train leave? · Why did you leave?"
      },
      {
        "head": "Preposición al final",
        "body": "Cuando la pregunta lleva una preposición (about, at, to, for...), lo normal en inglés es dejarla al final de la frase en vez de pegarla a la palabra interrogativa, como en 'What are you looking at?' o 'Who are you talking to?'. Existe la forma formal con la preposición al principio ('To whom are you talking?'), pero en el habla cotidiana casi siempre va al final.",
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
        "exp": "Pregunta en presente simple con he/she/it → 'Does'."
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
        "exp": "Pregunta en presente simple con 'the train' (= it) → 'does'."
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
        "exp": "Pregunta en presente perfecto → 'have': 'How long have you been waiting?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question word order — the rule",
        "back": "(Wh-word) + AUXILIARY + SUBJECT + main verb?\n\nDo you like it? ✅ · You like it? ❌\nWhere does she live? ✅ · Where she lives? ❌"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Hi! Are you coming to the party tonight?", "translation": "¡Hola! ¿Vas a venir a la fiesta esta noche?" },
      { "speaker": "user", "text": "Yes, I am! What time does it start?", "translation": "¡Sí! ¿A qué hora empieza?" },
      { "speaker": "other", "text": "It starts at eight. Where do you live, by the way?", "translation": "Empieza a las ocho. ¿Dónde vives, por cierto?" },
      { "speaker": "user", "text": "I live downtown. Who are you going with?", "translation": "Vivo en el centro. ¿Con quién vas a ir?" },
      { "speaker": "other", "text": "I'm going with my sister. What are you bringing?", "translation": "Voy con mi hermana. ¿Qué vas a llevar?" },
      { "speaker": "user", "text": "I'm bringing a cake. Have you met the host before?", "translation": "Voy a llevar un pastel. ¿Ya conocías al anfitrión?" }
    ]
  },
  "50": {
    "title": "Questions 2 (who/what/which)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Preguntas sobre el sujeto",
        "body": "Cuando la palabra interrogativa es el sujeto de la acción (no el objeto), no se necesita ningún auxiliar y el orden es igual al de una frase afirmativa. 'Who called?' funciona así porque 'who' es quien llama; no hay nada que invertir.",
        "note": "Who called? (who = subject) · What happened? · Which team won?"
      },
      {
        "head": "Preguntas sobre el objeto",
        "body": "Cuando la palabra interrogativa representa el objeto (no el sujeto), se necesita el auxiliar de siempre con inversión: 'Who did you call?' lleva 'did' porque 'you' es el sujeto y 'who' es el objeto. Truco: si puedes responder sustituyendo la palabra interrogativa por un nombre sin cambiar el orden, era pregunta de sujeto.",
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
        "exp": "'What' = sujeto → sin auxiliar: 'What happened?'"
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
        "exp": "'Who' = objeto → 'Who did you meet?' (necesita auxiliar)"
      }
    ],
    "flashcards": [
      {
        "front": "Subject questions vs Object questions",
        "back": "SUBJECT: who/what IS the subject → NO auxiliary:\n'Who called you?' (who = subject, called = verb)\n\nOBJECT: who/what is the OBJECT → USE auxiliary:\n'Who did you call?' (you = subject, who = object)"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "Something strange happened at the office last night.", "translation": "Algo extraño pasó en la oficina anoche." },
      { "speaker": "user", "text": "What happened exactly?", "translation": "¿Qué pasó exactamente?" },
      { "speaker": "other", "text": "Someone broke into the office and stole some files.", "translation": "Alguien entró a la fuerza en la oficina y robó unos archivos." },
      { "speaker": "user", "text": "Who broke in? Do the police know?", "translation": "¿Quién entró? ¿La policía lo sabe?" },
      { "speaker": "other", "text": "Not yet. But who called the police this morning?", "translation": "Todavía no. Pero, ¿quién llamó a la policía esta mañana?" },
      { "speaker": "user", "text": "I did. And what did you tell them?", "translation": "Yo fui. ¿Y qué les dijiste?" },
      { "speaker": "other", "text": "I told them everything I had seen.", "translation": "Les conté todo lo que había visto." }
    ]
  },
  "51": {
    "title": "Auxiliary Verbs (do/be/have)",
    "topic": "Questions",
    "explain": [
      {
        "head": "Auxiliares para dar énfasis",
        "body": "Los auxiliares do/does/did también sirven para enfatizar una frase afirmativa, normalmente para contradecir algo que se acaba de decir. Si alguien dice 'you don't believe me', responder 'I DO believe you!' usa 'do' solo para dar fuerza, aunque la frase sería correcta sin él.",
        "note": "'You don't believe me.' 'I DO believe you!' · 'She doesn't care.' 'She DOES care!'"
      },
      {
        "head": "Respuestas cortas",
        "body": "Una respuesta corta repite el mismo auxiliar de la pregunta en vez de un simple 'sí' o 'no': 'Are you tired?' → 'Yes, I am.'; 'Did you go?' → 'Yes, I did.'. Responder solo 'Yes' o 'No' sin el auxiliar suena cortante en inglés.",
        "note": "'Are you tired?' 'Yes, I am.' 'No, I'm not.' · 'Did you go?' 'Yes, I did.' 'No, I didn't.'"
      },
      {
        "head": "So / Neither + auxiliar",
        "body": "Para mostrar acuerdo se usa 'so' (con frase afirmativa) o 'neither' (con negativa) seguido del auxiliar correspondiente: 'I'm tired.' 'So am I.' o 'I don't like it.' 'Neither do I.'. El auxiliar debe coincidir con el de la frase original, igual que en las respuestas cortas.",
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
        "exp": "Respuesta corta que repite el auxiliar: 'Yes, I am.'"
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
        "exp": "Acuerdo con frase negativa → 'Neither can I.'"
      }
    ],
    "flashcards": [
      {
        "front": "SO / NEITHER for agreement",
        "back": "Positive agreement → SO + aux:\n'I'm tired.' 'SO AM I.'\n\nNegative agreement → NEITHER + aux:\n'I don't smoke.' 'NEITHER DO I.'\n(OR: 'I don't either.')"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "You don't really like classical music, do you?", "translation": "No te gusta realmente la música clásica, ¿verdad?" },
      { "speaker": "user", "text": "I DO like it! I listen to it every night.", "translation": "¡Sí me gusta! La escucho todas las noches." },
      { "speaker": "other", "text": "Really? I don't believe you.", "translation": "¿En serio? No te creo." },
      { "speaker": "user", "text": "Well, ask my roommate — he doesn't like it either.", "translation": "Bueno, pregúntale a mi compañero de cuarto — a él tampoco le gusta." },
      { "speaker": "other", "text": "So you two disagree about a lot of things?", "translation": "¿Entonces ustedes dos no están de acuerdo en muchas cosas?" },
      { "speaker": "user", "text": "No, actually we agree on most things. I'm tired tonight.", "translation": "No, en realidad estamos de acuerdo en casi todo. Estoy cansado esta noche." },
      { "speaker": "other", "text": "So am I. Let's talk more tomorrow.", "translation": "Yo también. Hablemos más mañana." },
      { "speaker": "user", "text": "Sounds good. I can't wait to show you my playlist.", "translation": "Suena bien. No puedo esperar a mostrarte mi lista de reproducción." }
    ]
  },
  "52": {
    "title": "Question Tags",
    "topic": "Questions",
    "explain": [
      {
        "head": "Coletillas interrogativas — regla básica",
        "body": "Una question tag es la pieza corta ('isn't it?', 'don't you?') al final de una frase para confirmar algo, parecido al '¿verdad?' del español. La regla es que siempre invierte la polaridad: frase afirmativa → tag negativa, frase negativa → tag afirmativa.",
        "note": "It's cold, isn't it? · You like coffee, don't you? · She doesn't smoke, does she?"
      },
      {
        "head": "Coletillas con auxiliares",
        "body": "Además de invertir la polaridad, la tag repite el auxiliar exacto de la frase principal: 'You can swim, can't you?' usa 'can', y 'they've arrived, haven't they?' usa 'have'. Solo cuando la frase no tiene auxiliar propio se recurre a 'do/does/did'.",
        "note": "You can swim, can't you? · They've arrived, haven't they? · You were there, weren't you?"
      },
      {
        "head": "I am → aren't I",
        "body": "'I am' es la única excepción real: lógicamente la tag negativa sería 'amn't I?', pero esa forma no existe en inglés estándar. En su lugar se usa 'aren't I?', aunque 'are' normalmente no acompaña a 'I' en ningún otro caso.",
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
        "exp": "Frase afirmativa → tag negativa: 'isn't it?'"
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
        "exp": "Frase negativa → tag afirmativa: 'does she?'"
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
        "exp": "Caso especial: 'I am' → 'aren't I?'"
      }
    ],
    "flashcards": [
      {
        "front": "Question tag rules",
        "back": "Positive → NEGATIVE tag:\n'It's cold, ISN'T IT?'\n\nNegative → POSITIVE tag:\n'She doesn't know, DOES SHE?'\n\nSpecial: I AM → AREN'T I?\n'I'm late, AREN'T I?'"
      }
    ],
    "simulatedChat": [
      { "speaker": "other", "text": "It's a beautiful morning, isn't it?", "translation": "Es una mañana hermosa, ¿verdad?" },
      { "speaker": "user", "text": "Yes, it really is. You live near the park, don't you?", "translation": "Sí, de verdad. Vives cerca del parque, ¿no?" },
      { "speaker": "other", "text": "That's right. You can't come jogging with me today, can you?", "translation": "Así es. No puedes venir a trotar conmigo hoy, ¿verdad?" },
      { "speaker": "user", "text": "Actually, I can! I'm free this morning, aren't I lucky?", "translation": "¡De hecho, sí puedo! Estoy libre esta mañana, ¿no tengo suerte?" },
      { "speaker": "other", "text": "You are! You haven't forgotten your shoes, have you?", "translation": "¡Sí que la tienes! No has olvidado tus zapatos, ¿verdad?" },
      { "speaker": "user", "text": "No, I've got them right here.", "translation": "No, los tengo justo aquí." }
    ]
  }
};
