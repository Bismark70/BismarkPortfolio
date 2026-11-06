import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { ServicesMarquee, Stack } from "@/components/portfolio/marquee";
import { About } from "@/components/portfolio/about";
import { Services } from "@/components/portfolio/services";
import { Work } from "@/components/portfolio/work";
import { Process } from "@/components/portfolio/process";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { CONTACT, SITE } from "@/lib/portfolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Full-Stack Developer, UI/UX Designer & IT Specialist",
  description: SITE.tagline,
  email: `mailto:${CONTACT.email}`,
  sameAs: [CONTACT.githubUrl, CONTACT.linkedinUrl, CONTACT.telegramUrl, CONTACT.whatsappUrl],
  knowsAbout: [
    "Software Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "IT Support",
    "Microsoft Office",
    "GitHub",
    "Web Hosting",
    "Motivational Speaking",
  ],
};

export default function Home() {
  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground"
    >
      {/* Film-grain texture over everything */}
      <div aria-hidden className="bg-noise pointer-events-none fixed inset-0 z-[80] opacity-[0.05]" />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <ServicesMarquee />
        <About />
        <Services />
        <Stack />
        <Work />
        <Process />
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
