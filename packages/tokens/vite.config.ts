import { defineConfig, mergeConfig } from 'vite'
import dts from 'vite-plugin-dts'
import baseConfig from '../../vite.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      dts({
        outDir: 'dist',
        exclude: ['src/*.spec.ts'],
        tsconfigPath: './tsconfig.json'
      })
    ],
    build: {
      outDir: 'dist',
      lib: {
        name: 'tokens',
        fileName: 'index',
        entry: 'index.ts'
      }
    }
  })
)
