import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, revealViewport } from "../../lib/motion";

export function Services() {
  return (
    <section id="services" className="border-t border-line py-24 sm:py-32">
      <div className="container-editorial">
        <SectionHeading
          index="04"
          label="Services"
          title="What I can help with."
          description="For clients and teams looking for thoughtful design and clean frontend execution."
        />

        <div className="mt-16 divide-y divide-line border-t border-line">
          {services.map((service) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              variants={fadeUp}
              className="group grid grid-cols-1 items-center gap-4 py-8 sm:grid-cols-12 sm:gap-6"
            >
              <span className="font-mono text-sm text-ink-faint sm:col-span-1">
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-medium sm:col-span-4 sm:text-3xl">
                {service.title}
              </h3>
              <p className="text-ink-soft leading-relaxed sm:col-span-6">
                {service.description}
              </p>
              <ArrowUpRight
                size={22}
                className="text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent sm:col-span-1 sm:justify-self-end"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
