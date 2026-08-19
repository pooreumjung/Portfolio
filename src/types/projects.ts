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
  /** Display string for the title-row meta, e.g. "2026.01 - 운영 중" or "2025.12 - 2026.02". */
  activePeriod: string;
  description: string;
  highlight?: string;
  /** Substring of `highlight` to render in an accent color, e.g. "50%" or "2등". */
  highlightMetric?: string;
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
