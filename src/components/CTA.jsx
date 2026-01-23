import "../styles/cta.css";

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="cta-container">
        <h2 className="cta-title">¿Listo para crear algo increíble?</h2>
        <p className="cta-subtitle">
          Déjame ayudarte a construir tu sitio web.
        </p>
        <button
          onClick={() => (window.location.href = "#contact")}
          className="cta-button"
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
        </button>
      </div>
    </section>
  );
}

export default CTA;
