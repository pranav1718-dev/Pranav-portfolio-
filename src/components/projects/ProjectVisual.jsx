import { motion } from "framer-motion";

const PALETTES = [
  { bg: "#111111", fg: "#F5F3EE", accent: "#315CFF" },
  { bg: "#315CFF", fg: "#F5F3EE", accent: "#B8FF3D" },
  { bg: "#DEDAD0", fg: "#111111", accent: "#315CFF" },
];

/**
 * Project visual. Renders the real captured screenshot when the project
 * provides one (project.image). Falls back to an honest placeholder — a
 * typographic/geometric composition built from the project's own name and
 * number — for projects with no real image yet, rather than a fabricated
 * screenshot.
 */
export function ProjectVisual({ project, index }) {
  const palette = PALETTES[index % PALETTES.length];

  if (project.image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-35px_rgba(17,17,17,0.45)] sm:aspect-[16/10]">
        <motion.img
          src={project.image}
          alt={`${project.title} — real screenshot of the live website`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl sm:aspect-[16/10]"
      style={{ backgroundColor: palette.bg }}
      role="img"
      aria-label={`${project.title} — visual placeholder`}
    >
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0.15, scale: 1.1 }}
        whileInView={{ opacity: 0.28, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="select-none font-display text-[22vw] leading-none font-semibold sm:text-[9rem]"
        style={{ color: palette.fg }}
      >
        {project.number}
      </motion.span>

      <span
        aria-hidden="true"
        className="absolute bottom-6 left-6 font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: palette.fg, opacity: 0.6 }}
      >
        {project.category}
      </span>

      <span
        aria-hidden="true"
        className="absolute top-6 right-6 h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: palette.accent }}
      />
    </div>
  );
}
