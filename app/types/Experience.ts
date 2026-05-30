export interface ExperienceItem {
  id: number;
  company: string;
  logo?: string; // optional, can be text placeholder
  title: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  description: string[];
  technologies: string[];
  highlights?: string[]; // for metrics, achievements
  stackType: 'core' | 'legacy';
  type: "exp" | "personal"
}