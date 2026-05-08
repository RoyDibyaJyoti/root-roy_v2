/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Footer, ScrollProgress } from "./components/Footer";
import { CustomCursor, LoadingScreen } from "./components/Effects";
import { BottomStatus } from "./components/BottomStatus";
import { AnimatePresence } from "motion/react";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load sections
const About = lazy(() => import("./sections/About").then(m => ({ default: m.About })));
const Journey = lazy(() => import("./sections/Journey").then(m => ({ default: m.Journey })));
const Skills = lazy(() => import("./sections/Skills").then(m => ({ default: m.Skills })));
const Projects = lazy(() => import("./sections/Projects").then(m => ({ default: m.Projects })));
const GithubActivity = lazy(() => import("./sections/GithubActivity").then(m => ({ default: m.GithubActivity })));
const Experience = lazy(() => import("./sections/Experience").then(m => ({ default: m.Experience })));
const Highlights = lazy(() => import("./sections/Highlights").then(m => ({ default: m.Highlights })));
const Contact = lazy(() => import("./sections/Contact").then(m => ({ default: m.Contact })));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <div className="relative min-h-screen cyber-grid">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <BottomStatus />
        
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20" />}>
            <About />
            <Journey />
            <Skills />
            <Projects />
            <GithubActivity />
            <Experience />
            <Highlights />
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
