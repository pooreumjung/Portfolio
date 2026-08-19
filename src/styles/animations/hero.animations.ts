// Matches the original site's `hero-rise` keyframe stagger: 150ms / 400ms /
// 650ms delays across the 3 hero-copy children (title, summary, action row).
export const heroAnimations = {
  block: {
    delays: [0.15, 0.4, 0.65],
    duration: 0.7,
  },
  parallax: {
    maxShift: 16,
    transitionMs: 650,
  },
} as const;
