import { cx } from "@/styled-system/css";
import { card } from "@/styled-system/recipes";
import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "muted" | "bordered";
  hoverable?: boolean;
}

export default function Card({
  variant = "default",
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cx(card({ variant, hoverable }), className)} {...props}>
      {children}
    </div>
  );
}
