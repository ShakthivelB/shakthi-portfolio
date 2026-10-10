import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Building2, FolderKanban, Target, CircleDot } from "lucide-react";
import { profile } from "../data/profile";

const ROWS = [
  { icon: Briefcase, label: "Current Position", value: profile.currentRole },
  { icon: Building2, label: "Company", value: profile.currentCompany },
  { icon: FolderKanban, label: "Project", value: profile.currentProject },
  { icon: Target, label: "Career Goal", value: profile.careerGoal },
];

export default function StatusCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="panel-raised w-full max-w-md p-6"
    >
      <div className="mb-5 flex items-center justify-between border-b border-card-border pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">Status</span>
        <span className="flex items-center gap-1.5 border border-success-ink/40 px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-success-ink">
          <CircleDot className="h-3 w-3 animate-pulse" aria-hidden="true" />
          {profile.availability}
        </span>
      </div>

      <dl className="space-y-4">
        {ROWS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 border-l-2 border-card-border-strong pl-3">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-secondary" aria-hidden="true" />
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">{label}</dt>
              <dd className="text-sm text-ink">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </motion.div>
  );
}
