import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(
  readFileSync(path.join(__dirname, "raw-curriculum.json"), "utf-8"),
);
// Manual overlays kept separate from the Excel-derived data so a
// re-run of the extraction script never wipes them out.
const resourceLinks = JSON.parse(
  readFileSync(path.join(__dirname, "resource-links.json"), "utf-8"),
);
const extraResources = JSON.parse(
  readFileSync(path.join(__dirname, "extra-resources.json"), "utf-8"),
);
const dataDir = path.join(__dirname, "..", "src", "data");

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

const resources = [
  ...raw.resources.map((r) =>
    resourceLinks[r.resource] ? { ...r, link: resourceLinks[r.resource] } : r,
  ),
  ...extraResources,
];

writeModule("days.ts", "days", "Day", days);
writeModule("phases.ts", "phases", "Phase", phases);
writeModule("projects.ts", "projects", "Project", raw.projects);
writeModule("studySystem.ts", "studySystem", "StudySystemEntry", raw.studySystem);
writeModule("resources.ts", "resources", "Resource", resources);
writeModule("regressionSprints.ts", "regressionSprints", "RegressionSprint", raw.regressionSprints);
