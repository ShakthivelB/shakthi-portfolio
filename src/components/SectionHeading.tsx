import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mb-10 max-w-2xl"
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs uppercase tracking-wider text-text shadow-sm ring-1 ring-inset ring-white/10">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-text-secondary">{description}</p>}
    </motion.div>
  );
}
