import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { Code2, Server, Shield, Wrench, Layout } from "lucide-react";

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Security: Shield,
  DevOps: Code2,
  Tools: Wrench,
} as const;

export function Skills() {
  const categories = Array.from(new Set(portfolioData.skills.map((s) => s.category)));

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="max-width-container">
        <SectionHeading
          title="Technical Stack"
          subtitle="Specialized expertise in core systems engineering and security architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-300 dark:bg-white/20 border-2 border-stone-300 dark:border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat as keyof typeof categoryIcons] || Code2;
            const catSkills = portfolioData.skills.filter((s) => s.category === cat);

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="bg-[var(--card-bg)] p-12 lg:p-16 hover:bg-white dark:hover:bg-white/[0.03] transition-colors group"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--accent-color)]/10 border-2 border-[var(--accent-color)]/20 shadow-[0_0_15px_rgba(5,150,105,0.1)]">
                      <Icon size={14} className="text-[var(--accent-color)]" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-color)]">
                        CORE_{cat.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-[var(--text-primary)]">{cat}</h3>
                  </div>
                  <span className="text-7xl font-black opacity-[0.05] group-hover:opacity-[0.1] transition-opacity font-mono text-[var(--accent-color)]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                  {catSkills.map((skill) => (
                    <div key={skill.name} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold tracking-tight text-[var(--text-primary)] uppercase">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--accent-color)] font-black">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-[var(--accent-color)] rounded-full shadow-[0_0_15px_var(--accent-color)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
