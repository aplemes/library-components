import type { Meta, StoryObj } from '@storybook/vue3'
import OptionListbox from './index.vue'

const options = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
  { value: 'delta', label: 'Delta' },
  { value: 'epsilon', label: 'Epsilon', disabled: true },
]

const meta: Meta<typeof OptionListbox> = {
  title: 'Components/OptionListbox',
  component: OptionListbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A scrollable listbox of selectable options. Supports single/multi-select, optional search input, and disabled options.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text' },
    open: { control: 'boolean' },
    multiple: { control: 'boolean' },
    readonly: { control: 'boolean' },
    search: { control: 'boolean' },
    searchPlaceholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    options,
    open: false,
  },
}

export const Open: Story = {
  args: {
    modelValue: '',
    options,
    open: true,
  },
}

export const MultiSelect: Story = {
  args: {
    modelValue: ['alpha', 'gamma'],
    options,
    open: true,
    multiple: true,
  },
}

export const WithSearch: Story = {
  args: {
    modelValue: '',
    options,
    open: true,
    search: true,
    searchPlaceholder: 'Filter options...',
  },
}
