import type { Meta, StoryObj } from '@storybook/vue3'
import LoadingOverlay from './index.vue'

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A full-screen loading overlay that uses Teleport to render at the body level. Shows a centered spinner and optional loading text when isVisible is true. Blocks user interaction during loading states.',
      },
    },
  },
  argTypes: {
    isVisible: { control: 'boolean' },
    text: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Visible: Story = {
  args: { isVisible: true },
}

export const WithText: Story = {
  args: { isVisible: true, text: 'Loading your data...' },
}

export const Hidden: Story = {
  args: { isVisible: false },
}
