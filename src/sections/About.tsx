import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { GraduationCap, Briefcase, MapPin, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Engineering Philosophy"
          subtitle="A perspective on building resilient systems that stand the test of complex environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-[0.02em]">
                Bridging the gap between <span className="text-[var(--accent-color)]">kernel code</span> and <span className="italic-serif">human experience.</span>
              </h3>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed italic-serif">
                {portfolioData.personalInfo.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-[var(--card-border)]">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--text-secondary)] block font-bold">
                  META_ORIGIN
                </span>
                <div className="flex items-center gap-3 text-lg font-bold text-[var(--text-primary)]">
                  <MapPin size={20} className="text-[var(--accent-color)]" />
                  <span>{portfolioData.personalInfo.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--text-secondary)] block font-bold">
                  META_CONNECT
                </span>
                <div className="flex items-center gap-3 text-lg font-bold text-[var(--text-primary)]">
                  <Mail size={20} className="text-[var(--accent-color)]" />
                  <span>{portfolioData.personalInfo.email}</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {portfolioData.stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl font-bold text-[var(--text-primary)] tracking-tight italic-serif">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-mono font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="glass rounded-[2rem] p-10 space-y-8 border-l-4 border-l-[var(--accent-color)]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--accent-color)]/10 rounded-2xl">
                  <GraduationCap className="text-[var(--accent-color)]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Academic Foundation</h3>
              </div>
              
              <div className="space-y-8">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-lg text-[var(--text-primary)] leading-snug">
                      {edu.degree}
                    </h4>
                    <div className="text-[var(--accent-color)] font-mono text-xs font-bold tracking-widest">
                      {edu.institution.toUpperCase()}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-bold tabular-nums">
                      {edu.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--accent-color)]/5 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-[2rem] p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-stone-100 dark:bg-white/10 rounded-2xl">
                    <Briefcase size={24} className="text-[var(--accent-color)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Trajectory</h3>
                </div>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed italic-serif font-medium">
                  "Aiming to architect secure and distributed systems that empower global users while contributing to the open-source community as a foundational engineer."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
