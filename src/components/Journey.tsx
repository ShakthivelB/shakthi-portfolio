import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { journey } from "../data/journey";

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" aria-label="Career Journey" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Journey" title="Career &amp; Learning Journey" />

        <ol className="relative space-y-8 border-l border-panel pl-6">
          {journey.map((node, i) => (
            <motion.li
              key={node.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-card" />
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-sm font-medium text-text">{node.title}</h3>
                <span className="font-mono text-xs text-text-secondary">{node.date}</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">{node.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
