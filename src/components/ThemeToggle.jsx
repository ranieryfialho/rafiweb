import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext" // Verifique se este caminho está correto

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      // ALTERAÇÃO: Classes corrigidas para o padrão do Tailwind
      className="
        relative p-2 rounded-lg
        bg-gray-900/10 hover:bg-gray-900/20
        dark:bg-white/10 dark:hover:bg-white/20
        border border-gray-900/20 dark:border-white/10
        backdrop-blur-md
        transition-colors duration-300
        group
      "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Alternar tema"
    >
      <div className="relative w-6 h-6">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
            opacity: theme === "light" ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
            opacity: theme === "dark" ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>

      {/* ALTERAÇÃO: Classes da tooltip corrigidas */}
      <span className="
        absolute -bottom-10 left-1/2 -translate-x-1/2
        px-2 py-1 rounded text-xs
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-white
        opacity-0 group-hover:opacity-100
        pointer-events-none transition-opacity
        whitespace-nowrap
        border border-gray-900/10 dark:border-white/10
      ">
        {theme === "dark" ? "Modo claro" : "Modo escuro"}
      </span>
    </motion.button>
  )
}

// O componente ThemeSwitch também foi revisado para consistência
export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      // ALTERAÇÃO: Classes limpas para remover redundâncias
      className="
        relative inline-flex h-8 w-14 items-center rounded-full
        bg-gray-300 dark:bg-gray-700
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        focus:ring-offset-white dark:focus:ring-offset-gray-900
      "
      aria-label="Alternar tema"
    >
      <motion.span
        // ALTERAÇÃO: Classes limpas para remover redundâncias
        className="
          inline-block h-6 w-6 rounded-full
          bg-white dark:bg-gray-900
          shadow-lg
        "
        initial={false}
        animate={{ x: isDark ? 28 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* A lógica dos ícones já estava correta, sem necessidade de alteração */}
          <motion.div
            initial={false}
            animate={{ scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1 }}
            className="absolute"
          >
            <Sun className="w-3 h-3 text-yellow-500" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0 }}
            className="absolute"
          >
            <Moon className="w-3 h-3 text-blue-500" />
          </motion.div>
        </div>
      </motion.span>
    </button>
  )
}