import { useState, FormEvent } from 'react'
import { Send, Mail, Clock, CheckCircle } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const projectTypes = [
  'Landing Page / Site Institucional',
  'Aplicação Web (React/TypeScript)',
  'E-commerce / Loja VTEX',
  'Consultoria / Manutenção',
  'Outro',
]

const budgetRanges = [
  'Até R$ 5.000',
  'R$ 5.000 - R$ 15.000',
  'R$ 15.000 - R$ 30.000',
  'R$ 30.000 - R$ 50.000',
  'Acima de R$ 50.000',
  'A definir',
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simular envio - em produção, integrar com backend/email service
    console.log('Form data:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 md:py-32 bg-surface-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 bg-surface rounded-2xl border border-primary/30">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              Mensagem Enviada!
            </h3>
            <p className="text-text-muted mb-6">
              Obrigado pelo contato! Retornaremos em até 24 horas úteis.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Enviar nova mensagem
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="solicitar-orcamento-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Conte-nos sobre seu projeto e receba uma proposta personalizada"
        >
          Solicitar Orçamento
        </SectionTitle>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">
                Vamos construir algo incrível juntos
              </h3>
              <p className="text-text-muted leading-relaxed">
                Preencha o formulário ao lado com os detalhes do seu projeto. 
                Quanto mais informações você fornecer, mais precisa será nossa proposta.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">E-mail</p>
                  <a 
                    href="mailto:contato@codigoprimordial.com" 
                    className="text-text hover:text-primary transition-colors"
                  >
                    contato@codigoprimordial.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Tempo de resposta</p>
                  <p className="text-text">Até 24 horas úteis</p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="p-6 bg-surface rounded-xl border border-surface-light">
              <p className="text-text-muted text-sm italic">
                "Excelente trabalho! O Jackson entregou nosso projeto no prazo 
                e com qualidade excepcional. Recomendo!"
              </p>
              <p className="text-primary text-sm mt-3 font-medium">
                — Cliente Satisfeito
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-text text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-text text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-text text-sm font-medium mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Nome da sua empresa (opcional)"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-text text-sm font-medium mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-text text-sm font-medium mb-2">
                    Orçamento Estimado *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-text text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Descreva seu projeto, objetivos e expectativas..."
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between">
                <p className="text-text-muted text-sm">
                  * Campos obrigatórios
                </p>
                <Button type="submit" size="lg">
                  Enviar Mensagem
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
