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
