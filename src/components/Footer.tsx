import React from "react";
import { Terminal, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-width-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2 font-mono font-bold text-xl text-[var(--accent-color)]">
            <Terminal size={24} />
            <span>PORTFOLIO</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[var(--accent-color)] transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-100 dark:border-slate-900">
          <p className="text-slate-500 text-sm">
            © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-slate-500 text-sm">
            Built with <Heart size={14} className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
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
