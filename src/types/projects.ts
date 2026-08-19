export interface ProjectLink {
  label: string;
  href: string;
}

export interface ContributionPoint {
  text: string;
  href?: string;
}

export type ProjectImageFit = "cover" | "contain" | "portrait" | "wide";

export interface Project {
  title: string;
  period: string;
  year: string;
  status: string;
  statusActive: boolean;
  description: string;
  highlight?: string;
  image?: string;
  imageFit?: ProjectImageFit;
  links?: ProjectLink[];
  stack: string[];
  intro: string;
  features: string[];
  contribution: string;
  contributionPoints: ContributionPoint[];
  wrapup?: string;
}
