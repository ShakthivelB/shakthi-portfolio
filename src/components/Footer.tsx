import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { profile } from "../data/profile";

const SOCIAL_LINKS = [
  { label: "GitHub", href: profile.links.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.links.linkedin, icon: FaLinkedin },
  { label: "Medium", href: profile.links.medium, icon: FaMedium },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg uppercase tracking-wide text-text">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">{profile.careerGoal}</p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wide text-text-secondary">
            {profile.focusAreas.map((area, i) => (
              <span key={area} className="flex items-center gap-3">
                {area}
                {i < profile.focusAreas.length - 1 && (
                  <span className="text-border-strong" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="text-text-secondary transition-colors hover:text-accent"
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-4 font-mono text-[11px] text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
