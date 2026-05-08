import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Professional Journey"
          subtitle="My career path, from early beginnings to current achievements."
        />

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--card-border)]">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--card-bg)] border-2 border-[var(--accent-color)] shadow shadow-[var(--accent-color)]/20 absolute left-0 md:left-1/2 md:-ml-5 z-10 transition-transform group-hover:scale-125">
                <Building2 size={16} className="text-[var(--accent-color)]" />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[calc(100%-4rem)] md:w-[45%] p-4"
              >
                <GlassCard className="border-[var(--card-border)] bg-[var(--card-bg)] group-hover:border-[var(--accent-color)]/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-[var(--accent-color)] font-mono text-xs bg-[var(--accent-color)]/10 px-3 py-1 rounded-full border border-[var(--accent-color)]/10">
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="text-base font-semibold text-[var(--text-secondary)] mb-4">
                    {exp.company}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--card-border)] px-2.5 py-1 rounded-md bg-[var(--bg-color)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
