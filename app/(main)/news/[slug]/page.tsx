"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

const newsItems = [
  {
    image: "/images/pic3.jpg",
    category: "Campaign News",
    date: "February 12, 2025",
    title: "Brian Omondi Launches Official 2027 Campaign in Mumias West",
    excerpt:
      "Hundreds of supporters gathered as Brian officially declared his candidacy, pledging to transform all four wards of Mumias West Constituency.",
    slug: "campaign-launch",
    content: `
      The campaign is officially on. We packed the grounds at Mumias High School last Friday with supporters from all across the constituency. People came expecting a rally—we gave them something more: a real conversation about where we go from here.

      Families from Lusheya to Marama. Farmers, students, women leaders, and young entrepreneurs. They came because they're tired of promises. They came because they want to see action.

      "We've suffered long enough," one farmer told me. "We need someone who understands our challenges because they live them too."

      That resonates. Because I do live them. My family farms. I know what it means when the rains fail and there's no support system. I know what it feels like when your child finishes school and can't find work in their own community. I know what it's like when the road to the hospital takes three hours instead of thirty minutes.

      The manifesto Brian has built isn't theory. It's built on conversations from all four wards. Five pillars. Agriculture, education, health, infrastructure, and youth & women empowerment. Every single one is a response to what real people told us they need.

      Elections are about choices. You can choose more of the same. Or you can choose someone who will show up, listen, and deliver results. That's what this campaign is about.

      We're just getting started. See you on the trail.
    `,
  },
  {
    image: "/images/pic4.jpg",
    category: "Community Visit",
    date: "January 28, 2025",
    title: "Listening Tour Across All Four Wards Reveals Real Priorities",
    excerpt:
      "Over 50 community meetings in Mumias West revealed agriculture, education, and health as top concerns. Full manifesto based directly on citizen input.",
    slug: "listening-tour",
    content: `
      We spent the last four weeks in every corner of Mumias West. Not campaigning. Listening.

      Fifty-three community meetings. Over a thousand conversations. And the priorities were crystal clear. Not what politicians think people should need. What people actually told us they need.

      In Lusheya, farmers spoke about water for irrigation. They have the land. They have the will. They just need infrastructure. We listened.

      In Marama Central, teachers told us about overcrowded classrooms and missing learning materials. Children sitting on the floor. Teachers buying supplies from their own salaries. We listened.

      "Why should my daughter have to travel 20km to the nearest hospital?" a mother asked in Lusheya.

      This tour gave us the real priorities. Not guesswork, not what we think people need. What they actually told us they need. That's what the manifesto is built on.

      If you haven't had a chance to share your thoughts directly, you still can. We're listening.
    `,
  },
  {
    image: "/images/pic5.jpg",
    category: "Economic News",
    date: "January 15, 2025",
    title: "Agricultural Support Program to Connect Farmers with Markets",
    excerpt:
      "New initiative focuses on helping Mumias West farmers access fair prices and modern farming techniques through cooperative networks.",
    slug: "agricultural-program",
    content: `
      Agriculture isn't just our heritage. It's our future. But our farmers are selling at the lowest prices in the region.

      That changes with a coordinated farming cooperative network. Think about it: if Mumias West farmers sold collectively instead of individually, we'd have market power. We could negotiate prices. We could access better seeds and equipment together.

      Plus, training. Modern techniques. Soil conservation. Water harvesting. These aren't new ideas. They work everywhere else. They'll work here.

      This isn't charity. It's investment. When our farmers earn more, the entire economy grows. Children can stay in school. Families can afford healthcare. Communities thrive.

      Agriculture first. That's the foundation of everything else.
    `,
  },
  {
    image: "/images/pic7.jpg",
    category: "Announcement",
    date: "January 10, 2025",
    title: "Youth Empowerment Forum Draws Hundreds in Mumias",
    excerpt:
      "A packed forum saw Brian outline his vision for youth jobs, vocational training, and chama support for women entrepreneurs.",
    slug: "youth-forum",
    content: `
      Young people showed up. A lot of them. And they asked hard questions.

      "Where are the jobs?" one graduate asked.

      Fair question. Mumias West has young people with skills. But many leave for Nairobi, Kisumu, or abroad because there's nothing here for them. That's a brain drain we can't afford.

      The plan: vocational centers in each ward. Not classrooms disconnected from reality. Real skills. Welding, plumbing, electronics, entrepreneurship. Then support—tools, connections to markets, small loans through the chama system.

      For women entrepreneurs, the chama system is everything. It's built-in support. It's peer accountability. And it works. We need to expand it. Training. Startup capital. Market access.

      Young people are the engine of transformation. Only if they have a reason to stay.
    `,
  },
  {
    image: "/images/pic8.jpg",
    category: "Health Initiative",
    date: "December 28, 2024",
    title: "Maternal Health Mobile Clinic Launched in Mumias West",
    excerpt:
      "First of mobile clinics aimed at bringing healthcare closer to remote wards in Mumias West constituency.",
    slug: "maternal-health-launch",
    content: `
      Healthcare shouldn't be a privilege. It should be a right. But ask anyone in Marama North or East Wanga how long it takes to reach a hospital.

      The roads. The distance. The cost of transport. Three hours to reach a facility that might not even have supplies. Women die from complications that are completely preventable if they'd reached proper care in time.

      This first mobile maternal health clinic is just the beginning. We're going to every ward. Regular visits. Prenatal care. Screenings. Vaccinations. Training for community health workers.

      No one should lose a mother because the nearest hospital is three hours away.

      Healthcare for all four wards. That's non-negotiable.
    `,
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = newsItems.find((item) => item.slug === slug);
  const related = newsItems.filter((item) => item.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-bold text-[#000073] text-3xl mb-4">
            Article not found
          </h1>
          <Link
            href="/news"
            className="text-[#cbdcff] font-bold hover:underline"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner — solid blue, no image */}
      <section className="relative bg-[#000073] py-16 md:py-20 overflow-hidden">
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
              "radial-gradient(ellipse at center, rgba(147,197,253,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          {/* Back button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Article meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 max-w-3xl"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.12)", color: "#cbdcff" }}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
            </div>
            <h1
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Article */}
      <section className="max-w-3xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <motion.div
          className="bg-white rounded-xl p-8 md:p-12 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Featured image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 mt-12 pt-8">
            <p className="text-sm text-gray-500">
              Posted on {article.date} in <span className="text-[#cbdcff] font-semibold">{article.category}</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#000073] py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(147,197,253,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left — Call to action */}
            <div className="flex flex-col gap-4 justify-center">
              <h3 className="font-bold text-white text-2xl">
                Join the Movement
              </h3>
              <p className="text-gray-400 text-base">
                Be part of the transformation of Mumias West. Vote for integrity,
                action and results for every family in Mumias West.
              </p>
              <Link
                href="/manifesto"
                className="w-full py-3 rounded-xl font-bold text-center text-sm transition-all hover:brightness-110"
                style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff" }}
              >
                Read the Manifesto
              </Link>
            </div>

            {/* Related articles */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#000073] text-lg">
                More Updates
              </h4>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="flex gap-3 group"
                >
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-white group-hover:text-[#cbdcff] transition-colors text-sm leading-tight">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
