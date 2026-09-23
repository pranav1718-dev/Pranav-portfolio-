import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Subtle custom cursor for desktop pointer devices only. Automatically
 * disabled on touch devices and when prefers-reduced-motion is set, and
 * never blocks pointer events.
 */
export function CustomCursor() {
  const dotRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isFinePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
  const enabled = isFinePointer && !prefersReducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const move = (event) => {
      const el = dotRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const over = (event) => {
      setHovering(Boolean(event.target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference transition-[width,height] duration-200 ease-out"
      style={{
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
        backgroundColor: "#F5F3EE",
      }}
    />
  );
}
