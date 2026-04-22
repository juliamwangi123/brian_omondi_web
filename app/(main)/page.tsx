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
        className="relative min-h-[85vh] md:min-h-screen overflow-hidden"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pic6.jpg"
            alt="Hon. Brian Omondi Mumias West MP Aspirant 2027"
            fill
            priority
            className="object-cover [transform:scaleX(-1)] md:[transform:translateX(17%)_scaleX(-1)]"
            style={{
              objectPosition: "center 7%",
              transformOrigin: "center",
            }}
          />

          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(to right, #0d0d0d 0%, #0d0d0d 26%, rgba(13,13,13,0.78) 37%, rgba(13,13,13,0.22) 50%, transparent 62%)",
            }}
          />

          {/* Mobile gradient */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.97) 100%)",
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-2 md:flex md:items-center md:min-h-screen pb-5 md:pb-0">
          <motion.div
            className="w-full max-w-2xl flex flex-col gap-4 md:gap-6 mt-[85%] md:mt-0 pb-12 md:pb-0 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-white leading-tight tracking-tight"
              style={{ 
                fontFamily: 'Century_Gothic_Bold',
                fontSize: "77px",
                fontWeight: 700
              }}
            >
              Hon. Brian Omondi
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 font-normal tracking-wider max-w-lg md:max-w-none md:whitespace-nowrap mx-auto md:mx-0"
              style={{ 
                fontFamily: 'Century_Gothic_Italic',
                fontSize: "clamp(29px, 2vw, 22px)",
                fontStyle: "italic"
              }}
            >
              &ldquo;Son of the Soil, Servant of the People&rdquo;
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-16 bg-[#000073] h-[4px] mx-auto md:mx-0"
            />

            {/* Bottom Statement */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 font-normal tracking-wider max-w-lg mx-auto md:mx-0"
              style={{ 
                fontFamily: 'Century_Gothic_Italic',
                fontSize: "clamp(29px, 2vw, 22px)",
                fontStyle: "italic"
              }}
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