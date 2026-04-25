import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/contact.css";
import AnimatedSection from "./AnimatedSection";

function Contact() {
  const [state, handleSubmit] = useForm("xkojvrpp");

  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      formRef.current?.reset();
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Info de contacto — fade-in desde la izquierda */}
        <AnimatedSection className="contact-info" direction="left" distance={30}>
          <div className="contact-info-content">
            <motion.span
              className="contact-label"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              CONTACTO
            </motion.span>
            <motion.h2
              className="contact-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              CREEMOS
              <br />
              ALGO
              <br />
              INCREÍBLE
            </motion.h2>
            <motion.p
              className="contact-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              Estoy disponible para desarrollar soluciones web, ideas creativas
              y proyectos digitales a medida.
            </motion.p>

            <motion.div
              className="contact-details"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="contact-detail-item">
                <span className="detail-label">EMAIL</span>
                <a
                  href="mailto:herreramateo145@gmail.com"
                  className="detail-value"
                >
                  herreramateo145@gmail.com
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">WHATSAPP</span>
                <a href="tel:+5493854997505" className="detail-value">
                  +54 385 499 7505
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-social"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
              <span className="social-label">SÍGUEME</span>
              <div className="social-links">
                <motion.a
                  target="_blank"
                  href="https://www.linkedin.com/in/mateo-herrera-b0b74531b"
                  className="social-link"
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  target="_blank"
                  href="https://www.instagram.com/mateoohe/?hl=es-la%3F%2F"
                  className="social-link"
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                >
                  Instagram
                </motion.a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Formulario — fade-in desde la derecha */}
        <AnimatedSection
          className="contact-form-wrapper"
          direction="right"
          distance={30}
          delay={0.15}
        >
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NOMBRE</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                required
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number">NÚMERO</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Ej: 385 499 7505"
                required
              />
              <ValidationError
                prefix="number"
                field="number"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">ASUNTO</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Consulta de proyecto"
                required
              />
              <ValidationError
                prefix="subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MENSAJE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Háblame de tu proyecto..."
                required
              ></textarea>
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Mensaje de éxito con AnimatePresence para entrada/salida animada */}
            <AnimatePresence>
              {showSuccess && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  ¡Gracias por tu mensaje!
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={state.submitting}
              className="form-submit-btn"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span>ENVIAR MENSAJE</span>
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
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
