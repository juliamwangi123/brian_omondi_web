'use client';

import { useNews } from "@/app/lib/hooks/useNews";
import NewsPostCard from "./NewsPostCard";

interface NewsPost {
  id: number;
  title: string;
  created_at: string;
  published_date: string | null;
  status: "published" | "draft";
}

interface RecentPostsProps {
  dashboard?: boolean;
}

export default function RecentPosts({ dashboard = false }: RecentPostsProps) {
  const { data, isLoading } = useNews();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
          Recent Posts
        </p>
        {dashboard && (
          <a href="/admin/news" className="text-xs font-bold" style={{ color: "#d4a017" }}>
            View all →
          </a>
        )}
      </div>

      {isLoading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : data?.results?.length === 0 ? (
        <p className="text-xs text-gray-400">No posts yet.</p>
      ) : (
        data?.results?.slice(0, 5).map((post: NewsPost) => (
          <NewsPostCard
            key={post.id}
            title={post.title}
            created_at={post.created_at}
            published_date={post.published_date}
            status={post.status}
          />
        ))
      )}
    </div>
  );
}