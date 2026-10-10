import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Lightbulb,
  FlaskConical,
  Bug,
  Search,
  PenLine,
  Building2,
  Radar,
  Target,
  Circle,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { journey } from "../data/journey";

const NODE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  BCA: GraduationCap,
  "Cybersecurity Discovery": Lightbulb,
  "Hands-on Labs": FlaskConical,
  "Bug Bounty": Bug,
  "Security Research": Search,
  "Technical Blogging": PenLine,
  IBM: Building2,
  "SOC Home Lab": Radar,
  "Aspiring SOC Practitioner": Target,
};

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" aria-label="Career Journey" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Journey" title="Career &amp; Learning Journey" />

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-border lg:block" />

          <ol className="space-y-8 border-l border-border pl-8 lg:space-y-14 lg:border-l-0 lg:pl-0">
            {journey.map((node, i) => {
              const Icon = NODE_ICONS[node.title] ?? Circle;
              const isLeft = i % 2 === 0;
              const hasDate = node.date !== "TODO";

              const content = (
                <>
                  <div
                    className={`flex flex-wrap items-baseline gap-2 ${isLeft ? "lg:justify-end" : ""}`}
                  >
                    <h3 className="text-sm font-medium text-text">{node.title}</h3>
                    {hasDate && <Badge>{node.date}</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{node.description}</p>
                </>
              );

              return (
                <motion.li
                  key={node.title}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: isLeft ? -12 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-10"
                >
                  <span className="absolute -left-11 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-card lg:hidden">
                    <Icon className="h-3 w-3 text-ink-secondary" aria-hidden="true" />
                  </span>

                  {isLeft ? (
                    <>
                      <div className="lg:pr-10 lg:text-right">{content}</div>
                      <div aria-hidden="true" className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" className="hidden lg:block" />
                      <div className="lg:pl-10">{content}</div>
                    </>
                  )}

                  <span className="absolute left-1/2 top-0.5 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-card lg:flex">
                    <Icon className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
