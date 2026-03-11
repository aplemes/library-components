import type { Meta, StoryObj } from '@storybook/vue3'
import StepperBottomBar from './index.vue'

const steps = [
  { label: 'Personal Info' },
  { label: 'Address' },
  { label: 'Payment' },
]

const meta: Meta<typeof StepperBottomBar> = {
  title: 'Components/StepperBottomBar',
  component: StepperBottomBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A persistent bottom navigation bar for multi-step forms. Provides Previous, Next, Validate, and optional Cancel buttons. On the last step, the Next button changes to a Validate button which emits the validate event.',
      },
    },
  },
  argTypes: {
    modelValue: { control: 'number' },
    cancel: { control: 'boolean' },
    cancelLabel: { control: 'text' },
    previousLabel: { control: 'text' },
    nextLabel: { control: 'text' },
    validateLabel: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { steps, modelValue: 0 },
}

export const MiddleStep: Story = {
  args: { steps, modelValue: 1 },
}

export const LastStep: Story = {
  args: { steps, modelValue: 2 },
}

export const WithCancel: Story = {
  args: { steps, modelValue: 1, cancel: true, cancelLabel: 'Cancel' },
}
