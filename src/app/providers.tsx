"use client";

import type { ReactNode } from "react";

// No theme provider needed — the site is single-theme (light-only) per the
// brand decision made during the Next.js migration. Kept as a thin pass-
// through wrapper so `layout.tsx` has one stable place to add providers.
export default function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
