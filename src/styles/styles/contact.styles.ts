import { css } from "@/styled-system/css";

export const sectionWrapperStyles = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "minmax(0, 1fr) auto" },
  alignItems: "center",
  gap: "32px",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: { base: "58px 32px", md: "86px 32px" },
});

export const blurbStyles = css({
  maxWidth: "640px",
  margin: 0,
  color: "muted",
});

export const linksRowStyles = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});
