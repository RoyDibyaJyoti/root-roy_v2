import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { GraduationCap, Briefcase, MapPin, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-width-container">
        <SectionHeading
          title="About Me"
          subtitle="Software engineer, security enthusiast, and relentless learner."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Personal Journey
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin size={20} className="text-[var(--accent-color)]" />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail size={20} className="text-[var(--accent-color)]" />
                <span>{portfolioData.personalInfo.email}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {portfolioData.stats.map((stat, i) => (
                <div key={i}>
                  <GlassCard className="text-center p-4 border-[var(--card-border)]">
                    <div className="text-3xl font-bold text-[var(--accent-color)] mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-mono font-bold">
                      {stat.label}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[var(--accent-color)]" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
              {portfolioData.education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l border-[var(--card-border)] pb-8 last:pb-0"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[var(--accent-color)]" />
                  <h4 className="font-bold text-lg text-[var(--text-primary)]">{edu.degree}</h4>
                  <div className="text-[var(--accent-color)] font-mono text-sm mb-2 font-bold">{edu.institution}</div>
                  <div className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{edu.duration}</div>
                </div>
              ))}
            </div>

            {/* Career Goals */}
            <GlassCard className="border-l-4 border-[var(--accent-color)] bg-slate-50/30 dark:bg-white/5">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-[var(--text-primary)]">
                <Briefcase size={20} className="text-[var(--accent-color)]" />
                Career Goal
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed italic">
                Aiming to architect secure and distributed systems that empower global users while contributing to the open-source community.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
