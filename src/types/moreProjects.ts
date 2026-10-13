export interface MoreProject {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
}
