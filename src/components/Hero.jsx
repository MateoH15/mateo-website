import { motion } from "framer-motion";
import "../styles/hero.css";
import Features from "./Features";
import heroImage from "../assets/mateoherreraimagen.jpg";

/**
 * Variantes para el contenedor padre — controla el stagger de los hijos.
 * staggerChildren: cada hijo se anima 0.15s después del anterior.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Variantes para cada elemento hijo — fade-in + slide-up.
 */
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * Variantes para la imagen — scale + fade-in con un delay mayor.
 */
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Hero() {
  return (
    <main id="hero" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={containerVariants}>
          {/* Saludo — primer elemento del stagger */}
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hola, soy Mateo.
          </motion.p>

          {/* Título — segundo elemento */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            DESARROLLO
            <br />
            <span className="hero-title-accent">& DISEÑO</span>
            <br />
            WEB
          </motion.h1>

          {/* Descripción — tercer elemento */}
          <motion.p className="hero-description" variants={itemVariants}>
            Creo sitios web rápidos, escalables y orientados a resultados.
            Diseño y desarrollo soluciones digitales para emprendedores y
            negocios.
          </motion.p>

          {/* Botón CTA — cuarto elemento con hover */}
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="hero-cta"
            variants={itemVariants}
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
        </motion.div>

        {/* Imagen del hero — scale + fade con delay */}
        <motion.div
          className="hero-image"
          variants={imageVariants}
        >
          <div className="image-circle">
            <img src={heroImage} alt="Mateo Herrera" />
          </div>
        </motion.div>
      </motion.div>

      <Features />
    </main>
  );
}

export default Hero;
