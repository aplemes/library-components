import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  test: {
    environment: 'happy-dom',
    deps: {
      inline: ['@vue/test-utils', 'vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/reactivity']
    }
  },
  resolve: {
    alias: {
      '@': __dirname,
    },
    dedupe: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/reactivity']
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
