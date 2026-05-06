import { useState, useRef } from "react";
import { Upload, X, AlertCircle, Loader2 } from "lucide-react";
import { useGalleryUpload } from "@/app/lib/hooks/useGalleryUplaod";

interface FormData {
  title: string;
  category: string;
  image: File | null;
}

interface FormErrors {
  title?: string;
  category?: string;
  image?: string;
}

const CATEGORIES = [
  { value: "community", label: "Community" },
  { value: "campaign", label: "Campaign" },
  { value: "events", label: "Events" },
];

interface GalleryMediaUploadProps {
  onClose: () => void;
}

export default function GalleryMediaUpload({ onClose }: GalleryMediaUploadProps) {
  const [formData, setFormData] = useState<FormData>({
    title: "", category: "", image: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: uploadImage, isPending, isError } = useGalleryUpload();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.category) newErrors.category = "Please select a category.";
    if (!formData.image) newErrors.image = "Please select an image.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setErrors(prev => ({ ...prev, image: "File must be an image." }));
      return;
    }
    setFormData(prev => ({ ...prev, image: file }));
    setErrors(prev => ({ ...prev, image: undefined }));
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = () => {
    if (!validate()) return;
    uploadImage(
      { title: formData.title, category: formData.category, image: formData.image! },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-[#1a2e1d]" style={{ fontFamily: "Georgia, serif" }}>
            Upload Image
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
          >
            <X size={14} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto">

          {isError && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <span className="text-sm text-red-700 font-medium">Upload failed. Please try again.</span>
            </div>
          )}

          {/* Image upload */}
          <div className={`rounded-2xl border p-4 ${errors.image ? "border-red-300" : "border-gray-100"}`}>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Image</p>
            {preview ? (
              <div className="relative rounded-xl overflow-hidden" style={{ height: 200 }}>
                <img src={preview} alt="preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => { setPreview(null); setFormData(prev => ({ ...prev, image: null })); }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all"
                >
                  <X size={12} />
                </button>
                <div className="absolute bottom-2 left-2 bg-black/50 rounded-lg px-2 py-1">
                  <span className="text-xs text-white truncate max-w-[180px] block">{formData.image?.name}</span>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center gap-2 cursor-pointer transition-all group ${isDragging ? "border-[#d4a017] bg-[#faf7f0]" : "border-gray-200 hover:border-[#d4a017] hover:bg-[#faf7f0]"}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDragging ? "bg-[#0d2b14]" : "bg-gray-100 group-hover:bg-[#0d2b14]"}`}>
                  <Upload size={16} className={`transition-colors ${isDragging ? "text-[#d4a017]" : "text-gray-400 group-hover:text-[#d4a017]"}`} />
                </div>
                <p className="text-sm font-semibold text-gray-500">Drop image or click to browse</p>
                <p className="text-xs text-gray-400">JPG, PNG or WEBP</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => { const file = e.target.files?.[0]; if (file) handleFile(file); }}
            />
            {errors.image && (
              <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.image}
              </p>
            )}
          </div>

          {/* Title */}
          <div className={`rounded-2xl border p-4 ${errors.title ? "border-red-300" : "border-gray-100"}`}>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Title</p>
            <input
              type="text"
              placeholder="e.g. Sunday Worship with the Community"
              value={formData.title}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, title: e.target.value }));
                setErrors(prev => ({ ...prev, title: undefined }));
              }}
              className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none bg-gray-50 focus:border-[#d4a017] transition-colors"
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.title}
              </p>
            )}
          </div>

          {/* Category */}
          <div className={`rounded-2xl border p-4 ${errors.category ? "border-red-300" : "border-gray-100"}`}>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Category</p>
            <select
              value={formData.category}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, category: e.target.value }));
                setErrors(prev => ({ ...prev, category: undefined }));
              }}
              className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none bg-gray-50 transition-colors focus:border-[#d4a017]"
              style={{ color: formData.category ? "#0d2b14" : "#9ca3af" }}
            >
              <option value="" disabled>Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
            {errors.category && (
              <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.category}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pt-2 pb-8 flex gap-3">
          <button
            onClick={onClose}
            disabled={isPending}
            className="flex-1 py-3 rounded-xl text-xs font-bold border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all disabled:opacity-40"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "#0d2b14", color: "#d4a017" }}
          >
            {isPending ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
            {isPending ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}