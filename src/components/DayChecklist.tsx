"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { toggleSection } from "@/lib/actions";
import type { Day, ResourceStep, SectionKey } from "@/lib/types";
import { useOptimistic, useTransition } from "react";

const SECTION_LABELS: Record<SectionKey, string> = {
  learn: "Learn",
  build: "Build",
  project: "Project",
  revision: "Revision",
  check: "Check",
};

function resourceStepsFor(day: Day, key: SectionKey): ResourceStep[] {
  switch (key) {
    case "learn":
      return [day.resourceFlow.startHere, day.resourceFlow.next].filter(
        (step): step is ResourceStep => step !== null,
      );
    case "build":
      return [day.resourceFlow.practice];
    case "check":
      return [day.resourceFlow.verify];
    default:
      return [];
  }
}

export function DayChecklist({
  day,
  sectionsDone,
}: {
  day: Day;
  sectionsDone: Record<SectionKey, boolean>;
}) {
  const [isPending, startTransition] = useTransition();
  const [optimisticSectionsDone, setOptimisticDone] = useOptimistic(
    sectionsDone,
    (state, { key, checked }: { key: SectionKey; checked: boolean }) => ({
      ...state,
      [key]: checked,
    }),
  );
  const keys: SectionKey[] = ["learn", "build", "project", "revision", "check"];

  return (
    <div className="space-y-3">
      {keys.map((key) => {
        const resourceSteps = resourceStepsFor(day, key);
        return (
          <label key={key} className="flex items-start gap-3 rounded-md border p-3">
            <Checkbox
              checked={optimisticSectionsDone[key]}
              disabled={isPending}
              onCheckedChange={(checked) => {
                const done = checked === true;
                startTransition(async () => {
                  setOptimisticDone({ key, checked: done });
                  await toggleSection(day.day, key, done);
                });
              }}
            />
            <div className="flex-1">
              <div className="font-medium">
                {SECTION_LABELS[key]} — {day.sections[key].durationMin} min
              </div>
              <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                {day.sections[key].items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {resourceSteps.length > 0 && (
                <div className="mt-2 space-y-1 border-t pt-2">
                  {resourceSteps.map((step, i) => (
                    <div key={i} className="text-sm">
                      <span>{step.icon}</span>{" "}
                      <span className="font-medium">{step.label}:</span>{" "}
                      <span className="text-muted-foreground">{step.detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}
