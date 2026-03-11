import type { Meta, StoryObj } from '@storybook/vue3'
import Loader from './index.vue'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 's', 'm', 'l'] },
    appearance: { control: 'select', options: ['standard', 'accent', 'inverse'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
export const Small: Story = { args: { size: 's' } }
export const Large: Story = { args: { size: 'l' } }
export const WithText: Story = { args: { text: 'Loading...' } }
export const Accent: Story = { args: { appearance: 'accent' } }
