import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './index.vue'
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    closable: { control: 'boolean' },
    size: { control: 'select', options: ['s', 'm', 'l'] },
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
