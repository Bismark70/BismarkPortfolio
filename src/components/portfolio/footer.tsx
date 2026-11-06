"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTACT, SITE, SOCIALS } from "@/lib/portfolio-data";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-amber-400/40 bg-card text-amber-400 shadow-lg shadow-black/40 transition-colors hover:bg-amber-400 hover:text-black"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mt-auto border-t border-white/5 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#top"
                className="font-display text-xl font-extrabold tracking-tight"
                aria-label="Bismark Obeng — back to top"
              >
                Bismark<span className="text-amber-400">.</span>Obeng
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {SITE.tagline}. Building, fixing and inspiring — one project at a time.
              </p>
              <div className="mt-5 flex items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-amber-400/50 hover:text-amber-400"
                  >
                    <social.icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer navigation">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-300 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Get in touch
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-zinc-300 transition-colors hover:text-amber-400"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors hover:text-amber-400"
                  >
                    {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li className="text-zinc-500">Remote-friendly · Worldwide</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 sm:flex-row">
            <p className="text-xs text-zinc-500">
              © {year} {SITE.name}. All rights reserved.
            </p>
            <p className="text-xs text-zinc-600">
              Designed &amp; built with Next.js by {SITE.shortName}
              <span className="text-amber-400">.</span>
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
