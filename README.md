# Bismark Obeng — Portfolio Website

A fast, dark, editorial-style portfolio for **Bismark Obeng** — Full-Stack Developer, UI/UX Designer, IT Support Specialist & Motivational Speaker.

Built with **Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · shadcn/ui**.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI primitives and Lucide icons

---

## What's inside

| Section | Details |
| --- | --- |
| Hero | Typewriter roles, portrait, mouse-follow spotlight |
| Services | 6 service cards with hover glow |
| Selected Work | 6 real GitHub projects (personal + TheTechSquad) |
| Process | 4-step workflow |
| Contact | Email, WhatsApp, Telegram, LinkedIn, GitHub + validated form |
| SEO | Metadata, Open Graph image, JSON-LD Person schema |

**All site content lives in one file:** `src/lib/portfolio-data.ts` — edit your services, projects, links and text there and the whole site updates.

---

## Run it locally

> Prerequisites: install **[Node.js 20+](https://nodejs.org)** and **[Git](https://git-scm.com)** first.

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/Bismark70/portfoliowebsite.git
   cd portfoliowebsite
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:3000** in your browser.

Other commands:

```bash
npm run lint     # check code quality
npm run build    # production build
npm run start    # serve the production build
```

The site does not require environment variables for local development. Keep any local `.env` files out of source control.

## Validate before deployment

```bash
npm run lint
npm run build
```

---

## Project structure

```
├── public/                  # Images (portrait, OG image) + robots.txt
├── src/
│   ├── app/                 # Pages, layout, fonts, SEO metadata, favicon
│   ├── components/
│   │   ├── portfolio/       # Hero, About, Services, Work, Contact, …
│   │   └── ui/              # Reusable UI primitives (shadcn/ui)
│   ├── hooks/               # Typewriter effect, toast hook
│   └── lib/
│       └── portfolio-data.ts  #  EDIT THIS — all site content
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Quick customisation cheat-sheet

| I want to change… | Edit this in `src/lib/portfolio-data.ts` |
| --- | --- |
| My email / WhatsApp / Telegram / LinkedIn / GitHub | the `CONTACT` object at the top |
| The rotating roles in the hero | `ROLES` |
| About-me story, traits, stats | `ABOUT` |
| Services & their descriptions | `SERVICES` |
| Featured projects | `PROJECTS` |
| Steps in my workflow | `PROCESS` |

Made with ⚡ by Bismark Obeng
