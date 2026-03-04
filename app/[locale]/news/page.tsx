"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";

export default function NewsPage() {
  const newsItems = [
    {
      title: "Campaign Launch Exceeds Expectations",
      date: "March 2026",
      content: "1000+ supporters joined us at the launch event in Mumias town",
      image: "Breaking ground with community support",
    },
    {
      title: "Education Initiative Approved",
      date: "February 2026",
      content:
        "Bursary program set to support 500 needy students across all wards",
      image: "Supporting students' futures",
    },
    {
      title: "Community Meets Candidate",
      date: "January 2026",
      content:
        "Town hall meetings held in all 6 wards to hear from constituents",
      image: "Direct engagement with people",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-campaign-green to-campaign-gold text-white py-20">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-center"
          >
            Latest News
          </motion.h1>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <time className="text-sm font-source-sans text-campaign-gold font-semibold">
                  {item.date}
                </time>
                <h2 className="text-3xl font-playfair font-bold my-3 text-campaign-green">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-source-sans mb-4">
                  {item.content}
                </p>
                <div className="bg-gray-100 px-4 py-8 rounded-lg text-center text-gray-500 font-source-sans">
                  [Image: {item.image}]
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
