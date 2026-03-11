import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './index.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Single checkbox input with an optional label. Supports checked, indeterminate, invalid and disabled states. Binds to a boolean value via `v-model`.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the input element, used to associate it with the label.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for the input, used when submitting forms.',
      control: 'text',
    },
    label: {
      description: 'Text label displayed next to the checkbox.',
      control: 'text',
    },
    modelValue: {
      description: 'Bound boolean value indicating whether the checkbox is checked.',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Puts the checkbox into an indeterminate (mixed) visual state, typically used for "select all" patterns.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Marks the checkbox as invalid, applying error styling and setting `aria-invalid`.',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the checkbox, preventing interaction.',
      control: 'boolean',
    },
    indented: {
      description: 'Adds left padding to visually indent the checkbox, useful for nested option hierarchies.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'cb-default', label: 'Accept terms and conditions', modelValue: false } }
export const Checked: Story = { args: { id: 'cb-checked', label: 'Checked option', modelValue: true } }
export const Disabled: Story = { args: { id: 'cb-disabled', label: 'Disabled checkbox', disabled: true } }
export const Invalid: Story = { args: { id: 'cb-invalid', label: 'Required field', isInvalid: true } }
export const Indented: Story = { args: { id: 'cb-indented', label: 'Indented checkbox', indented: true } }
export const NoLabel: Story = { args: { id: 'cb-nolabel' } }
