"use client";

import { useEffect } from "react";

/** Longest a reveal may stay hidden before it is shown regardless. */
const FAILSAFE_MS = 2500;

/**
 * Reveals `[data-reveal]` elements as they scroll into view.
 *
 * One shared IntersectionObserver handles the whole page — cheaper than a
 * hydrated component per element — and every element is shown unconditionally
 * if the observer is unavailable or never fires.
 */
export function RevealController() {
  useEffect(() => {
    // Tells the inline bootstrap that hydration succeeded, so its
    // "unhide everything" fallback stays out of the way.
    (window as Window & { __revealReady?: boolean }).__revealReady = true;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const show = (element: Element) => element.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    for (const element of elements) {
      if (element.dataset.reveal === "stagger" && element.parentElement) {
        const gap = Number(element.parentElement.dataset.staggerGap ?? 80);
        const position = Array.prototype.indexOf.call(element.parentElement.children, element);
        element.style.transitionDelay = `${Math.min(position, 8) * gap}ms`;
      } else if (element.dataset.delay) {
        element.style.transitionDelay = `${element.dataset.delay}ms`;
      }
      observer.observe(element);
    }

    const failsafe = window.setTimeout(() => elements.forEach(show), FAILSAFE_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
