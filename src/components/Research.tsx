import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { methodologies, focusAreas } from "../data/research";

export default function Research() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="research" aria-label="Research and Focus Areas" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Research"
          title="Focus Areas &amp; Methodology"
          description="Areas of interest and the investigation methodology applied in hands-on lab and bug bounty work."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-panel border-l-2 border-l-accent bg-card p-5"
            >
              <h3 className="text-sm font-medium text-text">{area.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {methodologies.map((methodology) => (
            <motion.div
              key={methodology.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-panel bg-card p-6"
            >
              <h3 className="text-base font-medium text-text">{methodology.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{methodology.description}</p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 font-mono text-xs text-text-secondary">
                {methodology.steps.map((s, idx) => (
                  <li key={s.step} className="flex items-center gap-1">
                    <span className="rounded border border-panel bg-panel/60 px-2 py-1 text-text">
                      {s.step}
                    </span>
                    {idx < methodology.steps.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-muted" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
