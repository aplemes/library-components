import type { Meta, StoryObj } from '@storybook/vue3'
import StepperInline from './index.vue'

const sampleSteps = [
  { label: 'Cart' },
  { label: 'Address' },
  { label: 'Payment' },
  { label: 'Review' },
]

const meta: Meta<typeof StepperInline> = {
  title: 'Components/StepperInline',
  component: StepperInline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A horizontal compact stepper that shows progress through multiple steps. Completed steps show a check icon, the current step circle is highlighted, and separators appear between steps. Useful for compact header-level progress indicators.',
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

export const Complete: Story = {
  args: { steps: sampleSteps, currentStep: 4 },
}
