"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import MissionStatement from "../components/MissionStatement";
import AboutPreview from "../components/AboutPreview";
import ManifestoHighlights from "../components/ManifestoHighlights";
import RecentNews from "../components/RecentNews";
import FeedbackSection from "../components/FeedbackSection";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };



  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen md:max-h-[900px] overflow-hidden bg-[#0d2b14]">

        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pic6.jpg"
            alt="Hon. Brian Omondi - Mumias West MP Aspirant 2027"
            fill
            priority
            className="object-cover md:translate-x-[15%]"
            style={{ objectPosition: "center 8%" }}
          />
          {/* Desktop gradient */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.88) 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)",
            }}
          />
          {/* Mobile gradient */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(13,43,20,0.85) 50%, rgba(13,43,20,0.98) 100%)",
            }}
          />
        </div>

        {/* Grain texture */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 md:flex md:items-center md:min-h-screen md:max-h-[900px]">
          <motion.div
            className="w-full max-w-2xl flex flex-col gap-4 md:gap-6 mt-[85%] md:mt-0 pb-12 md:pb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span
                className="font-semibold tracking-wider uppercase text-green-300 whitespace-nowrap md:whitespace-normal"
                style={{ fontSize: "clamp(9px, 2.5vw, 14px)" }}
              >
                Mumias West Constituency · Kakamega County
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair font-bold text-white leading-tight"
              style={{ fontSize: "clamp(22px, 6vw, 60px)" }}
            >
              Hon. Brian Omondi
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="font-playfair italic text-[#d4a017]"
              style={{ fontSize: "clamp(16px, 2.5vw, 28px)" }}
            >
              Son of the Soil, Servant of the People
            </motion.p>

            {/* Gold divider — desktop only */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-0.5 bg-[#d4a017] hidden md:block"
            />

            {/* Bio — desktop only */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg hidden md:block"
            >
              Dedicated to transforming Mumias West through integrity, real
              action, and results that every family in all four wards will feel.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-1 w-full md:w-auto"
            >
              <Link
                href="#about"
                className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold transition-all hover:brightness-110 text-center"
                style={{ background: "#d4a017", color: "#0d2b14", fontSize: "clamp(13px, 3vw, 16px)" }}
              >
                Join the Movement
              </Link>
              <Link
                href="/manifesto"
                className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-white/10 text-center"
                style={{ border: "2px solid #d4a017", color: "#d4a017", fontSize: "clamp(13px, 3vw, 16px)" }}
              >
                Read My Manifesto
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
\        
      </section>

      {/* Mission Statement */}
      <MissionStatement/>

      {/* About Preview */}
      <AboutPreview />

      {/* Manifesto Highlights */}
      <ManifestoHighlights/>

      {/* Recent News */}
      <RecentNews/>

      {/* Feedback */}
      <FeedbackSection />
    </div>
  );
}