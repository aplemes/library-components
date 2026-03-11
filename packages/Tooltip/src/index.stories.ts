import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './index.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A tooltip component that wraps a trigger element and shows descriptive text on hover or focus. Supports four positions, optional pointer arrow, and a standalone mode where the tooltip is always visible. Uses CSS opacity transitions for show/hide behavior.

## Installation

\`\`\`bash
yarn add @leroy-merlin-pt/tooltip
\`\`\`

\`\`\`js
import '@leroy-merlin-pt/tooltip/style.css'
\`\`\`

\`\`\`vue
<script setup>
import Tooltip from '@leroy-merlin-pt/tooltip'
</script>

<template>
  <Tooltip id="save-tip" text="Save your changes" position="top">
    <button>Save</button>
  </Tooltip>
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    text: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    pointer: { control: 'boolean' },
    standalone: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const trigger = '<button style="padding:8px 16px;background:#2e7d32;color:white;border:none;border-radius:4px;cursor:pointer">Hover me</button>'

export const Default: Story = {
  args: { id: 'tip-default', text: 'This is a helpful tooltip', position: 'top' },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<div style="padding:60px"><Tooltip v-bind="args">${trigger}</Tooltip></div>`,
  }),
}

export const Bottom: Story = {
  args: { id: 'tip-bottom', text: 'Bottom tooltip', position: 'bottom' },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<div style="padding:20px"><Tooltip v-bind="args">${trigger}</Tooltip></div>`,
  }),
}

export const Left: Story = {
  args: { id: 'tip-left', text: 'Left tooltip', position: 'left' },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<div style="padding:20px 120px"><Tooltip v-bind="args">${trigger}</Tooltip></div>`,
  }),
}

export const Right: Story = {
  args: { id: 'tip-right', text: 'Right tooltip', position: 'right' },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<div style="padding:20px"><Tooltip v-bind="args">${trigger}</Tooltip></div>`,
  }),
}

export const Standalone: Story = {
  args: { id: 'tip-standalone', text: 'Always visible tooltip', standalone: true },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<div style="padding:60px"><Tooltip v-bind="args"><span style="font-weight:bold">Reference element</span></Tooltip></div>`,
  }),
}
