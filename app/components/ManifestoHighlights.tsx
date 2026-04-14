"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { manifestoPillars } from "@/data/manifestoPillars";

export default function ManifestoHighlights() {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#0a1560]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0a1560]">
              My Vision
            </span>
            <div className="w-8 h-0.5 bg-[#0a1560]" />
          </div>
          <h2
            className="font-playfair font-bold text-[#0a1560] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            What Brian Stands For
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Eight pillars that will guide every decision made for Mumias West.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manifestoPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a1560] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair font-bold text-[#0a1560] text-xl mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}

          {/* Read Full Manifesto card — fills the 6th slot in the grid */}
          <motion.div
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 border-2 border-dashed border-[#0a1560]/40 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-playfair font-bold text-[#0a1560] text-lg">
              There is more to the vision
            </p>
            <p className="text-gray-400 text-sm">
              Read the full manifesto to see every commitment in detail.
            </p>
            <Link
              href="/manifesto"
              className="px-6 py-3 rounded-xl font-bold transition-all hover:brightness-110 text-sm"
              style={{ background: "#0a1560", color: "#ffffff" }}
            >
              Read Full Manifesto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}