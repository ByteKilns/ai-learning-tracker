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
