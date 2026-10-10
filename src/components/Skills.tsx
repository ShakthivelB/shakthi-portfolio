import type { ComponentType } from "react";
import { Radar, Bug, Code2, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ToolCard from "./ToolCard";
import { skillCategories } from "../data/skills";

const CATEGORY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "Security Operations": Radar,
  "Offensive Security / Bug Bounty": Bug,
  Programming: Code2,
  "Enterprise Technologies": Building2,
};

const CORE_COUNT = 3;

export default function Skills() {
  return (
    <section id="toolkit" aria-label="Security Toolkit" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Cybersecurity Toolkit"
          description="Tools used hands-on across SOC labs, bug bounty research, and the current role at IBM."
        />

        <div className="space-y-12">
          {skillCategories.map((group) => {
            const Icon = CATEGORY_ICONS[group.category];
            const core = group.tools.slice(0, CORE_COUNT);
            const rest = group.tools.slice(CORE_COUNT);

            return (
              <div key={group.category}>
                <h3 className="mb-4 flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4 text-text-secondary" />}
                  <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                    {group.category}
                  </span>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {core.map((tool, i) => (
                    <ToolCard key={tool.name} tool={tool} category={group.category} index={i} variant="featured" />
                  ))}
                </div>

                {rest.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                    {rest.map((tool, i) => (
                      <ToolCard key={tool.name} tool={tool} category={group.category} index={i} variant="compact" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
