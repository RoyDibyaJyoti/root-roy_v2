import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[var(--accent-color)] pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0)",
      }}
    />
  );
}

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-slate-950 flex flex-col items-center justify-center font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[var(--accent-color)] text-xl mb-4"
      >
        INITIATING SECURE PROTOCOL...
      </motion.div>
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--accent-color)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-slate-500 text-sm">{progress}% COMPLETE</div>
    </motion.div>
  );
}
