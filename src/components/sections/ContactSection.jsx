import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { GlassCard } from "@/components/GlassCard"
import { Button } from "@/components/ui/button"
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram
} from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  // Função de envio do formulário
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simular envio (substitua por sua lógica real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Form data:", data)
      setSubmitStatus("success")
      reset()
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Links sociais
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Fale Comigo
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível.
          </p>
        </motion.div>

        {/* Formulário de contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Campo Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Nome
                  </label>
                  <input
                    {...register("name", { 
                      required: "O nome é obrigatório",
                      minLength: {
                        value: 2,
                        message: "O nome deve ter pelo menos 2 caracteres"
                      }
                    })}
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-gray-50 dark:bg-white/5 backdrop-blur-md
                      border ${errors.name ? 'border-red-500/50' : 'border-gray-300 dark:border-white/10'}
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-white/40
                      focus:outline-none focus:border-purple-500 dark:focus:border-neon-purple/50
                      focus:bg-white dark:focus:bg-white/10 
                      transition-all duration-300
                    `}
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-xs mt-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                {/* Campo Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email
                  </label>
                  <input
                    {...register("email", { 
                      required: "O e-mail é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Endereço de e-mail inválido"
                      }
                    })}
                    type="email"
                    className={`
                      w-full px-4 py-3 rounded-lg
                      bg-gray-50 dark:bg-white/5 backdrop-blur-md
                      border ${errors.email ? 'border-red-500/50' : 'border-gray-300 dark:border-white/10'}
                      text-gray-900 dark:text-white 
                      placeholder-gray-400 dark:placeholder-white/40
                      focus:outline-none focus:border-purple-500 dark:focus:border-neon-purple/50
                      focus:bg-white dark:focus:bg-white/10 
                      transition-all duration-300
                    `}
                    placeholder="Seu email"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-xs mt-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Campo Assunto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                  Assunto
                </label>
                <input
                  {...register("subject", { 
                    required: "O assunto é obrigatório",
                    minLength: {
                      value: 5,
                      message: "O assunto deve ter pelo menos 5 caracteres"
                    }
                  })}
                  className={`
                    w-full px-4 py-3 rounded-lg
                    bg-gray-50 dark:bg-white/5 backdrop-blur-md
                    border ${errors.subject ? 'border-red-500/50' : 'border-gray-300 dark:border-white/10'}
                    text-gray-900 dark:text-white 
                    placeholder-gray-400 dark:placeholder-white/40
                    focus:outline-none focus:border-purple-500 dark:focus:border-neon-purple/50
                    focus:bg-white dark:focus:bg-white/10 
                    transition-all duration-300
                  `}
                  placeholder="Consulta de Projeto"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 dark:text-red-400 text-xs mt-1"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </div>

              {/* Campo Mensagem */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Mensagem
                </label>
                <textarea
                  {...register("message", { 
                    required: "A mensagem é obrigatória",
                    minLength: {
                      value: 10,
                      message: "A mensagem deve ter pelo menos 10 caracteres"
                    }
                  })}
                  rows={5}
                  className={`
                    w-full px-4 py-3 rounded-lg resize-none
                    bg-gray-50 dark:bg-white/5 backdrop-blur-md
                    border ${errors.message ? 'border-red-500/50' : 'border-gray-300 dark:border-white/10'}
                    text-gray-900 dark:text-white 
                    placeholder-gray-400 dark:placeholder-white/40
                    focus:outline-none focus:border-purple-500 dark:focus:border-neon-purple/50
                    focus:bg-white dark:focus:bg-white/10 
                    transition-all duration-300
                  `}
                  placeholder="Conte-me sobre seu projeto..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 dark:text-red-400 text-xs mt-1"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Botão de envio */}
              <div className="flex flex-col items-center">
                <Button
                  type="submit"
                  variant="glass"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 group 
                    dark:text-white light:text-gray-900 
                    dark:border-white/20 light:border-gray-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 
                        border-gray-400 dark:border-white/20 
                        border-t-gray-700 dark:border-t-white mr-2" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>

                {/* Feedback de status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Mensagem enviada com sucesso!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Algo deu errado. Tente novamente.
                  </motion.div>
                )}
              </div>
            </form>
          </GlassCard>
        </motion.div>

        {/* Links sociais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-white/60 mb-4">
            ou entre em contato comigo pelas redes
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-12 h-12 rounded-lg
                  bg-gray-100 dark:bg-white/5 
                  backdrop-blur-md 
                  border border-gray-300 dark:border-white/10
                  flex items-center justify-center
                  hover:bg-gray-200 dark:hover:bg-white/10 
                  hover:border-gray-400 dark:hover:border-white/20
                  transition-all duration-300
                "
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-700 dark:text-white/80" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}