import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionTitle({ 
  children, 
  subtitle, 
  align = 'center',
  className = '' 
}: SectionTitleProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  // Generate ID from children for aria-labelledby
  const sectionId = typeof children === 'string' 
    ? `${children.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}-titulo`
    : undefined

  return (
    <div className={`mb-12 ${alignStyles[align]} ${className}`}>
      <h2 
        id={sectionId}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4"
      >
        <span className="text-primary font-mono" aria-hidden="true">&lt;</span>
        {children}
        <span className="text-primary font-mono" aria-hidden="true">/&gt;</span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
