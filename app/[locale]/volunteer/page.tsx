"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

type FormState = "idle" | "pending" | "success" | "error";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ward: "",
    interests: [] as string[],
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const wards = [
    "Mumias",
    "Isikhu",
    "Shinyalu",
    "Khwisero",
    "Lurambi",
    "Kabras",
  ];

  const interests = [
    "Campaign Outreach",
    "Community Development",
    "Youth Programs",
    "Women Empowerment",
    "Event Organization",
    "IT & Social Media",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.ward ||
      formData.interests.length === 0
    ) {
      setFormState("error");
      return;
    }

    setFormState("pending");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          ward: "",
          interests: [],
        });
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

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
              Become a Volunteer
            </h1>
            <p className="text-xl font-source-sans">
              Join us in building a better Mumias West
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                Email Address
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

            {/* Phone */}
            <div>
              <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                placeholder="0712345678"
              />
            </div>

            {/* Ward Selection */}
            <div>
              <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                Select Your Ward
              </label>
              <select
                value={formData.ward}
                onChange={(e) =>
                  setFormData({ ...formData, ward: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
              >
                <option value="">Choose a ward</option>
                {wards.map((ward) => (
                  <option key={ward} value={ward}>
                    {ward}
                  </option>
                ))}
              </select>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-source-sans font-semibold mb-4 text-gray-700">
                Areas of Interest
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`p-3 rounded-lg font-source-sans transition text-left ${
                      formData.interests.includes(interest)
                        ? "bg-campaign-gold text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button & States */}
            <div>
              {formState === "idle" && (
                <button
                  type="submit"
                  className="w-full py-4 bg-campaign-green text-white rounded-lg font-source-sans font-semibold hover:bg-opacity-90 transition text-lg"
                >
                  Become a Volunteer
                </button>
              )}

              {formState === "pending" && (
                <div className="w-full py-4 rounded-lg bg-blue-50 border-2 border-blue-300 flex items-center justify-center gap-2">
                  <div className="w-6 h-6 border-3 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="font-source-sans text-blue-700">
                    Submitting...
                  </span>
                </div>
              )}

              {formState === "success" && (
                <div className="w-full py-4 rounded-lg bg-green-50 border-2 border-green-300 flex items-center justify-center gap-2">
                  <Check className="w-6 h-6 text-green-600" />
                  <span className="font-source-sans text-green-700 font-semibold">
                    Thank you for volunteering!
                  </span>
                </div>
              )}

              {formState === "error" && (
                <div className="w-full py-4 rounded-lg bg-red-50 border-2 border-red-300 flex items-center justify-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <span className="font-source-sans text-red-700 font-semibold">
                    Please fill out all fields
                  </span>
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
