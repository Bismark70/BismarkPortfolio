"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/motion";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      <motion.p
        variants={fadeUp}
        className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-amber-400"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
