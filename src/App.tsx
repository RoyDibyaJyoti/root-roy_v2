/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Highlights } from "./sections/Highlights";
import { Contact } from "./sections/Contact";
import { Footer, ScrollProgress } from "./components/Footer";
import { CustomCursor, LoadingScreen } from "./components/Effects";
import { AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

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
      
      <div className="relative min-h-screen radial-glow cyber-grid">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Highlights />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
