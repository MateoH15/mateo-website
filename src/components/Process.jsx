import { motion } from "framer-motion";
import "../styles/process.css";
import processImage from "../assets/mateoherreraimagedesk.jpg";
import AnimatedSection from "./AnimatedSection";

/**
 * Variantes para el stagger de los pasos del proceso.
 */
const stepsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Process() {
  return (
    <AnimatedSection as="section" className="process">
      <div className="process-content">
        <div className="process-text">
          <motion.span
            className="process-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            PROCESO
          </motion.span>
          <motion.h2
            className="process-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            UN PROCESO <span className="process-title-accent">CLARO</span>
          </motion.h2>
          <motion.p
            className="process-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            Un enfoque estratégico y creativo que garantiza sitios web
            funcionales, atractivos y efectivos.
          </motion.p>

          {/* Pasos del proceso con stagger */}
          <motion.div
            className="process-steps"
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="process-step" variants={stepVariants}>
              <h3>ANÁLISIS & IDEA</h3>
              <p>
                Analizo tus objetivos, tu público y las necesidades del proyecto
                para definir una base sólida.
              </p>
            </motion.div>

            <motion.div className="process-step" variants={stepVariants}>
              <h3>CONSTRUCCIÓN</h3>
              <p>
                Creo interfaces modernas y desarrollo la web con foco en
                experiencia de usuario y rendimiento.
              </p>
            </motion.div>

            <motion.div className="process-step" variants={stepVariants}>
              <h3>LANZAMIENTO</h3>
              <p>
                Optimización final, pruebas y entrega de un sitio listo para
                crecer.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Imagen con scale + fade sutil */}
        <motion.div
          className="process-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="process-image-container">
            <img src={processImage} alt="Foto Profesional" />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Process;
