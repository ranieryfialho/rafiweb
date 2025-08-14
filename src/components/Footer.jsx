import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Rafiweb. Todos os direitos reservados.
          </div>

          {/* Made with love */}
          <div className="flex items-center text-white/60 text-sm">
            Feito com 
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
            usando React e Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}