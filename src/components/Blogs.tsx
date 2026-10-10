import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { blogs } from "../data/blogs";
import type { Blog } from "../data/blogs";

const TAG_TONE: Record<string, "solid" | "outline" | "warning" | "neutral"> = {
  "bug-bounty": "solid",
  soc: "outline",
  "threat-intelligence": "warning",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} tone={TAG_TONE[tag] ?? "neutral"} surface="light">
          {tag}
        </Badge>
      ))}
    </div>
  );
}

function BlogCard({ blog, delay, large }: { blog: Blog; delay: number; large?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay }}
      className={`flex flex-col transition-colors hover:border-accent-ink/40 ${
        large ? "panel-raised p-6" : "panel p-5"
      }`}
    >
      <span className="font-mono text-xs text-ink-muted">{formatDate(blog.publishedDate)}</span>
      <h3 className={`mt-2 font-medium text-ink ${large ? "text-xl" : "text-base"}`}>{blog.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-secondary">{blog.description}</p>

      <BlogTags tags={blog.tags} />

      <span className="mt-4 flex items-center gap-1.5 text-sm text-accent-ink">
        Read on Medium
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </span>
    </motion.a>
  );
}

export default function Blogs() {
  const [latest, ...rest] = blogs;

  return (
    <section id="blogs" aria-label="Blogs" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Blogs"
          title="Technical Writing"
          description="Write-ups from Medium — bug bounty findings, SOC lab investigations, and security research."
        />

        {latest && <BlogCard blog={latest} delay={0} large />}

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((blog, i) => (
            <BlogCard key={blog.url} blog={blog} delay={(i % 3) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
