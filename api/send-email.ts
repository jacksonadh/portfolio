import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
 name: string
 email: string
 phone: string
 company: string
 projectType: string
 budget: string
 message: string
}

function generateEmailTemplate(data: ContactFormData): string {
 return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Solicitação de Orçamento</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #1a1a1a; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(57, 255, 20, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 32px 40px; background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%); border-bottom: 2px solid #39ff14;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 28px; font-weight: bold; color: #39ff14;">&lt;/&gt;</span>
                    <span style="font-size: 20px; font-weight: 600; color: #f5f5f5; margin-left: 8px;">Código Primordial</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding: 32px 40px 16px;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f5f5f5;">
                🎉 Nova Solicitação de Orçamento
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #737373;">
                Recebido em ${new Date().toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
 })}
              </p>
            </td>
          </tr>

          <!-- Client Info -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px; border: 1px solid #333;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #39ff14; text-transform: uppercase; letter-spacing: 1px;">
                      Dados do Cliente
                    </h2>
                    
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #333;">
                          <span style="color: #737373; font-size: 13px;">Nome</span><br>
                          <span style="color: #f5f5f5; font-size: 15px; font-weight: 500;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #333;">
                          <span style="color: #737373; font-size: 13px;">E-mail</span><br>
                          <a href="mailto:${data.email}" style="color: #39ff14; font-size: 15px; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #333;">
                          <span style="color: #737373; font-size: 13px;">Telefone</span><br>
                          <a href="tel:${data.phone.replace(/\D/g, '')}" style="color: #39ff14; font-size: 15px; text-decoration: none;">${data.phone || 'Não informado'}</a>
                        </td>
                      </tr>
                      ${data.company ? `
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #737373; font-size: 13px;">Empresa</span><br>
                          <span style="color: #f5f5f5; font-size: 15px; font-weight: 500;">${data.company}</span>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Info -->
          <tr>
            <td style="padding: 0 40px 24px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px; border: 1px solid #333;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #8b5cf6; text-transform: uppercase; letter-spacing: 1px;">
                      Detalhes do Projeto
                    </h2>
                    
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="width: 50%; padding: 8px 8px 8px 0; vertical-align: top;">
                          <span style="color: #737373; font-size: 13px;">Tipo de Projeto</span><br>
                          <span style="display: inline-block; margin-top: 4px; padding: 6px 12px; background-color: #8b5cf6; color: #fff; font-size: 13px; font-weight: 500; border-radius: 6px;">${data.projectType}</span>
                        </td>
                        <td style="width: 50%; padding: 8px 0 8px 8px; vertical-align: top;">
                          <span style="color: #737373; font-size: 13px;">Orçamento Estimado</span><br>
                          <span style="display: inline-block; margin-top: 4px; padding: 6px 12px; background-color: #39ff14; color: #0a0a0a; font-size: 13px; font-weight: 600; border-radius: 6px;">${data.budget}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%; background-color: #252525; border-radius: 12px; border: 1px solid #333;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #f5f5f5; text-transform: uppercase; letter-spacing: 1px;">
                      Mensagem
                    </h2>
                    <p style="margin: 0; font-size: 15px; color: #a3a3a3; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: Solicitação de Orçamento - Código Primordial" style="display: inline-block; padding: 14px 32px; background-color: #39ff14; color: #0a0a0a; font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 10px;">
                      Responder Cliente
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #0f0f0f; border-top: 1px solid #252525;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0; font-size: 13px; color: #737373;">
                      Este e-mail foi enviado automaticamente pelo formulário de contato do site.
                    </p>
                    <p style="margin: 8px 0 0; font-size: 12px; color: #525252;">
                      © ${new Date().getFullYear()} Código Primordial. Todos os direitos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
 res.setHeader('Access-Control-Allow-Credentials', 'true')
 res.setHeader('Access-Control-Allow-Origin', '*')
 res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

 if (req.method === 'OPTIONS') {
  return res.status(200).end()
 }

 if (req.method !== 'POST') {
  return res.status(405).json({ error: 'Method not allowed' })
 }

 try {
  const { name, email, phone, company, projectType, budget, message } = req.body as ContactFormData

  if (!name || !email || !projectType || !budget || !message) {
   return res.status(400).json({
    error: 'Campos obrigatórios não preenchidos',
    required: ['name', 'email', 'projectType', 'budget', 'message']
   })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
   return res.status(400).json({ error: 'E-mail inválido' })
  }

  const { data, error } = await resend.emails.send({
   from: 'Código Primordial <contato@codigoprimordial.com>',
   to: ['contato@codigoprimordial.com'],
   replyTo: email,
   subject: `Nova Solicitação: ${projectType} - ${name}`,
   html: generateEmailTemplate({ name, email, phone, company, projectType, budget, message }),
  })

  if (error) {
   console.error('Resend error:', error)
   return res.status(500).json({ error: 'Erro ao enviar e-mail', details: error.message })
  }

  return res.status(200).json({
   success: true,
   message: 'E-mail enviado com sucesso!',
   id: data?.id
  })

 } catch (error) {
  console.error('Server error:', error)
  return res.status(500).json({
   error: 'Erro interno do servidor',
   details: error instanceof Error ? error.message : 'Unknown error'
  })
 }
}
