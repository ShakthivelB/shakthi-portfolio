import SectionHeading from "./SectionHeading";
import ToolCard from "./ToolCard";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="toolkit" aria-label="Security Toolkit" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Cybersecurity Toolkit"
          description="Tools used hands-on across SOC labs, bug bounty research, and the current role at IBM."
        />

        <div className="space-y-10">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 inline-block rounded-full bg-panel px-3 py-1 font-mono text-xs uppercase tracking-wider text-text-secondary">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {group.tools.map((tool, i) => (
                  <ToolCard key={tool.name} tool={tool} category={group.category} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
