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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-80 flex flex-col justify-center items-center"
              >
                <div className="w-full h-full bg-gradient-to-br from-campaign-green to-campaign-gold flex flex-col items-center justify-center text-white">
                  <div className="text-center">
                    <p className="text-sm font-source-sans opacity-75 mb-2">
                      {item.category}
                    </p>
                    <p className="font-playfair text-lg font-bold">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
