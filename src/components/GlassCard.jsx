import { cn } from "@/lib/utils"

export function GlassCard({ 
  children, 
  className = "", 
  hover = true,
  gradient = false,
  ...props 
}) {
  return (
    <div
      className={cn(
        "backdrop-blur-md rounded-xl",
        "dark:bg-white/5 dark:border-white/10",
        "light:bg-white/70 light:border-gray-200/50",
        "border",
        "shadow-xl dark:shadow-black/10 light:shadow-gray-200/20",
        "transition-all duration-300",
        hover && [
          "dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:shadow-2xl dark:hover:shadow-neon-purple/20",
          "light:hover:bg-white/90 light:hover:border-gray-300/50 light:hover:shadow-2xl"
        ].join(" "),
        gradient && [
          "dark:bg-gradient-to-br dark:from-white/5 dark:via-white/5 dark:to-neon-purple/10",
          "light:bg-gradient-to-br light:from-white/70 light:via-white/60 light:to-purple-100/30"
        ].join(" "),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function GlassBadge({ children, className = "", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1",
        "backdrop-blur-md rounded-full",
        "text-xs font-medium",
        "dark:bg-white/5 dark:border-white/10 dark:text-white/90",
        "light:bg-white/80 light:border-gray-200/50 light:text-gray-700",
        "border transition-all duration-300",
        "dark:hover:bg-white/10 light:hover:bg-white/90",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}