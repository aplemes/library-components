import type { Meta, StoryObj } from '@storybook/vue3'
import Select from './index.vue'

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled native `<select>` dropdown rendered from an options array. Supports an optional placeholder option, two sizes, invalid state, disabled state and a read-only appearance. Per-option `disabled` and custom HTML attributes are also supported.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the select element.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for form submission.',
      control: 'text',
    },
    options: {
      description: 'Array of option objects, each with `text`, `value`, and optional `disabled` and `attributes` fields.',
    },
    modelValue: {
      description: 'Currently selected value. Use with `v-model`.',
      control: 'text',
    },
    placeholder: {
      description: 'Text for a disabled placeholder option shown at the top of the list.',
      control: 'text',
    },
    size: {
      description: 'Size of the select control.',
      control: 'select',
      options: ['s', 'm'],
    },
    disabled: {
      description: 'Disables the select control, preventing interaction.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Applies error styling and signals a validation error.',
      control: 'boolean',
    },
    readonly: {
      description: 'Makes the select appear read-only by disabling pointer events and applying a grey background.',
      control: 'boolean',
    },
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
