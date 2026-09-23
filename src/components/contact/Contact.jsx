import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "../../data/contact";
import { fadeUp, staggerContainer, revealViewport } from "../../lib/motion";

export function Contact() {
  return (
    <section id="contact" className="bg-void py-28 text-void-text sm:py-36">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={staggerContainer(0.1)}
        className="container-editorial text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 font-mono text-xs tracking-[0.2em] text-lime uppercase"
        >
          08 — Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg text-balance text-lg text-void-text/70"
        >
          Let's build something useful, thoughtful and beautifully designed.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${contactLinks.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-lime px-6 py-3 text-sm font-medium text-void transition-opacity hover:opacity-90"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-void-line px-6 py-3 text-sm font-medium text-void-text transition-colors hover:border-lime hover:text-lime"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-void-line px-6 py-3 text-sm font-medium text-void-text transition-colors hover:border-lime hover:text-lime"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
