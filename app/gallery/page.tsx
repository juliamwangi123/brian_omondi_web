"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";

export default function GalleryPage() {
  const galleries = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Campaign Event ${i + 1}`,
    category: ["Campaign", "Community", "Events", "Rallies"][i % 4],
  }));

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
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d2b14] to-[#d4a017] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-playfair font-bold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
