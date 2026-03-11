import type { Meta, StoryObj } from '@storybook/vue3'
import Drawer from './index.vue'
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    closable: { control: 'boolean' },
    position: { control: 'select', options: ['left', 'right'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { title: 'Drawer Title', open: true } }
export const Left: Story = { args: { title: 'Left Drawer', open: true, position: 'left' } }
export const WithFooter: Story = {
  args: { title: 'Confirm', open: true },
  render: (args) => ({ components: { Drawer }, setup() { return { args } }, template: '<Drawer v-bind="args"><p>Drawer content here.</p><template #footer><button>Cancel</button><button>Confirm</button></template></Drawer>' }),
}
export const NotClosable: Story = { args: { title: 'Required Action', open: true, closable: false } }
export const Small: Story = { args: { title: 'Small Drawer', open: true, size: 's' } }
export const Large: Story = { args: { title: 'Large Drawer', open: true, size: 'l' } }
