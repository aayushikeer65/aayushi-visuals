import { Reveal, Heading } from "../components/Reveal";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-600/10 blur-[130px]" />
      <div className="mx-auto w-[92%] max-w-6xl">
        <Heading
          eyebrow="Services"
          title={<>What I <span className="text-gradient">Offer</span></>}
          subtitle="Thoughtful design services — from the first sketch to the final delivery."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-cyan-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more →
                </div>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-purple-600/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
