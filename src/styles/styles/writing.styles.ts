import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "96px 32px 86px" },
});

export const headingRowStyles = css({
  display: "flex",
  alignItems: { base: "flex-start", md: "end" },
  flexDirection: { base: "column", md: "row" },
  justifyContent: "space-between",
  gap: { base: "18px", md: "32px" },
  marginBottom: "42px",
});

export const allPostsLinkStyles = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: "text",
  fontSize: { base: "15px", md: "18px" },
  fontWeight: "700",
  _hover: { color: "accent" },
});

export const listStyles = css({
  display: "grid",
  borderTop: "1px solid {colors.line}",
});

export const cardStyles = css({
  position: "relative",
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "180px minmax(0, 1fr)" },
  gap: { base: "18px", md: "70px" },
  padding: { base: "30px 0", md: "38px 0" },
  borderBottom: "1px solid {colors.line}",
  transition: "transform {durations.fast}",
});

export const metaStyles = css({
  display: "flex",
  flexDirection: { base: "row", md: "column" },
  gap: { base: "12px", md: "4px" },
  alignContent: "start",
  color: "#9b9b98",
  fontSize: { base: "13px", md: "14px" },
  fontWeight: "700",
});

export const linkStyles = css({
  position: "relative",
  display: "grid",
  paddingRight: { base: "28px", md: "54px" },
  "&:hover h3, &:focus-visible h3": { color: "accent" },
  "&:hover [data-arrow], &:focus-visible [data-arrow]": { color: "accent" },
});

export const contentStyles = css({ display: "grid", gap: "16px" });

export const cardTitleStyles = css({
  color: "text",
  fontSize: { base: "19px", md: "26px" },
  lineHeight: "1.35",
  fontWeight: "800",
  transition: "color {durations.fast}",
});

export const cardTextStyles = css({
  maxWidth: "880px",
  margin: 0,
  color: "muted",
  fontSize: { base: "14px", md: "17px" },
  lineHeight: "1.75",
});

export const tagRowStyles = css({ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" });

export const tagStyles = css({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "34px",
  padding: "0 14px",
  border: "1px solid {colors.line}",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.56)",
  color: "muted",
  fontSize: "13px",
  fontWeight: "700",
});

export const arrowStyles = css({
  position: "absolute",
  top: 0,
  right: "4px",
  color: "#aaa9a5",
  fontSize: "22px",
  transition: "color {durations.fast}",
});
