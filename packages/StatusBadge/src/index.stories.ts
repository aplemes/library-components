import type { Meta, StoryObj } from '@storybook/vue3'
import StatusBadge from './index.vue'

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An inline badge combining a colored dot with a text label to communicate a status at a glance. Available in five semantic statuses, each with a distinct background and text color.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text describing the current status.',
      control: 'text',
    },
    status: {
      description: 'Semantic status that controls the badge color scheme.',
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { label: 'In Progress', status: 'info' } }
export const Success: Story = { args: { label: 'Completed', status: 'success' } }
export const Warning: Story = { args: { label: 'Attention', status: 'warning' } }
export const Error: Story = { args: { label: 'Failed', status: 'error' } }
export const Neutral: Story = { args: { label: 'Unknown', status: 'neutral' } }
