export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  period: string;
  bullets: string[];
  tags?: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  skills: string[];
  details: string[];
  isFlipped: boolean;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  publication?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface HeroInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}