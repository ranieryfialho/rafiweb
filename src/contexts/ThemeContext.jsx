import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'

    const savedTheme = localStorage.getItem("rafiweb-theme")
    if (savedTheme) {
      return savedTheme
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    
    return "dark"
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light', 'dark')

    root.classList.add(theme)

    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.content = theme === 'dark' ? '#0a0a0a' : '#ffffff'
    } else {
      const meta = document.createElement('meta')
      meta.name = 'theme-color'
      meta.content = theme === 'dark' ? '#0a0a0a' : '#ffffff'
      document.head.appendChild(meta)
    }

    localStorage.setItem("rafiweb-theme", theme)

    setIsLoading(false)
  }, [theme])

  const toggleTheme = () => {

    document.documentElement.classList.add('theme-transition')
    
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)
  }

  const setSpecificTheme = (newTheme) => {
    if (newTheme === "dark" || newTheme === "light") {
      document.documentElement.classList.add('theme-transition')
      setTheme(newTheme)
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition')
      }, 300)
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = (e) => {
      if (!localStorage.getItem("rafiweb-theme")) {
        setTheme(e.matches ? "dark" : "light")
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    } else {
      // Fallback para navegadores antigos
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  const value = {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isLoading
  }

  return (
    <ThemeContext.Provider value={value}>
      {!isLoading && children}
    </ThemeContext.Provider>
  )
}