import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Wraps a child element with a subtle magnetic pull toward the cursor.
 * Disabled entirely for touch devices and reduced-motion preference.
 */
export function Magnetic({ children, strength = 0.25, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  if (prefersReducedMotion || isTouch) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </motion.div>
  );
}
