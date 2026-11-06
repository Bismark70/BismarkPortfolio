"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { fadeUp, stagger } from "@/lib/motion";
import { SERVICES, SERVICE_ICON_MAP } from "@/lib/portfolio-data";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.015] py-20 sm:py-28"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          label="02 · What I do"
          title={
            <>
              One partner. <span className="text-amber-400">A full toolbox.</span>
            </>
          }
          description="From your next big launch to the laptop that won't start — every service below comes with the same obsession for quality."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICON_MAP[service.icon];
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-[0_0_48px_-14px_rgba(251,191,36,0.35)]"
              >
                {/* Corner glow on hover */}
                <div
                  aria-hidden
                  className="absolute -right-14 -top-14 size-36 rounded-full bg-amber-400/0 blur-3xl transition-colors duration-500 group-hover:bg-amber-400/15"
                />

                <span
                  aria-hidden
                  className="absolute right-6 top-5 font-display text-4xl font-extrabold text-white/[0.06] transition-colors duration-300 group-hover:text-amber-400/20"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
