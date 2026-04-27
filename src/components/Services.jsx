import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;

      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );

      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger, start: "top 75%", once: true } }
        );
      }

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" });
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { title: "LANDING PAGES", desc: "Páginas optimizadas para convertir visitas en contactos o ventas. Ideales para campañas y lanzamientos." },
    { title: "SITIOS WEB INSTITUCIONALES", desc: "Webs profesionales que transmiten confianza, orden y una identidad clara de marca." },
    { title: "E-COMMERCE", desc: "Tiendas online fáciles de administrar y pensadas para una experiencia de compra fluida." },
    { title: "DASHBOARDS & APPS WEB", desc: "Aplicaciones y paneles a medida para visualizar datos y optimizar procesos internos." },
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow" ref={eyebrowRef}>SERVICIOS</p>
          <h2 className="services-title" ref={titleRef}>
            SOLUCIONES PENSADAS<span className="services-title-accent"> PARA CRECER</span>
          </h2>
          <p className="services-subtitle" ref={subtitleRef}>
            Servicios web enfocados en objetivos concretos y resultados reales.
          </p>
        </header>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-item" key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
