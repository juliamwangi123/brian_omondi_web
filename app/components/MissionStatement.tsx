"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MissionStatement() {
  return (
    <section className="w-full mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-2 divide-white/40">
        {/* Left Panel — Join the Movement */}
        <motion.div
          className="bg-[#000073] flex flex-col items-center justify-between text-center px-12 pt-8 pb-8 gap-0 mr-0 md:mr-1 mb-1 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white leading-tight" style={{ fontFamily: 'Century_Gothic_Regular', fontSize: '36px' }}>
              Join the Movement
            </h2>
            <p className="text-white/80 leading-relaxed max-w-xs" style={{ fontFamily: 'Century_Gothic_Regular', fontSize: '27px' }}>
              A Leader Shaped by<br />the People of Mumias West
            </p>
          </div>
          <Link
            href="/about"
            className="text-white hover:text-white/70 transition-colors duration-200"
            style={{ fontFamily: 'Century_Gothic_Bold', fontSize: '21px' }}
          >
            Read More →
          </Link>
        </motion.div>

        {/* Right Panel — Read My Manifesto */}
        <motion.div
          className="bg-[#000073] flex flex-col items-center justify-between text-center px-12 pt-8 pb-8 gap-0 mr-0 md:ml-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white leading-tight" style={{ fontFamily: 'Century_Gothic_Regular', fontSize: '36px' }}>
              Read My Manifesto
            </h2>
            <p className="text-white/80 leading-relaxed max-w-xs" style={{ fontFamily: 'Century_Gothic_Regular', fontSize: '27px' }}>
              Eight pillars. Four wards.<br />One vision for a transformed Mumias West.
            </p>
          </div>
          <Link
            href="/manifesto"
            className="text-white hover:text-white/70 transition-colors duration-200"
            style={{ fontFamily: 'Century_Gothic_Bold', fontSize: '21px' }}
          >
            Read More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}