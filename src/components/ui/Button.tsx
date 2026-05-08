import React from "react";
import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[var(--accent-color)] text-slate-950 font-bold hover:brightness-105 shadow-md shadow-[var(--accent-color)]/20 active:shadow-sm",
    secondary: "bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--card-border)] hover:bg-slate-50 dark:hover:bg-white/5",
    outline: "border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] font-mono text-[10px] uppercase tracking-widest px-6",
    ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100/50 dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
