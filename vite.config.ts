import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseado no mode (development, production)
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    // Para Vercel: usar '/' | Para GitHub Pages: usar '/portfolio/'
    base: env.VITE_BASE_URL || '/',
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(env.VITE_SITE_URL),
    },
  }
})
