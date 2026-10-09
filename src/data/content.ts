export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
  story: string;
}

export interface ProductionWork {
  name: string;
  url: string;
  tech: string[];
  description: string;
  highlights: string[];
}

export interface Impact {
  metric: string;
  description: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  url?: string;
  tech: string[];
  description: string;
  highlights?: string[];
  availability?: string;
}

export interface SkillTier {
  tier: string;
  description: string;
  items: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  period: string;
  achievements: string[];
  languages: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Ashik Ahmmed Shuvo",
  title: "Senior Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "ashikshuvo1996@gmail.com",
  linkedin: "https://linkedin.com/in/ashik-ahmmed-shuvo-280646140",
  github: "https://github.com/AshikShuvo",
  headline: "Senior Software Engineer | Full-Stack TypeScript (Vue/Nuxt, React/Next.js, NestJS) | LLM Integration",
  story: "A full-stack TypeScript engineer who architects production platforms end to end, from SSR front ends to NestJS APIs and job queues, and builds AI-natively.",
};

export const portrait = {
  src: "/ashik-shuvo.webp",
  alt: "Portrait of Ashik Ahmmed Shuvo, a software engineer, in a dark suit",
  caption: personalInfo.name,
  width: 256,
  height: 256,
} as const;

export const productionWork: ProductionWork[] = [
  {
    name: "Peppes Pizza Customer Portal",
    url: "https://live.peppes.no",
    tech: ["Vue 3", "Nuxt 3", "TypeScript", "PrimeVue", "Tailwind CSS"],
    description:
      "Architected the SSR/SSG ordering platform for Norway's largest pizza chain (80+ restaurants, 4M+ pizzas a year): menu, product customization, deals and multi-step checkout with validation.",
    highlights: [
      "Built the identity layer with Vipps, SMS OTP and Microsoft MSAL for personal and business accounts, including role-based access and department-based requisition ordering.",
      "Integrated payments (Vipps, card, invoice), Google Maps geolocation and restaurant selection, Norwegian/English i18n, and Firebase Analytics + Sentry with GDPR-compliant consent.",
    ],
  },
  {
    name: "ABRA – IoT Device Management Platform",
    url: "https://abralife.no",
    tech: ["Vue 3", "Vuex", "AWS Amplify", "SCSS"],
    description:
      "Designed a scalable Vue 3 front-end architecture with shared layouts and composables, reducing template duplication.",
    highlights: [
      "Delivered real-time administrator notifications via AWS Amplify, plus a background-sync data layer that keeps device status in the Vuex store current without manual refresh.",
      "Built a responsive web and mobile UI for monitoring devices.",
    ],
  },
];

export const impacts: Impact[] = [
  {
    metric: "about 40%",
    description: "Faster page loads through SSR/SSG, lazy loading, image optimization, caching and Gzip/Brotli compression",
  },
  {
    metric: "about 40%",
    description: "Faster builds from a reusable component and composable library adopted across projects",
  },
  {
    metric: "25%",
    description: "Fewer user-reported UI issues after the TypeScript migration",
  },
  {
    metric: "30%",
    description: "Fewer bug reports from code reviews and mentoring",
  },
];

export const experience: Experience[] = [
  {
    company: "Brain Station 23",
    location: "Dhaka, Bangladesh",
    position: "Senior Software Engineer",
    period: "Dec 2021 – Present",
    highlights: [
      "Lead front-end architecture for enterprise web applications for international clients (Norway's largest pizza chain, an IoT device-management platform) using Vue 3/Nuxt 3, React and TypeScript, with AWS Amplify for real-time features. Cut page load times by 40% through SSR/SSG, lazy loading, image optimization, caching and Gzip/Brotli compression.",
      "Designed a reusable component and composable library (Vue composables, React hooks) adopted across multiple projects, reducing build time for subsequent projects by about 40%.",
      "Owned authentication and payment integration for a high-traffic e-commerce portal: Vipps login, SMS OTP and Microsoft MSAL for personal and business accounts with role-based access, plus Vipps, card and invoice payments.",
      "Drove TypeScript adoption across front-end codebases, contributing to a 25% reduction in user-reported interface issues.",
      "Raised engineering quality through code reviews and mentoring engineers, contributing to a 30% reduction in bug reports.",
    ],
  },
  {
    company: "Neural Semiconductor Ltd",
    location: "Dhaka, Bangladesh",
    position: "Associate Software Engineer",
    period: "Sep 2020 – Nov 2021",
    highlights: [
      "Developed enterprise applications, including an HRM system and a semiconductor Trade-Off Calculator, with React/Redux and Vue/Vuex, streamlining internal workflows and improving operational efficiency by about 15%.",
      "Built data-visualization tools showing microcircuit performance across scenarios, combining complex back-end queries with client-side caching to speed up data retrieval and display by about 20%.",
      "Implemented authenticated public/private routing and role-based authorization in the HRM front end using React Router.",
      "Architected modular UI components for the admin panel and complex layouts, cutting feature development time by about 25%.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "AI Content Generator",
    url: "https://github.com/AshikShuvo/ai-content-generator",
    tech: [
      "NestJS",
      "React 19",
      "Gemini API",
      "Redis/Bull",
      "MongoDB/Prisma",
      "Docker",
      "GitHub Actions",
    ],
    description:
      "A SaaS that generates blog outlines, product descriptions and captions through a delayed job queue, with live job status, prompt templates, model fallback and JWT auth.",
  },
  {
    name: "Spice-me – Multi-Restaurant Ordering Platform",
    availability: "Private repo, available on request",
    tech: ["NestJS", "Next.js 16", "PostgreSQL/Prisma", "Auth.js", "Playwright", "Render"],
    description:
      "Restaurant platform with public menu (ISR), cart and checkout, order history, admin order management, kitchen display system, table reservations, VAT/currency settings and a sales-insights dashboard; 27 Playwright E2E specs plus Jest/Vitest unit tests.",
    highlights: [
      "Built with an AI-native workflow: custom Cursor sub-agents, always-on coding-standard rules and a living feature-context protocol.",
    ],
  },
  {
    name: "Calorie Tracker API with AI Food Recognition",
    url: "https://github.com/AshikShuvo/cal-track-be",
    tech: ["NestJS", "OpenAI Vision", "PostgreSQL/Prisma", "Passport", "Jest"],
    description:
      "REST API that estimates nutrition from meal photos with an OpenAI vision model, with Google/Facebook OAuth, hierarchical RBAC, daily/monthly/yearly reports and about 97 unit tests.",
  },
  {
    name: "Admission Agency Management System",
    url: "https://github.com/AshikShuvo/admission_agency",
    tech: ["Turborepo", "NestJS", "Next.js", "PostgreSQL/Prisma", "Zod", "Vitest"],
    description:
      "Modular-monolith ERP for a study-abroad agency built spec-first (business flows, 12 modules, epics, stories and tasks) with an agent map that routes work to front-end, back-end and QA agents; role-based ACL enforced end to end.",
  },
];

export const skills: SkillTier[] = [
  {
    tier: "Expert",
    description: "Production-proven at scale in client work",
    items: [
      "TypeScript",
      "JavaScript",
      "Vue 3 (Composition API)",
      "Nuxt 3",
      "Pinia",
      "Vuex",
      "PrimeVue",
      "React",
      "Tailwind CSS",
      "SCSS",
      "i18n (next-intl, Nuxt i18n)",
      "SSR/SSG/ISR",
      "AWS Amplify",
      "Vipps",
      "Microsoft MSAL",
      "SMS OTP",
      "RBAC/ACL design",
    ],
  },
  {
    tier: "Strong",
    description: "Demonstrated in recent full-stack and personal projects",
    items: [
      "React 19",
      "Next.js (App Router)",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "React Hook Form + Zod",
      "shadcn/ui",
      "Radix",
      "NestJS",
      "Node.js/Express",
      "REST",
      "OpenAPI/Swagger",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis/Bull queues",
      "JWT access/refresh tokens",
      "OAuth 2.0 (Google, Facebook, GitHub) with Passport",
      "Auth.js/NextAuth",
      "Jest",
      "Supertest",
      "Vitest",
      "React Testing Library",
      "Playwright (page-object model)",
      "Docker",
      "Docker Compose",
      "GitHub Actions CI/CD",
      "Vercel",
      "Render",
      "Railway",
      "Turborepo",
      "pnpm/Bun workspaces",
      "Sentry",
      "Firebase Analytics",
      "Cloudinary",
      "Git",
    ],
  },
  {
    tier: "Growing",
    description: "Early-stage LLM integration and AI-native development",
    items: [
      "OpenAI API (vision)",
      "Gemini API",
      "Prompt templating",
      "Async LLM job pipelines",
      "Model fallback strategies",
      "AI-assisted development with Cursor (custom agents, rules, spec-driven context)",
    ],
  },
];

export const education: Education = {
  institution: "East West University",
  location: "Dhaka, Bangladesh",
  degree: "B.Sc. in Computer Science and Engineering",
  gpa: "CGPA 3.43/4.00",
  period: "Jan 2016 – Apr 2020",
  achievements: [
    "Undergraduate thesis: optimized K-means clustering with Particle Swarm Optimization (PSO) to improve centroid selection and clustering performance; supervised by Dr. Md. Mozammel Huq Azad Khan.",
    "Dean's List, East West University (2018).",
  ],
  languages: ["Bengali (native)", "English (professional)"],
};
