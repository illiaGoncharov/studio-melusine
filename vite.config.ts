import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = process.env.GITHUB_PAGES === 'true' ? '/studio-melusine/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
