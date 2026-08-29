import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const CONTACT_LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: "GitHub", value: "ShakthivelB", href: profile.links.github, icon: FaGithub, external: true },
  {
    label: "LinkedIn",
    value: "shakthi-vel-b",
    href: profile.links.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  { label: "Medium", value: "@shakthisv90", href: profile.links.medium, icon: FaMedium, external: true },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="connect" aria-label="Contact" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Connect"
          title="Get in touch"
          description="Open to conversations about SOC Analyst opportunities."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-panel bg-card p-5 transition-colors hover:border-accent/40"
            >
              <link.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <p className="text-xs text-muted">{link.label}</p>
                <p className="text-sm text-text">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
