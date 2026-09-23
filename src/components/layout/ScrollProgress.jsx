import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin progress bar pinned under the navbar, reflecting scroll position.
 * A subtle, purposeful motion cue rather than decoration.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 z-[60] h-[2px] w-full bg-accent"
    />
  );
}
