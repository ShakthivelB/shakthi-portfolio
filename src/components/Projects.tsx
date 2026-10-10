import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.05 }}
      className={`flex flex-col p-6 transition-colors hover:border-accent-ink/40 ${
        project.large ? "panel-raised sm:col-span-2" : "panel"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-wider text-accent-ink">{project.category}</p>
      <h3 className={`mt-1 font-medium text-ink ${project.large ? "text-xl" : "text-lg"}`}>
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-ink-secondary">{project.description}</p>

      <p className="mt-4 text-sm">
        <span className="font-mono text-xs uppercase text-ink-muted">Security Relevance </span>
        <span className="text-ink-secondary">{project.securityRelevance}</span>
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
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
            <div className="mt-4 space-y-3 border-t border-card-border pt-4 text-sm">
              <p>
                <span className="font-mono text-xs uppercase text-ink-muted">Purpose </span>
                <span className="text-ink-secondary">{project.purpose}</span>
              </p>
              <p>
                <span className="font-mono text-xs uppercase text-ink-muted">Approach </span>
                <span className="text-ink-secondary">{project.approach}</span>
              </p>
              <p>
                <span className="font-mono text-xs uppercase text-ink-muted">Key Learning </span>
                <span className="text-ink-secondary">{project.keyLearning}</span>
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
          className="flex items-center gap-2 text-sm text-accent-ink hover:underline"
        >
          <FaGithub className="h-4 w-4" aria-hidden="true" />
          View on GitHub
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className="flex items-center gap-1 text-sm text-ink-secondary hover:text-accent-ink"
        >
          {isOpen ? "Hide Case Study" : "View Case Study"}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const visible = projects.filter((p) => p.featured);
  const featured = visible.filter((p) => p.large);
  const rest = visible.filter((p) => !p.large);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <SectionHeading
        eyebrow="GitHub Projects"
        title="Featured Case Studies"
        description="Hands-on security and automation projects, documented on GitHub."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
