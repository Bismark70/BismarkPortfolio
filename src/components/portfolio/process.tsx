"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { fadeUp, stagger } from "@/lib/motion";
import { PROCESS } from "@/lib/portfolio-data";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-20 sm:py-28"
      aria-label="Working process"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          label="04 · How it works"
          title={
            <>
              From idea to impact,
              <br />
              <span className="text-amber-400">in four honest steps.</span>
            </>
          }
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {PROCESS.map((item, index) => (
            <motion.li key={item.step} variants={fadeUp} className="relative">
              {/* Connector line (desktop) */}
              {index < PROCESS.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[calc(100%-8px)] top-7 hidden h-px w-8 border-t border-dashed border-white/15 lg:block"
                />
              ) : null}

              <p className="font-display text-5xl font-extrabold text-stroke-amber">{item.step}</p>
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
