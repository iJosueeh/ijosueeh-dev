export interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface ExperienceData {
  title: string;
  jobs: Job[];
}

export interface ExperienceCardProps {
  job: Job;
}
