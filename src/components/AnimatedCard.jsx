import { motion } from "framer-motion";

/**
 * AnimatedCard — Componente para tarjetas con hover suave.
 *
 * Aplica scale leve + sombra elevada en hover.
 * Transición fluida con easing tipo Apple.
 *
 * Props:
 * - children: contenido de la tarjeta
 * - className: clase CSS
 * - style: estilos inline
 * - onClick: handler de click
 * - delay: delay para la animación de entrada (stagger)
 * - as: elemento HTML (default: "div")
 */
function AnimatedCard({
  children,
  className = "",
  style = {},
  onClick,
  delay = 0,
  as = "div",
  ...props
}) {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      style={style}
      onClick={onClick}
      // Entrada con fade + slide up al hacer scroll
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      // Hover suave: scale leve + sombra elevada
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      // Feedback táctil al hacer click
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default AnimatedCard;
