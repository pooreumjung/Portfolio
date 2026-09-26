import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "86px 32px" },
});

export const gridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
  gap: "16px",
});

export const cardStyles = css({
  height: "100%",
  padding: "26px 28px",
  display: "grid",
  alignContent: "start",
  gap: "18px",
});

export const valueStyles = css({
  margin: 0,
  color: "accentStrong",
  fontSize: { base: "32px", md: "38px" },
  lineHeight: "1.1",
  fontWeight: "800",
  letterSpacing: "-0.02em",
});

export const headlineStyles = css({ display: "grid", gap: "6px" });

export const labelStyles = css({
  margin: 0,
  color: "text",
  fontSize: "md",
  lineHeight: "1.4",
  fontWeight: "700",
});

export const detailStyles = css({ margin: 0, color: "muted", fontSize: "sm" });

export const rowsStyles = css({
  display: "grid",
  gap: "8px",
  paddingTop: "14px",
  borderTop: "1px solid {colors.line}",
});

export const rowStyles = css({
  display: "grid",
  gridTemplateColumns: "40px 1fr",
  gap: "10px",
  fontSize: "sm",
  lineHeight: "1.55",
});

export const rowLabelStyles = css({ color: "accent", fontWeight: "700" });

export const rowTextStyles = css({ color: "muted" });

export const projectStyles = css({ color: "muted", fontSize: "xs", fontWeight: "700" });
