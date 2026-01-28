import { useState, useEffect, FormEvent, useMemo } from 'react'
import { Send, Mail, Clock, CheckCircle, AlertCircle, Loader2, Phone, User } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

// Tipos de projeto com value e label para melhor qualificação
const projectTypes = [
  { value: 'site', label: 'Site institucional ou portfólio' },
  { value: 'landing', label: 'Landing page (campanha ou lançamento)' },
  { value: 'ecommerce', label: 'Loja virtual / E-commerce' },
  { value: 'sistema', label: 'Sistema ou plataforma web' },
  { value: 'saas', label: 'Produto digital / SaaS' },
  { value: 'manutencao', label: 'Manutenção ou melhorias em projeto existente' },
  { value: 'outro', label: 'Outro (descreva na mensagem)' },
]

// Faixas de orçamento com linguagem acolhedora
const budgetRanges = [
  { value: 'ate-5k', label: 'Até R$ 5.000' },
  { value: '5k-15k', label: 'R$ 5.000 a R$ 15.000' },
  { value: '15k-30k', label: 'R$ 15.000 a R$ 30.000' },
  { value: '30k-50k', label: 'R$ 30.000 a R$ 50.000' },
  { value: 'acima-50k', label: 'Acima de R$ 50.000' },
  { value: 'definir', label: 'Preciso de ajuda para estimar' },
]

// Placeholders dinâmicos por tipo de projeto (briefing guiado)
const messagePlaceholders: Record<string, string> = {
  site: `Descreva sua empresa e o objetivo do site.
- Qual o público-alvo?
- Tem referências ou sites que gosta?
- Existe prazo ou data importante?`,

  landing: `Qual o objetivo da landing page?
- É para captar leads, vender ou lançar algo?
- Tem referências visuais?
- Quando precisa estar no ar?`,

  ecommerce: `Conte sobre seus produtos e mercado.
- Quantos produtos pretende vender?
- Já usa alguma plataforma?
- Qual o prazo desejado?`,

  sistema: `Descreva o problema que o sistema precisa resolver.
- Quem vai usar?
- Existe algo similar no mercado?
- Quais funcionalidades são essenciais?`,

  saas: `Descreva sua ideia de produto.
- Qual problema ele resolve?
- Quem é o usuário ideal?
- Está em fase de validação ou escala?`,

  manutencao: `Conte sobre o projeto atual.
- O que precisa ser melhorado?
- Quais problemas está enfrentando?
- Tem acesso ao código-fonte?`,

  outro: `Descreva seu projeto ou ideia.
- Qual o objetivo principal?
- Quem é o público-alvo?
- Tem prazo ou orçamento definido?`,

  default: `Descreva seu projeto ou necessidade.
- Qual o objetivo?
- Quem é o público-alvo?
- Tem referências ou prazo?`,
}

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

  // Placeholder dinâmico baseado no tipo de projeto selecionado
  const currentPlaceholder = useMemo(() => {
    return messagePlaceholders[formData.projectType] || messagePlaceholders.default
  }, [formData.projectType])

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
      // Converte o value do projectType para o label antes de enviar
      const selectedProjectType = projectTypes.find(t => t.value === formData.projectType)
      const selectedBudget = budgetRanges.find(b => b.value === formData.budget)

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectType: selectedProjectType?.label || formData.projectType,
          budget: selectedBudget?.label || formData.budget,
        }),
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
              Recebemos seu briefing!
            </h3>
            <p className="text-text-muted mb-6">
              Agora é com a gente. Você receberá uma proposta personalizada em até 24 horas úteis no e-mail informado.
            </p>
            <Button onClick={resetForm} variant="outline">
              Enviar outro projeto
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="conte-sobre-seu-projeto-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Responda algumas perguntas e receba uma proposta sob medida. Sem compromisso."
        >
          Conte sobre seu projeto
        </SectionTitle>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">
                Não sabe exatamente o que precisa? Sem problema.
              </h3>
              <p className="text-text-muted leading-relaxed">
                Este formulário foi feito para guiar você. Responda o que souber e nós cuidamos do resto. 
                Quanto mais contexto, melhor a proposta.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">E-mail direto</p>
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
                  <User className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Atendimento humano</p>
                  <p className="text-text">Resposta em até 24h úteis. Sem robôs.</p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="p-6 bg-surface rounded-xl border border-surface-light">
              <p className="text-text-muted text-sm italic">
                "Consegui explicar minha ideia mesmo sem saber nada de tecnologia. 
                Em uma semana já tinha a proposta e o cronograma."
              </p>
              <p className="text-primary text-sm mt-3 font-medium">
                — Fundador de startup
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
                    Seu nome *
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
                    placeholder="Como podemos te chamar?"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-text text-sm font-medium mb-2">
                    E-mail para contato *
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
                      WhatsApp (opcional)
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
                    Empresa ou projeto
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={status === 'loading'}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Ex: Minha Startup, Loja do João..."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-text text-sm font-medium mb-2">
                    O que você precisa? *
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
                    <option value="" disabled>Escolha a opção mais próxima</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-text text-sm font-medium mb-2">
                    Investimento previsto *
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
                    <option value="" disabled>Selecione uma faixa</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-text text-sm font-medium mb-2">
                  Conte mais sobre o projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={status === 'loading'}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-surface-light rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={currentPlaceholder}
                />
                <p className="text-text-muted text-xs mt-2">
                  Não se preocupe em ser técnico. Escreva como se estivesse explicando para um amigo.
                </p>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-text-muted text-sm">
                  * Campos obrigatórios. Suas informações estão seguras.
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
                      Enviar e receber proposta
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
