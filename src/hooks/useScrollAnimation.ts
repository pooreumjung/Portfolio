import { useInView } from "react-intersection-observer";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

// Thin wrapper over react-intersection-observer, matching the original
// site's `.reveal` IntersectionObserver behaviour (threshold 0.18, fires once).
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.18, triggerOnce = true } = options;

  return useInView({ triggerOnce, threshold });
}
