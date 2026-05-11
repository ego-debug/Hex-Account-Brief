"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedNumber, { ScaleIn } from "./AnimatedNumber";

const BUYER_BLOCKS: { label: string; body: React.ReactNode }[] = [
  {
    label: "The Buyer",
    body: (
      <>
        Hex sells to data leaders and the people who hire them. Cursor's
        open Data Scientist (Growth) posting is the persona Hex is built
        for. The relevant buyer is the co-founder who owns Growth and
        Operations, since that hire reports into their org.
      </>
    ),
  },
  {
    label: "The Pitch",
    body: (
      <>
        Most early data hires at hyper-growth startups spend month one
        building pipelines, dashboards, and governance instead of
        shipping insights. Hex collapses that build into a platform.
        Notebooks for the analyst, Threads for self-serve from product,
        growth, and finance, Context Studio for the semantic layer that
        keeps AI honest. The Claude Connector we shipped on March 3
        means everyone at Cursor (a Claude-heavy company) can ask
        warehouse questions from inside Claude. Day-one productivity for
        the incoming hire.
      </>
    ),
  },
  {
    label: "Why Cursor",
    body: (
      <>
        Cursor has zero public footprint with Hex. Their first data
        scientist will be drowning in usage telemetry from half the
        Fortune 500, plus questions from the SpaceX integration team and
        two new investor cohorts. Hex is the difference between shipping
        value in week one or building infra for six months.
      </>
    ),
  },
];

export default function AndelaFit() {
  return (
    <section
      id="fit"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          kicker="Where Hex fits"
          title="Where Hex Fits Here"
        />

        {/* Buyer / Pitch / Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-36">
          <div className="lg:col-span-9 space-y-8">
            {BUYER_BLOCKS.map((b) => (
              <BuyerBlock key={b.label} label={b.label} body={b.body} />
            ))}
          </div>
        </div>

        {/* The big stat row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border-t border-b border-ink/10">
          <ScaleIn delay={0}>
            <StatBlock
              kicker="Cursor ARR · 2026"
              value={
                <>
                  <span className="text-ink/45 mr-1">$</span>
                  <AnimatedNumber to={2} />
                  <span className="text-ink/45 ml-2">B</span>
                </>
              }
              label="Zero to $2B in three years. Fastest scale in B2B SaaS history."
            />
          </ScaleIn>
          <ScaleIn delay={0.1}>
            <StatBlock
              kicker="Fortune 500 penetration"
              value={
                <>
                  <AnimatedNumber to={50} />
                  <span className="text-ink/45 ml-2">%+</span>
                </>
              }
              label="Every keystroke from NVIDIA, Uber, Adobe, and the rest is telemetry the data team will need to analyze."
            />
          </ScaleIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-xs font-mono uppercase tracking-[0.18em] text-ink/45 text-right"
        >
          Source. Cursor public funding disclosures and enterprise statements, 2025 to 2026
        </motion.div>
      </div>
    </section>
  );
}

function BuyerBlock({
  label,
  body,
}: {
  label: string;
  body: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 pb-8 border-b border-ink/10 last:border-b-0 last:pb-0"
    >
      <div className="sm:col-span-3">
        <div className="font-pixel font-bold text-xl md:text-2xl uppercase tracking-[0.04em] text-accent leading-none">
          {label}
        </div>
      </div>
      <div className="sm:col-span-9">
        <p className="text-base md:text-lg leading-[1.7] text-ink/80">{body}</p>
      </div>
    </motion.div>
  );
}

function StatBlock({
  kicker,
  value,
  label,
}: {
  kicker: string;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="bg-cream p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[200px] sm:min-h-[260px]">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-6 sm:mb-8">
        {kicker}
      </div>
      <div className="font-pixel font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-[0.02em] text-ink mb-4 sm:mb-6">
        {value}
      </div>
      <div className="text-sm md:text-base text-ink/65 leading-snug max-w-xs">
        {label}
      </div>
    </div>
  );
}
