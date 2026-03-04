"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Wheat, GraduationCap, HeartPulse, Hammer, Users } from "lucide-react";

const pillars = [
  {
    icon: Wheat,
    number: "01",
    title: "Agriculture",
    subtitle: "Feeding Mumias West, Empowering Our Farmers",
    description:
      "Agriculture is the lifeblood of Mumias West. Brian's plan puts farmers first — from the smallholder growing maize to the sugarcane farmer waiting for fair pay.",
    points: [
      "Subsidised fertiliser programme to reduce input costs for maize and sugarcane farmers",
      "Modern irrigation infrastructure to reduce dependence on rainfall",
      "Direct partnership with sugar millers to revive the Mumias Sugar Company supply chain",
      "Establishment of a constituency agriculture fund for low-interest farmer loans",
      "Farmer cooperatives supported and connected to national and county markets",
      "Extension officer deployment to all six wards for on-ground agricultural support",
    ],
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Education",
    subtitle: "Every Child in Mumias West Deserves a Chance",
    description:
      "Education is the most powerful investment a community can make. Brian is committed to ensuring no child in Mumias West is left behind due to poverty or lack of resources.",
    points: [
      "Bursary fund for needy students across all six wards — no child left out",
      "Construction and renovation of modern classrooms in underserved schools",
      "Free sanitary towels for girls in every public school in the constituency",
      "Support for early childhood development centres in all wards",
      "Mentorship programmes connecting students with professionals",
      "Advocacy for additional secondary schools in underserved wards",
    ],
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Health",
    subtitle: "Quality Healthcare Within Reach of Every Family",
    description:
      "Every family in Mumias West deserves access to quality healthcare without travelling long distances or paying beyond their means. Brian's health agenda puts people before politics.",
    points: [
      "Upgrade Mumias Sub-County Hospital with modern equipment and staffing",
      "Mobile clinic programme to reach remote areas across all six wards",
      "Maternal health support — safe delivery kits and postnatal care",
      "Mental health awareness and support programmes for youth",
      "Advocacy for a fully stocked community health centre in each ward",
      "Partnership with NGOs to provide free medical camps quarterly",
    ],
  },
  {
    icon: Hammer,
    number: "04",
    title: "Infrastructure",
    subtitle: "Building the Roads, Water and Power Mumias West Deserves",
    description:
      "Infrastructure is the foundation of development. You cannot build a hospital people cannot reach or a school with no electricity. Brian's infrastructure agenda is practical and urgent.",
    points: [
      "Tarmacking of key feeder roads connecting farming communities to markets",
      "Grading and maintenance of all murram roads across six wards",
      "Borehole sinking and water system rehabilitation for clean water access",
      "Rural electrification under the Last Mile Connectivity Programme",
      "Street lighting in market centres and trading areas",
      "Advocacy for a Mumias West bypass road to ease congestion",
    ],
  },
  {
    icon: Users,
    number: "05",
    title: "Youth & Women",
    subtitle: "Unlocking the Potential of Our People",
    description:
      "The youth and women of Mumias West are not a problem to be managed — they are the solution the constituency has been waiting for. Brian's plan gives them the tools to lead.",
    points: [
      "Youth empowerment fund to support business startups across the constituency",
      "Vocational training centres offering skills in carpentry, tailoring, ICT and agribusiness",
      "Formalise and strengthen women's chama networks with microfinance access",
      "Sports facilities and youth recreation centres in all six wards",
      "Women leadership mentorship programme ahead of 2027 and beyond",
      "Internship and apprenticeship programme connecting youth to county government",
    ],
  },
];

export default function ManifestoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-[#0d2b14] py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#d4a017]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
                The Vision
              </span>
              <div className="w-8 h-0.5 bg-[#d4a017]" />
            </div>
            <h1
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Brian's Manifesto
            </h1>
            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              Five pillars. Six wards. One vision for a transformed Mumias West.
            </p>
            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {pillars.map((pillar) => (
                <a
                  key={pillar.title}
                  href={`#${pillar.title.toLowerCase().replace(" & ", "-")}`}
                  className="px-4 py-2 rounded-full text-xs font-bold border border-white/20 text-white/70 hover:border-[#d4a017] hover:text-[#d4a017] transition-all"
                >
                  {pillar.number} {pillar.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-8 md:px-16">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={pillar.title}
              id={pillar.title.toLowerCase().replace(" & ", "-")}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#d4a017]/20 py-16 md:py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative pillar number */}
              <div
                className="absolute top-8 right-0 font-playfair font-bold text-[#d4a017] pointer-events-none select-none hidden md:block"
                style={{ fontSize: "140px", opacity: 0.04, lineHeight: 1 }}
              >
                {pillar.number}
              </div>

              {/* Left — identity */}
              <div className={`flex flex-col gap-5 pr-0 md:pr-16 ${isEven ? "" : "md:order-last md:pl-16 md:pr-0"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0d2b14] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4a017]">
                      Pillar {pillar.number}
                    </p>
                    <h2
                      className="font-playfair font-bold text-[#0d2b14] leading-tight"
                      style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
                    >
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <p className="font-playfair italic text-[#d4a017] text-base">
                  {pillar.subtitle}
                </p>

                <div className="w-10 h-0.5 bg-[#d4a017]/40" />

                <p className="text-gray-500 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Right — points */}
              <div className={`flex flex-col gap-0 ${isEven ? "md:border-l border-[#d4a017]/20 md:pl-16" : "md:border-r border-[#d4a017]/20 md:pr-16 md:order-first"}`}>
                {pillar.points.map((point, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: isEven ? 15 : -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.07 }}
                  >
                    <span className="text-[#d4a017] font-playfair font-bold text-lg flex-shrink-0 mt-0.5">
                      —
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-[#0d2b14] py-16 md:py-20 overflow-hidden mt-8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-playfair font-bold text-white"
              style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
            >
              This is a Promise, Not a Poster
            </h2>
            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
              Every point in this manifesto is a commitment Brian intends to
              means.
            </p>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}