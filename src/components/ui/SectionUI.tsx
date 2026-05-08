import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-20", align === "center" ? "text-center" : "text-left")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[var(--accent-color)] font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block font-bold">
          {title.toUpperCase()}
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter text-[var(--text-primary)] leading-[1] italic-serif">
          {title}
        </h2>
        <div className={cn("w-20 h-1 bg-[var(--accent-color)] mb-8", align === "center" ? "mx-auto" : "ml-0")} />
        {subtitle && (
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto md:mx-0 text-lg md:text-xl leading-relaxed font-normal tracking-tight">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn("glass-card", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
