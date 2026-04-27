import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [state, handleSubmit] = useForm("xkojvrpp");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const detailsRef = useRef(null);
  const socialRef = useRef(null);
  const formWrapperRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      formRef.current?.reset();
      if (successRef.current) {
        gsap.fromTo(successRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      }
      const timer = setTimeout(() => {
        if (successRef.current) {
          gsap.to(successRef.current, { opacity: 0, y: -10, duration: 0.3, ease: "power2.out", onComplete: () => setShowSuccess(false) });
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;

      gsap.fromTo(labelRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } });
      gsap.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } });
      gsap.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } });
      gsap.fromTo(detailsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } });
      gsap.fromTo(socialRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: "power2.out", scrollTrigger: { trigger, start: "top 85%", once: true } });
      gsap.fromTo(formWrapperRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger, start: "top 80%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-content">
            <span className="contact-label" ref={labelRef}>CONTACTO</span>
            <h2 className="contact-title" ref={titleRef}>CREEMOS<br />ALGO<br />INCREÍBLE</h2>
            <p className="contact-description" ref={descRef}>Estoy disponible para desarrollar soluciones web, ideas creativas y proyectos digitales a medida.</p>
            <div className="contact-details" ref={detailsRef}>
              <div className="contact-detail-item">
                <span className="detail-label">EMAIL</span>
                <a href="mailto:herreramateo145@gmail.com" className="detail-value">herreramateo145@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">WHATSAPP</span>
                <a href="tel:+5493854997505" className="detail-value">+54 385 499 7505</a>
              </div>
            </div>
            <div className="contact-social" ref={socialRef}>
              <span className="social-label">SÍGUEME</span>
              <div className="social-links">
                <a target="_blank" href="https://www.linkedin.com/in/mateo-herrera-b0b74531b" className="social-link">LinkedIn</a>
                <a target="_blank" href="https://www.instagram.com/mateoohe/?hl=es-la%3F%2F" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper" ref={formWrapperRef}>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NOMBRE</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
              <ValidationError prefix="name" field="name" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
              <ValidationError prefix="email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="number">NÚMERO</label>
              <input type="number" id="number" name="number" placeholder="Ej: 385 499 7505" required />
              <ValidationError prefix="number" field="number" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">ASUNTO</label>
              <input type="text" id="subject" name="subject" placeholder="Consulta de proyecto" required />
              <ValidationError prefix="subject" field="subject" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="message">MENSAJE</label>
              <textarea id="message" name="message" rows="5" placeholder="Háblame de tu proyecto..." required></textarea>
              <ValidationError prefix="message" field="message" errors={state.errors} />
            </div>
            {showSuccess && <p className="success-message" ref={successRef}>¡Gracias por tu mensaje!</p>}
            <button type="submit" disabled={state.submitting} className="form-submit-btn">
              <span>ENVIAR MENSAJE</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
