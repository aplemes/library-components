import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './index.vue'

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of mutually exclusive radio buttons rendered from a structured options array. Manages selection state and emits the selected string value via `v-model`. Supports inline layout, per-option disabled state and a group-level invalid state.',
      },
    },
  },
  argTypes: {
    name: {
      description: 'HTML name attribute shared by all radio inputs in the group, ensuring mutual exclusion.',
      control: 'text',
    },
    modelValue: {
      description: 'Value of the currently selected option. Use with `v-model`.',
      control: 'text',
    },
    options: {
      description: 'Array of option objects, each with `id`, `label`, `value`, and an optional `disabled` flag.',
    },
    isInvalid: {
      description: 'Applies invalid styling to all radio inputs in the group.',
      control: 'boolean',
    },
    inline: {
      description: 'Renders the radio buttons in a horizontal row instead of a vertical stack.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 'opt-a', label: 'Option A', value: 'a' },
  { id: 'opt-b', label: 'Option B', value: 'b' },
  { id: 'opt-c', label: 'Option C', value: 'c', disabled: true },
]

export const Default: Story = { args: { name: 'group', options } }
export const WithSelection: Story = { args: { name: 'group', options, modelValue: 'a' } }
export const Inline: Story = { args: { name: 'group-inline', options, inline: true } }
export const Invalid: Story = { args: { name: 'group-invalid', options, isInvalid: true } }
