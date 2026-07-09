import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };
    const hoverIn = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-hover]")) {
        ring.current?.classList.add("scale-[2.2]", "opacity-100");
      }
    };
    const hoverOut = () => ring.current?.classList.remove("scale-[2.2]", "opacity-100");

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverIn);
    window.addEventListener("mouseout", hoverOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverIn);
      window.removeEventListener("mouseout", hoverOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-cyan-400"
      />
      <div
        ref={ring}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-purple-400/70 opacity-60 transition-transform duration-200 ease-out"
      />
    </>
  );
}
