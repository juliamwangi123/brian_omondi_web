import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmDialog from "./ConfirmDialog";
import ViewPostModal from "./ViewPostModal";
import { useDeleteNews } from "@/app/lib/hooks/useDeleteNews";

interface NewsPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: "published" | "draft";
  created_at: string;
  excerpt: string;
  content: string;
  hero_image_url: string;
}

interface NewsTableProps {
  posts: NewsPost[];
}

const CATEGORY_LABELS: Record<string, string> = {
  campaign: "Campaign",
  manifesto: "Manifesto",
  community: "Community",
  events: "Events",
  press_release: "Press Release",
  general: "General",
};

export default function NewsTable({ posts }: NewsTableProps) {
  const { mutate: deletePost, isPending } = useDeleteNews();
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);
  const [viewPost, setViewPost] = useState<NewsPost | null>(null);

  const handleDeleteConfirm = () => {
    if (!selectedPost) return;
    deletePost(selectedPost.id, {
      onSuccess: () => setSelectedPost(null),
    });
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/80">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[45%]">Title</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[15%]">Category</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[12%]">Status</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[16%]">Date</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-gray-400 w-[12%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors last:border-none"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-[#1a2e1d] truncate">{post.title}</p>
                  <p className="text-xs text-gray-300 mt-0.5 truncate">/news/{post.slug}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap">
                    {CATEGORY_LABELS[post.category] ?? post.category}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: post.status === "published" ? "#d1fae5" : "#fef3c7",
                      color: post.status === "published" ? "#065f46" : "#92400e",
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-gray-400 whitespace-nowrap">
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    month: "short", day: "numeric", year: "numeric",
                  })}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <button
                      title="View"
                      onClick={() => setViewPost(post)}
                      className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                    >
                      <Eye size={13} />
                    </button>
                    <button
                      title="Edit"
                      className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                    >
                      <Pencil size={13} />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => setSelectedPost(post)}
                      className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmDialog
        isOpen={!!selectedPost}
        title="Delete post"
        message={`Are you sure you want to delete "${selectedPost?.title}"? This action cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setSelectedPost(null)}
        isPending={isPending}
      />

      <ViewPostModal
        post={viewPost}
        onClose={() => setViewPost(null)}
      />
    </>
  );
}