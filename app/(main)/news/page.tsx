"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { useNews } from "@/app/lib/hooks/useNews";

export default function NewsPage() {
  const { data, isLoading, isError } = useNews(1);
  const posts = data?.results ?? [];
  const [featured, ...rest] = posts;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-[#000073] py-20 md:py-28 overflow-hidden">
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
              "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
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
              <div className="w-8 h-0.5 bg-white/40" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                Campaign Updates
              </span>
              <div className="w-8 h-0.5 bg-white/40" />
            </div>
            <h1
              className="font-bold text-white"
              style={{ fontFamily: 'Century_Gothic_Bold', fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              From the Campaign Trail
            </h1>
            <p className="text-blue-200/70 max-w-xl text-base md:text-lg" style={{ fontFamily: 'Century_Gothic_Regular' }}>
              Stay up to date with Brian&apos;s journey across Mumias West.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-32">
          <div className="animate-spin w-10 h-10 border-4 border-[#000073] border-t-transparent rounded-full" />
        </div>
      )}

      {/* Error state */}
      {!isLoading && isError && (
        <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
          <Newspaper className="w-16 h-16 opacity-30" />
          <p className="text-xl font-semibold text-gray-500" style={{ fontFamily: 'Century_Gothic_Bold' }}>Could not load articles</p>
          <p className="text-sm text-gray-400">Please check your connection or try again later.</p>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !isError && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
          <Newspaper className="w-16 h-16 opacity-30" />
          <p className="text-xl font-semibold text-gray-500" style={{ fontFamily: 'Century_Gothic_Bold' }}>No articles yet</p>
        </div>
      )}

      {/* Content — only when posts exist */}
      {!isLoading && posts.length > 0 && (
        <>
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
              <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden">
                <Image
                  src={featured.hero_image_url}
                  alt={featured.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#000073] text-white">
                    {featured.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#000073]">Featured</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(featured.published_date ?? featured.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="font-bold text-[#000073] leading-tight" style={{ fontFamily: 'Century_Gothic_Bold', fontSize: "clamp(22px, 3vw, 32px)" }}>
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-base leading-relaxed" style={{ fontFamily: 'Century_Gothic_Regular' }}>{featured.excerpt}</p>
                <div className="w-12 h-0.5 bg-[#000073]/20" />
                <Link href={`/news/${featured.slug}`} className="inline-flex items-center gap-2 font-bold text-[#000073] hover:text-[#000073]/60 transition-colors text-sm" style={{ fontFamily: 'Century_Gothic_Bold' }}>
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* News Grid */}
          {rest.length > 0 && (
            <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                      <Image
                        src={item.hero_image_url}
                        alt={item.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded text-xs font-bold bg-[#000073] text-white">{item.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1 min-h-0">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(item.published_date ?? item.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <h3 className="font-bold text-[#000073] text-lg leading-snug hover:text-[#000073]/60 transition-colors cursor-pointer" style={{ fontFamily: 'Century_Gothic_Bold' }}>
                        <Link href={`/news/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-6" style={{ fontFamily: 'Century_Gothic_Regular' }}>{item.excerpt}</p>
                      <Link href={`/news/${item.slug}`} className="text-[#000073] text-sm font-bold hover:underline mt-auto pt-1" style={{ fontFamily: 'Century_Gothic_Bold' }}>Read More →</Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}