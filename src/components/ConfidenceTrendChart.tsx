"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function ConfidenceTrendChart({
  data,
}: {
  data: { day: number; confidence: number }[];
}) {
  if (data.length === 0) {
    return <div className="text-sm text-muted-foreground">No completed days yet.</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          tickFormatter={(d) => `Day ${d}`}
        />
        <YAxis
          domain={[1, 5]}
          ticks={[1, 2, 3, 4, 5]}
          tickLine={false}
          axisLine={false}
          width={32}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <Tooltip
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            color: "var(--popover-foreground)",
            fontSize: 12,
          }}
          labelFormatter={(d) => `Day ${d}`}
          formatter={(value) => [`${value} / 5`, "Confidence"]}
        />
        <Line
          type="monotone"
          dataKey="confidence"
          stroke="var(--maroon)"
          strokeWidth={2}
          dot={{ r: 4, fill: "var(--maroon)" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
