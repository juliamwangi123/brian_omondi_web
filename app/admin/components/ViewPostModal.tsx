import { X, Calendar, Tag } from "lucide-react";

interface NewsPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: "published" | "draft";
  created_at: string;
  published_date: string | null;
  excerpt: string;
  content: string;
  hero_image_url: string;
}

interface ViewPostModalProps {
  post: NewsPost | null;
  onClose: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  campaign: "Campaign",
  manifesto: "Manifesto",
  community: "Community",
  events: "Events",
  press_release: "Press Release",
  general: "General",
};

export default function ViewPostModal({ post, onClose }: ViewPostModalProps) {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        {post.hero_image_url && (
          <div className="w-full  h-72 flex-shrink-0 overflow-hidden">
            <img
              src={post.hero_image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-6 pb-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex flex-col gap-2 flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: post.status === "published" ? "#d1fae5" : "#fef3c7",
                  color: post.status === "published" ? "#065f46" : "#92400e",
                }}
              >
                {post.status}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 flex items-center gap-1">
                <Tag size={10} />
                {CATEGORY_LABELS[post.category] ?? post.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar size={10} />
                {new Date(post.published_date ?? post.created_at).toLocaleDateString("en-US", {
                  month: "long", day: "numeric", year: "numeric",
                })}
              </span>
            </div>
            <h2
              className="text-xl font-bold leading-snug"
              style={{ fontFamily: "Georgia, serif", color: "#0d2b14" }}
            >
              {post.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all flex-shrink-0"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-7 py-5 flex flex-col gap-5">
          {/* Excerpt */}
          {post.excerpt && (
            <p
              className="text-sm text-gray-500 leading-relaxed border-l-2 pl-4"
              style={{ borderColor: "#d4a017" }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div
            className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Slug */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Public URL:{" "}
              <span className="text-[#d4a017] font-medium">/news/{post.slug}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}