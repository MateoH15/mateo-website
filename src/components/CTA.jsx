import { motion } from "framer-motion";
import "../styles/cta.css";
import AnimatedSection from "./AnimatedSection";

function CTA() {
  return (
    <AnimatedSection as="section" id="cta" className="cta">
      <div className="cta-container">
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          ¿Listo para crear algo increíble?
        </motion.h2>

        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Déjame ayudarte a construir tu sitio web.
        </motion.p>

        <motion.button
          onClick={() => (window.location.href = "#contact")}
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.97 }}
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
        </motion.button>
      </div>
    </AnimatedSection>
  );
}

export default CTA;
