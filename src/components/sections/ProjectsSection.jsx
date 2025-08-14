import { motion } from "framer-motion";
import { GlassCard, GlassBadge } from "@/components/GlassCard";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/utils.js";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Gráfica Eleal",
      category: "WEBSITE INSTITUCIONAL",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/grafica-eleal.png",
      liveUrl: "https://graficaeleal.com.br/",
      githubUrl: "https://github.com/ranieryfialho/grafica-eleal",
    },
    {
      id: 2,
      title: "FinTrack",
      category: "ASSISTENTE PESSOAL DE FINANÇAS",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/fintrack.png",
      liveUrl: "https://financial-dashboard-cfa8e.web.app/",
      githubUrl: "https://github.com/ranieryfialho/FinTrack",
    },
    {
      id: 3,
      title: "App Gestão Escolar",
      category: "GESTÃO ACADÊMICA",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/gestao-escolar.png",
      liveUrl: "https://portal-aluno-senior.web.app/",
      githubUrl: "https://github.com/ranieryfialho/portal-aluno",
    },
    {
      id: 4,
      title: "Portal do Aluno",
      category: "GESTÃO ACADÊMICA",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/portal-aluno.png",
      liveUrl: "https://boletim-escolar-app.web.app/",
      githubUrl: "https://github.com/ranieryfialho/boletim-escolar",
    },
    {
      id: 5,
      title: "Ponto Eletrônico",
      category: "GESTÃO DE JORNADA DE TRABALHO",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/ponto-eletronico.png",
      liveUrl: "https://ponto-eletronico-senior-81a53.web.app/",
      githubUrl: "https://github.com/ranieryfialho/ponto-eletronico",
    },
    {
      id: 6,
      title: "Backup Firebase",
      category: "GESTÃO DE BANCO DE DADOS FIREBASE",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/backup-firebase.png",
      liveUrl: "https://backup-db-firebase.vercel.app/",
      githubUrl: "https://github.com/ranieryfialho/backup-db-firebase",
    },
    {
      id: 7,
      title: "Flappy Mario",
      category: "GAME",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/flappy-mario.png",
      liveUrl: "https://ranieryfialho.github.io/flappy-mario/",
      githubUrl: "https://github.com/ranieryfialho/flappy-mario",
    },
    {
      id: 8,
      title: "Porfolio",
      category: "PORTFOLIO SPA",
      gradient: "from-gray-600 to-gray-900",
      image: "/projects/portfolio.png",
      liveUrl: "https://rafiweb.com.br",
      githubUrl: "https://github.com/ranieryfialho/rafiweb",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
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
                ease: "easeOut",
              }}
            >
              <div
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer 
                shadow-lg dark:shadow-none 
                hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-purple-500/20
                transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-top transition-all duration-1000 ease-in-out group-hover:bg-bottom"
                  style={{ backgroundImage: `url(${asset(project.image)})` }}
                />

                <div
                  className={`
                  absolute inset-0 
                  bg-gradient-to-br ${project.gradient}
                  transition-all duration-500
                  opacity-80 dark:opacity-90 group-hover:opacity-60
                `}
                />

                <div
                  className="
                  absolute inset-0 
                  bg-black/20 backdrop-blur-[2px]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                "
                />

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <span
                      className="
                      inline-block px-3 py-1 
                      bg-white/20 dark:bg-white/10 backdrop-blur-md 
                      rounded-full text-xs text-white
                      border border-white/30 dark:border-white/20
                      font-medium
                    "
                    >
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                      {project.title}
                    </h3>

                    <div
                      className="
                      flex gap-3 
                      opacity-0 group-hover:opacity-100
                      transform translate-y-4 group-hover:translate-y-0
                      transition-all duration-300
                    "
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank" rel="noopener noreferrer"
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
                        target="_blank" rel="noopener noreferrer"
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

                <ArrowUpRight
                  className="
                  absolute top-4 right-4 w-5 h-5 text-white/50
                  transform translate-x-10 -translate-y-10
                  group-hover:translate-x-0 group-hover:translate-y-0
                  transition-transform duration-300
                  drop-shadow-md
                "
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}