import { UNIDADES_CURSO } from '@/data/grammar/curso';
import { Unit } from '@/types/grammar';

import { presentAndPastUnits } from './present-and-past';
import { presentPerfectUnits } from './present-perfect';
import { futureUnits } from './future';
import { pastPerfectUnits } from './past-perfect';
import { modalVerbsUnits } from './modal-verbs';
import { conditionalsUnits } from './conditionals';
import { passiveVoiceUnits } from './passive-voice';
import { reportedSpeechUnits } from './reported-speech';
import { questionsUnits } from './questions';
import { ingAndToUnits } from './ing-and-to';
import { articlesAndNounsUnits } from './articles-and-nouns';
import { pronounsUnits } from './pronouns';
import { relativeClausesUnits } from './relative-clauses';
import { adjectivesAndAdverbsUnits } from './adjectives-and-adverbs';
import { conjunctionsUnits } from './conjunctions';
import { prepositionsUnits } from './prepositions';
import { phrasalVerbsUnits } from './phrasal-verbs';

/** Todas las unidades por número: las del curso A1 (1–12, `UNIDADES_CURSO`) y las de A2 a B2 (13–145), que vienen de estos archivos. */
export const UNITS: Record<number, Unit> = {
  ...presentAndPastUnits,
  ...presentPerfectUnits,
  ...futureUnits,
  ...pastPerfectUnits,
  ...modalVerbsUnits,
  ...conditionalsUnits,
  ...passiveVoiceUnits,
  ...reportedSpeechUnits,
  ...questionsUnits,
  ...ingAndToUnits,
  ...articlesAndNounsUnits,
  ...pronounsUnits,
  ...relativeClausesUnits,
  ...adjectivesAndAdverbsUnits,
  ...conjunctionsUnits,
  ...prepositionsUnits,
  ...phrasalVerbsUnits,
  ...UNIDADES_CURSO,
};
