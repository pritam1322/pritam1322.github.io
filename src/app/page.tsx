import AboutPage from "@/components/sections/AboutPage";
import CertificationSection from "@/components/sections/CertificationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <AboutPage />
        <ProjectsSection />
        <Skills />
        <ExperienceSection />
        <CertificationSection />
      </main>
  );
}
