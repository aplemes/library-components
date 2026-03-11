import type { Meta, StoryObj } from '@storybook/vue3'
import StatusMessage from './index.vue'

const meta: Meta<typeof StatusMessage> = {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An inline status message that pairs a semantic icon with a short text label. The `inprogress` status renders an animated spinning icon. Useful for communicating operation results inline, without the full weight of a StatusNotification.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text message displayed next to the status icon.',
      control: 'text',
    },
    status: {
      description: 'Semantic status that controls the icon and text color.',
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral', 'inprogress'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { label: 'Information available', status: 'info' } }
export const Success: Story = { args: { label: 'Operation completed', status: 'success' } }
export const Warning: Story = { args: { label: 'Proceed with caution', status: 'warning' } }
export const Error: Story = { args: { label: 'An error occurred', status: 'error' } }
export const InProgress: Story = { args: { label: 'Processing...', status: 'inprogress' } }
