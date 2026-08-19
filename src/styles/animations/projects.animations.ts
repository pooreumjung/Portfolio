import type { Variants } from "framer-motion";

export const PROJECTS_ANIMATIONS_CONFIG = {
  cardDelayStep: 0.08,
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const projectsCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: PROJECTS_ANIMATIONS_CONFIG.duration,
      ease: PROJECTS_ANIMATIONS_CONFIG.ease,
    },
  },
};
