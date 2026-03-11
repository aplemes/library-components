import type { Meta, StoryObj } from '@storybook/vue3'
import StatusDot from './index.vue'

const meta: Meta<typeof StatusDot> = {
  title: 'Components/StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['info', 'success', 'warning', 'error', 'neutral'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
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
