import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Heading } from "../components/Reveal";
import { projects, projectFilters } from "../data";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Heading
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gradient">Work</span></>}
          subtitle="A glimpse into recent projects — each a small leela of color and form."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "gradient-btn text-white"
                    : "glass text-muted hover:text-[var(--text)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass relative overflow-hidden rounded-3xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
                    {p.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a href="#" className="gradient-btn rounded-full px-4 py-2 text-sm font-semibold text-white">
                      Live Demo
                    </a>
                    <a href="#" className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                      Details
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-[var(--card-border)] px-3 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
