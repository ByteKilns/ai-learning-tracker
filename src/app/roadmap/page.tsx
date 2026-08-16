import { phases } from "@/data/phases";
import { regressionSprints } from "@/data/regressionSprints";
import { getAllProgress, getRegressionAdditions } from "@/lib/actions";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { RegressionSprintCard } from "@/components/RegressionSprintCard";

export const dynamic = "force-dynamic";

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
