"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { manifestoPillars } from "@/data/manifestoPillars";

export default function ManifestoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Banner */}
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
            background:
              "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
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
                The Vision
              </span>
              <div className="w-8 h-0.5 bg-[#d4a017]" />
            </div>
            <h1
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Brian's Manifesto
            </h1>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              Five pillars. Six wards. One vision for a transformed Mumias West.
            </p>
            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {manifestoPillars.map((pillar) => (
                <a
                  key={pillar.title}
                  href={`#${pillar.title.toLowerCase().replace(" & ", "-")}`}
                  className="px-4 py-2 rounded-full text-xs font-bold border border-white/20 text-white/70 hover:border-[#d4a017] hover:text-[#d4a017] transition-all"
                >
                  {pillar.number} {pillar.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-8 md:px-16">
        {manifestoPillars.map((pillar, i) => {
          const Icon = pillar.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={pillar.title}
              id={pillar.title.toLowerCase().replace(" & ", "-")}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#d4a017]/20 py-16 md:py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative pillar number */}
              <div
                className="absolute top-8 right-0 font-playfair font-bold text-[#d4a017] pointer-events-none select-none hidden md:block"
                style={{ fontSize: "140px", opacity: 0.04, lineHeight: 1 }}
              >
                {pillar.number}
              </div>

              {/* Left — identity */}
              <div className={`flex flex-col gap-5 pr-0 md:pr-16 ${isEven ? "" : "md:order-last md:pl-16 md:pr-0"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0d2b14] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
                      Pillar {pillar.number}
                    </p>
                    <h2
                      className="font-playfair font-bold text-[#0d2b14] leading-tight"
                      style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
                    >
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <p className="font-playfair italic text-[#d4a017] text-base">
                  {pillar.subtitle}
                </p>

                <div className="w-10 h-0.5 bg-[#d4a017]/40" />

                <p className="text-gray-500 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Right — points */}
              <div className={`flex flex-col gap-0 ${isEven ? "md:border-l border-[#d4a017]/20 md:pl-16" : "md:border-r border-[#d4a017]/20 md:pr-16 md:order-first"}`}>
                {pillar.points.map((point, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: isEven ? 15 : -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.07 }}
                  >
                    <span className="text-[#d4a017] font-playfair font-bold text-lg flex-shrink-0 mt-0.5">
                      —
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-[#0d2b14] py-16 md:py-20 overflow-hidden mt-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
            >
              This is a Promise, Not a Poster
            </h2>
            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
              Every point in this manifesto is a commitment Brian intends to
              means.
            </p>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}