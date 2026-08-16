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
