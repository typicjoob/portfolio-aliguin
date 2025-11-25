import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import LandingHeroSection from "./components/LandingHeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsAndExpertiseSection from "./components/SkillsAndExpertiseSection";
import ContactSection from "./components/ContactSection";
import ProjectsShowcase from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black-">
      <NavigationBar />
      <div className="container mt-24 mx-auto px-12 bg-linear-to-b sm:bg-linear-to-r from-black via-gray-900 to-amber-800">
        <LandingHeroSection />
        <AboutMeSection />
        <SkillsAndExpertiseSection />
        <ProjectsShowcase />
        <ContactSection />
      </div>
    </main>
  );
}
