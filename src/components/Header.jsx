import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Detecta la dirección del scroll para ocultar/mostrar el header
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Solo ocultar si scroll > 100px (para no ocultar inmediatamente)
    if (latest > previous && latest > 100) {
      setIsHidden(true); // Scroll down → ocultar
    } else {
      setIsHidden(false); // Scroll up → mostrar
    }
  });

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
      <motion.header
        id="header"
        className="header"
        // Fade-in suave al cargar
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: isHidden && !isOpen ? -100 : 0, // Ocultar al scroll down (no si el menú está abierto)
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <motion.h1
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="logo-dot">●</span> MATEO
        </motion.h1>

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
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <a href={hrefs[item]} onClick={closeMenu}>
                      {item}
                    </a>
                  </motion.li>
                );
              }
            )}
          </ul>
        </nav>
      </motion.header>
    </>
  );
}

export default Header;
