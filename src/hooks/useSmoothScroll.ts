import { useEffect } from "react";

// Nav-offset-aware smooth scroll for in-page anchors — matches the original
// site's `scroll-padding-top: 84px` (72px sticky header + a little breathing
// room), just done in JS so it also accounts for the mobile CTA reordering.
const NAV_OFFSET = 84;

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (!element) return;

      event.preventDefault();
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - NAV_OFFSET;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
