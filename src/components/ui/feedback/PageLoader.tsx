"use client";

import { LoaderProvider } from "@/contexts/LoaderContext";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface PageLoaderProps {
  children?: ReactNode;
}

const VISITED_KEY = "portfolio_visited";

const wrapperStylesBase = css({
  position: "fixed",
  inset: 0,
  perspective: "2000px",
  overflow: "hidden",
});

const cubeStyles = css({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
});

const faceStyles = css({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  overflow: "hidden",
});

const loaderFaceStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "bg",
});

const logoStyles = css({
  fontSize: "3rem",
  fontWeight: "800",
  color: "text",
  textAlign: "center",
});

const summaryStyles = css({
  marginTop: "10px",
  color: "muted",
  fontSize: "base",
});

const cubeDepth = "calc(50vw)";

// Session-gated cube-flip intro, ported from the reference repo and
// re-skinned with the site's own warm/light palette instead of the
// reference's dark blue/purple gradient.
export default function PageLoader({ children }: PageLoaderProps) {
  const [phase, setPhase] = useState<"loading" | "turning" | "done" | "skip">("loading");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(VISITED_KEY)) {
      setPhase("skip");
      return;
    }

    const turnTimer = setTimeout(() => setPhase("turning"), 1400);
    return () => clearTimeout(turnTimer);
  }, []);

  useEffect(() => {
    if (phase !== "turning") return;

    let start: number | null = null;
    const duration = 1000;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setRotation(eased * -90);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setPhase("done");
        if (typeof window !== "undefined") sessionStorage.setItem(VISITED_KEY, "true");
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  if (phase === "skip" || phase === "done") {
    return <LoaderProvider isLoaded>{children}</LoaderProvider>;
  }

  return (
    <LoaderProvider isLoaded={false}>
      <div
        className={wrapperStylesBase}
        style={{ zIndex: 9999, pointerEvents: "auto" }}
        aria-hidden="true"
      >
        <div className={cubeStyles} style={{ transform: `translateZ(-50vw) rotateY(${rotation}deg)` }}>
          <div className={`${faceStyles} ${loaderFaceStyles}`} style={{ transform: `rotateY(0deg) translateZ(${cubeDepth})` }}>
            <motion.h1
              className={logoStyles}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              정푸름
            </motion.h1>
            <p className={summaryStyles}>Backend Developer</p>
          </div>
          <div className={faceStyles} style={{ transform: `rotateY(90deg) translateZ(${cubeDepth})` }}>
            {children}
          </div>
        </div>
      </div>

      {/* pre-render for hydration */}
      <div style={{ visibility: "hidden", position: "fixed", inset: 0, zIndex: -1 }}>
        {children}
      </div>
    </LoaderProvider>
  );
}
