import { personalInfo } from "@/data/content";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const site = {
  name: personalInfo.name,
  title: `${personalInfo.name} | Senior Software Engineer`,
  description:
    "Senior Software Engineer with 6 years of experience building production web platforms for international clients. Full-stack TypeScript (Vue/Nuxt, React/Next.js, NestJS) with LLM integration.",
  resumePath: "/ashik-shuvo-resume.pdf",
};
