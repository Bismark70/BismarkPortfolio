"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown, Code2, Palette, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";
import { EASE, fadeUp, stagger } from "@/lib/motion";
import { HERO_INTRO, ROLES, SOCIALS } from "@/lib/portfolio-data";

const BADGES = [
  { icon: Code2, label: "Full-Stack Dev", className: "-left-4 top-10 sm:-left-8", delay: "0s" },
  { icon: Palette, label: "UI/UX Design", className: "-right-4 top-1/3 sm:-right-8", delay: "1.6s" },
  { icon: Wrench, label: "IT Support", className: "-left-3 bottom-36 sm:-left-10", delay: "3.2s" },
];

export function Hero() {
  const typed = useTypewriter(ROLES);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.background = `radial-gradient(560px circle at ${e.clientX - rect.left}px ${
      e.clientY - rect.top
    }px, rgba(251,191,36,0.07), transparent 70%)`;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh items-center overflow-hidden pb-20 pt-28 lg:pt-24"
      aria-label="Introduction"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
      <div aria-hidden className="absolute -top-40 right-[-12%] size-[520px] rounded-full bg-amber-400/10 blur-[130px]" />
      <div aria-hidden className="absolute bottom-[-25%] left-[-12%] size-[440px] rounded-full bg-orange-500/10 blur-[130px]" />
      <div ref={spotlightRef} aria-hidden className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        {/* ---------- Left: copy ---------- */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display text-[10vw] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.2rem] xl:text-8xl"
          >
            <span className="block">BISMARK</span>
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              OBENG
              <span className="text-amber-400 [-webkit-text-fill-color:currentColor]">.</span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex h-8 items-center gap-3 font-mono text-base sm:text-lg"
          >
            <span className="text-amber-400" aria-hidden>
              &gt;
            </span>
            <span className="font-medium text-foreground" aria-live="polite">
              {typed}
            </span>
            <span aria-hidden className="h-5 w-[2px] animate-pulse bg-amber-400" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO_INTRO}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-7 font-bold shadow-[0_0_36px_-10px_rgba(251,191,36,0.55)] transition-all hover:bg-amber-300 hover:shadow-[0_0_44px_-8px_rgba(251,191,36,0.7)]"
            >
              <a href="#work">
                View my work <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-transparent px-7 font-bold hover:border-amber-400/50 hover:bg-white/5 hover:text-amber-400"
            >
              <a href="#contact">
                Let&apos;s talk <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-amber-400/50 hover:text-amber-400"
              >
                <social.icon className="size-5" />
              </a>
            ))}
            <span className="ml-2 hidden font-mono text-xs uppercase tracking-widest text-zinc-500 sm:inline">
              — find me online
            </span>
          </motion.div>
        </motion.div>

        {/* ---------- Right: portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          {/* Glow + offset frame */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-amber-400/25 via-transparent to-orange-500/25 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-amber-400/30"
          />

          <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl shadow-black/50">
            <Image
              src="/bismark.webp"
              alt="Black-and-white studio portrait of Bismark Obeng"
              width={880}
              height={880}
              priority
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14">
              <p className="font-display text-lg font-bold">Bismark Obeng</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.25em] text-amber-400">
                Code · Design · Support · Speaking
              </p>
            </figcaption>
          </figure>

          {/* Floating badges */}
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              aria-hidden
              className={`animate-float absolute ${badge.className} hidden items-center gap-2 rounded-xl border border-white/10 bg-card/90 px-3.5 py-2 shadow-lg shadow-black/30 backdrop-blur sm:flex`}
              style={{ animationDelay: badge.delay }}
            >
              <badge.icon className="size-4 text-amber-400" />
              <span className="text-xs font-semibold">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition-colors hover:text-amber-400 md:block"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
