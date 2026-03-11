import type { Meta, StoryObj } from '@storybook/vue3'
import Popover from './index.vue'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A floating popover panel triggered by clicking the activator slot. Supports light/dark appearance, four positions, optional pointer arrow, close button, title, description, content slot, and footer slot.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['light', 'dark'],
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    pointer: { control: 'boolean' },
    closable: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const activatorSlot = '<button style="padding:8px 16px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Show Popover</button>'

export const Default: Story = {
  args: { title: 'Popover Title', description: 'This is the popover content.', position: 'bottom' },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `<Popover v-bind="args"><template #activator>${activatorSlot}</template></Popover>`,
  }),
}

export const Top: Story = {
  args: { title: 'Top Popover', position: 'top' },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `<div style="padding-top:80px"><Popover v-bind="args"><template #activator>${activatorSlot}</template></Popover></div>`,
  }),
}

export const WithPointer: Story = {
  args: { title: 'With Arrow', position: 'bottom', pointer: true },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `<Popover v-bind="args"><template #activator>${activatorSlot}</template></Popover>`,
  }),
}

export const Closable: Story = {
  args: { title: 'Closable', description: 'Click X to close.', closable: true },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `<Popover v-bind="args"><template #activator>${activatorSlot}</template></Popover>`,
  }),
}

export const WithFooter: Story = {
  args: { title: 'With Footer', description: 'Footer has action buttons.' },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `
      <Popover v-bind="args">
        <template #activator>${activatorSlot}</template>
        <template #footer>
          <button style="padding:4px 12px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Confirm</button>
          <button style="padding:4px 12px;border:1px solid #ccc;background:white;border-radius:4px;cursor:pointer">Cancel</button>
        </template>
      </Popover>
    `,
  }),
}
