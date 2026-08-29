import SectionHeading from "./SectionHeading";
import { metrics } from "../data/profile";

export default function Mission() {
  return (
    <section id="mission" aria-label="Mission" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mission"
          title="Building toward a Security Operations career"
          description="Security-focused, hands-on learning through home labs, bug bounty testing, and technical writing — with the goal of moving into a SOC Analyst role."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-panel border-t-2 border-t-accent bg-card p-4 text-center"
            >
              <p className="text-2xl font-semibold text-text">
                {metric.value}
                <span className="text-text-secondary">{metric.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-text-secondary">{metric.label}</p>
              {"note" in metric && metric.note && (
                <p className="mt-0.5 text-[11px] text-muted">{metric.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
