"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {

  return (
    <section id="about" className="py-16 md:py-12 bg-gray-50">
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
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-[#000073]/50">
              <Image
                src="/images/pic2.jpg"
                alt="Hon. Brian Omondi  Mumias West MP Aspirant"
                fill
                className="object-cover object-top [transform:translateX(0%)_rotateY(180deg)_rotateX(0deg)]"
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
            <div className="flex items-center  justify-center  md:justify-start gap-3">
              <div className="w-8 h-0.5 bg-[#000073]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#000073]">
                About the Candidate
              </span>
              <div className="w-8 h-0.5 bg-[#000073] md:hidden" />
            </div>

            {/* Heading */}
            <h2
              className="leading-tight"
              style={{ fontFamily: 'Century_Gothic_Bold', color: '#000073', fontSize: '45px' }}
            >
              A Leader Shaped by the People of Mumias West
            </h2>

            {/* Bio */}
            <p className="leading-relaxed" style={{ fontFamily: 'Century_Gothic_Regular', color: '#4b5563', fontSize: '24px' }}>
              Brian Omondi is a passionate advocate for the people of Mumias West. With a deep understanding of the challenges facing the constituency, from agriculture to education, health to infrastructure, he is committed to bringing real, measurable change to every ward.
            </p>

            <p className="leading-relaxed" style={{ fontFamily: 'Century_Gothic_Regular', color: '#4b5563', fontSize: '18px' }}>
              His campaign is built on three unshakeable pillars: integrity in leadership, decisive action, and results that every family will feel.
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-[#000073]" />

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}