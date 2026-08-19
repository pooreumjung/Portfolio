"use client";

import { HERO_COPY, profile } from "@/constants/hero.constant";
import { heroAnimations } from "@/styles/animations/hero.animations";
import {
  actionRowStyles,
  heroCopyStyles,
  heroSectionStyles,
  mobileCtaStyles,
  summaryStyles,
  titleStyles,
} from "@/styles/styles/hero.styles";
import { Button } from "@ui/buttons";
import { contactIconMap } from "@/utils/contact-icons";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  // Hero mousemove parallax — ported as raw DOM manipulation via ref since
  // it's a continuous position mapping, not a discrete animation state.
  useEffect(() => {
    const section = sectionRef.current;
    const copy = copyRef.current;
    if (!section || !copy) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const { maxShift } = heroAnimations.parallax;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      const mx = relX * maxShift * 2;
      const my = relY * maxShift * 2;
      copy.style.transform = `translate(${mx}px, ${my}px) rotate(${(mx * 0.04).toFixed(2)}deg)`;
    };

    const handleMouseLeave = () => {
      copy.style.transform = "translate(0, 0) rotate(0deg)";
    };

    copy.style.transition = `transform ${heroAnimations.parallax.transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: heroAnimations.block.duration, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="top" ref={sectionRef} className={heroSectionStyles}>
      <div ref={copyRef} className={heroCopyStyles}>
        <motion.h1
          className={titleStyles}
          initial="hidden"
          animate="visible"
          custom={heroAnimations.block.delays[0]}
          variants={blockVariants}
        >
          {HERO_COPY.title}
        </motion.h1>

        <motion.p
          className={summaryStyles}
          initial="hidden"
          animate="visible"
          custom={heroAnimations.block.delays[1]}
          variants={blockVariants}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className={actionRowStyles}
          initial="hidden"
          animate="visible"
          custom={heroAnimations.block.delays[2]}
          variants={blockVariants}
          aria-label="프로필 링크"
        >
          <Button href="#projects" variant="primary" className={mobileCtaStyles}>
            {HERO_COPY.mobileProjectsCta}
          </Button>

          {profile.links.map((link) => {
            const Icon = contactIconMap[link.icon];
            return (
              <Button
                key={link.label}
                href={link.href}
                variant={link.primary ? "primary" : "secondary"}
                iconOnly
                aria-label={link.label}
                title={link.label}
              >
                <Icon size={20} />
              </Button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
