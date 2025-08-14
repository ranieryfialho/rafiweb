import { motion } from "framer-motion"
import { GlassCard } from "@/components/GlassCard"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Palette, 
  Database, 
  Cpu
} from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Desenvolvimento Frontend",
      icon: Code2,
      color: "from-neon-purple to-neon-blue",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Desenvolvimento Backend",
      icon: Database,
      color: "from-neon-blue to-neon-green",
      skills: ["Node.js", "Python", "Django", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Ferramentas de Design",
      icon: Palette,
      color: "from-neon-pink to-neon-purple",
      skills: ["Figma", "Photoshop", "Illustrator", "Canva"]
    },
    {
      title: "DevOps e Ferramentas",
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* ALTERAÇÃO: Cores do título para tema claro/escuro */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Habilidades e Tecnologias
          </h2>
          {/* ALTERAÇÃO: Cores do parágrafo para tema claro/escuro */}
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Um kit de ferramentas abrangente de tecnologias e estruturas modernas que utilizo para criar experiências digitais excepcionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: categoryIndex * 0.1 
              }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className={`
                    w-10 h-10 rounded-lg 
                    bg-gradient-to-br ${category.color} p-0.5
                  `}>
                    {/* ALTERAÇÃO: Fundo do ícone para tema claro/escuro */}
                    <div className="w-full h-full bg-white/50 dark:bg-black/50 backdrop-blur rounded-lg flex items-center justify-center">
                      {/* ALTERAÇÃO: Cor do ícone para tema claro/escuro */}
                      <category.icon className="w-5 h-5 text-gray-800 dark:text-white" />
                    </div>
                  </div>
                  {/* ALTERAÇÃO: Cor do título da categoria para tema claro/escuro */}
                  <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="glass"
                        // ALTERAÇÃO: Cor do texto e do hover da badge para tema claro/escuro
                        className="px-3 py-1.5 text-xs text-gray-800 dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/15 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "+5", label: "Anos de Experiência" },
                { number: "+50", label: "Projetos Completos" },
                { number: "+30", label: "Clientes Satisfeitos" },
                { number: "+20", label: "Tecnologias" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      type: "spring"
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  {/* ALTERAÇÃO: Cor do texto do label para tema claro/escuro */}
                  <div className="text-sm text-gray-600 dark:text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}