import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { blogs } from "../data/blogs";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blogs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="blogs" aria-label="Blogs" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Blogs"
          title="Technical Writing"
          description="Write-ups from Medium — bug bounty findings, SOC lab investigations, and security research."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.url}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="flex flex-col rounded-xl border border-panel bg-card p-5 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-xs text-muted">{formatDate(blog.publishedDate)}</span>
              <h3 className="mt-2 text-base font-medium text-text">{blog.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{blog.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-panel bg-panel/50 px-2.5 py-0.5 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-4 flex items-center gap-1.5 text-sm text-accent">
                Read on Medium
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
