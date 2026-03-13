"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from '@tiptap/extensions'
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { TextStyle } from '@tiptap/extension-text-style'
import {
  Bold, Italic, Underline as UnderlineIcon, Heading2, Heading3,
  List, ListOrdered, Quote, AlignLeft, AlignCenter, AlignRight,
  AlignJustify, Link as LinkIcon, ImageIcon, Upload, Send, FileText, Minus, CheckCircle, AlertCircle, Loader2
} from "lucide-react";
import { useState } from "react";
import { useNewsContent } from "@/app/lib/hooks/useNewsContent";

interface PostData {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  hero_image: File | null;
  content: string;
}

const CATEGORIES = [
  { value: "campaign", label: "Campaign News" },
  { value: "manifesto", label: "Manifesto" },
  { value: "community", label: "Community" },
  { value: "events", label: "Events" },
  { value: "press_release", label: "Press Release" },
  { value: "general", label: "General" },
]

export default function TiptapEditor() {
  const [postData, setPostData] = useState<PostData>({
    title: "", excerpt: "", category: "", slug: "", hero_image: null, content: "",
  });

  const { mutate: submitNewsContent, isPending, isSuccess, isError } = useNewsContent();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Write your post content here..." }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
      Image,
      TextStyle,
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[320px] text-gray-700 text-base leading-relaxed px-1",
      },
    },
    onUpdate: ({ editor }) => {
      setPostData((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    setPostData((prev) => ({ ...prev, title, slug }));
  };

  const handleSubmit = (status: "published" | "draft") => {
    submitNewsContent({ ...postData, status },
    {
    onSuccess: () => {
      setPostData({
        title: "", excerpt: "", category: "", slug: "", hero_image: null, content: "",
      });
      editor?.commands.clearContent();
    }
  })
  };

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) editor?.chain().focus().setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL:");
    if (url) editor?.chain().focus().setImage({ src: url }).run();
  };

  if (!editor) return null;

  const toolbarGroups = [
    [
      { icon: Bold, action: () => editor.chain().focus().toggleBold().run(), label: "Bold", active: editor.isActive("bold") },
      { icon: Italic, action: () => editor.chain().focus().toggleItalic().run(), label: "Italic", active: editor.isActive("italic") },
      { icon: UnderlineIcon, action: () => editor.chain().focus().toggleUnderline().run(), label: "Underline", active: editor.isActive("underline") },
    ],
    [
      { icon: Heading2, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), label: "Heading 2", active: editor.isActive("heading", { level: 2 }) },
      { icon: Heading3, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), label: "Heading 3", active: editor.isActive("heading", { level: 3 }) },
    ],
    [
      { icon: List, action: () => editor.chain().focus().toggleBulletList().run(), label: "Bullet List", active: editor.isActive("bulletList") },
      { icon: ListOrdered, action: () => editor.chain().focus().toggleOrderedList().run(), label: "Ordered List", active: editor.isActive("orderedList") },
      { icon: Quote, action: () => editor.chain().focus().toggleBlockquote().run(), label: "Blockquote", active: editor.isActive("blockquote") },
      { icon: Minus, action: () => editor.chain().focus().setHorizontalRule().run(), label: "Divider", active: false },
    ],
    [
      { icon: AlignLeft, action: () => editor.chain().focus().setTextAlign("left").run(), label: "Align Left", active: editor.isActive({ textAlign: "left" }) },
      { icon: AlignCenter, action: () => editor.chain().focus().setTextAlign("center").run(), label: "Align Center", active: editor.isActive({ textAlign: "center" }) },
      { icon: AlignRight, action: () => editor.chain().focus().setTextAlign("right").run(), label: "Align Right", active: editor.isActive({ textAlign: "right" }) },
      { icon: AlignJustify, action: () => editor.chain().focus().setTextAlign("justify").run(), label: "Justify", active: editor.isActive({ textAlign: "justify" }) },
    ],
    [
      { icon: LinkIcon, action: addLink, label: "Add Link", active: editor.isActive("link") },
      { icon: ImageIcon, action: addImage, label: "Add Image", active: false },
    ],
  ];

  return (
    <div className="flex gap-8 p-8 w-full" style={{ background: "#f9fafb", minHeight: "calc(100vh - 64px)" }}>

      <div className="flex-1 flex flex-col gap-5 min-w-0">

        {/* Success banner */}
        {isSuccess && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm text-emerald-700 font-medium">Post saved successfully!</span>
          </div>
        )}

        {/* Error banner */}
        {isError && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
            <span className="text-sm text-red-700 font-medium">Something went wrong. Please try again.</span>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 px-8 py-6 shadow-sm">
          <input
            type="text"
            placeholder="Post title..."
            value={postData.title}
            onChange={handleTitleChange}
            className="w-full outline-none border-none text-3xl font-bold placeholder-gray-200 bg-transparent"
            style={{ fontFamily: "Georgia, serif", color: "#0d2b14" }}
          />
          <div className="mt-4 pt-4 border-t border-gray-100">
            <label className="text-xs font-bold tracking-widest uppercase text-gray-300 block mb-2">Excerpt</label>
            <textarea
              placeholder="A short 1–2 sentence summary shown on the news listing page..."
              value={postData.excerpt}
              onChange={(e) => setPostData((prev) => ({ ...prev, excerpt: e.target.value }))}
              rows={2}
              className="w-full text-sm text-gray-500 outline-none border-none resize-none placeholder-gray-300 bg-transparent leading-relaxed"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1">
          <div className="flex items-center flex-wrap gap-0.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
            {toolbarGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-0.5">
                {groupIndex > 0 && <div className="w-px h-5 bg-gray-200 mx-1.5" />}
                {group.map(({ icon: Icon, action, label, active }) => (
                  <button
                    key={label}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      action();
                    }}
                    title={label}
                    className="p-2 rounded-lg transition-all hover:bg-gray-100"
                    style={{
                      background: active ? "#0d2b14" : "transparent",
                      color: active ? "#d4a017" : "#9ca3af",
                    }}
                  >
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="px-8 py-6">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4" style={{ width: 260, flexShrink: 0 }}>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Cover Image</p>
          <div
            className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-all hover:border-[#d4a017] hover:bg-[#faf7f0] group"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#0d2b14] flex items-center justify-center transition-colors">
              <Upload size={15} className="text-gray-400 group-hover:text-[#d4a017]" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-relaxed">JPG, PNG or WEBP</span>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setPostData((prev) => ({ ...prev, hero_image: file }));
            }}
          />
          {postData.hero_image && (
            <div className="mt-2 flex items-center gap-2 bg-emerald-50 rounded-lg px-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-xs text-emerald-700 truncate">{postData.hero_image.name}</span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Category</p>
          <select
            value={postData.category}
            onChange={(e) => setPostData((prev) => ({ ...prev, category: e.target.value }))}
            className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none bg-gray-50 transition-colors focus:border-[#d4a017]"
            style={{ color: postData.category ? "#0d2b14" : "#9ca3af" }}
          >
            <option value="" disabled>Select category</option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">URL Slug</p>
          <input
            type="text"
            value={postData.slug}
            onChange={(e) => setPostData((prev) => ({ ...prev, slug: e.target.value }))}
            placeholder="post-url-slug"
            className="w-full border border-gray-100 rounded-xl px-3 py-2.5 text-sm outline-none bg-gray-50 focus:border-[#d4a017] transition-colors"
          />
          <p className="text-xs text-gray-400 mt-2 break-all leading-relaxed">
            /news/<span className="text-[#d4a017] font-medium">{postData.slug || "post-slug"}</span>
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <button
            onClick={() => handleSubmit("published")}
            disabled={isPending}
            className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "#0d2b14", color: "#d4a017" }}
          >
            {isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            {isPending ? "Publishing..." : "Publish Post"}
          </button>
          <button
            onClick={() => handleSubmit("draft")}
            disabled={isPending}
            className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border border-gray-200 text-gray-400 hover:border-gray-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 size={14} className="animate-spin" /> : <FileText size={14} />}
            {isPending ? "Saving..." : "Save as Draft"}
          </button>
        </div>
      </div>
    </div>
  );
}