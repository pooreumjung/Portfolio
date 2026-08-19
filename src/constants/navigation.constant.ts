import type { NavItem } from "@/types/navigation";

export const NAVIGATION_CONFIG = {
  scrollThreshold: 8,
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
