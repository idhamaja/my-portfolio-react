import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSections";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToogle } from "../components/ThemeToogle";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toogle */}
      <ThemeToogle />
      {/*Background Effects*/}
      <StarBackground />
      {/*Navbar*/}
      <Navbar />
      {/*Main Context*/}
      <HeroSection />
      <AboutSection/>
      {/*Footer*/}
    </div>
  );
};
