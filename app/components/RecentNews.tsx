"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useNews } from "@/app/lib/hooks/useNews";

export default function RecentNews() {
  const { data, isLoading, isError } = useNews(1);
  const posts = data?.results ?? [];

  if (isLoading || isError || posts.length === 0) return null;

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
            <div className="w-8 h-0.5 bg-[#000073]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#000073]">
              Latest Updates
            </span>
            <div className="w-8 h-0.5 bg-[#000073]" />
          </div>
          <h2
            className="font-bold text-black mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            From the Campaign Trail
          </h2>
          <p className="text-gray-600 font-medium max-w-xl mx-auto text-base md:text-lg">
            Stay up to date with  Brian&apos;s journey across Mumias West.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={item.hero_image_url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded text-xs font-bold bg-[#000073] text-white">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1 min-h-0">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(item.published_date ?? item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="font-bold text-[#000073] text-lg leading-snug hover:text-[#000073]/60 transition-colors cursor-pointer" style={{ fontFamily: 'Century_Gothic_Bold' }}>
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-6" style={{ fontFamily: 'Century_Gothic_Regular' }}>{item.excerpt}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-[#000073] text-sm font-bold hover:underline mt-auto pt-1"
                  style={{ fontFamily: 'Century_Gothic_Bold' }}
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
            href="/news"
            className="inline-block px-8 py-3.5 rounded-xl font-bold text-white transition-all hover:brightness-110"
            style={{ background: "#000073" }}
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  );
}