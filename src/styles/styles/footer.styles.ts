import { css } from "@/styled-system/css";

export const footerStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "28px 32px 40px",
  borderTop: "1px solid {colors.line}",
  color: "muted",
  fontSize: "sm",
  flexWrap: "wrap",
});

export const backToTopStyles = css({
  color: "muted",
  fontWeight: "700",
  transition: "color {durations.fast}",
  _hover: { color: "accent" },
});
