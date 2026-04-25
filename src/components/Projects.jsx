import { motion } from "framer-motion";
import "../styles/projects.css";
import AnimatedSection from "./AnimatedSection";
import logoQuantor from "../assets/logo-quantor.png";
import logoHaffner from "../assets/logo-haffner.png";
import logoWebMentor from "../assets/logo-webmentor.png";
import logoMifud from "../assets/logo-mifud.png";

/**
 * Variantes para el stagger del grid de proyectos.
 */
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Projects() {
  const projects = [
    {
      title: "Quantor Finance",
      category: "Dashboard financiero",
      year: "2025",
      size: "medium",
      image: logoQuantor,
      link: "https://quantorfinance.com",
    },
    {
      title: "Haffner dermocosmética",
      category: "E-commerce",
      year: "2026",
      size: "medium",
      image: logoHaffner,
      link: "https://haffnerdermocosmetica.com",
    },
    {
      title: "WebMentor",
      category: "Agencia de Desarrollo Web",
      year: "2025",
      size: "medium",
      image: logoWebMentor,
      link: "https://webmentoragency.site",
    },
    {
      title: "Mifud",
      category: "Aplicación para crear tu menú digital",
      year: "2026",
      size: "medium",
      image: logoMifud,
      link: "https://mifud.net",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Header de la sección con stagger */}
        <AnimatedSection className="projects-header">
          <span className="projects-label">PORTAFOLIO</span>
          <h2 className="projects-title">PROYECTOS</h2>
        </AnimatedSection>

        {/* Grid con stagger en las tarjetas */}
        <motion.div
          className="bento-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className={`bento-item bento-${project.size}`}
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => window.open(project.link, "_blank")}
              variants={cardVariants}
              // Hover suave: scale leve + sombra elevada
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bento-content">
                <div className="bento-info">
                  <span className="bento-year">{project.year}</span>
                </div>
                <div className="bento-details">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-category">{project.category}</p>
                </div>
                <motion.button
                  className="bento-arrow"
                  // Rotación sutil de la flecha en hover del padre
                  whileHover={{
                    rotate: -45,
                    transition: { duration: 0.3 },
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
