import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, X, Maximize2, Minus } from "lucide-react";
import { GlassCard } from "./ui/SectionUI";

const commands = {
  help: "Available commands: bio, skills, contact, clear, system, whoami",
  bio: "Dibya Jyoti Roy: B.Tech CSE student @ Andhra University. ICCR Scholar. Linux enthusiast.",
  skills: "C, Python, Web Dev, Linux, Networking, Cybersecurity.",
  contact: "Email: root@roy.local | LinkedIn: dibya-usd",
  system: "OS: Debian GNU/Linux 12 (bookworm) | Kernel: 6.1.0-amd64 | Shell: zsh",
  whoami: "root@roy",
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "resp"; content: string }[]>([
    { type: "resp", content: "Welcome to Roy-OS v1.0.0 (stable)" },
    { type: "resp", content: "Type 'help' to see available commands." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: "cmd", content: cmd }]);

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in commands) {
      setHistory((prev) => [...prev, { type: "resp", content: commands[cmd as keyof typeof commands] }]);
    } else {
      setHistory((prev) => [...prev, { type: "resp", content: `Command not found: ${cmd}. Type 'help' for assist.` }]);
    }

    setInput("");
  };

  return (
    <GlassCard className="p-0 overflow-hidden border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl flex flex-col h-[400px]">
      {/* Header */}
      <div className="bg-[var(--bg-color)] border-b border-[var(--card-border)] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-[var(--accent-color)]" />
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">session: root@roy</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)]/50" />
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="flex-grow p-5 font-mono text-xs overflow-y-auto space-y-2 custom-scrollbar bg-white dark:bg-transparent"
      >
        {history.map((item, i) => (
          <div key={i} className={item.type === "cmd" ? "text-[var(--accent-color)]" : "text-slate-600 dark:text-slate-300"}>
            {item.type === "cmd" ? (
              <span className="flex items-center gap-2">
                <span className="opacity-50 font-bold">$</span>
                <span className="font-bold">{item.content}</span>
              </span>
            ) : (
              <div className="whitespace-pre-wrap pl-4 leading-relaxed font-medium">{item.content}</div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-[var(--accent-color)] font-bold opacity-70">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-slate-900 dark:text-[var(--accent-color)] caret-[var(--accent-color)] font-bold"
            autoFocus
          />
        </form>
      </div>
    </GlassCard>
  );
}
