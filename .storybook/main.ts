import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { docs: false },
    },
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import('@tailwindcss/vite')
    return mergeConfig(config, {
      plugins: [tailwindcss()],
    })
  },
}

export default config
