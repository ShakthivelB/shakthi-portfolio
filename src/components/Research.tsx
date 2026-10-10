import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Radar, Crosshair, Bug, FlaskConical, Globe, Cpu, Workflow, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Stepper from "./ui/Stepper";
import { methodologies, focusAreas } from "../data/research";
import { bugBountyPending } from "../data/bugBounty";
import { metrics } from "../data/profile";

const FOCUS_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "Security Operations": Radar,
  "Threat Hunting": Crosshair,
  "Bug Bounty": Bug,
  "Security Research": FlaskConical,
  OSINT: Globe,
  "Reverse Engineering": Cpu,
  "Security Automation": Workflow,
};

export default function Research() {
  const shouldReduceMotion = useReducedMotion();
  const reportCount = metrics.find((m) => m.label === "Bug Bounty Reports");

  return (
    <section id="research" aria-label="Research and Focus Areas" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Research"
          title="Focus Areas &amp; Methodology"
          description="Areas of interest and the investigation methodology applied in hands-on lab and bug bounty work."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = FOCUS_ICONS[area.title];
            return (
              <div key={area.title} className="panel border-l-2 border-l-accent-ink p-5">
                <div className="flex items-center gap-2.5">
                  {Icon && <Icon className="h-4 w-4 text-ink-secondary" aria-hidden="true" />}
                  <h3 className="text-sm font-medium text-ink">{area.title}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-secondary">{area.description}</p>
              </div>
            );
          })}
        </div>

        {reportCount && (
          <div className="mb-12 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-md border border-card-border bg-card px-4 py-2">
              <Bug className="h-4 w-4 text-accent-ink" aria-hidden="true" />
              <span className="text-sm text-ink">
                {reportCount.value}
                {reportCount.suffix} Bug Bounty Reports
              </span>
            </div>
            {bugBountyPending.pending && (
              <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Individual report details pending confirmation
              </p>
            )}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {methodologies.map((methodology) => (
            <motion.div
              key={methodology.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="panel p-6"
            >
              <h3 className="text-base font-medium text-ink">{methodology.title}</h3>
              <p className="mt-1 text-sm text-ink-secondary">{methodology.description}</p>
              <div className="mt-4">
                <Stepper steps={methodology.steps.map((s) => s.step)} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
