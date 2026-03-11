import type { Meta, StoryObj } from '@storybook/vue3'
import Toggle from './index.vue'

const meta: Meta<typeof Toggle> = {
  title: 'Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A switch-style toggle control backed by a hidden checkbox input. Visually slides a thumb between off and on states and updates a boolean `v-model` value. Supports an optional text label, two sizes and a disabled state.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the checkbox input, used to associate it with the label.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for form submission.',
      control: 'text',
    },
    label: {
      description: 'Text label displayed next to the toggle.',
      control: 'text',
    },
    modelValue: {
      description: 'Bound boolean value indicating whether the toggle is on. Use with `v-model`.',
      control: 'boolean',
    },
    size: {
      description: 'Size of the toggle track and thumb.',
      control: 'select',
      options: ['s', 'm'],
    },
    disabled: {
      description: 'Disables the toggle, preventing interaction.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'tog-default', label: 'Enable notifications', modelValue: false } }
export const Checked: Story = { args: { id: 'tog-checked', label: 'Feature enabled', modelValue: true } }
export const Disabled: Story = { args: { id: 'tog-disabled', label: 'Disabled toggle', disabled: true } }
export const Medium: Story = { args: { id: 'tog-medium', label: 'Medium size', size: 'm', modelValue: false } }
export const NoLabel: Story = { args: { id: 'tog-nolabel', modelValue: false } }
