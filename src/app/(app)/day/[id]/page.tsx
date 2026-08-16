import { notFound } from "next/navigation";
import { days } from "@/data/days";
import { getDayProgress } from "@/lib/actions";
import { DayChecklist } from "@/components/DayChecklist";
import { CompleteDayDialog } from "@/components/CompleteDayDialog";
import { DayNavSidebar } from "@/components/DayNavSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dayNum = Number(id);
  const day = days.find((d) => d.day === dayNum);
  if (!day) notFound();

  const progressDoc = await getDayProgress(day.day);
  const sectionsDone = {
    learn: progressDoc?.learn ?? false,
    build: progressDoc?.build ?? false,
    project: progressDoc?.project ?? false,
    revision: progressDoc?.revision ?? false,
    check: progressDoc?.check ?? false,
  };

  return (
    <div className="flex">
      <DayNavSidebar currentDay={day.day} />
      <div className="mx-auto max-w-3xl flex-1 space-y-6 p-6">
        <h3 className="text-xl font-semibold">{day.phaseName}</h3>
        <Card>
          <CardHeader>
            <CardTitle>
              Day {day.day} / 75 — {day.focus}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Skill pillar: {day.skillPillar}
            </div>
            <DayChecklist day={day} sectionsDone={sectionsDone} />
            <CompleteDayDialog day={day.day} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
