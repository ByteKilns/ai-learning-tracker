import { describe, expect, it } from "vitest";
import {
  resolveCurrentDay,
  computeTimeRemainingMin,
  shouldAddToRegression,
  nextRegressionSprintAfter,
} from "./progress";
import type { Day, RegressionSprint } from "./types";

const day1: Day = {
  day: 1,
  phaseNumber: 1,
  phaseName: "Phase 1 — Foundations + Sprint",
  focus: "Scalars, vectors, dimensions",
  skillPillar: "AI applications",
  notes: "",
  sections: {
    learn: { durationMin: 90, items: ["a"] },
    build: { durationMin: 90, items: ["b"] },
    project: { durationMin: 60, items: ["c"] },
    revision: { durationMin: 45, items: ["d"] },
    check: { durationMin: 30, items: ["e"] },
  },
  resourceFlow: {
    startHere: { icon: "📘", label: "MML", detail: "" },
    next: null,
    practice: { icon: "💻", label: "Practice", detail: "" },
    verify: { icon: "🤖", label: "Ask ChatGPT", detail: "" },
  },
};

describe("resolveCurrentDay", () => {
  it("returns day 1 when there is no progress at all", () => {
    expect(resolveCurrentDay([])).toBe(1);
  });

  it("returns the first day whose status is not complete", () => {
    expect(
      resolveCurrentDay([
        { day: 1, status: "complete" },
        { day: 2, status: "in_progress" },
        { day: 3, status: "not_started" },
      ]),
    ).toBe(2);
  });

  it("returns the day after the last completed day when all listed days are complete", () => {
    expect(
      resolveCurrentDay([
        { day: 1, status: "complete" },
        { day: 2, status: "complete" },
      ]),
    ).toBe(3);
  });
});

describe("computeTimeRemainingMin", () => {
  it("sums durations of sections not yet marked done", () => {
    const remaining = computeTimeRemainingMin(day1, {
      learn: true,
      build: false,
      project: false,
      revision: true,
      check: false,
    });
    // build(90) + project(60) + check(30) = 180
    expect(remaining).toBe(180);
  });

  it("returns 0 when every section is done", () => {
    const remaining = computeTimeRemainingMin(day1, {
      learn: true,
      build: true,
      project: true,
      revision: true,
      check: true,
    });
    expect(remaining).toBe(0);
  });
});

describe("shouldAddToRegression", () => {
  it("is true for confidence 1 or 2", () => {
    expect(shouldAddToRegression(1)).toBe(true);
    expect(shouldAddToRegression(2)).toBe(true);
  });

  it("is false for confidence 3, 4, 5, or null", () => {
    expect(shouldAddToRegression(3)).toBe(false);
    expect(shouldAddToRegression(4)).toBe(false);
    expect(shouldAddToRegression(5)).toBe(false);
    expect(shouldAddToRegression(null)).toBe(false);
  });
});

describe("nextRegressionSprintAfter", () => {
  const sprints: RegressionSprint[] = [
    { sprint: 1, day: 7, whatToRetrieve: "", blankPageReconstruction: "", integrationDrill: "", passCondition: "" },
    { sprint: 2, day: 14, whatToRetrieve: "", blankPageReconstruction: "", integrationDrill: "", passCondition: "" },
    { sprint: 3, day: 21, whatToRetrieve: "", blankPageReconstruction: "", integrationDrill: "", passCondition: "" },
  ];

  it("returns the first sprint whose day is after the completed day", () => {
    expect(nextRegressionSprintAfter(sprints, 5)?.sprint).toBe(1);
    expect(nextRegressionSprintAfter(sprints, 7)?.sprint).toBe(2);
    expect(nextRegressionSprintAfter(sprints, 10)?.sprint).toBe(2);
  });

  it("returns null when there is no sprint after the completed day", () => {
    expect(nextRegressionSprintAfter(sprints, 21)).toBeNull();
  });
});
