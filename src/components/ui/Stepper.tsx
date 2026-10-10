import { ArrowRight } from "lucide-react";

interface StepperProps {
  steps: string[];
}

export default function Stepper({ steps }: StepperProps) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 font-mono text-xs text-ink-secondary">
      {steps.map((step, idx) => (
        <li key={step} className="flex items-center gap-1">
          <span className="rounded border border-card-border bg-chip-oncard px-2 py-1 text-ink">
            <span className="mr-1.5 text-ink-muted">{String(idx + 1).padStart(2, "0")}</span>
            {step}
          </span>
          {idx < steps.length - 1 && <ArrowRight className="h-3 w-3 text-accent-ink/60" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
