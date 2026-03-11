import type { Meta, StoryObj } from '@storybook/vue3'
import Drawer from './index.vue'
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A slide-in panel anchored to the left or right edge of the viewport. Rendered via `<Teleport>` and features a header with a title and optional close button, a scrollable body slot and an optional footer slot. Closes on overlay click or Escape key press when `closable` is true.',
      },
    },
  },
  argTypes: {
    open: {
      description: 'Controls whether the drawer is visible.',
      control: 'boolean',
    },
    title: {
      description: 'Text displayed in the drawer header.',
      control: 'text',
    },
    position: {
      description: 'Side of the screen the drawer slides in from.',
      control: 'select',
      options: ['left', 'right'],
    },
    closable: {
      description: 'When true, shows a close button and allows closing via overlay click or Escape key.',
      control: 'boolean',
    },
    size: {
      description: 'Maximum width of the drawer panel.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
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
