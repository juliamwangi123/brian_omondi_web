"use client";

import { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../components/AdminNavbar";
import NewsTable from "../components/NewsTable";
import { useNews } from "@/app/lib/hooks/useNews";
import NewsTableSkeleton from "../components/NewsTableSkeleton";

type FilterStatus = "all" | "published" | "draft";

export default function NewsPage() {
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useNews(page);
  const router = useRouter();

  const posts = data?.results ?? [];
  const filtered = filter === "all" ? posts : posts.filter((p) => p.status === filter);
  const totalPages = Math.ceil((data?.count ?? 0) / 10);

  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="News" />
      <div className="p-8 flex flex-col gap-6">

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {(["all", "published", "draft"] as FilterStatus[]).map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setPage(1); }}
                className="px-3 py-1.5 rounded-full text-xs font-bold capitalize border transition-all"
                style={{
                  background: filter === f ? "#0d2b14" : "transparent",
                  color: filter === f ? "#d4a017" : "#6b7280",
                  borderColor: filter === f ? "#0d2b14" : "#e5e7eb",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{data?.count ?? 0} posts</span>
            <button
              onClick={() => router.push("/admin/content")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold"
              style={{ background: "#0d2b14", color: "#d4a017" }}
            >
              <Plus size={13} /> New post
            </button>
          </div>
        </div>

        {isLoading ? (
          <NewsTableSkeleton />
        ) : filtered.length === 0 ? (
          <p className="text-sm text-gray-400">No posts found.</p>
        ) : (
          <NewsTable posts={filtered} />
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-gray-400">
              Page {page} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!data?.previous}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={!data?.next}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}