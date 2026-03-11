import type { Meta, StoryObj } from '@storybook/vue3'
import Radio from './index.vue'

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    modelValue: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'r-default', label: 'Option A', modelValue: false } }
export const Checked: Story = { args: { id: 'r-checked', label: 'Selected option', modelValue: true } }
export const Disabled: Story = { args: { id: 'r-disabled', label: 'Disabled option', disabled: true } }
export const Invalid: Story = { args: { id: 'r-invalid', label: 'Required option', isInvalid: true } }
