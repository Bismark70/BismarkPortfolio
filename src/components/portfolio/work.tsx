"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { fadeUp, stagger } from "@/lib/motion";
import { CONTACT, PROJECTS, projectIcon } from "@/lib/portfolio-data";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28" aria-label="Selected work">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="03 · Selected work"
            title={
              <>
                Real systems, shipped.
                <br />
                <span className="text-amber-400">Web, desktop &amp; AI.</span>
              </>
            }
            description="From a biometric attendance platform to an expert-system diagnosis engine — these are projects I've built with my teams and on my own. Clones, stars and feedback welcome."
          />
          <Button
            asChild
            variant="outline"
            className="hidden shrink-0 rounded-full border-white/15 bg-transparent font-bold hover:border-amber-400/50 hover:text-amber-400 md:inline-flex"
          >
            <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer">
              Full profile <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {PROJECTS.map((project) => {
            const Icon = projectIcon(project.icon);
            return (
              <motion.a
                key={project.title}
                variants={fadeUp}
                href={project.link ?? CONTACT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — view on GitHub`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-[0_0_48px_-14px_rgba(251,191,36,0.3)]"
              >
                {/* Visual header */}
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} bg-grid`}
                >
                  <span
                    aria-hidden
                    className="absolute bottom-3 right-4 font-display text-5xl font-extrabold text-white/[0.05]"
                  >
                    GitHub
                  </span>
                  <div className="flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-amber-400 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-10" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold transition-colors group-hover:text-amber-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 transition-colors group-hover:text-amber-400">
                    View on GitHub
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/15 bg-transparent font-bold hover:border-amber-400/50 hover:text-amber-400"
          >
            <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer">
              See more on GitHub <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
