import React from "react";
import { motion } from "motion/react";
import { SectionHeading, GlassCard } from "../components/ui/SectionUI";
import { portfolioData } from "../data/portfolio";
import { Code2, Shield, BrainCircuit, Rocket, Terminal as TerminalIcon } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "code": return Code2;
    case "security": return Shield;
    case "intel": return BrainCircuit;
    case "growth": return Rocket;
    default: return TerminalIcon;
  }
};

export function Journey() {
  return (
    <section id="journey" className="section-padding bg-[var(--bg-color)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-color)]/20 to-transparent hidden md:block" />
      
      <div className="max-width-container relative z-10">
        <SectionHeading 
          title="Technical Journey"
          subtitle="A linear trace of engineering expansion, from binary roots to secure intelligent systems."
        />

        <div className="space-y-12 md:space-y-0 relative">
          {portfolioData.journey.map((item, idx) => {
            const Icon = getIcon(item.iconType);
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-32 group">
                {/* Timeline Center Node (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-color)] border-4 border-[var(--accent-color)] z-20 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block transition-transform group-hover:scale-150" />
                
                {/* Content Side */}
                <motion.div 
                  className={`w-full md:w-[45%] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="p-8 border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-color)]/30 transition-colors group/card">
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-3 rounded-2xl bg-[var(--accent-color)]/10 text-[var(--accent-color)] group-hover/card:bg-[var(--accent-color)] group-hover/card:text-black transition-colors">
                        <Icon size={24} />
                      </div>
                      <span className="text-sm font-mono font-black text-[var(--accent-color)] tracking-tighter">
                        [{item.year}]
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="text-[10px] font-mono font-bold text-[var(--accent-color)] uppercase tracking-[0.3em] mb-6 block">
                      CORE_PHASE: {item.subtitle}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 italic-serif">
                      {item.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                      {item.tech?.map((t) => (
                        <span 
                          key={t}
                          className="px-3 py-1 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-full text-[9px] font-black font-mono text-[var(--text-secondary)] uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Decorative Year Label (Desktop) */}
                <div className={`absolute top-0 hidden md:block text-8xl font-black text-[var(--text-primary)] opacity-[0.03] pointer-events-none select-none ${isEven ? 'right-0' : 'left-0'}`}>
                  {item.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
