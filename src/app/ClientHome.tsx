"use client";

import { useSmoothScroll } from "@hooks/index";
import Navigation from "@layout/Navigation";
import { PageLoader, ScrollProgress } from "@ui/index";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@sections/Hero"), { loading: () => null });
const About = dynamic(() => import("@sections/About"), { loading: () => null });
const Experience = dynamic(() => import("@sections/Experience"), { loading: () => null });
const Projects = dynamic(() => import("@sections/Projects"), { loading: () => null });
const Awards = dynamic(() => import("@sections/Awards"), { loading: () => null });
const Writing = dynamic(() => import("@sections/Writing"), { loading: () => null });
const Contact = dynamic(() => import("@sections/Contact"), { loading: () => null });
const Footer = dynamic(() => import("@layout/Footer"), { loading: () => null });

export default function ClientHome() {
  useSmoothScroll();

  return (
    <PageLoader>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Awards />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </PageLoader>
  );
}
