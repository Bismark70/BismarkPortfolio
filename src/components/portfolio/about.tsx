"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { fadeUp, scaleIn, stagger } from "@/lib/motion";
import { ABOUT } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28" aria-label="About Bismark Obeng">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left: story */}
        <div>
          <SectionHeading
            label="01 · Who I am"
            title={
              <>
                Versatile by design,
                <br />
                <span className="text-amber-400">driven by purpose.</span>
              </>
            }
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-7 space-y-5"
          >
            {ABOUT.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 pt-2">
              {ABOUT.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-amber-400/40 hover:text-amber-400"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right: value card + stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={scaleIn}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-48 rounded-full bg-amber-400/10 blur-3xl"
            />
            <h3 className="font-display text-xl font-bold">What working with me feels like</h3>
            <ul className="mt-6 space-y-4">
              {ABOUT.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {ABOUT.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center sm:p-6"
              >
                <p className="font-display text-3xl font-extrabold text-amber-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
