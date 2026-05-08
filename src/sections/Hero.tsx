import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { portfolioData } from "../data/portfolio";
import { Terminal } from "../components/Terminal";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = portfolioData.personalInfo.role;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-height-[100vh] flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent-color)]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[var(--accent-color)]/5 blur-[100px]" />
      </div>

      <div className="max-width-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-color)] to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={portfolioData.personalInfo.avatar}
              alt="Avatar"
              className="relative w-32 h-32 rounded-full border-2 border-slate-200 dark:border-white/5 object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-white"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-[var(--accent-color)] mb-6 block tracking-[0.4em] uppercase text-[10px] font-bold">
            session: root@roy/home
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-[0.9] text-[var(--text-primary)]">
            {portfolioData.personalInfo.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-3xl text-[var(--text-secondary)] mb-10 min-h-[1.5em] font-mono">
            <span className="text-[var(--accent-color)] font-bold">{text}</span>
            <span className="w-1.5 h-8 bg-[var(--accent-color)] animate-pulse" />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.4 }}
           className="max-w-2xl mx-auto mb-12"
        >
          <Terminal />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {portfolioData.personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Button size="lg" onClick={() => window.location.href = "#projects"}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = "#contact"}>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center gap-6 text-[var(--text-secondary)]"
        >
          {[
            { Icon: Github, href: portfolioData.socials.github },
            { Icon: Linkedin, href: portfolioData.socials.linkedin },
            { Icon: Twitter, href: portfolioData.socials.twitter },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent-color)] dark:text-slate-400 dark:hover:text-[var(--accent-color)] transition-colors p-2"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
