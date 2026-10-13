"use client";

import { moreProjects } from "@/constants/moreProjects.constant";
import { awardsAnimations } from "@/styles/animations/awards.animations";
import {
  cardStyles,
  descriptionStyles,
  featuredItemStyles,
  gridStyles,
  linkRowStyles,
  metaStyles,
  tagRowStyles,
  tagStyles,
  titleStyles,
} from "@/styles/styles/moreProjects.styles";
import { footerActionLinkStyles } from "@/styles/styles/projects.styles";
import { Card } from "@ui/cards";
import { ExternalLinkIcon } from "@ui/icons/SocialIcons";
import { motion } from "framer-motion";

// Rendered inside the Projects section once "더보기" is toggled open.
export default function MoreProjects() {
  return (
    <div id="more-projects" className={gridStyles}>
      {moreProjects.map((project, index) => (
        <motion.div
          key={project.title}
          className={project.featured ? featuredItemStyles : undefined}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
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
            {project.links && (
              <div className={linkRowStyles}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={footerActionLinkStyles}
                    aria-label={`${project.title} ${link.label} 저장소 보기`}
                  >
                    {link.label}
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
