import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="text-gray-600 dark:text-white/60 text-sm text-center md:text-left">
            © {currentYear} Rafiweb. Todos os direitos reservados.
          </div>

          <div className="flex items-center text-gray-600 dark:text-white/60 text-sm">
            Feito com 
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
            usando React e Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}