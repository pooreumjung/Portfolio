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
  height: "100%",
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
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "12px",
  padding: "20px 22px",
  color: "text",
});

// Title sits on the same line as the active-period meta so the title (the
// bigger, bolder element) reads first — the period/status text is a quiet
// aside, not a separate line competing for the top of the card.
export const titleRowStyles = css({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "6px 12px",
});

export const periodStatusStyles = css({
  color: "muted",
  fontSize: "12px",
  fontWeight: "700",
  whiteSpace: "nowrap",
});

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

export const highlightMetricStyles = css({ color: "accent2" });

// No marginTop:"auto" here on purpose — tags should sit right after the
// highlight at a consistent height across cards. Cards wrap to 1 or 2 tag
// rows depending on label lengths, so pinning tags to the bottom would make
// them start at a different height in every card. footerRowStyles carries
// the flexible gap instead, so only the footer (not the tags) is bottom-pinned.
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

// Applied to just the first (most representative) stack tag so one thing in
// the tag row has visual weight instead of every tag competing equally.
export const tagPrimaryStyles = css({
  backgroundColor: "accentStrong",
  color: "#ffffff",
});

// The "+N" overflow chip — same footprint as a tag but visually recedes.
// Rendered as a <button> (opens the detail modal, which lists every stack
// tag) rather than plain text, so it's clear the rest aren't just hidden.
export const tagOverflowStyles = css({
  backgroundColor: "transparent",
  color: "muted",
  padding: "0 4px",
  border: "none",
  fontFamily: "inherit",
  cursor: "pointer",
  _hover: { color: "accentStrong" },
});

export const footerRowStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  marginTop: "auto",
  paddingTop: "12px",
  borderTop: "1px solid {colors.line}",
});

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

// "자세히 보기" — a button styled like footerActionLinkStyles but reset from
// its native <button> chrome since it triggers the modal, not a navigation.
export const detailLinkStyles = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: 0,
  border: "none",
  background: "none",
  color: "accentStrong",
  fontSize: "12px",
  fontWeight: "700",
  fontFamily: "inherit",
  cursor: "pointer",
  _hover: { color: "accent" },
});

// Gradient fallback banners for projects without an `image` — mirrors the
// original site's `.tone-1`..`.tone-5` rotation, cycling every 5 cards.
export const toneGradients = [
  "linear-gradient(135deg, #3b5169, #26313f)",
  "linear-gradient(135deg, #4b6d8c, #26313f)",
  "linear-gradient(135deg, #26313f, #10161d)",
  "linear-gradient(135deg, #3b5169, #4b6d8c)",
  "linear-gradient(135deg, #26313f, #4b6d8c)",
];
