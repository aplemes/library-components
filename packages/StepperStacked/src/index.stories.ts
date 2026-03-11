import type { Meta, StoryObj } from '@storybook/vue3'
import StepperStacked from './index.vue'

const sampleSteps = [
  { label: 'Personal Information', description: 'Fill in your name and contact details' },
  { label: 'Address', description: 'Provide your shipping address' },
  { label: 'Payment', description: 'Enter payment details' },
  { label: 'Review & Confirm' },
]

const meta: Meta<typeof StepperStacked> = {
  title: 'Components/StepperStacked',
  component: StepperStacked,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A vertical stepper component that guides users through a multi-step process. Past steps show a check icon, the current step is highlighted, and future steps are shown as numbered circles. Supports optional description text per step.',
      },
    },
  },
  argTypes: {
    currentStep: { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { steps: sampleSteps, currentStep: 1 },
}

export const SecondStep: Story = {
  args: { steps: sampleSteps, currentStep: 2 },
}

export const ThirdStep: Story = {
  args: { steps: sampleSteps, currentStep: 3 },
}

export const LastStep: Story = {
  args: { steps: sampleSteps, currentStep: 4 },
}
