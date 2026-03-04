"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, AlertCircle, Heart } from "lucide-react";

type DonationState = "idle" | "pending" | "success" | "error";

export default function DonatePage() {
  const t = useTranslations("donate");
  const [selectedAmount, setSelectedAmount] = useState<string | null>("500");
  const [customAmount, setCustomAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donationState, setDonationState] = useState<DonationState>("idle");

  const tiers = ["100", "500", "1000", "2500"];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;

    // Validation
    if (!amount) {
      setDonationState("error");
      return;
    }

    if (!phoneNumber.match(/^07\d{8}$/)) {
      setDonationState("error");
      return;
    }

    // Simulate M-Pesa process
    setDonationState("pending");
    setTimeout(() => {
      setDonationState("success");
      setTimeout(() => {
        // Reset form
        setSelectedAmount("500");
        setCustomAmount("");
        setPhoneNumber("");
        setDonorName("");
        setDonationState("idle");
      }, 3000);
    }, 2000);
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
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl font-source-sans">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Donation Tiers */}
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6 text-campaign-green">
                Select Amount
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {tiers.map((tier) => (
                  <button
                    key={tier}
                    onClick={() => {
                      setSelectedAmount(tier);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-lg font-source-sans font-semibold transition ${
                      selectedAmount === tier && !customAmount
                        ? "bg-campaign-gold text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t(`tiers.${tier}`)}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  {t("custom")}
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedAmount(null);
                  }}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-bold text-campaign-green">
                Your Information
              </h2>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0712345678"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                />
              </div>

              {/* Donor Name */}
              <div>
                <label className="block text-sm font-source-sans font-semibold mb-2 text-gray-700">
                  {t("name")}
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-source-sans focus:outline-none focus:border-campaign-green"
                />
              </div>
            </div>

            {/* Donation Button & States */}
            <div>
              {donationState === "idle" && (
                <button
                  onClick={handleDonate}
                  disabled={!phoneNumber || (!selectedAmount && !customAmount)}
                  className={`w-full py-4 rounded-lg font-source-sans font-semibold text-white transition text-lg ${
                    !phoneNumber || (!selectedAmount && !customAmount)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-campaign-gold hover:bg-opacity-90"
                  }`}
                >
                  {t("donate_button")}
                </button>
              )}

              {donationState === "pending" && (
                <div className="w-full py-4 rounded-lg bg-blue-50 border-2 border-blue-300 flex items-center justify-center gap-2">
                  <div className="w-6 h-6 border-3 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="font-source-sans text-blue-700">
                    {t("pending")}
                  </span>
                </div>
              )}

              {donationState === "success" && (
                <div className="w-full py-4 rounded-lg bg-green-50 border-2 border-green-300 flex items-center justify-center gap-2">
                  <Check className="w-6 h-6 text-green-600" />
                  <span className="font-source-sans text-green-700 font-semibold">
                    {t("success")}
                  </span>
                </div>
              )}

              {donationState === "error" && (
                <div className="w-full py-4 rounded-lg bg-red-50 border-2 border-red-300 flex items-center justify-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <span className="font-source-sans text-red-700 font-semibold">
                    {t("error")}
                  </span>
                </div>
              )}
            </div>

            {/* TODO Comment */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm font-source-sans text-yellow-800">
                {/* TODO: connect M-Pesa Daraja STK Push API here */}
                Backend integration pending. This is a UI demonstration only.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
