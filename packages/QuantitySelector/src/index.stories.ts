import type { Meta, StoryObj } from '@storybook/vue3'
import QuantitySelector from './index.vue'
const meta: Meta<typeof QuantitySelector> = {
  title: 'Form/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A numeric stepper input with increment and decrement buttons. Enforces configurable `min`, `max` and `step` bounds, clamping the value automatically. Supports read-only mode (hides buttons), two sizes, invalid state and disabled state.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the number input element.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for form submission.',
      control: 'text',
    },
    modelValue: {
      description: 'Current numeric value. Use with `v-model`.',
      control: 'number',
    },
    min: {
      description: 'Minimum allowed value. The decrement button is disabled when the current value equals `min`.',
      control: 'number',
    },
    max: {
      description: 'Maximum allowed value. The increment button is disabled when the current value equals `max`.',
      control: 'number',
    },
    step: {
      description: 'Amount added or subtracted on each increment or decrement action.',
      control: 'number',
    },
    size: {
      description: 'Size of the selector.',
      control: 'select',
      options: ['s', 'm'],
    },
    disabled: {
      description: 'Disables the input and both buttons.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Applies error styling to the component.',
      control: 'boolean',
    },
    readonly: {
      description: 'Hides the increment and decrement buttons, making the field read-only.',
      control: 'boolean',
    },
    incrementLabel: {
      description: 'Accessible aria-label for the increment button.',
      control: 'text',
    },
    decrementLabel: {
      description: 'Accessible aria-label for the decrement button.',
      control: 'text',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { id: 'qty-default', modelValue: 1, min: 1, max: 10 } }
export const WithStep: Story = { args: { id: 'qty-step', modelValue: 5, min: 0, max: 100, step: 5 } }
export const Small: Story = { args: { id: 'qty-small', size: 's', modelValue: 1 } }
export const Disabled: Story = { args: { id: 'qty-disabled', modelValue: 3, disabled: true } }
export const Invalid: Story = { args: { id: 'qty-invalid', modelValue: 0, isInvalid: true } }
