import type { Meta, StoryObj } from '@storybook/vue3'
import StepperCompact from './index.vue'

const meta: Meta<typeof StepperCompact> = {
  title: 'Components/StepperCompact',
  component: StepperCompact,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A compact step indicator showing a circular progress ring with the current/total step count, a label, and optional description. Ideal for space-constrained layouts where a full stepper is too large.',
      },
    },
  },
  argTypes: {
    value: { control: 'number' },
    maxSteps: { control: 'number' },
    label: { control: 'text' },
    description: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 1, maxSteps: 4, label: 'Personal Information' },
}

export const SecondStep: Story = {
  args: { value: 2, maxSteps: 4, label: 'Shipping Address', description: 'Enter your delivery address' },
}

export const LastStep: Story = {
  args: { value: 4, maxSteps: 4, label: 'Review & Confirm', description: 'Check your order before submitting' },
}

export const WithDescription: Story = {
  args: { value: 1, maxSteps: 3, label: 'Account Setup', description: 'Create your account credentials' },
}
