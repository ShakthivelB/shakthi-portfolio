import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { scrollToSection } from "../lib/scroll";
import { profile } from "../data/profile";

const COMMANDS: Record<string, { description: string; run: () => void }> = {
  help: {
    description: "List available commands",
    run: () => {},
  },
  about: { description: "Jump to Mission", run: () => scrollToSection("mission") },
  projects: { description: "Jump to Case Studies", run: () => scrollToSection("case-studies") },
  research: { description: "Jump to Research", run: () => scrollToSection("research") },
  skills: { description: "Jump to Toolkit", run: () => scrollToSection("toolkit") },
  blogs: { description: "Jump to Blogs", run: () => scrollToSection("blogs") },
  certs: { description: "Jump to Certifications", run: () => scrollToSection("certifications") },
  github: {
    description: "Open GitHub profile",
    run: () => window.open(profile.links.github, "_blank", "noopener,noreferrer"),
  },
  contact: { description: "Jump to Connect", run: () => scrollToSection("connect") },
};

const HELP_TEXT = Object.entries(COMMANDS)
  .map(([name, cmd]) => `  ${name.padEnd(10)} ${cmd.description}`)
  .join("\n");

interface LogLine {
  input: string;
  output: string;
}

const INTRO_TEXT = `Type "help" to see available commands.`;

export default function Terminal() {
  const shouldReduceMotion = useReducedMotion();
  const [input, setInput] = useState("");
  const [log, setLog] = useState<LogLine[]>([]);
  const [introText, setIntroText] = useState(shouldReduceMotion ? INTRO_TEXT : "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      const id = setTimeout(() => setIntroText(INTRO_TEXT), 0);
      return () => clearTimeout(id);
    }
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setIntroText(INTRO_TEXT.slice(0, i));
      if (i >= INTRO_TEXT.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    let output: string;
    if (command === "help") {
      output = HELP_TEXT;
    } else if (COMMANDS[command]) {
      COMMANDS[command].run();
      output = `Navigating to "${command}"...`;
    } else {
      output = `Command not found: "${command}". Type "help" for available commands.`;
    }

    setLog((prev) => [...prev, { input: command, output }]);
    setInput("");
  };

  return (
    <section id="terminal" aria-label="Interactive Terminal" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Terminal"
          title="Terminal"
          description="An alternative way to navigate the portfolio. Try 'help' to get started."
        />

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          onClick={() => inputRef.current?.focus()}
          className="cursor-text rounded-xl border border-panel bg-[#0a0e1a] p-4 font-mono text-sm shadow-inner"
        >
          <div className="mb-3 flex items-center gap-2 text-muted">
            <TerminalSquare className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs">shakthivel@portfolio:~$</span>
          </div>

          <div className="max-h-64 space-y-2 overflow-y-auto">
            <p className="whitespace-pre-wrap text-text-secondary">
              {introText}
              {!shouldReduceMotion && introText.length < INTRO_TEXT.length && (
                <span className="animate-pulse text-accent">_</span>
              )}
            </p>
            {log.map((line, i) => (
              <div key={i}>
                {line.input && <p className="text-accent-secondary">$ {line.input}</p>}
                <p className="whitespace-pre-wrap text-text-secondary">{line.output}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
            <span className="text-accent">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal command input"
              placeholder="type a command..."
              className="w-full flex-1 bg-transparent text-text outline-none placeholder:text-muted"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
