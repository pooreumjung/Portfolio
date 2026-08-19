"use client";

import { css } from "@/styled-system/css";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const progressBarStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "3px",
  background: "linear-gradient(90deg, {colors.accent}, {colors.warm})",
  transformOrigin: "0%",
  zIndex: 1000,
});

// Replaces the original site's hand-rolled rAF-throttled scroll listener
// with framer-motion's useScroll/useSpring — same visual result, less code.
export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 550,
    damping: 60,
    restDelta: 0.0005,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <motion.div className={progressBarStyles} style={{ scaleX }} aria-hidden="true" />;
}
