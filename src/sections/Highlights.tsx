import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { Award, Trophy, ExternalLink } from "lucide-react";

export function Highlights() {
  return (
    <section id="highlights" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certificates */}
          <div>
            <SectionHeading title="Certifications" align="left" />
            <div className="space-y-4">
              {portfolioData.certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="flex items-center gap-6 p-4 hover:bg-[var(--accent-color)]/5 transition-colors">
                    <div className="p-3 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/20">
                      <Award size={24} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg">{cert.name}</h4>
                      <p className="text-sm text-slate-500">{cert.issuer} • {cert.date}</p>
                    </div>
                    <a
                      href={cert.link}
                      className="text-slate-400 hover:text-[var(--accent-color)] transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionHeading title="Achievements" align="left" />
            <div className="space-y-6">
              {portfolioData.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                      <Trophy size={80} />
                    </div>
                    <div className="relative z-10">
                      <div className="text-[var(--accent-color)] font-mono text-sm mb-2">{ach.date}</div>
                      <h4 className="text-xl font-bold mb-2">{ach.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {ach.description}
                      </p>
                      {ach.metric && (
                        <div className="inline-block px-3 py-1 bg-[var(--accent-color)] text-slate-950 dark:text-slate-950 rounded-full text-xs font-bold uppercase tracking-widest">
                          {ach.metric}
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
