export interface SkillPillarCount {
  label: string;
  count: number;
}

/**
 * Splits each day's combined "A + B" skill pillar string into individual
 * pillars and counts how many completed days touch each one. Pillars that
 * differ only by case are merged, keeping the first-seen casing as the
 * display label.
 */
export function aggregateSkillPillars(
  completedDays: { skillPillar: string }[],
): SkillPillarCount[] {
  const counts = new Map<string, { label: string; count: number }>();

  for (const { skillPillar } of completedDays) {
    for (const raw of skillPillar.split("+")) {
      const label = raw.trim();
      if (!label) continue;
      const key = label.toLowerCase();
      const existing = counts.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(key, { label, count: 1 });
      }
    }
  }

  return [...counts.values()].sort((a, b) => b.count - a.count);
}
