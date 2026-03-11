import type { Meta, StoryObj } from '@storybook/vue3'
import BuiltInMenu from './index.vue'

const sampleItems = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
  { id: 'help', label: 'Help', disabled: true },
]

const meta: Meta<typeof BuiltInMenu> = {
  title: 'Components/BuiltInMenu',
  component: BuiltInMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A structured vertical menu component for navigation or interactive options. Supports active item highlighting, disabled items, outlined variant, and href links. Uses v-model for active item tracking.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text' },
    outlined: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items: sampleItems, modelValue: 'home' },
}

export const Outlined: Story = {
  args: { items: sampleItems, modelValue: 'home', outlined: true },
}

export const WithActive: Story = {
  args: { items: sampleItems, modelValue: 'profile', outlined: true },
}
