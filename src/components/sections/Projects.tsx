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
  detailLinkStyles,
  footerActionLinkStyles,
  footerActionsStyles,
  footerRowStyles,
  gridStyles,
  highlightMetricStyles,
  highlightStyles,
  highlightTextStyles,
  imageBannerStyles,
  periodStatusStyles,
  sectionWrapperStyles,
  tagOverflowStyles,
  tagPrimaryStyles,
  tagRowStyles,
  tagStyles,
  titleRowStyles,
  titleStyles,
  toneGradients,
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

// Cards show at most this many stack tags before collapsing the rest into
// a "+N" chip — keeps a 12-tag project (SEMOSAN) from spilling past 1.5 rows.
const MAX_VISIBLE_TAGS = 5;

// Wraps `metric` (e.g. "50%", "2등") in an accent span wherever it appears
// inside `text`, so one concrete result stands out from the sentence around it.
function renderHighlight(text: string, metric?: string) {
  if (!metric) return text;
  const index = text.indexOf(metric);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className={highlightMetricStyles}>{metric}</span>
      {text.slice(index + metric.length)}
    </>
  );
}

export default function Projects() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.15 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedStacks, setExpandedStacks] = useState<Set<string>>(new Set());

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const toggleStack = (title: string) => {
    setExpandedStacks((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

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
                <div className={titleRowStyles}>
                  <h3 className={titleStyles}>{project.title}</h3>
                  <span className={periodStatusStyles}>{project.activePeriod}</span>
                </div>

                <p className={descriptionStyles}>{project.description}</p>

                {project.highlight && (
                  <div className={highlightStyles}>
                    <p className={highlightTextStyles}>
                      {renderHighlight(project.highlight, project.highlightMetric)}
                    </p>
                  </div>
                )}

                <div className={tagRowStyles}>
                  {(() => {
                    const isExpanded = expandedStacks.has(project.title);
                    const hasOverflow = project.stack.length > MAX_VISIBLE_TAGS;
                    const visibleStack = isExpanded ? project.stack : project.stack.slice(0, MAX_VISIBLE_TAGS);

                    return (
                      <>
                        {visibleStack.map((tag, index) => (
                          <span key={tag} className={cx(tagStyles, index === 0 ? tagPrimaryStyles : undefined)}>
                            {tag}
                          </span>
                        ))}
                        {hasOverflow && (
                          <button
                            type="button"
                            className={cx(tagStyles, tagOverflowStyles)}
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? `${project.title} 스택 접기` : `${project.title} 전체 스택 보기`}
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleStack(project.title);
                            }}
                          >
                            {isExpanded ? "접기" : `+${project.stack.length - MAX_VISIBLE_TAGS}`}
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>

                <div className={footerRowStyles}>
                  <button
                    type="button"
                    className={detailLinkStyles}
                    onClick={(event) => {
                      event.stopPropagation();
                      openModal(project);
                    }}
                  >
                    자세히 보기 ›
                  </button>
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
