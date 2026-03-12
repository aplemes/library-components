import type { Meta, StoryObj } from '@storybook/vue3'
import Tag from './index.vue'

const meta: Meta<typeof Tag> = {
  title: 'Components/AzTag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A versatile label element with five behavioral types: \`informative\` (static display), \`interactive\` (clickable button), \`selectable\` (checkbox-backed toggle), \`removable\` (tag with a dismiss button that emits \`remove-tag\`) and \`contextualised\` (button with a numeric count badge). Supports three sizes.

## Installation

\`\`\`bash
yarn add @azulejo-kit/tag
\`\`\`

\`\`\`js
import '@azulejo-kit/tag/style.css'
\`\`\`

\`\`\`vue
<script setup>
import { AzTag } from '@azulejo-kit/tag'
</script>

<template>
  <Tag label="In stock" type="informative" />
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text content of the tag.',
      control: 'text',
    },
    type: {
      description: 'Behavioral type of the tag. Determines the rendered element and available interactions.',
      control: 'select',
      options: ['informative', 'interactive', 'contextualised', 'removable', 'selectable'],
    },
    size: {
      description: 'Size of the tag.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    id: {
      description: 'HTML id used for the checkbox input (`selectable`) or emitted with the `remove-tag` event (`removable`).',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for the checkbox input when `type` is `selectable`.',
      control: 'text',
    },
    modelValue: {
      description: 'Checked state for `selectable` type. Use with `v-model`.',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables interaction for `interactive`, `contextualised` and `selectable` types.',
      control: 'boolean',
    },
    contextualisedNumber: {
      description: 'Numeric count displayed in the badge for `contextualised` type.',
      control: 'number',
    },
    removableLabel: {
      description: 'Accessible aria-label for the remove button when `type` is `removable`.',
      control: 'text',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Informative: Story = { args: { label: 'Vue 3' } }
export const Interactive: Story = { args: { label: 'Click me', type: 'interactive' } }
export const Selectable: Story = { args: { label: 'Select', type: 'selectable', id: 'tag-1', modelValue: false } }
export const Removable: Story = { args: { label: 'Remove me', type: 'removable', id: 'tag-r' } }
export const Contextualised: Story = { args: { label: 'Filter', type: 'contextualised', contextualisedNumber: 3 } }
export const Small: Story = { args: { label: 'Small', size: 's' } }
