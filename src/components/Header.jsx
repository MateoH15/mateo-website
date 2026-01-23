import { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      <header id="header" className="header">
        <h1 className="logo">
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
            <li>
              <a href="#header" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
