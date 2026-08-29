import { motion, useReducedMotion } from "framer-motion";
import { Wrench } from "lucide-react";
import type { Tool } from "../data/skills";

interface ToolCardProps {
  tool: Tool;
  category: string;
  index: number;
}

export default function ToolCard({ tool, category, index }: ToolCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = tool.icon;

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
      tabIndex={0}
      className="group relative flex flex-col items-center gap-3 rounded-xl border border-panel bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/40 focus-visible:-translate-y-1 focus-visible:border-accent/40"
    >
      <div className="flex h-10 w-10 items-center justify-center opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0">
        {Icon ? (
          <Icon className="h-8 w-8 text-text-secondary transition-colors group-hover:text-accent-secondary" aria-hidden="true" />
        ) : tool.logoSrc ? (
          <img src={tool.logoSrc} alt="" className="h-8 w-8 rounded object-contain" />
        ) : (
          <Wrench className="h-6 w-6 text-muted" aria-hidden="true" />
        )}
      </div>

      <p className="text-sm font-medium text-text">{tool.name}</p>

      <div className="pointer-events-none max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
        <p className="font-mono text-[10px] uppercase tracking-wide text-accent">{category}</p>
        <p className="mt-1 text-xs text-text-secondary">{tool.description}</p>
      </div>
    </motion.div>
  );
}
