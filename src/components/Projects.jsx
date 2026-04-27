import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/projects.css";
import logoQuantor from "../assets/logo-quantor.png";
import logoHaffner from "../assets/logo-haffner.png";
import logoWebMentor from "../assets/logo-webmentor.png";
import logoMifud from "../assets/logo-mifud.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const animatedRef = useRef(false);

  const projects = [
    { title: "Quantor Finance", category: "Dashboard financiero", year: "2025", size: "medium", image: logoQuantor, link: "https://quantorfinance.com" },
    { title: "Haffner dermocosmética", category: "E-commerce", year: "2026", size: "medium", image: logoHaffner, link: "https://haffnerdermocosmetica.com" },
    { title: "WebMentor", category: "Agencia de Desarrollo Web", year: "2025", size: "medium", image: logoWebMentor, link: "https://webmentoragency.site" },
    { title: "Mifud", category: "Aplicación para crear tu menú digital", year: "2026", size: "medium", image: logoMifud, link: "https://mifud.net" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // Header
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true }
        }
      );

      // Cards entrance — use ScrollTrigger callback to animate manually
      if (cards.length > 0) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            if (animatedRef.current) return;
            animatedRef.current = true;
            gsap.fromTo(cards,
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }
            );
          },
        });

        // Fallback: if user lands directly on #projects, cards may already be past trigger
        // Force show after a short delay
        const fallbackTimer = setTimeout(() => {
          if (!animatedRef.current) {
            animatedRef.current = true;
            gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" });
          }
        }, 800);

        // Hover effects
        cards.forEach((card) => {
          const arrow = card.querySelector(".bento-arrow");
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scaleX: 1.03, scaleY: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)", duration: 0.3, ease: "power2.out" });
            if (arrow) gsap.to(arrow, { rotation: -45, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scaleX: 1, scaleY: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.out" });
            if (arrow) gsap.to(arrow, { rotation: 0, duration: 0.3, ease: "power2.out" });
          });
        });

        return () => clearTimeout(fallbackTimer);
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label" ref={labelRef}>PORTAFOLIO</span>
          <h2 className="projects-title" ref={titleRef}>PROYECTOS</h2>
        </div>
        <div className="bento-grid">
          {projects.map((project, index) => (
            <div
              className={`bento-item bento-${project.size}`}
              key={index}
              style={{ backgroundImage: `url(${project.image})`, opacity: 0, transform: "translateY(35px)" }}
              onClick={() => window.open(project.link, "_blank")}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="bento-content">
                <div className="bento-info"><span className="bento-year">{project.year}</span></div>
                <div className="bento-details">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-category">{project.category}</p>
                </div>
                <button className="bento-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
