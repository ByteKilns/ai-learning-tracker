# AI Engineering Learning Dashboard — Design

Date: 2026-08-16

## Purpose

Replace the 75-day / 16-column Excel tracker (`AI_ML_LLM_75_Day_Master_Plan.xlsx`) and its companion PDF with a small Next.js web app that answers "what should I do right now?" and tracks daily progress, instead of requiring the user to navigate a wide spreadsheet.

## Source data

`AI_ML_LLM_75_Day_Master_Plan.xlsx` has 5 sheets, confirmed by inspecting the raw sheet XML:

1. **75-Day Tracker** (`A1:P76`) — Day, Phase, Focus/Deliverable, Theory/Learn, Code/Build, Project Work, Revision/Regression, Resource, Primary Skill Pillar, Learn✓, Build✓, Explain✓, Revise✓, Status, Confidence 1-5, Notes. 75 data rows.
2. **Projects** (4 rows) — Project, When, Purpose, Evolution/Evidence. Covers the Jira AI Software Engineer capstone (Day 5→75) plus two "then vs now" placeholder projects (Movie Recommender; Video/AR/Hand Gestures) and a final capstone entry.
3. **Study System** (9 rows) — Component, How to use it. Daily operating model, Books, ChatGPT, Official docs, Regression Sprint, Evaluation loop, Coding-agent loop, etc.
4. **Books & Resources** (9 rows) — Resource, Role, When to use, Notes.
5. **Regression Sprints** (11 rows) — Sprint, Day, What to retrieve, Blank-page reconstruction, Integration/failure drill, Pass condition. Sprints land roughly every 7 days.

## Architecture

- **Next.js 15** (App Router), **TypeScript**, **Tailwind**, **shadcn/ui** components.
- **MongoDB Atlas** (free M0 cluster) via the native MongoDB driver, with a cached global client (module-level singleton, reused across serverless invocations) to avoid connection-storm issues on Vercel.
- **Server Actions** for all reads/writes — no separate REST API layer needed for a single-user tool.
- **No authentication** in V1 — a single implicit user.
- **Deployment**: Vercel free tier. `MONGODB_URI` supplied via `.env.local` (dev) and Vercel project env vars (prod); `.env.example` committed with a placeholder.
- **Repo**: `https://github.com/ByteKilns/ai-learning-tracker.git` added as `origin`; local commits as work progresses, pushed when the user is ready to review.

## Data split: static curriculum vs. dynamic progress

Two different lifetimes get two different stores:

- **Curriculum content** (75 days, 8 phases, projects, study-system notes, books/resources, 11 regression sprints) is static and read-only. It is generated once from the Excel file by a one-time conversion script and committed as TypeScript data modules under `src/data/`. Each day's Learn/Build/Project/Revision sections are enriched beyond the terse spreadsheet phrasing into a START HERE → NEXT → PRACTICE → VERIFY structure (including a suggested ChatGPT prompt for the VERIFY step), matching the user's mockup. A fifth `check` section (5-question / mini exercise) is added per day, since the sheet's 4 checkbox columns (Learn/Build/Explain/Revise) map to the user's 5-part daily plan (Learn/Build/Project/Revision/Check) by splitting "Explain" into the Revision section's self-explanation and adding a lightweight Check step.
- **Progress** (section checkboxes, confidence rating, "what went wrong" notes, completion timestamps, and regression-sprint auto-additions) is dynamic and lives in MongoDB, since it's what actually mutates at runtime.

Rationale: this avoids duplicating 75 days of unchanging content into a database just to read it back unmodified, while keeping the part that genuinely changes in a real DB.

## MongoDB collections

`dayProgress`:
```
{
  day: number,               // 1-75, unique
  learn: boolean,
  build: boolean,
  project: boolean,
  revision: boolean,
  check: boolean,
  status: 'not_started' | 'in_progress' | 'complete',
  confidence: 1 | 2 | 3 | 4 | 5 | null,
  whatWentWrong: string | null,
  completedAt: Date | null,
  updatedAt: Date
}
```

`regressionAdditions`:
```
{
  sprintNumber: number,      // which of the 11 regression sprints this was added to
  sourceDay: number,         // the day that triggered the addition
  topic: string,             // the day's Focus/Deliverable text
  addedAt: Date
}
```

Written when a day is completed with `confidence <= 2`: the app finds the next regression sprint whose `Day` (from the static `regressionSprints` data) is greater than the completed day, and inserts one `regressionAdditions` doc referencing it.

## Routes

| Route | Purpose |
|---|---|
| `/dashboard` (home, `/` redirects here) | "What should I do right now" — resolves the first day in `dayProgress` that isn't `complete` (day 1 if no progress exists yet), shows current phase, objective, a progress ring, the 5-section checklist with per-section mark-done buttons, estimated time remaining (sum of unchecked sections' fixed durations: Learn 90m, Build 90m, Project 60m, Revision 45m, Check 30m — matching the user's sample day), and a "Complete Day" flow that asks for a 1-5 confidence rating and an optional "what went wrong" note. |
| `/day/[id]` | Full detail page for any day: same 5 sections with their START/NEXT/PRACTICE/VERIFY breakdown, section checkboxes, Complete Day action. Reachable from the dashboard, roadmap, or by direct day number. |
| `/roadmap` | Visual 8-phase timeline (Foundations, Classical ML, Deep Learning, Transformers, LLMs + Coding Agents, RAG, LangGraph + Agents, Production AI, Evals + AI Engineering, Capstone — phase boundaries taken from the sheet's Phase column) with a progress bar per phase. Regression sprints render as a visually distinct block between phases. |
| `/resources` | Books & Resources sheet, one card per resource showing its role, which days/phases use it, and notes. |
| `/projects` | Jira AI Engineer progression tree (from the Projects sheet's `Evolution/Evidence` column) plus the two "old project" placeholders (Movie Recommender; Video/AR/Hand Gestures), each marked as pending further input from the user rather than fabricated. |
| `/progress` | Overall completion %, per-phase breakdown, confidence trend across completed days, and a log of "what went wrong" notes for review. |

## Testing

Kept intentionally light, per "don't over-engineer": Vitest unit tests for the two pieces of real logic —
1. resolving "current day" from a set of `dayProgress` docs,
2. the regression-sprint auto-linking rule (confidence ≤ 2 → next sprint after the completed day).

Everything else is declarative rendering of static + fetched data and doesn't need dedicated tests beyond a manual pass in the browser before calling V1 done.

## Explicitly out of scope for V1

- Authentication / multi-user support.
- LLM API integration (the VERIFY-step ChatGPT prompts are just displayed text to copy/paste, not wired to an API).
- Editing curriculum content through the UI (it's static, edited by re-running the conversion script or hand-editing `src/data/`).
- Filling in real details for the two placeholder "old projects" — stays a placeholder until the user supplies that history.

## Version roadmap (unchanged from user's proposal, for reference)

V1: dashboard + roadmap + day detail + resources + projects + progress, MongoDB-backed tracking, no auth. → V2: deeper resource linking. → V3: ChatGPT-guided learning (live API). → V4: quizzes + auto-evaluation. → V5: further adaptive regression refinement (note: the confidence≤2 auto-add rule is already pulled into V1 per user request during design). → V6: full learning agent.
