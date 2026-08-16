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
