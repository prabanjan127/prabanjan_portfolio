export interface Project {
  title: string;
  description: string;
  problemSolved?: string;
  contribution?: string;
  features?: string[];
  tags: string[];
  link: string;
  demo?: string;
  image: string;
  metrics: string;
  technologies: string[];
  isFeaturedPrimary?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  color: 'blue' | 'purple' | 'cyan' | 'emerald';
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  color: 'blue' | 'cyan' | 'purple';
}
