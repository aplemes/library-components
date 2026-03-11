import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleGroup from './index.vue'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Form/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of toggle switches rendered from an options array, supporting multiple simultaneous selections. Manages selection state internally and emits the array of active values via `v-model`. Supports inline layout and per-option disabled state.',
      },
    },
  },
  argTypes: {
    name: {
      description: 'HTML name attribute shared by all toggle inputs in the group, used for form submission.',
      control: 'text',
    },
    modelValue: {
      description: 'Array of currently enabled option values. Use with `v-model`.',
    },
    options: {
      description: 'Array of option objects, each with `id`, `label`, `value`, optional `disabled` flag and optional `size` override.',
    },
    inline: {
      description: 'Renders the toggles in a horizontal row instead of a vertical stack.',
      control: 'boolean',
    },
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
