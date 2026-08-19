"use client";

import { useScrollAnimation } from "@hooks/index";
import { experiences } from "@/constants/experience.constant";
import { experienceAnimations } from "@/styles/animations/experience.animations";
import {
  headingWrapperStyles,
  itemDotStyles,
  itemHeadStyles,
  itemLinkStyles,
  itemLinksStyles,
  itemListStyles,
  itemPeriodStyles,
  itemRoleStyles,
  itemStyles,
  itemTitleStyles,
  listStyles,
  sectionBandStyles,
  timelineRailStyles,
} from "@/styles/styles/experience.styles";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className={sectionBandStyles}>
      <div className={headingWrapperStyles}>
        <SectionTitle title="Experience" />
      </div>

      <div className={listStyles}>
        <div className={timelineRailStyles} aria-hidden="true" />

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            className={itemStyles}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: experienceAnimations.itemDuration,
              delay: index * experienceAnimations.itemStagger,
              ease: experienceAnimations.ease,
            }}
          >
            <span className={itemDotStyles} aria-hidden="true" />
            <div className={itemHeadStyles}>
              <h3 className={itemTitleStyles}>{experience.title}</h3>
              {experience.links && (
                <div className={itemLinksStyles}>
                  {experience.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={itemLinkStyles}
                      aria-label={`${experience.title} ${link.label} 저장소 보기`}
                    >
                      ↗
                    </a>
                  ))}
                </div>
              )}
              <span className={itemPeriodStyles}>{experience.period}</span>
            </div>
            <ul className={itemListStyles}>
              {experience.roles.map((role) => (
                <li key={role} className={itemRoleStyles}>
                  {role}
                </li>
              ))}
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
