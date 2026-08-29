import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const visible = projects.filter((p) => p.featured);
  const pending = projects.filter((p) => !p.featured);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <SectionHeading
        eyebrow="GitHub Projects"
        title="Featured Case Studies"
        description="Hands-on security and automation projects, documented on GitHub."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((project, i) => {
          const isOpen = expanded === project.title;
          return (
            <motion.article
              key={project.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
              className={`flex flex-col rounded-xl border border-panel bg-card p-6 transition-colors hover:border-accent/40 ${
                project.large ? "sm:col-span-2" : ""
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {project.category}
              </p>
              <h3 className="mt-1 text-lg font-medium text-text">{project.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{project.description}</p>

              <p className="mt-4 text-sm">
                <span className="font-mono text-xs uppercase text-muted">Security Relevance </span>
                <span className="text-text-secondary">{project.securityRelevance}</span>
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-panel bg-panel/50 px-2.5 py-0.5 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-panel pt-4 text-sm">
                      <p>
                        <span className="font-mono text-xs uppercase text-muted">Purpose </span>
                        <span className="text-text-secondary">{project.purpose}</span>
                      </p>
                      <p>
                        <span className="font-mono text-xs uppercase text-muted">Approach </span>
                        <span className="text-text-secondary">{project.approach}</span>
                      </p>
                      <p>
                        <span className="font-mono text-xs uppercase text-muted">Key Learning </span>
                        <span className="text-text-secondary">{project.keyLearning}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <button
                  onClick={() => setExpanded(isOpen ? null : project.title)}
                  aria-expanded={isOpen}
                  className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent"
                >
                  {isOpen ? "Hide Case Study" : "View Case Study"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {pending.length > 0 && (
        <p className="mt-6 font-mono text-xs text-text-secondary">
          {pending.length} additional project slot pending confirmed details.
        </p>
      )}
    </div>
  );
}
