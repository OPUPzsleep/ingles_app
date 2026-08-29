import { Progress } from '@/types/progress';

export function applyDailyStreak(progress: Progress): Progress {
  const today = new Date().toDateString();
  if (progress.lastDate === today) return progress;

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const streak = progress.lastDate === yesterday ? progress.streak + 1 : 1;
  return { ...progress, streak, lastDate: today };
}
