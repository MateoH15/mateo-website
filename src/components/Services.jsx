import "../styles/services.css";

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow">SERVICIOS</p>
          <h2 className="services-title">
            SOLUCIONES PENSADAS
            <span className="services-title-accent"> PARA CRECER</span>
          </h2>
          <p className="services-subtitle">
            Servicios web enfocados en objetivos concretos y resultados reales.
          </p>
        </header>

        <div className="services-grid">
          <article className="service-item">
            <span className="service-index">01</span>
            <h3>LANDING PAGES</h3>
            <p>
              Páginas optimizadas para convertir visitas en contactos o ventas.
              Ideales para campañas y lanzamientos.
            </p>
          </article>

          <article className="service-item">
            <span className="service-index">02</span>
            <h3>SITIOS WEB INSTITUCIONALES</h3>
            <p>
              Webs profesionales que transmiten confianza, orden y una identidad
              clara de marca.
            </p>
          </article>

          <article className="service-item">
            <span className="service-index">03</span>
            <h3>E-COMMERCE</h3>
            <p>
              Tiendas online fáciles de administrar y pensadas para una
              experiencia de compra fluida.
            </p>
          </article>

          <article className="service-item">
            <span className="service-index">04</span>
            <h3>DASHBOARDS & APPS WEB</h3>
            <p>
              Aplicaciones y paneles a medida para visualizar datos y optimizar
              procesos internos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
