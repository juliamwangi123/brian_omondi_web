"use client";

import { useFeedback } from "@/app/lib/hooks/useFeedback";

const SENTIMENT_STYLES = {
  positive: { color: "#10b981", bg: "#d1fae5" },
  neutral:  { color: "#d4a017", bg: "#fef3c7" },
  negative: { color: "#dc2626", bg: "#fee2e2" },
};

const WARD_LABELS: Record<string, string> = {
  musanda: "Musanda",
  etenje: "Etenje",
  mumias_central: "Mumias Central",
  mumias_north: "Mumias North",
};

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function RecentFeedback() {
  const { data, isLoading } = useFeedback(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold" style={{ color: "#1a2e1d", fontFamily: "Georgia, serif" }}>
          Recent Feedback
        </p>
        <a href="/admin/feedback" className="text-xs font-bold" style={{ color: "#d4a017" }}>
          View all →
        </a>
      </div>

      {isLoading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : data?.results?.length === 0 ? (
        <p className="text-xs text-gray-400">No feedback yet.</p>
      ) : (
        <div className="flex flex-col divide-y divide-gray-50">
          {data?.results?.slice(0, 3).map((f) => {
            const s = SENTIMENT_STYLES[f.sentiment];
            return (
              <div key={f.id} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "#1a5c2a" }}
                >
                  {f.name[0].toUpperCase()}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold" style={{ color: "#1a2e1d" }}>{f.name}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{timeAgo(f.created_at)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{f.message}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full capitalize"
                      style={{ color: s.color, background: s.bg }}
                    >
                      {f.sentiment}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                      {WARD_LABELS[f.ward] ?? f.ward}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}