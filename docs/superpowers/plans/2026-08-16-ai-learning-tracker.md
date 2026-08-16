# AI Engineering Learning Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 75-day Excel tracker with a Next.js + MongoDB dashboard that answers "what should I do right now?" and tracks daily progress.

**Architecture:** Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui, deployed to Vercel. Curriculum content (75 days, phases, projects, resources, regression sprints) is static TypeScript data generated once from the source Excel file by committed Node scripts. Progress (checkboxes, confidence, notes, regression-sprint auto-additions) lives in MongoDB Atlas via the native driver and Server Actions — no separate REST layer, no auth.

**Tech Stack:** Next.js 15, TypeScript, Tailwind, shadcn/ui, MongoDB (native driver), Vitest, xlsx (SheetJS, dev-only for the extraction script).

**Reference spec:** `docs/superpowers/specs/2026-08-16-ai-learning-tracker-design.md`

---

## Source data facts (confirmed by inspecting the raw XLSX XML)

- Sheet **"75-Day Tracker"**, columns A–P, rows 2–76 (75 days): `Day, Phase, Focus/Deliverable, Theory/Learn, Code/Build, Project Work, Revision/Regression, Resource, Primary Skill Pillar, Learn✓, Build✓, Explain✓, Revise✓, Status, Confidence 1-5, Notes`.
- Sheet **"Projects"**, columns A–D, rows 2–5: `Project, When, Purpose, Evolution/Evidence`.
- Sheet **"Study System"**, columns A–B, rows 2–9: `Component, How to use it`.
- Sheet **"Books & Resources"**, columns A–D, rows 2–9: `Resource, Role, When to use, Notes`.
- Sheet **"Regression Sprints"**, columns A–F, rows 2–11: `Sprint, Day, What to retrieve, Blank-page reconstruction, Integration/failure drill, Pass condition`.
- Phases (11 total, confirmed from the Phase column across all 75 rows):
  1. Days 1–7: "Phase 1 — Foundations + Sprint"
  2. Days 8–14: "Phase 2 — Classical ML + Evals"
  3. Days 15–21: "Phase 3 — Deep Learning + PyTorch"
  4. Days 22–28: "Phase 4 — Transformers + Historical Project #1"
  5. Days 29–35: "Phase 5 — LLMs + Coding Agents"
  6. Days 36–42: "Phase 6 — RAG + Evaluation"
  7. Days 43–49: "Phase 7 — LangGraph + Agents + Agent Skills"
  8. Days 50–56: "Phase 8 — Production AI + Software Engineering"
  9. Days 57–63: "Phase 9 — Evals + Product + AI-Native Engineering"
  10. Days 64–70: "Phase 10 — Historical Projects + Capstone Build"
  11. Days 71–75: "Phase 11 — Final Defense + Market Readiness"

---

## File Structure

```
ai-learning-tracker/
  scripts/
    extract-excel.mjs        # xlsx -> scripts/raw-curriculum.json
    generate-curriculum.mjs  # raw-curriculum.json -> src/data/*.ts
  src/
    lib/
      mongodb.ts              # cached Mongo client singleton
      types.ts                # shared TS types
      progress.ts             # pure logic: resolveCurrentDay, timeRemaining, shouldAddToRegression, nextRegressionSprintAfter
      progress.test.ts        # vitest for the above
      actions.ts              # Server Actions (get/upsert progress, completeDay)
    data/
      days.ts                 # 75 enriched Day objects (generated, committed)
      phases.ts                # 11 phases (generated, committed)
      projects.ts              # generated, committed
      studySystem.ts           # generated, committed
      resources.ts              # generated, committed
      regressionSprints.ts      # generated, committed
    components/
      Nav.tsx
      DayChecklist.tsx
      ProgressRing.tsx
      PhaseTimeline.tsx
      RegressionSprintCard.tsx
      ResourceFlowCard.tsx
      CompleteDayDialog.tsx
    app/
      layout.tsx
      globals.css
      page.tsx                 # redirects to /dashboard
      dashboard/page.tsx
      day/[id]/page.tsx
      roadmap/page.tsx
      resources/page.tsx
      projects/page.tsx
      progress/page.tsx
  .env.example
  README.md
```

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: entire project via `create-next-app` (package.json, tsconfig.json, next.config.ts, tailwind config, src/app/*)

- [ ] **Step 1: Scaffold with create-next-app**

Run from the repo root (`c:\Users\nirja\OneDrive\Documents\ai-learning-tracker`):

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack
```

When prompted about a non-empty directory, confirm yes (the folder only has the source PDF/XLSX/docs so far).

- [ ] **Step 2: Install runtime and dev dependencies**

```bash
npm install mongodb
npm install -D xlsx vitest
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```

- [ ] **Step 4: Add the shadcn components this app needs**

```bash
npx shadcn@latest add button card checkbox progress badge tabs dialog separator textarea
```

- [ ] **Step 5: Verify the dev server boots**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000
kill %1
```

Expected: `200`.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js app with Tailwind, shadcn/ui, mongodb, vitest"
```

---

### Task 2: Extract raw Excel data to JSON

**Files:**
- Create: `scripts/extract-excel.mjs`

- [ ] **Step 1: Write the extraction script**

```js
// scripts/extract-excel.mjs
import xlsx from "xlsx";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(__dirname, "..", "AI_ML_LLM_75_Day_Master_Plan.xlsx");
const OUT = path.join(__dirname, "raw-curriculum.json");

const wb = xlsx.readFile(SOURCE);

function sheetRows(name) {
  const ws = wb.Sheets[name];
  if (!ws) throw new Error(`Sheet not found: ${name}`);
  return xlsx.utils.sheet_to_json(ws, { defval: "" });
}

const tracker = sheetRows("75-Day Tracker").map((r) => ({
  day: Number(r["Day"]),
  phase: String(r["Phase"]).trim(),
  focus: String(r["Focus / Deliverable"]).trim(),
  theoryLearn: String(r["Theory / Learn"]).trim(),
  codeBuild: String(r["Code / Build"]).trim(),
  projectWork: String(r["Project Work"]).trim(),
  revision: String(r["Revision / Regression"]).trim(),
  resource: String(r["Resource"]).trim(),
  skillPillar: String(r["Primary Skill Pillar"]).trim(),
  notes: String(r["Notes"]).trim(),
}));

const projects = sheetRows("Projects").map((r) => ({
  project: String(r["Project"]).trim(),
  when: String(r["When"]).trim(),
  purpose: String(r["Purpose"]).trim(),
  evolution: String(r["Evolution / Evidence"]).trim(),
}));

const studySystem = sheetRows("Study System").map((r) => ({
  component: String(r["Component"]).trim(),
  howToUse: String(r["How to use it"]).trim(),
}));

const resources = sheetRows("Books & Resources").map((r) => ({
  resource: String(r["Resource"]).trim(),
  role: String(r["Role"]).trim(),
  whenToUse: String(r["When to use"]).trim(),
  notes: String(r["Notes"]).trim(),
}));

const regressionSprints = sheetRows("Regression Sprints").map((r) => ({
  sprint: Number(r["Sprint"]),
  day: Number(r["Day"]),
  whatToRetrieve: String(r["What to retrieve"]).trim(),
  blankPageReconstruction: String(r["Blank-page reconstruction"]).trim(),
  integrationDrill: String(r["Integration / failure drill"]).trim(),
  passCondition: String(r["Pass condition"]).trim(),
}));

writeFileSync(
  OUT,
  JSON.stringify({ tracker, projects, studySystem, resources, regressionSprints }, null, 2),
);

console.log(`Wrote ${OUT}`);
console.log(`tracker=${tracker.length} projects=${projects.length} studySystem=${studySystem.length} resources=${resources.length} regressionSprints=${regressionSprints.length}`);
```

- [ ] **Step 2: Run it and verify counts**

```bash
node scripts/extract-excel.mjs
```

Expected output: `tracker=75 projects=4 studySystem=9 resources=9 regressionSprints=11`. If any count is off, open `scripts/raw-curriculum.json` and check the mismatched sheet's rows — most likely cause is a header-name typo not matching the actual column header text.

- [ ] **Step 3: Commit**

```bash
git add scripts/extract-excel.mjs scripts/raw-curriculum.json
git commit -m "Add Excel extraction script and raw curriculum JSON"
```

---

### Task 3: Generate enriched curriculum TypeScript data modules

**Files:**
- Create: `scripts/generate-curriculum.mjs`
- Create (generated output, committed): `src/data/days.ts`, `src/data/phases.ts`, `src/data/projects.ts`, `src/data/studySystem.ts`, `src/data/resources.ts`, `src/data/regressionSprints.ts`
- Create: `src/lib/types.ts`

- [ ] **Step 1: Define the shared types**

```ts
// src/lib/types.ts
export type SectionKey = "learn" | "build" | "project" | "revision" | "check";

export interface DaySection {
  durationMin: number;
  items: string[];
}

export interface ResourceStep {
  icon: string;
  label: string;
  detail: string;
}

export interface Day {
  day: number;
  phaseNumber: number;
  phaseName: string;
  focus: string;
  skillPillar: string;
  notes: string;
  sections: Record<SectionKey, DaySection>;
  resourceFlow: {
    startHere: ResourceStep;
    next: ResourceStep | null;
    practice: ResourceStep;
    verify: ResourceStep;
  };
}

export interface Phase {
  number: number;
  name: string;
  startDay: number;
  endDay: number;
}

export interface Project {
  project: string;
  when: string;
  purpose: string;
  evolution: string;
}

export interface StudySystemEntry {
  component: string;
  howToUse: string;
}

export interface Resource {
  resource: string;
  role: string;
  whenToUse: string;
  notes: string;
}

export interface RegressionSprint {
  sprint: number;
  day: number;
  whatToRetrieve: string;
  blankPageReconstruction: string;
  integrationDrill: string;
  passCondition: string;
}
```

- [ ] **Step 2: Write the generation script**

```js
// scripts/generate-curriculum.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(
  readFileSync(path.join(__dirname, "raw-curriculum.json"), "utf-8"),
);
const dataDir = path.join(__dirname, "..", "src", "data");

function jsStr(s) {
  return JSON.stringify(s);
}

// Split a sentence-ish column into bullet items on ". " or "; " boundaries.
function toItems(text) {
  if (!text) return [];
  return text
    .split(/(?<=[.;])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// "Mathematics for Machine Learning + 3Blue1Brown" -> ["Mathematics for Machine Learning", "3Blue1Brown"]
function splitResource(resource) {
  return resource.split("+").map((s) => s.trim()).filter(Boolean);
}

function buildDay(row) {
  const [primaryResource, secondaryResource] = splitResource(row.resource);
  const resourceFlow = {
    startHere: {
      icon: "📘",
      label: primaryResource || "Primary resource",
      detail: row.theoryLearn,
    },
    next: secondaryResource
      ? { icon: "🎥", label: secondaryResource, detail: row.theoryLearn }
      : null,
    practice: {
      icon: "💻",
      label: "Practice",
      detail: row.codeBuild,
    },
    verify: {
      icon: "🤖",
      label: "Ask ChatGPT",
      detail: `Quiz me on ${row.focus.replace(/\.$/, "").toLowerCase()} without giving me the answer.`,
    },
  };

  return {
    day: row.day,
    phaseName: row.phase,
    focus: row.focus,
    skillPillar: row.skillPillar,
    notes: row.notes,
    sections: {
      learn: { durationMin: 90, items: toItems(row.theoryLearn) },
      build: { durationMin: 90, items: toItems(row.codeBuild) },
      project: { durationMin: 60, items: toItems(row.projectWork) },
      revision: { durationMin: 45, items: toItems(row.revision) },
      check: {
        durationMin: 30,
        items: [`5 questions / mini exercise on: ${row.focus}`],
      },
    },
    resourceFlow,
  };
}

// Derive the 11 phases from contiguous runs of the same Phase string.
function buildPhases(tracker) {
  const phases = [];
  let current = null;
  for (const row of tracker) {
    if (!current || current.name !== row.phase) {
      if (current) phases.push(current);
      current = { name: row.phase, startDay: row.day, endDay: row.day };
    } else {
      current.endDay = row.day;
    }
  }
  if (current) phases.push(current);
  return phases.map((p, i) => ({ number: i + 1, ...p }));
}

const phases = buildPhases(raw.tracker);
const phaseNumberByDay = new Map();
for (const p of phases) {
  for (let d = p.startDay; d <= p.endDay; d++) phaseNumberByDay.set(d, p.number);
}

const days = raw.tracker.map((row) => ({
  ...buildDay(row),
  phaseNumber: phaseNumberByDay.get(row.day),
}));

function writeModule(filename, varName, typeName, value) {
  const contents = `import type { ${typeName} } from "@/lib/types";\n\nexport const ${varName}: ${typeName}[] = ${JSON.stringify(value, null, 2)};\n`;
  writeFileSync(path.join(dataDir, filename), contents);
  console.log(`Wrote ${filename} (${value.length} entries)`);
}

writeModule("days.ts", "days", "Day", days);
writeModule("phases.ts", "phases", "Phase", phases);
writeModule("projects.ts", "projects", "Project", raw.projects);
writeModule("studySystem.ts", "studySystem", "StudySystemEntry", raw.studySystem);
writeModule("resources.ts", "resources", "Resource", raw.resources);
writeModule("regressionSprints.ts", "regressionSprints", "RegressionSprint", raw.regressionSprints);
```

- [ ] **Step 3: Run it**

```bash
mkdir -p src/data
node scripts/generate-curriculum.mjs
```

Expected: six "Wrote ..." lines, with `days.ts (75 entries)`, `phases.ts (11 entries)`, `projects.ts (4 entries)`, `studySystem.ts (9 entries)`, `resources.ts (9 entries)`, `regressionSprints.ts (11 entries)`.

- [ ] **Step 4: Type-check the generated output**

```bash
npx tsc --noEmit
```

Expected: no errors. If `Day`/`Phase`/etc. types don't match the generated object shape, fix `src/lib/types.ts` (not the generator) since the generator output is the source of truth for what the data actually looks like.

- [ ] **Step 5: Commit**

```bash
git add src/lib/types.ts scripts/generate-curriculum.mjs src/data/
git commit -m "Generate enriched curriculum data modules from raw Excel data"
```

---

### Task 4: MongoDB client singleton

**Files:**
- Create: `src/lib/mongodb.ts`
- Create: `.env.example`
- Modify: `.gitignore` (ensure `.env.local` is ignored — `create-next-app` already adds this by default, verify not add)

- [ ] **Step 1: Write the cached client helper**

```ts
// src/lib/mongodb.ts
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db("ai_learning_tracker");
}
```

- [ ] **Step 2: Add the env example file**

```bash
# .env.example
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

- [ ] **Step 3: Confirm `.env.local` is gitignored**

```bash
grep -n "^\.env" .gitignore
```

Expected: a line matching `.env*.local` (added by `create-next-app` by default). If missing, add it.

- [ ] **Step 4: Commit**

```bash
git add src/lib/mongodb.ts .env.example .gitignore
git commit -m "Add MongoDB client singleton and env example"
```

---

### Task 5: Progress logic (pure functions) with tests first

**Files:**
- Create: `src/lib/progress.ts`
- Create: `src/lib/progress.test.ts`
- Modify: `package.json` (add `test` script)

- [ ] **Step 1: Write the failing tests**

```ts
// src/lib/progress.test.ts
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
```

- [ ] **Step 2: Add the test script and run to confirm failure**

Add to `package.json` `"scripts"`: `"test": "vitest run"`.

```bash
npm test
```

Expected: FAIL — `Cannot find module './progress'` (file doesn't exist yet).

- [ ] **Step 3: Implement the logic**

```ts
// src/lib/progress.ts
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
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test
```

Expected: all tests PASS (10 tests across 4 describe blocks).

- [ ] **Step 5: Commit**

```bash
git add src/lib/progress.ts src/lib/progress.test.ts package.json
git commit -m "Add progress logic with unit tests"
```

---

### Task 6: Server Actions for progress and regression linking

**Files:**
- Create: `src/lib/actions.ts`

- [ ] **Step 1: Implement the actions**

```ts
// src/lib/actions.ts
"use server";

import { getDb } from "./mongodb";
import { regressionSprints } from "@/data/regressionSprints";
import {
  nextRegressionSprintAfter,
  shouldAddToRegression,
} from "./progress";
import type { SectionKey } from "./types";
import { revalidatePath } from "next/cache";

export interface DayProgressDoc {
  day: number;
  learn: boolean;
  build: boolean;
  project: boolean;
  revision: boolean;
  check: boolean;
  status: "not_started" | "in_progress" | "complete";
  confidence: number | null;
  whatWentWrong: string | null;
  completedAt: Date | null;
  updatedAt: Date;
}

export interface RegressionAdditionDoc {
  sprintNumber: number;
  sourceDay: number;
  topic: string;
  addedAt: Date;
}

export async function getAllProgress(): Promise<DayProgressDoc[]> {
  const db = await getDb();
  return db
    .collection<DayProgressDoc>("dayProgress")
    .find({}, { projection: { _id: 0 } })
    .toArray();
}

export async function getDayProgress(day: number): Promise<DayProgressDoc | null> {
  const db = await getDb();
  return db
    .collection<DayProgressDoc>("dayProgress")
    .findOne({ day }, { projection: { _id: 0 } });
}

export async function toggleSection(
  day: number,
  section: SectionKey,
  done: boolean,
): Promise<void> {
  const db = await getDb();
  const existing = await db.collection<DayProgressDoc>("dayProgress").findOne({ day });
  const base: DayProgressDoc = existing ?? {
    day,
    learn: false,
    build: false,
    project: false,
    revision: false,
    check: false,
    status: "not_started",
    confidence: null,
    whatWentWrong: null,
    completedAt: null,
    updatedAt: new Date(),
  };
  base[section] = done;
  const anyDone = base.learn || base.build || base.project || base.revision || base.check;
  if (base.status !== "complete") {
    base.status = anyDone ? "in_progress" : "not_started";
  }
  base.updatedAt = new Date();

  await db
    .collection<DayProgressDoc>("dayProgress")
    .updateOne({ day }, { $set: base }, { upsert: true });

  revalidatePath("/dashboard");
  revalidatePath(`/day/${day}`);
  revalidatePath("/progress");
}

export async function completeDay(
  day: number,
  confidence: number,
  whatWentWrong: string | null,
): Promise<void> {
  const db = await getDb();
  const now = new Date();

  await db.collection<DayProgressDoc>("dayProgress").updateOne(
    { day },
    {
      $set: {
        day,
        learn: true,
        build: true,
        project: true,
        revision: true,
        check: true,
        status: "complete",
        confidence,
        whatWentWrong,
        completedAt: now,
        updatedAt: now,
      },
    },
    { upsert: true },
  );

  if (shouldAddToRegression(confidence)) {
    const dayRow = (await import("@/data/days")).days.find((d) => d.day === day);
    const target = nextRegressionSprintAfter(regressionSprints, day);
    if (target && dayRow) {
      await db.collection<RegressionAdditionDoc>("regressionAdditions").insertOne({
        sprintNumber: target.sprint,
        sourceDay: day,
        topic: dayRow.focus,
        addedAt: now,
      });
    }
  }

  revalidatePath("/dashboard");
  revalidatePath(`/day/${day}`);
  revalidatePath("/roadmap");
  revalidatePath("/progress");
}

export async function getRegressionAdditions(
  sprintNumber: number,
): Promise<RegressionAdditionDoc[]> {
  const db = await getDb();
  return db
    .collection<RegressionAdditionDoc>("regressionAdditions")
    .find({ sprintNumber }, { projection: { _id: 0 } })
    .toArray();
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/actions.ts
git commit -m "Add server actions for progress tracking and regression auto-linking"
```

---

### Task 7: App shell — layout and nav

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css` (leave shadcn-generated theme as-is)
- Create: `src/components/Nav.tsx`
- Modify: `src/app/page.tsx` (redirect to `/dashboard`)

- [ ] **Step 1: Write the nav component**

```tsx
// src/components/Nav.tsx
import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Today" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
  { href: "/progress", label: "Progress" },
];

export function Nav() {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
        <span className="font-semibold">AI Engineering Tracker</span>
        <div className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Wire it into the root layout**

Modify `src/app/layout.tsx` to render `<Nav />` above `{children}` inside `<body>`, keeping the existing font/className setup that `create-next-app` generated.

- [ ] **Step 3: Redirect `/` to `/dashboard`**

```tsx
// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
```

- [ ] **Step 4: Verify manually**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" -L http://localhost:4000
kill %1
```

Expected: `200` (dashboard page will 500 until Task 8 exists — that's fine, this step just confirms the redirect wiring; re-run this check after Task 8).

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/components/Nav.tsx
git commit -m "Add app nav and redirect home to dashboard"
```

---

### Task 8: Dashboard page — "what should I do right now"

**Files:**
- Create: `src/app/dashboard/page.tsx`
- Create: `src/components/DayChecklist.tsx`
- Create: `src/components/ProgressRing.tsx`
- Create: `src/components/CompleteDayDialog.tsx`

- [ ] **Step 1: Progress ring component**

```tsx
// src/components/ProgressRing.tsx
import { Progress } from "@/components/ui/progress";

export function ProgressRing({ percent }: { percent: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{percent}%</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}
```

- [ ] **Step 2: Day checklist component (client component, calls the server action)**

```tsx
// src/components/DayChecklist.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { toggleSection } from "@/lib/actions";
import type { Day, SectionKey } from "@/lib/types";
import { useTransition } from "react";

const SECTION_LABELS: Record<SectionKey, string> = {
  learn: "Learn",
  build: "Build",
  project: "Project",
  revision: "Revision",
  check: "Check",
};

export function DayChecklist({
  day,
  sectionsDone,
}: {
  day: Day;
  sectionsDone: Record<SectionKey, boolean>;
}) {
  const [isPending, startTransition] = useTransition();
  const keys: SectionKey[] = ["learn", "build", "project", "revision", "check"];

  return (
    <div className="space-y-3">
      {keys.map((key) => (
        <label key={key} className="flex items-start gap-3 rounded-md border p-3">
          <Checkbox
            checked={sectionsDone[key]}
            disabled={isPending}
            onCheckedChange={(checked) =>
              startTransition(() => toggleSection(day.day, key, checked === true))
            }
          />
          <div>
            <div className="font-medium">
              {SECTION_LABELS[key]} — {day.sections[key].durationMin} min
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
              {day.sections[key].items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </label>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Complete-day dialog (client component)**

```tsx
// src/components/CompleteDayDialog.tsx
"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { completeDay } from "@/lib/actions";

export function CompleteDayDialog({ day }: { day: number }) {
  const [confidence, setConfidence] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Complete Day</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How confident are you?</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <Button
              key={n}
              variant={confidence === n ? "default" : "outline"}
              onClick={() => setConfidence(n)}
            >
              {n}
            </Button>
          ))}
        </div>
        <Textarea
          placeholder="What went wrong? (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <DialogFooter>
          <Button
            disabled={confidence === null || isPending}
            onClick={() =>
              startTransition(async () => {
                await completeDay(day, confidence!, note || null);
                setOpen(false);
              })
            }
          >
            Complete Day
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

- [ ] **Step 4: Dashboard page (server component)**

```tsx
// src/app/dashboard/page.tsx
import { days } from "@/data/days";
import { getAllProgress } from "@/lib/actions";
import { resolveCurrentDay, computeTimeRemainingMin } from "@/lib/progress";
import { DayChecklist } from "@/components/DayChecklist";
import { ProgressRing } from "@/components/ProgressRing";
import { CompleteDayDialog } from "@/components/CompleteDayDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const allProgress = await getAllProgress();
  const currentDayNum = resolveCurrentDay(
    allProgress.map((p) => ({ day: p.day, status: p.status })),
  );
  const day = days.find((d) => d.day === currentDayNum) ?? days[days.length - 1];
  const progressDoc = allProgress.find((p) => p.day === day.day);
  const sectionsDone = {
    learn: progressDoc?.learn ?? false,
    build: progressDoc?.build ?? false,
    project: progressDoc?.project ?? false,
    revision: progressDoc?.revision ?? false,
    check: progressDoc?.check ?? false,
  };
  const doneCount = Object.values(sectionsDone).filter(Boolean).length;
  const percent = Math.round((doneCount / 5) * 100);
  const remainingMin = computeTimeRemainingMin(day, sectionsDone);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Day {day.day} / 75 — {day.focus}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Phase {day.phaseNumber}: {day.phaseName}
          </div>
          <ProgressRing percent={percent} />
          <div className="text-sm">
            Estimated time remaining:{" "}
            {Math.floor(remainingMin / 60)}h {remainingMin % 60}m
          </div>
          <DayChecklist day={day} sectionsDone={sectionsDone} />
          <CompleteDayDialog day={day.day} />
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 5: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/dashboard
kill %1
```

Requires `MONGODB_URI` set in `.env.local` (see Task 4) pointing at a real Atlas cluster. Expected: `200`. If it fails with a Mongo connection error, verify the connection string and that the Atlas cluster's network access allows connections from your current IP (Atlas free tier requires an IP allowlist entry — add `0.0.0.0/0` for local dev convenience, tighten later if desired).

- [ ] **Step 6: Commit**

```bash
git add src/app/dashboard src/components/DayChecklist.tsx src/components/ProgressRing.tsx src/components/CompleteDayDialog.tsx
git commit -m "Add dashboard page with day checklist and complete-day flow"
```

---

### Task 9: Day detail page

**Files:**
- Create: `src/app/day/[id]/page.tsx`
- Create: `src/components/ResourceFlowCard.tsx`

- [ ] **Step 1: Resource flow component**

```tsx
// src/components/ResourceFlowCard.tsx
import type { Day } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResourceFlowCard({ day }: { day: Day }) {
  const steps = [
    { label: "START HERE", step: day.resourceFlow.startHere },
    { label: "NEXT", step: day.resourceFlow.next },
    { label: "PRACTICE", step: day.resourceFlow.practice },
    { label: "VERIFY", step: day.resourceFlow.verify },
  ].filter((s) => s.step !== null);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        {steps.map(({ label, step }) => (
          <div key={label} className="flex gap-3">
            <Badge variant="secondary">{label}</Badge>
            <div>
              <div className="font-medium">
                {step!.icon} {step!.label}
              </div>
              <div className="text-sm text-muted-foreground">{step!.detail}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: Day detail page**

```tsx
// src/app/day/[id]/page.tsx
import { notFound } from "next/navigation";
import { days } from "@/data/days";
import { getDayProgress } from "@/lib/actions";
import { DayChecklist } from "@/components/DayChecklist";
import { ResourceFlowCard } from "@/components/ResourceFlowCard";
import { CompleteDayDialog } from "@/components/CompleteDayDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dayNum = Number(id);
  const day = days.find((d) => d.day === dayNum);
  if (!day) notFound();

  const progressDoc = await getDayProgress(day.day);
  const sectionsDone = {
    learn: progressDoc?.learn ?? false,
    build: progressDoc?.build ?? false,
    project: progressDoc?.project ?? false,
    revision: progressDoc?.revision ?? false,
    check: progressDoc?.check ?? false,
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Day {day.day} / 75 — {day.focus}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Phase {day.phaseNumber}: {day.phaseName} · Skill pillar: {day.skillPillar}
          </div>
          <DayChecklist day={day} sectionsDone={sectionsDone} />
          <CompleteDayDialog day={day.day} />
        </CardContent>
      </Card>
      <ResourceFlowCard day={day} />
    </div>
  );
}
```

- [ ] **Step 3: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/day/1
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/day/999
kill %1
```

Expected: `200` for `/day/1`, `404` for `/day/999`.

- [ ] **Step 4: Commit**

```bash
git add src/app/day src/components/ResourceFlowCard.tsx
git commit -m "Add day detail page with resource flow"
```

---

### Task 10: Roadmap page

**Files:**
- Create: `src/app/roadmap/page.tsx`
- Create: `src/components/PhaseTimeline.tsx`
- Create: `src/components/RegressionSprintCard.tsx`

- [ ] **Step 1: Regression sprint card**

```tsx
// src/components/RegressionSprintCard.tsx
import type { RegressionAdditionDoc } from "@/lib/actions";
import type { RegressionSprint } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RegressionSprintCard({
  sprint,
  additions,
}: {
  sprint: RegressionSprint;
  additions: RegressionAdditionDoc[];
}) {
  return (
    <Card className="border-amber-400 bg-amber-50 dark:bg-amber-950">
      <CardHeader>
        <CardTitle className="text-base">
          Regression Sprint {sprint.sprint} — Day {sprint.day}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          <span className="font-medium">Retrieve: </span>
          {sprint.whatToRetrieve}
        </div>
        <div>
          <span className="font-medium">Blank-page reconstruction: </span>
          {sprint.blankPageReconstruction}
        </div>
        <div>
          <span className="font-medium">Integration drill: </span>
          {sprint.integrationDrill}
        </div>
        <div>
          <span className="font-medium">Pass condition: </span>
          {sprint.passCondition}
        </div>
        {additions.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {additions.map((a, i) => (
              <Badge key={i} variant="outline">
                Added from Day {a.sourceDay}: {a.topic}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: Phase timeline component**

```tsx
// src/components/PhaseTimeline.tsx
import type { Phase } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export function PhaseTimeline({
  phase,
  completedDaysInPhase,
}: {
  phase: Phase;
  completedDaysInPhase: number;
}) {
  const totalDays = phase.endDay - phase.startDay + 1;
  const percent = Math.round((completedDaysInPhase / totalDays) * 100);

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <span className="font-medium">{phase.name}</span>
        <span className="text-sm text-muted-foreground">
          Day {phase.startDay}–{phase.endDay}
        </span>
      </div>
      <Progress value={percent} />
      <div className="flex flex-wrap gap-1 pt-1">
        {Array.from({ length: totalDays }, (_, i) => phase.startDay + i).map((d) => (
          <Link
            key={d}
            href={`/day/${d}`}
            className="rounded border px-2 py-0.5 text-xs hover:bg-accent"
          >
            {d}
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Roadmap page**

```tsx
// src/app/roadmap/page.tsx
import { phases } from "@/data/phases";
import { regressionSprints } from "@/data/regressionSprints";
import { getAllProgress, getRegressionAdditions } from "@/lib/actions";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { RegressionSprintCard } from "@/components/RegressionSprintCard";

export default async function RoadmapPage() {
  const progress = await getAllProgress();
  const completedDays = new Set(
    progress.filter((p) => p.status === "complete").map((p) => p.day),
  );

  const sprintAdditions = await Promise.all(
    regressionSprints.map((s) => getRegressionAdditions(s.sprint)),
  );

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      {phases.map((phase) => {
        const completedDaysInPhase = Array.from(
          { length: phase.endDay - phase.startDay + 1 },
          (_, i) => phase.startDay + i,
        ).filter((d) => completedDays.has(d)).length;

        const sprintsInPhase = regressionSprints.filter(
          (s) => s.day >= phase.startDay && s.day <= phase.endDay,
        );

        return (
          <div key={phase.number} className="space-y-4">
            <PhaseTimeline phase={phase} completedDaysInPhase={completedDaysInPhase} />
            {sprintsInPhase.map((s) => (
              <RegressionSprintCard
                key={s.sprint}
                sprint={s}
                additions={sprintAdditions[s.sprint - 1]}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/roadmap
kill %1
```

Expected: `200`.

- [ ] **Step 5: Commit**

```bash
git add src/app/roadmap src/components/PhaseTimeline.tsx src/components/RegressionSprintCard.tsx
git commit -m "Add roadmap page with phase timeline and regression sprints"
```

---

### Task 11: Resources page

**Files:**
- Create: `src/app/resources/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
// src/app/resources/page.tsx
import { resources } from "@/data/resources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Books & Resources</h1>
      {resources.map((r) => (
        <Card key={r.resource}>
          <CardHeader>
            <CardTitle className="text-base">{r.resource}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Role: </span>
              {r.role}
            </div>
            <div>
              <span className="font-medium">When to use: </span>
              {r.whenToUse}
            </div>
            {r.notes && (
              <div className="text-muted-foreground">
                <span className="font-medium">Notes: </span>
                {r.notes}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/resources
kill %1
```

Expected: `200`.

- [ ] **Step 3: Commit**

```bash
git add src/app/resources
git commit -m "Add resources page"
```

---

### Task 12: Projects page

**Files:**
- Create: `src/app/projects/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
// src/app/projects/page.tsx
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PLACEHOLDER_MARKERS = ["placeholder", "unspecified", "then vs now", "then vs. now"];

function isPlaceholder(p: { purpose: string; evolution: string }) {
  const text = `${p.purpose} ${p.evolution}`.toLowerCase();
  return PLACEHOLDER_MARKERS.some((marker) => text.includes(marker));
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      {projects.map((p) => (
        <Card key={p.project}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">{p.project}</CardTitle>
            {isPlaceholder(p) && <Badge variant="outline">Pending your input</Badge>}
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <div>
              <span className="font-medium">When: </span>
              {p.when}
            </div>
            <div>
              <span className="font-medium">Purpose: </span>
              {p.purpose}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Evolution / Evidence: </span>
              {p.evolution}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/projects
kill %1
```

Expected: `200`.

- [ ] **Step 3: Commit**

```bash
git add src/app/projects
git commit -m "Add projects page"
```

---

### Task 13: Progress overview page

**Files:**
- Create: `src/app/progress/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
// src/app/progress/page.tsx
import { days } from "@/data/days";
import { phases } from "@/data/phases";
import { getAllProgress } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default async function ProgressPage() {
  const progress = await getAllProgress();
  const completed = progress.filter((p) => p.status === "complete");
  const overallPercent = Math.round((completed.length / days.length) * 100);

  const confidenceLog = completed
    .filter((p) => p.confidence !== null)
    .sort((a, b) => a.day - b.day);

  const wentWrongLog = completed.filter((p) => p.whatWentWrong);

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Overall progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Progress value={overallPercent} />
          <div className="text-sm text-muted-foreground">
            {completed.length} / {days.length} days complete ({overallPercent}%)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Per-phase completion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {phases.map((phase) => {
            const totalDays = phase.endDay - phase.startDay + 1;
            const doneInPhase = completed.filter(
              (p) => p.day >= phase.startDay && p.day <= phase.endDay,
            ).length;
            const percent = Math.round((doneInPhase / totalDays) * 100);
            return (
              <div key={phase.number} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{phase.name}</span>
                  <span>{doneInPhase}/{totalDays}</span>
                </div>
                <Progress value={percent} />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Confidence trend</CardTitle>
        </CardHeader>
        <CardContent>
          {confidenceLog.length === 0 ? (
            <div className="text-sm text-muted-foreground">No completed days yet.</div>
          ) : (
            <div className="flex flex-wrap gap-2 text-sm">
              {confidenceLog.map((p) => (
                <span key={p.day} className="rounded border px-2 py-1">
                  Day {p.day}: {p.confidence}/5
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {wentWrongLog.length === 0 ? (
            <div className="text-muted-foreground">Nothing logged yet.</div>
          ) : (
            wentWrongLog.map((p) => (
              <div key={p.day}>
                <span className="font-medium">Day {p.day}: </span>
                {p.whatWentWrong}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Manual verification**

```bash
npm run dev -- --port 4000 &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4000/progress
kill %1
```

Expected: `200`.

- [ ] **Step 3: Commit**

```bash
git add src/app/progress
git commit -m "Add progress overview page"
```

---

### Task 14: README, Vercel/MongoDB setup notes, final push

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write the README**

```md
# AI Engineering Learning Dashboard

A 75-day AI/ML/LLM learning tracker, replacing the source Excel plan with a daily-actionable dashboard.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind · shadcn/ui · MongoDB Atlas · deployed on Vercel.

## Local setup

1. `npm install`
2. Create a free MongoDB Atlas cluster (M0 tier) at https://www.mongodb.com/cloud/atlas — under Network Access, allow your current IP (or `0.0.0.0/0` for convenience during development).
3. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to your Atlas connection string.
4. `npm run dev` and open http://localhost:3000

## Regenerating curriculum data

The 75 days, phases, projects, study system notes, resources, and regression sprints are generated once from `AI_ML_LLM_75_Day_Master_Plan.xlsx` into `src/data/*.ts`. To regenerate after editing the source spreadsheet:

```bash
node scripts/extract-excel.mjs
node scripts/generate-curriculum.mjs
```

## Tests

```bash
npm test
```

## Deploying to Vercel

1. Push this repo to GitHub (already configured as `origin`: `https://github.com/ByteKilns/ai-learning-tracker.git`).
2. Import the repo in Vercel (free tier).
3. Add `MONGODB_URI` as a Vercel project environment variable (same value as `.env.local`).
4. Deploy.
```

- [ ] **Step 2: Final full check**

```bash
npx tsc --noEmit
npm test
npm run build
```

Expected: all three succeed with no errors.

- [ ] **Step 3: Commit and push**

```bash
git add README.md
git commit -m "Add README with setup and deployment instructions"
git push -u origin master
```

If `git push` fails because the remote already has commits (e.g. a repo initialized with a README on GitHub), run `git pull --rebase origin master` first, resolve any conflicts, then push again.

---

## Self-review notes

- **Spec coverage:** all 6 spec routes (`/dashboard`, `/day/[id]`, `/roadmap`, `/resources`, `/projects`, `/progress`), both Mongo collections, the confidence≤2 auto-regression rule, static-curriculum/dynamic-progress split, MongoDB (not Drizzle/SQL), no-auth, and the Vitest-only-for-logic testing approach are each covered by a task above.
- **Type consistency:** `SectionKey`, `Day`, `Phase`, `RegressionSprint`, `DayProgressDoc`, `RegressionAdditionDoc` are defined once in Task 3/6 and reused with matching names/shapes in every later task.
- **Placeholder scan:** no TBD/TODO markers; every step has runnable code or an exact command with expected output.
