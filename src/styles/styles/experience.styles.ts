import { css } from "@/styled-system/css";

export const sectionBandStyles = css({
  width: "100%",
  padding: { base: "72px 0", md: "92px 0" },
  borderTop: "1px solid {colors.line}",
  borderBottom: "1px solid {colors.line}",
  backgroundColor: "bg",
});

export const headingWrapperStyles = css({
  maxWidth: "1280px",
  margin: { base: "0 auto 40px", md: "0 auto 64px" },
  padding: "0 32px",
});

export const listStyles = css({
  position: "relative",
  display: "grid",
  gap: { base: "42px", md: "52px" },
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "0 32px 0 78px", md: "0 32px 0 98px" },
});

export const timelineRailStyles = css({
  position: "absolute",
  top: "3px",
  bottom: "3px",
  left: { base: "44px", md: "64px" },
  width: "2px",
  borderRadius: "999px",
  backgroundColor: "rgba(68, 82, 102, 0.18)",
});

export const itemStyles = css({ position: "relative" });

export const itemDotStyles = css({
  position: "absolute",
  top: "9px",
  left: { base: "-42px", md: "-58px" },
  width: "15px",
  height: "15px",
  borderRadius: "999px",
  backgroundColor: "accent",
  boxShadow: "0 0 0 5px {colors.bg}",
});

export const itemHeadStyles = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px 12px",
});

export const itemTitleStyles = css({
  color: "text",
  fontSize: { base: "17px", md: "21px" },
  fontWeight: "800",
});

export const itemPeriodStyles = css({
  display: "inline-flex",
  alignItems: "center",
  minHeight: "30px",
  padding: "0 12px",
  borderRadius: "999px",
  backgroundColor: "rgba(68, 82, 102, 0.1)",
  color: "accentStrong",
  fontSize: "xs",
  fontWeight: "800",
});

export const itemLinksStyles = css({ display: "inline-flex", alignItems: "center", gap: "6px" });

export const itemLinkStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  border: "1px solid transparent",
  borderRadius: "999px",
  color: "muted",
  fontSize: "13px",
  fontWeight: "800",
  transition: "border-color {durations.fast}, background-color {durations.fast}, color {durations.fast}",
  _hover: { borderColor: "rgba(68, 82, 102, 0.2)", backgroundColor: "rgba(68, 82, 102, 0.08)", color: "accent" },
});

export const itemListStyles = css({
  display: "grid",
  gap: "9px",
  margin: "14px 0 0",
  paddingLeft: "22px",
  color: "muted",
  fontSize: "sm",
  fontWeight: "700",
  "& li::marker": { color: "accent" },
});

export const itemRoleStyles = css({ color: "accentStrong" });
