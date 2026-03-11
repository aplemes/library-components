import type { Meta, StoryObj } from '@storybook/vue3'
import Flag from './index.vue'

const meta: Meta<typeof Flag> = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['standard', 'danger', 'accent', 'inverse'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { label: 'New' } }
export const Danger: Story = { args: { label: 'Danger', appearance: 'danger' } }
export const Accent: Story = { args: { label: 'Promo', appearance: 'accent' } }
export const Inverse: Story = { args: { label: 'Sale', appearance: 'inverse' } }
