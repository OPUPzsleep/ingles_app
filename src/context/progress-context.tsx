import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { getSrsEntry, rateSrs } from '@/lib/flashcards';
import { claveQuizTema } from '@/lib/grammar';
import { applyDailyStreak } from '@/lib/progress';
import { cargarProgreso, cargarSrs, guardarProgreso, guardarSrs } from '@/lib/storage';
import { CefrLevel } from '@/types/grammar';
import { Progress, SrsMap } from '@/types/progress';

interface ProgressContextValue extends Progress {
  loading: boolean;
  srs: SrsMap;
  markUnitDone: (num: number) => void;
  registerQuizAnswer: (correct: boolean) => void;
  registerFlashcardFlip: () => void;
  rateFlashcard: (cardId: string, rating: 0 | 1 | 2) => void;
  setUserLevel: (level: CefrLevel) => void;
  /** Guarda el resultado (porcentaje) del quiz final de un nivel; se queda con el mejor. */
  registerLevelQuiz: (level: CefrLevel, pct: number) => void;
  /** Guarda el resultado (porcentaje) del quiz de un tema dentro de un nivel; se queda con el mejor. */
  registerTopicQuiz: (level: CefrLevel, topicName: string, pct: number) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>({
    xp: 0,
    doneUnits: [],
    quizCorrect: 0,
    quizTotal: 0,
    fcReviewed: 0,
    streak: 0,
    lastDate: '',
    userLevel: 'A1',
  });
  const [srs, setSrs] = useState<SrsMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activo = true;
    (async () => {
      const [guardado, srsGuardado] = await Promise.all([cargarProgreso(), cargarSrs()]);
      if (!activo) return;
      const conRacha = applyDailyStreak(guardado);
      setProgress(conRacha);
      setSrs(srsGuardado);
      setLoading(false);
      if (conRacha !== guardado) guardarProgreso(conRacha);
    })();
    return () => {
      activo = false;
    };
  }, []);

  const persist = useCallback((next: Progress) => {
    setProgress(next);
    guardarProgreso(next);
  }, []);

  const markUnitDone = useCallback(
    (num: number) => {
      if (progress.doneUnits.includes(num)) return;
      persist({
        ...progress,
        doneUnits: [...progress.doneUnits, num],
        xp: progress.xp + 10,
      });
    },
    [progress, persist]
  );

  const registerQuizAnswer = useCallback(
    (correct: boolean) => {
      persist({
        ...progress,
        quizTotal: progress.quizTotal + 1,
        quizCorrect: progress.quizCorrect + (correct ? 1 : 0),
        xp: progress.xp + (correct ? 5 : 0),
      });
    },
    [progress, persist]
  );

  const registerFlashcardFlip = useCallback(() => {
    persist({ ...progress, fcReviewed: progress.fcReviewed + 1 });
  }, [progress, persist]);

  const rateFlashcard = useCallback(
    (cardId: string, rating: 0 | 1 | 2) => {
      const nextSrs = { ...srs, [cardId]: rateSrs(getSrsEntry(srs, cardId), rating) };
      setSrs(nextSrs);
      guardarSrs(nextSrs);
      if (rating === 2) persist({ ...progress, xp: progress.xp + 3 });
    },
    [srs, progress, persist]
  );

  const setUserLevel = useCallback(
    (level: CefrLevel) => {
      persist({ ...progress, userLevel: level });
    },
    [progress, persist]
  );

  const registerLevelQuiz = useCallback(
    (level: CefrLevel, pct: number) => {
      const anterior = progress.levelBest?.[level];
      if (anterior !== undefined && pct <= anterior) return;
      persist({ ...progress, levelBest: { ...progress.levelBest, [level]: pct } });
    },
    [progress, persist]
  );

  const registerTopicQuiz = useCallback(
    (level: CefrLevel, topicName: string, pct: number) => {
      const clave = claveQuizTema(level, topicName);
      const anterior = progress.temaBest?.[clave];
      if (anterior !== undefined && pct <= anterior) return;
      persist({ ...progress, temaBest: { ...progress.temaBest, [clave]: pct } });
    },
    [progress, persist]
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      ...progress,
      loading,
      srs,
      markUnitDone,
      registerQuizAnswer,
      registerFlashcardFlip,
      rateFlashcard,
      setUserLevel,
      registerLevelQuiz,
      registerTopicQuiz,
    }),
    [
      progress,
      loading,
      srs,
      markUnitDone,
      registerQuizAnswer,
      registerFlashcardFlip,
      rateFlashcard,
      setUserLevel,
      registerLevelQuiz,
      registerTopicQuiz,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider');
  return ctx;
}
