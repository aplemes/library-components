import type { Meta, StoryObj } from '@storybook/vue3'
import PasswordInput from './index.vue'
const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' }, isInvalid: { control: 'boolean' }, isClearable: { control: 'boolean' } },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { id: 'pwd-default', placeholder: 'Enter password' } }
export const WithValue: Story = { args: { id: 'pwd-value', modelValue: 'mypassword' } }
export const Clearable: Story = { args: { id: 'pwd-clear', modelValue: 'secret', isClearable: true } }
export const Invalid: Story = { args: { id: 'pwd-invalid', isInvalid: true } }
export const Disabled: Story = { args: { id: 'pwd-disabled', modelValue: 'hidden', disabled: true } }
