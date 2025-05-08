import type { LucideIcon } from 'lucide-react';

export interface CVExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
}

export interface CVEducation {
  id:string;
  institution: string;
  degree: string;
  period: string;
  description?: string[];
}

export interface CVSkill {
  id: string;
  name: string;
  category: string;
}

export interface CVProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface CVData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkill[];
  projects: CVProject[];
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date string
  excerpt: string;
  content: string; // Markdown or HTML string
  author: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
}
