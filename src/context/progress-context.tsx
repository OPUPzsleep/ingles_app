import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { getSrsEntry, rateSrs } from '@/lib/flashcards';
import { applyDailyStreak } from '@/lib/progress';
import { cargarProgreso, cargarSrs, guardarProgreso, guardarSrs } from '@/lib/storage';
import { Progress, SrsMap } from '@/types/progress';

interface ProgressContextValue extends Progress {
  loading: boolean;
  srs: SrsMap;
  markUnitDone: (num: number) => void;
  registerQuizAnswer: (correct: boolean) => void;
  registerFlashcardFlip: () => void;
  rateFlashcard: (cardId: string, rating: 0 | 1 | 2) => void;
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

  const value = useMemo<ProgressContextValue>(
    () => ({
      ...progress,
      loading,
      srs,
      markUnitDone,
      registerQuizAnswer,
      registerFlashcardFlip,
      rateFlashcard,
    }),
    [progress, loading, srs, markUnitDone, registerQuizAnswer, registerFlashcardFlip, rateFlashcard]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider');
  return ctx;
}
