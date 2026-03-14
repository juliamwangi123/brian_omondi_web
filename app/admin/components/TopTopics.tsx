"use client";

const topics = [
  { topic: "Roads",     count: 43 },
  { topic: "Education", count: 31 },
  { topic: "Health",    count: 28 },
  { topic: "Water",     count: 19 },
  { topic: "Youth",     count: 14 },
];

const max = topics[0].count;

export default function TopTopics() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <p className="text-sm font-bold mb-4" style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}>
        Top Topics
      </p>
      <div className="flex flex-col gap-3">
        {topics.map((t, i) => (
          <div key={t.topic}>
            <div className="flex justify-between mb-1">
              <span className="text-xs" style={{ color: "#6b7280" }}>{t.topic}</span>
              <span className="text-xs font-bold" style={{ color: "#1a2e1d" }}>{t.count}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "#f3f4f6" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(t.count / max) * 100}%`,
                  background: i === 0 ? "#d4a017" : "#1a5c2a",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}