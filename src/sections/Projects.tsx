import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { ExternalLink, Github, X, Terminal, Layers, Shield, Cpu, Activity, Lightbulb, ArrowRight, Star, Clock, Code2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Project } from "../types";

async function fetchRepoData(url: string) {
  if (!url || url === "#" || !url.includes("github.com/")) return null;
  const parts = url.split("github.com/")[1].split("/");
  if (parts.length < 2) return null;
  const repo = `${parts[0]}/${parts[1]}`;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (res.ok) return res.json();
  } catch (e) {
    return null;
  }
  return null;
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [repoStats, setRepoStats] = useState<Record<string, any>>({});

  const categories = ["All", ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

  const filteredProjects = portfolioData.projects.filter((p) => {
    return filter === "All" || p.category === filter;
  });

  useEffect(() => {
    async function loadAllRepoStats() {
      const stats: Record<string, any> = {};
      await Promise.all(
        portfolioData.projects.map(async (project) => {
          if (project.githubUrl) {
            const data = await fetchRepoData(project.githubUrl);
            if (data) {
              stats[project.id] = {
                stars: data.stargazers_count,
                updated: new Date(data.updated_at).toLocaleDateString(),
                description: data.description,
                language: data.language
              };
            }
          }
        })
      );
      setRepoStats(stats);
    }
    loadAllRepoStats();
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="max-width-container">
        <SectionHeading
          title="Case Studies"
          subtitle="Engineering deep-dives into systems architecture, security research, and performance-critical development."
        />

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-20 border-b-2 border-[var(--card-border)] pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`group relative py-2 text-xs uppercase tracking-[0.3em] font-black transition-all ${
                filter === cat ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
              <motion.div
                className="absolute -bottom-[34px] left-0 right-0 h-1 bg-[var(--accent-color)]"
                initial={false}
                animate={{ scaleX: filter === cat ? 1 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              >
                <div 
                  className="group h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 group-hover:rotate-1 transition-transform duration-1000">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[var(--accent-color)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/90 via-[var(--bg-color)]/20 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <div className="px-6 py-3 bg-[var(--accent-color)] text-black rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2">
                          View Case Study <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono text-[var(--accent-color)] font-bold tracking-widest uppercase">
                        {project.category}
                      </span>
                      <div className="h-px flex-grow bg-[var(--card-border)]" />
                      <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                        PROJECT_INDEX: 0{idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] text-lg font-medium leading-relaxed mb-6 line-clamp-3 italic-serif font-medium">
                      {repoStats[project.id]?.description || project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8 pt-4 border-t border-[var(--card-border)]">
                      {repoStats[project.id] && (
                        <>
                          <div className="flex items-center gap-2 text-xs font-mono font-black text-[var(--accent-color)] uppercase tracking-widest">
                            <Star size={12} fill="currentColor" />
                            {repoStats[project.id].stars} Stars
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono font-black text-[var(--text-secondary)] uppercase tracking-widest">
                            <Clock size={12} />
                            Updated {repoStats[project.id].updated}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-[var(--bg-color)] text-[var(--text-primary)] text-[10px] font-bold font-mono border-2 border-[var(--card-border)] rounded-full uppercase tracking-tighter"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-4 py-2 text-[10px] font-bold font-mono text-[var(--text-secondary)]">
                          +{project.tags.length - 3} MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[var(--bg-color)]/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-96 w-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-[var(--card-bg)]/40 to-transparent" />
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 p-4 bg-[var(--bg-color)]/80 backdrop-blur-md rounded-full text-[var(--text-primary)] hover:scale-110 transition-transform border border-[var(--card-border)]"
                >
                  <X size={24} />
                </button>

                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 rounded-full bg-[var(--accent-color)] text-black text-[10px] font-black uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                    <div className="flex gap-4">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {selectedProject.demoUrl !== "#" && (
                        <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] tracking-tighter uppercase mb-2">
                    {selectedProject.title}
                  </h2>
                  {repoStats[selectedProject.id] && (
                    <div className="flex items-center gap-6 text-[10px] sm:text-xs font-mono font-black uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2 text-[var(--accent-color)]">
                        <Star size={14} fill="currentColor" />
                        {repoStats[selectedProject.id].stars} Stargazers
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <Clock size={14} />
                        Last Sync: {repoStats[selectedProject.id].updated}
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <Code2 size={14} />
                        {repoStats[selectedProject.id].language}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-grow overflow-y-auto custom-scrollbar p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  {/* Left Column: Context */}
                  <div className="lg:col-span-7 space-y-16">
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <Terminal size={20} className="text-[var(--accent-color)]" />
                        <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[var(--text-secondary)]">Executive Summary</h4>
                      </div>
                      <p className="text-2xl font-medium text-[var(--text-primary)] leading-relaxed italic-serif">
                        {selectedProject.purpose}
                      </p>
                    </section>

                    <section className="p-10 rounded-[32px] bg-[var(--bg-color)] border-2 border-[var(--card-border)]">
                      <div className="flex items-center gap-3 mb-6">
                        <Shield size={20} className="text-[var(--accent-color)]" />
                        <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[var(--text-secondary)]">The Problem</h4>
                      </div>
                      <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                        {selectedProject.problem}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-8">
                        <Layers size={20} className="text-[var(--accent-color)]" />
                        <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[var(--text-secondary)]">Architecture & Decisions</h4>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h5 className="text-sm font-black text-[var(--text-primary)] uppercase mb-3">System Design</h5>
                          <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                            {selectedProject.architecture}
                          </p>
                        </div>
                        <div className="p-8 rounded-3xl border-l-4 border-[var(--accent-color)] bg-[var(--accent-color)]/5">
                          <h5 className="text-sm font-black text-[var(--accent-color)] uppercase mb-3 flex items-center gap-2">
                            <Lightbulb size={16} /> Key Engineering Decision
                          </h5>
                          <p className="text-[var(--text-primary)] font-bold italic">
                            {selectedProject.decisions}
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Technical Details */}
                  <div className="lg:col-span-5 space-y-12">
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <Cpu size={20} className="text-[var(--accent-color)]" />
                        <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[var(--text-secondary)]">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <div key={tech} className="px-5 py-3 rounded-2xl bg-[var(--bg-color)] border-2 border-[var(--card-border)] text-xs font-bold font-mono text-[var(--text-primary)] uppercase tracking-tighter">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <Activity size={20} className="text-[var(--accent-color)]" />
                        <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[var(--text-secondary)]">Key Features</h4>
                      </div>
                      <ul className="space-y-4">
                        {selectedProject.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-[var(--card-border)] hover:border-[var(--accent-color)]/30 transition-colors bg-[var(--bg-color)]/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mt-2" />
                            <span className="text-sm font-bold text-[var(--text-primary)]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="p-8 rounded-3xl bg-red-500/5 border-2 border-red-500/10">
                      <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-red-500/60 mb-4">Implementation Challenges</h4>
                      <p className="text-xs font-bold leading-relaxed text-[var(--text-secondary)]">
                        {selectedProject.challenges}
                      </p>
                    </section>

                    {selectedProject.futureWork && (
                      <section>
                        <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-4">Future Roadmap</h4>
                        <div className="p-6 rounded-2xl border-2 border-dashed border-[var(--card-border)] text-xs font-medium text-[var(--text-secondary)] font-mono">
                          {selectedProject.futureWork}
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

