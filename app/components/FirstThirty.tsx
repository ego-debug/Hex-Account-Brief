"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const PRIORITIES = [
  {
    num: "01",
    body: "Know the Hex pitch cold. By end of week 2, deliver it without notes for a Head of Data, Analytics Lead, or CTO. Three surfaces, the Claude Connector story, and how Context Studio answers the hallucination objection.",
  },
  {
    num: "02",
    body: "Sit on the top 3 SDRs' calls. Memorize their objection handling and account research word-for-word until I build my own.",
  },
  {
    num: "03",
    body: "Hit my activity numbers by end of week 1: dials, emails, LinkedIn. Run my first sequence by end of week 2, anchored on the Claude Connector launch and tested against accounts shaped like Cursor. Refine the opener weekly based on what's getting replies.",
  },
  {
    num: "04",
    body: "Identify the 2 or 3 reps and managers I want as long-haul mentors. Earn 15 minutes of coffee or shadow time with each by end of month.",
  },
];

export default function FirstThirty() {
  return (
    <section
      id="thirty"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="08"
          kicker="My first 30 days"
          title="My First 30 Days"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border-t border-b border-ink/10">
          {PRIORITIES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-cream p-7 sm:p-8 md:p-10 lg:p-9 xl:p-10 flex flex-col min-h-[200px] sm:min-h-[260px]"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-7">
                <span className="font-pixel font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-accent tabular leading-none">
                  {p.num}
                </span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <p className="text-lg md:text-xl text-ink/85 leading-[1.55]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
