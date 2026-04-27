import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/hero.css";
import heroImage from "../assets/mateoherreraimagen.jpg";

/**
 * Hero — Sección hero interactiva con parallax de mouse y animaciones GSAP.
 *
 * - El h1 reacciona al movimiento del mouse con efecto parallax sutil (lerp/inercia)
 * - Animación de entrada con timeline escalonada
 * - Leve skew al mover rápido el mouse
 */
function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const greetingRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Animación de entrada (timeline) ──
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(greetingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // ── Parallax mouse tracking con lerp ──
      const title = titleRef.current;
      const hero = heroRef.current;

      if (!title || !hero) return;

      // quickTo para interpolación suave (movimiento con inercia, no directo)
      const xTo = gsap.quickTo(title, "x", {
        duration: 0.6,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(title, "y", {
        duration: 0.6,
        ease: "power3.out",
      });
      const skewTo = gsap.quickTo(title, "skewX", {
        duration: 0.8,
        ease: "power3.out",
      });
      const scaleTo = gsap.quickTo(title, "scale", {
        duration: 0.6,
        ease: "power3.out",
      });

      let prevX = 0;

      const handleMouseMove = (e) => {
        const rect = hero.getBoundingClientRect();
        // Normalizar posición del mouse (-1 a 1)
        const normalX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const normalY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        // Limitar desplazamiento a ±15px
        xTo(normalX * 15);
        yTo(normalY * 10);

        // Calcular velocidad del mouse para skew sutil
        const velocityX = e.clientX - prevX;
        prevX = e.clientX;

        // Skew sutil basado en velocidad (máx ±3deg)
        const skewAmount = Math.max(-3, Math.min(3, velocityX * 0.05));
        skewTo(skewAmount);

        // Scale muy sutil con velocidad
        const speed = Math.abs(velocityX);
        const scaleAmount = 1 + Math.min(speed * 0.0003, 0.02);
        scaleTo(scaleAmount);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
        skewTo(0);
        scaleTo(1);
      };

      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseleave", handleMouseLeave);

      // Store cleanup for mouse events
      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
        hero.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main id="hero" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          {/* Saludo */}
          <p className="hero-greeting" ref={greetingRef}>
            Hola, soy Mateo.
          </p>

          {/* Título con parallax */}
          <h1 className="hero-title will-change-transform" ref={titleRef}>
            DESARROLLO
            <br />
            <span className="hero-title-accent">& DISEÑO</span>
            <br />
            WEB
          </h1>

          {/* Descripción */}
          <p className="hero-description" ref={descriptionRef}>
            Creo sitios web rápidos, escalables y orientados a resultados.
            Diseño y desarrollo soluciones digitales para emprendedores y
            negocios.
          </p>

          {/* Botón CTA */}
          <button
            ref={ctaRef}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hero-cta"
          >
            <span>CONTACTAME</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Imagen del hero */}
        <div className="hero-image" ref={imageRef}>
          <div className="image-circle">
            <img src={heroImage} alt="Mateo Herrera" />
          </div>
        </div>
      </div>

    </main>
  );
}

export default Hero;
