import { FileText } from "lucide-react";

interface NewsPostCardProps {
  title: string;
  created_at: string;
  published_date: string | null;
  status: "published" | "draft";
}

export default function NewsPostCard({ title, created_at, published_date, status }: NewsPostCardProps) {
  const formattedDate = new Date(published_date ?? created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-gray-100 last:border-none">
      <div className="flex items-start gap-3 min-w-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: "#f3f4f6" }}
        >
          <FileText size={14} style={{ color: "#6b7280" }} />
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-semibold leading-snug truncate"
            style={{ color: "#1a2e1d" }}
          >
            {title}
          </p>
          <p className="text-xs mt-1" style={{ color: "#9ca3af" }}>
            {formattedDate}
          </p>
        </div>
      </div>

      <span
        className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
        style={{
          background: status === "published" ? "#d1fae5" : "#fef3c7",
          color: status === "published" ? "#10b981" : "#d4a017",
        }}
      >
        {status}
      </span>
    </div>
  );
}