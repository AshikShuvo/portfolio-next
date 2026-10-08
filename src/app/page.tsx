import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ImpactMetrics } from "@/components/impact-metrics";
import { ProductionWork } from "@/components/production-work";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <main id="main">
        <Hero />
        <ProductionWork />
        <ImpactMetrics />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 px-4 py-8 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
          <p>© 2026 Ashik Ahmmed Shuvo</p>
          <p>Senior Software Engineer, Dhaka</p>
        </div>
      </footer>
    </div>
  );
}
