import { buildActivityWeeks } from "@/lib/activity-grid";
import { cn } from "@/lib/utils";

const INTENSITY_CLASSES = ["bg-muted", "bg-maroon/40", "bg-maroon/70", "bg-maroon"];

function intensityClass(count: number) {
  if (count <= 0) return INTENSITY_CLASSES[0];
  if (count === 1) return INTENSITY_CLASSES[1];
  if (count === 2) return INTENSITY_CLASSES[2];
  return INTENSITY_CLASSES[3];
}

export function ActivityCalendar({ completedDates }: { completedDates: string[] }) {
  const weeks = buildActivityWeeks(completedDates, new Date());

  return (
    <div className="space-y-2">
      <div className="flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, i) => (
          <div key={i} className="flex flex-col gap-1">
            {week.map((cell) => (
              <div
                key={cell.date}
                title={`${cell.date}: ${cell.count} day${cell.count === 1 ? "" : "s"} completed`}
                className={cn("size-3 rounded-sm", intensityClass(cell.count))}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <span>Less</span>
        {INTENSITY_CLASSES.map((c) => (
          <div key={c} className={cn("size-3 rounded-sm", c)} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
