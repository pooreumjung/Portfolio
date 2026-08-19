import { BlogIcon, EmailIcon, GithubIcon, LinkedinIcon } from "@ui/icons/SocialIcons";
import type { ComponentType } from "react";

// Lookup map from a ProfileLink's `icon` key to its SVG component — mirrors
// the reference repo's contact-icons.ts / tag-icons.ts pattern.
export const contactIconMap: Record<string, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  blog: BlogIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
};
