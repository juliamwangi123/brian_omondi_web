"use client";

import { useState } from "react";
import { Plus, Trash2, ImageIcon } from "lucide-react";
import AdminNavbar from "../components/AdminNavbar";
import ConfirmDialog from "../components/ConfirmDialog";
import { useGallery } from "@/app/lib/hooks/useGallery";
import Image from "next/image";
import { useDeleteGalleryImage } from "@/app/lib/hooks/useDeleteGalleryImage";
import GalleryMediaUpload from "../components/GalleryMediaUpload";

type CategoryFilter = "all" | "community" | "campaign" | "events";

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  category: string;
  uploaded_at: string;
}

export default function GalleryAdminPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [showUpload, setShowUpload] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const { data, isLoading } = useGallery(filter === "all" ? undefined : filter);
  const { mutate: deleteImage, isPending: isDeleting } = useDeleteGalleryImage();

  const items: GalleryItem[] = data?.results ?? [];

  const handleDeleteConfirm = () => {
    if (!selectedItem) return;
    deleteImage(selectedItem.id, {
      onSuccess: () => setSelectedItem(null),
    });
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminNavbar title="Gallery" />
      <div className="p-8 flex flex-col gap-6">

        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {(["all", "community", "campaign", "events"] as CategoryFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
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
            <span className="text-xs text-gray-400">{data?.count ?? 0} images</span>
            <button
              onClick={() => setShowUpload(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold"
              style={{ background: "#0d2b14", color: "#d4a017" }}
            >
              <Plus size={13} /> Add Image
            </button>
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-gray-100 animate-pulse" style={{ aspectRatio: "4/3" }} />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <ImageIcon size={24} className="text-gray-300" />
            </div>
            <p className="text-sm text-gray-400">No images in this category yet.</p>
            <button
              onClick={() => setShowUpload(true)}
              className="text-xs font-bold px-4 py-2 rounded-xl"
              style={{ background: "#0d2b14", color: "#d4a017" }}
            >
              Upload first image
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                  <p className="text-xs font-bold text-white truncate">{item.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold capitalize"
                      style={{ background: "rgba(212,160,23,0.2)", color: "#d4a017" }}
                    >
                      {item.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-6 h-6 rounded-lg flex items-center justify-center bg-red-500/80 hover:bg-red-500 transition-all"
                    >
                      <Trash2 size={11} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <GalleryMediaUpload onClose={() => setShowUpload(false)} />
      )}

      {/* Delete Confirm */}
      <ConfirmDialog
        isOpen={!!selectedItem}
        title="Delete image"
        message={`Are you sure you want to delete "${selectedItem?.title}"? This cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setSelectedItem(null)}
        isPending={isDeleting}
      />
    </div>
  );
}