import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-dot">●</span> MATEO
            </h3>
            <p className="footer-tagline">
              Creo sitios web rápidos, escalables y orientados a resultados.
              Diseño y desarrollo soluciones digitales para emprendedores y
              negocios.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Navegación</h4>
              <ul className="footer-list">
                <li>
                  <a href="#header">Inicio</a>
                </li>
                <li>
                  <a href="#projects">Proyectos</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Sígueme</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Mateo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
