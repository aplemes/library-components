import type { Meta, StoryObj } from '@storybook/vue3'
import Drawer from './index.vue'
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A slide-in panel anchored to the left or right edge of the viewport. Features a header with title, optional back button and close button, a scrollable body slot and an optional footer slot. Supports extended width, content title, scroll lock, and close-on-overlay behavior.',
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
    extended: {
      description: 'If true, gives the drawer a bigger (extended) width.',
      control: 'boolean',
    },
    back: {
      description: 'If true, displays a back button in the header.',
      control: 'boolean',
    },
    contentTitle: {
      description: 'Optional title rendered inside the drawer body.',
      control: 'text',
    },
    scroll: {
      description: 'If false, locks body scroll when the drawer is open.',
      control: 'boolean',
    },
    closeOnOverlay: {
      description: 'If true, closes the drawer when clicking the backdrop overlay.',
      control: 'boolean',
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
export const Extended: Story = { args: { title: 'Extended Drawer', open: true, extended: true } }
export const WithBack: Story = { args: { title: 'Detail View', open: true, back: true } }
export const WithContentTitle: Story = {
  args: { title: 'Drawer Title', open: true, contentTitle: 'Section Heading' },
  render: (args) => ({ components: { Drawer }, setup() { return { args } }, template: '<Drawer v-bind="args"><p>Content with a section title above.</p></Drawer>' }),
}
export const CloseOnOverlay: Story = { args: { title: 'Click Backdrop to Close', open: true, closable: false, closeOnOverlay: true } }
