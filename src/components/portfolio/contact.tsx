"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { fadeUp, scaleIn, stagger } from "@/lib/motion";
import { CONTACT } from "@/lib/portfolio-data";

const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappUrl,
    icon: MessageCircle,
  },
  {
    label: "Telegram",
    value: CONTACT.telegramDisplay,
    href: CONTACT.telegramUrl,
    icon: Send,
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinDisplay,
    href: CONTACT.linkedinUrl,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: CONTACT.githubDisplay,
    href: CONTACT.githubUrl,
    icon: Github,
  },
];

export function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Almost there",
        description: "Please fill in your name, email and message.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast({
        title: "Check your email",
        description: "That email address doesn't look quite right.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Hi Bismark,\n\n${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app…",
      description: "Your message is pre-filled and ready to send.",
    });
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ---------- CTA banner ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-card to-card p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-24 size-64 rounded-full bg-amber-400/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-16 size-56 rounded-full bg-orange-500/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
                05 · Let&apos;s connect
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Have a project, a stubborn PC, or a room that needs inspiring?
              </h2>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Whatever brings you here — let&apos;s build something exceptional together.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-13 shrink-0 rounded-full bg-amber-400 px-8 py-6 font-bold text-black hover:bg-amber-300 hover:shadow-[0_0_44px_-8px_rgba(251,191,36,0.7)]"
            >
              <a href="#contact-form">
                Start a conversation <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* ---------- Channels + form ---------- */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Channels */}
          <div>
            <SectionHeading
              label="Reach me directly"
              title={
                <>
                  Pick a channel,
                  <br />
                  <span className="text-amber-400">I reply fast.</span>
                </>
              }
              description="Whether it's a quick question or a full project brief — choose whatever feels natural."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-9 space-y-3.5"
            >
              {CHANNELS.map((channel) => (
                <motion.li key={channel.label} variants={fadeUp}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-white/[0.04]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                      <channel.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-zinc-100 sm:text-base">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Form */}
          <motion.div
            id="contact-form"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">Send a message</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Tell me a little about what you need.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your name</Label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kwame Mensah"
                    autoComplete="name"
                    className="border-white/10 bg-white/[0.03] focus-visible:ring-amber-400/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Your email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="border-white/10 bg-white/[0.03] focus-visible:ring-amber-400/60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I need a website for my business that…"
                  rows={6}
                  className="resize-none border-white/10 bg-white/[0.03] focus-visible:ring-amber-400/60"
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full rounded-full font-bold hover:bg-amber-300"
              >
                Send message <Send className="size-4" />
              </Button>

              <p className="text-center text-xs leading-relaxed text-zinc-500">
                This opens your email app with everything pre-filled — nothing is stored.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
