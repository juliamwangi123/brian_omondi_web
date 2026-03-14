"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Positive", value: 58, color: "#10b981" },
  { name: "Neutral",  value: 27, color: "#d4a017" },
  { name: "Negative", value: 15, color: "#dc2626" },
];

export default function SentimentBreakdown() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <p className="text-sm font-bold mb-4" style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}>
        Sentiment Breakdown
      </p>
      <div className="flex items-center gap-6">
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value" strokeWidth={0}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-2">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
              <span className="text-xs w-16" style={{ color: "#6b7280" }}>{d.name}</span>
              <span className="text-xs font-bold" style={{ color: "#1a2e1d" }}>{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}