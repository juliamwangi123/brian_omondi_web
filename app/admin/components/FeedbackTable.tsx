import { useState } from "react";
import { Inbox, X } from "lucide-react";

type Sentiment = "positive" | "neutral" | "negative";
type Filter = "all" | Sentiment;

interface Feedback {
  id: number;
  name: string;
  ward: string;
  message: string;
  created_at: string;
  sentiment: Sentiment;
}

interface FeedbackTableProps {
  feedback: Feedback[];
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  total: number;
}

const WARD_LABELS: Record<string, string> = {
  musanda: "Musanda",
  etenje: "Etenje",
  mumias_central: "Mumias Central",
  mumias_north: "Mumias North",
};

const SENTIMENT_STYLES: Record<Sentiment, { color: string; bg: string; label: string }> = {
  positive: { color: "#10b981", bg: "#d1fae5", label: "Positive" },
  neutral:  { color: "#d4a017", bg: "#fef3c7", label: "Neutral"  },
  negative: { color: "#dc2626", bg: "#fee2e2", label: "Negative" },
};

const FILTERS: { label: string; value: Filter; color?: string }[] = [
  { label: "All",      value: "all"      },
  { label: "Positive", value: "positive", color: "#10b981" },
  { label: "Neutral",  value: "neutral",  color: "#d4a017" },
  { label: "Negative", value: "negative", color: "#dc2626" },
];

function FeedbackModal({ item, onClose }: { item: Feedback; onClose: () => void }) {
  const s = SENTIMENT_STYLES[item.sentiment];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(13, 43, 20, 0.45)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl"
        style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 rounded-t-2xl border-b border-gray-100"
          style={{ background: "#f9fafb" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: "#1a5c2a" }}
            >
              {item.name[0].toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#1a2e1d" }}>{item.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {new Date(item.created_at).toLocaleDateString("en-US", {
                  month: "long", day: "numeric", year: "numeric",
                })}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
            style={{ color: "#6b7280" }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-5">
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            {item.message}
          </p>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 border border-gray-200">
            {WARD_LABELS[item.ward] ?? item.ward}
          </span>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ color: s.color, background: s.bg }}
          >
            {s.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeedbackTable({
  feedback,
  activeFilter,
  onFilterChange,
  total,
}: FeedbackTableProps) {
  const [selected, setSelected] = useState<Feedback | null>(null);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => onFilterChange(f.value)}
                className="text-xs font-bold px-4 py-2 rounded-full transition-all border"
                style={{
                  background: isActive ? (f.color ?? "#1a5c2a") : "transparent",
                  color: isActive ? "#ffffff" : (f.color ?? "#6b7280"),
                  borderColor: isActive ? (f.color ?? "#1a5c2a") : "#e5e7eb",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-gray-400">
          {total} {total === 1 ? "message" : "messages"}
        </p>
      </div>

      {/* Table */}
      {feedback.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "#f3f4f6" }}>
            <Inbox size={22} className="text-gray-300" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-400">No feedback yet</p>
            <p className="text-xs text-gray-300 mt-1">Messages from constituents will appear here</p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/80">
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[18%]">Name</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[14%]">Ward</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[40%]">Message</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[14%]">Sentiment</th>
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[14%]">Date</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((f) => {
                const s = SENTIMENT_STYLES[f.sentiment];
                return (
                  <tr
                    key={f.id}
                    className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors last:border-none cursor-pointer"
                    onClick={() => setSelected(f)}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: "#1a5c2a" }}
                        >
                          {f.name[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-semibold text-[#1a2e1d] truncate">{f.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap">
                        {WARD_LABELS[f.ward] ?? f.ward}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-gray-500 truncate">{f.message}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full capitalize whitespace-nowrap"
                        style={{ color: s.color, background: s.bg }}
                      >
                        {s.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(f.created_at).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <FeedbackModal item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}