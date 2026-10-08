import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Education
        </h2>
        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{education.degree}</h3>
          <p className="mt-1 text-indigo-700 dark:text-indigo-300">{education.institution}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {education.location} · {education.period} · {education.gpa}
          </p>
          <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
            {education.achievements.map((achievement) => (
              <li key={achievement} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            Languages: {education.languages.join(", ")}
          </p>
        </article>
      </div>
    </section>
  );
}
