import type { Meta, StoryObj } from '@storybook/vue3'
import StatusDot from './index.vue'

const meta: Meta<typeof StatusDot> = {
  title: 'Components/StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A small circular dot used as a compact status indicator. Useful in tables, lists or alongside labels where space is limited. Supports five semantic statuses and three sizes.',
      },
    },
  },
  argTypes: {
    status: {
      description: 'Semantic status that determines the dot color.',
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
    },
    size: {
      description: 'Size of the dot.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { status: 'info' } }
export const Success: Story = { args: { status: 'success' } }
export const Warning: Story = { args: { status: 'warning' } }
export const Error: Story = { args: { status: 'error' } }
export const Neutral: Story = { args: { status: 'neutral' } }
export const Large: Story = { args: { status: 'info', size: 'l' } }
