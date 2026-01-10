import { Globe, Code2, ShoppingCart, Wrench, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../common/Card'
import { SectionTitle } from '../common/SectionTitle'
import { Button } from '../common/Button'

const services = [
  {
    icon: Globe,
    title: 'Landing Pages e Sites Institucionais',
    description: 'Sites rápidos, responsivos e otimizados para conversão. Ideal para apresentar sua empresa, captar leads e gerar credibilidade online.',
    benefits: ['SEO otimizado', 'Design responsivo', 'Alta performance'],
  },
  {
    icon: Code2,
    title: 'Aplicações Web em React/TypeScript',
    description: 'Sistemas e dashboards customizados com código de qualidade. Interfaces modernas que escalam junto com seu negócio.',
    benefits: ['Código tipado', 'Arquitetura escalável', 'Manutenção fácil'],
  },
  {
    icon: ShoppingCart,
    title: 'Lojas VTEX IO e E-commerce',
    description: 'Lojas virtuais completas na plataforma VTEX ou soluções customizadas. Foco em UX e checkout otimizado para aumentar suas vendas.',
    benefits: ['Checkout otimizado', 'Integrações nativas', 'Gestão simplificada'],
  },
  {
    icon: Wrench,
    title: 'Consultoria e Manutenção Front-end',
    description: 'Suporte contínuo, correção de bugs e melhorias em projetos existentes. Mantemos seu site atualizado e funcionando perfeitamente.',
    benefits: ['Suporte dedicado', 'Atualizações', 'Monitoramento'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-surface-dark" aria-labelledby="servicos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Soluções completas de desenvolvimento web para impulsionar seu negócio digital"
        >
          Serviços
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
                    Quero este serviço
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
