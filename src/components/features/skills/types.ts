export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export interface SkillItem {
  name: string;
  icon?: string;
  level?: SkillLevel;
}

export interface SkillCategoryData {
  title: string;
  skills: SkillItem[];
}

export interface SkillCardProps {
  skill: SkillItem;
}

export interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
  index: number;
}
