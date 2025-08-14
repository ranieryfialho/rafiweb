import { AnimatedBackground } from "./components/AnimatedBackground"
import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/sections/HeroSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { SkillsSection } from "./components/sections/SkillsSection"
import { AboutSection } from "./components/sections/AboutSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Background animado - fica atrás de tudo */}
      <AnimatedBackground />

      {/* Navegação fixa */}
      <Navigation />

      {/* Conteúdo principal */}
      <main className="relative z-10">
        {/* Seção Hero com ID para navegação */}
        <div id="home">
          <HeroSection />
        </div>

        {/* Seção de Serviços */}
        <ServicesSection />

        {/* Seção de Projetos */}
        <ProjectsSection />

        {/* Seção de Habilidades */}
        <SkillsSection />

        {/* Seção Sobre Mim */}
        <AboutSection />

        {/* Seção de Contato */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App