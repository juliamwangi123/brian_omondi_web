"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { useParams } from "next/navigation";

const newsItems = [
  {
    image: "/images/pic3.jpg",
    category: "Campaign News",
    date: "February 12, 2025",
    title: "Brian Omondi Launches Official 2027 Campaign in Mumias West",
    excerpt:
      "Hundreds of supporters gathered as Brian officially declared his candidacy, pledging to transform all six wards of Mumias West Constituency.",
    slug: "campaign-launch",
    content: `
      The campaign is officially on. We packed the grounds at Mumias High School last Friday with supporters from all across the constituency. People came expecting a rally—we gave them something more: a real conversation about where we go from here.

      Brian laid it out straight. No flowery language, no corporate speak. Just: "I've watched our roads fall apart. I've listened to farmers struggling to survive. I've stood with families without water or power. That stops now."

      The response said everything. People stood up, they asked tough questions, they made commitments. Not because of a speech, but because they recognized someone willing to actually do the work.

      Over the next few months we're taking this across every ward. Not a hit-and-run campaign, but actual conversations with real people about real problems. That's how real change gets built—ground level, ward by ward, family by family.

      If you want to be part of this, we need volunteers. Reach out. Let's get to work.
    `,
  },
  {
    image: "/images/pic4.jpg",
    category: "Community",
    date: "January 28, 2025",
    title: "Community Meetings Held Across All Six Wards",
    excerpt:
      "Brian met with residents across every ward to listen and understand the pressing needs of each community ahead of his manifesto launch.",
    slug: "community-meetings",
    content: `
      We spent two weeks just listening. Started in Lusheya, ended in Marama West. Every ward, every village. Markets, churches, community halls, grazing fields—anywhere people had time to talk.

      The issues are consistent across the board. Roads that haven't been maintained in years. Wells that have run dry. Farmers who can't afford inputs. Young people with no jobs. Schools without decent facilities. Healthcare that's so far away that illnesses become emergencies by the time someone gets there.

      What struck us most wasn't the problems themselves—we knew those existed. It was how directly people spoke about them. No sugar-coating. Just the reality of life in Mumias West.

      "The roads are killing us," one farmer told us in East Wanga. "We can't get our products to market before they spoil."

      "Why should my daughter have to travel 20km to the nearest hospital?" a mother asked in Lusheya.

      This tour gave us the real priorities. Not guesswork, not what we think people need. What they actually told us they need. That's what the manifesto is built on.

      If you haven't had a chance to share your thoughts directly, you still can. We're listening.
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

      We presented real plans: vocational training centers that actually prepare people for jobs that exist. Startup funds for small businesses. A pathway for women's groups to access credit. But the young people in that room didn't want a presentation—they wanted specifics.

      "How many jobs are we actually talking about?" someone asked.

      "What happens if the business fails?" another wanted to know.

      "Who checks if the money is actually being used for what you promise?" A fair question.

      Brian didn't dodge any of it. He talked about the constraints we face, the timelines involved, what success actually looks like. Not the polished campaign answer. The real one.

      What came out of that forum was something different from a political event. It was a space where young people felt heard and challenged. Not lectured to.

      We know the youth of Mumias West are capable. We know they're tired of being sidelined or patronized. This campaign is built on the belief that they should be at the center of what we do, not on the margins. That's not inspiring language—that's just the standard.

      If you're interested in being part of this project, we want you involved from the start. Not as votes. As partners.
    `,
  },
  {
    image: "/images/pic2.jpg",
    category: "Manifesto",
    date: "December 15, 2024",
    title: "Agriculture Roadmap Unveiled for Mumias West Farmers",
    excerpt:
      "Brian presented a detailed plan to support local farmers with subsidised fertiliser, irrigation access, and partnerships to revive the sugar industry.",
    slug: "agriculture-roadmap",
    content: `
      Agriculture has to work. It's that simple. Four out of five families in Mumias West depend on farming. When farming fails, everything fails.

      Right now it's failing. Fertilizer costs more than it should. Water is unreliable. The sugar industry—which used to sustain entire communities—is barely functioning. And farmers are exhausted.

      We're not inventing solutions here. We're implementing what works:

      Support for farmer cooperatives so they can negotiate better prices. Subsidy programs that actually reach the farmers who need them, not get lost in bureaucracy. Infrastructure for irrigation so droughts don't mean crop failure. And real engagement with the sugar millers to build something sustainable.

      A smallholder farmer we spoke with in Marama Central said it clearly: "I work harder than anyone. But the system is stacked against me. One bad harvest and I'm behind for two years."

      That's what we're fixing. Not with slogans, but with actual mechanisms that make farming viable again.

      If you're farming in Mumias West, your input matters here. We need to understand what's actually blocking you so we can address it directly.
    `,
  },
  {
    image: "/images/pic6.jpg",
    category: "Infrastructure",
    date: "November 30, 2024",
    title: "Roads, Water and Electrification — Brian's Infrastructure Promise",
    excerpt:
      "A comprehensive infrastructure agenda covering tarmacking of key roads, clean water access, and rural electrification was shared with constituents.",
    slug: "infrastructure-promise",
    content: `
      You can't build a functioning community without infrastructure. Roads, water, electricity. These aren't luxuries. They're the foundation that everything else is built on.

      In Mumias West, we're short on all three.

      Take roads: for a farmer in Lusheya to get produce to market in Kisumu, they spend hours dealing with murram that turns to mud in the rain. Products spoil. Time is lost. Income disappears. That's not an inconvenience—that's economics destroyed.

      Water: too many communities have stopped even expecting it. Wells have been dry for years. Hand-pumps are broken. People walk kilometers to find drinking water or resort to unsafe sources. That affects everything—health, school attendance, agricultural productivity.

      Electricity: extending the grid to rural areas gets talked about but rarely happens. Without power, small businesses can't grow. Schools can't operate properly. Healthcare facilities can't function.

      Here's what we're committing to: partnering with county and national governments on these issues, not treating infrastructure as lip service. Roads that connect wards to markets. Water systems that actually get maintained. Electricity that reaches the areas that have been left behind.

      None of this gets solved by one ward or one politician acting alone. It requires coordination, accountability, and actual budget allocation. We're prepared to push for that relentlessly.

      If your area needs specific infrastructure work, let us know directly what would make the biggest difference.
    `,
  },
];

export default function NewsDetailPage() {
  const locale = useLocale();
  const params = useParams();
  const slug = params?.slug as string;

  const article = newsItems.find((item) => item.slug === slug);
  const related = newsItems.filter((item) => item.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-playfair font-bold text-[#0d2b14] text-3xl mb-4">
            Article not found
          </h1>
          <Link
            href={`/${locale}/news`}
            className="text-[#d4a017] font-bold hover:underline"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Banner — solid green, no image */}
      <section className="relative bg-[#0d2b14] py-16 md:py-24 overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
          {/* Back button */}
          <Link
            href={`/${locale}/news`}
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
                style={{ background: "#d4a017", color: "#0d2b14" }}
              >
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
            </div>
            <h1
              className="font-playfair font-bold text-white leading-tight"
              style={{ fontSize: "clamp(26px, 4vw, 48px)" }}
            >
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-semibold border-l-4 border-[#d4a017] pl-5 mb-8">
              {article.excerpt}
            </p>

            {/* Body */}
            <div>
              {article.content
                .trim()
                .split("\n\n")
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-200 flex-wrap">
              <Tag className="w-4 h-4 text-[#d4a017]" />
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#d4a017", color: "#0d2b14" }}
              >
                {article.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0d2b14]/10 text-[#0d2b14]">
                Mumias West 2027
              </span>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Candidate card */}
            <div className="bg-[#0d2b14] rounded-2xl p-6 flex flex-col gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/pic2.jpg"
                  alt="Hon. Brian Omondi"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-[#d4a017] text-xs font-bold tracking-widest uppercase mb-1">
                  The Candidate
                </p>
                <h3 className="font-playfair font-bold text-white text-lg">
                  Hon. Brian Omondi
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Mumias West MP Aspirant 2027
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Son of the Soil, Servant of the People. Fighting for integrity,
                action and results for every family in Mumias West.
              </p>
              <Link
                href={`/${locale}/manifesto`}
                className="w-full py-3 rounded-xl font-bold text-center text-sm transition-all hover:brightness-110"
                style={{ background: "#d4a017", color: "#0d2b14" }}
              >
                Read the Manifesto
              </Link>
            </div>

            {/* Related articles */}
            <div className="flex flex-col gap-4">
              <h4 className="font-playfair font-bold text-[#0d2b14] text-lg">
                More Updates
              </h4>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}/news/${item.slug}`}
                  className="flex gap-3 group"
                >
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#d4a017] text-xs font-bold">
                      {item.date}
                    </p>
                    <p className="text-[#0d2b14] text-sm font-semibold leading-snug group-hover:text-[#d4a017] transition-colors">
                      {item.title}
                    </p>
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