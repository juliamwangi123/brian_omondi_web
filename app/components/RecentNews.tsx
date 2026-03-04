"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const news = [
  {
    image: "/images/pic6.jpg",
    category: "Campaign News",
    date: "February 12, 2026",
    slug: "campaign-launch",
    title: "Brian Omondi Launches Official 2027 Campaign in Mumias West",
    excerpt:
      "Hundreds of supporters gathered as Brian officially declared his candidacy, pledging to transform all six wards.",
  },
  {
    image: "/images/pic4.jpg",
    category: "Community",
    date: "January 28, 2026",
    slug: "community-meetings",
    title: "Community Meetings Held Across All Six Wards",
    excerpt:
      "Brian met with residents to listen and understand the pressing needs of each ward ahead of his manifesto launch.",
  },
  {
    image: "/images/pic7.jpg",
    category: "Announcement",
    date: "January 10, 2026",
    slug: "youth-forum",
    title: "Youth Empowerment Forum Draws Hundreds in Mumias",
    excerpt:
      "A packed forum saw Brian outline his vision for youth jobs, vocational training, and chama support for women.",
  },
];

export default function RecentNews() {
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            <div className="w-8 h-0.5 bg-[#d4a017]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
              Latest Updates
            </span>
            <div className="w-8 h-0.5 bg-[#d4a017]" />
          </div>
          <h2
            className="font-playfair font-bold text-[#0d2b14] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            From the Campaign Trail
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Stay up to date with Brian's journey across Mumias West.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image — clicking it also goes to article */}
              <Link href={`/${locale}/news/${item.slug}`}>
                <div className="relative h-48 cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Category pill */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "#d4a017", color: "#0d2b14" }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <p className="text-gray-400 text-xs">{item.date}</p>
                <Link href={`/${locale}/news/${item.slug}`}>
                  <h3 className="font-playfair font-bold text-[#0d2b14] text-lg leading-snug hover:text-[#d4a017] transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                <Link
                  href={`/${locale}/news/${item.slug}`}
                  className="text-[#d4a017] text-sm font-bold hover:underline mt-1"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href={`/${locale}/news`}
            className="inline-block px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-[#0d2b14] hover:text-white"
            style={{ border: "2px solid #0d2b14", color: "#0d2b14" }}
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}