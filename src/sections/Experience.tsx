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
          title="Milestones"
          subtitle="A narrative of growth, scholarship, and technical contributions."
        />

        <div className="space-y-32">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
            >
              {/* Left Side: Meta */}
              <div className="lg:col-span-4 space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-[var(--card-border)] bg-[var(--card-bg)] shadow-md">
                  <Calendar size={14} className="text-[var(--accent-color)]" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    {exp.duration}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter text-[var(--accent-color)]">
                    {exp.role}
                  </h3>
                  <div className="text-xl font-bold text-[var(--text-primary)] opacity-80">
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-stone-100 dark:bg-white/10 text-[10px] font-bold font-mono text-[var(--text-secondary)] uppercase tracking-tighter border-2 border-stone-200 dark:border-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Detailed Impact */}
              <div className="lg:col-span-8 flex flex-col justify-start">
                <div className="space-y-8">
                  <div className="text-[9px] font-mono text-[var(--accent-color)] font-bold tracking-[0.4em] uppercase mb-4">
                    MILESTONE_LOG: {idx + 1}
                  </div>
                  <ul className="grid grid-cols-1 gap-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="group flex items-start gap-8">
                        <div className="mt-2 text-[var(--accent-color)] font-mono text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                          0{i + 1}
                        </div>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-snug italic-serif">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
