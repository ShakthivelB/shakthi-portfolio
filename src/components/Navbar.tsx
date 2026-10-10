import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

const NAV_ITEMS = [
  { label: "Mission", id: "mission" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Research", id: "research" },
  { label: "Blogs", id: "blogs" },
  { label: "Certifications", id: "certifications" },
  { label: "Toolkit", id: "toolkit" },
  { label: "Journey", id: "journey" },
  { label: "Terminal", id: "terminal" },
  { label: "Connect", id: "connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-bg/90 border-b border-border" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <button
          onClick={() => handleNavClick("mission")}
          className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-text"
          aria-label="Go to top"
        >
          <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
          <span>Shakthivel B</span>
        </button>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative border-b-2 px-1 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-text-secondary hover:text-text"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="-mr-2 rounded-lg p-2 text-text lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-4 pb-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`block w-full border-l-2 px-3 py-3 text-left text-sm ${
                  activeId === item.id
                    ? "border-accent text-accent"
                    : "border-transparent text-text-secondary hover:text-text"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
