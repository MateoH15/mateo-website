import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React" },
  { name: "JavaScript" },
  { name: "Animations" },
  { name: "AI" },
  { name: "UI/UX Design" },
  { name: "SEO" },
  { name: "Performance" },
  { name: "Responsive" },
];

function Skills() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;
      const items = itemsRef.current.filter(Boolean);

      // Header entrance
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger, start: "top 85%", once: true },
        },
      );

      // Stagger skill items
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger, start: "top 75%", once: true },
          },
        );
      }

      // Floating animation (organic, per skill)
      items.forEach((item, i) => {
        const yAmount = 6 + (i % 3) * 2;
        const duration = 2.5 + (i % 4) * 0.4;
        const delay = i * 0.2;

        gsap.to(item, {
          y: -yAmount,
          duration,
          delay,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Hover: scale up + dimming
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power2.out" });
          items.forEach((other) => {
            if (other !== item) {
              gsap.to(other, {
                opacity: 0.3,
                scale: 0.95,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
          items.forEach((other) => {
            if (other !== item) {
              gsap.to(other, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" ref={sectionRef}>
      <div className="skills-container">
        <header className="skills-header">
          <span className="skills-label" ref={labelRef}>
            HABILIDADES
          </span>
          <h2 className="skills-title" ref={titleRef}>
            TECNOLOGÍAS{" "}
            <span className="skills-title-accent">& HERRAMIENTAS</span>
          </h2>
        </header>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-item will-change-transform"
              key={skill.name}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <span className="skill-emoji">{skill.emoji}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
