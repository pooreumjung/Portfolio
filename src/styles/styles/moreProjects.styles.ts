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

export const featuredItemStyles = css({ gridColumn: "1 / -1" });

export const cardStyles = css({
  height: "100%",
  padding: "24px 26px",
  display: "grid",
  alignContent: "start",
  gap: "10px",
});

export const titleStyles = css({ margin: 0, color: "text", fontSize: "lg", fontWeight: "800" });

export const metaStyles = css({ color: "accent", fontSize: "sm", fontWeight: "700" });

export const descriptionStyles = css({ margin: 0, color: "muted", fontSize: "base", lineHeight: "1.7" });

export const tagRowStyles = css({ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" });

export const tagStyles = css({
  padding: "4px 10px",
  borderRadius: "999px",
  backgroundColor: "surfaceMuted",
  color: "muted",
  fontSize: "xs",
  fontWeight: "600",
});
