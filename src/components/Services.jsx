import { motion } from "framer-motion";
import "../styles/services.css";
import AnimatedSection from "./AnimatedSection";

/**
 * Variantes para el stagger del grid de servicios.
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Services() {
  return (
    <AnimatedSection as="section" id="services" className="services">
      <div className="services-container">
        <header className="services-header">
          <motion.p
            className="services-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            SERVICIOS
          </motion.p>
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            SOLUCIONES PENSADAS
            <span className="services-title-accent"> PARA CRECER</span>
          </motion.h2>
          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            Servicios web enfocados en objetivos concretos y resultados reales.
          </motion.p>
        </header>

        {/* Grid de servicios con stagger + hover sutil */}
        <motion.div
          className="services-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "LANDING PAGES",
              desc: "Páginas optimizadas para convertir visitas en contactos o ventas. Ideales para campañas y lanzamientos.",
            },
            {
              title: "SITIOS WEB INSTITUCIONALES",
              desc: "Webs profesionales que transmiten confianza, orden y una identidad clara de marca.",
            },
            {
              title: "E-COMMERCE",
              desc: "Tiendas online fáciles de administrar y pensadas para una experiencia de compra fluida.",
            },
            {
              title: "DASHBOARDS & APPS WEB",
              desc: "Aplicaciones y paneles a medida para visualizar datos y optimizar procesos internos.",
            },
          ].map((service, index) => (
            <motion.article
              className="service-item"
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Services;
