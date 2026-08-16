import Link from "next/link";
import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";

export function DayNavSidebar({ currentDay }: { currentDay: number }) {
  const phase = phases.find((p) => currentDay >= p.startDay && currentDay <= p.endDay);
  const days = phase
    ? Array.from({ length: phase.endDay - phase.startDay + 1 }, (_, i) => phase.startDay + i)
    : [];

  return (
    <aside className="sticky top-0 flex h-screen w-48 shrink-0 flex-col gap-4 overflow-y-auto border-r p-4 text-sm">
      <Link href="/roadmap" className="text-muted-foreground hover:text-foreground">
        ← Back to Roadmap
      </Link>
      {phase && (
        <div className="space-y-1">
          <div className="px-1 text-xs font-medium text-muted-foreground">{phase.name}</div>
          <nav className="flex flex-col gap-1">
            {days.map((d) => (
              <Link
                key={d}
                href={`/day/${d}`}
                className={cn(
                  "rounded-md px-3 py-1.5",
                  d === currentDay
                    ? "bg-maroon font-medium text-maroon-foreground"
                    : "text-muted-foreground hover:bg-accent",
                )}
              >
                Day {d}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
