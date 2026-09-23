import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { ProjectVisual } from "../projects/ProjectVisual";

function Field({ label, children }) {
  if (!children) return null;
  return (
    <div className="border-t border-void-line py-6">
      <h4 className="mb-3 font-mono text-xs tracking-[0.2em] text-lime uppercase">{label}</h4>
      <div className="text-void-text/85 leading-relaxed">{children}</div>
    </div>
  );
}

export function CaseStudyOverlay({ project, index, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-void"
        >
          <div className="container-editorial py-24 sm:py-28">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="fixed top-5 right-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-void-line bg-void text-void-text transition-colors hover:border-lime hover:text-lime sm:top-8 sm:right-8"
              aria-label="Close case study"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <p className="mb-4 font-mono text-xs tracking-[0.2em] text-lime uppercase">
                {project.number} — {project.category}
              </p>
              <h2 className="text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium text-void-text">
                {project.title}
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-void-line px-3 py-1 text-xs text-void-text/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-void hover:opacity-90"
                  >
                    Visit Live Site <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-void-line px-5 py-2.5 text-sm text-void-text/50">
                    Live link available on request
                  </span>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-void-line px-5 py-2.5 text-sm text-void-text hover:border-lime hover:text-lime"
                  >
                    <Github size={14} /> View Code
                  </a>
                ) : null}
              </div>

              <div className="mt-14 max-w-3xl">
                <ProjectVisual project={project} index={index} />
              </div>

              <div className="mt-4 max-w-3xl divide-y divide-void-line">
                <Field label="Overview">{project.caseStudy.overview}</Field>
                <Field label="Problem">{project.caseStudy.problem}</Field>
                <Field label="Role">{project.caseStudy.role}</Field>
                <Field label="Process">
                  <ul className="space-y-2">
                    {project.caseStudy.process.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-lime" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </Field>
                <Field label="Responsive Design">{project.caseStudy.responsiveDesign}</Field>
                <Field label="Outcome">{project.caseStudy.outcome}</Field>
                <Field label="Technology">{project.caseStudy.technology.join(" · ")}</Field>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
