import { Code2, Zap, Users, Award } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'

const techStack = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'VTEX IO', color: 'text-pink-400' },
  { name: 'Tailwind CSS', color: 'text-teal-400' },
  { name: 'Node.js', color: 'text-green-400' },
  { name: 'Next.js', color: 'text-white' },
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'GraphQL', color: 'text-pink-500' },
]

const values = [
  {
    icon: Code2,
    title: 'Código de Qualidade',
    description: 'Escrevemos código limpo, tipado e bem documentado que facilita manutenção e evolução.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sites rápidos que carregam em segundos e oferecem experiência fluida aos usuários.',
  },
  {
    icon: Users,
    title: 'Foco no Cliente',
    description: 'Entendemos seu negócio para entregar soluções que realmente geram resultados.',
  },
  {
    icon: Award,
    title: 'Compromisso',
    description: 'Prazos respeitados e comunicação transparente do início ao fim do projeto.',
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="sobre-nos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Conheça a agência por trás do código"
        >
          Sobre Nós
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Transformando ideias em{' '}
              <span className="text-primary">experiências digitais</span>
            </h3>
            
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                A <strong className="text-text">Código Primordial</strong> é um estúdio de 
                desenvolvimento web fundado por <strong className="text-text">Jackson Almeida</strong>, 
                desenvolvedor front-end com mais de 5 anos de experiência no mercado.
              </p>
              <p>
                Nossa especialidade é criar soluções web modernas utilizando as melhores 
                tecnologias do mercado: React, TypeScript, VTEX IO e todo o ecossistema 
                JavaScript. Já trabalhamos com empresas como <strong className="text-text">Amara Nzero Brasil</strong> e 
                diversos projetos de e-commerce e aplicações corporativas.
              </p>
              <p>
                Acreditamos que cada projeto é único e merece atenção personalizada. 
                Por isso, trabalhamos de forma próxima aos nossos clientes, garantindo 
                que cada linha de código entregue valor real ao negócio.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-sm text-text-muted mb-3 font-medium">Tecnologias que dominamos:</p>
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
      </div>
    </section>
  )
}
