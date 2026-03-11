import type { Meta, StoryObj } from '@storybook/vue3'
import CheckListMenu from './index.vue'

const sampleItems = [
  { id: 'step1', label: 'Personal Information' },
  { id: 'step2', label: 'Address Details' },
  { id: 'step3', label: 'Payment Method' },
  { id: 'step4', label: 'Review & Confirm', disabled: true },
]

const meta: Meta<typeof CheckListMenu> = {
  title: 'Components/CheckListMenu',
  component: CheckListMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A checklist-style menu where each item can be toggled as completed. Supports multiple selections via v-model (string array), outlined variant, and disabled items. Useful for multi-step navigation with flexible ordering.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'object' },
    outlined: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: sampleItems, modelValue: [] },
}

export const WithChecked: Story = {
  args: { items: sampleItems, modelValue: ['step1', 'step2'] },
}

export const Outlined: Story = {
  args: { items: sampleItems, modelValue: ['step1'], outlined: true },
}
