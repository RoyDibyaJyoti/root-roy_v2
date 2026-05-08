import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { Award, Trophy, ExternalLink } from "lucide-react";

export function Highlights() {
  return (
    <section id="highlights" className="section-padding">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Certificates */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[var(--accent-color)] font-bold tracking-[0.4em] uppercase">
                EXTERNAL_VALIDATION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)] font-serif italic">
                Certifications
              </h2>
            </div>
            
            <div className="space-y-6">
              {portfolioData.certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-6 border-b-2 border-[var(--card-border)] group-hover:bg-[var(--accent-color)]/5 transition-all px-4 rounded-xl"
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-xl tracking-tight group-hover:text-[var(--accent-color)] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] font-bold">
                        {cert.issuer.toUpperCase()} — {cert.date}
                      </p>
                    </div>
                    <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} className="text-[var(--accent-color)]" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[var(--accent-color)] font-bold tracking-[0.4em] uppercase">
                BENCHMARK_METRICS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)] font-serif italic">
                Distinctions
              </h2>
            </div>

            <div className="space-y-8">
              {portfolioData.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[var(--accent-color)] font-mono text-sm font-black opacity-60">
                      0{i + 1}
                    </span>
                    <h4 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">{ach.title}</h4>
                  </div>
                  <p className="pl-10 text-lg text-[var(--text-secondary)] font-medium leading-relaxed italic-serif">
                    {ach.description}
                  </p>
                  {ach.metric && (
                    <div className="pl-10">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-white/10 border-2 border-stone-200 dark:border-white/10 rounded-full text-[11px] font-black uppercase tracking-widest text-[var(--accent-color)] shadow-sm">
                        <Trophy size={14} />
                        {ach.metric}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
