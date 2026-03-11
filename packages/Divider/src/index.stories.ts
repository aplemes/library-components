import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from './index.vue'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A thin rule used to separate sections of content. Supports horizontal and vertical orientations, multiple color appearances and three thickness sizes. An optional slot allows placing a label (e.g. "OR") in the middle of the line.',
      },
    },
  },
  argTypes: {
    orientation: {
      description: 'Direction of the dividing line.',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    appearance: {
      description: 'Color tone of the divider line.',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverse'],
    },
    size: {
      description: 'Thickness of the divider line.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
export const Secondary: Story = { args: { appearance: 'secondary' } }
export const Medium: Story = { args: { size: 'm' } }
export const WithLabel: Story = {
  args: {},
  render: (args) => ({
    components: { Divider },
    setup() { return { args } },
    template: '<Divider v-bind="args"><span style="padding: 0 8px; font-size: 12px; color: #808080">OR</span></Divider>',
  }),
}
