'use client';

import { useNews } from "@/app/lib/hooks/useNews";
import NewsPostCard from "./NewsPostCard";

interface NewsPost {
  id: number;
  title: string;
  created_at: string;
  status: "published" | "draft";
}

export default function RecentPosts() {
  const { data, isLoading } = useNews();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
        Recent Posts
      </p>

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
            status={post.status}
          />
        ))
      )}
    </div>
  );
}