import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './index.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    indented: { control: 'boolean' },
    modelValue: { control: 'boolean' },
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
