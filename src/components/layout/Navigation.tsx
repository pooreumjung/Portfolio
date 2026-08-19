"use client";

import { NAVIGATION_CONFIG, navItems } from "@/constants/navigation.constant";
import { hamburgerLine, navigation } from "@/styled-system/recipes";
import { css } from "@/styled-system/css";
import { navigationAnimations } from "@/styles/animations/navigation.animations";
import {
  brandStyles,
  hamburgerWrapperStyles,
  mobileLinkStyles,
  mobileMenuStyles,
  navLinkStyles,
  navPillStyles,
} from "@/styles/styles/navigation.styles";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const containerStyles = css({
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > NAVIGATION_CONFIG.scrollThreshold);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className={navigation({ scrolled: isScrolled })}>
      <div className={containerStyles}>
        <Link href="#top" className={brandStyles}>
          Pooreum Jung
        </Link>

        <nav className={navPillStyles} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={navLinkStyles}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={hamburgerWrapperStyles}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          role="button"
          tabIndex={0}
          aria-label="메뉴 열기"
        >
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: "top" })} />
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: "middle" })} />
          <div className={hamburgerLine({ open: isMobileMenuOpen, position: "bottom" })} />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={mobileMenuStyles}
            initial={{ opacity: 0, y: navigationAnimations.menu.initialY }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: navigationAnimations.menu.initialY }}
            transition={{ duration: navigationAnimations.menu.duration }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: navigationAnimations.link.initialX }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * navigationAnimations.link.delayMultiplier,
                  duration: navigationAnimations.link.duration,
                }}
              >
                <Link href={item.href} className={mobileLinkStyles} onClick={handleLinkClick}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
