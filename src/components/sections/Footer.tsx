import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface py-12 border-t border-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-2xl font-bold">
              &lt;/&gt;
            </span>
            <span className="text-text font-semibold">
              Código <span className="text-primary">Primordial</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jacksonadh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jah7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@codigoprimordial.com"
              className="p-3 bg-surface-light rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="E-mail"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-text-muted text-sm">
            © {currentYear} Código Primordial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
