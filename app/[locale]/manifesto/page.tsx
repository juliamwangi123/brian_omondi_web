"use client";

export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Leaf, BookOpen, Heart, Home, Users } from "lucide-react";

export default function ManifestoPage() {
  const t = useTranslations("manifesto");

  const policies = [
    {
      key: "agriculture",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      key: "education",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    { key: "health", icon: Heart, color: "text-red-600", bgColor: "bg-red-50" },
    {
      key: "infrastructure",
      icon: Home,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      key: "youth",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl font-source-sans">
              Our comprehensive plan for Mumias West development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="space-y-16">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon;
              const points = t.raw(
                `${policy.key}.points` as any
              ) as unknown as string[];

              return (
                <motion.div
                  key={policy.key}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`${policy.bgColor} p-8 rounded-lg`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`${policy.color} flex-shrink-0`}>
                      <IconComponent size={48} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-playfair font-bold mb-6 text-campaign-green">
                        {t(`${policy.key}.title`)}
                      </h3>
                      <ul className="space-y-4">
                        {points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="inline-block w-2 h-2 bg-campaign-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span className="font-source-sans text-gray-700">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
