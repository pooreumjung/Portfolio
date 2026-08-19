export interface AwardLink {
  label: string;
  href: string;
}

export interface Award {
  title: string;
  issuer: string;
  period: string;
  project: string;
  links?: AwardLink[];
}
