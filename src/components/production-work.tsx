import { productionWork } from "@/data/content";

export function ProductionWork() {
  return (
    <section id="work" className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-wide text-indigo-700 dark:text-indigo-300">
          International clients
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Production platforms
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Live products shipped at Brain Station 23. Linked to the public sites only.
        </p>
        <div className="mt-10 space-y-6">
          {productionWork.map((work) => (
            <article
              key={work.name}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{work.name}</h3>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-700 underline-offset-4 hover:underline dark:text-indigo-300"
                >
                  {work.url.replace("https://", "")}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {work.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-950 dark:bg-indigo-950 dark:text-indigo-100"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">{work.description}</p>
              <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
                {work.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
