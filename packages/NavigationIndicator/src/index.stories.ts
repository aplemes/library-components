import type { Meta, StoryObj } from '@storybook/vue3'
import NavigationIndicator from './index.vue'

const meta: Meta<typeof NavigationIndicator> = {
  title: 'Components/NavigationIndicator',
  component: NavigationIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A dot-based navigation indicator for carousels, onboarding flows, or media players. Clicking a dot emits update:modelValue with the index. Supports prev/next arrow buttons (action prop) and an optional play/pause control (player prop).',
      },
    },
  },
  argTypes: {
    steps: { control: 'number' },
    modelValue: { control: 'number' },
    action: { control: 'boolean' },
    player: { control: 'boolean' },
    label: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { steps: 4, modelValue: 0 },
}

export const WithActions: Story = {
  args: { steps: 4, modelValue: 1, action: true },
}

export const ManySteps: Story = {
  args: { steps: 8, modelValue: 3, action: true },
}

export const WithPlayer: Story = {
  args: { steps: 5, modelValue: 0, player: true, label: 'Play slideshow' },
}
