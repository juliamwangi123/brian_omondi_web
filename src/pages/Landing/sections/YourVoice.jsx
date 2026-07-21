import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { wards } from "../../../data/wards";
import { useFeedbackSubmit } from "../../../lib/hooks/useFeedbackPost";
import "./YourVoice.css";
import SectionLabel from '../../../components/SectionLabel'  

export default function YourVoice() {
  const [formState, setFormState] = useState({
    name: "",
    ward: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { submitFeedback, isPending, isError } = useFeedbackSubmit();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formState.name || !formState.ward || !formState.message) return;

    submitFeedback(formState, {
      onSuccess: () => {
        setSubmitted(true);
      },
      onError: (error) => {
        throw error;
      },
    });
  };

  return (
    <section className="your-voice relative py-16 md:py-24 bg-[#000073] overflow-hidden">
     <div  
        className="your-voice__left-bg"  
        style={{ backgroundImage: "url('/images/candidate-side.svg')" }}  
      />  
  
      <div className="your-voice__inner">  
        {/* Left Side — Text content */}  
        <div className="your-voice__left">  
          <div className="your-voice__left-content">  
            <div className="your-voice__header anim anim--slide-left">  
              <SectionLabel text="Your Voice Matters" variant="white" />  
            </div>  
  
            <h2 className="your-voice__title anim anim--slide-left anim--delay-1">  
              Talk To Brian  
            </h2>  
  
            <p className="your-voice__body anim anim--slide-left anim--delay-2">  
              A good leader listens before he acts. Brian wants to hear directly  
              from the people of Mumias West, your concerns, your hopes, and the  
              issues that matter most to your family and your ward  
            </p>  
  
            <p className="your-voice__script anim anim--slide-left anim--delay-3">  
              "Every message will be read. Your voice will shape the  
              manifesto and the priorities of this campaign."  
            </p>  
          </div>  
        </div>  

          {/* Right — Form */}
          <div className="your-voice__right">
            <motion.div
              className="your-voice__form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-5 text-center">
                  <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-5 text-center">
                <CheckCircle className="w-14 h-14 text-[#000073]" />
                <h3 className="font-bold text-[#000073] text-2xl">
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
                  className="text-[#000073] text-sm font-bold hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#000073] text-sm font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. John Barasa"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#000073] transition-colors"
                    />
                  </div>

                  {/* Ward */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#000073] text-sm font-bold">
                      Your Ward
                    </label>
                    <select
                      name="ward"
                      value={formState.ward}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#000073] transition-colors appearance-none"
                      style={{ color: formState.ward ? "#1f2937" : "#9ca3af" }}
                    >
                      <option value="" disabled>
                        Select your ward
                      </option>
                      {wards.map((ward) => (
                        <option key={ward.value} value={ward.value} className="text-gray-800">
                          {ward.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#000073] text-sm font-bold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts, concerns, or hopes for our constituency..."
                      rows={5}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#000073] transition-colors resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {isError && (
                    <p className="text-red-500 text-xs text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isPending ||
                      !formState.name ||
                      !formState.ward ||
                      !formState.message
                    }
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
                    style={{ background: "#000073", color: "#ffffff" }}
                  >
                    {isPending ? (
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