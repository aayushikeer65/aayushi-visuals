import { Reveal, Heading } from "../components/Reveal";
import { timeline } from "../data";

export default function Journey() {
  return (
    <section id="journey" className="relative py-24">
      <div className="mx-auto w-[92%] max-w-4xl">
        <Heading
          eyebrow="Journey"
          title={<>Experience & <span className="text-gradient">Education</span></>}
          subtitle="The path that shaped my craft."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-amber-400 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className={`relative flex flex-col md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <span className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-purple-500 to-cyan-400 md:left-1/2" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.type === "Education" ? "bg-amber-500/15 text-amber-300" : "bg-purple-500/15 text-purple-300"}`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-muted">{item.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm font-medium text-cyan-300">{item.place}</p>
                      <p className="mt-2 text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
