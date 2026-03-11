import type { Meta, StoryObj } from '@storybook/vue3'
import Select from './index.vue'

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm'] },
    disabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { text: 'Portugal', value: 'pt' },
  { text: 'Spain', value: 'es' },
  { text: 'France', value: 'fr' },
  { text: 'Germany', value: 'de', disabled: true },
]

export const Default: Story = { args: { id: 'sel-default', options, placeholder: 'Select a country' } }
export const WithValue: Story = { args: { id: 'sel-value', options, modelValue: 'pt' } }
export const Invalid: Story = { args: { id: 'sel-invalid', options, isInvalid: true, placeholder: 'Required' } }
export const Disabled: Story = { args: { id: 'sel-disabled', options, disabled: true, modelValue: 'es' } }
export const Small: Story = { args: { id: 'sel-small', options, size: 's', placeholder: 'Select...' } }
