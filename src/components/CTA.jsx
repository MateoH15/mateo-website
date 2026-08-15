import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cta.css";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // Specular mouse tracking
  const handleMouseMove = useCallback((e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--mx", `${x}px`);
    btn.style.setProperty("--my", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.setProperty("--shine-opacity", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.setProperty("--shine-opacity", "0");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;

      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const t = document.getElementById("contact");
    if (t) window.__lenis ? window.__lenis.scrollTo(t) : t.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" className="cta" ref={sectionRef}>
      <div className="cta-container">
        <h2 className="cta-title" ref={titleRef}>¿Listo para crear algo increíble?</h2>
        <p className="cta-subtitle" ref={subtitleRef}>Déjame ayudarte a construir tu sitio web.</p>

        <button
          ref={buttonRef}
          className="cta-glass-button"
          onClick={scrollToContact}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Specular shine layer */}
          <span className="cta-glass-shine" aria-hidden="true" />
          {/* Top gloss line */}
          <span className="cta-glass-gloss" aria-hidden="true" />
          <span className="cta-glass-label">CONTACTAME</span>
          <svg
            className="cta-glass-arrow"
            width="18" height="18"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default CTA;
