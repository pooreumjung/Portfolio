import { css, cx } from "@/styled-system/css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const containerStyles = css({
  display: "grid",
  justifyItems: "start",
  gap: "8px",
  marginBottom: "34px",
});

const titleStyles = css({
  margin: 0,
  color: "accent2",
  fontSize: { base: "22px", md: "32px" },
  lineHeight: "1.14",
  fontWeight: "800",
});

const subtitleStyles = css({
  margin: 0,
  color: "muted",
  fontSize: "base",
});

// Matches the original site's `.section-heading > h2` treatment: left
// aligned, accent-colored heading, used at the top of every section.
export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cx(containerStyles, className)}>
      <h2 className={titleStyles}>{title}</h2>
      {subtitle && <p className={subtitleStyles}>{subtitle}</p>}
    </div>
  );
}
