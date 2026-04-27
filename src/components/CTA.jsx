import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cta.css";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

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

  return (
    <section id="cta" className="cta" ref={sectionRef}>
      <div className="cta-container">
        <h2 className="cta-title" ref={titleRef}>¿Listo para crear algo increíble?</h2>
        <p className="cta-subtitle" ref={subtitleRef}>Déjame ayudarte a construir tu sitio web.</p>
        <button ref={buttonRef} onClick={() => (window.location.href = "#contact")} className="cta-button">
          <span>CONTACTAME</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}

export default CTA;
