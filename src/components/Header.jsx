import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/header.css";

/**
 * Header — Navegación con hide/show en scroll usando GSAP.
 * Animación de entrada suave. Menú hamburguesa para mobile.
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // ── Animación de entrada ──
    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(navItemsRef.current.filter(Boolean), {
        opacity: 0,
        y: -10,
        duration: 0.4,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
      });
    }, header);

    // ── Hide/Show en scroll ──
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        // Scroll down → ocultar
        gsap.to(header, {
          y: -100,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Scroll up → mostrar
        gsap.to(header, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header id="header" className="header" ref={headerRef}>
        <h1 className="logo" ref={logoRef}>
          <span className="logo-dot">●</span> MATEO
        </h1>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {["Inicio", "Servicios", "Proyectos", "Contacto"].map(
              (item, index) => {
                const hrefs = {
                  Inicio: "#header",
                  Servicios: "#services",
                  Proyectos: "#projects",
                  Contacto: "#contact",
                };
                return (
                  <li
                    key={item}
                    ref={(el) => (navItemsRef.current[index] = el)}
                  >
                    <a href={hrefs[item]} onClick={closeMenu}>
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
