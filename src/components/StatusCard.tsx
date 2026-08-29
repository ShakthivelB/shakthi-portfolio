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
      className="w-full max-w-md rounded-xl border border-panel bg-card p-6 shadow-lg shadow-black/20"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-muted">Status</span>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs text-success">
          <CircleDot className="h-3 w-3" aria-hidden="true" />
          {profile.availability}
        </span>
      </div>

      <dl className="space-y-3">
        {ROWS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <dt className="text-xs text-muted">{label}</dt>
              <dd className="text-sm text-text">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </motion.div>
  );
}
