import type { Meta, StoryObj } from '@storybook/vue3'
import TileClickable from './index.vue'

const meta: Meta<typeof TileClickable> = {
  title: 'Components/TileClickable',
  component: TileClickable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A clickable tile component that can render as a button, anchor tag, or router-link depending on the provided props. Supports action events, icon slots, and multiple appearance variants.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'bordered'],
    },
    bordered: { control: 'boolean' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    href: { control: 'text' },
    to: { control: 'text' },
    target: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { bordered: true },
  render: (args) => ({
    components: { TileClickable },
    setup: () => ({ args }),
    template: `<TileClickable v-bind="args">Click me</TileClickable>`,
  }),
}

export const AsLink: Story = {
  args: { href: 'https://example.com', target: '_blank', bordered: true },
  render: (args) => ({
    components: { TileClickable },
    setup: () => ({ args }),
    template: `<TileClickable v-bind="args">External link tile</TileClickable>`,
  }),
}

export const WithIcon: Story = {
  args: { bordered: true, iconPosition: 'right' },
  render: (args) => ({
    components: { TileClickable },
    setup: () => ({ args }),
    template: `
      <TileClickable v-bind="args">
        Tile with icon
        <template #icon><span style="font-size:18px">→</span></template>
      </TileClickable>
    `,
  }),
}

export const IconLeft: Story = {
  args: { bordered: true, iconPosition: 'left' },
  render: (args) => ({
    components: { TileClickable },
    setup: () => ({ args }),
    template: `
      <TileClickable v-bind="args">
        Tile with icon on left
        <template #icon><span style="font-size:18px">←</span></template>
      </TileClickable>
    `,
  }),
}
