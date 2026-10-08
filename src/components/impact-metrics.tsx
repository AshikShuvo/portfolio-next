import { impacts } from "@/data/content";

export function ImpactMetrics() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 id="impact-heading" className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          Impact
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div key={impact.description} className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <dt className="text-3xl font-semibold text-indigo-700 dark:text-indigo-300">{impact.metric}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{impact.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
