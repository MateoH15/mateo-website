import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import "lenis/dist/lenis.css";
import "./styles/index.css";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Exponer lenis globalmente para que cualquier componente pueda usarlo
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Manejar anchor clicks manualmente con lenis.scrollTo()
    // Esto funciona DURANTE el scroll, sin esperar a que termine
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: 0, immediate: false });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      gsap.ticker.remove(updateRaf);
      document.removeEventListener("click", handleAnchorClick);
      window.__lenis = null;
      lenis.destroy();
    };

  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Skills />
      <Process />
      <Services />
      <CTA />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
