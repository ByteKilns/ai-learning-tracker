import { Progress } from "@/components/ui/progress";

export function ProgressRing({ percent }: { percent: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Progress</span>
        <span>{percent}%</span>
      </div>
      <Progress value={percent} />
    </div>
  );
}
