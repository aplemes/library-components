import type { Meta, StoryObj } from '@storybook/vue3'
import StatusMessage from './index.vue'

const meta: Meta<typeof StatusMessage> = {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['info', 'success', 'warning', 'error', 'neutral', 'inprogress'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { label: 'Information available', status: 'info' } }
export const Success: Story = { args: { label: 'Operation completed', status: 'success' } }
export const Warning: Story = { args: { label: 'Proceed with caution', status: 'warning' } }
export const Error: Story = { args: { label: 'An error occurred', status: 'error' } }
export const InProgress: Story = { args: { label: 'Processing...', status: 'inprogress' } }
