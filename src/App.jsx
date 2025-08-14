import { ThemeProvider } from "./contexts/ThemeContext"
import { AnimatedBackground } from "./components/AnimatedBackground"
import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/sections/HeroSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { SkillsSection } from "./components/sections/SkillsSection"
import { AboutSection } from "./components/sections/AboutSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/Footer"
import { useMediaQuery } from "./lib/hooks/useMediaQuery";

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white relative transition-colors duration-300">

        {isDesktop && <AnimatedBackground />}

        <Navigation />

        <main className="relative z-10">
          <div id="home">
            <HeroSection />
          </div>
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App