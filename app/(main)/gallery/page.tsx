"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGallery } from "@/app/lib/hooks/useGallery";
import { socialLinks } from "@/data/socialLinks";

const SECTIONS = [
  {
    id: "community",
    number: "01 / 03",
    label: "Community",
    title: "On the",
    titleEm: "Ground",
    desc: "Politics lives in the handshake, the shared cup of chai, the early morning baraza. These are the moments that matter — not the speeches, but the listening.",
    quote: "This constituency does not need promises. It needs presence ",
    quoteAttr: "Brian Omondi — Mumias West Town Hall, 2026",
    layout: "cinema",
  },
  {
    id: "campaign",
    number: "02 / 03",
    label: "Campaign",
    title: "On the",
    titleEm: "Trail",
    desc: "From ward to ward across Mumias West — every handshake, every promise, every dawn on the campaign road. This is not a politician's gallery. It is a community's story.",
    quote: "A campaign is not won on stages. It is won on the red soil roads, in the early mornings, in the trust of a stranger who becomes a neighbour.",
    quoteAttr: "Brian Omondi — Campaign Diary, 2026",
    layout: "magazine",
  },
  {
    id: "events",
    number: "03 / 03",
    label: "Events",
    title: "Defining",
    titleEm: "Moments",
    desc: "From barazas to youth forums — every event brings Mumias West closer together under one vision. The unscripted hours. The laughter between speeches.",
    quote: "Every gathering is a reminder of why we fight — not for a seat in Parliament, but for the people who sent us there.",
    quoteAttr: "Brian Omondi — Youth Forum, Mumias West, 2026",
    layout: "cinema",
  },
];

const TICKER_ITEMS = [
  "Community Meetings", "Ward Outreach", "Youth Engagement",
  "Women's Forums", "School Visits", "Healthcare Outreach",
  "Infrastructure", "Campaign Trail", "Grassroots Drive",
];

const PREVIEW_COUNT = 6;

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

function Lightbox({ src, title, category, onClose }: {
  src: string; title: string; category: string; onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(5,12,6,0.98)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-10 text-xs font-bold tracking-[0.2em] uppercase border px-4 py-2 transition-all hover:border-[#8fb3ff] hover:text-[#8fb3ff]"
        style={{ borderColor: "rgba(143,179,255,0.3)", color: "rgba(248,250,252,0.75)", fontFamily: "Century_Gothic_Regular" }}
      >
        ✕ Close
      </button>
      <div
        className="relative"
        style={{ maxWidth: "88vw", maxHeight: "78vh" }}
        onClick={e => e.stopPropagation()}
      >
        <img
          src={src}
          alt={title}
          style={{ maxWidth: "88vw", maxHeight: "78vh", objectFit: "contain", display: "block" }}
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-1" style={{ color: "#8fb3ff", fontFamily: "Century_Gothic_Regular" }}>
          {category}
        </p>
        <p className="text-sm font-light" style={{ color: "rgba(248,250,252,0.75)" }}>{title}</p>
      </div>
    </div>
  );
}

function PhotoCard({ item, onOpen, style = {} }: {
  item: GalleryItem; onOpen: () => void; style?: React.CSSProperties;
}) {
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      style={{ background: "#07102b", ...style }}
      onClick={onOpen}
    >
      <Image
        src={item.image_url}
        alt={item.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-[1.06]"
        style={{ filter: "brightness(0.82) contrast(1.06) saturate(0.88)" }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        style={{ background: "linear-gradient(to top, rgba(3,7,35,0.65) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to top, rgba(3,7,35,0.92) 0%, rgba(3,7,35,0.2) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 z-10" style={{ background: "#8fb3ff" }} />
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#8fb3ff", fontFamily: "Century_Gothic_Regular" }}>
          {item.category}
        </p>
        <p className="text-sm font-light leading-snug" style={{ color: "#f8fafc" }}>{item.title}</p>
      </div>
    </div>
  );
}

function PhotoCardSkeleton({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "#07102b", ...style }}
    >
      <div className="absolute inset-0 animate-pulse" style={{ background: "linear-gradient(90deg, #07102b 25%, #12204f 50%, #07102b 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
    </div>
  );
}

function CinemaLayout({ items, onOpen, isLoading }: { items: GalleryItem[]; onOpen: (item: GalleryItem) => void; isLoading: boolean }) {
  if (isLoading) return (
    <div className="grid gap-1" style={{ gridTemplateColumns: "1.1fr 0.9fr" }}>
      <PhotoCardSkeleton style={{ aspectRatio: "2/3" }} />
      <div className="flex flex-col gap-1">
        <PhotoCardSkeleton style={{ flex: 1, aspectRatio: "4/3", marginTop: "3rem" }} />
        <PhotoCardSkeleton style={{ flex: 1, aspectRatio: "4/3" }} />
      </div>
    </div>
  );

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: "1.1fr 0.9fr" }}>
      {items[0] && <PhotoCard item={items[0]} onOpen={() => onOpen(items[0])} style={{ aspectRatio: "2/3" }} />}
      <div className="flex flex-col gap-1">
        {items.slice(1, 3).map((item, i) => (
          <PhotoCard key={item.id} item={item} onOpen={() => onOpen(item)} style={{ flex: 1, aspectRatio: "4/3", marginTop: i === 0 ? "3rem" : 0 }} />
        ))}
      </div>
    </div>
  );
}

function MagazineLayout({ items, onOpen, isLoading }: { items: GalleryItem[]; onOpen: (item: GalleryItem) => void; isLoading: boolean }) {
  if (isLoading) return (
    <div className="grid gap-1" style={{ gridTemplateColumns: "55fr 45fr" }}>
      <div className="flex flex-col gap-1">
        <PhotoCardSkeleton style={{ aspectRatio: "4/3" }} />
        <PhotoCardSkeleton style={{ aspectRatio: "16/7" }} />
      </div>
      <div className="flex flex-col gap-1">
        <PhotoCardSkeleton style={{ aspectRatio: "3/4", marginTop: "4rem" }} />
        <PhotoCardSkeleton style={{ aspectRatio: "4/3" }} />
      </div>
    </div>
  );

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: "55fr 45fr" }}>
      <div className="flex flex-col gap-1">
        {items[0] && <PhotoCard item={items[0]} onOpen={() => onOpen(items[0])} style={{ aspectRatio: "4/3" }} />}
        {items[1] && <PhotoCard item={items[1]} onOpen={() => onOpen(items[1])} style={{ aspectRatio: "16/7" }} />}
      </div>
      <div className="flex flex-col gap-1">
        {items[2] && <PhotoCard item={items[2]} onOpen={() => onOpen(items[2])} style={{ aspectRatio: "3/4", marginTop: "4rem" }} />}
        {items[3] && <PhotoCard item={items[3]} onOpen={() => onOpen(items[3])} style={{ aspectRatio: "4/3" }} />}
      </div>
    </div>
  );
}

function ViewAllButton({ total, onNavigate }: {
  category: string; total: number; onNavigate: () => void;
}) {
  if (total <= PREVIEW_COUNT) return null;

  return (
    <div className="flex items-center justify-between mt-8 pt-8" style={{ borderTop: "1px solid rgba(143,179,255,0.12)" }}>
      <p style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(143,179,255,0.45)" }}>
        Showing 6 of {total} photographs
      </p>
      <button
        onClick={onNavigate}
        className="flex items-center gap-3 px-6 py-3 transition-all group"
        style={{ border: "1px solid rgba(143,179,255,0.22)", background: "transparent", color: "#8fb3ff" }}
      >
        <span style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          View all {total} photos
        </span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}

export default function GalleryPage() {
  const [activeSection, setActiveSection] = useState("community");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { data, isLoading } = useGallery(activeSection);
  const allItems: GalleryItem[] = data?.results ?? [];
  const previewItems = allItems.slice(0, PREVIEW_COUNT);
  const totalCount = data?.count ?? 0;

  const currentSection = SECTIONS.find(s => s.id === activeSection)!;

  const switchSection = (id: string) => {
    setActiveSection(id);
    setTimeout(() => {
      railRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div
      style={{ background: "#050923", color: "#f8fafc", fontFamily: "Century_Gothic_Regular", fontWeight: 300 }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "72vh", background: "#000073", paddingTop: "8rem", paddingBottom: "5rem" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(143,179,255,0.08) 0%, transparent 65%)" }} />
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 select-none hidden md:block"
          style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(200px, 28vw, 340px)", fontWeight: 900, color: "rgba(143,179,255,0.04)", lineHeight: 1, letterSpacing: "-0.05em" }}
        >
          MV
        </div>
        <div
          className="absolute left-12 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(143,179,255,0.2) 40%, rgba(143,179,255,0.2) 60%, transparent)" }}
        />
        <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-8 md:px-16" style={{ paddingTop: "1rem" }}>
          {/* <div style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(143,179,255,0.45)" }}>
            Mumias West · 2027
          </div> */}
          <div className="flex items-center gap-3">
            <div style={{ width: 40, height: 1, background: "rgba(143,179,255,0.25)" }} />
            {/* <span style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(143,179,255,0.45)" }}>
              Visual Record
            </span> */}
          </div>
        </div>
        <motion.div
          className="relative z-10 px-8 md:px-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6" style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "#8fb3ff" }}>
            <span style={{ display: "inline-block", width: "2.5rem", height: 1, background: "#8fb3ff" }} />
            Gallery · On the Ground
          </div>
          <h1 className="font-bold leading-[0.9] mb-8" style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "#f8fafc", maxWidth: "16ch" }}>
            A People&apos;s<br />
            <em style={{ fontStyle: "italic", color: "#bfceff" }}>Journey</em>
          </h1>
          <p className="leading-relaxed" style={{ fontSize: "0.95rem", color: "#dbeafe", maxWidth: "38rem", borderLeft: "1px solid rgba(143,179,255,0.25)", paddingLeft: "1.2rem" }}>
            Every photograph is a promise. Every face, a reason to fight for this constituency. From the wards of Musanda to the markets of Mumias Central, this is Brian Omondi&apos;s campaign, told in pictures.
          </p>
        </motion.div>
      </section>

      {/* Ticker */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(143,179,255,0.12)", borderBottom: "1px solid rgba(143,179,255,0.12)", padding: "0.85rem 0", background: "rgba(143,179,255,0.03)" }}>
        <div className="flex" style={{ animation: "ticker 40s linear infinite", whiteSpace: "nowrap" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ flexShrink: 0, fontFamily: "Century_Gothic_Regular", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(143,179,255,0.45)", padding: "0 3rem" }}>
              ◆&nbsp;&nbsp;{item}
            </span>
          ))}
        </div>
      </div>

      {/* Category Rail */}
      <div
        ref={railRef}
        className="sticky top-0 z-50 flex items-stretch overflow-x-auto"
        style={{ background: "rgba(2,10,34,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(143,179,255,0.12)", scrollbarWidth: "none" }}
      >
        {SECTIONS.map((s, i) => (
          <div key={s.id} className="flex items-stretch">
            {i > 0 && <div style={{ width: 1, background: "rgba(143,179,255,0.1)", margin: "0.5rem 0" }} />}
            <button
              onClick={() => switchSection(s.id)}
              className="relative flex-shrink-0 px-8 py-4 border-none cursor-pointer transition-colors duration-200"
              style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", background: "none", color: activeSection === s.id ? "#8fb3ff" : "rgba(203,220,255,0.55)", whiteSpace: "nowrap" }}
            >
              {s.label}
              {activeSection === s.id && (
                <motion.span layoutId="rail-indicator" className="absolute bottom-0 left-4 right-4 h-[2px]" style={{ background: "#8fb3ff" }} />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Section Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-20 px-8 md:px-12"
      >
        {/* Section Header */}
        <div className="grid gap-8 pb-14" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "end" }}>
          <div>
            <p className="mb-3" style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(143,179,255,0.5)" }}>
              {currentSection.number}
            </p>
            <h2 className="font-bold leading-[1.0]" style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "#f8fafc" }}>
              {currentSection.title}<br />
              <em style={{ fontStyle: "italic", color: "#bfceff" }}>{currentSection.titleEm}</em>
            </h2>
          </div>
          <p className="leading-relaxed self-end" style={{ fontSize: "0.9rem", color: "#dbeafe", lineHeight: 1.85, borderLeft: "1px solid rgba(143,179,255,0.2)", paddingLeft: "1.5rem" }}>
            {currentSection.desc}
          </p>
        </div>

        {/* Empty state */}
        {!isLoading && allItems.length === 0 && (
          <div className="flex items-center justify-center py-20">
            <p style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(143,179,255,0.3)" }}>
              No photographs yet in this category
            </p>
          </div>
        )}

        {/* Photo Layout */}
        {(isLoading || allItems.length > 0) && (
          <>
            {currentSection.layout === "cinema" ? (
              <CinemaLayout items={previewItems} onOpen={setLightbox} isLoading={isLoading} />
            ) : (
              <MagazineLayout items={previewItems} onOpen={setLightbox} isLoading={isLoading} />
            )}

            <ViewAllButton
              category={currentSection.id}
              total={totalCount}
              onNavigate={() => router.push(`/gallery/${currentSection.id}`)}
            />
          </>
        )}

        {/* Quote */}
        <div
          className="grid gap-12 items-center py-20 mt-16"
          style={{ gridTemplateColumns: "auto 1fr", borderTop: "1px solid rgba(143,179,255,0.08)", borderBottom: "1px solid rgba(143,179,255,0.08)" }}
        >
          <div className="hidden md:block select-none leading-[0.7]" style={{ fontFamily: "Century_Gothic_Bold", fontSize: "8rem", fontWeight: 900, color: "rgba(143,179,255,0.15)" }}>
            &ldquo;
          </div>
          <div>
            <p className="leading-relaxed" style={{ fontFamily: "Century_Gothic_Italic", fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 400, fontStyle: "italic", color: "#f8fafc" }}>
              {currentSection.quote}
            </p>
            <div className="flex items-center gap-4 mt-6" style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(143,179,255,0.5)" }}>
              <span style={{ display: "block", width: "2rem", height: 1, background: "rgba(143,179,255,0.3)" }} />
              {currentSection.quoteAttr}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <section className="relative py-28 text-center overflow-hidden" style={{ background: "#000073", borderTop: "1px solid rgba(143,179,255,0.08)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(143,179,255,0.05) 0%, transparent 65%)" }} />
        <motion.div
          className="relative z-10 max-w-xl mx-auto px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6" style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(143,179,255,0.45)" }}>
            <span style={{ width: 32, height: 1, background: "rgba(143,179,255,0.3)", display: "block" }} />
            Social Media
            <span style={{ width: 32, height: 1, background: "rgba(143,179,255,0.3)", display: "block" }} />
          </div>
          <h2 className="font-bold mb-4" style={{ fontFamily: "Century_Gothic_Bold", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f8fafc" }}>
            Follow the <em style={{ fontStyle: "italic", color: "#bfceff" }}>Journey</em>
          </h2>
          <p className="mb-10 leading-relaxed" style={{ fontSize: "0.9rem", color: "#dbeafe" }}>
            More moments from Mumias West on social media.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="px-7 py-3 transition-all hover:bg-[rgba(143,179,255,0.1)]" style={{ fontFamily: "Century_Gothic_Regular", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid rgba(143,179,255,0.2)", background: "transparent", color: "#8fb3ff", borderRadius: 2 }}>
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.image_url}
          title={lightbox.title}
          category={lightbox.category}
          onClose={() => setLightbox(null)}
        />
      )}

      <style jsx global>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      `}</style>
    </div>
  );
}