import type { Meta, StoryObj } from '@storybook/vue3'
import Combobox from './index.vue'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig', disabled: true },
]

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A combobox with a trigger button that opens a dropdown list of options. Supports single and multi-select, search, clear, and validation states.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'text' },
    multiple: { control: 'boolean' },
    size: { control: 'select', options: ['s', 'm'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    clearable: { control: 'boolean' },
    search: { control: 'boolean' },
    placeholder: { control: 'text' },
    searchPlaceholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    options,
    placeholder: 'Select a fruit',
  },
}

export const MultiSelect: Story = {
  args: {
    modelValue: ['apple', 'cherry'],
    options,
    multiple: true,
    placeholder: 'Select fruits',
  },
}

export const WithSearch: Story = {
  args: {
    modelValue: '',
    options,
    search: true,
    placeholder: 'Select a fruit',
    searchPlaceholder: 'Search fruits...',
  },
}

export const Clearable: Story = {
  args: {
    modelValue: 'banana',
    options,
    clearable: true,
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'apple',
    options,
    disabled: true,
  },
}
