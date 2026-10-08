import { skills } from "@/data/content";

const tierStyles: Record<string, string> = {
  Expert: "bg-indigo-100 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-100",
  Strong: "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  Growing: "bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-100",
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-200 bg-white px-4 py-20 sm:px-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Skills
        </h2>
        <div className="mt-10 space-y-8">
          {skills.map((skillTier) => (
            <section key={skillTier.tier} aria-labelledby={`skills-${skillTier.tier}`}>
              <h3 id={`skills-${skillTier.tier}`} className="text-xl font-semibold text-zinc-950 dark:text-white">
                {skillTier.tier}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{skillTier.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skillTier.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full px-3 py-1.5 text-sm ${tierStyles[skillTier.tier] ?? tierStyles.Strong}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
