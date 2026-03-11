import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './index.vue'
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A centered dialog overlay rendered via `<Teleport>`. Contains a header with a title and optional icon, a body area with an optional description prop and a default slot, and an optional footer slot for action buttons. Closes on backdrop click or Escape key when `closable` is true.',
      },
    },
  },
  argTypes: {
    open: {
      description: 'Controls whether the modal is visible.',
      control: 'boolean',
    },
    title: {
      description: 'Text displayed in the modal header.',
      control: 'text',
    },
    description: {
      description: 'Optional paragraph text rendered at the top of the modal body.',
      control: 'text',
    },
    closable: {
      description: 'When true, shows a close button and allows closing via backdrop click or Escape key.',
      control: 'boolean',
    },
    size: {
      description: 'Maximum width of the modal panel.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    scroll: {
      description: 'When true, the modal body becomes scrollable (adds overflow-y-auto with max height).',
      control: 'boolean',
    },
    closeOnOverlay: {
      description: 'When true, clicking the backdrop closes the modal even when closable is false.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { title: 'Modal Title', description: 'This is the modal description.', open: true } }
export const WithFooter: Story = {
  args: { title: 'Confirm Action', description: 'Are you sure you want to proceed?', open: true },
  render: (args) => ({ components: { Modal }, setup() { return { args } }, template: '<Modal v-bind="args"><template #footer><button>Cancel</button><button>Confirm</button></template></Modal>' }),
}
export const Small: Story = { args: { title: 'Small Modal', description: 'A smaller dialog.', open: true, size: 's' } }
export const NotClosable: Story = { args: { title: 'Required Action', description: 'You must take action.', open: true, closable: false } }
export const Scrollable: Story = { args: { title: 'Scrollable Modal', description: 'This modal body can scroll independently.', open: true, scroll: true } }
export const CloseOnOverlay: Story = { args: { title: 'Close On Overlay', description: 'Click the backdrop to close this modal.', open: true, closable: false, closeOnOverlay: true } }
