"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeadwayAccount() {
  return (
    <section
      id="account"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          kicker="The Account"
          title="The Cursor Account"
        />

        {/* Lead paragraph + sidebar facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-6"
          >
            <motion.p
              variants={reveal}
              className="text-xl md:text-[1.4rem] leading-[1.55] text-ink/85"
            >
              Cursor is the AI-native code editor used by more than half
              the Fortune 500. Founded in 2022 by four MIT engineers,
              the company hit $2 billion ARR in February 2026, faster
              than any B2B software company has ever gotten there.
              Around 50 employees, based in San Francisco. They're
              closing a $2 billion round at a $50 billion valuation
              right now, and in April they signed a partnership with
              SpaceX that gives SpaceX the option to buy them outright
              for $60 billion later this year.
            </motion.p>
          </motion.div>

          {/* Side facts */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-ink/15 lg:pl-8 space-y-8"
          >
            <FactRow label="Stage" value="$2B round in talks at $50B valuation (April 2026)" />
            <FactRow label="HQ" value="San Francisco, CA" />
            <FactRow label="CEO" value="Michael Truell (Co-Founder)" />
            <FactRow label="Scale" value="~50 employees, $2B ARR" />
            <FactRow label="Customers" value="NVIDIA, Uber, Adobe, 50%+ of Fortune 500" />
            <FactRow label="AI moment" value="SpaceX/xAI partnership. Up to $60B." />
          </motion.aside>
        </div>

        {/* The Cursor x SpaceX moment - full visual callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 relative"
        >
          <div className="bg-forest text-ink rounded-sm overflow-hidden relative">
            {/* Decorative date stamp - inline on mobile, absolute on md+ */}
            <div className="md:absolute md:top-10 md:right-10 md:text-right pt-6 md:pt-0 px-6 md:px-0 flex items-baseline md:items-end gap-3 md:gap-0 md:flex-col">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.25em] text-ink/50 md:mb-1 whitespace-nowrap">
                Cursor × SpaceX
              </div>
              <div className="font-pixel font-bold text-2xl sm:text-3xl md:text-4xl text-ink tabular tracking-[0.04em]">
                04 / 21 / 2026
              </div>
            </div>

            <div className="px-6 sm:px-8 md:px-16 py-10 sm:py-14 md:py-24 max-w-4xl">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-accent-warm mb-6 sm:mb-8">
                The story right now
              </div>
              <p className="text-xl md:text-2xl text-ink/90 leading-[1.5] max-w-3xl">
                On April 21, 2026, Cursor announced a partnership with
                SpaceX. SpaceX has the right to acquire Cursor for $60
                billion later this year, or pay $10 billion for the work
                they're doing together. Four days earlier, Cursor was
                reported in talks for a $2 billion round at a $50
                billion valuation, co-led by Andreessen Horowitz and
                Thrive Capital with Nvidia participating. Both events
                landed inside one week.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-accent">
              The setup
            </div>
          </div>
          <div className="lg:col-span-10">
            <p className="text-xl md:text-2xl leading-[1.55] text-ink/90 max-w-4xl">
              They just posted their first Data Scientist (Growth) role.
              The listing literally calls it "early member of the data
              science team" and names Growth, Enterprise, Finance, and
              Product as the teams this person will work with. My read:
              between the SpaceX partnership team and two fresh investor
              groups coming in, whoever takes that job walks into more
              questions than the company has ever had to answer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50">
        {label}
      </div>
      <div className="text-base text-ink">{value}</div>
    </div>
  );
}
