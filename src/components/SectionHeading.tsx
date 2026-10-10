import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  surface?: "dark" | "light";
}

export default function SectionHeading({ eyebrow, title, description, surface = "dark" }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const onLight = surface === "light";

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mb-10 max-w-2xl"
    >
      {eyebrow && (
        <span
          className={`mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${onLight ? "text-accent-ink" : "text-accent"}`}
        >
          <span className={`h-1.5 w-1.5 ${onLight ? "bg-accent-ink" : "bg-accent"}`} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl uppercase tracking-tight sm:text-4xl ${onLight ? "text-ink" : "text-text"}`}
      >
        {title}
      </h2>
      {description && <p className={`mt-3 ${onLight ? "text-ink-secondary" : "text-text-secondary"}`}>{description}</p>}
    </motion.div>
  );
}
