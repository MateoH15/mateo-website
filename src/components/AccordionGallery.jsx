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
    const isMobile = window.innerWidth <= 768;
    const animDuration = isMobile ? 0.35 : duration;
    const animEase = isMobile ? "power2.out" : ease;

    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      const isActive = i === activeIndex;

      // Flex grow ratio animation
      const flexVal = isActive ? expandRatio * 10 : 1;

      gsap.to(panel, {
        flexGrow: flexVal,
        duration: animDuration,
        ease: animEase,
      });

      // Media scale (skip filter: grayscale on mobile for 60fps GPU performance)
      if (mediaRef.current[i]) {
        const mediaProps = {
          scale: isActive ? 1.04 : 1,
          duration: animDuration,
          ease: animEase,
        };
        if (!isMobile && grayscale) {
          mediaProps.filter = isActive ? "grayscale(0%)" : "grayscale(100%)";
        } else if (isMobile) {
          mediaProps.filter = "none";
        }
        gsap.to(mediaRef.current[i], mediaProps);
      }

      // Text and bar opacity animation
      if (textRef.current[i]) {
        gsap.to(textRef.current[i], {
          opacity: isActive ? 1 : 0.75,
          duration: animDuration * 0.8,
          ease: animEase,
        });
      }

      if (barRef.current[i]) {
        gsap.to(barRef.current[i], {
          opacity: isActive ? 1 : 0,
          scaleY: isActive ? 1 : 0,
          duration: animDuration * 0.8,
          ease: animEase,
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
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                decoding="async"
              />
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
