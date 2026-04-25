import { motion } from "framer-motion";

/**
 * AnimatedSection — Componente reutilizable para animar secciones al hacer scroll.
 *
 * Aplica fade-in + slide-up cuando la sección entra en el viewport.
 * Se activa solo una vez (once: true) para no repetir la animación.
 *
 * Props:
 * - children: contenido de la sección
 * - className: clase CSS opcional
 * - delay: delay antes de iniciar la animación (default: 0)
 * - direction: dirección del slide ("up" | "down" | "left" | "right", default: "up")
 * - distance: distancia del slide en px (default: 40)
 * - duration: duración de la animación (default: 0.6)
 * - as: elemento HTML a renderizar (default: "div")
 */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
  as = "div",
  ...props
}) {
  // Calcula el offset inicial según la dirección
  const directionOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionOffset[direction] || directionOffset.up;

  // Usa motion() para crear el componente dinámico
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier suave tipo Apple
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default AnimatedSection;
