import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from './index.vue'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    appearance: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'inverse'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
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
