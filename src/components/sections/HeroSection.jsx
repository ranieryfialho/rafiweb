import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { GlassBadge } from "@/components/GlassCard"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export function HeroSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Animações de entrada otimizadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isDesktop ? 0.2 : 0,
        delayChildren: isDesktop ? 0.3 : 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Função de scroll
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Título principal com gradiente */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gray-900 dark:text-white">Olá, me chamo </span>
          <span className="text-gradient">Raniery</span>
          <span
            className="inline-block ml-4 before:content-['\1F44B']"
            style={{ fontSize: '3rem' }}
          >
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-white/80 mb-8"
        >
          Desenvolvedor Full Stack
        </motion.h2>

        {/* Descrição */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Sou um desenvolvedor especializado em soluções web e plataformas de e-commerce, oferecendo serviços freelance personalizados de cada cliente.
        </motion.p>

        {/* Botões de ação */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="glass"
            size="lg"
            onClick={scrollToContact}
            className="group relative overflow-hidden px-8 py-6 text-lg dark:text-white text-gray-900"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center">
              Fale Comigo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Meus Projetos
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center text-gray-500 dark:text-white/40">
            <span className="mb-2" style={{ fontSize: '0.75rem' }}>Continue</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full mx-auto animate-bounce" />
            </div>
          </div>
        </motion.div>
        
      </motion.div>

      {isDesktop && (
        <>
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </>
      )}
    </section>
  )
}