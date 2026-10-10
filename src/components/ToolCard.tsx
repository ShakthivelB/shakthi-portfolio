import { motion, useReducedMotion } from "framer-motion";
import { Wrench } from "lucide-react";
import type { Tool } from "../data/skills";

interface ToolCardProps {
  tool: Tool;
  category: string;
  index: number;
  variant?: "featured" | "compact";
}

function ToolLogo({ tool, size }: { tool: Tool; size: "lg" | "sm" }) {
  const Icon = tool.icon;
  const dims = size === "lg" ? "h-9 w-9" : "h-7 w-7";
  const wrapDims = size === "lg" ? "h-12 w-12" : "h-9 w-9";

  return (
    <div
      className={`flex ${wrapDims} shrink-0 items-center justify-center opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0`}
    >
      {Icon ? (
        <Icon className={`${dims} text-ink-secondary transition-colors group-hover:text-accent-ink`} aria-hidden="true" />
      ) : tool.logoSrc ? (
        <img src={tool.logoSrc} alt="" className={`${dims} rounded object-contain`} />
      ) : (
        <Wrench className={size === "lg" ? "h-7 w-7 text-ink-muted" : "h-5 w-5 text-ink-muted"} aria-hidden="true" />
      )}
    </div>
  );
}

export default function ToolCard({ tool, category, index, variant = "compact" }: ToolCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "featured") {
    return (
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        tabIndex={0}
        className="group flex items-start gap-4 rounded-md border border-card-border bg-card p-5 transition-colors hover:border-accent-ink/40 focus-visible:border-accent-ink/40"
      >
        <ToolLogo tool={tool} size="lg" />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-accent-ink">{category}</p>
          <p className="mt-0.5 text-sm font-medium text-ink">{tool.name}</p>
          <p className="mt-1.5 text-xs text-ink-secondary">{tool.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
      tabIndex={0}
      className="group relative flex flex-col items-center gap-2.5 rounded-md border border-card-border bg-card p-3.5 text-center transition-colors hover:border-accent-ink/40 focus-visible:border-accent-ink/40"
    >
      <ToolLogo tool={tool} size="sm" />
      <p className="text-xs font-medium text-ink">{tool.name}</p>

      <div className="pointer-events-none max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
        <p className="font-mono text-[10px] uppercase tracking-wide text-accent-ink">{category}</p>
        <p className="mt-1 text-[11px] text-ink-secondary">{tool.description}</p>
      </div>
    </motion.div>
  );
}
