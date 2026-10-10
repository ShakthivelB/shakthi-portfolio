import type { ReactNode } from "react";

type BadgeTone = "neutral" | "solid" | "outline" | "success" | "warning";
type BadgeSurface = "dark" | "light";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  surface?: BadgeSurface;
  className?: string;
}

// "neutral" carries its own light chip background, so it reads correctly
// regardless of what surface it sits on. The other tones are border+text
// only (no background), so they need the surface-appropriate ink variant.
const NEUTRAL_CLASSES = "border border-card-border bg-chip-oncard text-ink-secondary";

const TONE_CLASSES: Record<BadgeSurface, Record<Exclude<BadgeTone, "neutral">, string>> = {
  dark: {
    solid: "border border-accent text-accent",
    outline: "border border-accent/40 text-accent",
    success: "border border-success/40 text-success",
    warning: "border border-warning/40 text-warning",
  },
  light: {
    solid: "border border-accent-ink text-accent-ink",
    outline: "border border-accent-ink/40 text-accent-ink",
    success: "border border-success-ink/40 text-success-ink",
    warning: "border border-warning-ink/40 text-warning-ink",
  },
};

export default function Badge({ children, tone = "neutral", surface = "dark", className = "" }: BadgeProps) {
  const toneClasses = tone === "neutral" ? NEUTRAL_CLASSES : TONE_CLASSES[surface][tone];

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
