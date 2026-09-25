import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, revealViewport } from "../../lib/motion";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-editorial grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionHeading index="03" label="About" title="A little about me." />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={fadeUp}
          className="lg:col-span-7 lg:col-start-6"
        >
          <p className="text-balance font-serif text-2xl leading-snug text-ink italic sm:text-3xl">
            "I enjoy turning ideas into clean, responsive digital
            experiences — using modern tools and AI-assisted workflows to
            prototype, build and iterate faster."
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I'm Pranav, a BSc Computer Science student focused on UI/UX and
            frontend development. I design interfaces in Figma and build
            them with React, Vite and Tailwind CSS — currently deepening my
            JavaScript fundamentals alongside that work.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase">
                Focus
              </dt>
              <dd className="mt-2 font-display text-lg">UI/UX + Frontend</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase">
                Education
              </dt>
              <dd className="mt-2 font-display text-lg">BSc Computer Science</dd>
            </div>
            <div>
              <dt className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase">
                Availability
              </dt>
              <dd className="mt-2 font-display text-lg">Internships &amp; Freelance</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
