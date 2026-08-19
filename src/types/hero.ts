export interface ProfileLink {
  label: string;
  href: string;
  icon: "github" | "blog" | "linkedin" | "email";
  primary?: boolean;
}

export interface Profile {
  name: string;
  summary: string;
  links: ProfileLink[];
  contacts: ProfileLink[];
}
