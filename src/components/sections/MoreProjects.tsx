"use client";

import { useScrollAnimation } from "@hooks/index";
import { MORE_PROJECTS_COPY, moreProjects } from "@/constants/moreProjects.constant";
import { awardsAnimations } from "@/styles/animations/awards.animations";
import {
  cardStyles,
  descriptionStyles,
  featuredItemStyles,
  gridStyles,
  metaStyles,
  sectionWrapperStyles,
  tagRowStyles,
  tagStyles,
  titleStyles,
} from "@/styles/styles/moreProjects.styles";
import { Card } from "@ui/cards";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function MoreProjects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="more-projects" ref={ref} className={sectionWrapperStyles}>
      <SectionTitle title={MORE_PROJECTS_COPY.section.title} subtitle={MORE_PROJECTS_COPY.section.subtitle} />

      <div className={gridStyles}>
        {moreProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className={project.featured ? featuredItemStyles : undefined}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: awardsAnimations.itemDuration,
              delay: index * awardsAnimations.itemStagger,
              ease: awardsAnimations.ease,
            }}
          >
            <Card className={cardStyles}>
              <h3 className={titleStyles}>{project.title}</h3>
              <span className={metaStyles}>{project.meta}</span>
              <p className={descriptionStyles}>{project.description}</p>
              <div className={tagRowStyles}>
                {project.tags.map((tag) => (
                  <span key={tag} className={tagStyles}>
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
