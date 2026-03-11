import type { Meta, StoryObj } from '@storybook/vue3'
import SegmentedControl from './index.vue'

const sampleSegments = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'archived', label: 'Archived' },
]

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A compact button group component allowing users to select one segment at a time. Supports index-based or id-based v-model, full width mode, two sizes, and disabled segments.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text' },
    full: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { segments: sampleSegments, modelValue: 0 },
}

export const Full: Story = {
  args: { segments: sampleSegments, modelValue: 0, full: true },
}

export const Small: Story = {
  args: { segments: sampleSegments, modelValue: 0, size: 's' },
}

export const WithDisabled: Story = {
  args: {
    segments: [
      { id: 'all', label: 'All' },
      { id: 'active', label: 'Active' },
      { id: 'archived', label: 'Archived', disabled: true },
    ],
    modelValue: 0,
  },
}
