"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/herosection/HeroSection"),
  {
    ssr: false,
  },
);

const AboutSection = dynamic(() => import("@/components/about/AboutSection"), {
  ssr: false,
});

const ServicesSection = dynamic(
  () => import("@/components/services/ServicesSection"),
  {
    ssr: false,
  },
);

const ProcessSection = dynamic(
  () => import("@/components/process/ProcessSection"),
  {
    ssr: false,
  },
);

const ProjectsSection = dynamic(
  () => import("@/components/projects/ProjectsSection"),
  {
    ssr: false,
  },
);

const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
