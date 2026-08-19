export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  period: string;
  roles: string[];
  title: string;
  links?: ExperienceLink[];
  points: string[];
}
