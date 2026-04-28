"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { useGallery, type GalleryImage } from "@/app/lib/hooks/useGallery";
import { ChevronLeft, ChevronRight, X, Play, Image as ImageIcon, Film } from "lucide-react";

/* ─── Filter Tabs ─── */
const MEDIA_TABS = [
  { id: "all", label: "All" },
  { id: "photos", label: "Photos" },
  { id: "videos", label: "Videos" },
] as const;

const CATEGORY_TABS = [
  { id: "", label: "All" },
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
  const isVideo = item?.media_type === "video";

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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 text-white/50 text-sm" style={{ fontFamily: "Century_Gothic_Regular" }}>
        {currentIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className="relative"
          style={{ maxWidth: "90vw", maxHeight: "80vh" }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
        >
          {isVideo && item.video_url ? (
            <video
              src={item.video_url}
              controls
              autoPlay
              className="block rounded-xl shadow-2xl"
              style={{ maxWidth: "90vw", maxHeight: "80vh" }}
            />
          ) : (
            <img
              src={item.image_url}
              alt={item.title}
              className="block rounded-xl shadow-2xl"
              style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain" }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="mt-4 text-center px-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#000073] text-white mb-2 uppercase tracking-wider">
          {item.category}
        </span>
        <p className="text-white/70 text-sm" style={{ fontFamily: "Century_Gothic_Regular" }}>{item.title}</p>
      </div>
    </motion.div>
  );
}

/* ─── Featured Card (first item — large hero) ─── */
function FeaturedCard({ item, onOpen }: {
  item: GalleryImage; onOpen: () => void;
}) {
  const isVideo = item.media_type === "video";

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer group"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden bg-gray-100">
        <img
          src={item.image_url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#000073]/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-7 h-7 text-white ml-0.5" fill="white" />
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#000073] text-white uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          {isVideo ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
          <span className="uppercase tracking-wider font-bold" style={{ fontFamily: "Century_Gothic_Regular" }}>
            {isVideo ? "Video" : "Photo"} · {item.category}
          </span>
        </div>
        <h2 className="font-bold text-[#000073] leading-tight" style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(22px, 3vw, 32px)" }}>
          {item.title}
        </h2>
        <div className="w-12 h-0.5 bg-[#000073]/20" />
        <span className="inline-flex items-center gap-2 font-bold text-[#000073] text-sm" style={{ fontFamily: "Century_Gothic_Bold" }}>
          {isVideo ? "Watch Video" : "View Full Image"}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Gallery Card ─── */
function GalleryCard({ item, onOpen, index }: {
  item: GalleryImage; onOpen: () => void; index: number;
}) {
  const isVideo = item.media_type === "video";

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col cursor-pointer"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={item.image_url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#000073]/70 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded text-xs font-bold bg-[#000073] text-white uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          {isVideo ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
          <span className="uppercase tracking-wider font-bold" style={{ fontFamily: "Century_Gothic_Regular" }}>
            {isVideo ? "Video" : "Photo"}
          </span>
        </div>
        <h3
          className="font-bold text-[#000073] text-base leading-snug line-clamp-2 group-hover:text-[#000073]/70 transition-colors"
          style={{ fontFamily: "Century_Gothic_Bold" }}
        >
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

/* ─── Skeleton ─── */
function FeaturedSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg bg-white animate-pulse">
      <div className="h-64 md:min-h-[400px] bg-gray-200" />
      <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
        <div className="h-3 w-32 bg-gray-200 rounded" />
        <div className="h-8 w-3/4 bg-gray-200 rounded" />
        <div className="h-8 w-1/2 bg-gray-200 rounded" />
        <div className="w-12 h-0.5 bg-gray-200 rounded" />
        <div className="h-4 w-36 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
      <div className="w-full aspect-[4/3] bg-gray-200" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 w-16 bg-gray-200 rounded" />
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const mediaType = activeFilter === "photos" ? "photo" : activeFilter === "videos" ? "video" : undefined;
  const category = activeCategory || undefined;

  const { data, isLoading } = useGallery(category, 1, mediaType);
  const items: GalleryImage[] = data?.results ?? [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : items.length - 1));
  const nextItem = () => setLightboxIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : 0));

  const scrollToGrid = () => {
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner — matches News & About */}
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
                Visual Record
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
              Moments from the campaign trail across Mumias West — every handshake, every gathering, every step of the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <div
        ref={gridRef}
        className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Media type pills */}
            <div className="flex items-center gap-2">
              {MEDIA_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveFilter(tab.id); scrollToGrid(); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    activeFilter === tab.id
                      ? "bg-[#000073] text-white shadow-md"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: "Century_Gothic_Bold" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveCategory(tab.id); scrollToGrid(); }}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-200 rounded-md ${
                    activeCategory === tab.id
                      ? "text-[#000073] bg-blue-50"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  style={{ fontFamily: "Century_Gothic_Regular" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <>
          <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
            <FeaturedSkeleton />
          </section>
          <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Empty state */}
      {!isLoading && items.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-300" />
          </div>
          <p className="text-gray-400 text-lg font-semibold" style={{ fontFamily: "Century_Gothic_Bold" }}>
            No media found
          </p>
          <p className="text-gray-400 text-sm">Try adjusting your filters</p>
        </div>
      )}

      {/* Gallery Content */}
      {!isLoading && items.length > 0 && (
        <>
          {/* Featured Item */}
          <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
            <FeaturedCard
              item={items[0]}
              onOpen={() => openLightbox(0)}
            />
          </section>

          {/* Grid */}
          {items.length > 1 && (
            <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.slice(1).map((item, i) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={i}
                    onOpen={() => openLightbox(i + 1)}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

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