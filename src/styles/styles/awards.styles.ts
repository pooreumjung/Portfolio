import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "86px 32px" },
});

export const gridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: "16px",
});

export const cardStyles = css({
  padding: "24px 26px",
  display: "grid",
  gap: "10px",
});

export const issuerStyles = css({
  color: "warm",
  fontSize: "xs",
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
});

export const titleRowStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
});

export const titleStyles = css({
  margin: 0,
  color: "accentStrong",
  fontSize: "18px",
  fontWeight: "800",
});

export const periodStyles = css({ color: "muted", fontSize: "sm", fontWeight: "700" });

export const projectRowStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  paddingTop: "10px",
  borderTop: "1px solid {colors.line}",
});

export const projectLabelStyles = css({ color: "muted", fontSize: "sm" });

export const projectLinkStyles = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  color: "accentStrong",
  fontSize: "sm",
  fontWeight: "700",
  _hover: { color: "accent" },
});
