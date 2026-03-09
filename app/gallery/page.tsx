"use client";

import Image from "next/image";
import { motion } from "framer-motion";



const galleries = [
  { id: 1, title: "Sunday Worship with the Community", category: "Community", src: "/images/church1.jpg" },
  { id: 2, title: "Morning Devotion",                  category: "Community", src: "/images/church2.jpg" },
  { id: 3, title: "Celebrating Our Heritage",          category: "Events",    src: "/images/gall3.jpg" },
  { id: 4, title: "Church Partnership Pledge",         category: "Community", src: "/images/gall4.jpg" },
  { id: 5, title: "Meeting the People – Ward Outreach",category: "Campaign",  src: "/images/gall7.jpg" },
  { id: 6, title: "Grassroots Greetings – Mumias West",category: "Campaign",  src: "/images/gall8.jpg" },
];
export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="relative bg-[#0d2b14] py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#d4a017]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
                On the Ground
              </span>
              <div className="w-8 h-0.5 bg-[#d4a017]" />
            </div>
            <h1
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Campaign Gallery
            </h1>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              Moments from the wards. Brian Omondi and the people of Mumias West.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer border border-[#d4a017]/10"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b14]/90 via-[#0d2b14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017] mb-1">
                  {item.category}
                </p>
                <h3 className="font-playfair font-bold text-white text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative bg-[#0d2b14] py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
            >
              See More on Social Media
            </h2>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              Follow Brian&apos;s campaign journey across Mumias West Constituency.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}