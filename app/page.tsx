"use client";

import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/herosection/HeroSection";
import ProcessSection from "@/components/process/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";

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
