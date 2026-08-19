"use client";

import { useScrollAnimation } from "@hooks/index";
import { PROJECTS_COPY } from "@/constants/projects.copy";
import { projects } from "@/constants/projects.constant";
import { PROJECTS_ANIMATIONS_CONFIG, projectsCardVariants } from "@/styles/animations/projects.animations";
import {
  bannerEyebrowStyles,
  bannerImageStyles,
  bannerStyles,
  bannerTitleStyles,
  bodyStyles,
  cardStyles,
  descriptionStyles,
  footerActionLinkStyles,
  footerActionsStyles,
  footerLabelStyles,
  footerRowStyles,
  gridStyles,
  highlightStyles,
  highlightTextStyles,
  imageBannerStyles,
  metaRowStyles,
  sectionWrapperStyles,
  statusActiveStyles,
  statusStyles,
  tagRowStyles,
  tagStyles,
  titleStyles,
  toneGradients,
  yearStyles,
} from "@/styles/styles/projects.styles";
import { Card } from "@ui/cards";
import { ExternalLinkIcon } from "@ui/icons/SocialIcons";
import { ProjectModal } from "@ui/modals";
import { SectionTitle } from "@ui/typography";
import { cx } from "@/styled-system/css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/types/projects";

export default function Projects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.15 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="projects" ref={ref} className={sectionWrapperStyles}>
      <SectionTitle title={PROJECTS_COPY.section.title} />

      <div className={gridStyles}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={projectsCardVariants}
            transition={{ delay: index * PROJECTS_ANIMATIONS_CONFIG.cardDelayStep }}
          >
            <Card
              variant="default"
              hoverable
              className={cardStyles}
              role="button"
              tabIndex={0}
              aria-label={`${project.title} 상세 보기`}
              onClick={() => openModal(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal(project);
                }
              }}
            >
              {project.image ? (
                <div className={cx(bannerStyles, imageBannerStyles)}>
                  <Image
                    src={project.image}
                    alt={`${project.title} 대표 이미지`}
                    fill
                    className={bannerImageStyles}
                    sizes="(min-width: 1120px) 33vw, (min-width: 520px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div
                  className={bannerStyles}
                  style={{ background: toneGradients[index % toneGradients.length] }}
                >
                  <span className={bannerEyebrowStyles}>{project.period}</span>
                  <span className={bannerTitleStyles}>{project.title}</span>
                </div>
              )}

              <div className={bodyStyles}>
                <div className={metaRowStyles}>
                  <span className={yearStyles}>{project.year}</span>
                  <span className={cx(statusStyles, project.statusActive ? statusActiveStyles : undefined)}>
                    {project.status}
                  </span>
                </div>

                <h3 className={titleStyles}>{project.title}</h3>
                <p className={descriptionStyles}>{project.description}</p>

                {project.highlight && (
                  <div className={highlightStyles}>
                    <p className={highlightTextStyles}>{project.highlight}</p>
                  </div>
                )}

                <div className={tagRowStyles}>
                  {project.stack.map((tag) => (
                    <span key={tag} className={tagStyles}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={footerRowStyles}>
                  <span className={footerLabelStyles}>{project.period}</span>
                  {project.links && (
                    <div className={footerActionsStyles}>
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={footerActionLinkStyles}
                          onClick={(event) => event.stopPropagation()}
                        >
                          {link.label}
                          <ExternalLinkIcon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
