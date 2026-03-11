import type { Meta, StoryObj } from '@storybook/vue3'
import PhoneNumber from './index.vue'

const meta: Meta<typeof PhoneNumber> = {
  title: 'Components/PhoneNumber',
  component: PhoneNumber,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A phone number input with a country code selector prefix. Supports common countries, validation state, size variants, and disabled/readonly modes.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    modelValue: { control: 'text' },
    defaultCountry: {
      control: 'select',
      options: ['PT', 'ES', 'FR', 'DE', 'GB', 'US', 'BR'],
    },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['s', 'm'] },
    isInvalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'phone-default',
    defaultCountry: 'PT',
    placeholder: '912 345 678',
  },
}

export const Portugal: Story = {
  args: {
    id: 'phone-pt',
    defaultCountry: 'PT',
    modelValue: '+351912345678',
  },
}

export const Spain: Story = {
  args: {
    id: 'phone-es',
    defaultCountry: 'ES',
    placeholder: '612 345 678',
  },
}

export const Invalid: Story = {
  args: {
    id: 'phone-invalid',
    defaultCountry: 'PT',
    isInvalid: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'phone-disabled',
    defaultCountry: 'PT',
    modelValue: '+351912345678',
    disabled: true,
  },
}
