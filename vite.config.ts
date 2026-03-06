import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  resolve: {
    alias: { '@': path.resolve('./') }
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
