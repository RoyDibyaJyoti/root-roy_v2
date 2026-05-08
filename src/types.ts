export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "DevOps" | "Security" | "Tools";
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  purpose: string;
  problem: string;
  architecture: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string;
  decisions: string;
  futureWork?: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
  date: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech?: string[];
  iconType: "code" | "security" | "intel" | "growth";
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl: string;
    avatar: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram?: string;
  };
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certificates: Certificate[];
  achievements: Achievement[];
  journey: JourneyItem[];
}
