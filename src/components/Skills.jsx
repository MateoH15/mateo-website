import { useRef } from "react";
import "../styles/skills.css";

const skills = [
  "React",
  "JavaScript",
  "GSAP",
  "AI",
  "Animaciones",
  "Diseño UI/UX",
  "SEO",
  "Rendimiento",
  "Responsive",
];

function Skills() {
  const sectionRef = useRef(null);

  return (
    <section className="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="skills-marquee-container">
          <div className="skills-marquee">
            <div className="skills-marquee-track ltr">
              {[...skills, ...skills, ...skills, ...skills].map(
                (skill, index) => {
                  const isAlternate = index % 2 !== 0;
                  return (
                    <div
                      className={`skill-pill ${isAlternate ? "outline" : "solid"}`}
                      key={`skill-${index}`}
                    >
                      <span className="skill-dot">
                        {isAlternate ? "✦" : "●"}
                      </span>
                      <span className="skill-text">{skill}</span>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
