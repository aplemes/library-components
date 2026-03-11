import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleGroup from './index.vue'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Form/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    inline: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 'tog-a', label: 'Emails', value: 'emails' },
  { id: 'tog-b', label: 'SMS', value: 'sms' },
  { id: 'tog-c', label: 'Push', value: 'push', disabled: true },
]

export const Default: Story = { args: { name: 'notifications', options, modelValue: [] } }
export const WithSelection: Story = { args: { name: 'notifications', options, modelValue: ['emails'] } }
export const Inline: Story = { args: { name: 'notifications-inline', options, modelValue: [], inline: true } }
