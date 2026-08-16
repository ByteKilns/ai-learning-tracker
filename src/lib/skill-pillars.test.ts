import { describe, expect, it } from "vitest";
import { aggregateSkillPillars } from "./skill-pillars";

describe("aggregateSkillPillars", () => {
  it("splits combined pillar strings and counts each pillar separately", () => {
    const result = aggregateSkillPillars([
      { skillPillar: "AI applications + Software engineering" },
      { skillPillar: "AI applications + ML foundations" },
    ]);
    const byLabel = Object.fromEntries(result.map((r) => [r.label, r.count]));
    expect(byLabel["AI applications"]).toBe(2);
    expect(byLabel["Software engineering"]).toBe(1);
    expect(byLabel["ML foundations"]).toBe(1);
  });

  it("merges pillars that differ only by case, keeping the first-seen casing", () => {
    const result = aggregateSkillPillars([
      { skillPillar: "Security" },
      { skillPillar: "security" },
      { skillPillar: "security" },
    ]);
    expect(result).toEqual([{ label: "Security", count: 3 }]);
  });

  it("sorts results by count descending", () => {
    const result = aggregateSkillPillars([
      { skillPillar: "RAG" },
      { skillPillar: "Agents" },
      { skillPillar: "Agents" },
      { skillPillar: "Agents" },
    ]);
    expect(result.map((r) => r.label)).toEqual(["Agents", "RAG"]);
  });

  it("returns an empty array for no completed days", () => {
    expect(aggregateSkillPillars([])).toEqual([]);
  });
});
