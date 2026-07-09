import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import { Loader, ScrollProgress, BackToTop, Navbar } from "./components/Chrome";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Services from "./sections/Services";
import Journey from "./sections/Journey";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Services />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
