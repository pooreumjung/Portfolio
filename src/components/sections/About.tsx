"use client";

import { useScrollAnimation } from "@hooks/index";
import { ABOUT_COPY, certifications, skillGroups } from "@/constants/about.constant";
import { aboutAnimations } from "@/styles/animations/about.animations";
import {
  certCardStyles,
  certGridStyles,
  certPeriodStyles,
  certSubtitleStyles,
  certTitleStyles,
  introStyles,
  layoutStyles,
  nameStyles,
  photoStyles,
  profileColumnStyles,
  roleStyles,
  sectionWrapperStyles,
  skillCardStyles,
  skillCardTitleStyles,
  skillGridStyles,
  skillTagRowStyles,
  skillTagStyles,
  subheadingStyles,
} from "@/styles/styles/about.styles";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.15 });
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: aboutAnimations.duration, ease: aboutAnimations.ease } },
  };

  return (
    <section id="about" ref={ref} className={sectionWrapperStyles}>
      <div className={layoutStyles}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <h2 className={nameStyles}>{ABOUT_COPY.name}</h2>
          <span className={roleStyles}>{ABOUT_COPY.role}</span>
          <div className={photoStyles}>
            <Image
              src={ABOUT_COPY.photo}
              alt={ABOUT_COPY.photoAlt}
              fill
              style={{ objectFit: "cover", objectPosition: "center 42%" }}
              sizes="(min-width: 860px) 340px, 100vw"
            />
          </div>
          {ABOUT_COPY.intro.map((paragraph) => (
            <p key={paragraph} className={introStyles}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          className={profileColumnStyles}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h3 className={subheadingStyles}>{ABOUT_COPY.certificationsTitle}</h3>
            <div className={certGridStyles}>
              {certifications.map((cert) => (
                <div key={cert.title} className={certCardStyles}>
                  <div>
                    <h4 className={certTitleStyles}>{cert.title}</h4>
                    <p className={certSubtitleStyles}>{cert.subtitle}</p>
                  </div>
                  <span className={certPeriodStyles}>{cert.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={subheadingStyles}>{ABOUT_COPY.skillsTitle}</h3>
            <div className={skillGridStyles}>
              {skillGroups.map((group) => (
                <div key={group.title} className={skillCardStyles}>
                  <h4 className={skillCardTitleStyles}>{group.title}</h4>
                  <div className={skillTagRowStyles}>
                    {group.items.map((item) => (
                      <span key={item} className={skillTagStyles}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
