import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";
import StatusCard from "./StatusCard";
import Badge from "./ui/Badge";
import { scrollToSection } from "../lib/scroll";

const SecurityGlobe = lazy(() => import("./SecurityGlobe"));

function GlobePlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="h-72 w-72 animate-pulse rounded-full border border-card-border bg-card sm:h-80 sm:w-80 lg:h-96 lg:w-96"
    />
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mission-top"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-sm text-text-secondary">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location}
          </div>
          <h1 className="font-display text-6xl uppercase tracking-tight text-text sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-text-secondary sm:text-xl">
            {profile.heroTagline}
          </p>
          <p className="mt-5 max-w-xl text-text-secondary">
            {profile.currentRole} at {profile.currentCompany}, currently on the{" "}
            {profile.currentProject} project &mdash; building hands-on skills toward a{" "}
            <span className="font-medium text-text">{profile.careerGoal}</span> career.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <Badge key={area} tone="solid">
                {area}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection("case-studies")}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              Explore Case Studies →
            </button>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-text-secondary transition-colors hover:text-text"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              GitHub →
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-8 lg:items-end">
          <div className="flex justify-center">
            <Suspense fallback={<GlobePlaceholder />}>
              <SecurityGlobe />
            </Suspense>
          </div>
          <p className="select-none text-center font-mono text-[11px] uppercase tracking-wide text-text-secondary">
            <span className="text-muted">Security Activity Visualization — Illustrative Data</span>
            <br />
            Bengaluru, India
            <br />
          </p>
          <div className="relative flex w-full justify-center lg:justify-end">
            <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-border-strong" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-border-strong" />
            <StatusCard />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("mission")}
        aria-label="Scroll to Mission section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-text-secondary transition-colors hover:text-text"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  );
}
