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
