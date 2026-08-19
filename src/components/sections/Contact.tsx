"use client";

import { useScrollAnimation } from "@hooks/index";
import { CONTACT_COPY } from "@/constants/contact.constant";
import { profile } from "@/constants/hero.constant";
import { contactAnimations } from "@/styles/animations/contact.animations";
import { blurbStyles, linksRowStyles, sectionWrapperStyles } from "@/styles/styles/contact.styles";
import { Button } from "@ui/buttons";
import { contactIconMap } from "@/utils/contact-icons";
import { SectionTitle } from "@ui/typography";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className={sectionWrapperStyles}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: contactAnimations.duration, ease: contactAnimations.ease }}
      >
        <SectionTitle title={CONTACT_COPY.title} />
        <p className={blurbStyles}>{CONTACT_COPY.blurb}</p>
      </motion.div>

      <motion.div
        className={linksRowStyles}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: contactAnimations.duration, delay: 0.1, ease: contactAnimations.ease }}
        aria-label="연락처 링크"
      >
        {profile.contacts.map((link) => {
          const Icon = contactIconMap[link.icon];
          return (
            <Button
              key={link.label}
              href={link.href}
              variant={link.primary ? "primary" : "secondary"}
              iconOnly
              aria-label={link.label}
              title={link.label}
            >
              <Icon size={20} />
            </Button>
          );
        })}
      </motion.div>
    </section>
  );
}
