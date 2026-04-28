"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { useGallery, type GalleryImage } from "@/app/lib/hooks/useGallery";
import { ChevronLeft, ChevronRight, X, Camera, ZoomIn } from "lucide-react";

const CATEGORIES = [
  { id: "", label: "All Photos" },
  { id: "community", label: "Community" },
  { id: "campaign", label: "Campaign" },
  { id: "events", label: "Events" },
] as const;

/* ─── Lightbox ─── */
function Lightbox({
  items, currentIndex, onClose, onPrev, onNext,
}: {
  items: GalleryImage[]; currentIndex: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const item = items[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-20">
        <span className="text-white/40 text-sm font-medium" style={{ fontFamily: "Century_Gothic_Regular" }}>
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className="relative px-4"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={item.image_url}
            alt={item.title}
            className="block rounded-lg max-w-[92vw] max-h-[80vh] object-contain mx-auto"
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 z-20 text-center">
        <p className="text-white/90 text-sm font-semibold mb-1" style={{ fontFamily: "Century_Gothic_Bold" }}>
          {item.title}
        </p>
        <p className="text-white/40 text-xs uppercase tracking-wider">{item.category}</p>
      </div>
    </motion.div>
  );
}

/* ─── Photo Card ─── */
function PhotoCard({ item, onOpen, index }: {
  item: GalleryImage; onOpen: () => void; index: number;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-200"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <img
        src={item.image_url}
        alt={item.title}
        className="w-full h-auto block group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        loading="lazy"
        decoding="async"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
        <ZoomIn className="w-4 h-4 text-[#000073]" />
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-semibold leading-snug line-clamp-2" style={{ fontFamily: "Century_Gothic_Bold" }}>
          {item.title}
        </p>
        <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">{item.category}</p>
      </div>
    </motion.div>
  );
}

/* ─── Skeleton ─── */
function SkeletonGrid() {
  const heights = [280, 200, 240, 320, 220, 260, 200, 300, 240];
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {heights.map((h, i) => (
        <div
          key={i}
          className="rounded-xl bg-gray-200 animate-pulse mb-4 break-inside-avoid"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* ─── Main Page ─── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const category = activeCategory || undefined;
  const { data, isLoading } = useGallery(category, 1);
  const items: GalleryImage[] = data?.results ?? [];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : items.length - 1));
  const nextItem = () => setLightboxIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : 0));

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="relative bg-[#000073] py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-white/40" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                Photo Gallery
              </span>
              <div className="w-8 h-0.5 bg-white/40" />
            </div>
            <h1
              className="font-bold text-white"
              style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Gallery
            </h1>
            <p className="text-blue-200/70 max-w-xl text-base md:text-lg" style={{ fontFamily: "Century_Gothic_Regular" }}>
              Moments from the campaign trail across Mumias West, very handshake, every gathering, every step of the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        ref={gridRef}
        className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#000073] text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                style={{ fontFamily: "Century_Gothic_Bold" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {!isLoading && (
            <span className="text-xs text-gray-400 whitespace-nowrap hidden sm:block" style={{ fontFamily: "Century_Gothic_Regular" }}>
              {items.length} photo{items.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16">

        {/* Loading */}
        {isLoading && <SkeletonGrid />}

        {/* Empty */}
        {!isLoading && items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg font-semibold" style={{ fontFamily: "Century_Gothic_Bold" }}>
              No photos yet
            </p>
            <p className="text-gray-400 text-sm">Check back soon for new photos from the campaign trail.</p>
          </div>
        )}

        {/* Masonry Grid */}
        {!isLoading && items.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {items.map((item, i) => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <PhotoCard
                  item={item}
                  index={i}
                  onOpen={() => openLightbox(i)}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={items}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}