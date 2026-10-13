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

export const introEmphasisStyles = css({ color: "accentStrong", fontWeight: "700" });

export const profileColumnStyles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "14px",
  marginTop: { base: 0, md: "clamp(40px, 8vw, 135px)" },
});

export const subheadingStyles = css({
  color: "text",
  fontSize: { base: "18px", md: "20px" },
  fontWeight: "800",
  margin: "0 0 6px",
});

export const certGridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
  gap: "6px",
});

export const certCardStyles = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "14px",
  padding: "9px 14px",
  border: "1px solid {colors.line}",
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
});

export const certTitleStyles = css({
  margin: 0,
  color: "text",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "1.35",
});
export const certSubtitleStyles = css({ margin: "3px 0 0", color: "muted", fontSize: "12.5px" });
export const certPeriodStyles = css({ flex: "0 0 auto", color: "accentStrong", fontSize: "xs", fontWeight: "800" });

export const skillGridStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "repeat(2, minmax(0, 1fr))" },
  gap: "10px",
});

export const skillCardStyles = css({
  padding: "12px 16px",
  border: "1px solid {colors.line}",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
});

export const skillCardTitleStyles = css({
  margin: "0 0 8px",
  color: "muted",
  fontSize: "sm",
  fontWeight: "700",
  letterSpacing: "0.02em",
});

export const skillTagRowStyles = css({ display: "flex", flexWrap: "wrap", gap: "6px" });

export const skillTagStyles = css({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "24px",
  padding: "0 10px",
  border: "1px solid {colors.line}",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.74)",
  color: "muted",
  fontSize: "12.5px",
  fontWeight: "700",
});
