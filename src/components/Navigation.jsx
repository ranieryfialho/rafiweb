import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Home } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Links Nav
  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ]

  // Detectar scroll para mudar estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar seção ativa
      const sections = navLinks.map(link => link.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Navbar principal */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-black/50 border-b border-white/10"
            : "backdrop-blur-md bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="text-white">Rafiweb</span>
              <span className="text-gradient">.</span>
            </motion.div>

            {/* Links desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    activeSection === link.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {/* Indicador ativo */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue"
                    />
                  )}
                  
                  <span className="relative flex items-center">
                    {link.icon && <link.icon className="w-4 h-4 mr-1" />}
                    {link.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Botão menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <motion.div
        initial={false}
        animate={{
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 z-40 md:hidden"
      >
        <div className="h-full backdrop-blur-xl bg-black/90 border-l border-white/10 p-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-left px-4 py-3 rounded-lg transition-all duration-300",
                  activeSection === link.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <span className="flex items-center">
                  {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}