import { Globe, Code2, ShoppingCart, Wrench, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../common/Card'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const services = [
  {
    icon: Globe,
    title: 'Landing Pages e Sites Institucionais',
    description: 'Sua empresa precisa ser encontrada e gerar confiança em segundos. Criamos sites que carregam rápido, aparecem no Google e convertem visitantes em leads qualificados.',
    benefits: ['Conversão de leads', 'SEO que rankeia', 'Carregamento rápido'],
    cta: 'Criar minha landing page',
  },
  {
    icon: Code2,
    title: 'Aplicações Web em React/TypeScript',
    description: 'Dashboards, painéis administrativos e sistemas sob medida. Interfaces que sua equipe realmente usa, com código que não vira legado em 6 meses.',
    benefits: ['Escala sem retrabalho', 'Interface intuitiva', 'Código limpo'],
    cta: 'Desenvolver minha aplicação',
  },
  {
    icon: ShoppingCart,
    title: 'Lojas VTEX IO e E-commerce',
    description: 'Checkout que não abandona carrinho. Lojas VTEX ou customizadas com foco em redução de atrito e aumento de ticket médio. Venda mais com menos cliques.',
    benefits: ['Menos abandono', 'Mais conversão', 'Integração com ERP'],
    cta: 'Escalar meu e-commerce',
  },
  {
    icon: Wrench,
    title: 'Consultoria e Manutenção Front-end',
    description: 'Seu site já existe mas está lento, quebrado ou defasado? Fazemos diagnóstico, correção e evolução sem precisar recomeçar do zero.',
    benefits: ['Correção rápida', 'Evolução contínua', 'Sem refazer tudo'],
    cta: 'Solicitar diagnóstico',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="servicos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Do primeiro clique até a conversão. Soluções que geram receita."
        >
          O que entregamos
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.title} 
                className="group"
                glow
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <CardFooter>
                  <Button 
                    href="#contato" 
                    variant="ghost" 
                    size="sm"
                    className="group/btn"
                  >
                    {service.cta}
                    <ArrowRight 
                      size={16} 
                      className="group-hover/btn:translate-x-1 transition-transform" 
                    />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
