import { cx } from "@/styled-system/css";
import { button } from "@/styled-system/recipes";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonOwnProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  asChild?: boolean;
}

type ButtonProps = ButtonOwnProps &
  (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

// Renders as an <a> when `href` is present (matches the original site's
// `createButton()`, which always built anchor tags), otherwise a <button>.
export default function Button({
  variant = "secondary",
  size = "md",
  iconOnly = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cx(button({ variant, size, iconOnly }), className);

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <a
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...(props as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
