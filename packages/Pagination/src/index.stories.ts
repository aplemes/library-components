import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from './index.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A pagination navigation component that renders previous/next buttons and individual page buttons, or a compact select dropdown. Supports v-model for current page, boundary disabling, and a compact mode.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'number' },
    totalPages: { control: 'number' },
    compact: { control: 'boolean' },
    selectLabel: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { modelValue: 1, totalPages: 5 },
}

export const Compact: Story = {
  args: { modelValue: 1, totalPages: 10, compact: true, selectLabel: 'Select page' },
}

export const ManyPages: Story = {
  args: { modelValue: 5, totalPages: 20 },
}

export const FirstPage: Story = {
  args: { modelValue: 1, totalPages: 5 },
}

export const LastPage: Story = {
  args: { modelValue: 5, totalPages: 5 },
}
