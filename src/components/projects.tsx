import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-wide text-indigo-700 dark:text-indigo-300">
          Full-stack and AI
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Selected projects
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.name}</h3>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm font-medium text-indigo-700 underline-offset-4 hover:underline dark:text-indigo-300"
                >
                  {project.url.replace("https://", "")}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.availability}</p>
              )}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-white px-2 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 dark:ring-zinc-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{project.description}</p>
              {project.highlights ? (
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
