import type { Meta, StoryObj } from '@storybook/vue3'
import Radio from './index.vue'

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Single radio button input with an optional label. Binds to a boolean value via `v-model`. Supports invalid and disabled states. Use `RadioGroup` when you need to manage multiple mutually exclusive options together.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the input element, used to associate it with the label.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute grouping radio buttons together for mutual exclusion.',
      control: 'text',
    },
    label: {
      description: 'Text label displayed next to the radio button.',
      control: 'text',
    },
    modelValue: {
      description: 'Bound boolean value indicating whether this radio button is selected.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Marks the radio button as invalid, applying error styling and setting `aria-invalid`.',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the radio button, preventing interaction.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'r-default', label: 'Option A', modelValue: false } }
export const Checked: Story = { args: { id: 'r-checked', label: 'Selected option', modelValue: true } }
export const Disabled: Story = { args: { id: 'r-disabled', label: 'Disabled option', disabled: true } }
export const Invalid: Story = { args: { id: 'r-invalid', label: 'Required option', isInvalid: true } }
