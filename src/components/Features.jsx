import "../styles/features.css";

function Features() {
  const cards = [
    {
      title: "DESARROLLO WEB MODERNO",
      description:
        "Sitios y aplicaciones web construidos con tecnologías actuales, optimizados para rendimiento y escalabilidad.",
    },
    {
      title: "EXPERIENCIA DE USUARIO",
      description:
        "Diseño centrado en el usuario para mejorar la navegación, retención y conversión.",
    },
    {
      title: "PERFORMANCE & VELOCIDAD",
      description:
        "Optimización de carga y rendimiento para una experiencia rápida y fluida.",
    },
    {
      title: "SEO & ESTRUCTURA WEB",
      description:
        "Buenas prácticas de SEO técnico y estructura semántica para mejorar visibilidad en buscadores.",
    },
    {
      title: "DISEÑO UI/UX RESPONSIVE",
      description:
        "Interfaces atractivas y funcionales que se adaptan perfectamente a cualquier dispositivo.",
    },
  ];

  return (
    <div className="hero-features">
      <div className="features-track">
        {/* First set of cards */}
        {cards.map((card, index) => (
          <div className="feature-card" key={`card-1-${index}`}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {cards.map((card, index) => (
          <div className="feature-card" key={`card-2-${index}`}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
