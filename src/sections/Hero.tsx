import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { portfolioData } from "../data/portfolio";
import { Terminal } from "../components/Terminal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[var(--accent-color)] blur-[100px] mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[15%] w-[8%] h-[8%] rounded-full bg-sky-500/5 blur-[60px]" />
      </div>

      <div className="max-width-container relative z-10 w-full px-6 py-12 md:py-24 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
          <div className="relative mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[14vw] sm:text-[10vw] lg:text-[6vw] font-black leading-[1] tracking-[-0.06em] mb-4 text-[var(--text-primary)]"
            >
              {portfolioData.personalInfo.name.toUpperCase()}
            </motion.h1>
            <div className="h-2 w-32 bg-[var(--accent-color)] mb-8 shadow-[0_0_20px_var(--accent-color)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6 mb-10"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight uppercase leading-none">
                B.Tech CSE Student
              </p>
              <p className="text-lg sm:text-xl font-bold text-[var(--accent-color)] tracking-[0.2em] uppercase opacity-80">
                Systems & Security
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-secondary)] max-w-xl leading-relaxed italic-serif">
              {portfolioData.personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12"
          >
            <Button size="lg" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group" onClick={() => (window.location.href = "#projects")}>
              View Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2 inline-block"
              >
                →
              </motion.span>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base" onClick={() => (window.location.href = "#contact")}>
              Contact
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
              <Github size={24} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.socials.twitter} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7 w-full relative">
          <div className="absolute inset-0 bg-[var(--accent-color)]/5 blur-[100px] rounded-full -z-10" />
          <Terminal />
        </div>
      </div>

      {/* Decorative vertical rails */}
      <div className="absolute right-12 bottom-20 hidden lg:block overflow-hidden h-40 w-10">
        <div className="flex flex-col gap-8 opacity-20">
          <div className="h-20 w-px bg-[var(--text-secondary)] mx-auto" />
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[10px] tracking-[0.5em] text-[var(--text-secondary)] uppercase">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
