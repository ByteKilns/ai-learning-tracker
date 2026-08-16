import { days } from "@/data/days";
import { phases } from "@/data/phases";
import { getAllProgress } from "@/lib/actions";
import { aggregateSkillPillars } from "@/lib/skill-pillars";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ActivityCalendar } from "@/components/ActivityCalendar";
import { ConfidenceTrendChart } from "@/components/ConfidenceTrendChart";
import { SkillPillarChart } from "@/components/SkillPillarChart";

export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  const progress = await getAllProgress();
  const completed = progress.filter((p) => p.status === "complete");
  const overallPercent = Math.round((completed.length / days.length) * 100);

  const confidenceLog = completed
    .filter((p) => p.confidence !== null)
    .sort((a, b) => a.day - b.day);

  const wentWrongLog = completed.filter((p) => p.whatWentWrong);

  const completedDates = completed
    .filter((p) => p.completedAt !== null)
    .map((p) => new Date(p.completedAt!).toISOString());

  const skillPillarData = aggregateSkillPillars(
    completed
      .map((p) => days.find((d) => d.day === p.day))
      .filter((d): d is (typeof days)[number] => d !== undefined),
  );

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
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ActivityCalendar completedDates={completedDates} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Confidence trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ConfidenceTrendChart
            data={confidenceLog.map((p) => ({ day: p.day, confidence: p.confidence! }))}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Time by skill pillar</CardTitle>
        </CardHeader>
        <CardContent>
          <SkillPillarChart data={skillPillarData} />
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
