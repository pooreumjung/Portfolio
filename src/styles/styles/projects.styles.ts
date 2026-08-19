import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "86px 32px" },
});

export const gridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
  gap: "20px",
});

export const cardStyles = css({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
});

export const bannerStyles = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: "8px",
  aspectRatio: "16 / 9",
  padding: "24px 26px",
  overflow: "hidden",
});

export const imageBannerStyles = css({
  padding: 0,
  backgroundColor: "surfaceMuted",
});

export const bannerImageStyles = css({
  objectFit: "cover",
  objectPosition: "center",
});

export const bannerEyebrowStyles = css({
  position: "relative",
  zIndex: 1,
  color: "rgba(255, 255, 255, 0.75)",
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
});

export const bannerTitleStyles = css({
  position: "relative",
  zIndex: 1,
  color: "#ffffff",
  fontSize: { base: "21px", md: "27px" },
  fontWeight: "800",
  letterSpacing: "-0.01em",
  lineHeight: "1.2",
});

export const bodyStyles = css({
  display: "grid",
  flex: 1,
  gap: "12px",
  padding: "20px 22px",
  color: "text",
});

export const metaRowStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
});

export const yearStyles = css({ color: "muted", fontSize: "13px", fontWeight: "700" });

export const statusStyles = css({ color: "muted", fontSize: "12.5px", fontWeight: "700" });
export const statusActiveStyles = css({ color: "accentStrong" });

export const titleStyles = css({ color: "accentStrong", fontSize: "17px", fontWeight: "800" });

export const descriptionStyles = css({ margin: 0, color: "muted", fontSize: "12.5px", lineHeight: "1.55" });

export const highlightStyles = css({
  paddingLeft: "12px",
  borderLeft: "2px solid {colors.accent}",
});

export const highlightTextStyles = css({
  margin: 0,
  color: "accentStrong",
  fontSize: "12.5px",
  lineHeight: "1.55",
  fontWeight: "700",
});

export const tagRowStyles = css({ display: "flex", flexWrap: "wrap", gap: "6px" });

export const tagStyles = css({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "22px",
  padding: "0 8px",
  borderRadius: "999px",
  backgroundColor: "surfaceMuted",
  color: "accentStrong",
  fontSize: "11px",
  fontWeight: "700",
});

export const footerRowStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  marginTop: "2px",
  paddingTop: "12px",
  borderTop: "1px solid {colors.line}",
});

export const footerLabelStyles = css({ color: "muted", fontSize: "11.5px", fontWeight: "700" });

export const footerActionsStyles = css({ display: "flex", flexWrap: "wrap", gap: "16px" });

export const footerActionLinkStyles = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  color: "accentStrong",
  fontSize: "12px",
  fontWeight: "700",
  _hover: { color: "accent" },
});

// Gradient fallback banners for projects without an `image` — mirrors the
// original site's `.tone-1`..`.tone-5` rotation, cycling every 5 cards.
export const toneGradients = [
  "linear-gradient(135deg, #445266, #2c3644)",
  "linear-gradient(135deg, #8a5a44, #2c3644)",
  "linear-gradient(135deg, #2c3644, #10161d)",
  "linear-gradient(135deg, #445266, #8a5a44)",
  "linear-gradient(135deg, #2c3644, #8a5a44)",
];
