import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";
import StatusCard from "./StatusCard";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mission-top"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-mono text-sm text-text-secondary">{profile.location}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-text sm:text-xl">{profile.heroTagline}</p>
          <p className="mt-4 max-w-xl text-text-secondary">
            {profile.currentRole} at {profile.currentCompany}, currently on the{" "}
            {profile.currentProject} project &mdash; building hands-on skills toward a{" "}
            <span className="rounded bg-panel/60 px-1.5 py-0.5 font-medium text-text">
              {profile.careerGoal}
            </span>{" "}
            career.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-panel bg-panel/50 px-3 py-1 text-xs text-text-secondary"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection("case-studies")}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-text transition-opacity hover:opacity-90"
            >
              View Case Studies
            </button>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full py-2 text-sm text-text-secondary hover:text-text"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <StatusCard />
        </div>
      </div>

      <button
        onClick={() => scrollToSection("mission")}
        aria-label="Scroll to Mission section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-text-secondary hover:text-text"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  );
}
