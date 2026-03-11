import type { Meta, StoryObj } from '@storybook/vue3'
import Tile from './index.vue'

const meta: Meta<typeof Tile> = {
  title: 'Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A container component used to group related content and actions within a structured layout. Supports multiple appearance variants and optional bordered style. Provides default, action, and details slots.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'bordered'],
    },
    bordered: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { appearance: 'primary' },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `<Tile v-bind="args"><p>Main tile content</p></Tile>`,
  }),
}

export const Bordered: Story = {
  args: { bordered: true },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `<Tile v-bind="args"><p>Bordered tile content</p></Tile>`,
  }),
}

export const Secondary: Story = {
  args: { appearance: 'secondary' },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `<Tile v-bind="args"><p>Secondary appearance tile</p></Tile>`,
  }),
}

export const WithAction: Story = {
  args: { bordered: true },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `
      <Tile v-bind="args">
        <p>Tile with action slot</p>
        <template #action><button style="padding:4px 8px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Action</button></template>
      </Tile>
    `,
  }),
}

export const WithDetails: Story = {
  args: { bordered: true },
  render: (args) => ({
    components: { Tile },
    setup: () => ({ args }),
    template: `
      <Tile v-bind="args">
        <p>Tile with expandable details</p>
        <template #details><p style="color:#666">This is the details section with additional information.</p></template>
      </Tile>
    `,
  }),
}
