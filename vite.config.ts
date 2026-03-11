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
      'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.cjs.js'),
      '@vue/runtime-core': path.resolve(__dirname, 'node_modules/@vue/runtime-core/dist/runtime-core.cjs.js'),
      '@vue/runtime-dom': path.resolve(__dirname, 'node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js'),
      '@vue/reactivity': path.resolve(__dirname, 'node_modules/@vue/reactivity/dist/reactivity.cjs.js'),
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
