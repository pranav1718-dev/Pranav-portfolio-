import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { staggerContainer, fadeUp } from "../../lib/motion";

const LINES = ["I DESIGN", "DIGITAL", "EXPERIENCES."];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 pb-10 sm:pt-32"
    >
      <div className="container-editorial flex flex-1 flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="font-mono text-xs tracking-[0.18em] text-ink-soft uppercase">
            Open to internships &amp; selected freelance projects
          </p>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.15)}
          className="text-balance font-display text-[clamp(3rem,11vw,8.5rem)] font-medium tracking-[-0.03em] text-ink"
        >
          {LINES.map((line) => (
            <span key={line} className="block overflow-hidden">
              <motion.span variants={fadeUp} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.6)}
          className="mt-10 flex flex-col items-start gap-10 sm:mt-14 sm:flex-row sm:items-end sm:justify-between"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-md text-balance text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            UI/UX Designer + Frontend Developer creating clean, responsive
            and useful digital experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Button href="#work" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Let&rsquo;s Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container-editorial mt-16 flex items-center justify-between border-t border-line pt-6 text-xs text-ink-faint"
      >
        <span className="font-mono tracking-[0.15em] uppercase">
          BSc Computer Science Student
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
