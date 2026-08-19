import { css } from "@/styled-system/css";

export const brandStyles = css({
  fontWeight: "800",
  fontSize: "17px",
  color: "text",
});

export const navPillStyles = css({
  display: { base: "none", md: "flex" },
  alignItems: "center",
  gap: "6px",
  padding: "6px",
  border: "1px solid rgba(222, 222, 219, 0.86)",
  borderRadius: "999px",
  backgroundColor: "rgba(255, 255, 255, 0.72)",
});

export const navLinkStyles = css({
  padding: "8px 13px",
  borderRadius: "999px",
  color: "muted",
  fontSize: "sm",
  fontWeight: "700",
  transition: "background-color {durations.fast}, color {durations.fast}",
  _hover: { backgroundColor: "accent", color: "#ffffff" },
  _focusVisible: { backgroundColor: "accent", color: "#ffffff", outline: 0 },
});

export const hamburgerWrapperStyles = css({
  display: { base: "flex", md: "none" },
  flexDirection: "column",
  gap: "4px",
  cursor: "pointer",
});

export const mobileMenuStyles = css({
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "bg",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  padding: "32px",
  zIndex: 19,
});

export const mobileLinkStyles = css({
  color: "text",
  fontSize: "24px",
  fontWeight: "700",
  transition: "color {durations.fast}",
  _hover: { color: "accent" },
});
