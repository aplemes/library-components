import type { Meta, StoryObj } from '@storybook/vue3'
import LinearProgressBarBuffer from './index.vue'
const meta: Meta<typeof LinearProgressBarBuffer> = {
  title: 'Components/LinearProgressBarBuffer',
  component: LinearProgressBarBuffer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A horizontal progress bar that fills from left to right based on a 0–100 value. Uses a simple filled track without a visible percentage label, making it ideal for buffering or loading indicators. Supports three height sizes.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'Current progress value between 0 and 100.',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    size: {
      description: 'Height of the progress bar track.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { value: 65 } }
export const Small: Story = { args: { value: 40, size: 's' } }
export const Large: Story = { args: { value: 80, size: 'l' } }
export const Empty: Story = { args: { value: 0 } }
export const Full: Story = { args: { value: 100 } }
