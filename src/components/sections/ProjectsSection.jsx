import { motion } from "framer-motion"
import { GlassCard, GlassBadge } from "@/components/GlassCard"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  // Dados dos projetos com cores específicas como na imagem
  const projects = [
    {
      id: 1,
      title: "Fritz Security Systems",
      category: "CYBER CAMERA RESELLER",
      gradient: "from-blue-600 to-purple-600",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Open Digital Gallery",
      category: "COURSE PORTFOLIO",
      gradient: "from-yellow-500 to-orange-500",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Livcom",
      category: "MASTER COURSES WEBSITE",
      gradient: "from-gray-600 to-gray-800",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Istanbul Cruise Transfer",
      category: "ISTANBUL CRUISE ACTIVITIES",
      gradient: "from-blue-800 to-indigo-900",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Tour Control Dashboard",
      category: "DASHBOARD",
      gradient: "from-teal-500 to-cyan-600",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "La-Cuisinette",
      category: "RESTAURANT",
      gradient: "from-green-700 to-emerald-800",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Gold Grain Organics",
      category: "ORGANIC FOOD",
      gradient: "from-amber-600 to-yellow-700",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 8,
      title: "MCE Global",
      category: "ADVERTECTURE",
      gradient: "from-orange-500 to-red-600",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "Lovedb4",
      category: "FASHION",
      gradient: "from-pink-500 to-rose-600",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 10,
      title: "ipekbeby",
      category: "BABY FASHION",
      gradient: "from-purple-500 to-pink-600",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 11,
      title: "Private Transfer Istanbul",
      category: "ISTANBUL PRIVATE TRANSFER",
      gradient: "from-slate-600 to-gray-800",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 12,
      title: "Istanbul E-pass",
      category: "DIGITAL MUSEUM PASS",
      gradient: "from-indigo-600 to-blue-700",
      image: "/api/placeholder/400/300",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            PORTFÓLIO
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-3xl mx-auto mb-12">
            Conheça alguns dos projetos desenvolvidos por mim.
          </p>
        </motion.div>
        
        {/* Grid de projetos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer 
                shadow-lg dark:shadow-none 
                hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-purple-500/20
                transition-all duration-300">
                {/* Fundo com gradiente */}
                <div className={`
                  absolute inset-0 
                  bg-gradient-to-br ${project.gradient}
                  transition-transform duration-500
                  group-hover:scale-110
                  dark:opacity-100 opacity-90
                `} />

                {/* Overlay com glassmorfismo no hover */}
                <div className="
                  absolute inset-0 
                  bg-black/20 backdrop-blur-[2px]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                " />

                {/* Conteúdo do card */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Badge da categoria */}
                  <div>
                    <span className="
                      inline-block px-3 py-1 
                      bg-white/20 dark:bg-white/10 backdrop-blur-md 
                      rounded-full text-xs text-white
                      border border-white/30 dark:border-white/20
                      font-medium
                    ">
                      {project.category}
                    </span>
                  </div>

                  {/* Título e ações */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                      {project.title}
                    </h3>

                    {/* Botões de ação - aparecem no hover */}
                    <div className="
                      flex gap-3 
                      opacity-0 group-hover:opacity-100
                      transform translate-y-4 group-hover:translate-y-0
                      transition-all duration-300
                    ">
                      <a
                        href={project.liveUrl}
                        className="
                          flex items-center gap-1
                          px-3 py-1.5 rounded-lg
                          bg-white/20 dark:bg-white/10 backdrop-blur-md
                          text-white text-sm font-medium
                          hover:bg-white/30 dark:hover:bg-white/20
                          transition-colors
                          border border-white/30 dark:border-white/20
                        "
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="
                          flex items-center gap-1
                          px-3 py-1.5 rounded-lg
                          bg-white/20 dark:bg-white/10 backdrop-blur-md
                          text-white text-sm font-medium
                          hover:bg-white/30 dark:hover:bg-white/20
                          transition-colors
                          border border-white/30 dark:border-white/20
                        "
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Ícone decorativo no canto */}
                <ArrowUpRight className="
                  absolute top-4 right-4 w-5 h-5 text-white/50
                  transform translate-x-10 -translate-y-10
                  group-hover:translate-x-0 group-hover:translate-y-0
                  transition-transform duration-300
                  drop-shadow-md
                " />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}