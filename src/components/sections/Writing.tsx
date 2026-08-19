"use client";

import { useScrollAnimation } from "@hooks/index";
import { WRITING_COPY, writings } from "@/constants/writing.constant";
import { writingAnimations } from "@/styles/animations/writing.animations";
import {
  allPostsLinkStyles,
  arrowStyles,
  cardStyles,
  cardTextStyles,
  cardTitleStyles,
  contentStyles,
  headingRowStyles,
  linkStyles,
  listStyles,
  metaStyles,
  sectionWrapperStyles,
  tagRowStyles,
  tagStyles,
} from "@/styles/styles/writing.styles";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function Writing() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="writing" ref={ref} className={sectionWrapperStyles}>
      <div className={headingRowStyles}>
        <SectionTitle title={WRITING_COPY.section.title} />
        <a
          href={WRITING_COPY.allPostsHref}
          target="_blank"
          rel="noreferrer"
          className={allPostsLinkStyles}
        >
          {WRITING_COPY.allPostsLabel} <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={listStyles}>
        {writings.map((post, index) => (
          <motion.article
            key={post.href}
            className={cardStyles}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: writingAnimations.itemDuration,
              delay: index * writingAnimations.itemStagger,
              ease: writingAnimations.ease,
            }}
          >
            <div className={metaStyles}>
              <span>{post.date}</span>
              <span>{post.category}</span>
            </div>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className={linkStyles}
              aria-label={`${post.title} 글 보기`}
            >
              <div className={contentStyles}>
                <h3 className={cardTitleStyles}>{post.title}</h3>
                <p className={cardTextStyles}>{post.text}</p>
                <div className={tagRowStyles}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={tagStyles}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className={arrowStyles} data-arrow aria-hidden="true">
                ↗
              </span>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
