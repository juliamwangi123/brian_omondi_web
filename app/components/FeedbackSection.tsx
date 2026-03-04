"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const wards = [
  "Lusheya/Lubinu Ward",
  "East Wanga Ward",
  "Marama Central Ward",
  "Marama East Ward",
  "Marama North Ward",
  "Marama West Ward",
];

export default function FeedbackSection() {
  const [formState, setFormState] = useState({
    name: "",
    ward: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formState.name || !formState.ward || !formState.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0d2b14] overflow-hidden">

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,160,23,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#d4a017]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
                Your Voice Matters
              </span>
            </div>

            <h2
              className="font-playfair font-bold text-white leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Tell Brian What Matters to You
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              A good leader listens before he acts. Brian wants to hear directly
              from the people of Mumias West — your concerns, your hopes, and
              the issues that matter most to your family and your ward.
            </p>

            <div className="w-12 h-0.5 bg-[#d4a017]" />

            <p className="text-gray-500 text-sm leading-relaxed italic">
              "Every message will be read. Your voice will shape the manifesto
              and the priorities of this campaign."
            </p>

            <div className="flex items-center gap-4 pt-2">
              {["6", "Wards", "·", "One", "Voice"].map((word, i) => (
                <span
                  key={i}
                  className={
                    word === "·"
                      ? "text-[#d4a017]"
                      : i === 0
                      ? "font-playfair font-bold text-[#d4a017] text-2xl"
                      : "text-gray-400 text-sm font-semibold"
                  }
                >
                  {word}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-5 text-center">
                <CheckCircle className="w-14 h-14 text-[#0d2b14]" />
                <h3 className="font-playfair font-bold text-[#0d2b14] text-2xl">
                  Thank You!
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Your message has been received. Brian and his team appreciate
                  you taking the time to share what matters to you.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", ward: "", message: "" });
                  }}
                  className="text-[#d4a017] text-sm font-bold hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b14] text-sm font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. John Barasa"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                  />
                </div>

                {/* Ward */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b14] text-sm font-bold">
                    Your Ward
                  </label>
                  <select
                    name="ward"
                    value={formState.ward}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors appearance-none"
                    style={{ color: formState.ward ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>
                      Select your ward
                    </option>
                    {wards.map((ward) => (
                      <option
                        key={ward}
                        value={ward}
                        className="text-gray-800"
                      >
                        {ward}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b14] text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts, concerns, or hopes for our constituency..."
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#d4a017] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={
                    loading ||
                    !formState.name ||
                    !formState.ward ||
                    !formState.message
                  }
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
                  style={{ background: "#d4a017", color: "#0d2b14" }}
                >
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Message
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Your message goes directly to the campaign team.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}