import { Reveal, Heading } from "../components/Reveal";
import { stats } from "../data";
import { useCountUp, useOnScreen } from "../components/useInView";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, seen } = useOnScreen<HTMLDivElement>(0.4);
  const n = useCountUp(value, seen);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <p className="font-display text-4xl font-bold text-gradient">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Heading eyebrow="About" title={<>A little <span className="text-gradient">about me</span></>} />

        <div className="grid items-center gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <p className="font-display text-xl italic leading-relaxed text-amber-200">
                "जैसे मोरपंख में हर रंग अपनी कहानी कहता है, वैसे ही हर डिज़ाइन में मेरी आत्मा बसती है।"
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎓</span>
                  <span><b>BFA</b> — Design & Visual Communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💼</span>
                  <span><b>5+ years</b> across branding & illustration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span>Based in <b>Chittorgarh</b>, working worldwide</span>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted">
              I'm <span className="font-semibold text-[var(--text)]">Aayushi Keer</span>, a graphic designer who finds inspiration in the timeless aesthetics of <span className="text-gradient font-semibold">Lord Krishna</span> — the divine play of color, rhythm and emotion.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              My work blends traditional Indian motifs with modern visual language to create designs that feel both sacred and contemporary. From brand identities to social campaigns, illustrations to print collateral — I create visuals that resonate.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
