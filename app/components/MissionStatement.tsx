"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MissionStatement() {
  return (
    <section className="w-full mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-2 divide-white/40">
        {/* Left Panel — Join the Movement */}
        <motion.div
          className="bg-[#0a1560] flex flex-col items-center justify-center text-center px-12 py-5 gap-6 mr-0 md:mr-1 mb-1 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-playfair font-bold text-white text-2xl md:text-3xl leading-tight">
            Join the Movement
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xs">
            A Leader Shaped by<br />the People of Mumias West
          </p>
          <Link
            href="/about"
            className="font-semibold text-white text-sm tracking-wide hover:text-white/70 transition-colors duration-200"
          >
            Read More →
          </Link>
        </motion.div>

        {/* Right Panel — Read My Manifesto */}
        <motion.div
          className="bg-[#0a1560] flex flex-col items-center justify-center text-center px-12 py-5 gap-6 mr-0 md:ml-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="font-playfair font-bold text-white text-2xl md:text-3xl leading-tight">
            Read My Manifesto
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xs">
            Eight pillars. Four wards.<br />One vision for a transformed Mumias West.
          </p>
          <Link
            href="/manifesto"
            className="font-semibold text-white text-sm tracking-wide hover:text-white/70 transition-colors duration-200"
          >
            Read More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}