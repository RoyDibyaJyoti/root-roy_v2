import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, Github, Search } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

  const filteredProjects = portfolioData.projects.filter((p) => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                         p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/10">
      <div className="max-width-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my best work, ranging from desktop apps to complex security systems."
        />

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-[var(--accent-color)] text-black shadow-lg shadow-[var(--accent-color)]/20"
                    : "bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--card-border)] hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input
              type="text"
              placeholder="Search tech or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] text-sm transition-all text-[var(--text-primary)]"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="group p-0 overflow-hidden h-full flex flex-col border-[var(--card-border)] bg-[var(--card-bg)]">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-[var(--accent-color)] text-black text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest shadow-xl">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent-color)] transition-colors text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-50 dark:bg-white/5 text-[var(--text-secondary)] text-[10px] font-mono rounded-md border border-[var(--card-border)]"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-[var(--card-border)]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors"
                      >
                        <Github size={18} />
                        Source
                      </a>
                      {project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 text-lg">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
