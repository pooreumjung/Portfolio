"use client";

import { useBodyScrollLock, useEscapeKey } from "@hooks/index";
import { PROJECTS_COPY } from "@/constants/projects.copy";
import type { Project } from "@/types/projects";
import {
  closeButtonStyles,
  inlineLinkStyles,
  linksRowStyles,
  modalStyles,
  overlayStyles,
  scrollStyles,
  sectionHeadingStyles,
  sectionListStyles,
  sectionStyles,
  sectionTextStyles,
  tagStyles,
  tagsStyles,
  titleStyles,
} from "@/styles/styles/projectmodal.styles";
import { Button } from "@ui/buttons";
import { GithubIcon } from "@ui/icons/SocialIcons";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className={overlayStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          role="presentation"
        >
          <motion.div
            className={modalStyles}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className={closeButtonStyles}
              aria-label={PROJECTS_COPY.labels.close}
              onClick={onClose}
            >
              ✕
            </button>

            <div className={scrollStyles}>
              <h3 className={titleStyles}>{project.title}</h3>

              <div className={tagsStyles}>
                {project.stack.map((tag) => (
                  <span key={tag} className={tagStyles}>
                    {tag}
                  </span>
                ))}
              </div>

              <section className={sectionStyles}>
                <h4 className={sectionHeadingStyles}>{PROJECTS_COPY.labels.intro}</h4>
                <p className={sectionTextStyles}>{project.intro}</p>
              </section>

              <section className={sectionStyles}>
                <h4 className={sectionHeadingStyles}>{PROJECTS_COPY.labels.features}</h4>
                <ul className={sectionListStyles}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className={sectionStyles}>
                <h4 className={sectionHeadingStyles}>{PROJECTS_COPY.labels.contribution}</h4>
                <p className={sectionTextStyles}>{project.contribution}</p>
                <ul className={sectionListStyles}>
                  {project.contributionPoints.map((point) => (
                    <li key={point.text}>
                      {point.href ? (
                        <a
                          className={inlineLinkStyles}
                          href={point.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {point.text} ↗
                        </a>
                      ) : (
                        point.text
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {project.wrapup && (
                <section className={sectionStyles}>
                  <h4 className={sectionHeadingStyles}>{PROJECTS_COPY.labels.wrapup}</h4>
                  <p className={sectionTextStyles}>{project.wrapup}</p>
                </section>
              )}

              {project.links && project.links.length > 0 && (
                <div className={linksRowStyles}>
                  {project.links.map((link) => (
                    <Button key={link.href} href={link.href} variant="secondary">
                      <GithubIcon size={16} />
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
