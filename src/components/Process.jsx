import "../styles/process.css";

function Process() {
  return (
    <section className="process">
      <div className="process-content">
        <div className="process-text">
          <span className="process-label">PROCESO</span>
          <h2 className="process-title">
            UN PROCESO <span className="process-title-accent">CLARO</span>
          </h2>
          <p className="process-subtitle">
            Un enfoque estratégico y creativo que garantiza sitios web
            funcionales, atractivos y efectivos.
          </p>

          <div className="process-steps">
            <div className="process-step">
              <h3>ANÁLISIS & IDEA</h3>
              <p>
                Analizo tus objetivos, tu público y las necesidades del proyecto
                para definir una base sólida.
              </p>
            </div>

            <div className="process-step">
              <h3>CONSTRUCCIÓN</h3>
              <p>
                Creo interfaces modernas y desarrollo la web con foco en
                experiencia de usuario y rendimiento.
              </p>
            </div>

            <div className="process-step">
              <h3>LANZAMIENTO</h3>
              <p>
                Optimización final, pruebas y entrega de un sitio listo para
                crecer.
              </p>
            </div>
          </div>
        </div>

        <div className="process-image">
          <div className="process-image-container">
            <img
              src="../assets/process.jpg"
              alt="Foto Profesional"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
