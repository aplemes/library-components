import type { Meta, StoryObj } from '@storybook/vue3'
import Tabs from './index.vue'

const sampleTabs = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
]

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A tab navigation component that allows users to switch between different sections. Supports active tab highlighting, disabled tabs, optional divider, and centered layout. Uses v-model for active tab control.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text' },
    description: { control: 'text' },
    divider: { control: 'boolean' },
    centered: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { tabs: sampleTabs, modelValue: 0 },
}

export const WithDivider: Story = {
  args: { tabs: sampleTabs, modelValue: 0, divider: true },
}

export const Centered: Story = {
  args: { tabs: sampleTabs, modelValue: 0, centered: true },
}

export const WithDisabled: Story = {
  args: {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'profile', label: 'Profile' },
      { id: 'settings', label: 'Settings', disabled: true },
    ],
    modelValue: 0,
  },
}
