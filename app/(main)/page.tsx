"use client";

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
      <section
        className="relative min-h-screen overflow-hidden mt-0 mb-0"
        style={{ backgroundColor: "#0d0d0d", backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }}
      >
        {/* Background Photo */}
        <div 
          className="absolute inset-x-0 top-0 -bottom-8 z-0" 
          style={{ 
            perspective: "1500px",
            background: "linear-gradient(to right, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.2) 40%, transparent 65%)"
          }}
        >
          <Image
            src="/images/pic6.jpg"
            alt="Hon. Brian Omondi - Mumias West MP Aspirant 2027"
            fill
            priority
            className="object-cover md:[transform:translateX(15%)_perspective(1500px)_rotateY(180deg)_rotateX(1deg)]"
            style={{
              objectPosition: "center 15%",
              transformOrigin: "center",
            }}
          />

          {/* Desktop gradient */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Mobile gradient */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.98) 100%)",
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
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-16 md:flex md:items-center md:min-h-screen">
          <motion.div
            className="w-full max-w-2xl flex flex-col gap-4 md:gap-6 mt-[85%] md:mt-0 pb-12 md:pb-0 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-bold font-poppins text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(38px, 6vw, 64px)" }}
            >
              Hon. Brian Omondi
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="italic text-white/90 font-normal tracking-wider max-w-lg mx-auto md:mx-0"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              &ldquo;Son of the Soil, Servant of the People&rdquo;
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-16 bg-[#0a1560] h-[3px] mx-auto md:mx-0"
            />

            {/* Bottom Statement */}
            <motion.p
              variants={itemVariants}
              className="italic text-white/90 font-normal tracking-wider max-w-lg mx-auto md:mx-0"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              Mumias West deserves better. <br />
              I will deliver it
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <MissionStatement />

      {/* About Preview */}
      <AboutPreview />

      {/* Manifesto Highlights */}
      <ManifestoHighlights />

      {/* Recent News */}
      <RecentNews />

      {/* Feedback */}
      <FeedbackSection />
    </div>
  );
}