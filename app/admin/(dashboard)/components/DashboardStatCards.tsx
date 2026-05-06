'use client';

import StatCard from "./StatCard";
import { MessageSquare, Users, ThumbsUp, Eye } from "lucide-react";
import { useFeedbackStats } from "@/app/lib/hooks/useFeedbackStats";
import { useNews } from "@/app/lib/hooks/useNews";

export default function DashboardStatCards() {
  const { data, isLoading } = useFeedbackStats();
  const { data: publishedData } = useNews(1, "published");
  const { data: draftData } = useNews(1, "draft");

  const publishedCount = publishedData?.count ?? 0;
  const draftCount = draftData?.count ?? 0;

  return (
    <div className="pb-6  px-6 pt-10 flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          label="Total Feedback"
          value={isLoading ? "--" : String(data?.total ?? 0)}
          sub="All wards combined"
          icon={MessageSquare}
          color="#1a5c2a"
        />
        <StatCard
          label="Active Wards"
          value={isLoading ? "--" : String(data?.active_wards ?? 0)}
          sub="Wards with feedback"
          icon={Users}
          color="#d4a017"
        />
        <StatCard
          label="Sentiment Score"
          value={isLoading ? "--" : `${data?.positive_score ?? 0}%`}
          sub="Positive overall"
          icon={ThumbsUp}
          color="#10b981"
        />
        <StatCard
          label="Published Posts"
          value={String(publishedCount)}
          sub={`${draftCount} draft${draftCount !== 1 ? "s" : ""} pending`}
          icon={Eye}
          color="#2d7a40"
        />
      </div>
    </div>
  );
}