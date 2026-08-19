import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "86px 32px" },
});

export const layoutStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "minmax(300px, 420px) minmax(0, 1fr)" },
  gap: { base: "42px", md: "48px" },
  alignItems: "stretch",
});

export const nameStyles = css({
  margin: 0,
  color: "text",
  fontSize: { base: "34px", md: "54px" },
  fontWeight: "800",
  lineHeight: "1",
  letterSpacing: "-0.02em",
});

export const roleStyles = css({
  display: "inline-block",
  margin: "16px 0 0",
  padding: "3px 10px",
  color: "text",
  backgroundColor: "surfaceMuted",
  borderRadius: "4px",
  fontSize: "md",
  fontWeight: "700",
});

export const photoStyles = css({
  position: "relative",
  width: { base: "min(320px, 100%)", md: "min(340px, 100%)" },
  aspectRatio: "4 / 5",
  margin: "34px 0 22px",
  overflow: "hidden",
  border: "1px solid {colors.line}",
  borderRadius: "16px",
  backgroundColor: "surfaceMuted",
});

export const introStyles = css({
  maxWidth: "380px",
  margin: 0,
  color: "muted",
  fontSize: "base",
  lineHeight: "1.75",
  "& + &": { marginTop: "14px" },
});

export const profileColumnStyles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: { base: "24px", md: "32px" },
  marginTop: { base: 0, md: "40px" },
});

export const subheadingStyles = css({
  color: "text",
  fontSize: { base: "20px", md: "25px" },
  margin: "0 0 10px",
});

export const certGridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: "12px",
});

export const certCardStyles = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "14px",
  padding: "14px 16px",
  border: "1px solid {colors.line}",
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
});

export const certTitleStyles = css({ margin: 0, color: "text", fontSize: "16px", lineHeight: "1.35" });
export const certSubtitleStyles = css({ margin: "8px 0 0", color: "muted", fontSize: "13px" });
export const certPeriodStyles = css({ flex: "0 0 auto", color: "accentStrong", fontSize: "xs", fontWeight: "800" });

export const skillGridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: "16px",
});

export const skillCardStyles = css({
  minHeight: "136px",
  padding: "21px",
  border: "1px solid {colors.line}",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
});

export const skillCardTitleStyles = css({
  margin: "0 0 16px",
  color: "muted",
  fontSize: "sm",
  letterSpacing: "0.02em",
});

export const skillTagRowStyles = css({ display: "flex", flexWrap: "wrap", gap: "8px" });

export const skillTagStyles = css({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "30px",
  padding: "0 11px",
  border: "1px solid {colors.line}",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.74)",
  color: "muted",
  fontSize: "12.5px",
  fontWeight: "700",
});
