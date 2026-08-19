import { css } from "@/styled-system/css";

export const heroSectionStyles = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  maxWidth: "1280px",
  margin: "0 auto",
  paddingInline: "32px",
  minHeight: { base: "auto", md: "calc(100vh - 72px)" },
  paddingTop: { base: "48px", md: "56px" },
  paddingBottom: { base: "72px", md: 0 },
  overflow: "hidden",
});

export const heroCopyStyles = css({
  position: "relative",
  zIndex: 1,
  maxWidth: "1120px",
  willChange: "transform",
});

export const titleStyles = css({
  margin: 0,
  fontSize: { base: "42px", md: "{fontSizes.4xl}" },
  lineHeight: "1.08",
  fontWeight: "800",
  wordBreak: "keep-all",
});

export const summaryStyles = css({
  maxWidth: "760px",
  margin: "34px 0 0",
  color: "muted",
  fontSize: { base: "16px", md: "21px" },
});

export const actionRowStyles = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "28px",
});

export const mobileCtaStyles = css({
  display: { base: "inline-flex", md: "none" },
  order: -1,
  width: { base: "100%", md: "auto" },
});
