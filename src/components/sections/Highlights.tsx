"use client";

import { useScrollAnimation } from "@hooks/index";
import { HIGHLIGHTS_COPY, highlights } from "@/constants/highlights.constant";
import { awardsAnimations } from "@/styles/animations/awards.animations";
import {
  cardStyles,
  detailStyles,
  gridStyles,
  headlineStyles,
  labelStyles,
  projectStyles,
  rowLabelStyles,
  rowStyles,
  rowsStyles,
  rowTextStyles,
  sectionWrapperStyles,
  valueStyles,
} from "@/styles/styles/highlights.styles";
import { Card } from "@ui/cards";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function Highlights() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="highlights" ref={ref} className={sectionWrapperStyles}>
      <SectionTitle title={HIGHLIGHTS_COPY.section.title} subtitle={HIGHLIGHTS_COPY.section.subtitle} />

      <div className={gridStyles}>
        {highlights.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: awardsAnimations.itemDuration,
              delay: index * awardsAnimations.itemStagger,
              ease: awardsAnimations.ease,
            }}
          >
            <Card className={cardStyles}>
              <p className={valueStyles}>{item.value}</p>
              <div className={headlineStyles}>
                <h3 className={labelStyles}>{item.label}</h3>
                <p className={detailStyles}>{item.detail}</p>
              </div>
              <div className={rowsStyles}>
                <div className={rowStyles}>
                  <span className={rowLabelStyles}>{HIGHLIGHTS_COPY.problemLabel}</span>
                  <span className={rowTextStyles}>{item.problem}</span>
                </div>
                <div className={rowStyles}>
                  <span className={rowLabelStyles}>{HIGHLIGHTS_COPY.actionLabel}</span>
                  <span className={rowTextStyles}>{item.action}</span>
                </div>
              </div>
              <span className={projectStyles}>{item.project}</span>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
