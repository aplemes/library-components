import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  test: {
    environment: 'happy-dom'
  },
  resolve: {
    alias: { '@': __dirname }
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      external: ['vue', /^@leroy-merlin-pt/],
      output: {
        globals: (id: string) => {
          if (id === 'vue') return 'Vue'
          if (id.startsWith('@leroy-merlin-pt')) return id.split('/')[1]
          return id
        }
      }
    }
  }
})
