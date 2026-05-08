import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, X, Maximize2, Minus } from "lucide-react";
import { GlassCard } from "./ui/SectionUI";
import { portfolioData } from "../data/portfolio";

const commands = {
  help: "Available commands: about, skills, projects, contact, github, linkedin, clear, whoami, education, roadmap, system",
  about: () => portfolioData.personalInfo.bio,
  skills: () => portfolioData.skills.map(s => `[${s.level}%] ${s.name}`).join("\n"),
  projects: () => portfolioData.projects.map(p => `- ${p.title}: ${p.description}`).join("\n"),
  contact: () => `Email: ${portfolioData.personalInfo.email}\nLinkedIn: ${portfolioData.socials.linkedin}`,
  github: () => { window.open(portfolioData.socials.github, "_blank"); return "Opening GitHub..."; },
  linkedin: () => { window.open(portfolioData.socials.linkedin, "_blank"); return "Opening LinkedIn..."; },
  whoami: "guest@roy-os • Access Level: Restricted",
  education: () => portfolioData.education.map(e => `${e.degree} @ ${e.institution} (${e.duration})`).join("\n"),
  roadmap: "Current focus: Secure Distributed Systems, Zero Trust Architecture, Kernel-level Security.",
  system: "OS: Roy-OS v1.0.0 (stable)\nKERNEL: lts-6.1.x-sec\nSHELL: zsh\nUPTIME: 1337h",
};

const TerminalHistory = React.memo(({ history }: { history: { type: "cmd" | "resp"; content: string }[] }) => {
  return (
    <>
      {history.map((item, i) => (
        <div key={i} className={item.type === "cmd" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}>
          {item.type === "cmd" ? (
            <span className="flex items-start gap-2 sm:gap-3">
              <span className="text-[var(--accent-color)] font-black">❯</span>
              <span className="font-bold break-all">{item.content}</span>
            </span>
          ) : (
            <div className="whitespace-pre-wrap pl-4 sm:pl-6 leading-relaxed font-medium border-l-2 border-[var(--accent-color)]/10 ml-1 sm:ml-1.5 py-1 text-[10px] sm:text-xs md:text-sm">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </>
  );
});

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "resp"; content: string }[]>([
    { type: "resp", content: "INITIALIZING CRYPTO-CORES... [OK]" },
    { type: "resp", content: "LOADING SECURITY MODULES... [OK]" },
    { type: "resp", content: "ESTABLISHING SECURE CHANNEL... [OK]" },
    { type: "resp", content: "Welcome to Roy-OS v1.0.0 (stable)" },
    { type: "resp", content: "Type 'help' to see available commands." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: "cmd", content: cmd }]);

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in commands) {
      const resp = commands[cmd as keyof typeof commands];
      const content = typeof resp === "function" ? resp() : resp;
      setHistory((prev) => [...prev, { type: "resp", content }]);
    } else {
      setHistory((prev) => [...prev, { type: "resp", content: `ERR: Command '${cmd}' not recognized. Type 'help' for available procedures.` }]);
    }

    setInput("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mx-auto"
      onClick={focusInput}
    >
      <div className="relative group">
        {/* Decorative shadow glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-color)]/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        
        <GlassCard className="relative p-0 overflow-hidden border-2 border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl flex flex-col h-[400px] sm:h-[450px] md:h-[500px] rounded-xl sm:rounded-2xl">
          {/* Header */}
          <div className="bg-[var(--bg-color)] border-b-2 border-[var(--card-border)] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/40" />
              </div>
              <div className="h-4 w-px bg-[var(--card-border)] mx-1" />
              <div className="flex items-center gap-2">
                <TerminalIcon size={12} className="text-[var(--accent-color)] sm:hidden" />
                <TerminalIcon size={14} className="text-[var(--accent-color)] hidden sm:block" />
                <span className="text-[8px] sm:text-[10px] font-mono font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] truncate max-w-[120px] sm:max-w-none">roy-os://root</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[var(--accent-color)] font-bold opacity-60">
              <span>CPU: 12%</span>
              <span>MEM: 2.4GB</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={scrollRef}
            className="flex-grow p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm overflow-y-auto space-y-3 sm:space-y-4 custom-scrollbar bg-white dark:bg-transparent selection:bg-[var(--accent-color)] selection:text-white"
          >
            <TerminalHistory history={history} />
            
            <form onSubmit={handleCommand} className="flex items-start gap-2 sm:gap-3 mt-4">
              <span className="text-[var(--accent-color)] font-black animate-pulse">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                className="bg-transparent border-none outline-none flex-grow text-[var(--text-primary)] caret-[var(--accent-color)] font-black w-full"
                autoFocus
              />
            </form>
          </div>
          
          {/* Footer Status */}
          <div className="bg-[var(--bg-color)] border-t-2 border-[var(--card-border)] px-4 sm:px-6 py-2 flex items-center justify-between text-[8px] sm:text-[9px] font-mono font-bold text-[var(--text-secondary)]">
            <div className="flex gap-3 sm:gap-4">
              <span className="hidden xs:inline">LN 1, COL 1</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] animate-pulse" />
              <span className="truncate">CONNECTED_SECURE</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}
