import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Experience
        </h2>
        <ol className="mt-10 space-y-10 border-l border-zinc-300 pl-6 dark:border-zinc-700">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-700 bg-zinc-50 dark:border-indigo-300 dark:bg-zinc-950"
              />
              <article>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{job.position}</h3>
                <p className="mt-1 text-indigo-700 dark:text-indigo-300">{job.company}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {job.location} · {job.period}
                </p>
                <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
