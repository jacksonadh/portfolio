import { ExternalLink, Github } from 'lucide-react'
import { SectionTitle } from '../common/SectionTitle'
import { Card } from '../common/Card'

const projects = [
  {
    title: 'Landing Page Responsiva',
    client: '7 Days of Code - Alura',
    description: 'Landing page moderna desenvolvida em HTML, CSS e JavaScript puro. Design responsivo com foco em performance e experiência do usuário.',
    image: 'https://github.com/jacksonadh/Alura7DaysOfCodeHtml/raw/master/img/img%20para%20readme/Desktop.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    metrics: ['Performance 95+', 'Mobile-first', 'Carregamento < 2s'],
    liveUrl: 'https://jacksonadh.github.io/Alura7DaysOfCodeHtml/',
    repoUrl: 'https://github.com/jacksonadh/Alura7DaysOfCodeHtml',
  },
  {
    title: 'Dashboard Administrativo',
    client: 'Projeto Interno',
    description: 'Painel administrativo desenvolvido em React com TypeScript. Interface moderna com gráficos interativos, gestão de dados e autenticação.',
    image: null,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API REST'],
    metrics: ['Interface intuitiva', 'Real-time updates', 'Multi-usuário'],
    liveUrl: null,
    repoUrl: null,
  },
  {
    title: 'E-commerce VTEX IO',
    client: 'Cliente Confidencial',
    description: 'Loja virtual completa na plataforma VTEX IO. Customização de checkout, integrações com meios de pagamento e otimização de conversão.',
    image: null,
    tags: ['VTEX IO', 'React', 'GraphQL', 'Node.js'],
    metrics: ['+30% conversão', 'SEO otimizado', 'Checkout rápido'],
    liveUrl: null,
    repoUrl: null,
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background" aria-labelledby="portfolio-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Cases de sucesso que demonstram nossa expertise em desenvolvimento web"
        >
          Portfólio
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden" glow>
              <div className="relative -mx-6 -mt-6 mb-6 h-48 bg-surface-light overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title} - ${project.client}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <span className="text-4xl font-mono text-primary/50">&lt;/&gt;</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-background rounded-full hover:scale-110 transition-transform"
                      aria-label="Ver projeto"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surface-light text-text rounded-full hover:scale-110 transition-transform"
                      aria-label="Ver código"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <span className="text-secondary text-sm font-medium">
                  {project.client}
                </span>
                <h3 className="text-xl font-semibold text-text mt-1 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-light">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-text-muted text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Quer ver mais projetos ou discutir sua ideia?
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 font-semibold transition-colors"
          >
            Vamos conversar
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
