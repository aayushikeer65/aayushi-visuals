import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { typingRoles } from "../data";

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dots: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];
    const colors = ["#E8B65A", "#C98A9B", "#6FB6AE"];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    for (let i = 0; i < 55; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.6,
        c: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.c;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      });
      ctx.globalAlpha = 0.12;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "#E8B65A";
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 45 : 95;
    const t = setTimeout(() => {
      setText((prev) =>
        del ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
      if (!del && text === current) setTimeout(() => setDel(true), 1300);
      else if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export default function Hero() {
  const typed = useTyping(typingRoles);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <Particles />
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-purple-600/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/15 blur-[120px]" />

      {/* floating shapes */}
      <div className="animate-float pointer-events-none absolute left-[8%] top-[30%] h-16 w-16 rounded-2xl border border-purple-400/40 bg-purple-500/10" style={{ animationDelay: "0s" }} />
      <div className="animate-float pointer-events-none absolute right-[12%] bottom-[22%] h-10 w-10 rounded-full border border-cyan-400/40 bg-cyan-500/10" style={{ animationDelay: "2s" }} />
      <div className="animate-float pointer-events-none absolute right-[22%] top-[20%] h-6 w-6 rotate-45 border border-amber-400/50 bg-amber-500/10" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto grid w-[92%] max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mb-4 font-display text-lg italic text-amber-300"
          >
            ॥ श्री कृष्णाय नमः ॥
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">Aayushi Keer</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-4 text-2xl font-medium md:text-3xl"
          >
            I'm a{" "}
            <span className="text-gradient font-semibold">{typed}</span>
            <span className="cursor-blink text-cyan-400">|</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="mt-6 max-w-lg text-muted"
          >
            Designing with the <span className="italic text-[var(--text)]">rhythm of the flute</span> — I blend timeless Indian aesthetics with modern visual language to craft brand identities, illustrations and campaigns that resonate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#work" className="gradient-btn rounded-full px-7 py-3.5 font-semibold text-white">
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--card-border)] bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition-all hover:border-cyan-400/60 hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md md:block"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-400/30 blur-md" />
          <div className="absolute inset-6 animate-spin-slow rounded-full border border-dashed border-purple-400/30" style={{ animationDirection: "reverse" }} />
          <div className="glass absolute inset-10 flex flex-col items-center justify-center rounded-full text-center">
            <span className="text-7xl">🦚</span>
            <p className="mt-4 font-display text-2xl italic text-amber-200">Leela of</p>
            <p className="font-display text-3xl font-bold text-gradient">Color & Form</p>
          </div>
          <div className="glass absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 text-center">
            <p className="font-display text-2xl font-bold text-gradient">5+ yrs</p>
            <p className="text-xs text-muted">of design craft</p>
          </div>
          <div className="glass absolute right-0 top-8 rounded-2xl px-4 py-3 text-center">
            <p className="text-xl">📍</p>
            <p className="text-xs text-muted">Chittorgarh</p>
          </div>
          <div className="glass absolute left-0 top-1/3 rounded-2xl px-4 py-3 text-center">
            <p className="text-xl">🪄</p>
            <p className="text-xs text-muted">120+ projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
