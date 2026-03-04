"use client";

export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

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

  const scrollArrowVariants = {
    animate: {
      y: [0, 8, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#0d2b14]">

        {/* Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pic6.jpg"
            alt="Hon. Brian Omondi - Mumias West MP Aspirant 2027"
            fill
            priority
            className="object-cover md:translate-x-[15%]"
            style={{ objectPosition: "center 10%" }}
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 md:flex md:items-center md:min-h-screen">
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
              style={{ fontSize: "clamp(32px, 6vw, 70px)" }}
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
              action, and results that every family in all six wards will feel.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-1 w-full md:w-auto"
            >
              <Link
                href={`/${locale}#about`}
                className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold transition-all hover:brightness-110 text-center"
                style={{ background: "#d4a017", color: "#0d2b14", fontSize: "clamp(13px, 3vw, 16px)" }}
              >
                Join the Movement
              </Link>
              <Link
                href={`/${locale}/manifesto`}
                className="w-full md:w-auto px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-white/10 text-center"
                style={{ border: "2px solid #d4a017", color: "#d4a017", fontSize: "clamp(13px, 3vw, 16px)" }}
              >
                Read His Manifesto
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          variants={scrollArrowVariants}
          animate="animate"
        >
          <ChevronDown className="w-7 h-7 text-white/50" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 md:py-12 bg-[#0d2b14] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "6", label: "Wards to Serve" },
              { value: "12K+", label: "Supporters" },
              { value: "15+", label: "Community Projects" },
              { value: "2027", label: "Election Year" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-[#d4a017]">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-campaign-green">
              {t("about.title")}
            </h2>
            <p className="text-lg font-source-sans text-gray-700 mb-6">
              {t("about.bio")}
            </p>
            <p className="text-gray-600 font-source-sans mb-8">
              {t("about.vision")}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-block px-8 py-3 bg-campaign-green text-white rounded-lg font-source-sans font-semibold hover:bg-opacity-90 transition"
            >
              {t("nav.about")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}