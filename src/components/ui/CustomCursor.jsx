import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const DESKTOP_QUERY = "(hover: hover) and (pointer: fine)";
const MIN_WIDTH = 768; // matches the site's md: breakpoint used for the mobile menu

function getIsDesktopPointer() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia(DESKTOP_QUERY).matches && window.innerWidth >= MIN_WIDTH
  );
}

/**
 * Subtle custom cursor for real desktop mouse users only. Disabled on
 * touch/coarse pointers, hybrid devices without true hover support, small
 * viewports, and when prefers-reduced-motion is set — checked against both
 * pointer capability and viewport width so it never renders in the mobile
 * layout, even on hybrid touch+mouse devices.
 */
export function CustomCursor() {
  const dotRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [isDesktopPointer, setIsDesktopPointer] = useState(getIsDesktopPointer);
  const prefersReducedMotion = useReducedMotion();
  const enabled = isDesktopPointer && !prefersReducedMotion;

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktopPointer(getIsDesktopPointer());

    update();
    query.addEventListener("change", update);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      query.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Keep the dot fully off-screen until the first real mouse movement so
    // it never flashes at the default (0,0) corner.
    const el = dotRef.current;
    if (el) el.style.transform = "translate3d(-100px, -100px, 0)";

    const move = (event) => {
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
        transform: "translate3d(-100px, -100px, 0)",
      }}
    />
  );
}
