import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/3dPortfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})