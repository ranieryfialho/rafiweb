import { motion } from "framer-motion"
import { GlassCard } from "@/components/GlassCard"
import { 
  FileText,
  Globe,
  ShoppingBag,
  Server,
  Smartphone,
  Shield
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Landing Page",
      description: "Crie uma primeira impressão marcante com nossas landing pages personalizadas. Projetadas para conversão, elas são a chave para capturar a atenção do seu público-alvo e impulsionar suas campanhas de marketing. Deixe que cada clique converta-se em ação!",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Site Institucional",
      description: "Fortaleça sua presença online com um site institucional que reflete a essência da sua marca. Nossos designs são limpos, profissionais e otimizados para proporcionar uma navegação fluida e informativa, garantindo que seus visitantes conheçam e confiem em sua empresa.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "Loja Virtual",
      description: "Amplie suas vendas com uma plataforma de e-commerce robusta e fácil de gerenciar. Oferecemos soluções completas que facilitam desde a gestão de produtos até o fechamento de vendas, proporcionando uma experiência de compra agradável e segura para seus clientes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Server,
      title: "Hospedagem de Sites",
      description: "Garanta que seu site esteja sempre disponível e rápido com nossos serviços de hospedagem de alta performance. Com suporte técnico especializado e infraestrutura confiável, mantemos seu site online 24/7.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Web Apps",
      description: "Expanda as funcionalidades do seu site com nossos apps personalizados. Criados para oferecer soluções exclusivas para seu negócio, nossos aplicativos são intuitivos e perfeitamente integrados.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Manutenção com Backup",
      description: "Mantenha seu site sempre atualizado e seguro com nossos serviços de manutenção completa e backup automatizado. Garantimos a segurança dos seus dados e a performance contínua do seu site.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SERVIÇOS
          </h2>
          <p className="text-lg text-white/60 max-w-4xl mx-auto">
            Um site vai além de uma simples página na internet. Ele é a porta de entrada para o seu negócio, 
            a vitrine que apresenta seus produtos ou serviços e a ferramenta poderosa para alcançar seus objetivos.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard 
                className="p-6 h-full group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                hover={true}
                gradient={true}
              >
                {/* Ícone e título */}
                <div className="flex items-start mb-4">
                  {/* Container do ícone com gradiente */}
                  <div className={`
                    w-14 h-14 rounded-xl 
                    bg-gradient-to-br ${service.color} p-0.5
                    group-hover:scale-110 transition-transform duration-300
                    flex-shrink-0
                  `}>
                    <div className="w-full h-full bg-black/60 backdrop-blur rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Título do serviço */}
                  <h3 className="ml-4 text-xl font-semibold text-white pt-3">
                    {service.title}
                  </h3>
                </div>

                {/* Descrição do serviço */}
                <p className="text-sm text-justify text-white/70 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Indicador de ação no hover */}
                <div className="flex items-center justify-between mt-auto">
                  {/* Linha decorativa */}
                  <div className={`
                    h-0.5 flex-1 mr-4 rounded-full
                    bg-gradient-to-r ${service.color} opacity-0
                    group-hover:opacity-100 transition-opacity duration-500
                  `} />
                  
                  {/* Texto "Saiba mais" com seta */}
                  <div className="flex items-center text-white/40 group-hover:text-white/80 transition-colors">
                    <span className="text-xs font-medium">Saiba mais</span>
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Pronto para transformar sua presença digital?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  )
}