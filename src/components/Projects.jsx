import "../styles/projects.css";
import logoQuantor from "../assets/logo-quantor.png";
import logoHaffner from "../assets/logo-haffner.png";
import logoWebMentor from "../assets/logo-webmentor.png";

function Projects() {
  const projects = [
    {
      title: "Quantor Finance",
      category: "Dashboard financiero",
      year: "2025",
      size: "large",
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
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">PORTAFOLIO</span>
          <h2 className="projects-title">PROYECTOS</h2>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <div
              className={`bento-item bento-${project.size}`}
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="bento-content">
                <div className="bento-info">
                  <span className="bento-year">{project.year}</span>
                </div>
                <div className="bento-details">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-category">{project.category}</p>
                </div>
                <button className="bento-arrow">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
