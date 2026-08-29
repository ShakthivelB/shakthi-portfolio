import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import { SiIsc2, SiTryhackme, SiOwasp, SiTata } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { certifications, currentlyPursuing } from "../data/certifications";

const ISSUER_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  ISC2: SiIsc2,
  TryHackMe: SiTryhackme,
  Tata: SiTata,
};

function IssuerIcon({ issuer }: { issuer: string }) {
  const Icon = ISSUER_ICONS[issuer];
  if (Icon) return <Icon className="h-6 w-6 text-accent" aria-hidden="true" />;
  if (issuer.toLowerCase().includes("owasp"))
    return <SiOwasp className="h-6 w-6 text-accent" aria-hidden="true" />;
  return <Award className="h-6 w-6 text-accent" aria-hidden="true" />;
}

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" aria-label="Certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="flex items-start gap-4 rounded-xl border border-panel bg-card p-5"
            >
              <IssuerIcon issuer={cert.issuer} />
              <div>
                <h3 className="text-sm font-medium text-text">{cert.title}</h3>
                <p className="mt-1 text-xs text-text-secondary">{cert.issuer}</p>
                <span
                  className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs ${
                    cert.status === "Candidate"
                      ? "bg-warning/10 text-warning"
                      : "bg-success/10 text-success"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-accent/40 bg-card p-5">
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 shrink-0 text-warning" aria-hidden="true" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                Currently Pursuing
              </p>
              <h3 className="mt-1 text-sm font-medium text-text">{currentlyPursuing.title}</h3>
              <p className="mt-1 text-xs text-text-secondary">{currentlyPursuing.issuer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
