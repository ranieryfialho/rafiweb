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
        "backdrop-blur-md bg-white/5 border border-white/10 rounded-xl",
        "shadow-xl shadow-black/10",
        "transition-all duration-300",
        hover && "hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-neon-purple/20",
        gradient && "bg-gradient-to-br from-white/5 via-white/5 to-neon-purple/10",
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
        "backdrop-blur-md bg-white/5 border border-white/10 rounded-full",
        "text-xs font-medium text-white/90",
        "transition-all duration-300 hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}