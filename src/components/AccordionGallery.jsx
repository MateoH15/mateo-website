import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function AccordionGallery({
  items = [],
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
  accentColor = "#ffffff",
  overlayColor = "#060010",
  textColor = "#ffffff",
  grayscale = true,
  showLabels = true,
  duration = 0.6,
  ease = "power3.out",
  height = 480,
  gap = 12,
  radius = 16,
  orientation = "horizontal",
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const mediaRef = useRef([]);
  const textRef = useRef([]);
  const barRef = useRef([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      const isActive = i === activeIndex;

      // Flex grow ratio animation
      const flexVal = isActive ? expandRatio * 10 : 1;

      gsap.to(panel, {
        flexGrow: flexVal,
        duration: duration,
        ease: ease,
      });

      // Media grayscale and scale
      if (mediaRef.current[i]) {
        gsap.to(mediaRef.current[i], {
          filter:
            isActive && grayscale
              ? "grayscale(0%)"
              : grayscale
                ? "grayscale(100%)"
                : "grayscale(0%)",
          scale: isActive ? 1.05 : 1,
          duration: duration,
          ease: ease,
        });
      }

      // Text and bar opacity/transform animation
      if (textRef.current[i]) {
        gsap.to(textRef.current[i], {
          opacity: isActive ? 1 : 0.7,
          x: isActive ? 0 : -5,
          duration: duration * 0.8,
          ease: ease,
        });
      }

      if (barRef.current[i]) {
        gsap.to(barRef.current[i], {
          opacity: isActive ? 1 : 0,
          scaleY: isActive ? 1 : 0,
          duration: duration * 0.8,
          ease: ease,
        });
      }
    });
  }, [activeIndex, expandRatio, duration, ease, grayscale]);

  const handleTrigger = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      ref={containerRef}
      className={`accordion-gallery ${orientation === "vertical" ? "accordion-gallery--vertical" : ""}`}
      style={{
        "--ag-accent": accentColor,
        "--ag-overlay": overlayColor,
        "--ag-text": textColor,
        "--ag-gap": `${gap}px`,
        "--ag-radius": `${radius}px`,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {items.map((item, index) => (
        <a
          key={index}
          ref={(el) => (panelsRef.current[index] = el)}
          className={`ag-panel ${index === activeIndex ? "ag-panel--active" : ""}`}
          onMouseEnter={
            trigger === "hover" ? () => handleTrigger(index) : undefined
          }
          onClick={(e) => {
            handleTrigger(index);
          }}
        >
          <div className="ag-panel__frame">
            <div
              ref={(el) => (mediaRef.current[index] = el)}
              className="ag-panel__media"
            >
              <img src={item.image} alt={item.label} />
            </div>
            <div className="ag-panel__overlay" />
            {showLabels && (
              <div className="ag-panel__label">
                <div
                  ref={(el) => (barRef.current[index] = el)}
                  className="ag-panel__bar"
                />
                <div className="ag-panel__text-container">
                  <span
                    ref={(el) => (textRef.current[index] = el)}
                    className="ag-panel__text"
                  >
                    {item.label}
                  </span>
                  {item.desc && (
                    <p
                      className={`ag-panel__desc ${index === activeIndex ? "visible" : ""}`}
                    >
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
