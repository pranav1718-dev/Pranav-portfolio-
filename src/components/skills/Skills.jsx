import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, revealViewport } from "../../lib/motion";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading index="06" label="Skills / Stack" title="Tools I design and build with." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer(0.1)}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4 border-t border-line pt-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-xl font-medium text-ink sm:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
