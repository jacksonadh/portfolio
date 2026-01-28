import { MessageSquare, FileText, Palette, Code2, Rocket } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Briefing',
    description: 'Você conta o que precisa. Nós escutamos, fazemos as perguntas certas e alinhamos expectativas desde o primeiro dia. Zero retrabalho por falta de clareza.',
    duration: '1-2 dias',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposta',
    description: 'Você recebe um documento claro com escopo, prazo, tecnologias e investimento. Sem letras miúdas. Tudo transparente antes de começar.',
    duration: '2-3 dias',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design & Protótipo',
    description: 'Antes de escrever uma linha de código, você visualiza e aprova o design. Ajustes são feitos aqui, quando custam menos.',
    duration: '1-2 semanas',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'Entregas parciais para você acompanhar o progresso em tempo real. Código limpo, testado e documentado. Sem surpresas na reta final.',
    duration: '2-8 semanas',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Entrega & Suporte',
    description: 'Seu projeto vai ao ar com acompanhamento. Treinamento incluso e suporte contínuo para ajustes e evolução.',
    duration: 'Contínuo',
  },
]

export function Process() {
  return (
    <section id="processo" className="py-20 md:py-32 bg-background relative overflow-hidden" aria-labelledby="processo-de-trabalho-titulo">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle 
          subtitle="Cada etapa clara. Sem surpresas. Você acompanha tudo."
        >
          Do briefing à entrega
        </SectionTitle>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / Horizontal line (desktop) */}
          <div className="absolute left-8 md:left-0 md:top-[60px] w-px md:w-full h-full md:h-px bg-surface-light" />
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.number}
                  className="relative pl-20 md:pl-0 md:text-center group"
                >
                  {/* Step number and icon */}
                  <div className="absolute left-0 md:relative md:left-auto flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 bg-surface border-2 border-surface-light rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-surface-light transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-mono text-primary text-sm mt-2 opacity-60">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:mt-6">
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-surface rounded-2xl border border-surface-light">
          <p className="text-text-muted mb-4">
            Sem compromisso. O briefing é gratuito e você já sai com clareza sobre seu projeto.
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-xl hover:bg-primary-400 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Agendar briefing gratuito
            <MessageSquare size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
