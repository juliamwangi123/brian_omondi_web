"use client";

export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

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
      <section className="bg-gradient-to-br from-campaign-green to-campaign-gold text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              {t("title")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <p className="text-xl font-source-sans text-gray-700 leading-relaxed mb-6">
                {t("bio")}
              </p>
              <p className="text-lg font-source-sans text-gray-600 leading-relaxed">
                {t("vision")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-campaign-green"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <IconComponent className="w-12 h-12 text-campaign-gold mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3 text-campaign-green">
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
