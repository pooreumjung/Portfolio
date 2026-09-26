"use client";

import { useSmoothScroll } from "@hooks/index";
import Navigation from "@layout/Navigation";
import type { WritingPost } from "@/types/writing";
import { PageLoader, ScrollProgress } from "@ui/index";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@sections/Hero"), { loading: () => null });
const Highlights = dynamic(() => import("@sections/Highlights"), { loading: () => null });
const About = dynamic(() => import("@sections/About"), { loading: () => null });
const Experience = dynamic(() => import("@sections/Experience"), { loading: () => null });
const Projects = dynamic(() => import("@sections/Projects"), { loading: () => null });
const MoreProjects = dynamic(() => import("@sections/MoreProjects"), { loading: () => null });
const Awards = dynamic(() => import("@sections/Awards"), { loading: () => null });
const Writing = dynamic(() => import("@sections/Writing"), { loading: () => null });
const Contact = dynamic(() => import("@sections/Contact"), { loading: () => null });
const Footer = dynamic(() => import("@layout/Footer"), { loading: () => null });

interface ClientHomeProps {
  writings: WritingPost[];
}

export default function ClientHome({ writings }: ClientHomeProps) {
  useSmoothScroll();

  return (
    <PageLoader>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Projects />
        <MoreProjects />
        <Experience />
        <Awards />
        <Writing posts={writings} />
        <Contact />
      </main>
      <Footer />
    </PageLoader>
  );
}
