import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapAnimations — Hook reutilizable para animaciones GSAP con cleanup automático.
 *
 * Retorna refs y funciones helper para crear animaciones con ScrollTrigger
 * que se limpian automáticamente al desmontar el componente.
 */
export function useGsapAnimations() {
  const contextRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup all GSAP animations in this context
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, []);

  /**
   * Crea un contexto GSAP ligado al scopeRef.
   * Todas las animaciones dentro se limpiarán automáticamente.
   */
  const createContext = useCallback((fn) => {
    if (contextRef.current) {
      contextRef.current.revert();
    }
    contextRef.current = gsap.context(fn, scopeRef.current);
  }, []);

  return { scopeRef, createContext };
}

/**
 * fadeInUp — Anima elementos con fade + translateY al entrar en viewport.
 */
export function fadeInUp(elements, options = {}) {
  const {
    y = 40,
    duration = 0.7,
    delay = 0,
    stagger = 0,
    ease = "power2.out",
    triggerOptions = {},
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: {
      trigger: triggerOptions.trigger || elements,
      start: triggerOptions.start || "top 85%",
      once: true,
      ...triggerOptions,
    },
  });
}

/**
 * fadeInFrom — Anima elementos con fade desde una dirección.
 */
export function fadeInFrom(elements, direction = "up", options = {}) {
  const {
    distance = 40,
    duration = 0.7,
    delay = 0,
    stagger = 0,
    ease = "power2.out",
    triggerOptions = {},
  } = options;

  const dirMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const { x, y } = dirMap[direction] || dirMap.up;

  return gsap.from(elements, {
    opacity: 0,
    x,
    y,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger: {
      trigger: triggerOptions.trigger || elements,
      start: triggerOptions.start || "top 85%",
      once: true,
      ...triggerOptions,
    },
  });
}

/**
 * staggerIn — Entrada escalonada de múltiples elementos.
 */
export function staggerIn(elements, options = {}) {
  const {
    y = 30,
    duration = 0.5,
    stagger = 0.12,
    ease = "power2.out",
    triggerOptions = {},
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: triggerOptions.trigger || elements[0],
      start: triggerOptions.start || "top 85%",
      once: true,
      ...triggerOptions,
    },
  });
}

export { gsap, ScrollTrigger };
