"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", v: 12 }, { day: "Tue", v: 19 }, { day: "Wed", v: 8 },
  { day: "Thu", v: 27 }, { day: "Fri", v: 34 }, { day: "Sat", v: 22 }, { day: "Sun", v: 15 },
];

export default function MessagesChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <p className="text-sm font-bold mb-4" style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}>
        Messages This Week
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="msgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1a5c2a" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#1a5c2a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6b7280" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: "none", fontSize: 12 }} />
          <Area type="monotone" dataKey="v" stroke="#1a5c2a" strokeWidth={2} fill="url(#msgGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}