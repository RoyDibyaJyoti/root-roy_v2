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
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[var(--accent-color)] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">
          {title.toLowerCase().replace(/\s+/g, '_')}.exe
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[var(--text-primary)] leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string; // Explicitly add it just in case
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn("glass-card rounded-2xl p-6 transition-all duration-300", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
