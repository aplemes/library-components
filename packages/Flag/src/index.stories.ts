import type { Meta, StoryObj } from '@storybook/vue3'
import Flag from './index.vue'

const meta: Meta<typeof Flag> = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A compact label badge used to highlight product states or promotions (e.g. "New", "Sale"). Displays an uppercase text label in a pill shape with four color appearances.

## Installation

\`\`\`bash
yarn add @leroy-merlin-pt/flag
\`\`\`

\`\`\`js
import '@leroy-merlin-pt/flag/style.css'
\`\`\`

\`\`\`vue
<script setup>
import Flag from '@leroy-merlin-pt/flag'
</script>

<template>
  <Flag label="New" appearance="accent" />
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text content displayed inside the flag.',
      control: 'text',
    },
    appearance: {
      description: 'Color scheme of the flag.',
      control: 'select',
      options: ['standard', 'danger', 'accent', 'inverse'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { label: 'New' } }
export const Danger: Story = { args: { label: 'Danger', appearance: 'danger' } }
export const Accent: Story = { args: { label: 'Promo', appearance: 'accent' } }
export const Inverse: Story = { args: { label: 'Sale', appearance: 'inverse' } }
