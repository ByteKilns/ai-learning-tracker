import type { RegressionAdditionDoc } from "@/lib/actions";
import type { RegressionSprint } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RegressionSprintCard({
  sprint,
  additions,
}: {
  sprint: RegressionSprint;
  additions: RegressionAdditionDoc[];
}) {
  return (
    <Card className="border-amber-400 bg-amber-50 dark:bg-amber-950">
      <CardHeader>
        <CardTitle className="text-base">
          Regression Sprint {sprint.sprint} — Day {sprint.day}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div>
          <span className="font-medium">Retrieve: </span>
          {sprint.whatToRetrieve}
        </div>
        <div>
          <span className="font-medium">Blank-page reconstruction: </span>
          {sprint.blankPageReconstruction}
        </div>
        <div>
          <span className="font-medium">Integration drill: </span>
          {sprint.integrationDrill}
        </div>
        <div>
          <span className="font-medium">Pass condition: </span>
          {sprint.passCondition}
        </div>
        {additions.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {additions.map((a, i) => (
              <Badge key={i} variant="outline">
                Added from Day {a.sourceDay}: {a.topic}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
