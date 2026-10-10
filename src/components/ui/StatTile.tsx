import { motion, useReducedMotion } from "framer-motion";

interface StatTileProps {
  value: string;
  suffix?: string;
  label: string;
  note?: string;
  delay?: number;
}

export default function StatTile({ value, suffix, label, note, delay = 0 }: StatTileProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay }}
      className="panel border-t-2 border-t-accent-ink p-4 text-center"
    >
      <p className="text-2xl font-semibold text-ink">
        {value}
        {suffix && <span className="text-ink-secondary">{suffix}</span>}
      </p>
      <p className="mt-1 text-xs text-ink-secondary">{label}</p>
      {note && <p className="mt-0.5 text-[11px] text-ink-muted">{note}</p>}
    </motion.div>
  );
}
