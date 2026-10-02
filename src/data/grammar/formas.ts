import { FORMAS_CURSO_A1 } from '@/data/grammar/curso-a1';
import { aux, f, fl, neg, resto, suj, verbo } from '@/data/grammar/formulas';
import type { FormasUnidad } from '@/types/grammar';

// Las tres formas (afirmativa, negativa y pregunta) de las unidades de verbos, para tenerlas siempre a la vista.

const WILL: FormasUnidad = {
  afirmativa: {
    formulas: [f(suj('Subject'), aux('will'), verbo('verb'))],
    ejemplos: [
      ["I'll help you.", 'Yo te ayudaré.'],
      ['She will call you tomorrow.', 'Ella te llamará mañana.'],
    ],
  },
  negativa: {
    formulas: [f(suj('Subject'), neg("won't"), verbo('verb'))],
    ejemplos: [
      ["I won't tell anyone.", 'No se lo diré a nadie.'],
      ["It won't work.", 'Eso no va a funcionar.'],
    ],
  },
  pregunta: {
    formulas: [f(aux('Will'), suj('subject'), verbo('verb'))],
    ejemplos: [
      ['Will you help me?', '¿Me ayudarás?'],
      ['What will she say?', '¿Qué dirá ella?'],
    ],
  },
  nota: "will es igual para todas las personas (sin -s). Contracciones: I'll · you'll · won't (= will not). Respuestas cortas: Yes, I will. / No, I won't. Shall se usa con I/we para ofrecer o sugerir: Shall I open the window?",
  ojo: "Después de will va el verbo en base: 'she will go', no 'she will goes' ni 'she will to go'.",
};

/** Las formas de las unidades de A2 a B2, por número de unidad. */
const FORMAS_DEL_LIBRO: Record<number, FormasUnidad> = {
  // ─── Present & Past ───
  15: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('was / were'), verbo('verb-ing'))],
      ejemplos: [
        ['I was sleeping.', 'Yo estaba durmiendo.'],
        ['They were playing outside.', 'Ellos estaban jugando afuera.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("wasn't / weren't"), verbo('verb-ing'))],
      ejemplos: [
        ["I wasn't sleeping.", 'Yo no estaba durmiendo.'],
        ["We weren't working.", 'No estábamos trabajando.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Was / Were'), suj('subject'), verbo('verb-ing'))],
      ejemplos: [
        ['Were you sleeping?', '¿Estabas durmiendo?'],
        ['What was he doing?', '¿Qué estaba haciendo él?'],
      ],
    },
    nota: "was con I/he/she/it; were con you/we/they. Respuestas cortas: Yes, I was. / No, they weren't.",
    ojo: "No mezcles con did: 'Was she sleeping?', no 'Did she was sleeping?'.",
  },

  // ─── Present Perfect ───
  46: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('have / has'), verbo('past participle'))],
      ejemplos: [
        ['I have finished my homework.', 'He terminado mi tarea.'],
        ['She has lived here for ten years.', 'Ella ha vivido aquí por diez años.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("haven't / hasn't"), verbo('past participle'))],
      ejemplos: [
        ["I haven't finished yet.", 'Todavía no he terminado.'],
        ["He hasn't called me.", 'Él no me ha llamado.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Have / Has'), suj('subject'), verbo('past participle'))],
      ejemplos: [
        ['Have you finished?', '¿Has terminado?'],
        ['Has she ever been to Peru?', '¿Ella ha estado alguna vez en Perú?'],
      ],
    },
    nota: "Contracciones: I've · she's (= has) · haven't · hasn't. Respuestas cortas: Yes, I have. / No, she hasn't.",
    ojo: "Tras have/has va el participio: 'I have seen', no 'I have saw'. Y have/has aquí es el auxiliar 'haber', no 'tener'.",
  },
  48: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('have / has'), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ['I have been working all day.', 'He estado trabajando todo el día.'],
        ['She has been waiting for an hour.', 'Ella lleva una hora esperando.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("haven't / hasn't"), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ["I haven't been sleeping well.", 'No he estado durmiendo bien.'],
        ["He hasn't been studying.", 'Él no ha estado estudiando.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Have / Has'), suj('subject'), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ['Have you been waiting long?', '¿Llevas mucho rato esperando?'],
        ['How long has she been living here?', '¿Cuánto tiempo lleva ella viviendo aquí?'],
      ],
    },
    nota: 'Siempre lleva been entre have/has y el verbo con -ing. Respuestas cortas: Yes, I have. / No, she hasn\'t.',
    ojo: "'¿Cuánto tiempo llevas…?' se dice 'How long have you been…?', no 'How long are you…?'.",
  },

  // ─── Past Perfect ───
  55: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('had'), verbo('past participle'))],
      ejemplos: [
        ['She had left before I arrived.', 'Ella se había ido antes de que yo llegara.'],
        ['We had already eaten.', 'Ya habíamos comido.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("hadn't"), verbo('past participle'))],
      ejemplos: [
        ["He hadn't seen it before.", 'Él no lo había visto antes.'],
        ["I hadn't finished when she called.", 'No había terminado cuando ella llamó.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Had'), suj('subject'), verbo('past participle'))],
      ejemplos: [
        ['Had you met her before?', '¿La habías conocido antes?'],
        ['Had they left when you arrived?', '¿Ya se habían ido cuando llegaste?'],
      ],
    },
    nota: "had es igual para todas las personas. Contracciones: I'd · she'd · hadn't. Respuestas cortas: Yes, I had. / No, he hadn't.",
    ojo: "'d puede ser had o would: si después viene un participio (I'd left), es had; si viene un verbo en base (I'd go), es would.",
  },
  116: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('had'), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ['I had been waiting for an hour.', 'Llevaba una hora esperando.'],
        ['They had been working all day.', 'Habían estado trabajando todo el día.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("hadn't"), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ["She hadn't been sleeping well.", 'Ella no había estado durmiendo bien.'],
        ["We hadn't been waiting long.", 'No llevábamos mucho tiempo esperando.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Had'), suj('subject'), aux('been'), verbo('verb-ing'))],
      ejemplos: [
        ['Had you been waiting long?', '¿Llevabas mucho rato esperando?'],
        ['How long had he been working there?', '¿Cuánto tiempo llevaba él trabajando allí?'],
      ],
    },
    nota: 'Es la versión en pasado del present perfect continuous: had been + verbo con -ing. Respuestas cortas: Yes, I had. / No, I hadn\'t.',
    ojo: "No lleva have/has: es 'had been', no 'have been' (eso ya es presente).",
  },
  19: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('used to'), verbo('verb'))],
      ejemplos: [
        ['I used to smoke.', 'Antes fumaba.'],
        ['We used to live in Lima.', 'Antes vivíamos en Lima.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("didn't"), aux('use to'), verbo('verb'))],
      ejemplos: [
        ["I didn't use to like coffee.", 'Antes no me gustaba el café.'],
        ["She didn't use to work here.", 'Antes ella no trabajaba aquí.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Did'), suj('subject'), aux('use to'), verbo('verb'))],
      ejemplos: [
        ['Did you use to play soccer?', '¿Antes jugabas fútbol?'],
        ['Where did they use to live?', '¿Dónde vivían antes?'],
      ],
    },
    nota: "Solo existe en pasado (para el presente se usa el present simple). Con did / didn't la -d desaparece: use to, no used to. Respuestas cortas: Yes, I did. / No, I didn't.",
    ojo: "'Used to do' (costumbre pasada) no es lo mismo que 'be used to doing' (estar acostumbrado): I'm used to getting up early.",
  },

  // ─── Future ───
  17: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('am / is / are'), aux('going to'), verbo('verb'))],
      ejemplos: [
        ["I'm going to study tonight.", 'Voy a estudiar esta noche.'],
        ["It's going to rain.", 'Va a llover.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), aux('am / is / are'), neg('not'), aux('going to'), verbo('verb'))],
      ejemplos: [
        ["I'm not going to buy it.", 'No voy a comprarlo.'],
        ["They aren't going to win.", 'Ellos no van a ganar.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Am / Is / Are'), suj('subject'), aux('going to'), verbo('verb'))],
      ejemplos: [
        ['Are you going to come?', '¿Vas a venir?'],
        ['What is she going to do?', '¿Qué va a hacer ella?'],
      ],
    },
    nota: "Contracciones: I'm not · isn't · aren't. Respuestas cortas: Yes, I am. / No, I'm not. En el habla informal, going to suena 'gonna'.",
    ojo: "El verbo tras going to va en base: 'going to eat', no 'going to eating' ni 'going to to eat'.",
  },
  18: WILL,
  53: WILL,
  114: {
    afirmativa: {
      formulas: [
        fl('Continuous', suj('Subject'), aux('will be'), verbo('verb-ing')),
        fl('Perfect', suj('Subject'), aux('will have'), verbo('past participle')),
      ],
      ejemplos: [
        ["This time tomorrow I'll be flying to Lima.", 'Mañana a esta hora estaré volando a Lima.'],
        ['By June she will have graduated.', 'Para junio ella ya se habrá graduado.'],
      ],
    },
    negativa: {
      formulas: [
        fl('Continuous', suj('Subject'), neg("won't be"), verbo('verb-ing')),
        fl('Perfect', suj('Subject'), neg("won't have"), verbo('past participle')),
      ],
      ejemplos: [
        ["I won't be working tomorrow.", 'Mañana no estaré trabajando.'],
        ["They won't have finished by Friday.", 'Para el viernes no habrán terminado.'],
      ],
    },
    pregunta: {
      formulas: [
        fl('Continuous', aux('Will'), suj('subject'), aux('be'), verbo('verb-ing')),
        fl('Perfect', aux('Will'), suj('subject'), aux('have'), verbo('past participle')),
      ],
      ejemplos: [
        ['Will you be using the computer tonight?', '¿Vas a estar usando la computadora esta noche?'],
        ['Will she have arrived by noon?', '¿Habrá llegado ella para el mediodía?'],
      ],
    },
    nota: "Contracciones: I'll be · she'll have · won't. Respuestas cortas: Yes, I will. / No, I won't.",
    ojo: "El futuro perfecto casi siempre lleva un límite de tiempo (by Friday, by then): 'will have' + participio.",
  },

  // ─── Modal Verbs ───
  20: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('can / could'), verbo('verb'))],
      ejemplos: [
        ['I can swim.', 'Yo sé nadar.'],
        ['She could read at four.', 'Ella sabía leer a los cuatro años.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("can't / couldn't"), verbo('verb'))],
      ejemplos: [
        ["I can't come tonight.", 'No puedo venir esta noche.'],
        ["He couldn't open the door.", 'Él no pudo abrir la puerta.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Can / Could'), suj('subject'), verbo('verb'))],
      ejemplos: [
        ['Can you help me?', '¿Puedes ayudarme?'],
        ['Could she swim as a child?', '¿Ella sabía nadar de niña?'],
      ],
    },
    nota: "can / could no cambian con la persona (sin -s) y el verbo va en base, sin to. Se escribe can't o cannot (junto). Para otros tiempos se usa be able to: 'I'll be able to', 'I haven't been able to'.",
    ojo: "'She cans' ✗ y 'can to swim' ✗ → 'She can swim' ✓.",
  },
  117: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('could have'), verbo('past participle'))],
      ejemplos: [
        ['I could have gone.', 'Podría haber ido.'],
        ['You could have called me.', 'Podrías haberme llamado.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("couldn't have"), verbo('past participle'))],
      ejemplos: [
        ["She couldn't have known.", 'Ella no pudo haberlo sabido.'],
        ["It couldn't have been him.", 'No pudo haber sido él.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Could'), suj('subject'), aux('have'), verbo('past participle'))],
      ejemplos: [
        ['Could he have forgotten?', '¿Es posible que se haya olvidado?'],
        ['Could they have missed the bus?', '¿Es posible que hayan perdido el autobús?'],
      ],
    },
    nota: 'could have + participio = algo que era posible pero no pasó (y, en negativa, algo imposible en el pasado). Es igual para todas las personas.',
    ojo: "El participio no cambia: 'could have gone', no 'could have went'.",
  },
  56: {
    afirmativa: {
      formulas: [
        fl('Ahora', suj('Subject'), aux('must'), verbo('be / verb')),
        fl('Pasado', suj('Subject'), aux('must have'), verbo('past participle')),
      ],
      ejemplos: [
        ['She must be at work.', 'Seguro que ella está en el trabajo.'],
        ['They must have left already.', 'Seguro que ya se fueron.'],
      ],
    },
    negativa: {
      formulas: [
        fl('Ahora', suj('Subject'), neg("can't"), verbo('be / verb')),
        fl('Pasado', suj('Subject'), neg("can't have"), verbo('past participle')),
      ],
      ejemplos: [
        ["He can't be serious.", 'No puede estar hablando en serio.'],
        ["She can't have seen us.", 'No puede habernos visto.'],
      ],
    },
    pregunta: {
      formulas: [
        fl('Lo más común', resto('Do you think'), suj('subject'), verbo('verb…')),
        fl('Con could', aux('Could'), suj('subject'), verbo('be / have + participle')),
      ],
      ejemplos: [
        ['Do you think she is at work?', '¿Crees que ella está en el trabajo?'],
        ['Could he be at home?', '¿Podría estar en casa?'],
      ],
    },
    nota: "Para deducir: must = 'seguro que sí' y can't = 'seguro que no'. Para preguntar se evita must: se usa 'Do you think…?' o could.",
    ojo: "'Seguro que no' es can't, no mustn't: mustn't significa prohibición ('No debes').",
  },
  57: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('may / might'), verbo('verb'))],
      ejemplos: [
        ['It may rain later.', 'Puede que llueva más tarde.'],
        ['She might be late.', 'Puede que ella llegue tarde.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg('may not / might not'), verbo('verb'))],
      ejemplos: [
        ['I may not go to the party.', 'Puede que no vaya a la fiesta.'],
        ['They might not know.', 'Puede que ellos no lo sepan.'],
      ],
    },
    pregunta: {
      formulas: [
        fl('Pedir permiso', aux('May'), suj('I / we'), verbo('verb')),
        fl('Preguntar por posibilidad', resto('Do you think'), suj('subject'), aux('might'), verbo('verb')),
      ],
      ejemplos: [
        ['May I come in?', '¿Puedo pasar?'],
        ['Do you think it might rain?', '¿Crees que podría llover?'],
      ],
    },
    nota: "may / might no cambian con la persona y el verbo va en base, sin to. Para preguntar por posibilidad no se usa may/might: se dice 'Do you think…?'. May I…? pide permiso con cortesía.",
    ojo: "No existe 'mayn't' en el uso normal: se dice may not / might not.",
  },
  21: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('have to / has to'), verbo('verb'))],
      ejemplos: [
        ['I have to work tomorrow.', 'Tengo que trabajar mañana.'],
        ['She has to wake up early.', 'Ella tiene que despertarse temprano.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("don't / doesn't"), aux('have to'), verbo('verb'))],
      ejemplos: [
        ["You don't have to come.", 'No tienes que venir (no es obligatorio).'],
        ["He doesn't have to pay.", 'Él no tiene que pagar.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Do / Does'), suj('subject'), aux('have to'), verbo('verb'))],
      ejemplos: [
        ['Do I have to go?', '¿Tengo que ir?'],
        ['Does she have to work on Sunday?', '¿Ella tiene que trabajar el domingo?'],
      ],
    },
    nota: "En pasado: had to · didn't have to · Did you have to…? Respuestas cortas: Yes, I do. / No, she doesn't.",
    ojo: "don't have to = no hace falta; mustn't = está prohibido. 'You don't have to smoke here' no significa 'prohibido fumar'.",
  },
  22: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('should'), verbo('verb'))],
      ejemplos: [
        ['You should rest.', 'Deberías descansar.'],
        ['She should see a doctor.', 'Ella debería ir al médico.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("shouldn't"), verbo('verb'))],
      ejemplos: [
        ["You shouldn't eat so much.", 'No deberías comer tanto.'],
        ["He shouldn't drive when he's tired.", 'Él no debería manejar cuando está cansado.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Should'), suj('subject'), verbo('verb'))],
      ejemplos: [
        ['Should I call him?', '¿Debería llamarlo?'],
        ['What should we do?', '¿Qué deberíamos hacer?'],
      ],
    },
    nota: "should no cambia con la persona y el verbo va en base, sin to. Respuestas cortas: Yes, you should. / No, you shouldn't. Es un consejo, más suave que must.",
    ojo: "'You should to go' ✗ → 'You should go' ✓.",
  },
  60: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('should have'), verbo('past participle'))],
      ejemplos: [
        ['I should have called.', 'Debí haber llamado.'],
        ['You should have studied more.', 'Deberías haber estudiado más.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("shouldn't have"), verbo('past participle'))],
      ejemplos: [
        ["You shouldn't have said that.", 'No debiste haber dicho eso.'],
        ["We shouldn't have waited.", 'No deberíamos haber esperado.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Should'), suj('subject'), aux('have'), verbo('past participle'))],
      ejemplos: [
        ['Should we have left earlier?', '¿Deberíamos haber salido antes?'],
        ['What should I have done?', '¿Qué debí haber hecho?'],
      ],
    },
    nota: 'should have + participio = crítica o arrepentimiento por algo pasado. Es igual para todas las personas. Respuestas cortas: Yes, you should have. / No, you shouldn\'t have.',
    ojo: "Se pronuncia 'shouldve', pero se escribe should have, nunca 'should of'.",
  },
  62: {
    afirmativa: {
      formulas: [f(suj('Subject'), aux('would'), verbo('verb'))],
      ejemplos: [
        ['I would help you.', 'Yo te ayudaría.'],
        ['She would visit us every summer.', 'Ella nos visitaba cada verano.'],
      ],
    },
    negativa: {
      formulas: [f(suj('Subject'), neg("wouldn't"), verbo('verb'))],
      ejemplos: [
        ["I wouldn't do that.", 'Yo no haría eso.'],
        ["He wouldn't tell me.", 'Él no quiso decírmelo.'],
      ],
    },
    pregunta: {
      formulas: [f(aux('Would'), suj('subject'), verbo('verb'))],
      ejemplos: [
        ['Would you like some tea?', '¿Quieres un té?'],
        ['What would you do?', '¿Qué harías?'],
      ],
    },
    nota: "'d = would (I'd, she'd). would no cambia con la persona y el verbo va en base, sin to. Respuestas cortas: Yes, I would. / No, I wouldn't.",
    ojo: "Después de if no se usa would: 'If I had money, I would buy it' ✓, no 'If I would have money' ✗.",
  },

  // ─── Passive Voice ───
  65: {
    afirmativa: {
      formulas: [
        fl('Presente', suj('Subject'), aux('am / is / are'), verbo('past participle')),
        fl('Pasado', suj('Subject'), aux('was / were'), verbo('past participle')),
      ],
      ejemplos: [
        ['English is spoken here.', 'Aquí se habla inglés.'],
        ['The letter was written by Tom.', 'La carta fue escrita por Tom.'],
      ],
    },
    negativa: {
      formulas: [
        fl('Presente', suj('Subject'), aux('am / is / are'), neg('not'), verbo('past participle')),
        fl('Pasado', suj('Subject'), aux('was / were'), neg('not'), verbo('past participle')),
      ],
      ejemplos: [
        ["The door isn't locked.", 'La puerta no está cerrada con llave.'],
        ["The window wasn't broken.", 'La ventana no se rompió.'],
      ],
    },
    pregunta: {
      formulas: [
        fl('Presente', aux('Am / Is / Are'), suj('subject'), verbo('past participle')),
        fl('Pasado', aux('Was / Were'), suj('subject'), verbo('past participle')),
      ],
      ejemplos: [
        ['Is the room cleaned every day?', '¿Se limpia la habitación todos los días?'],
        ['When was it built?', '¿Cuándo se construyó?'],
      ],
    },
    nota: "Solo cambia be (am / is / are / was / were); el participio se queda igual. Para decir quién hizo la acción se añade by: 'written by Tom'.",
    ojo: "El español usa 'se' (Se habla inglés); el inglés usa be + participio: 'English is spoken'.",
  },
};

/**
 * Por número de unidad (una, o varias cuando la unidad tiene más de una estructura). Las unidades que no están aquí
 * (no son de verbos) no muestran este bloque. Las unidades 1–12 son las del curso A1 (`FORMAS_CURSO_A1`).
 */
export const FORMAS_UNIDAD: Record<number, FormasUnidad | FormasUnidad[]> = {
  ...FORMAS_DEL_LIBRO,
  ...FORMAS_CURSO_A1,
};
