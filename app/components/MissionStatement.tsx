"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0d2b14] text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,160,23,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
          <div className="absolute -top-8 -left-4 font-playfair text-[#d4a017] pointer-events-none select-none"
  style={{ fontSize: "160px", opacity: 0.08, lineHeight: 1 }}>
  &ldquo;
</div>
            <div className="relative z-10">
              <p
                className="font-playfair font-bold text-white leading-tight mb-2"
                style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
              >
                Mumias West deserves
              </p>
              <p
                className="font-playfair italic text-[#d4a017] leading-tight"
                style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
              >
                better. I will deliver it.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:block w-[2px] h-20 bg-[#d4a017] flex-shrink-0" />

            <div className="flex flex-col gap-3">
   
              <p
                className="font-playfair font-bold"
                style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
              >
                <span className="text-white">Integrity</span>
                <span className="text-[#d4a017]"> · </span>
                <span className="text-white">Action</span>
                <span className="text-[#d4a017]"> · </span>
                <span className="text-white">Results</span>
              </p>

             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}