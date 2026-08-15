import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/header.css";
import logoImage from "../assets/MATEO-HERRERA-LOGO-blanco-Photoroom.png";

/**
 * Header — Navegación con hide/show en scroll usando GSAP.
 * Animación de entrada suave. Menú hamburguesa para mobile.
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navItemsRef = useRef([]);
  const radialItemsRef = useRef([]);

  const [isScrolled, setIsScrolled] = useState(false);

  const isOpenRef = useRef(isOpen);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // ── Animación de entrada (una sola vez al montar) ──
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      gsap.from(header, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });

      gsap.from(navItemsRef.current.filter(Boolean), {
        opacity: 0,
        y: -10,
        duration: 0.4,
        stagger: 0.08,
        delay: 0.3,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });
    }, header);

    return () => ctx.revert();
  }, []);

  // ── Hide/Show en scroll + scrolled state ──
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Morph to floating capsule block when scrolling down past 50px
      setIsScrolled(currentScrollY > 50);

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 120 &&
        !isOpenRef.current
      ) {
        // Scroll down → ocultar
        gsap.to(header, {
          y: -120,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Scroll up o arriba del todo → mostrar
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ── GSAP Radial Mobile Menu Animation ──
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const nav = navRef.current;
    const items = radialItemsRef.current.filter(Boolean);
    if (!nav || items.length === 0) return;

    if (isOpen) {
      gsap.killTweensOf([nav, ...items]);

      const tl = gsap.timeline();

      tl.fromTo(
        nav,
        {
          clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
          opacity: 1,
          visibility: "visible",
        },
        {
          clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
          duration: 0.65,
          ease: "power3.inOut",
        },
      ).fromTo(
        items,
        {
          opacity: 0,
          scale: 0.35,
          y: 30,
          rotation: -12,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "back.out(1.7)",
        },
        "-=0.35",
      );
    } else {
      gsap.killTweensOf([nav, ...items]);

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(nav, { visibility: "hidden" });
          gsap.set(items, { clearProps: "all" });
        },
      });

      tl.to(items, {
        opacity: 0,
        scale: 0.85,
        y: 15,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in",
      }).to(
        nav,
        {
          clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
          duration: 0.4,
          ease: "power3.inOut",
        },
        "-=0.1",
      );
    }
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

  const navData = [
    {
      name: "Inicio",
      href: "#hero",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Servicios",
      href: "#services",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      name: "Proyectos",
      href: "#projects",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      name: "Contacto",
      href: "#contact",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header
        id="header"
        className={`header ${isScrolled ? "header-scrolled" : ""}`}
        ref={headerRef}
      >
        <a href="#hero" className="logo" ref={logoRef}>
          <img src={logoImage} alt="MATEO HERRERA" className="logo-img" />
        </a>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`} ref={navRef}>
          <button
            className="mobile-nav-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="radial-menu-header">
            <span className="radial-menu-tag">Menú</span>
          </div>
          <ul className="nav-list radial-grid">
            {navData.map((item, index) => (
              <li
                key={item.name}
                className="radial-item"
                ref={(el) => {
                  navItemsRef.current[index] = el;
                  radialItemsRef.current[index] = el;
                }}
              >
                <a href={item.href} onClick={closeMenu}>
                  <div className="radial-icon-wrapper">{item.icon}</div>
                  <span className="radial-label">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
