import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../data";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0F172A]"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex h-24 w-24 items-center justify-center"
          >
            <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-purple-500 border-r-cyan-400" />
            <span className="font-display text-3xl text-gradient">A</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm tracking-[0.35em] text-slate-400"
          >
            AAYUSHI VISUALS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setW(scrolled);
    };
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[9998] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-amber-400 transition-[width] duration-150"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="gradient-btn fixed bottom-6 right-6 z-[9997] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Navbar({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9995] transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
        style={{ width: "min(94%, 72rem)" }}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 font-display text-lg text-white">
            A
          </span>
          <span className="font-display text-lg font-semibold">
            Aayushi <span className="text-gradient">Visuals</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="relative text-sm text-muted transition-colors hover:text-[var(--text)] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] text-base transition-transform hover:scale-110"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a
            href="#contact"
            className="gradient-btn hidden rounded-full px-5 py-2 text-sm font-semibold text-white sm:block"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] md:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
            style={{ width: "min(94%, 72rem)" }}
          >
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-[var(--text)]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
