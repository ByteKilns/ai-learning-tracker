import type { StudySystemEntry } from "@/lib/types";

export const studySystem: StudySystemEntry[] = [
  {
    "component": "Daily operating model",
    "howToUse": "~2h theory + ~2h coding + ~1h project + ~1h revision + ~1h docs/interview. Shift flexibly on math/project-heavy days."
  },
  {
    "component": "Books",
    "howToUse": "Use for durable fundamentals, mathematics and coherent explanations. Read selected chapters; do not attempt to finish every book."
  },
  {
    "component": "ChatGPT",
    "howToUse": "Use as tutor, Socratic questioner, exercise generator, debugger, reviewer, architecture reviewer and mock interviewer—not as a code-copying shortcut."
  },
  {
    "component": "Official documentation",
    "howToUse": "Source of truth for current APIs, framework behavior, configuration and implementation details."
  },
  {
    "component": "Regression Sprint",
    "howToUse": "Approximately every 7 days. No major new topic. Work from blank files, retrieve concepts, debug deliberate failures, integrate multiple skills and record weak areas."
  },
  {
    "component": "Evaluation loop",
    "howToUse": "Every AI project should have a test set, explicit quality criteria, failure taxonomy and a repeatable regression check."
  },
  {
    "component": "Coding-agent loop",
    "howToUse": "Spec → plan → context → implement → verify → review → approve. Keep permissions bounded and provide verifiers."
  },
  {
    "component": "Build-shaping loop",
    "howToUse": "Problem → user → success metric → MVP → non-goals → architecture → build → measure → iterate."
  },
  {
    "component": "Market-ready evidence",
    "howToUse": "Portfolio artifacts should include architecture, tests/evals, failure analysis, ADRs, security boundaries, cost/latency discussion and a clear demo."
  }
];
