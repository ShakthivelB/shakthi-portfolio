import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
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
              className="rounded-xl border border-panel bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-text">
                  {entry.role} &middot; {entry.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {entry.startDate} — {entry.endDate}
                </span>
              </div>
              {entry.project && (
                <p className="mt-1 inline-block rounded bg-panel/70 px-2 py-0.5 text-sm text-text">
                  {entry.project}
                </p>
              )}
              <p className="mt-1 text-xs text-text-secondary">{entry.location}</p>

              <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-text-secondary">
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-panel bg-panel/50 px-2.5 py-0.5 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
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
              className="rounded-xl border border-panel bg-card p-6"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-warning">
                {achievement.category}
              </span>
              <h3 className="mt-1 text-lg font-medium text-text">{achievement.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{achievement.description}</p>
              <p className="mt-2 text-xs text-muted">{achievement.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
