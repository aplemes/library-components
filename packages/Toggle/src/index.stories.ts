import type { Meta, StoryObj } from '@storybook/vue3'
import Toggle from './index.vue'

const meta: Meta<typeof Toggle> = {
  title: 'Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm'] },
    disabled: { control: 'boolean' },
    modelValue: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'tog-default', label: 'Enable notifications', modelValue: false } }
export const Checked: Story = { args: { id: 'tog-checked', label: 'Feature enabled', modelValue: true } }
export const Disabled: Story = { args: { id: 'tog-disabled', label: 'Disabled toggle', disabled: true } }
export const Medium: Story = { args: { id: 'tog-medium', label: 'Medium size', size: 'm', modelValue: false } }
export const NoLabel: Story = { args: { id: 'tog-nolabel', modelValue: false } }
