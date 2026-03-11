import type { Meta, StoryObj } from '@storybook/vue3'
import TileExpandable from './index.vue'

const meta: Meta<typeof TileExpandable> = {
  title: 'Components/TileExpandable',
  component: TileExpandable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An expandable tile component that toggles the visibility of additional detail content. A trigger button controls the expand/collapse behavior. Supports appearance variants, bordered style, and customizable trigger label.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    bordered: { control: 'boolean' },
    trigger: { control: 'text' },
    label: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { bordered: true, label: 'See more' },
  render: (args) => ({
    components: { TileExpandable },
    setup: () => ({ args }),
    template: `
      <TileExpandable v-bind="args">
        <p>Main tile content</p>
        <template #details><p style="color:#666">Expanded details content here.</p></template>
      </TileExpandable>
    `,
  }),
}

export const WithCustomLabel: Story = {
  args: { bordered: true, label: 'Show details' },
  render: (args) => ({
    components: { TileExpandable },
    setup: () => ({ args }),
    template: `
      <TileExpandable v-bind="args">
        <p>Click trigger to expand</p>
        <template #details><p>Hidden content revealed!</p></template>
      </TileExpandable>
    `,
  }),
}

export const Secondary: Story = {
  args: { appearance: 'secondary', bordered: true, label: 'Expand' },
  render: (args) => ({
    components: { TileExpandable },
    setup: () => ({ args }),
    template: `
      <TileExpandable v-bind="args">
        <p>Secondary appearance</p>
        <template #details><p>Details for secondary tile</p></template>
      </TileExpandable>
    `,
  }),
}
