import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      
      <footer className="bg-[#4988C4] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            &copy; 2026 Muhammad Zia Ul-haq. Dibuat dengan ❤️ menggunakan React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}