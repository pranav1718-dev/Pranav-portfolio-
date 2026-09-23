import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, revealViewport } from "../../lib/motion";
import { ProjectVisual } from "./ProjectVisual";
import { cn } from "../../lib/cn";

export function ProjectRow({ project, index, onOpenCaseStudy }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={fadeUp}
      className="border-t border-line py-14 first:border-t-0 sm:py-20"
    >
      <div
        className={cn(
          "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
        )}
      >
        <div
          className={cn(
            "lg:col-span-7",
            reversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            data-cursor-hover
            className="group block w-full text-left"
            aria-label={`View case study for ${project.title}`}
          >
            <ProjectVisual project={project} index={index} />
          </button>
        </div>

        <div className={cn("lg:col-span-5", reversed ? "lg:order-1" : "lg:order-2")}>
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-mono text-sm text-ink-faint">{project.number}</span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase">
              {project.status ?? project.category}
            </span>
          </div>

          <h3 className="text-balance font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent">{project.category}</p>

          <p className="mt-5 max-w-md text-ink-soft leading-relaxed">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            data-cursor-hover
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            View Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
