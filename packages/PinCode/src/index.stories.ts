import type { Meta, StoryObj } from '@storybook/vue3'
import PinCode from './index.vue'

const meta: Meta<typeof PinCode> = {
  title: 'Components/PinCode',
  component: PinCode,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A PIN code input component with individual digit fields that auto-advance focus. Supports custom length, validation states, and disabled/readonly modes.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    length: { control: 'number' },
    modelValue: { control: 'text' },
    isInvalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'pin-default',
    length: 4,
  },
}

export const Length6: Story = {
  args: {
    id: 'pin-6',
    length: 6,
  },
}

export const Invalid: Story = {
  args: {
    id: 'pin-invalid',
    length: 4,
    isInvalid: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'pin-disabled',
    length: 4,
    modelValue: '1234',
    disabled: true,
  },
}
