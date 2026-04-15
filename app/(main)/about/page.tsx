"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest and transparent leadership for the people",
    },
    {
      icon: Target,
      title: "Action",
      description: "Delivering results through concrete action",
    },
    {
      icon: Users,
      title: "People-Focused",
      description: "Serving the interests of Mumias West residents",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to quality in all endeavors",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0a1560] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              About Brian Omondi
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Son of Mumias West, committed to transforming our community through integrity, action, and results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#0a1560] mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision and action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <IconComponent className="w-12 h-12 text-[#0a1560] mb-4 mx-auto" />
                  <h3 className="text-xl font-playfair font-bold mb-3 text-[#0a1560]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-source-sans">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
