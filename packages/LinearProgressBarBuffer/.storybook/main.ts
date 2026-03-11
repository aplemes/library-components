import type { StorybookConfig } from '@storybook/vue3-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [{ name: '@storybook/addon-essentials', options: { docs: false } }, '@storybook/addon-interactions'],
  framework: { name: '@storybook/vue3-vite', options: {} },
}
export default config
