import { defineConfig } from "@pandacss/dev";
import * as recipes from "./src/styles/recipes";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",

  // Navigation/hamburger variants are toggled by runtime state, not
  // statically detectable — force every combination to be generated.
  staticCss: {
    recipes: {
      navigation: ["*"],
      hamburgerLine: ["*"],
    },
  },

  theme: {
    extend: {
      recipes: {
        button: recipes.buttonRecipe,
        card: recipes.cardRecipe,
        navigation: recipes.navigationRecipe,
        hamburgerLine: recipes.hamburgerLineRecipe,
      },
      breakpoints: {
        sm: "520px",
        md: "860px",
        lg: "1120px",
      },
      tokens: {
        colors: {
          // Cool gray/slate palette — swapped from the original warm-cream
          // brand colors (brown accent, beige surfaces) for a cooler, more
          // neutral portfolio look. Same token roles, new values.
          bg: { value: "#f7f8fa" },
          surface: { value: "#ffffff" },
          surfaceMuted: { value: "#eef1f5" },
          text: { value: "#14181f" },
          muted: { value: "#64748b" },
          line: { value: "#dde3ea" },
          accent: { value: "#3b5169" },
          accentStrong: { value: "#26313f" },
          accent2: { value: "#4b6d8c" },
        },
        fonts: {
          sans: {
            value:
              "var(--font-noto-sans-kr), -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
          },
        },
        fontSizes: {
          xs: { value: "12px" },
          sm: { value: "13px" },
          base: { value: "15px" },
          md: { value: "17px" },
          lg: { value: "21px" },
          xl: { value: "26px" },
          "2xl": { value: "32px" },
          "3xl": { value: "42px" },
          "4xl": { value: "clamp(52px, 7vw, 104px)" },
        },
        durations: {
          fast: { value: "150ms" },
          normal: { value: "220ms" },
          slow: { value: "600ms" },
        },
      },
      keyframes: {
        heroRise: {
          from: { opacity: "0", transform: "translateY(48px)", filter: "blur(6px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
    },
  },

  globalCss: {
    "*": { boxSizing: "border-box" },
    html: {
      scrollBehavior: "smooth",
      scrollPaddingTop: "84px",
    },
    body: {
      margin: 0,
      backgroundColor: "bg",
      color: "text",
      fontFamily: "sans",
      fontSize: "base",
      lineHeight: "1.6",
      wordBreak: "keep-all",
      overflowWrap: "break-word",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "@media (prefers-reduced-motion: reduce)": {
      html: { scrollBehavior: "auto" },
    },
  },
});
