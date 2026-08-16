"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { SkillPillarCount } from "@/lib/skill-pillars";

const MAX_ROWS = 8;

export function SkillPillarChart({ data }: { data: SkillPillarCount[] }) {
  if (data.length === 0) {
    return <div className="text-sm text-muted-foreground">No completed days yet.</div>;
  }

  const top = data.slice(0, MAX_ROWS);
  const otherCount = data.slice(MAX_ROWS).reduce((sum, d) => sum + d.count, 0);
  const chartData = otherCount > 0 ? [...top, { label: "Other", count: otherCount }] : top;
  const height = Math.max(180, chartData.length * 36);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
        <XAxis
          type="number"
          allowDecimals={false}
          tickLine={false}
          axisLine={false}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          width={140}
          tick={{ fill: "var(--foreground)", fontSize: 12 }}
        />
        <Tooltip
          cursor={{ fill: "var(--accent)" }}
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            color: "var(--popover-foreground)",
            fontSize: 12,
          }}
          formatter={(value) => [`${value} day${value === 1 ? "" : "s"}`, "Days"]}
        />
        <Bar dataKey="count" fill="var(--maroon)" radius={[0, 4, 4, 0]} maxBarSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
