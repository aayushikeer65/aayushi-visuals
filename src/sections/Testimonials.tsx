import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../components/Reveal";
import { testimonials } from "../data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="mx-auto w-[92%] max-w-3xl">
        <Heading
          eyebrow="Testimonials"
          title={<>Kind <span className="text-gradient">Words</span></>}
        />
        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 text-center"
            >
              <span className="font-display text-6xl text-purple-400/40">"</span>
              <p className="-mt-6 font-display text-xl italic leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-400" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
