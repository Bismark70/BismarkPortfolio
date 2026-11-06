import {
  Code2,
  FileSpreadsheet,
  Mic,
  Palette,
  Server,
  Wrench,
  Fingerprint,
  Stethoscope,
  HeartHandshake,
  Users,
  CloudSun,
  Gamepad2,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Bismark Obeng",
  shortName: "Bismark",
  tagline:
    "Full-Stack Developer · UI/UX Designer · IT Specialist · Motivational Speaker",
};

/* ----------------------------- Contact / socials ------------------------- */

export const CONTACT = {
  // Real email
  email: "holy.faith606@gmail.com",

  // Real WhatsApp — Ghana (+233)
  whatsappUrl: "https://wa.me/233505612084",
  whatsappDisplay: "+233 50 561 2084",

  // Real Telegram username
  telegramUrl: "https://t.me/Holy_Faith1",
  telegramDisplay: "@Holy_Faith1",

  // Real LinkedIn profile
  linkedinUrl: "https://www.linkedin.com/in/bismarkobeng",
  linkedinDisplay: "linkedin.com/in/bismarkobeng",

  // Real GitHub profile (personal account; team projects live under TheTechSquad org)
  githubUrl: "https://github.com/Bismark70",
  githubDisplay: "github.com/Bismark70",
};

export const SOCIALS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: CONTACT.githubUrl, icon: Github },
  { label: "LinkedIn", href: CONTACT.linkedinUrl, icon: Linkedin },
  { label: "Telegram", href: CONTACT.telegramUrl, icon: Send },
  { label: "WhatsApp", href: CONTACT.whatsappUrl, icon: MessageCircle },
];

/* ----------------------------- Hero -------------------------------------- */

export const ROLES = [
  "Full-Stack Developer",
  "UI/UX Designer",
  "IT Support Specialist",
  "Hosting & GitHub Expert",
  "Motivational Speaker",
];

export const HERO_INTRO =
  "I design and build fast, beautiful software, keep technology running smoothly, and inspire people to grow — one partner for your next web app, your systems, and your mindset.";

/* ----------------------------- Marquee strip ------------------------------ */

export const MARQUEE_ITEMS = [
  "Full-Stack Development",
  "UI/UX Design",
  "IT Support",
  "Microsoft Office Setup",
  "Hosting Management",
  "Motivational Speaking",
];

/* ----------------------------- About -------------------------------------- */

export const ABOUT = {
  paragraphs: [
    "I'm Bismark Obeng — a multi-disciplinary technology professional who refuses to stay in one lane. I write clean, reliable code for the web, design interfaces that feel effortless, and keep the everyday systems people depend on running without a hitch.",
    "From installing and activating Microsoft Office on a client's laptop, to managing GitHub repositories and hosting for a growing product, to standing on stage and lighting a fire in a young audience — I bring the same energy and standard of excellence to everything I touch.",
    "If it involves technology, design, or human potential, we should probably talk.",
  ],
  chips: ["Problem Solver", "Design-Minded", "People-First", "Always Levelling Up"],
  checklist: [
    "One partner across code, design and IT — no hand-offs, no game of telephone",
    "Fast, responsive builds that look stunning on every screen",
    "Straight answers and honest timelines, every time",
    "Support that continues long after launch day",
  ],
  stats: [
    { value: "6+", label: "Service areas" },
    { value: "1", label: "Partner for everything" },
    { value: "100%", label: "Commitment, always" },
  ],
};

/* ----------------------------- Services ----------------------------------- */

export const SERVICE_ICON_MAP = {
  code: Code2,
  palette: Palette,
  wrench: Wrench,
  sheet: FileSpreadsheet,
  server: Server,
  mic: Mic,
} as const;

export type ServiceIconKey = keyof typeof SERVICE_ICON_MAP;

export const SERVICES: {
  icon: ServiceIconKey;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: "code",
    title: "Full-Stack Development",
    description:
      "From pixel-perfect frontends to rock-solid backends: web apps, REST APIs, databases and everything in between — built to be fast, secure and scalable.",
    tags: ["Frontend", "Backend", "APIs", "Databases"],
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Interfaces that feel effortless. Research, wireframes, prototypes and polished visual design that turns first-time visitors into loyal users.",
    tags: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    icon: "wrench",
    title: "IT Support & Troubleshooting",
    description:
      "Quick, honest help when technology misbehaves: diagnostics, repairs, software setup, networking and preventive maintenance for homes and offices.",
    tags: ["Diagnostics", "Repairs", "Networking"],
  },
  {
    icon: "sheet",
    title: "Microsoft Office Install & Activation",
    description:
      "Professional installation and genuine activation of Microsoft Office — Word, Excel, PowerPoint and more — plus setup so you are productive from day one.",
    tags: ["Installation", "Activation", "Training"],
  },
  {
    icon: "server",
    title: "GitHub & Hosting Management",
    description:
      "Your code, safely versioned and proudly live: repositories, collaboration workflows, deployments, domains, cPanel and cloud hosting.",
    tags: ["Git", "Deployments", "Domains"],
  },
  {
    icon: "mic",
    title: "Motivational Speaking",
    description:
      "Talks that ignite action. Real stories from the tech world, practical mindset tools, and energy your audience will carry home.",
    tags: ["Keynotes", "Students & Youth", "Teams"],
  },
];

/* ----------------------------- Tech stack ---------------------------------- */

export const STACK_ROWS = {
  dev: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST APIs",
    "Responsive Design",
  ],
  tools: [
    "Git & GitHub",
    "Figma",
    "VS Code",
    "cPanel",
    "Vercel",
    "Netlify",
    "Windows OS",
    "Microsoft 365",
    "Domain & DNS",
    "Web Hosting",
  ],
};

/* ----------------------------- Projects ------------------------------------ */

const PROJECT_ICON_MAP = {
  fingerprint: Fingerprint,
  stethoscope: Stethoscope,
  handshake: HeartHandshake,
  users: Users,
  cloud: CloudSun,
  gamepad: Gamepad2,
} as const;

export type ProjectIconKey = keyof typeof PROJECT_ICON_MAP;

// Real projects — sourced from your GitHub repos (personal + TheTechSquad).
export const PROJECTS: {
  icon: ProjectIconKey;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  link?: string;
}[] = [
  {
    icon: "fingerprint",
    title: "Biometric Attendance System",
    description:
      "Full-stack attendance platform for microfinance companies — biometric scanner integration, JWT auth with role-based access, offline sync and a React admin dashboard across multiple branches.",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    link: "https://github.com/TheTechSquad/biometric-attendance-system",
  },
  {
    icon: "stethoscope",
    title: "Medical Diagnosis Expert System",
    description:
      "Rule-based AI in Python that diagnoses common conditions from symptoms using a forward-chaining inference engine, with ranked results, confidence scores and a Tkinter GUI.",
    tags: ["Python", "Expert System", "Tkinter"],
    gradient: "from-red-500/15 via-transparent to-transparent",
    link: "https://github.com/TheTechSquad/MedicalDiagnosisSystem",
  },
  {
    icon: "handshake",
    title: "Meliorism Partners Foundation",
    description:
      "Full-stack website for a community foundation: Paystack donations, volunteer registration, blog and an authenticated admin dashboard — deployed on Vercel with Docker infrastructure.",
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    gradient: "from-orange-500/25 via-amber-500/10 to-transparent",
    link: "https://github.com/TheTechSquad/meliorism-website",
  },
  {
    icon: "users",
    title: "Staff Management System",
    description:
      "Desktop app in C# / .NET 9 managing full-time and part-time staff with clean OOP design — inheritance-driven payroll calculation and combined annual payroll reporting.",
    tags: ["C#", ".NET 9", "WinForms"],
    gradient: "from-yellow-500/20 via-transparent to-transparent",
    link: "https://github.com/Bismark70/StaffManagementSystem",
  },
  {
    icon: "cloud",
    title: "Weather Application",
    description:
      "JavaFX desktop weather app — search by location, current conditions, forecasts, unit conversions and in-memory search history, prepared for live weather API integration.",
    tags: ["Java", "JavaFX", "Desktop"],
    gradient: "from-stone-500/20 via-transparent to-transparent",
    link: "https://github.com/Bismark70/WeatherApplication",
  },
  {
    icon: "gamepad",
    title: "Quiz Game",
    description:
      "Lightweight Java Swing quiz game with multiple-choice questions, instant right/wrong feedback, a progress bar, final scoring and a play-again flow — zero external dependencies.",
    tags: ["Java", "Swing", "Game Logic"],
    gradient: "from-amber-500/15 via-orange-500/5 to-transparent",
    link: "https://github.com/Bismark70/QuizGame",
  },
];

export function projectIcon(key: ProjectIconKey) {
  return PROJECT_ICON_MAP[key];
}

/* ----------------------------- Process ------------------------------------- */

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We talk about your goals, your users and your constraints. I listen first, then map the smartest route to done.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Ideas become wireframes, then polished, on-brand designs you approve before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Clean, tested code with regular progress updates. You watch your idea take shape, step by step.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Deployment, hosting, and a partner who stays in your corner long after go-live.",
  },
];
