import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionServices from "./AccordionServices";
import "../styles/services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const accordionWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;

      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );

      if (accordionWrapperRef.current) {
        gsap.fromTo(
          accordionWrapperRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger, start: "top 75%", once: true } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow" ref={eyebrowRef}>SERVICIOS</p>
          <h2 className="services-title" ref={titleRef}>
            SOLUCIONES PENSADAS<span className="services-title-accent"> PARA CRECER</span>
          </h2>
          <p className="services-subtitle" ref={subtitleRef}>
            Desplazate sobre cada panel para explorar cada solución digital.
          </p>
        </header>
        <div className="services-accordion-wrapper" ref={accordionWrapperRef}>
          <AccordionServices />
        </div>
      </div>
    </section>
  );
}

export default Services;
