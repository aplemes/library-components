import type { Meta, StoryObj } from '@storybook/vue3'
import NumberBadge from './index.vue'

const meta: Meta<typeof NumberBadge> = {
  title: 'Components/NumberBadge',
  component: NumberBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A small circular badge that displays a numeric count (e.g. unread messages or cart items). Supports four color appearances and two sizes.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Numeric value displayed inside the badge.',
      control: 'number',
    },
    appearance: {
      description: 'Color scheme of the badge.',
      control: 'select',
      options: ['standard', 'danger', 'accent', 'inverse'],
    },
    size: {
      description: 'Size of the badge.',
      control: 'select',
      options: ['s', 'm'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { label: 5 } }
export const Danger: Story = { args: { label: 3, appearance: 'danger' } }
export const Large: Story = { args: { label: 99, size: 'm' } }
export const Inverse: Story = { args: { label: 7, appearance: 'inverse' } }
