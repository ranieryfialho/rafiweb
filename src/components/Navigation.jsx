import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Home } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Array de links permanece o mesmo
  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Serviços" }, // Adicionado para corresponder às seções
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Lógica de scroll para destacar a seção ativa permanece a mesma
      const sections = navLinks.map(link => link.id)
      let currentSection = "home"
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navLinks])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            // ALTERAÇÃO: Corrigido para o padrão do Tailwind (light por padrão, dark: para escuro)
            ? "backdrop-blur-xl bg-white/70 dark:bg-black/50 border-b border-gray-200/50 dark:border-white/10"
            : "backdrop-blur-md bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              {/* ALTERAÇÃO: Corrigida a cor do texto do logo */}
              <span className="text-gray-900 dark:text-white">Rafiweb</span>
              <span className="text-gradient">.</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    // ALTERAÇÃO: Corrigidas as cores dos links (ativo e inativo)
                    activeSection === link.id
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white"
                  )}
                >
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
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              {/* ALTERAÇÃO: Corrigida a cor do ícone do menu mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <motion.div
        initial={false}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 z-40 md:hidden"
      >
        {/* ALTERAÇÃO: Corrigido o fundo e a borda do menu mobile */}
        <div className="h-full backdrop-blur-xl bg-white/95 dark:bg-black/90 border-l border-gray-200/50 dark:border-white/10 p-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-left px-4 py-3 rounded-lg transition-all duration-300",
                  // ALTERAÇÃO: Corrigidas as cores dos links do menu mobile (ativo e inativo)
                  activeSection === link.id
                    ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
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