export interface ProjectItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
  repoUrl?: string;
}

export interface ProjectsData {
  title: string;
  items: ProjectItem[];
}

export interface ProjectCardProps {
  project: ProjectItem;
}
