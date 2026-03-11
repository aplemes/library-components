import type { Meta, StoryObj } from '@storybook/vue3'
import StarRating from './index.vue'
const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
    appearance: { control: 'select', options: ['standard', 'accent'] },
    readonly: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { modelValue: 3 } }
export const Interactive: Story = { args: { modelValue: 2, readonly: false } }
export const HalfStar: Story = { args: { modelValue: 3.5 } }
export const WithText: Story = { args: { modelValue: 4, text: '(256 reviews)' } }
export const Compact: Story = { args: { modelValue: 4, compact: true, text: '4.0' } }
export const Large: Story = { args: { modelValue: 3, size: 'l' } }
