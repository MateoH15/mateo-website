import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState, useRef } from "react";
import "../styles/contact.css";

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
        <div className="contact-info">
          <div className="contact-info-content">
            <span className="contact-label">CONTACTO</span>
            <h2 className="contact-title">
              CREEMOS
              <br />
              ALGO
              <br />
              INCREÍBLE
            </h2>
            <p className="contact-description">
              Estoy disponible para desarrollar soluciones web, ideas creativas
              y proyectos digitales a medida.
            </p>

            <div className="contact-details">
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
            </div>

            <div className="contact-social">
              <span className="social-label">SÍGUEME</span>
              <div className="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mateo-herrera-b0b74531b"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mateoohe/?hl=es-la%3F%2F"
                  className="social-link"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
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

            {showSuccess && (
              <p className="success-message">¡Gracias por tu mensaje!</p>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className="form-submit-btn"
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
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
