import "../styles/hero.css";
import Features from "./Features";

function Hero() {
  return (
    <main id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hola, soy Mateo.</p>
          <h1 className="hero-title">
            DESARROLLO
            <br />
            <span className="hero-title-accent">& DISEÑO</span>
            <br />
            WEB
          </h1>
          <p className="hero-description">
            Creo sitios web rápidos, escalables y orientados a resultados.
            Diseño y desarrollo soluciones digitales para emprendedores y
            negocios.
          </p>
          <button className="hero-cta">
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

        <div className="hero-image">
          <div className="image-circle">
            <img src="../assets/hero.png" alt="Mateo's photo" />
          </div>
        </div>
      </div>

      <Features />
    </main>
  );
}

export default Hero;
