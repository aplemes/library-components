import type { Meta, StoryObj } from '@storybook/vue3'
import PasswordInput from './index.vue'
const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A password input field with a built-in toggle button to show or hide the value. Optionally displays a clear button when a value is present and `isClearable` is enabled. Supports invalid and disabled states.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the input element.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for form submission.',
      control: 'text',
    },
    modelValue: {
      description: 'Bound input value. Use with `v-model`.',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when the input has no value.',
      control: 'text',
    },
    disabled: {
      description: 'Disables the input and the show/hide toggle.',
      control: 'boolean',
    },
    readonly: {
      description: 'Makes the input read-only.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Applies error styling and sets `aria-invalid` on the input.',
      control: 'boolean',
    },
    isClearable: {
      description: 'When true and a value is present, shows a clear button to reset the field.',
      control: 'boolean',
    },
    clearLabel: {
      description: 'Accessible aria-label for the clear button.',
      control: 'text',
    },
    showLabel: {
      description: 'Text label for the show-password toggle button when password is hidden.',
      control: 'text',
    },
    hideLabel: {
      description: 'Text label for the show-password toggle button when password is visible.',
      control: 'text',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { id: 'pwd-default', placeholder: 'Enter password' } }
export const WithValue: Story = { args: { id: 'pwd-value', modelValue: 'mypassword' } }
export const Clearable: Story = { args: { id: 'pwd-clear', modelValue: 'secret', isClearable: true } }
export const Invalid: Story = { args: { id: 'pwd-invalid', isInvalid: true } }
export const Disabled: Story = { args: { id: 'pwd-disabled', modelValue: 'hidden', disabled: true } }
