import { useState, useEffect, FormEvent } from 'react'
import { Send, Mail, Clock, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react'
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

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const STORAGE_KEY = 'contact-form-draft'

// Máscara de telefone brasileiro
function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, '')
  
  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : ''
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  // Carregar dados salvos do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setStatus('success')
      // Limpa dados salvos e reseta form
      localStorage.removeItem(STORAGE_KEY)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    
    // Aplica máscara de telefone
    const newValue = name === 'phone' ? formatPhone(value) : value
    const updatedData = { ...formData, [name]: newValue }
    
    setFormData(updatedData)
    
    // Salva no localStorage para não perder dados ao atualizar
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData))
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  // Success state
  if (status === 'success') {
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
              Obrigado pelo contato! Recebemos sua solicitação e retornaremos em até 24 horas úteis.
            </p>
            <Button onClick={resetForm} variant="outline">
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
              {/* Error message */}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}

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
                    disabled={status === 'loading'}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={status === 'loading'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-text text-sm font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefone / WhatsApp
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={status === 'loading'}
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={16}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="(11) 99999-9999"
                  />
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
                    disabled={status === 'loading'}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Nome da sua empresa (opcional)"
                  />
                </div>
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
                    disabled={status === 'loading'}
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={status === 'loading'}
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={status === 'loading'}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Descreva seu projeto, objetivos e expectativas..."
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between">
                <p className="text-text-muted text-sm">
                  * Campos obrigatórios
                </p>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={status === 'loading'}
                  className={status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
