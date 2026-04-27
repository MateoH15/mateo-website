import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/process.css";
import processImage from "../assets/mateoherreraimagedesk.jpg";

gsap.registerPlugin(ScrollTrigger);

function Process() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const stepsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;

      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } }
      );

      const steps = stepsRef.current.filter(Boolean);
      if (steps.length > 0) {
        gsap.fromTo(steps,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 75%", once: true } }
        );
      }

      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.7, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: imageRef.current, start: "top 90%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="process" ref={sectionRef}>
      <div className="process-content">
        <div className="process-text">
          <span className="process-label" ref={labelRef}>PROCESO</span>
          <h2 className="process-title" ref={titleRef}>
            UN PROCESO <span className="process-title-accent">CLARO</span>
          </h2>
          <p className="process-subtitle" ref={subtitleRef}>
            Un enfoque estratégico y creativo que garantiza sitios web funcionales, atractivos y efectivos.
          </p>
          <div className="process-steps">
            <div className="process-step" ref={(el) => (stepsRef.current[0] = el)}>
              <h3>ANÁLISIS & IDEA</h3>
              <p>Analizo tus objetivos, tu público y las necesidades del proyecto para definir una base sólida.</p>
            </div>
            <div className="process-step" ref={(el) => (stepsRef.current[1] = el)}>
              <h3>CONSTRUCCIÓN</h3>
              <p>Creo interfaces modernas y desarrollo la web con foco en experiencia de usuario y rendimiento.</p>
            </div>
            <div className="process-step" ref={(el) => (stepsRef.current[2] = el)}>
              <h3>LANZAMIENTO</h3>
              <p>Optimización final, pruebas y entrega de un sitio listo para crecer.</p>
            </div>
          </div>
        </div>
        <div className="process-image" ref={imageRef}>
          <div className="process-image-container">
            <img src={processImage} alt="Foto Profesional" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
