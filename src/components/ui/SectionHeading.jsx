import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "../../lib/motion";
import { cn } from "../../lib/cn";

/**
 * Consistent "NN — Label" eyebrow + large heading pattern used to open
 * every major section.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  dark = false,
  align = "left",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase",
          dark ? "text-lime" : "text-accent",
          align === "center" && "justify-center"
        )}
      >
        <span>{index}</span>
        <span className={cn("h-px w-8", dark ? "bg-void-line" : "bg-line")} />
        <span>{label}</span>
      </div>
      <h2
        className={cn(
          "text-balance text-[clamp(2.25rem,5vw,4rem)] font-medium",
          dark ? "text-void-text" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            dark ? "text-void-text/70" : "text-ink-soft"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
