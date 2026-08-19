import { defineRecipe } from "@pandacss/dev";

// The site header (`.site-header` in the original CSS) — sticky, transparent,
// gains a hairline border once the page has scrolled.
export const navigationRecipe = defineRecipe({
  className: "site-header",
  base: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    width: "100%",
    minHeight: "72px",
    padding: "0 32px",
    backgroundColor: "bg",
    transition: "border-color {durations.normal}, box-shadow {durations.normal}",
    borderBottom: "1px solid transparent",
  },
  variants: {
    scrolled: {
      true: {
        borderBottomColor: "line",
        boxShadow: "0 8px 24px rgba(24, 27, 29, 0.05)",
      },
      false: {},
    },
  },
  defaultVariants: {
    scrolled: false,
  },
});

// Mobile hamburger icon — 3 bars that fold into an X when open.
export const hamburgerLineRecipe = defineRecipe({
  className: "hamburger-line",
  base: {
    width: "22px",
    height: "2px",
    backgroundColor: "text",
    transition: "transform {durations.fast}, opacity {durations.fast}",
    transformOrigin: "center",
  },
  variants: {
    open: {
      true: {},
      false: { transform: "none", opacity: 1 },
    },
    position: {
      top: {},
      middle: {},
      bottom: {},
    },
  },
  compoundVariants: [
    { open: true, position: "top", css: { transform: "translateY(6px) rotate(45deg)" } },
    { open: true, position: "middle", css: { opacity: 0 } },
    { open: true, position: "bottom", css: { transform: "translateY(-6px) rotate(-45deg)" } },
  ],
  defaultVariants: {
    open: false,
    position: "top",
  },
});
