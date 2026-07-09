import { Reveal, Heading } from "../components/Reveal";
import { skillCategories } from "../data";
import { useOnScreen } from "../components/useInView";

function Bar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, seen } = useOnScreen<HTMLDivElement>(0.5);
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-muted">{name}</span>
        <span className="font-semibold text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-[width] duration-1000 ease-out"
          style={{ width: seen ? `${level}%` : 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[140px]" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <Heading
          eyebrow="Skills"
          title={<>My <span className="text-gradient">Craft & Tools</span></>}
          subtitle="An interactive look at what I bring to every project."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/40">
                <div className="mb-6 flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.accent} text-2xl`}>
                    {cat.icon}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((s, j) => (
                    <Bar key={s.name} name={s.name} level={s.level} delay={j * 150} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
