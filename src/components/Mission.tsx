import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import StatTile from "./ui/StatTile";
import { metrics, profile } from "../data/profile";

const STORY = [
  {
    number: "01",
    statement: ["Why", "cybersecurity?"],
    answer:
      "I've always been curious about how things work. That curiosity turned into cybersecurity the day a tutor demonstrated unauthorized access to a web application — my first reaction wasn't fear, it was a simple question: how can someone access something they're not supposed to? That question turned into learning, learning turned into experimentation, and experimentation eventually became the career I wanted to build.",
  },
  {
    number: "02",
    statement: ["I like", "investigating."],
    answer:
      "I enjoy investigation — looking at logs, understanding alerts, tracing a chain of events back to a root cause, and figuring out what actually happened. SOC work is where that kind of curiosity turns into something useful: catching what matters, connecting the dots, and responding when it counts.",
  },
  {
    number: "03",
    statement: ["Think like", "the attacker."],
    answer:
      "Bug bounty pushes me to think like an attacker while ultimately working to protect the system. It keeps me engaged because it demands curiosity, reconnaissance, creativity, testing, and clear documentation — every target is a new puzzle.",
  },
];

export default function Mission() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="mission" aria-label="Mission" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Mission"
          title="Building toward a Security Operations career"
          description={`Security-focused, hands-on learning through home labs, bug bounty testing, and technical writing — with the goal of moving into a role as ${profile.careerGoal}.`}
        />

        <div className="grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          {STORY.map((item, i) => (
            <motion.div
              key={item.number}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="font-mono text-xs text-accent">{item.number}</span>
              <h3 className="mt-2 font-display text-3xl uppercase leading-tight text-text">
                {item.statement[0]}
                <br />
                {item.statement[1]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric, i) => (
            <StatTile
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              note={"note" in metric ? metric.note : undefined}
              delay={(i % 4) * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
