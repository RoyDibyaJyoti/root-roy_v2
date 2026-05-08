import React from "react";
import { Terminal, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-[var(--card-border)] bg-[var(--bg-color)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--accent-color),transparent_70%)]" />
      </div>

      <div className="max-width-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="p-2 rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)]">
              <Terminal size={20} />
            </div>
            <span className="font-bold text-xl tracking-tighter text-[var(--text-primary)]">
              root<span className="text-[var(--accent-color)]">@</span>roy
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-black hover:text-[var(--accent-color)] transition-all uppercase tracking-[0.3em] text-[var(--text-primary)] hover:-translate-y-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t-2 border-[var(--card-border)]">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--text-secondary)] font-bold">
            © {currentYear} • ALL_SYSTEMS_OPERATIONAL
          </div>
          
          <div className="flex items-center gap-6">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Github</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Linkedin</a>
            <a href={portfolioData.socials.twitter} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest hover:text-[var(--accent-color)] transition-colors">Twitter</a>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] font-bold">
            DESIGNED_BY <span className="text-[var(--accent-color)] font-black italic">DIBYA_JYOTI_ROY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-color)] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
