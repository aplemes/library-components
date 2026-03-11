import type { Meta, StoryObj } from '@storybook/vue3'
import Loader from './index.vue'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Animated spinning SVG loader used to indicate loading or processing states. Supports four sizes, three color appearances and an optional descriptive text label rendered below the spinner.',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Size of the spinner icon.',
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
    },
    appearance: {
      description: 'Color of the spinner.',
      control: 'select',
      options: ['standard', 'accent', 'inverse'],
    },
    text: {
      description: 'Optional descriptive text rendered below the spinner (e.g. "Loading...").',
      control: 'text',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
export const Small: Story = { args: { size: 's' } }
export const Large: Story = { args: { size: 'l' } }
export const WithText: Story = { args: { text: 'Loading...' } }
export const Accent: Story = { args: { appearance: 'accent' } }
