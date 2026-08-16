import { resources } from "@/data/resources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Books & Resources</h1>
      {resources.map((r) => (
        <Card key={r.resource}>
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <CardTitle className="text-base">{r.resource}</CardTitle>
            {r.link && (
              <Button
                variant="outline"
                size="sm"
                render={<a href={r.link} target="_blank" rel="noopener noreferrer" />}
              >
                Open ↗
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Role: </span>
              {r.role}
            </div>
            <div>
              <span className="font-medium">When to use: </span>
              {r.whenToUse}
            </div>
            {r.notes && (
              <div className="text-muted-foreground">
                <span className="font-medium">Notes: </span>
                {r.notes}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
