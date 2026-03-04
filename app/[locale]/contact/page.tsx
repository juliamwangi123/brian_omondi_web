"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type FormState = "idle" | "pending" | "success" | "error";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormState("error");
      return;
    }

    setFormState("pending");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@brianomondi.ke",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 712 345 678",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mumias, Kakamega County, Kenya",
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
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <IconComponent className="w-12 h-12 text-campaign-gold mx-auto mb-4" />
                  <h3 className="text-lg font-playfair font-bold mb-2 text-campaign-green">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 font-source-sans">
                    {info.content}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  {t("email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  {t("message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green resize-none"
                  rows={5}
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button & States */}
              <div>
                {formState === "idle" && (
                  <button
                    type="submit"
                    className="w-full py-4 bg-campaign-gold text-white rounded-lg font-source-sans font-semibold hover:bg-opacity-90 transition text-lg"
                  >
                    {t("send")}
                  </button>
                )}

                {formState === "pending" && (
                  <div className="w-full py-4 rounded-lg bg-blue-50 border-2 border-blue-300 flex items-center justify-center gap-2">
                    <div className="w-6 h-6 border-3 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                    <span className="font-source-sans text-blue-700">
                      Sending...
                    </span>
                  </div>
                )}

                {formState === "success" && (
                  <div className="w-full py-4 rounded-lg bg-green-50 border-2 border-green-300 flex items-center justify-center gap-2">
                    <span className="font-source-sans text-green-700 font-semibold">
                      Message sent successfully!
                    </span>
                  </div>
                )}

                {formState === "error" && (
                  <div className="w-full py-4 rounded-lg bg-red-50 border-2 border-red-300">
                    <span className="font-source-sans text-red-700 font-semibold">
                      Please fill out all fields
                    </span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
