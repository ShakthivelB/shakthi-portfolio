import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { experience } from "../data/experience";
import { achievements } from "../data/achievements";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="case-studies" aria-label="Experience and Case Studies" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Experience"
          description="Current role and hands-on projects."
        />

        <div className="space-y-6">
          {experience.map((entry) => (
            <motion.article
              key={entry.company + entry.role}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="panel p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-ink">
                  {entry.role} &middot; {entry.company}
                </h3>
                <span className="font-mono text-xs text-ink-muted">
                  {entry.startDate} — {entry.endDate}
                </span>
              </div>
              {entry.project && (
                <p className="mt-1 inline-block rounded bg-chip-oncard px-2 py-0.5 text-sm text-ink">
                  {entry.project}
                </p>
              )}
              <p className="mt-1 text-xs text-ink-secondary">{entry.location}</p>

              <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-ink-secondary">
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.article>
          ))}

          {achievements.map((achievement) => (
            <motion.article
              key={achievement.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="panel-raised relative overflow-hidden p-6"
            >
              <span className="absolute right-0 top-0 flex items-center gap-1.5 border-b border-l border-accent-ink px-3 py-1 text-[11px] font-medium text-accent-ink">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Featured Achievement
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-accent-ink">
                {achievement.category}
              </span>
              <h3 className="mt-1 text-lg font-medium text-ink">{achievement.title}</h3>
              <p className="mt-2 text-sm text-ink-secondary">{achievement.description}</p>
              <p className="mt-2 text-xs text-ink-muted">{achievement.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
