import type { Day, RegressionSprint, SectionKey } from "./types";

export interface DayProgressSummary {
  day: number;
  status: "not_started" | "in_progress" | "complete";
}

export function resolveCurrentDay(progress: DayProgressSummary[]): number {
  if (progress.length === 0) return 1;
  const sorted = [...progress].sort((a, b) => a.day - b.day);
  const firstIncomplete = sorted.find((p) => p.status !== "complete");
  if (firstIncomplete) return firstIncomplete.day;
  return sorted[sorted.length - 1].day + 1;
}

export function computeTimeRemainingMin(
  day: Day,
  sectionsDone: Record<SectionKey, boolean>,
): number {
  const keys: SectionKey[] = ["learn", "build", "project", "revision", "check"];
  return keys.reduce((total, key) => {
    if (sectionsDone[key]) return total;
    return total + day.sections[key].durationMin;
  }, 0);
}

export function shouldAddToRegression(confidence: number | null): boolean {
  return confidence !== null && confidence <= 2;
}

export function nextRegressionSprintAfter(
  sprints: RegressionSprint[],
  completedDay: number,
): RegressionSprint | null {
  const sorted = [...sprints].sort((a, b) => a.day - b.day);
  return sorted.find((s) => s.day > completedDay) ?? null;
}
