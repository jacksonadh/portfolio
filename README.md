# Código Primordial - Site da Agência

<p align="center">
  <img src="public/favicon.svg" alt="Logo Código Primordial" width="80" />
</p>

<p align="center">
  <strong>Agência de desenvolvimento web especializada em React, TypeScript, VTEX e e-commerce.</strong>
</p>

<p align="center">
  <a href="https://jacksonadh.github.io/portfolio/">🌐 Ver Site</a> •
  <a href="#-instalação">📦 Instalação</a> •
  <a href="#-seções-do-site">📱 Seções</a> •
  <a href="#-deploy">🚀 Deploy</a>
</p>

---

## 📋 Sobre o Projeto

Site institucional da agência **Código Primordial**, transformado a partir de um portfólio pessoal para um site profissional focado em clientes B2B (SaaS, e-commerce, pequenas empresas).

### Características Principais

- ✅ **Design moderno** com estética dark/neon (verde #39ff14, roxo #8b5cf6)
- ✅ **Totalmente responsivo** para mobile, tablet e desktop
- ✅ **SEO otimizado** com meta tags, Open Graph e descrições
- ✅ **Micro-interactions** suaves em hovers e transições
- ✅ **Código tipado** com TypeScript para maior segurança
- ✅ **Componentização** seguindo boas práticas React

---

## 🚀 Tecnologias

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 18.3.1 | Biblioteca para construção de interfaces |
| TypeScript | 5.6.2 | Tipagem estática para JavaScript |
| Vite | 6.0.5 | Build tool rápida e moderna |
| Tailwind CSS | 3.4.17 | Framework CSS utilitário |
| Lucide React | 0.468.0 | Biblioteca de ícones |
| Resend | 4.x | API de envio de e-mails transacionais |
| Vercel Analytics | 1.6.1 | Métricas de visitantes |

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm 9+ ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/jacksonadh/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em: `http://localhost:5173/portfolio/`

---

## 🏗️ Estrutura do Projeto

```
portfolio/
├── public/
│   └── favicon.svg           # Favicon da marca
├── assets/                   # Imagens de background
│   └── bg_3.png              # Pattern de circuitos
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Componente principal
│   ├── index.css             # Estilos globais + Tailwind
│   ├── vite-env.d.ts         # Types do Vite
│   └── components/
│       ├── common/           # Componentes reutilizáveis
│       │   ├── Button.tsx    # Botão com 4 variantes
│       │   ├── Card.tsx      # Card com sub-componentes
│       │   ├── Navbar.tsx    # Navegação responsiva
│       │   ├── SectionTitle.tsx
│       │   └── index.ts      # Barrel export
│       └── sections/         # Seções do site
│           ├── Hero.tsx      # Seção inicial
│           ├── Services.tsx  # 4 serviços oferecidos
│           ├── Portfolio.tsx # Cases de projetos
│           ├── About.tsx     # Sobre a agência
│           ├── Process.tsx   # Processo de trabalho
│           ├── Contact.tsx   # Formulário de orçamento
│           ├── Footer.tsx    # Rodapé
│           └── index.ts      # Barrel export
├── index.html                # Template HTML com SEO
├── package.json              # Dependências e scripts
├── vite.config.ts            # Configuração Vite
├── tailwind.config.js        # Tema e cores da marca
├── tsconfig.json             # Configuração TypeScript
└── postcss.config.js         # Configuração PostCSS
```

---

## 🎨 Paleta de Cores

A identidade visual é baseada no logo da agência: fundo escuro com acentos neon.

| Token | Cor | Hex | Uso |
|-------|-----|-----|-----|
| `primary` | 🟢 Verde Neon | `#39ff14` | CTAs, destaques, logo |
| `secondary` | 🟣 Roxo | `#8b5cf6` | Ícones, acentos, hovers |
| `background` | ⬛ Preto | `#0a0a0a` | Fundo principal |
| `surface` | 🔲 Cinza Escuro | `#1a1a1a` | Cards, navbar |
| `text` | ⬜ Branco | `#f5f5f5` | Texto principal |
| `muted` | 🔘 Cinza | `#737373` | Texto secundário |

### Fontes

- **Outfit** - Fonte principal (sans-serif)
- **JetBrains Mono** - Fonte monospace para código e destaques

---

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build local
npm run lint     # Verifica código com ESLint
npm run deploy   # Deploy para GitHub Pages
```

---

## 📱 Seções do Site

### 1. Hero
- Headline principal: "Aplicando o Código Primordial ao seu produto digital"
- CTAs: "Solicitar Orçamento" e "Ver Serviços"
- Estatísticas: 5+ anos, 50+ projetos, 100% satisfação
- Background com gradient e pattern de circuitos

### 2. Serviços
Quatro cards com serviços oferecidos:
| Serviço | Descrição |
|---------|-----------|
| Landing Pages | Sites responsivos e otimizados para conversão |
| Aplicações Web | Sistemas em React/TypeScript escaláveis |
| E-commerce VTEX | Lojas completas com checkout otimizado |
| Consultoria | Manutenção e suporte front-end |

### 3. Portfólio
- Cases de projetos com métricas de resultado
- Tags de tecnologias utilizadas
- Links para live demo e repositório
- Foco em resultados: performance, conversão, UX

### 4. Sobre a Agência
- História do fundador Jackson Almeida
- Stack tecnológico completo
- Valores: Código de Qualidade, Performance, Foco no Cliente, Compromisso

### 5. Processo de Trabalho
Timeline em 5 etapas:
1. **Briefing** (1-2 dias) - Entendimento do negócio
2. **Proposta** (2-3 dias) - Escopo e investimento
3. **Design** (1-2 semanas) - Wireframes e protótipos
4. **Desenvolvimento** (2-8 semanas) - Codificação
5. **Entrega** (Contínuo) - Lançamento e suporte

### 6. Contato/Orçamento
Formulário completo com envio de e-mail via Resend:
- Nome, E-mail, Telefone (com máscara), Empresa
- Tipo de Projeto (dropdown)
- Orçamento Estimado (faixas de R$ 5k a R$ 50k+)
- Mensagem
- Estados visuais: loading, erro, sucesso

---

## 🌐 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy na Vercel:

1. Conecte o repositório no [Vercel Dashboard](https://vercel.com/new)
2. Configure as variáveis de ambiente (opcional):
   - `VITE_BASE_URL=/`
   - `VITE_SITE_URL=https://seu-dominio.vercel.app`
3. Deploy automático a cada push na branch main

**URL de produção:** `https://codigoprimordial.vercel.app/`

### Variáveis de Ambiente

Copie `.env.example` para `.env` e ajuste:

```bash
# Base URL (/ para Vercel, /portfolio/ para GitHub Pages)
VITE_BASE_URL=/

# URL do site em produção
VITE_SITE_URL=https://codigoprimordial.vercel.app

# API Key do Resend para envio de e-mails
# Obtenha em: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxx
```

**⚠️ Importante:** Configure `RESEND_API_KEY` no painel da Vercel em:
`Settings → Environment Variables`

### Domínio Personalizado

Para usar domínio próprio (ex: codigoprimordial.com):
1. Adicione o domínio no Vercel Dashboard
2. Atualize `VITE_SITE_URL` no `.env`
3. Atualize URLs em `index.html`, `sitemap.xml` e `robots.txt`

---

## 🔍 SEO Implementado

| Item | Status | Descrição |
|------|--------|-----------|
| Meta Tags | ✅ | Title, description, keywords otimizados |
| Open Graph | ✅ | og:title, og:description, og:image, og:url |
| Twitter Cards | ✅ | summary_large_image com imagem |
| Schema.org | ✅ | JSON-LD ProfessionalService com serviços |
| Canonical URL | ✅ | URL canônica definida |
| Robots.txt | ✅ | Permite indexação com sitemap |
| Sitemap.xml | ✅ | Todas as seções mapeadas |
| Acessibilidade | ✅ | ARIA labels, alt text, lazy loading |

---

## 📧 Envio de E-mails (Resend)

O formulário de contato envia e-mails para `contato@codigoprimordial.com` usando a API do Resend via Vercel Serverless Functions.

### Arquitetura

```
Cliente (React) → POST /api/send-email → Vercel Function → Resend API → E-mail
```

### Configuração

1. **Obtenha uma API Key** em [resend.com/api-keys](https://resend.com/api-keys)
2. **Configure na Vercel:**
   - Acesse `Settings → Environment Variables`
   - Adicione `RESEND_API_KEY` com sua chave

### Domínio de E-mail Personalizado

Por padrão, e-mails são enviados de `onboarding@resend.dev`. Para usar seu domínio:

1. Acesse [resend.com/domains](https://resend.com/domains)
2. Adicione e verifique seu domínio
3. Atualize o remetente em `api/send-email.ts`:

```typescript
from: 'Código Primordial <contato@codigoprimordial.com>',
```

### Template de E-mail

O template HTML inclui:
- Branding com cores da marca (verde neon, roxo, fundo escuro)
- Dados do cliente formatados
- Detalhes do projeto (tipo, orçamento)
- Mensagem completa
- Botão de resposta rápida
- Footer com copyright

---

## 🔮 Próximos Passos

- [x] ~~Integrar formulário com EmailJS, Formspree ou API própria~~ → Resend
- [x] ~~Implementar analytics~~ → Vercel Analytics
- [ ] Adicionar blog com estudos de caso detalhados
- [ ] Criar versão em inglês (internacionalização)
- [ ] Adicionar animações avançadas com Framer Motion
- [ ] Implementar modo claro/escuro (theme toggle)
- [ ] Adicionar mais projetos ao portfólio
- [ ] Criar imagem OG em PNG (substituir SVG placeholder)
- [ ] Verificar domínio no Resend para e-mail personalizado

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido com 💚 por <a href="https://jacksonadh.github.io/portfolio/">Código Primordial</a>
</p>
