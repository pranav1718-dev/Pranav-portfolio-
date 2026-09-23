import { motion } from "framer-motion";
import { processSteps } from "../../data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, revealViewport } from "../../lib/motion";

export function Process() {
  return (
    <section id="process" className="bg-void py-24 text-void-text sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="05"
          label="Process"
          title="How a project moves forward."
          dark
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer(0.12)}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-void-line bg-void-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group relative bg-void p-8 transition-colors duration-300 hover:bg-[#141414]"
            >
              <span className="font-mono text-sm text-lime">{step.number}</span>
              <h3 className="mt-6 font-display text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-void-text/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 max-w-2xl text-sm text-void-text/50">
          Requirements → Structure → UI → Development → Responsive Testing → Refinement
        </p>
      </div>
    </section>
  );
}
