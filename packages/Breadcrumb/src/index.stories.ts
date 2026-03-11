import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumb from './index.vue'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Power Tools', href: '/products/power-tools' },
  { label: 'Drills', href: '/products/power-tools/drills', current: true },
]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `A navigation breadcrumb displaying hierarchical page path. The last item automatically receives aria-current="page". Supports light and dark appearances.

## Installation

\`\`\`bash
yarn add @leroy-merlin-pt/breadcrumb
\`\`\`

\`\`\`js
import '@leroy-merlin-pt/breadcrumb/style.css'
\`\`\`

\`\`\`vue
<script setup>
import Breadcrumb from '@leroy-merlin-pt/breadcrumb'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Category', href: '/category' },
  { label: 'Product', href: '/category/product', current: true },
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    appearance: { control: 'select', options: ['light', 'dark'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links,
    appearance: 'light',
  },
}

export const Dark: Story = {
  args: {
    links,
    appearance: 'dark',
  },
  decorators: [
    () => ({
      template: '<div class="bg-neutral-800 p-4 rounded"><story /></div>',
    }),
  ],
}

export const WithCurrent: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Current Page', href: '/category/current', current: true },
    ],
    appearance: 'light',
  },
}
