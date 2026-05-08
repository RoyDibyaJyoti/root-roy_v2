import React from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function BottomStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block"
    >
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--nav-bg)] backdrop-blur-xl border border-[var(--card-border)] shadow-2xl">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[var(--accent-color)]" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)]">root@roy</span>
        </div>
        <div className="h-3 w-px bg-[var(--card-border)]" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)] opacity-50 uppercase">Session_Active</span>
        </div>
      </div>
    </motion.div>
  );
}
