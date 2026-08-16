import type { Day } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResourceFlowCard({ day }: { day: Day }) {
  const steps = [
    { label: "START HERE", step: day.resourceFlow.startHere },
    { label: "NEXT", step: day.resourceFlow.next },
    { label: "PRACTICE", step: day.resourceFlow.practice },
    { label: "VERIFY", step: day.resourceFlow.verify },
  ].filter((s) => s.step !== null);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        {steps.map(({ label, step }) => (
          <div key={label} className="flex gap-3">
            <Badge variant="secondary">{label}</Badge>
            <div>
              <div className="font-medium">
                {step!.icon} {step!.label}
              </div>
              <div className="text-sm text-muted-foreground">{step!.detail}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
