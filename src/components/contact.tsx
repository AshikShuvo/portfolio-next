import { personalInfo } from "@/data/content";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Based in {personalInfo.location}. Reach out by email, GitHub, or LinkedIn.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-400"
            >
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">Email</span>
              <span className="mt-1 block font-medium text-zinc-950 dark:text-white">{personalInfo.email}</span>
            </a>
          </li>
          <li>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-400"
            >
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">GitHub</span>
              <span className="mt-1 block font-medium text-zinc-950 dark:text-white">github.com/AshikShuvo</span>
            </a>
          </li>
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-400"
            >
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</span>
              <span className="mt-1 block font-medium text-zinc-950 dark:text-white">ashik-ahmmed-shuvo</span>
            </a>
          </li>
          <li>
            <a
              href={site.resumePath}
              download
              className="block rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-400"
            >
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">Resume</span>
              <span className="mt-1 block font-medium text-zinc-950 dark:text-white">Download PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
