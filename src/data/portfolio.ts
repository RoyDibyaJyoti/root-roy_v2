import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Dibya Jyoti Roy",
    role: "Systems & Security Researcher",
    tagline: "Exploring kernel depths and securing digital perimeters.",
    bio: "B.Tech CSE student at Andhra University under the ICCR Scholarship. Passionate about Linux/UNIX systems and high-performance development. I bridge the gap between low-level system understanding and modern web security.",
    location: "Visakhapatnam, India",
    email: "root@roy.local",
    resumeUrl: "#",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=roy",
  },
  socials: {
    github: "https://github.com/RoyDibyaJyoti",
    linkedin: "https://www.linkedin.com/in/dibya-usd/",
    twitter: "https://twitter.com/",
  },
  stats: [
    { label: "Systems Built", value: "10+" },
    { label: "Security Audits", value: "8" },
    { label: "Open Source", value: "25+" },
    { label: "Kernel Sessions", value: "1.5k" },
  ],
  skills: [
    { name: "C", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Web Development", level: 80, category: "Frontend" },
    { name: "C++", level: 75, category: "Backend" },
    { name: "Linux Administration", level: 85, category: "Security" },
    { name: "Penetration Testing", level: 60, category: "Security" },
    { name: "Networking", level: 55, category: "Security" },
    { name: "Flutter/Dart", level: 50, category: "Frontend" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
  ],
  projects: [
    {
      id: "1",
      title: "Security Analyser",
      description: "A comprehensive security auditing tool designed to perform deep analysis of system vulnerabilities, network configurations, and potential attack vectors. Focuses on providing actionable insights for system hardening.",
      tags: ["Python", "Security", "Auditing", "Systems"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      category: "Security Tools",
      githubUrl: "https://github.com/RoyDibyaJyoti/security-analyser",
      demoUrl: "#",
    },
    {
      id: "2",
      title: "Phishing AI Detector",
      description: "A machine learning-driven security tool designed to identify and flag sophisticated phishing attempts in real-time. Leverages pattern recognition to detect malicious URLs and content structure.",
      tags: ["Python", "TensorFlow", "Scikit-Learn", "Cybersecurity"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      category: "Security",
      githubUrl: "https://github.com/RoyDibyaJyoti/phishing-ai-detector",
      demoUrl: "#",
    },
    {
      id: "3",
      title: "QuantumTasks TODO",
      description: "A modern, high-performance task management ecosystem focused on developer productivity. Features a minimalist UI, keyboard-driven workflows, and efficient state management.",
      tags: ["TypeScript", "React", "State-Mgmt", "UI/UX"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
      category: "Productivity",
      githubUrl: "https://github.com/RoyDibyaJyoti/QuantumTasks_TODO",
      demoUrl: "#",
    },
  ],
  experience: [
    {
      company: "Andhra University",
      role: "B.Tech CSE Student & ICCR Scholar",
      duration: "2025 - Present",
      description: [
        "Recipient of the ICCR Scholarship for academic excellence in technical studies.",
        "Focusing on Operating Systems, Networks, and Computer Architecture.",
        "Actively contributing to self-hosted open source projects and internal labs.",
      ],
      skills: ["C", "Linux", "OS Internals"],
    },
  ],
  education: [
    {
      institution: "Andhra University",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2025 - 2029",
    },
  ],
  certificates: [
    {
      name: "Cybersecurity Fundamentals",
      issuer: "OffSec / Vendor",
      date: "2023",
      link: "#",
    },
  ],
  achievements: [
    {
      title: "Scholarship Award",
      description: "Awarded full funding for Engineering studies by the ICCR.",
      date: "2025",
      metric: "ICCR Scholar",
    },
  ],
};
