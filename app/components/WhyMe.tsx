"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function WhyMe() {
  return (
    <section
      id="rep"
      className="relative px-5 sm:px-6 md:px-10 py-20 sm:py-28 md:py-44 border-t border-ink/10 bg-cream-200/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="07"
          kicker="The rep"
          title="Why I'm The Right Rep"
        />

        <div>
          {/* Essay */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 max-w-3xl"
          >
            <Block num="01" title="Operations Background">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                Six years of customer-facing operations. Night shift
                warehouse ops at 3B Logistics. Managing a Chipotle through
                800+ daily transactions. Leading Dunkin morning rushes.
                None of it was sales. All of it was volume, pressure, and
                showing up the next day.
              </p>
            </Block>

            <Block num="02" title="Builder Experience">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                I've shipped two SaaS products solo. Two years of being
                the only engineer when the work needed three. I know
                what it's like to need a data answer fast and not have
                an analyst to ask, which is exactly the seat Hex is
                building for.
              </p>
            </Block>

            <Block num="03" title="Active Outbound">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                I started running outbound this week. Halal restaurants
                and masjids in South Jersey and Philly. The same kind
                of calls I'd be making for Hex.
              </p>
            </Block>

            <Block num="04" title="Why Hex">
              <p className="text-lg md:text-xl leading-[1.7] text-ink/85">
                Hex is the SDR role I want. On March 3 you shipped a
                Claude Connector. I research, draft, and structure my
                work inside Claude every day, including this artifact,
                the Cursor research, the call, the email. I'm the user
                persona you're now shipping to. I want to earn this
                role, earn the AE seat, and build a career here. I
                bring builder instincts, conviction, and consistency.
                I'm coachable, I take feedback, and I show up.
              </p>
            </Block>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function Block({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={`thread-${num}`}
      className="border-b border-ink/10 pb-10 last:border-b-0 last:pb-0"
    >
      <div className="flex items-baseline gap-5 mb-5">
        <span className="font-pixel font-bold text-3xl md:text-4xl text-accent tabular leading-none">
          {num}
        </span>
        <h3 className="font-pixel font-bold text-2xl md:text-3xl text-ink tracking-[0.02em] uppercase leading-none">
          {title}
        </h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
