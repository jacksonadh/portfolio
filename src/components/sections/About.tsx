import { Code2, Zap, Users, Award, ArrowRight } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const techStack = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'Next.js', color: 'text-white' },
  { name: 'VTEX IO', color: 'text-pink-400' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'GraphQL', color: 'text-pink-500' },
  { name: 'Tailwind CSS', color: 'text-teal-400' },
]

const values = [
  {
    icon: Code2,
    title: 'Código de Qualidade',
    description: 'Código tipado, testável e documentado. Fácil de manter, evoluir e escalar sem dor de cabeça.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sites que carregam em menos de 3 segundos. Melhor experiência, melhor SEO, mais conversão.',
  },
  {
    icon: Users,
    title: 'Foco no Cliente',
    description: 'Entendemos seu negócio antes de escrever uma linha de código. Soluções que resolvem problemas reais.',
  },
  {
    icon: Award,
    title: 'Compromisso',
    description: 'Prazos cumpridos e comunicação direta. Você sabe o status do projeto a qualquer momento.',
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="sobre-nos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Resultados sólidos com tecnologia de ponta"
        >
          Sobre Nós
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Seu projeto merece{' '}
              <span className="text-primary">código que gera resultados</span>
            </h3>
            
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Desenvolvemos aplicações web, e-commerces e sistemas que funcionam. 
                Sem gambiarras, sem código legado, sem surpresas. Nossa especialidade 
                é transformar demandas complexas em soluções rápidas, escaláveis e 
                prontas para crescer junto com seu negócio.
              </p>
              <p>
                Trabalhamos com empresas que valorizam qualidade técnica e entregas 
                no prazo. Cada projeto recebe atenção dedicada, com comunicação clara 
                e processos bem definidos. Do briefing ao deploy, você acompanha 
                cada etapa e sabe exatamente o que está sendo construído.
              </p>
              <p>
                A <strong className="text-text">Código Primordial</strong> é liderada 
                por <strong className="text-text">Jackson Almeida</strong>, desenvolvedor 
                front-end com mais de 5 anos de experiência em projetos para empresas 
                como <strong className="text-text">Amara Nzero Brasil</strong>, além de 
                e-commerces e aplicações corporativas de alta demanda.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-sm text-text-muted mb-3 font-medium">Stack de desenvolvimento:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 bg-surface rounded-full text-sm font-mono ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div 
                  key={value.title}
                  className="p-6 bg-surface rounded-2xl border border-surface-light hover:border-primary/30 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-text mb-2">
                    {value.title}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center lg:text-left">
          <p className="text-text-muted mb-4">
            Pronto para começar seu projeto com uma equipe que entrega?
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-semibold transition-colors"
          >
            Solicitar orçamento
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
