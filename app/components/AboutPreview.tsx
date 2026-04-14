"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — Photo, desktop only */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-[#0a1560]/50">
              <Image
                src="/images/pic2.jpg"
                alt="Hon. Brian Omondi - Mumias West MP Aspirant"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#0a1560]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0a1560]">
                About the Candidate
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-playfair font-bold text-[#0a1560] leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              A Leader Shaped by the People of Mumias West
            </h2>

            {/* Bio */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Brian Omondi is a passionate advocate for the people of Mumias West. With a deep understanding of the challenges facing the constituency, from agriculture to education, health to infrastructure, he is committed to bringing real, measurable change to every ward.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              His campaign is built on three unshakeable pillars: integrity in leadership, decisive action, and results that every family will feel.
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-[#0a1560]" />

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}