import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '../common/Button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal - Código Primordial"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

        {/* Circuit pattern background */}
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bg_3.png')" }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-primary/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-text-muted text-sm font-medium">
            Agência especializada em React, VTEX e e-commerce
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Sites e aplicações que{' '}
          <span className="text-primary text-glow font-mono">
            vendem
          </span>.
          <br />
          Código que escala.
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Criamos landing pages, sistemas em React e lojas VTEX para empresas
          que precisam de <span className="text-secondary">performance, conversão e código confiável</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button href="#contato" size="lg">
            Solicitar proposta gratuita
            <ArrowRight size={20} />
          </Button>
          <Button href="#servicos" variant="outline" size="lg">
            Ver o que entregamos
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-surface-light max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono">3+</div>
            <div className="text-text-muted text-sm mt-1">anos no mercado</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono">30+</div>
            <div className="text-text-muted text-sm mt-1">projetos entregues</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono">100%</div>
            <div className="text-text-muted text-sm mt-1">foco em resultado</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#servicos"
          className="text-text-muted hover:text-primary transition-colors"
          aria-label="Rolar para seção de serviços"
        >
          <ChevronDown size={32} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
