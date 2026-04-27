import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * CustomCursor — Cursor circular que sigue al mouse con delay elegante.
 *
 * Usa gsap.quickTo para interpolación suave con inercia.
 * Se agranda al hover sobre elementos interactivos.
 * Se oculta en dispositivos táctiles.
 */
function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Detectar touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // quickTo para movimiento con inercia (lerp)
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    // Offset para centrar el cursor
    const handleMouseMove = (e) => {
      xTo(e.clientX - 20);
      yTo(e.clientY - 20);
    };

    const handleMouseEnter = () => {
      cursor.classList.add("visible");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("visible");
    };

    // Hover sobre elementos interactivos
    const interactiveSelectors =
      "a, button, .bento-item, .service-item, .skill-item, input, textarea";

    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", () =>
          cursor.classList.add("hovering")
        );
        el.addEventListener("mouseleave", () =>
          cursor.classList.remove("hovering")
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Agregar listeners después de un breve delay para asegurar que el DOM está listo
    const timer = setTimeout(addHoverListeners, 500);

    // Observer para detectar nuevos elementos interactivos
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}

export default CustomCursor;
