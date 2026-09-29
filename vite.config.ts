import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project Pages URL: https://abhi3211.github.io/portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
