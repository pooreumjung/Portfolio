import { css } from "@/styled-system/css";

export const overlayStyles = css({
  position: "fixed",
  inset: 0,
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  backgroundColor: "rgba(24, 27, 29, 0.55)",
});

export const modalStyles = css({
  position: "relative",
  width: "min(760px, 100%)",
  maxHeight: "min(820px, 90vh)",
  borderRadius: "16px",
  backgroundColor: "surface",
  boxShadow: "0 30px 80px rgba(24, 27, 29, 0.35)",
});

export const scrollStyles = css({
  maxHeight: "min(820px, 90vh)",
  overflowY: "auto",
  padding: "44px 44px 36px",
});

export const closeButtonStyles = css({
  position: "absolute",
  top: "16px",
  right: "16px",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "34px",
  height: "34px",
  border: "1px solid {colors.line}",
  borderRadius: "50%",
  backgroundColor: "surface",
  color: "muted",
  fontSize: "14px",
  cursor: "pointer",
  transition: "border-color {durations.fast}, color {durations.fast}",
  _hover: { borderColor: "accent", color: "accent" },
  _focusVisible: { borderColor: "accent", color: "accent", outline: 0 },
});

export const titleStyles = css({
  margin: "0 0 16px",
  paddingRight: "40px",
  fontSize: { base: "24px", md: "30px" },
  fontWeight: "800",
});

export const tagsStyles = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "28px",
});

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

export const sectionStyles = css({ marginBottom: "24px" });

export const sectionHeadingStyles = css({
  margin: "0 0 10px",
  color: "accent2",
  fontSize: "15px",
  fontWeight: "800",
});

export const sectionTextStyles = css({
  margin: 0,
  color: "muted",
  lineHeight: "1.7",
});

export const sectionListStyles = css({
  margin: "10px 0 0",
  paddingLeft: "18px",
  listStyleType: "disc",
  color: "muted",
  lineHeight: "1.8",
  "& li::marker": { color: "accent" },
});

export const inlineLinkStyles = css({
  color: "accentStrong",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  _hover: { color: "accent2" },
});

export const linksRowStyles = css({
  display: "flex",
  gap: "8px",
  marginTop: "28px",
  paddingTop: "24px",
  borderTop: "1px solid {colors.line}",
});
