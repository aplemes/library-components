import type { Meta, StoryObj } from '@storybook/vue3'
import CircularProgressBar from './index.vue'
const meta: Meta<typeof CircularProgressBar> = {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    type: { control: 'select', options: ['percentage', 'content'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { value: 65 } }
export const Small: Story = { args: { value: 40, size: 's' } }
export const WithContent: Story = { args: { value: 60, type: 'content', contentValue: '3/5', additionalInfo: 'steps' } }
export const Empty: Story = { args: { value: 0 } }
export const Full: Story = { args: { value: 100 } }
