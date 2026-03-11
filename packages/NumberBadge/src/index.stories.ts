import type { Meta, StoryObj } from '@storybook/vue3'
import NumberBadge from './index.vue'

const meta: Meta<typeof NumberBadge> = {
  title: 'Components/NumberBadge',
  component: NumberBadge,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['standard', 'danger', 'accent', 'inverse'] },
    size: { control: 'select', options: ['s', 'm'] },
    label: { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { label: 5 } }
export const Danger: Story = { args: { label: 3, appearance: 'danger' } }
export const Large: Story = { args: { label: 99, size: 'm' } }
export const Inverse: Story = { args: { label: 7, appearance: 'inverse' } }
