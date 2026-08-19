"use client";

import { useScrollAnimation } from "@hooks/index";
import { AWARDS_COPY } from "@/constants/awards.copy";
import { awards } from "@/constants/awards.constant";
import { awardsAnimations } from "@/styles/animations/awards.animations";
import {
  cardStyles,
  gridStyles,
  issuerStyles,
  periodStyles,
  projectLabelStyles,
  projectLinkStyles,
  projectRowStyles,
  sectionWrapperStyles,
  titleRowStyles,
  titleStyles,
} from "@/styles/styles/awards.styles";
import { Card } from "@ui/cards";
import { ExternalLinkIcon } from "@ui/icons/SocialIcons";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function Awards() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="awards" ref={ref} className={sectionWrapperStyles}>
      <SectionTitle title={AWARDS_COPY.section.title} />

      <div className={gridStyles}>
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: awardsAnimations.itemDuration,
              delay: index * awardsAnimations.itemStagger,
              ease: awardsAnimations.ease,
            }}
          >
            <Card className={cardStyles}>
              <span className={issuerStyles}>{award.issuer}</span>
              <div className={titleRowStyles}>
                <h3 className={titleStyles}>{award.title}</h3>
                <span className={periodStyles}>{award.period}</span>
              </div>
              <div className={projectRowStyles}>
                <span className={projectLabelStyles}>{award.project}</span>
                {award.links?.[0] && (
                  <a
                    href={award.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className={projectLinkStyles}
                  >
                    {award.links[0].label}
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
