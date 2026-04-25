"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useNewsArticle } from "@/app/lib/hooks/useNewsArticle";
import { useNews } from "@/app/lib/hooks/useNews";

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data: article, isLoading, isError } = useNewsArticle(slug);
  const { data: allNews } = useNews(1);
  debugger
  const related = (allNews?.results ?? []).filter((item) => item.slug !== slug).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-10 h-10 border-4 border-[#000073] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-bold text-[#000073] text-3xl mb-4">
            Article not found
          </h1>
          <Link
            href="/news"
            className="text-[#cbdcff] font-bold hover:underline"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  const displayDate = new Date(article.published_date ?? article.created_at).toLocaleDateString(
    "en-US", { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-[#000073] py-16 md:pb-20 md:pt-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(147,197,253,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.12)", color: "#cbdcff" }}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{displayDate}</span>
              </div>
            </div>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Article */}
      <section className="max-w-3xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <motion.div
          className="bg-white rounded-xl p-8 md:p-12 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full rounded-xl overflow-hidden mb-8">
            <img
              src={article.hero_image_url}
              alt={article.title}
              className="w-full h-auto rounded-xl"
              style={{ maxHeight: '520px', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-700"
            style={{ fontFamily: 'Century_Gothic_Regular', fontWeight: 500 }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="border-t-2 border-gray-200 mt-12 pt-8">
            <p className="text-sm text-gray-500">
              Posted on {displayDate} in <span className="text-[#cbdcff] font-semibold">{article.category}</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#000073] py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(147,197,253,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 justify-center">
              <h3 className="font-bold text-white text-2xl">
                Join the Movement
              </h3>
              <p className="text-gray-400 text-base">
                Be part of the transformation of Mumias West. Vote for integrity,
                action and results for every family in Mumias West.
              </p>
              <Link
                href="/manifesto"
                className="w-full py-3 rounded-xl font-bold text-center text-sm transition-all hover:brightness-110"
                style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff" }}
              >
                Read the Manifesto
              </Link>
            </div>

            {related.length > 0 && (
              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-white text-lg">
                  More Updates
                </h4>
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="relative w-28 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                      <Image
                        src={item.hero_image_url}
                        alt={item.title}
                        fill
                        sizes="112px"
                        className="object-cover object-top group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex flex-col gap-1 justify-center">
                      <p className="font-semibold text-white group-hover:text-[#cbdcff] transition-colors text-sm leading-tight">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {new Date(item.published_date ?? item.created_at).toLocaleDateString(
                          "en-US", { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
