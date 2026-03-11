import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import baseConfig from '../../vite.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      vue(),
      dts({
        outDir: 'dist',
        exclude: ['src/*.spec.ts'],
        tsconfigPath: './tsconfig.json'
      })
    ],
    build: {
      outDir: 'dist',
      lib: {
        name: 'container',
        fileName: 'index',
        entry: 'index.ts'
      }
    }
  })
)
