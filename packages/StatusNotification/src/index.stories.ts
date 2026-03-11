import type { Meta, StoryObj } from '@storybook/vue3'
import StatusNotification from './index.vue'

const meta: Meta<typeof StatusNotification> = {
  title: 'Components/StatusNotification',
  component: StatusNotification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A banner-style notification block with a semantic icon, title, description text and an optional footer slot for action buttons. Supports four statuses with matching colors. Can be dismissed when `closable` is true, emitting a `close` event.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Heading text of the notification.',
      control: 'text',
    },
    description: {
      description: 'Body text providing further detail about the notification.',
      control: 'text',
    },
    status: {
      description: 'Semantic status that controls the icon and color scheme.',
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    closable: {
      description: 'When true, shows a dismiss button that emits the `close` event when clicked.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { title: 'Information', description: 'This is an informational notification.', status: 'info' } }
export const Success: Story = { args: { title: 'Success!', description: 'Your action was completed successfully.', status: 'success' } }
export const Warning: Story = { args: { title: 'Warning', description: 'Please review your input before continuing.', status: 'warning' } }
export const Error: Story = { args: { title: 'Error', description: 'Something went wrong. Please try again.', status: 'error' } }
export const Closable: Story = { args: { title: 'Closable', description: 'You can dismiss this notification.', closable: true } }
export const WithFooter: Story = {
  args: { title: 'Action needed', description: 'Please confirm your choice.', status: 'warning', closable: true },
  render: (args) => ({
    components: { StatusNotification },
    setup() { return { args } },
    template: '<StatusNotification v-bind="args"><template #footer><button>Confirm</button></template></StatusNotification>',
  }),
}
