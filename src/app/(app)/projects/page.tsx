import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PLACEHOLDER_MARKERS = ["placeholder", "unspecified", "then vs now", "then vs. now"];

function isPlaceholder(p: { purpose: string; evolution: string }) {
  const text = `${p.purpose} ${p.evolution}`.toLowerCase();
  return PLACEHOLDER_MARKERS.some((marker) => text.includes(marker));
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      {projects.map((p) => (
        <Card key={p.project}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">{p.project}</CardTitle>
            {isPlaceholder(p) && <Badge variant="outline">Pending your input</Badge>}
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <div>
              <span className="font-medium">When: </span>
              {p.when}
            </div>
            <div>
              <span className="font-medium">Purpose: </span>
              {p.purpose}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Evolution / Evidence: </span>
              {p.evolution}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
