import { defineRecipe } from "@pandacss/dev";

// Re-skinned 1:1 from the original site's `.button` / `.button.primary` /
// `.button.icon-only` rules in styles.css, using the new design tokens.
export const buttonRecipe = defineRecipe({
  className: "button",
  description: "Primary action button, matches the original site's .button styles",
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: "1px solid {colors.line}",
    borderRadius: "8px",
    backgroundColor: "surface",
    color: "text",
    fontWeight: "800",
    fontFamily: "sans",
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(24, 27, 29, 0.06)",
    transition: "transform {durations.fast}, outline-color {durations.fast}",
    _hover: {
      transform: "translateY(-1px)",
      outline: "2px solid rgba(68, 82, 102, 0.2)",
      outlineOffset: "2px",
    },
    _focusVisible: {
      transform: "translateY(-1px)",
      outline: "2px solid rgba(68, 82, 102, 0.2)",
      outlineOffset: "2px",
    },
    _disabled: {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: "accent",
        backgroundColor: "accent",
        color: "#ffffff",
      },
      secondary: {
        borderColor: "line",
        backgroundColor: "surface",
        color: "text",
      },
      outline: {
        borderColor: "line",
        backgroundColor: "transparent",
        color: "text",
      },
    },
    size: {
      sm: { minHeight: "40px", padding: "0 18px", fontSize: "sm" },
      md: { minHeight: "54px", padding: "0 28px", fontSize: "base" },
      lg: { minHeight: "60px", padding: "0 34px", fontSize: "md" },
    },
    iconOnly: {
      true: {
        width: "54px",
        minHeight: "54px",
        padding: 0,
        fontSize: "22px",
        lineHeight: 1,
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "md",
    iconOnly: false,
  },
});
