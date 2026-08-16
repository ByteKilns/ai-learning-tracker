export interface ActivityCell {
  date: string; // YYYY-MM-DD
  count: number;
}

function toDateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function startOfWeek(d: Date): Date {
  const copy = new Date(d);
  copy.setUTCDate(copy.getUTCDate() - copy.getUTCDay());
  return copy;
}

/**
 * Builds a GitHub-style contribution grid: weeks (columns) of 7 days
 * (Sunday-first rows), spanning from the earliest completion date's
 * week through today's week.
 */
export function buildActivityWeeks(
  completedDates: string[],
  today: Date,
): ActivityCell[][] {
  const counts = new Map<string, number>();
  for (const raw of completedDates) {
    const key = raw.slice(0, 10);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const todayKey = toDateKey(today);
  const earliestKey =
    completedDates.length > 0
      ? [...counts.keys()].sort()[0]
      : todayKey;

  const rangeStart = startOfWeek(new Date(`${earliestKey}T00:00:00Z`));
  const rangeEnd = startOfWeek(new Date(`${todayKey}T00:00:00Z`));

  const weeks: ActivityCell[][] = [];
  const cursor = new Date(rangeStart);
  while (cursor <= rangeEnd) {
    const week: ActivityCell[] = [];
    for (let i = 0; i < 7; i++) {
      const key = toDateKey(cursor);
      week.push({ date: key, count: counts.get(key) ?? 0 });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}
