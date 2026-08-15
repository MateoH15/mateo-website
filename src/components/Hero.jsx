import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/hero.css";
import heroImage from "../assets/mateoherreraimagen.webp";

function Hero() {
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const greetingRef = useRef(null);
  const locationRef = useRef(null);
  const ctaRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(greetingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(line1Ref.current, { opacity: 0, y: 80, duration: 0.9 }, "-=0.3")
        .from(line2Ref.current, { opacity: 0, y: 80, duration: 0.9 }, "-=0.6")
        .from(
          locationRef.current,
          { opacity: 0, y: 20, duration: 0.5 },
          "-=0.4",
        )
        .from(
          ctaRef.current,
          { opacity: 0, scale: 0.8, duration: 0.5 },
          "-=0.3",
        )
        .from(logosRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.2");

      // Parallax sutil al mover el mouse
      const hero = heroRef.current;
      if (!hero) return;

      const xTo1 = gsap.quickTo(line1Ref.current, "x", {
        duration: 0.7,
        ease: "power3.out",
      });
      const xTo2 = gsap.quickTo(line2Ref.current, "x", {
        duration: 0.7,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        const rect = hero.getBoundingClientRect();
        const normalX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        xTo1(normalX * 12);
        xTo2(normalX * -8);
      };

      const handleMouseLeave = () => {
        xTo1(0);
        xTo2(0);
      };

      hero.addEventListener("mousemove", handleMouseMove, { passive: true });
      hero.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
        hero.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main id="hero" className="hero" ref={heroRef}>
      {/* Imagen de fondo */}
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Mateo Herrera - Desarrollador Web"
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>
      {/* Overlay oscuro gradiente */}
      <div className="hero-overlay" />

      {/* Contenido sobre la imagen */}
      <div className="hero-content-wrapper">
        {/* Saludo */}
        <p className="hero-greeting" ref={greetingRef}>
          Hola, soy Mateo!<span className="hero-wave">👋</span>
        </p>

        {/* Título gigante */}
        <div className="hero-title-block">
          {/* Línea 1: DESARROLLO + CTA */}
          <div className="hero-title-row row-1">
            <h1 className="hero-title will-change-transform" ref={line1Ref}>
              DESARROLLO
            </h1>
            <button
              ref={ctaRef}
              className="hero-cta-circle"
              onClick={() => {
                const t = document.getElementById("contact");
                if (t)
                  window.__lenis
                    ? window.__lenis.scrollTo(t)
                    : t.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Contactar"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>

          {/* Línea 2: & DISEÑO WEB (outline) */}
          <div className="hero-title-row row-2">
            <h2
              className="hero-title hero-title-outline will-change-transform "
              ref={line2Ref}
            >
              &amp; DISEÑO WEB
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <a className="hero-cta-button hero-cta-contact" href="#contact">
              <span>Contactar</span>
              <svg
                className="hero-cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              className="hero-cta-button outline hero-cta-trabajos"
              href="#projects"
            >
              <span>Ver trabajos</span>
              <svg
                className="hero-cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
