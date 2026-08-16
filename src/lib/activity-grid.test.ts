import { describe, expect, it } from "vitest";
import { buildActivityWeeks } from "./activity-grid";

describe("buildActivityWeeks", () => {
  it("returns a single week containing today when there are no completions", () => {
    const today = new Date("2026-08-16T00:00:00Z"); // a Sunday
    const weeks = buildActivityWeeks([], today);
    expect(weeks.length).toBeGreaterThan(0);
    const allDates = weeks.flat();
    expect(allDates.some((d) => d.date === "2026-08-16")).toBe(true);
    expect(allDates.every((d) => d.count === 0)).toBe(true);
  });

  it("counts multiple completions on the same date", () => {
    const today = new Date("2026-08-16T00:00:00Z");
    const weeks = buildActivityWeeks(
      ["2026-08-10", "2026-08-10", "2026-08-12"],
      today,
    );
    const allDates = weeks.flat();
    const aug10 = allDates.find((d) => d.date === "2026-08-10");
    const aug12 = allDates.find((d) => d.date === "2026-08-12");
    expect(aug10?.count).toBe(2);
    expect(aug12?.count).toBe(1);
  });

  it("organizes dates into 7-day weeks starting on Sunday", () => {
    const today = new Date("2026-08-16T00:00:00Z"); // Sunday
    const weeks = buildActivityWeeks(["2026-08-01"], today);
    for (const week of weeks) {
      expect(week.length).toBe(7);
    }
  });

  it("spans from the earliest completion date through today", () => {
    const today = new Date("2026-08-16T00:00:00Z");
    const weeks = buildActivityWeeks(["2026-07-01"], today);
    const allDates = weeks.flat().map((d) => d.date);
    expect(allDates[0] <= "2026-07-01").toBe(true);
    expect(allDates[allDates.length - 1] >= "2026-08-16").toBe(true);
  });
});
