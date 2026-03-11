import type { Meta, StoryObj } from '@storybook/vue3'
import DatePicker from './index.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A date input component with support for validation states, sizes, and an optional clear button.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    modelValue: { control: 'text' },
    isInvalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['s', 'm'] },
    readonly: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    clearLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'date-default',
  },
}

export const WithValue: Story = {
  args: {
    id: 'date-value',
    modelValue: '2024-06-15',
  },
}

export const Invalid: Story = {
  args: {
    id: 'date-invalid',
    isInvalid: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'date-disabled',
    disabled: true,
    modelValue: '2024-01-01',
  },
}

export const Clearable: Story = {
  args: {
    id: 'date-clearable',
    modelValue: '2024-06-15',
    isClearable: true,
    clearLabel: 'Clear date',
  },
}
