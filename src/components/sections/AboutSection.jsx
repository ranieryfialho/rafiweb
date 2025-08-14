import { motion } from "framer-motion"
import { GlassCard } from "@/components/GlassCard"
import { User, Briefcase, Award, Heart } from "lucide-react"

export function AboutSection() {
  const aboutCards = [
    {
      icon: User,
      title: "Quem Eu Sou",
      content: "Um desenvolvedor web, com um olhar aguçado para design e amor por criar experiências perfeitas para o usuário.",
      gradient: "from-neon-purple to-neon-blue"
    },
    {
      icon: Briefcase,
      title: "O Que Eu Faço",
      content: "Sou especialista em criar aplicativos web modernos, soluções de e-commerce e em ajudar empresas a estabelecer sua presença digital.",
      gradient: "from-neon-blue to-neon-green"
    },
    {
      icon: Award,
      title: "Minha Abordagem",
      content: "Acredito em código limpo, design intuitivo e na entrega de soluções que não apenas atendam, mas superem as expectativas do cliente.",
      gradient: "from-neon-green to-neon-pink"
    },
    {
      icon: Heart,
      title: "Minha Paixão",
      content: "Além de programar, sou apaixonado por me manter atualizado com as últimas tendências tecnológicas e contribuir para projetos de código aberto.",
      gradient: "from-neon-pink to-neon-purple"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Transformando ideias em realidade através de código e criatividade
          </p>
        </motion.div>

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-white/80 text-justify leading-relaxed text-lg mb-6">
                Olá! Meu nome é Raniery Fialho e atuo há mais de uma década como educador, com formação em Ciência de Dados, pós graduação em Análise e Desenvolvimento de Sistemas e experiência prática como desenvolvedor de sites. Com um histórico consolidado em educação e tecnologia e focado em desenvolvimento de web apps, sites institucionais, landing pages e e-commerces.
              </p>
              <p className="text-gray-700 dark:text-white/80 text-justify leading-relaxed text-lg mb-6">
                Sou apaixonado por transmitir conhecimento e habilidades, apoiando pequenas e grandes empresas no desenvolvimento da sua identidade visual, consolidação de marca e posicionamento no mercado digital. 
              </p>
              <p className="text-gray-700 dark:text-white/80 text-justify leading-relaxed text-lg">
                Meu objetivo é ajudar empresas a estabelecerem uma presença online marcante através do desenvolvimento de sites eficazes, reforçando o posicionamento de marca no universo digital. Ao fortalecer minha posição no setor, contribuo ativamente para a evolução contínua de profissionais e entusiastas, mostrando como uma presença online estratégica pode transformar negócios e carreiras.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
            >
              <GlassCard className="p-6 h-full group">
                {/* Ícone */}
                <div className={`
                  w-12 h-12 rounded-lg mb-4
                  bg-gradient-to-br ${card.gradient} p-0.5
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <div className="w-full h-full bg-gray-100 dark:bg-black/50 backdrop-blur rounded-lg flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>

                {/* Conteúdo */}
                <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                  {card.content}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}