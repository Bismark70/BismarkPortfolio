"use client";

import type { CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { MARQUEE_ITEMS, STACK_ROWS } from "@/lib/portfolio-data";

/**
 * Reusable seamless marquee row. Content is doubled and translated -50%.
 */
export function MarqueeRow({
  items,
  reverse = false,
  duration = "42s",
  className,
  itemClassName,
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee-hover-pause flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={cn("shrink-0", itemClassName)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Bold amber strip between hero and about — slightly rotated for energy.
 */
export function ServicesMarquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-hidden className="relative overflow-hidden py-8">
      <div className="-rotate-[1.1deg] scale-[1.03]">
        <div className="border-y border-amber-300/50 bg-amber-400 py-3.5 text-black shadow-[0_0_80px_-20px_rgba(251,191,36,0.55)]">
          <div
            className="flex w-max animate-marquee items-center"
            style={{ "--marquee-duration": "30s" } as CSSProperties}
          >
            {doubled.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-4 pr-4 font-display text-lg font-bold uppercase tracking-wider sm:text-xl"
              >
                <Sparkles className="size-4 shrink-0" />
                <span className={i % 2 === 1 ? "text-stroke-dark" : undefined}>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Tech stack — two calm rows of pills scrolling in opposite directions.
 */
export function Stack() {
  return (
    <section aria-label="Technologies and tools" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-10 text-center font-mono text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Technologies &amp; tools I work with
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MarqueeRow
          items={STACK_ROWS.dev}
          duration="38s"
          itemClassName="mx-2.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-amber-400/40 hover:text-amber-400"
        />
        <MarqueeRow
          items={STACK_ROWS.tools}
          reverse
          duration="46s"
          itemClassName="mx-2.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-amber-400/40 hover:text-amber-400"
        />
      </div>
    </section>
  );
}
