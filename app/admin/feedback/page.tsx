"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AdminNavbar from "../components/AdminNavbar";
import FeedbackTable from "../components/FeedbackTable";
import { useFeedback } from "@/app/lib/hooks/useFeedback";
import FeedbackTableSkeleton from "../components/FeedbackTableSkeleton";

type Filter = "all" | "positive" | "neutral" | "negative";

export default function FeedbackPage() {
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { data, isLoading } = useFeedback(page, activeFilter);

  const feedback = data?.results ?? [];
  const totalPages = Math.ceil((data?.count ?? 0) / 10);

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
    setPage(1);
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Feedback" />
      <div className="p-8 flex flex-col gap-6">

        {isLoading ? (
          <FeedbackTableSkeleton />
        ) : (
          <FeedbackTable
            feedback={feedback}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            total={data?.count ?? 0}
          />
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-gray-400">Page {page} of {totalPages}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={!data?.previous}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setPage(p => p + 1)}
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