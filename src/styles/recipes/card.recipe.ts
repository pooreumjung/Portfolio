import { defineRecipe } from "@pandacss/dev";

// Re-skinned from the original site's `.project-card` / `.about-*-card`
// treatments — soft surface card, warm shadow, subtle lift on hover.
export const cardRecipe = defineRecipe({
  className: "card",
  description: "Surface card with optional hover-lift, matches the original .project-card look",
  base: {
    border: "1px solid {colors.line}",
    borderRadius: "12px",
    backgroundColor: "surface",
    transition: "transform {durations.normal}, box-shadow {durations.normal}, border-color {durations.normal}",
  },
  variants: {
    variant: {
      default: {
        boxShadow: "0 14px 34px rgba(24, 27, 29, 0.08)",
      },
      muted: {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        boxShadow: "none",
      },
      bordered: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    hoverable: {
      true: {
        cursor: "pointer",
        _hover: {
          transform: "translateY(-3px)",
          boxShadow: "0 20px 44px rgba(24, 27, 29, 0.12)",
        },
        _focusWithin: {
          transform: "translateY(-3px)",
          boxShadow: "0 20px 44px rgba(24, 27, 29, 0.12)",
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "default",
    hoverable: false,
  },
});
