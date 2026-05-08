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
    <section id="skills" className="section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive toolkit built through years of learning and practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat as keyof typeof categoryIcons] || Code2;
            const catSkills = portfolioData.skills.filter((s) => s.category === cat);

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="h-full group hover:border-[var(--accent-color)]/30 border-[var(--card-border)] bg-[var(--card-bg)] transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 text-[var(--text-secondary)] dark:text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-black transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{cat}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {catSkills.map((skill) => {
                      const getStatus = (level: number) => {
                        if (level >= 85) return { icon: "●", label: "active", color: "text-[var(--accent-color)]" };
                        if (level >= 70) return { icon: "◉", label: "developing", color: "text-amber-500" };
                        return { icon: "○", label: "familiar", color: "text-slate-400" };
                      };
                      const status = getStatus(skill.level);

                      return (
                        <div 
                          key={skill.name} 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-[var(--card-border)] group/skill hover:border-[var(--accent-color)]/30 transition-all duration-300"
                        >
                          <span className={`${status.color} font-mono text-[10px]`}>{status.icon}</span>
                          <span className="text-sm font-medium text-[var(--text-secondary)] font-mono">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
