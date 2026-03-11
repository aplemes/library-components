import type { Meta, StoryObj } from '@storybook/vue3'
import CheckboxGroup from './index.vue'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Form/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of related checkboxes rendered from a structured options array. Manages multi-selection state internally and emits the selected values array via `v-model`. Supports inline layout, per-option disabled and invalid states.',
      },
    },
  },
  argTypes: {
    name: {
      description: 'HTML name attribute shared by all checkboxes in the group, used for form submission.',
      control: 'text',
    },
    modelValue: {
      description: 'Array of currently selected option values.',
    },
    options: {
      description: 'Array of option objects, each with `id`, `label`, `value`, and optional `disabled`, `isInvalid`, and `indented` fields.',
    },
    inline: {
      description: 'Renders the checkboxes in a horizontal row instead of a vertical stack.',
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

export const Default: Story = { args: { name: 'group', options, modelValue: [] } }
export const WithSelection: Story = { args: { name: 'group', options, modelValue: ['a', 'b'] } }
export const Inline: Story = { args: { name: 'group-inline', options, modelValue: [], inline: true } }
export const WithInvalid: Story = {
  args: {
    name: 'group-invalid',
    options: [
      { id: 'opt-1', label: 'Option 1', value: '1', isInvalid: true },
      { id: 'opt-2', label: 'Option 2', value: '2' },
    ],
    modelValue: [],
  },
}
