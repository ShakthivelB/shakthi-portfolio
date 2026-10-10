import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import { FaMicrosoft } from "react-icons/fa";
import { SiIsc2, SiTryhackme, SiOwasp, SiTata } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { certifications, currentlyPursuing } from "../data/certifications";

const ISSUER_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  ISC2: SiIsc2,
  TryHackMe: SiTryhackme,
  Tata: SiTata,
  Microsoft: FaMicrosoft,
};

function IssuerIcon({ issuer }: { issuer: string }) {
  const Icon = ISSUER_ICONS[issuer];
  if (Icon) return <Icon className="h-6 w-6 text-ink-secondary" aria-hidden="true" />;
  if (issuer.toLowerCase().includes("owasp"))
    return <SiOwasp className="h-6 w-6 text-ink-secondary" aria-hidden="true" />;
  return <Award className="h-6 w-6 text-ink-secondary" aria-hidden="true" />;
}

function isConfirmedIssuer(issuer: string) {
  return !issuer.startsWith("TODO");
}

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const earned = certifications.filter((c) => c.status === "Completed");
  const candidate = certifications.filter((c) => c.status === "Candidate");

  return (
    <section id="certifications" aria-label="Certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Certifications" title="Certifications" />

        {candidate.length > 0 && (
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {candidate.map((cert) => (
              <motion.div
                key={cert.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className="panel-raised flex items-start gap-4 p-5"
              >
                <IssuerIcon issuer={cert.issuer} />
                <div>
                  <h3 className="text-sm font-medium text-ink">{cert.title}</h3>
                  {isConfirmedIssuer(cert.issuer) && (
                    <p className="mt-1 text-xs text-ink-secondary">{cert.issuer}</p>
                  )}
                  <Badge tone="warning" surface="light" className="mt-2">
                    {cert.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {earned.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="panel flex items-start gap-4 p-5"
            >
              <IssuerIcon issuer={cert.issuer} />
              <div>
                <h3 className="text-sm font-medium text-ink">{cert.title}</h3>
                {isConfirmedIssuer(cert.issuer) && (
                  <p className="mt-1 text-xs text-ink-secondary">{cert.issuer}</p>
                )}
                <Badge tone="success" surface="light" className="mt-2">
                  {cert.status}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 panel flex items-start gap-4 border-dashed border-accent-ink/40 p-5">
          <Clock className="h-6 w-6 shrink-0 text-warning-ink" aria-hidden="true" />
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">Currently Pursuing</p>
            <h3 className="mt-1 flex items-center gap-2 text-sm font-medium text-ink">
              <FaMicrosoft className="h-4 w-4 text-ink-secondary" aria-hidden="true" />
              {currentlyPursuing.title}
            </h3>
            <p className="mt-1 text-xs text-ink-secondary">{currentlyPursuing.issuer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
