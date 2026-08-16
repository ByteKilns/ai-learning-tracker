import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DayLoading() {
  return (
    <div className="flex">
      <aside className="sticky top-0 flex h-screen w-48 shrink-0 flex-col gap-4 bg-muted/50 p-4">
        <Skeleton className="h-7 w-32" />
        <div className="space-y-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-full" />
          ))}
        </div>
      </aside>
      <div className="mx-auto max-w-3xl flex-1 space-y-6 p-6">
        <Skeleton className="h-6 w-56" />
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-64" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-48" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 rounded-md border p-3">
                  <Skeleton className="mt-0.5 size-4 shrink-0 rounded-sm" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              ))}
            </div>
            <Skeleton className="h-8 w-32" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
