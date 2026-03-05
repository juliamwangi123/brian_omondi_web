"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { newsItems } from "@/data/newsItems";

export default function NewsPage() {
  const [featured, ...rest] = newsItems;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-[#0d2b14] py-20 md:py-28 overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Radial glow */}
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
                Campaign Updates
              </span>
              <div className="w-8 h-0.5 bg-[#d4a017]" />
            </div>
            <h1
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              From the Campaign Trail
            </h1>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              Stay up to date with  Brian&apos;s journey across Mumias West.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Image */}
          <div className="relative h-64 md:h-auto min-h-[300px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#d4a017", color: "#0d2b14" }}
              >
                {featured.category}
              </span>
            </div>
            {/* Featured label */}
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0d2b14] text-white">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>{featured.date}</span>
            </div>
            <h2
              className="font-playfair font-bold text-[#0d2b14] leading-tight"
              style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
            >
              {featured.title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="w-12 h-0.5 bg-[#d4a017]" />
            <Link
              href={`/news/${featured.slug}`}
              className="inline-flex items-center gap-2 font-bold text-[#0d2b14] hover:text-[#d4a017] transition-colors text-sm"
            >
              Read Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((item, index) => (
            <motion.div
              key={item.slug}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2 py-1 rounded text-xs font-bold"
                    style={{ background: "#d4a017", color: "#0d2b14" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-playfair font-bold text-[#0d2b14] text-lg leading-snug hover:text-[#d4a017] transition-colors cursor-pointer">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-[#d4a017] text-sm font-bold hover:underline mt-1"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
