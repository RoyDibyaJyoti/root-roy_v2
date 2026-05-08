import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import { portfolioData } from "../data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          const sections = ["home", "about", "journey", "skills", "projects", "github", "experience", "highlights", "contact"];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 120 && rect.bottom >= 120;
            }
            return false;
          });
          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-6 px-6",
        isScrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl shadow-sm border-b border-[var(--card-border)] py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 active:scale-95 shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative">
            <Terminal size={20} className="text-[var(--accent-color)] sm:w-[24px] sm:h-[24px]" />
            <div className="absolute -inset-2 bg-[var(--accent-color)]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tighter text-[var(--text-primary)]">
            root<span className="text-[var(--accent-color)]">@</span>roy
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <div className="flex items-center gap-5 xl:gap-8">
            {navLinks.map((link, idx) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "relative text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] transition-colors whitespace-nowrap",
                    isActive ? "text-[var(--accent-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--accent-color)] rounded-full"
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
          
          <div className="h-6 w-px bg-stone-300 dark:bg-white/20" />
          
          <div className="flex items-center gap-4 xl:gap-6">
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={() => window.open(portfolioData.personalInfo.resumeUrl, "_blank")} className="text-[10px] xl:text-xs uppercase font-black tracking-widest px-6 xl:px-8 py-4 xl:py-5 border-2 border-[var(--card-border)] bg-transparent hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 rounded-full shadow-sm">
              Resume
            </Button>
          </div>
        </div>

        {/* Tablet & Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 sm:gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]"
          >
            {mobileMenuOpen ? <X size={20} className="sm:w-[24px] sm:h-[24px]" /> : <Menu size={20} className="sm:w-[24px] sm:h-[24px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[var(--nav-bg)]/95 backdrop-blur-2xl border-b border-[var(--card-border)] shadow-2xl px-6 py-10"
            >
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-black hover:text-[var(--accent-color)] transition-colors uppercase tracking-[0.2em] text-[var(--text-primary)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full pt-4 border-t border-[var(--card-border)]"
              >
                <Button size="lg" className="w-full text-xs font-black uppercase tracking-[0.2em] py-6" onClick={() => window.open(portfolioData.personalInfo.resumeUrl, "_blank")}>
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
