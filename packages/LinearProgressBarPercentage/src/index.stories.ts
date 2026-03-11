import type { Meta, StoryObj } from '@storybook/vue3'
import LinearProgressBarPercentage from './index.vue'
const meta: Meta<typeof LinearProgressBarPercentage> = {
  title: 'Components/LinearProgressBarPercentage',
  component: LinearProgressBarPercentage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A horizontal progress bar with a fixed height that displays the percentage value as a label inside the colored fill. The fill width animates proportionally to the 0–100 value.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'Current progress value between 0 and 100. Displayed as a percentage label inside the fill.',
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { value: 65 } }
export const Empty: Story = { args: { value: 0 } }
export const Full: Story = { args: { value: 100 } }
export const Quarter: Story = { args: { value: 25 } }
